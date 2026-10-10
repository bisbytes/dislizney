import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';

/**
 * Dark mode swaps the palette in `theme/palette.ts`. A color typed straight into a screen
 * or component (like '#E4E0EA') doesn't swap, so dark writing can land on a dark card.
 * Use a palette color instead; the few fixed colors below are checked and safe.
 */
const SAFE: Record<string, string[]> = {
  'components/day-card.tsx': ['#4b38d6'], // the share picture is always light
  'components/land-scene.tsx': ['#FFFFFF'], // decorative shapes
  'components/quest-card.tsx': ['#FFF3C4', '#DFF4FF', '#FFE3EE', '#E6F8EC', '#EDE6FF', '#FFEBD9', '#E0F7F4', '#FFF0F6', '#E3F0FF'], // darkened with shade() in dark mode
};

function files(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? files(join(dir, e.name)) : e.name.endsWith('.tsx') ? [join(dir, e.name)] : [],
  );
}

test('screens and components use palette colors, not typed-in hex colors', () => {
  for (const file of [...files('src/components'), ...files('src/app')]) {
    const rel = file.replace(/^src\//, '');
    const allowed = (SAFE[rel] ?? []).map((c) => c.toLowerCase());
    for (const hex of readFileSync(file, 'utf8').match(/['"]#[0-9a-fA-F]{3,8}['"]/g) ?? []) {
      assert.ok(
        allowed.includes(hex.slice(1, -1).toLowerCase()),
        `${rel} has ${hex}. Use a color from theme/palette.ts so dark mode can change it.`,
      );
    }
  }
});
