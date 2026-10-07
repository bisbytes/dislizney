import { anywhereQuests } from '@/data/pools/anywhere';
import type { AttractionRef } from '@/data/parks';
import type { Quest } from '@/data/types';

/**
 * Builds a line story sized to the wait. Rough minutes each activity takes
 * when a family plays together; used to fill the wait.
 */
export const MINUTES: Record<Quest['type'], number> = {
  trivia: 1.5,
  truefalse: 1,
  emoji: 1,
  guess: 1.5,
  order: 2,
  spy: 3,
  challenge: 3,
  wyr: 2,
};

export type PlannedQuest = { quest: Quest; from?: string };

function seeded(seed: string) {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0;
  return () => {
    h = (Math.imul(h, 1103515245) + 12345) >>> 0;
    return h / 4294967296;
  };
}

function shuffle<T>(items: T[], rand: () => number): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Takes one item from each list in turn, so neighboring rides alternate. */
function roundRobin<T>(lists: T[][]): T[] {
  const out: T[] = [];
  const max = Math.max(0, ...lists.map((l) => l.length));
  for (let i = 0; i < max; i++) for (const l of lists) if (l[i]) out.push(l[i]);
  return out;
}

/** Unseen quests first, keeping relative order otherwise. */
function unseenFirst(items: PlannedQuest[], seen: Set<string>) {
  return [...items.filter((p) => !seen.has(p.quest.id)), ...items.filter((p) => seen.has(p.quest.id))];
}

/**
 * The full ordered list of activities for one line: this ride's quests first,
 * then trivia about neighboring rides in the same land and the rest of the
 * park, mixed with play-anywhere games so it never feels like a quiz.
 */
export function buildQueue(ref: AttractionRef, seed: string, seen: Set<string>): PlannedQuest[] {
  const rand = seeded(seed);
  const { park, land, attraction } = ref;

  const own: PlannedQuest[] = attraction.quests.map((quest) => ({ quest }));

  const neighbors = unseenFirst(
    roundRobin(
      shuffle(
        land.attractions.filter((a) => a.id !== attraction.id),
        rand,
      ).map((a) => a.quests.map((quest) => ({ quest, from: a.name }))),
    ),
    seen,
  );

  const elsewhere = unseenFirst(
    roundRobin([
      ...shuffle(
        park.lands.filter((l) => l.id !== land.id).flatMap((l) => l.attractions),
        rand,
      ).map((a) => a.quests.map((quest) => ({ quest, from: a.name }))),
      (park.parkQuests ?? []).map((quest) => ({ quest, from: park.name })),
    ]),
    seen,
  );

  const facts = [...neighbors, ...elsewhere];
  const play = unseenFirst(
    shuffle(anywhereQuests, rand).map((quest) => ({ quest })),
    seen,
  );

  // After the ride's own quests: two facts, then one game, repeating.
  const mixed: PlannedQuest[] = [...own];
  let f = 0;
  let p = 0;
  while (f < facts.length || p < play.length) {
    for (let k = 0; k < 2 && f < facts.length; k++) mixed.push(facts[f++]);
    if (p < play.length) mixed.push(play[p++]);
  }

  const used = new Set<string>();
  return mixed.filter((pq) => (used.has(pq.quest.id) ? false : (used.add(pq.quest.id), true)));
}

/** How many quests from the front of the queue fill this many minutes. */
export function countForMinutes(queue: PlannedQuest[], minutes: number) {
  let total = 0;
  let n = 0;
  while (n < queue.length && total < minutes) total += MINUTES[queue[n++].quest.type];
  return Math.max(1, n);
}
