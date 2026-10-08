import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

import { makeBoardName, MAX_RIDE_SCORE, parkDay, randomBoardEmoji } from '@/lib/board-names';
import type { Keepsake } from '@/lib/journey';

/**
 * The opt-in public scoreboard. Only made-up names like "Brave Tiki 42",
 * an emoji and points are ever sent, and only when someone taps share.
 * Real nicknames from team mode never leave the phone.
 */

export type BoardRow = { name: string; emoji: string; score: number; rides: number };
export type Board = { park: string; day: string; players: number; rows: BoardRow[]; resetsInSeconds: number };

// On the web the board lives next to the app. Phone builds need the deployed address.
const BASE = process.env.EXPO_PUBLIC_BOARD_URL ?? (Platform.OS === 'web' ? '' : undefined);

export const boardAvailable = BASE !== undefined;

const KEY = 'dislizney-board-names';
type Names = { day: string; names: Record<string, { name: string; emoji: string }> };

function today() {
  try {
    return parkDay();
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

async function loadNames(): Promise<Names> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    const saved = raw ? (JSON.parse(raw) as Names) : undefined;
    // A fresh set of names every park day, so nobody can be followed from day to day.
    if (saved?.day === today()) return saved;
  } catch {
    // Start fresh.
  }
  return { day: today(), names: {} };
}

/** Today's board names on this phone, so "you" can be highlighted on the board. */
export async function myBoardNames(): Promise<Set<string>> {
  const { names } = await loadNames();
  return new Set(Object.values(names).map((n) => `${n.emoji} ${n.name}`));
}

/** True when this keepsake is from today's park day, so it can still go on today's board. */
export function canShareToBoard(k: Keepsake) {
  try {
    return boardAvailable && !k.boardShared && parkDay(new Date(k.date)) === today();
  } catch {
    return false;
  }
}

/** The anonymous names a keepsake would be shared under. Made up once a day per player. */
export async function boardNamesFor(k: Keepsake) {
  const saved = await loadNames();
  const people = k.team?.length
    ? k.team.map((p) => ({ key: `${p.emoji}${p.name}`, emoji: p.emoji, nickname: p.name, score: p.score }))
    : [{ key: 'me', emoji: undefined, nickname: undefined, score: k.stars }];
  const entries = people.map((p) => {
    const anon = saved.names[p.key] ?? { name: makeBoardName(), emoji: p.emoji ?? randomBoardEmoji() };
    saved.names[p.key] = anon;
    return { ...anon, nickname: p.nickname, score: p.score };
  });
  await AsyncStorage.setItem(KEY, JSON.stringify(saved)).catch(() => {});
  return entries;
}

export async function shareToBoard(k: Keepsake): Promise<boolean> {
  const entries = await boardNamesFor(k);
  const res = await fetch(`${BASE}/api/board`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ride: k.attractionId,
      shareId: k.id,
      entries: entries.map(({ name, emoji, score }) => ({ name, emoji, score: Math.min(MAX_RIDE_SCORE, score) })),
    }),
  });
  if (!res.ok) throw new Error(`Board error ${res.status}`);
  return true;
}

export async function fetchBoard(parkId: string): Promise<Board> {
  const res = await fetch(`${BASE}/api/board?park=${encodeURIComponent(parkId)}`);
  if (!res.ok) throw new Error(`Board error ${res.status}`);
  return res.json();
}
