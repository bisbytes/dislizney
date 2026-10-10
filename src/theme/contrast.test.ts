import assert from 'node:assert/strict';
import { test } from 'node:test';

import { parks } from '@/data/parks';
import { colors } from './palette.ts';
import { HALLOWEEN_LEMON } from './seasons.ts';

/** WCAG contrast ratio between two hex colors. */
function ratio(a: string, b: string) {
  const lum = (hex: string) => {
    const [r, g, bl] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
    const f = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(bl);
  };
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const AA = 4.5;
const check = (fg: string, bg: string, label: string) =>
  assert.ok(ratio(fg, bg) >= AA, `${label}: ${ratio(fg, bg).toFixed(2)}:1, needs ${AA}:1 to read in bright sun`);

test('text colors are readable on the page backgrounds', () => {
  for (const [name, fg] of Object.entries({ ink: colors.ink, inkSoft: colors.inkSoft, berry: colors.berry, wrong: colors.wrong }))
    for (const [bgName, bg] of Object.entries({ paper: colors.paper, white: colors.white })) check(fg, bg, `${name} on ${bgName}`);
});

test('dark text is readable on the bright fill colors', () => {
  for (const bg of ['lemon', 'mint', 'gold', 'sky'] as const) check(colors.ink, colors[bg], `ink on ${bg}`);
  check(colors.ink, HALLOWEEN_LEMON, 'ink on Halloween orange');
});

test('white text is readable on the berry buttons', () => {
  check(colors.white, colors.berry, 'white on berry');
});

test('light text is readable on every land color', () => {
  for (const land of parks.flatMap((p) => p.lands)) {
    check(colors.white, land.colors.ground, `white on ${land.id}`);
    check(colors.paper, land.colors.ground, `paper on ${land.id}`);
  }
});
