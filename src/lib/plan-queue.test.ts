import assert from 'node:assert/strict';
import { test } from 'node:test';

import { allAttractions } from '@/data/parks';
import { buildQueue, categoryOf } from './plan.ts';

const rides = allAttractions();

test('buildQueue gives each activity once, only from the ride itself', () => {
  for (const ref of rides) {
    const own = new Set(ref.attraction.quests.map((q) => q.id));
    const ids = buildQueue(ref, 'seed', new Set()).map((p) => p.quest.id);
    assert.equal(new Set(ids).size, ids.length, `${ref.attraction.id}: repeats`);
    assert.equal(ids.length, own.size, `${ref.attraction.id}: should use every activity`);
    for (const id of ids) assert.ok(own.has(id), `${ref.attraction.id}: ${id} is from another ride`);
  }
});

test('look-around items stay in walking order, whatever the seed', () => {
  for (const ref of rides) {
    const walking = ref.attraction.quests.filter((q) => categoryOf(q) === 'look').map((q) => q.id);
    for (const seed of ['a', 'b', 'c']) {
      const seen = buildQueue(ref, seed, new Set())
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
