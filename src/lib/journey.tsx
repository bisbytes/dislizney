import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { getAttraction } from '@/data/parks';
import { keepBrowserData } from '@/lib/backup';
import { deletePhotos } from '@/lib/photos';

/** One line in progress. Only one at a time: you can only stand in one line! */
export type LineSession = {
  id: string;
  attractionId: string;
  waitMinutes: number;
  startedAt: number;
  /** Extra minutes of play added after the planned story ran out. */
  bonusMinutes: number;
  done: Record<string, { star: boolean }>;
  /** What was picked in Would You Rather quests, kept for the keepsake. */
  picks: string[];
  /** Photo spots taken in this line, by quest id. */
  photos?: Record<string, string>;
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
};

const KEY = 'dislizney.journey.v1';

type Stored = { session: LineSession | null; keepsakes: Keepsake[] };

type JourneyValue = Stored & {
  ready: boolean;
  startLine: (attractionId: string, waitMinutes: number) => LineSession;
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
    (attractionId: string, waitMinutes: number) => {
      const session: LineSession = {
        id: newId(),
        attractionId,
        waitMinutes,
        startedAt: Date.now(),
        bonusMinutes: 0,
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
      fact: facts.length ? facts[Math.floor(Math.random() * facts.length)].text : '',
    };
    commit((s) => ({ session: null, keepsakes: [keepsake, ...s.keepsakes] }));
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
    }),
    [state, ready, startLine, updateSession, finishLine, cancelLine, updateKeepsake, deleteKeepsake, importKeepsakes],
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

export function keepsakeCaption(k: Keepsake) {
  const ref = getAttraction(k.attractionId);
  const ride = ref?.attraction.name ?? 'a ride';
  const park = ref?.park.name ?? 'Walt Disney World';
  const line =
    `I turned a ${waitedMinutes(k)}-minute wait for ${ride} into a storybook adventure! ` +
    `⭐ ${k.stars} stars earned in line.` +
    (k.note ? ` “${k.note}”` : '');
  const tags = ['#dislizney', '#LineTimeAdventures', hashtag(park), hashtag(ride), '#WaltDisneyWorld'];
  return `${line}\n\n${tags.join(' ')}`;
}

export function photoCaption(attractionId: string) {
  const ref = getAttraction(attractionId);
  const ride = ref?.attraction.name ?? 'the line';
  const park = ref?.park.name ?? 'Walt Disney World';
  const tags = [
    '#dislizney',
    '#LineTimeAdventures',
    '#DisneyPhotoSpot',
    hashtag(park),
    hashtag(ride),
    '#WaltDisneyWorld',
  ];
  return `📸 Photo spot in line for ${ride}!\n\n${tags.join(' ')}`;
}

export function dayCaption(keepsakes: Keepsake[]) {
  const minutes = keepsakes.reduce((n, k) => n + waitedMinutes(k), 0);
  const stars = keepsakes.reduce((n, k) => n + k.stars, 0);
  const rides = keepsakes.map((k) => getAttraction(k.attractionId)?.attraction.name).filter(Boolean) as string[];
  const parks = [
    ...new Set(keepsakes.map((k) => getAttraction(k.attractionId)?.park.name).filter(Boolean)),
  ] as string[];
  const tags = ['#dislizney', '#LineTimeAdventures', ...parks.map(hashtag), '#WaltDisneyWorld'];
  return (
    `My Disney day: ${rides.length} rides, ${minutes} minutes of lines turned into adventures, and ⭐ ${stars} stars! ` +
    `${rides.join(' · ')}\n\n${tags.join(' ')}`
  );
}
