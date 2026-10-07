import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAudioPlayer, setAudioModeAsync, type AudioPlayer } from 'expo-audio';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

const SOURCES = {
  correct: require('@/assets/sounds/correct.wav'),
  wrong: require('@/assets/sounds/wrong.wav'),
  pop: require('@/assets/sounds/pop.wav'),
  fanfare: require('@/assets/sounds/fanfare.wav'),
};

export type SoundName = keyof typeof SOURCES;

const KEY = 'dislizney.sound.v1';

type SoundValue = { enabled: boolean; toggle: () => void; play: (name: SoundName) => void };

const SoundContext = createContext<SoundValue>({ enabled: false, toggle: () => {}, play: () => {} });

/** Little sound effects for answers and celebrations. Can be muted from the cover. */
export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(true);
  const players = useRef<Partial<Record<SoundName, AudioPlayer>>>({});

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((v) => v === 'off' && setEnabled(false))
      .catch(() => {});
    // Respect the phone's silent switch: line games shouldn't blast sound.
    setAudioModeAsync({ playsInSilentMode: false }).catch(() => {});
    const current = players.current;
    return () => Object.values(current).forEach((p) => p?.remove());
  }, []);

  const play = useCallback(
    (name: SoundName) => {
      if (!enabled) return;
      try {
        let p = players.current[name];
        if (!p) {
          p = createAudioPlayer(SOURCES[name]);
          players.current[name] = p;
        }
        p.seekTo(0).catch(() => {});
        p.play();
      } catch {
        // Sound is a nice-to-have; never let it break a quest.
      }
    },
    [enabled],
  );

  const toggle = useCallback(() => {
    setEnabled((e) => {
      AsyncStorage.setItem(KEY, e ? 'off' : 'on').catch(() => {});
      return !e;
    });
  }, []);

  const value = useMemo(() => ({ enabled, toggle, play }), [enabled, toggle, play]);
  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useSound() {
  return useContext(SoundContext);
}
