import assert from 'node:assert/strict';
import { test } from 'node:test';

import { matchWaitMinutes } from './plan.ts';

test('spreads what we have across the wait, about one every 2 minutes', () => {
  assert.equal(matchWaitMinutes(30, 40), 2);
  assert.equal(matchWaitMinutes(45, 10), 4.5);
});

test('with few activities, spaces them out over the whole wait', () => {
  assert.equal(matchWaitMinutes(30, 5), 6);
});

test('never faster than one a minute', () => {
  assert.equal(matchWaitMinutes(1, 50), 1);
  assert.equal(matchWaitMinutes(0, 10), 1);
});

test('an empty ride still gives a sane pace', () => {
  assert.equal(matchWaitMinutes(20, 0), 20);
});
