import { BRAND } from '@/lib/brand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { getAttraction } from '@/data/parks';
import { keepBrowserData } from '@/lib/backup';
import { deletePhotos } from '@/lib/photos';

/** Someone playing in team mode. Just a nickname and an emoji, kept on this device only. */
export type Player = { id: string; name: string; emoji: string };

/** One line in progress. Only one at a time: you can only stand in one line! */
export type LineSession = {
  id: string;
  attractionId: string;
  waitMinutes: number;
  startedAt: number;
  /** A new quest appears every this many minutes (default 3). */
  dripEvery?: number;
  /** How many quests have appeared so far; only ever grows. */
  shown?: number;
  /** When the latest quest appeared, so the next one is due lastAt + dripEvery. */
  lastAt?: number;
  done: Record<string, { star: boolean }>;
  /** What was picked in Would You Rather quests, kept for the keepsake. */
  picks: string[];
  /** Photo spots taken in this line, by quest id. */
  photos?: Record<string, string>;
  /** Team mode: who's playing, and their points so far. */
  players?: Player[];
  scores?: Record<string, number>;
};

/** A saved memory of one ride, made when you reach the front of the line. */
export type Keepsake = {
  id: string;
  attractionId: string;
  parkId: string;
  date: string;
  waitMinutes: number;
  /** Time the app was open in line, from Start to "We're boarding!". */
  minutesInLine: number;
  /** How long the wait really was, as confirmed by the guest. */
  actualMinutes?: number;
  stars: number;
  quests: number;
  picks: string[];
  fact: string;
  /** Photos taken at photo spots in the line, in the order they were taken. */
  photos?: string[];
  rating?: string;
  note?: string;
  /** Final scoreboard when played in team mode. */
  team?: { name: string; emoji: string; score: number }[];
  /** Shared to today's anonymous public scoreboard. */
  boardShared?: boolean;
};

const KEY = 'dislizney.journey.v1';

type Stored = {
  session: LineSession | null;
  keepsakes: Keepsake[];
  /** Players remembered for next time, so the family doesn't retype names. */
  crew?: Player[];
};

type JourneyValue = Stored & {
  ready: boolean;
  startLine: (attractionId: string, waitMinutes: number, players?: Player[]) => LineSession;
  saveCrew: (crew: Player[]) => void;
  updateSession: (fn: (s: LineSession) => LineSession) => void;
  finishLine: () => Keepsake | null;
  cancelLine: () => void;
  updateKeepsake: (id: string, patch: Partial<Keepsake>) => void;
  deleteKeepsake: (id: string) => void;
  /** Adds keepsakes from a backup, skipping any already in My Journey. Returns how many were new. */
  importKeepsakes: (list: Keepsake[]) => number;
};

const JourneyContext = createContext<JourneyValue | null>(null);

