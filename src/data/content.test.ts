import assert from 'node:assert/strict';
import { test } from 'node:test';

import { allAttractions } from '@/data/parks';
import { categoryOf } from '@/lib/plan';

const rides = allAttractions();

test('every quest id is unique across all parks', () => {
  const seen = new Set<string>();
  for (const { attraction } of rides)
    for (const q of attraction.quests) {
      assert.ok(!seen.has(q.id), `duplicate quest id ${q.id}`);
      seen.add(q.id);
    }
});

test('every fact has an https source', () => {
  for (const { attraction } of rides)
    for (const f of attraction.facts) assert.match(f.source ?? '', /^https:\/\//, `${attraction.id}: "${f.text.slice(0, 40)}"`);
});

test('trivia and photo items name their source; games and look-around items may go without', () => {
  for (const { attraction } of rides)
    for (const q of attraction.quests) {
      if (categoryOf(q) === 'play' || q.type === 'spy') continue;
      assert.match((q as { source?: string }).source ?? '', /^https:\/\//, `${attraction.id}: ${q.id}`);
    }
});

test('every ride has enough of its own content', () => {
  for (const { attraction } of rides) assert.ok(attraction.quests.length >= 10, `${attraction.id} has ${attraction.quests.length} items`);
});

test('every attraction has a unique id and a location', () => {
  const ids = new Set<string>();
  for (const { attraction } of rides) {
    assert.ok(!ids.has(attraction.id), `duplicate attraction ${attraction.id}`);
    ids.add(attraction.id);
    assert.ok(attraction.coords.lat && attraction.coords.lng, `${attraction.id} needs coords`);
  }
});
