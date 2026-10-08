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
  photo: 2,
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

/** Unseen quests first, keeping relative order otherwise. */
function unseenFirst(items: PlannedQuest[], seen: Set<string>) {
  return [...items.filter((p) => !seen.has(p.quest.id)), ...items.filter((p) => seen.has(p.quest.id))];
}

/**
 * The full ordered list of activities for one line. Everything is about the
 * ride you're in line for: its trivia and facts, mixed with I Spy, challenges
 * and riddles themed to it, and its photo spots spread along the way. Only
 * if a very long wait uses all of that do play-anywhere games fill in.
 */
export function buildQueue(ref: AttractionRef, seed: string, seen: Set<string>): PlannedQuest[] {
  const rand = seeded(seed);
  const { attraction } = ref;
  const isPhoto = (q: Quest) => q.type === 'photo';
  const isFact = (q: Quest) =>
    q.type === 'trivia' || q.type === 'truefalse' || q.type === 'guess' || q.type === 'order';
  const plan = (qs: Quest[]) =>
    unseenFirst(
      qs.map((quest) => ({ quest })),
      seen,
    );

  const own = attraction.quests.filter((q) => !isPhoto(q));
  // The first few quests are hand-picked openers; the rest are shuffled per visit.
  const openers = own.slice(0, 3);
  const rest = shuffle(own.slice(3), rand);
  const facts = plan(rest.filter(isFact));
  const play = plan(rest.filter((q) => !isFact(q)));

  // Two facts, then one game, repeating.
  const mixed: PlannedQuest[] = openers.map((quest) => ({ quest }));
  let f = 0;
  let p = 0;
  while (f < facts.length || p < play.length) {
    for (let k = 0; k < 2 && f < facts.length; k++) mixed.push(facts[f++]);
    if (p < play.length) mixed.push(play[p++]);
  }

  // Photo spots: this ride's first, spread along the line as it moves.
  const photos = [
    ...plan(attraction.quests.filter(isPhoto)),
    ...plan(shuffle(anywhereQuests.filter(isPhoto), rand)).slice(0, 3),
  ];
  for (let i = 0; i < photos.length; i++) {
    const at = 2 + i * 7;
    if (at > mixed.length) break;
    mixed.splice(at, 0, photos[i]);
  }

  // Extra-long waits: play-anywhere games after the ride's own content.
  mixed.push(
    ...plan(
      shuffle(
        anywhereQuests.filter((q) => !isPhoto(q)),
        rand,
      ),
    ),
  );

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
