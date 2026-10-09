import type { AttractionRef } from '@/data/parks';
import type { Quest } from '@/data/types';

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

/** The kinds of content, as guests meet them. Used for rotating the mix and for the content table. */
export type Category = 'fact' | 'look' | 'play' | 'photo';

export const CATEGORY_LABEL: Record<Category, string> = {
  fact: 'Trivia & facts',
  look: 'Look around the line',
  play: 'Games & riddles',
  photo: 'Photo spots',
};

export function categoryOf(q: Quest): Category {
  switch (q.type) {
    case 'trivia':
    case 'truefalse':
    case 'guess':
    case 'order':
      return 'fact';
    case 'spy':
      return 'look';
    case 'photo':
      return 'photo';
    default:
      return 'play';
  }
}

/** Order the categories take turns in. Each visit starts the rotation somewhere new. */
const ROTATION: Category[] = ['fact', 'look', 'play', 'look', 'fact', 'photo'];

/**
 * The full ordered list of activities for one line. Everything is about the
 * ride you're in line for. Trivia, games and photo spots are mixed up fresh
 * each visit and take turns; the look-around items are the one thing that
 * isn't shuffled: they stay in the order you walk past them in the queue.
 * Nothing from other rides or general games: if a very long wait uses it
 * all, the story simply ends.
 */
export function buildQueue(ref: AttractionRef, seed: string, seen: Set<string>): PlannedQuest[] {
  const rand = seeded(seed);
  const quests = ref.attraction.quests;
  const plan = (qs: Quest[], shuffled: boolean) =>
    unseenFirst(
      (shuffled ? shuffle(qs, rand) : qs).map((quest) => ({ quest })),
      seen,
    );
  const pools: Record<Category, PlannedQuest[]> = {
    fact: plan(quests.filter((q) => categoryOf(q) === 'fact'), true),
    look: quests.filter((q) => categoryOf(q) === 'look').map((quest) => ({ quest })),
    play: plan(quests.filter((q) => categoryOf(q) === 'play'), true),
    photo: plan(quests.filter((q) => categoryOf(q) === 'photo'), true),
  };

  const start = Math.floor(rand() * ROTATION.length);
  const out: PlannedQuest[] = [];
  const total = Object.values(pools).reduce((n, p) => n + p.length, 0);
  for (let i = 0; out.length < total; i++) {
    const next = pools[ROTATION[(start + i) % ROTATION.length]].shift();
    if (next) out.push(next);
  }

  const used = new Set<string>();
  return out.filter((pq) => (used.has(pq.quest.id) ? false : (used.add(pq.quest.id), true)));
}

/**
 * Minutes between new activities when the pace matches the line: spread what we have
 * across the whole posted wait, about one every 2 minutes at most, never faster than 1.
 */
export function matchWaitMinutes(waitMinutes: number, available: number) {
  const n = Math.max(1, Math.min(available, Math.ceil(waitMinutes / 2)));
  return Math.max(1, waitMinutes / n);
}
