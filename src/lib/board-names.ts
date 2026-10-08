/**
 * Anonymous names for the public scoreboard, shared by the app and the
 * board server. Nobody types a name for the public board: the app makes up a
 * fun one like "Brave Tiki 42", and the server only accepts names built from
 * these lists, so a real name can never end up on the board.
 */

export const BOARD_ADJECTIVES = [
  'Brave',
  'Sparkly',
  'Jolly',
  'Zippy',
  'Daring',
  'Dreamy',
  'Lucky',
  'Merry',
  'Mighty',
  'Nifty',
  'Plucky',
  'Quick',
  'Royal',
  'Sunny',
  'Swift',
  'Wild',
  'Giggly',
  'Bouncy',
  'Cosmic',
  'Curious',
  'Dazzling',
  'Fearless',
  'Golden',
  'Happy',
  'Jazzy',
  'Magic',
  'Peppy',
  'Starry',
  'Spooky',
  'Twinkly',
  'Witty',
  'Zany',
];

export const BOARD_NOUNS = [
  'Tiki',
  'Comet',
  'Pirate',
  'Teacup',
  'Rocket',
  'Dragon',
  'Lantern',
  'Pixie',
  'Parrot',
  'Firefly',
  'Mermaid',
  'Castle',
  'Carousel',
  'Elephant',
  'Explorer',
  'Ghost',
  'Hippo',
  'Jaguar',
  'Knight',
  'Lion',
  'Meteor',
  'Owl',
  'Panda',
  'Penguin',
  'Planet',
  'Puffin',
  'Robot',
  'Seahorse',
  'Starfish',
  'Tiger',
  'Turtle',
  'Unicorn',
];

/** Emoji allowed next to a board name. Matches the crew picker's choices. */
export const BOARD_EMOJIS = ['🦁', '🐭', '🧚', '🏴‍☠️', '🚀', '👑', '🐉', '🦄', '🐢', '🌟', '🎈', '🍦'];

/** Most points one person can score on one ride. Stops silly numbers. */
export const MAX_RIDE_SCORE = 60;

const pick = <T>(list: T[]) => list[Math.floor(Math.random() * list.length)];

export function makeBoardName(): string {
  return `${pick(BOARD_ADJECTIVES)} ${pick(BOARD_NOUNS)} ${10 + Math.floor(Math.random() * 90)}`;
}

export function randomBoardEmoji(): string {
  return pick(BOARD_EMOJIS);
}

export function isBoardName(name: unknown): name is string {
  if (typeof name !== 'string') return false;
  const m = /^([A-Z][a-z]+) ([A-Z][a-z]+) ([1-9]\d)$/.exec(name);
  return !!m && BOARD_ADJECTIVES.includes(m[1]) && BOARD_NOUNS.includes(m[2]);
}

/** Walt Disney World runs on Orlando time, so the board's "today" does too. */
const PARK_TZ = 'America/New_York';

function parkClock(now: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: PARK_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  return { y: get('year'), m: get('month'), d: get('day'), h: get('hour'), min: get('minute'), s: get('second') };
}

/** The park day, e.g. "2026-10-08". A day runs until 3am Orlando time, after the last fireworks crowd heads home. */
export function parkDay(now = new Date()): string {
  const t = parkClock(new Date(now.getTime() - 3 * 3600_000));
  return `${t.y}-${String(t.m).padStart(2, '0')}-${String(t.d).padStart(2, '0')}`;
}

/** Seconds until the board wipes itself at 3am Orlando time. */
export function secondsUntilReset(now = new Date()): number {
  const t = parkClock(now);
  const sinceThree = (((t.h - 3 + 24) % 24) * 60 + t.min) * 60 + t.s;
  return Math.max(60, 24 * 3600 - sinceThree);
}
