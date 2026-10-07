import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import type { Attraction } from '@/data/types';

const KEY = 'dislizney.progress.v1';

/** questId -> whether it earned a star (trivia only earns one when right first try). */
type Done = Record<string, { star: boolean }>;

type ProgressValue = {
  ready: boolean;
  done: Done;
  complete: (questId: string, star: boolean) => void;
  reset: () => void;
  totalStars: number;
};

const ProgressContext = createContext<ProgressValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [done, setDone] = useState<Done>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((raw) => raw && setDone(JSON.parse(raw)))
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  const save = useCallback((next: Done) => {
    AsyncStorage.setItem(KEY, JSON.stringify(next)).catch(() => {});
  }, []);

  const complete = useCallback(
    (questId: string, star: boolean) => {
      setDone((prev) => {
        if (prev[questId]) return prev;
        const next = { ...prev, [questId]: { star } };
        save(next);
        return next;
      });
    },
    [save],
  );

  const reset = useCallback(() => {
    setDone({});
    save({});
  }, [save]);

  const value = useMemo(
    () => ({
      ready,
      done,
      complete,
      reset,
      totalStars: Object.values(done).filter((d) => d.star).length,
    }),
    [ready, done, complete, reset],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}

export function attractionProgress(attraction: Attraction, done: Done) {
  const total = attraction.quests.length;
  const finished = attraction.quests.filter((q) => done[q.id]).length;
  const stars = attraction.quests.filter((q) => done[q.id]?.star).length;
  return { total, finished, stars };
}
