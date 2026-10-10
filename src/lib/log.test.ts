import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const names = (file: string, marker: string) => {
  const text = readFileSync(new URL(file, import.meta.url), 'utf8');
  const block = text.slice(text.indexOf(marker));
  return [...block.slice(0, block.indexOf(']')).matchAll(/'([a-z_]+)'/g)].map((m) => m[1]);
};

test('the app and the board Worker agree on the allowed event names', () => {
  const app = names('./log.ts', 'export const EVENTS');
  const worker = names('../../board/src/index.ts', 'const EVENTS');
  assert.ok(app.length > 0);
  assert.deepEqual(app, worker);
});

test('event names are plain words, so nothing personal can be logged', () => {
  for (const name of names('./log.ts', 'export const EVENTS')) assert.match(name, /^[a-z]+(_[a-z]+)*$/);
});