const newId = () => `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;

export function JourneyProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Stored>({ session: null, keepsakes: [] });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    keepBrowserData();
    AsyncStorage.getItem(KEY)
      .then((raw) => raw && setState({ session: null, keepsakes: [], ...JSON.parse(raw) }))
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  const commit = useCallback((fn: (s: Stored) => Stored) => {
    setState((prev) => {
      const next = fn(prev);
      AsyncStorage.setItem(KEY, JSON.stringify(next)).catch(() => {});
      return next;
    });
  }, []);

  const startLine = useCallback(
    (attractionId: string, waitMinutes: number, players?: Player[]) => {
      const session: LineSession = {
        players: players?.length ? players : undefined,
        scores: players?.length ? Object.fromEntries(players.map((p) => [p.id, 0])) : undefined,
        id: newId(),
        attractionId,
        waitMinutes,
        startedAt: Date.now(),
        done: {},
        picks: [],
      };
      commit((s) => ({ ...s, session }));
      return session;
    },
    [commit],
  );

  const updateSession = useCallback(
    (fn: (s: LineSession) => LineSession) => commit((s) => (s.session ? { ...s, session: fn(s.session) } : s)),
    [commit],
  );

  const finishLine = useCallback(() => {
    const session = state.session;
    if (!session) return null;
    const ref = getAttraction(session.attractionId);
    const facts = ref?.attraction.facts ?? [];
    const keepsake: Keepsake = {
      id: session.id,
      attractionId: session.attractionId,
      parkId: ref?.park.id ?? '',
      date: new Date().toISOString(),
      waitMinutes: session.waitMinutes,
      minutesInLine: Math.max(1, Math.round((Date.now() - session.startedAt) / 60000)),
      stars: Object.values(session.done).filter((d) => d.star).length,
      quests: Object.keys(session.done).length,
      picks: session.picks.slice(0, 3),
      photos: Object.values(session.photos ?? {}),
      team: session.players
        ?.map((p) => ({ name: p.name, emoji: p.emoji, score: session.scores?.[p.id] ?? 0 }))
        .sort((a, b) => b.score - a.score),
      fact: facts.length ? facts[Math.floor(Math.random() * facts.length)].text : '',
    };
    commit((s) => ({ ...s, session: null, keepsakes: [keepsake, ...s.keepsakes] }));
    return keepsake;
  }, [state.session, commit]);

  const cancelLine = useCallback(
    () =>
      commit((s) => {
        deletePhotos(Object.values(s.session?.photos ?? {}));
        return { ...s, session: null };
      }),
    [commit],
  );

  const updateKeepsake = useCallback(
    (id: string, patch: Partial<Keepsake>) =>
      commit((s) => ({ ...s, keepsakes: s.keepsakes.map((k) => (k.id === id ? { ...k, ...patch } : k)) })),
    [commit],
  );

  const deleteKeepsake = useCallback(
    (id: string) =>
      commit((s) => {
        deletePhotos(s.keepsakes.find((k) => k.id === id)?.photos ?? []);
        return { ...s, keepsakes: s.keepsakes.filter((k) => k.id !== id) };
      }),
    [commit],
  );

  const saveCrew = useCallback((crew: Player[]) => commit((s) => ({ ...s, crew })), [commit]);

  const importKeepsakes = useCallback(
    (list: Keepsake[]) => {
      const have = new Set(state.keepsakes.map((k) => k.id));
      const fresh = list.filter((k) => k.id && k.attractionId && !have.has(k.id));
      commit((s) => ({
        ...s,
        keepsakes: [...s.keepsakes, ...fresh].sort((a, b) => b.date.localeCompare(a.date)),
      }));
      return fresh.length;
    },
    [state.keepsakes, commit],
  );

  const value = useMemo(
    () => ({
      ...state,
      ready,
      startLine,
      updateSession,
      finishLine,
      cancelLine,
      updateKeepsake,
      deleteKeepsake,
      importKeepsakes,
      saveCrew,
    }),
    [
      state,
      ready,
      startLine,
      updateSession,
      finishLine,
      cancelLine,
      updateKeepsake,
      deleteKeepsake,
      importKeepsakes,
      saveCrew,
    ],
  );

  return <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>;
}

export function useJourney() {
  const ctx = useContext(JourneyContext);
  if (!ctx) throw new Error('useJourney must be used inside JourneyProvider');
  return ctx;
}

/** The best wait we know for a keepsake: the guest's real wait, else the posted one. */
export function waitedMinutes(k: Keepsake) {
  return k.actualMinutes ?? k.waitMinutes;
}

/** Hashtag-friendly version of a name: "Peter Pan’s Flight" → "PeterPansFlight". */
export function hashtag(name: string) {
  return (
    '#' +
    name
      .replace(/[’']/g, '')
      .replace(/["“”.,:!~&/-]/g, ' ')
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join('')
  );
}

/** Picks the same variation every time for the same keepsake, so the caption doesn't jump around. */
function pickFor<T>(seed: string, options: T[]): T {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) | 0;
  return options[Math.abs(h) % options.length];
}

/** A few hashtags people actually use, with the app's hashtag last. */
function rideTags(ride: string, park: string) {
  return [hashtag(ride), hashtag(park), '#WaltDisneyWorld', BRAND.hashtag].join(' ');
}

/** The post caption for one ride, written like the rider is telling friends about it. */
export function keepsakeCaption(k: Keepsake) {
  const ref = getAttraction(k.attractionId);
  const ride = ref?.attraction.name ?? 'a ride';
  const emoji = ref?.attraction.emoji ?? '🎢';
  const park = ref?.park.name ?? 'Walt Disney World';
  const team = k.team && k.team.length > 1 ? k.team : undefined;
  const we = team ? 'We' : 'I';
  const mins = (n: number) => `${n} minute${n === 1 ? '' : 's'}`;

  const opener =
    {
      '🤩': `Just rode ${ride} and it was pure magic! ${emoji}`,
      '😄': `Just rode ${ride}. So much fun! ${emoji}`,
      '😱': `Just survived ${ride}! ${emoji} Heart still racing.`,
      '😴': `Checked ${ride} off the list today. ${emoji}`,
    }[k.rating ?? ''] ??
    pickFor(k.id, [`Just rode ${ride}! ${emoji}`, `${ride}: done! ${emoji}`, `${we} just got off ${ride}! ${emoji}`]);

  const waited = waitedMinutes(k);
  const wait =
    k.actualMinutes !== undefined && k.actualMinutes !== k.waitMinutes
      ? `The sign said ${mins(k.waitMinutes)}, ${team ? 'we' : 'I'} waited ${k.actualMinutes}.`
      : `${mins(waited)} in line and it flew by.`;

  let fun = '';
  if (team) {
    const [first, second] = team;
    fun =
      first.score > second.score
        ? `${first.name} won our line trivia ${first.score} to ${second.score}! 👑`
        : `Our line trivia ended in a tie! 🤝`;
  } else if (k.stars > 0) {
    fun = `Got ${k.stars} trivia question${k.stars === 1 ? '' : 's'} right while ${team ? 'we' : 'I'} waited ⭐`;
  }

  const story = [opener, wait, fun].filter(Boolean).join(' ');
  return `${story}${k.note ? `\n\n${k.note}` : ''}\n\n${rideTags(ride, park)}`;
}

/** Caption for a photo taken at a photo spot in the line. */
export function photoCaption(attractionId: string) {
  const ref = getAttraction(attractionId);
  const ride = ref?.attraction.name ?? 'the line';
  const park = ref?.park.name ?? 'Walt Disney World';
  return `In line for ${ride} ${ref?.attraction.emoji ?? '📸'}\n\n${rideTags(ride, park)}`;
}

export const newPlayerId = () => Math.random().toString(36).slice(2, 9);

/** Caption for a whole day of rides. */
export function dayCaption(keepsakes: Keepsake[]) {
  const refs = keepsakes.map((k) => ({ k, ref: getAttraction(k.attractionId) })).filter((x) => x.ref);
  const rides = refs.map((x) => `${x.ref!.attraction.emoji} ${x.ref!.attraction.name}`);
  const parks = [...new Set(refs.map((x) => x.ref!.park.name))];
  const fave = refs.find((x) => x.k.rating === '🤩')?.ref?.attraction.name;
  const tags = [...parks.map(hashtag), '#WaltDisneyWorld', BRAND.hashtag].join(' ');
  return (
    `What a day at ${parks.join(' and ') || 'Walt Disney World'}! ${rides.length} ride${rides.length === 1 ? '' : 's'}:\n` +
    rides.join('\n') +
    (fave ? `\n\nFavorite: ${fave} 🤩` : '') +
    `\n\n${tags}`
  );
}
