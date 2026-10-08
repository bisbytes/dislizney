import { useEffect } from 'react';
import { AppState, Platform } from 'react-native';

/**
 * Anonymous visit counts for the admin dashboard. The app says "open" once
 * when it starts and "beat" every two minutes while it's on screen. Only
 * those words and the platform (web, iOS or Android) are sent: no id, no
 * cookie, nothing stored on the phone. Off when the board service isn't set up.
 */

const BASE = process.env.EXPO_PUBLIC_BOARD_URL?.replace(/\/$/, '');
const BEAT_MS = 2 * 60 * 1000;

function hello(kind: 'open' | 'beat') {
  if (!BASE) return;
  fetch(`${BASE}/api/hello`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ kind, platform: Platform.OS === 'ios' || Platform.OS === 'android' ? Platform.OS : 'web' }),
    keepalive: true,
  }).catch(() => {
    // Stats are best-effort; never bother the person about them.
  });
}

function visible() {
  if (Platform.OS === 'web') return typeof document === 'undefined' || document.visibilityState !== 'hidden';
  return AppState.currentState === 'active';
}

export function useAppStats() {
  useEffect(() => {
    if (!BASE) return;
    hello('open');
    const t = setInterval(() => {
      if (visible()) hello('beat');
    }, BEAT_MS);
    return () => clearInterval(t);
  }, []);
}
