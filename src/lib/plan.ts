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
 * and riddles anchored in it, and its photo spots spread along the way.
 * Nothing from other rides or general games: if a very long wait uses it
 * all, the story simply ends.
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

  const isSpy = (q: Quest) => q.type === 'spy';
  const own = attraction.quests.filter((q) => !isPhoto(q) && !isSpy(q));
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

  // Look-around moments follow the queue: they're listed in the order you
  // walk past things, so they stay in that order, spread evenly along the line,
  // with the ride's photo spots tucked in between.
  const lookAround: PlannedQuest[] = [];
  const spies = attraction.quests.filter(isSpy);
  const photos = plan(attraction.quests.filter(isPhoto));
  const gap = Math.max(1, Math.round(spies.length / Math.max(1, photos.length)));
  spies.forEach((quest, i) => {
    lookAround.push({ quest });
    if ((i + 1) % gap === 0 && photos.length) lookAround.push(photos.shift()!);
  });
  lookAround.push(...photos);

  const every = (mixed.length + lookAround.length) / Math.max(1, lookAround.length);
  lookAround.forEach((pq, i) => mixed.splice(Math.min(mixed.length, Math.round(1 + i * every)), 0, pq));

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
