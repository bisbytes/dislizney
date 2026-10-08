import { getAttraction, getPark } from '@/data/parks';
import { BOARD_EMOJIS, isBoardName, MAX_RIDE_SCORE, parkDay, secondsUntilReset } from '@/lib/board-names';
import { boardStore, type BoardEntry } from '@/server/board-store';

/**
 * Today's public scoreboard. Only anonymous made-up names, emoji and points
 * are accepted, nothing else is read from the request, and every park day
 * erases itself at 3am Orlando time.
 */

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'no-store',
};

const json = (body: unknown, status = 200) => Response.json(body, { status, headers });

const keyFor = (parkId: string, day: string) => `dislizney:board:${parkId}:${day}`;

export function OPTIONS() {
  return new Response(null, { status: 204, headers });
}

export async function GET(request: Request) {
  const parkId = new URL(request.url).searchParams.get('park') ?? '';
  if (!getPark(parkId)) return json({ error: 'Unknown park' }, 400);
  const day = parkDay();
  const { rows, players } = await boardStore().top(keyFor(parkId, day), 50);
  return json({ park: parkId, day, players, rows, resetsInSeconds: secondsUntilReset() });
}

export async function POST(request: Request) {
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
  const entries: BoardEntry[] = [];
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
  const day = parkDay();
  const added = await boardStore().add(keyFor(ref.park.id, day), body.shareId, entries, secondsUntilReset());
  return json({ ok: true, added, day });
}
