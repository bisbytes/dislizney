import type { Quest } from '@/data/types';

/** What the family did in line besides trivia. Counts only, kept on this device. */
export type Played = { spotted: number; games: number; rather: number };

type Summarizable = { stars: number; quests: number; played?: Played };

const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

/** Counts the finished activities by kind, using the ride's own activity list. */
export function countPlayed(done: Record<string, unknown>, quests: Quest[]): Played {
  const played: Played = { spotted: 0, games: 0, rather: 0 };
  for (const q of quests) {
    if (!(q.id in done)) continue;
    if (q.type === 'spy') played.spotted++;
    else if (q.type === 'wyr') played.rather++;
    else if (q.type === 'emoji' || q.type === 'challenge') played.games++;
  }
  return played;
}

/** Short badges for a share picture: what was played, never how long it took. */
export function summaryChips(k: Summarizable): string[] {
  const chips: string[] = [];
  if (k.stars > 0) chips.push(`⭐ ${k.stars} trivia`);
  if (k.played?.spotted) chips.push(`👀 ${k.played.spotted} spotted`);
  if (k.played?.rather) chips.push(`🤔 ${plural(k.played.rather, 'pick')}`);
  if (k.played?.games) chips.push(`🎲 ${plural(k.played.games, 'game')}`);
  if (!chips.length && k.quests > 0) chips.push(`🎟️ ${plural(k.quests, 'activity', 'activities')}`);
  return chips;
}

/** The same for a whole day, added up over every ride. */
export function daySummaryChips(list: Summarizable[]): string[] {
  const total = list.reduce<Summarizable & { played: Played }>(
    (t, k) => ({
      stars: t.stars + k.stars,
      quests: t.quests + k.quests,
      played: {
        spotted: t.played.spotted + (k.played?.spotted ?? 0),
        games: t.played.games + (k.played?.games ?? 0),
        rather: t.played.rather + (k.played?.rather ?? 0),
      },
    }),
    { stars: 0, quests: 0, played: { spotted: 0, games: 0, rather: 0 } },
  );
  return summaryChips(total);
}

/** A sentence for a post caption: "I got 4 trivia questions right and spotted 3 hidden details while I waited in line". */
export function summarySentence(k: Summarizable): string {
  const parts: string[] = [];
  if (k.stars > 0) parts.push(`got ${plural(k.stars, 'trivia question')} right`);
  if (k.played?.spotted) parts.push(`spotted ${plural(k.played.spotted, 'hidden detail')}`);
  if (k.played?.rather) parts.push(`settled ${plural(k.played.rather, 'would-you-rather')}`);
  if (k.played?.games) parts.push(`played ${plural(k.played.games, 'game')}`);
  if (!parts.length) return '';
  const list = parts.length > 1 ? `${parts.slice(0, -1).join(', ')} and ${parts.at(-1)}` : parts[0];
  return `I ${list} while I waited in line ⭐`;
}
