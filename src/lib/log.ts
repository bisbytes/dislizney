import { Platform } from 'react-native';

/**
 * Privacy-safe logging. Only a fixed list of event names is ever recorded, so
 * nothing about a person (names, photos, captions, places, ids) can end up in
 * a log. Messages go to the developer console in development; in production
 * the only thing that leaves the phone is an anonymous count of the event
 * name plus the platform (web, iOS or Android), sent to the board service
 * when it's set up. No ids, no cookies, nothing stored on the phone.
 */

export const EVENTS = [
  'share_picture_ok',
  'share_picture_failed',
  'share_picture_slow',
  'day_picture_ok',
  'day_picture_failed',
  'day_picture_slow',
  'save_photos_failed',
] as const;
export type AppEvent = (typeof EVENTS)[number];

const BASE = process.env.EXPO_PUBLIC_BOARD_URL?.replace(/\/$/, '');
const platform = Platform.OS === 'ios' || Platform.OS === 'android' ? Platform.OS : 'web';

type Level = 'debug' | 'info' | 'warn' | 'error';
const dev = typeof __DEV__ !== 'undefined' && __DEV__;

function write(level: Level, message: string) {
  if (!dev && (level === 'debug' || level === 'info')) return;
  console[level === 'debug' ? 'log' : level](`[once-upon-a-line] ${message}`);
}

export const log = {
  debug: (message: string) => write('debug', message),
  info: (message: string) => write('info', message),
  warn: (message: string) => write('warn', message),
  error: (message: string) => write('error', message),
};

/** Notes that something happened. Counted anonymously; never throws and never waits. */
export function track(event: AppEvent) {
  write(event.endsWith('_ok') ? 'info' : 'warn', event);
  if (!BASE) return;
  fetch(`${BASE}/api/event`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event, platform }),
    keepalive: true,
  }).catch(() => {
    // Best-effort, like the visit counts.
  });
}

/** True when a failure was our own timeout rather than the picture code throwing. */
export const isSlow = (e: unknown) => e instanceof Error && e.message === 'slow';
