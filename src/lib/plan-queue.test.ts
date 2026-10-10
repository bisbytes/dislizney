import assert from 'node:assert/strict';
import { test } from 'node:test';

import { allAttractions } from '@/data/parks';
import { buildQueue, categoryOf } from './plan.ts';

const rides = allAttractions();
const MARCH = new Date(2026, 2, 10);
const OCTOBER = new Date(2026, 9, 10);

test('buildQueue gives each activity once, only from the ride itself', () => {
  for (const ref of rides) {
    const own = new Set(ref.attraction.quests.filter((q) => !('season' in q && q.season)).map((q) => q.id));
    const ids = buildQueue(ref, 'seed', new Set(), MARCH).map((p) => p.quest.id);
    assert.equal(new Set(ids).size, ids.length, `${ref.attraction.id}: repeats`);
    assert.equal(ids.length, own.size, `${ref.attraction.id}: should use every activity`);
    for (const id of ids) assert.ok(own.has(id), `${ref.attraction.id}: ${id} is from another ride`);
  }
});

test('look-around items stay in walking order, whatever the seed', () => {
  for (const ref of rides) {
    const walking = ref.attraction.quests.filter((q) => categoryOf(q) === 'look' && !('season' in q && q.season)).map((q) => q.id);
    for (const seed of ['a', 'b', 'c']) {
      const seen = buildQueue(ref, seed, new Set(), MARCH)
        .filter((p) => categoryOf(p.quest) === 'look')
        .map((p) => p.quest.id);
      assert.deepEqual(seen, walking, `${ref.attraction.id} seed ${seed}`);
    }
  }
});

test('the same seed always gives the same order; a new seed shuffles', () => {
  const ref = rides.find((r) => r.attraction.id === 'jungle-cruise')!;
  const order = (seed: string) => buildQueue(ref, seed, new Set()).map((p) => p.quest.id).join();
  assert.equal(order('x'), order('x'));
  assert.notEqual(order('x'), order('y'));
});

test('within each kind, activities you have not seen come before ones you have', () => {
  const ref = rides.find((r) => r.attraction.id === 'jungle-cruise')!;
  const all = buildQueue(ref, 's', new Set()).map((p) => p.quest.id);
  const seen = new Set(all.filter((_, i) => i % 2 === 0));
  const queue = buildQueue(ref, 's', seen).filter((p) => categoryOf(p.quest) !== 'look');
  for (const category of ['fact', 'play', 'photo']) {
    const flags = queue.filter((p) => categoryOf(p.quest) === category).map((p) => seen.has(p.quest.id));
    assert.deepEqual(flags, [...flags].sort((x, y) => Number(x) - Number(y)), category);
  }
});

test('categoryOf sorts every quest type into a category', () => {
  const types = { trivia: 'fact', truefalse: 'fact', guess: 'fact', order: 'fact', spy: 'look', photo: 'photo', emoji: 'play', challenge: 'play', wyr: 'play' } as const;
  for (const [type, category] of Object.entries(types)) assert.equal(categoryOf({ type } as never), category);
});

const seasonal = rides.filter((r) => r.attraction.quests.some((q) => 'season' in q && q.season));

test('Main Street has Halloween items', () => {
  assert.ok(seasonal.some((r) => r.attraction.id === 'wdw-railroad'));
  assert.ok(seasonal.some((r) => r.attraction.id === 'cinderella-castle'));
});

test('seasonal items are hidden outside their season and shown in it', () => {
  for (const ref of seasonal) {
    const tagged = ref.attraction.quests.filter((q) => 'season' in q && q.season).map((q) => q.id);
    const off = buildQueue(ref, 's', new Set(), MARCH).map((p) => p.quest.id);
    const on = buildQueue(ref, 's', new Set(), OCTOBER).map((p) => p.quest.id);
    for (const id of tagged) {
      assert.ok(!off.includes(id), `${id} should be hidden off-season`);
      assert.ok(on.includes(id), `${id} should show in Halloween`);
    }
    assert.equal(on.length, off.length + tagged.length);
  }
});

test('look-around items keep walking order in Halloween, seasonal ones included', () => {
  for (const ref of seasonal) {
    const walking = ref.attraction.quests.filter((q) => categoryOf(q) === 'look').map((q) => q.id);
    for (const seed of ['a', 'b', 'c']) {
      const got = buildQueue(ref, seed, new Set(), OCTOBER)
        .filter((p) => categoryOf(p.quest) === 'look')
        .map((p) => p.quest.id);
      assert.deepEqual(got, walking, `${ref.attraction.id} seed ${seed}`);
    }
  }
});
