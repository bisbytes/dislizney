import assert from 'node:assert/strict';
import { test } from 'node:test';

import type { Quest } from '@/data/types';
import { countPlayed, daySummaryChips, summaryChips, summarySentence } from './play-summary.ts';

const quests = [
  { id: 'a', type: 'spy' },
  { id: 'b', type: 'spy' },
  { id: 'c', type: 'wyr' },
  { id: 'd', type: 'emoji' },
  { id: 'e', type: 'challenge' },
  { id: 'f', type: 'trivia' },
] as Quest[];

test('counts finished activities by kind, ignoring ones not done', () => {
  assert.deepEqual(countPlayed({ a: {}, c: {}, d: {}, e: {}, f: {}, zzz: {} }, quests), { spotted: 1, games: 2, rather: 1 });
});

test('share badges show what was played and never any time', () => {
  const chips = summaryChips({ stars: 4, quests: 9, played: { spotted: 3, games: 1, rather: 2 } });
  assert.deepEqual(chips, ['⭐ 4 trivia', '👀 3 spotted', '🤔 2 picks', '🎲 1 game']);
  for (const c of chips) assert.doesNotMatch(c, /min|wait|⏱/i);
});

test('older keepsakes fall back to a plain activity count, and empty ones show nothing', () => {
  assert.deepEqual(summaryChips({ stars: 0, quests: 1 }), ['🎟️ 1 activity']);
  assert.deepEqual(summaryChips({ stars: 0, quests: 0 }), []);
});

test('a day adds everything up', () => {
  const day = daySummaryChips([
    { stars: 2, quests: 4, played: { spotted: 1, games: 0, rather: 0 } },
    { stars: 1, quests: 3, played: { spotted: 2, games: 1, rather: 0 } },
  ]);
  assert.deepEqual(day, ['⭐ 3 trivia', '👀 3 spotted', '🎲 1 game']);
});

test('the caption sentence reads naturally and has no minutes', () => {
  assert.equal(
    summarySentence({ stars: 4, quests: 9, played: { spotted: 3, games: 0, rather: 0 } }),
    'I got 4 trivia questions right and spotted 3 hidden details while I waited in line ⭐',
  );
  assert.equal(summarySentence({ stars: 0, quests: 0 }), '');
});
