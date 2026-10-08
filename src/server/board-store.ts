/**
 * Where today's public scoreboard lives. Each park day is a handful of keys
 * that erase themselves at 3am Orlando time, holding only anonymous board
 * names, emoji and points. No accounts, no IP addresses, no history.
 *
 * In production this is an Upstash Redis database reached over HTTPS, set up
 * with UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN. Without them
 * (local development) a short-lived in-memory board is used instead.
 */

export type BoardRow = { name: string; emoji: string; score: number; rides: number };
export type BoardEntry = { name: string; emoji: string; score: number };

type Store = {
  /** Adds one ride's points. Returns false if that ride was already shared. */
  add: (key: string, shareId: string, entries: BoardEntry[], ttlSeconds: number) => Promise<boolean>;
  top: (key: string, limit: number) => Promise<{ rows: BoardRow[]; players: number }>;
};

const member = (e: { name: string; emoji: string }) => `${e.emoji} ${e.name}`;
const split = (m: string) => {
  const i = m.indexOf(' ');
  return { emoji: m.slice(0, i), name: m.slice(i + 1) };
};

function upstash(url: string, token: string): Store {
  const call = async (commands: (string | number)[][]) => {
    const res = await fetch(`${url}/pipeline`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(commands),
    });
    if (!res.ok) throw new Error(`Board store error ${res.status}`);
    const out = (await res.json()) as { result?: unknown; error?: string }[];
    return out.map((r) => {
      if (r.error) throw new Error(r.error);
      return r.result;
    });
  };
  return {
    async add(key, shareId, entries, ttl) {
      const [fresh] = await call([
        ['SADD', `${key}:shared`, shareId],
        ['EXPIRE', `${key}:shared`, ttl],
      ]);
      if (!fresh) return false;
      await call([
        ...entries.flatMap((e) => [
          ['ZINCRBY', key, e.score, member(e)],
          ['HINCRBY', `${key}:rides`, member(e), 1],
        ]),
        ['EXPIRE', key, ttl],
        ['EXPIRE', `${key}:rides`, ttl],
      ]);
      return true;
    },
    async top(key, limit) {
      const [range, players] = (await call([
        ['ZRANGE', key, 0, limit - 1, 'REV', 'WITHSCORES'],
        ['ZCARD', key],
      ])) as [string[], number];
      const members = range.filter((_, i) => i % 2 === 0);
      const rides = members.length
        ? ((await call([['HMGET', `${key}:rides`, ...members]]))[0] as (string | null)[])
        : [];
      const rows = members.map((m, i) => ({
        ...split(m),
        score: Number(range[i * 2 + 1]),
        rides: Number(rides[i] ?? 1),
      }));
      return { rows, players: Number(players) };
    },
  };
}

function memory(): Store {
  const days = new Map<string, { expires: number; shared: Set<string>; rows: Map<string, BoardRow> }>();
  const day = (key: string, ttl = 0) => {
    let d = days.get(key);
    if (!d || d.expires < Date.now()) {
      d = { expires: Date.now() + ttl * 1000, shared: new Set(), rows: new Map() };
      days.set(key, d);
    }
    return d;
  };
  return {
    async add(key, shareId, entries, ttl) {
      const d = day(key, ttl);
      if (d.shared.has(shareId)) return false;
      d.shared.add(shareId);
      for (const e of entries) {
        const r = d.rows.get(member(e)) ?? { name: e.name, emoji: e.emoji, score: 0, rides: 0 };
        d.rows.set(member(e), { ...r, score: r.score + e.score, rides: r.rides + 1 });
      }
      return true;
    },
    async top(key, limit) {
      const d = days.get(key);
      if (!d || d.expires < Date.now()) return { rows: [], players: 0 };
      const rows = [...d.rows.values()].sort((a, b) => b.score - a.score);
      return { rows: rows.slice(0, limit), players: rows.length };
    },
  };
}

let store: Store | undefined;

export function boardStore(): Store {
  if (!store) {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    store = url && token ? upstash(url.replace(/\/$/, ''), token) : memory();
  }
  return store;
}
