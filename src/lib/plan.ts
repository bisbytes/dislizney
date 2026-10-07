import { anywhereQuests } from '@/data/pools/anywhere';
import type { AttractionRef } from '@/data/parks';
import type { Quest } from '@/data/types';

/**
 * Builds a line story sized to the wait. Rough minutes each activity takes
 * when a family plays together; used to fill each 10-minute "page".
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

export const PAGE_MINUTES = 10;

export type PlannedQuest = { quest: Quest; from?: string };
export type StoryPage = { quests: PlannedQuest[]; minutes: number };

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

/** Splits the queue into ~10-minute pages. */
export function paginate(queue: PlannedQuest[]): StoryPage[] {
  const pages: StoryPage[] = [];
  let current: StoryPage = { quests: [], minutes: 0 };
  for (const pq of queue) {
    current.quests.push(pq);
    current.minutes += MINUTES[pq.quest.type];
    if (current.minutes >= PAGE_MINUTES) {
      pages.push(current);
      current = { quests: [], minutes: 0 };
    }
  }
  if (current.quests.length) pages.push(current);
  return pages;
}

/** How many pages fill a wait of this many minutes. */
export function pagesForWait(waitMinutes: number) {
  return Math.max(1, Math.round(waitMinutes / PAGE_MINUTES));
}

const MIDDLE = [
  'The line shuffles forward. Somewhere up ahead, {ride} is waiting for you.',
  'A little closer now! Look around: every corner of this line has a story.',
  'Deep breath, adventurer. The best stories take their time.',
  'The crowd hums with excitement. You can almost hear {ride} from here.',
  'Halfway heroes don’t give up. Turn the page and keep the magic going!',
  'A breeze drifts by and the line creeps on. What will you discover next?',
  'Look how far you’ve come! The path to {ride} winds on.',
  'Every step forward is a step closer to the magic.',
];

/** Storybook narration that opens each page of the line story. */
export function pageNarration(index: number, planned: number, rideName: string) {
  const fill = (t: string) => t.replace('{ride}', rideName);
  if (index === 0)
    return fill('Once upon a time, a brave group joined the line for {ride}. Their adventure begins now!');
  if (index >= planned) return fill('A bonus page! The line is taking its time, so the story keeps going.');
  if (index === planned - 1) return fill('The end of the line is almost in sight. Get ready for {ride}!');
  return fill(MIDDLE[(index - 1) % MIDDLE.length]);
}
