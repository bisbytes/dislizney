/**
 * Posted wait times from queue-times.com (free, community-run; attribution
 * required: "Powered by Queue-Times.com"). Falls back quietly when offline or
 * blocked, and the person just picks their wait by hand.
 */
export type PostedWait = { minutes: number; open: boolean; updated: string };

const cache = new Map<number, { at: number; waits: Map<string, PostedWait> }>();
const FRESH_MS = 5 * 60 * 1000;

export function normalizeName(name: string) {
  return name
    .toLowerCase()
    .replace(/[’'"“”~:!.,]/g, '')
    .replace(/^the /, '')
    .replace(/&/g, 'and')
    .replace(/\s+/g, ' ')
    .trim();
}

export async function fetchPostedWaits(queueTimesId: number): Promise<Map<string, PostedWait>> {
  const hit = cache.get(queueTimesId);
  if (hit && Date.now() - hit.at < FRESH_MS) return hit.waits;
  const waits = new Map<string, PostedWait>();
  try {
    const res = await fetch(`https://queue-times.com/parks/${queueTimesId}/queue_times.json`);
    if (!res.ok) throw new Error(String(res.status));
    const json = await res.json();
    const rides = [...(json.rides ?? []), ...(json.lands ?? []).flatMap((l: { rides: unknown[] }) => l.rides ?? [])];
    for (const r of rides as { name: string; wait_time: number; is_open: boolean; last_updated: string }[]) {
      waits.set(normalizeName(r.name), { minutes: r.wait_time, open: r.is_open, updated: r.last_updated });
    }
    cache.set(queueTimesId, { at: Date.now(), waits });
  } catch {
    // Offline or blocked: no posted waits.
  }
  return waits;
}

/** Finds a ride's posted wait, tolerating small naming differences between sources. */
export function findWait(waits: Map<string, PostedWait>, rideName: string): PostedWait | undefined {
  const key = normalizeName(rideName);
  const exact = waits.get(key);
  if (exact) return exact;
  for (const [name, wait] of waits) {
    if (name.startsWith(key) || key.startsWith(name)) return wait;
  }
  return undefined;
}
