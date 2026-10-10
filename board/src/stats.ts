import { DurableObject } from 'cloudflare:workers';

/**
 * Anonymous site stats for the admin dashboard.
 *
 * What it keeps: per park day, how many times the app was opened, the most
 * people using it at once, and opens per platform (web, iOS, Android). That's
 * all, plus a count per known event name (like a share picture that failed).
 * No ids, cookies, IP addresses or anything else about who opened it.
 * "Active now" lives in memory only and is never written down. Days older
 * than 30 are deleted.
 */

export type DayStats = {
  visits: number;
  peak: number;
  web: number;
  ios: number;
  android: number;
  /** How many times each known event happened (for example a picture that failed). Counts only. */
  events?: Record<string, number>;
};
export type Platform = 'web' | 'ios' | 'android';

/** How often an open app says it's still here. "Active now" counts one window of these. */
export const BEAT_SECONDS = 120;
const KEEP_DAYS = 30;

const empty = (): DayStats => ({ visits: 0, peak: 0, web: 0, ios: 0, android: 0 });

export class SiteStats extends DurableObject {
  /** Pings per minute, in memory only. */
  private beats = new Map<number, number>();

  private minute() {
    return Math.floor(Date.now() / 60_000);
  }

  private activeNow() {
    const now = this.minute();
    const windowMinutes = BEAT_SECONDS / 60;
    let n = 0;
    for (const [m, c] of this.beats) {
      if (m > now - windowMinutes) n += c;
      else if (m < now - 10) this.beats.delete(m);
    }
    return n;
  }

  private bumpPeak(stats: DayStats) {
    const active = this.activeNow();
    if (active > stats.peak) {
      stats.peak = active;
      return true;
    }
    return false;
  }

  /** The app was opened (counts a visit) or is still open (a beat). */
  async hello(day: string, kind: 'open' | 'beat', platform: Platform) {
    const m = this.minute();
    this.beats.set(m, (this.beats.get(m) ?? 0) + 1);
    const key = `day:${day}`;
    const stats = (await this.ctx.storage.get<DayStats>(key)) ?? empty();
    let changed = this.bumpPeak(stats);
    if (kind === 'open') {
      stats.visits += 1;
      stats[platform] += 1;
      changed = true;
    }
    if (changed) await this.ctx.storage.put(key, stats);
  }

  /** One more of a known event happened. Only the name's count goes up. */
  async event(day: string, name: string) {
    const key = `day:${day}`;
    const stats = (await this.ctx.storage.get<DayStats>(key)) ?? empty();
    stats.events = { ...stats.events, [name]: (stats.events?.[name] ?? 0) + 1 };
    await this.ctx.storage.put(key, stats);
  }

  async read(today: string) {
    const all = await this.ctx.storage.list<DayStats>({ prefix: 'day:' });
    const days = [...all.entries()]
      .map(([k, v]) => ({ day: k.slice(4), ...empty(), ...v }))
      .sort((a, b) => a.day.localeCompare(b.day));
    const stale = days.slice(0, Math.max(0, days.length - KEEP_DAYS));
    if (stale.length) await this.ctx.storage.delete(stale.map((d) => `day:${d.day}`));
    const recent = days.slice(-KEEP_DAYS);
    return {
      day: today,
      activeNow: this.activeNow(),
      today: recent.find((d) => d.day === today) ?? { day: today, ...empty() },
      days: recent,
    };
  }
}
