import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { Platform } from 'react-native';

import type { AttractionRef } from '@/data/parks';
import { nearestAttraction } from './geo';

/**
 * Fun Fact Radar: while turned on, watches your location and, when you walk
 * up to an attraction, pops a fun fact about it (a local notification on
 * phones, an in-app banner everywhere).
 *
 * Only works while the app is open (foreground location). Background
 * geofencing can be added later with expo-task-manager in a dev build.
 */

/** Don't repeat the same attraction more often than this. */
const COOLDOWN_MS = 30 * 60 * 1000;

export type RadarPing = AttractionRef & { fact: string; at: number };

type RadarValue = {
  enabled: boolean;
  status: 'off' | 'asking' | 'on' | 'denied' | 'error';
  ping: RadarPing | null;
  start: () => Promise<void>;
  stop: () => void;
  dismiss: () => void;
};

const RadarContext = createContext<RadarValue | null>(null);

if (Platform.OS !== 'web') {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

export function RadarProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<RadarValue['status']>('off');
  const [ping, setPing] = useState<RadarPing | null>(null);
  const sub = useRef<Location.LocationSubscription | null>(null);
  const lastSeen = useRef<Record<string, number>>({});

  const onPosition = useCallback((loc: Location.LocationObject) => {
    const near = nearestAttraction({ lat: loc.coords.latitude, lng: loc.coords.longitude });
    if (!near) return;
    const id = near.attraction.id;
    const now = Date.now();
    if (now - (lastSeen.current[id] ?? 0) < COOLDOWN_MS) return;
    lastSeen.current[id] = now;

    const facts = near.attraction.facts;
    const fact = facts[Math.floor(Math.random() * facts.length)]?.text ?? near.attraction.blurb;
    setPing({ ...near, fact, at: now });

    if (Platform.OS !== 'web') {
      Notifications.scheduleNotificationAsync({
        content: {
          title: `${near.attraction.emoji} You're near ${near.attraction.name}!`,
          body: fact,
          data: { attractionId: id },
        },
        trigger: null,
      }).catch(() => {});
    }
  }, []);

  const start = useCallback(async () => {
    setStatus('asking');
    try {
      const { status: perm } = await Location.requestForegroundPermissionsAsync();
      if (perm !== 'granted') {
        setStatus('denied');
        return;
      }
      if (Platform.OS !== 'web') {
        if (Platform.OS === 'android') {
          await Notifications.setNotificationChannelAsync('fun-facts', {
            name: 'Fun facts nearby',
            importance: Notifications.AndroidImportance.DEFAULT,
          });
        }
        await Notifications.requestPermissionsAsync();
      }
      sub.current?.remove();
      sub.current = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 15, timeInterval: 10000 },
        onPosition,
      );
      setStatus('on');
    } catch {
      setStatus('error');
    }
  }, [onPosition]);

  const stop = useCallback(() => {
    sub.current?.remove();
    sub.current = null;
    setStatus('off');
  }, []);

  useEffect(() => () => sub.current?.remove(), []);

  return (
    <RadarContext.Provider
      value={{ enabled: status === 'on', status, ping, start, stop, dismiss: () => setPing(null) }}>
      {children}
    </RadarContext.Provider>
  );
}

export function useRadar() {
  const ctx = useContext(RadarContext);
  if (!ctx) throw new Error('useRadar must be used inside RadarProvider');
  return ctx;
}
