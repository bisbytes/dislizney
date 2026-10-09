import { DurableObject } from 'cloudflare:workers';

import { getAttraction, getPark, parks } from '../../src/data/parks';
import { BOARD_EMOJIS, isBoardName, MAX_RIDE_SCORE, parkDay, secondsUntilReset } from '../../src/lib/board-names';
import { type Platform, SiteStats } from './stats';

export { SiteStats };

/**
 * Today's public scoreboard for dislizney.
 *
 * What it keeps: made-up names like "Brave Tiki 42", an emoji and points,
 * plus the random ids of rides already shared (so one ride can't count
 * twice). That's all. No accounts, no real names, no IP addresses, no
 * request logs. Each park's board lives in one Durable Object and is
 * erased at 3am Orlando time every night.
 */

type Env = { BOARD: DurableObjectNamespace<ParkBoard>; STATS: DurableObjectNamespace<SiteStats> };
type Row = { name: string; emoji: string; score: number; rides: number };
type Entry = { name: string; emoji: string; score: number };

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'no-store',
};

const json = (body: unknown, status = 200) => Response.json(body, { status, headers });

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
    if (url.pathname === '/api/hello' || url.pathname === '/api/stats') return stats(request, url, env);
    if (url.pathname === '/api/waits' && request.method === 'GET') return waits(url);
    if (url.pathname !== '/api/board') return json({ error: 'Not found' }, 404);

    if (request.method === 'GET') {
      const park = url.searchParams.get('park') ?? '';
      if (!getPark(park)) return json({ error: 'Unknown park' }, 400);
      const { rows, players } = await env.BOARD.get(env.BOARD.idFromName(park)).top(50);
      return json({ park, day: parkDay(), players, rows, resetsInSeconds: secondsUntilReset() });
    }

    if (request.method === 'POST') {
      let body: { ride?: unknown; shareId?: unknown; entries?: unknown };
      try {
        body = await request.json();
      } catch {
        return json({ error: 'Bad request' }, 400);
      }
      const ref = typeof body.ride === 'string' ? getAttraction(body.ride) : undefined;
      if (!ref) return json({ error: 'Unknown ride' }, 400);
      if (typeof body.shareId !== 'string' || !/^[a-z0-9]{6,32}$/.test(body.shareId)) {
        return json({ error: 'Bad request' }, 400);
      }
      if (!Array.isArray(body.entries) || body.entries.length < 1 || body.entries.length > 8) {
        return json({ error: 'Bad request' }, 400);
      }
      const entries: Entry[] = [];
      for (const e of body.entries as Record<string, unknown>[]) {
        const score = e?.score;
        if (
          !isBoardName(e?.name) ||
          typeof e.emoji !== 'string' ||
          !BOARD_EMOJIS.includes(e.emoji) ||
          typeof score !== 'number' ||
          !Number.isInteger(score) ||
          score < 0 ||
          score > MAX_RIDE_SCORE
        ) {
          return json({ error: 'Bad entry' }, 400);
        }
        // Copy only the three allowed fields, so nothing else can be stored.
        entries.push({ name: e.name, emoji: e.emoji, score });
      }
      const added = await env.BOARD.get(env.BOARD.idFromName(ref.park.id)).add(body.shareId, entries);
      return json({ ok: true, added, day: parkDay() });
    }

    return json({ error: 'Method not allowed' }, 405);
  },
};

const QUEUE_TIMES_IDS = new Set(parks.map((p) => p.queueTimesId).filter((id): id is number => typeof id === 'number'));

/**
 * Posted wait times for the website. Queue-Times doesn't let web pages read
 * its feed directly, so the site asks here instead. Cloudflare caches each
 * park's feed for two minutes, which also keeps load on Queue-Times tiny.
 * Nothing about the request is kept.
 */
async function waits(url: URL): Promise<Response> {
  const park = Number(url.searchParams.get('park'));
  if (!QUEUE_TIMES_IDS.has(park)) return json({ error: 'Unknown park' }, 400);
  const upstream = await fetch(`https://queue-times.com/parks/${park}/queue_times.json`, {
    cf: { cacheTtl: 120, cacheEverything: true },
  }).catch(() => undefined);
  if (!upstream?.ok) return json({ error: 'Wait times unavailable' }, 502);
  return new Response(upstream.body, {
    headers: { ...headers, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=60' },
  });
}

const PLATFORMS: Platform[] = ['web', 'ios', 'android'];

/** Anonymous visit counts: the app says hello when it opens and every couple of minutes while open. */
async function stats(request: Request, url: URL, env: Env): Promise<Response> {
  const site = env.STATS.get(env.STATS.idFromName('site'));
  if (url.pathname === '/api/stats' && request.method === 'GET') return json(await site.read(parkDay()));
  if (url.pathname === '/api/hello' && request.method === 'POST') {
    let body: { kind?: unknown; platform?: unknown };
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Bad request' }, 400);
    }
    const kind = body.kind === 'open' || body.kind === 'beat' ? body.kind : undefined;
    const platform = PLATFORMS.find((p) => p === body.platform);
    if (!kind || !platform) return json({ error: 'Bad request' }, 400);
    // Only these two words are used; nothing about the request itself is kept.
    await site.hello(parkDay(), kind, platform);
    return json({ ok: true });
  }
  return json({ error: 'Method not allowed' }, 405);
}

/** One park's board for one park day. */
export class ParkBoard extends DurableObject<Env> {
  /** Wipes yesterday's board if the 3am alarm hasn't run yet, and makes sure tonight's is set. */
  private async today() {
    const day = parkDay();
    if ((await this.ctx.storage.get<string>('day')) !== day) {
      await this.ctx.storage.deleteAll();
      await this.ctx.storage.put('day', day);
    }
    if (!(await this.ctx.storage.getAlarm())) {
      await this.ctx.storage.setAlarm(Date.now() + secondsUntilReset() * 1000);
    }
  }

  async alarm() {
    await this.ctx.storage.deleteAll();
  }

  async add(shareId: string, entries: Entry[]): Promise<boolean> {
    await this.today();
    if (await this.ctx.storage.get(`shared:${shareId}`)) return false;
    await this.ctx.storage.put(`shared:${shareId}`, 1);
    for (const e of entries) {
      const key = `row:${e.emoji} ${e.name}`;
      const row = (await this.ctx.storage.get<Row>(key)) ?? { name: e.name, emoji: e.emoji, score: 0, rides: 0 };
      await this.ctx.storage.put(key, { ...row, score: row.score + e.score, rides: row.rides + 1 });
    }
    return true;
  }

  async top(limit: number): Promise<{ rows: Row[]; players: number }> {
    await this.today();
    const rows = [...(await this.ctx.storage.list<Row>({ prefix: 'row:' })).values()].sort((a, b) => b.score - a.score);
    return { rows: rows.slice(0, limit), players: rows.length };
  }
}
