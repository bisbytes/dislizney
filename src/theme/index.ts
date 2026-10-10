import { Appearance, Platform } from 'react-native';

import { parks } from '@/data/parks';
import { colors, darkColors, lightColors } from './palette';
import { HALLOWEEN_LEMON, HALLOWEEN_LEMON_DARK, seasonFor } from './seasons';

export { colors, lightColors };

/** Mixes a hex color toward a very dark purple; `keep` is how much of the original stays. */
export function shade(hex: string, keep: number) {
  const base = [0x14, 0x0c, 0x24];
  const out = [1, 3, 5].map((i, n) => Math.round(parseInt(hex.slice(i, i + 2), 16) * keep + base[n] * (1 - keep)));
  return `#${out.map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

/** Set once when the app opens: follows the phone's own light or dark setting. Nothing is stored or sent. */
export const isDark =
  Platform.OS === 'web'
    ? !!globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches
    : Appearance.getColorScheme() === 'dark';

if (isDark) {
  Object.assign(colors, darkColors);
  // Each land's pastel sky becomes a deep shade of its own color, with light writing on it.
  for (const land of parks.flatMap((p) => p.lands)) {
    land.colors.sky = shade(land.colors.ground, 0.45);
    land.colors.ink = darkColors.ink;
  }
}

/** Set once when the app opens: the current season, if it has a look of its own. */
export const season = seasonFor(new Date());

// Halloween: the storybook's lemon yellow turns pumpkin orange everywhere it's used.
if (season === 'halloween') colors.lemon = isDark ? HALLOWEEN_LEMON_DARK : HALLOWEEN_LEMON;

export const fonts = {
  regular: 'Fredoka_400Regular',
  medium: 'Fredoka_500Medium',
  bold: 'Fredoka_700Bold',
};

/** Soft "storybook page" shadow that works on iOS, Android and web. */
export const pageShadow = Platform.select({
  web: { boxShadow: '0 6px 0 rgba(43,27,63,0.15)' },
  default: {
    shadowColor: '#2B1B3F',
    shadowOpacity: 0.18,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
}) as object;

/** Readable width for big screens (web/tablet); phones use full width. */
export const MAX_WIDTH = 560;
