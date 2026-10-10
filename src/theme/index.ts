import { Platform } from 'react-native';

import { colors } from './palette';
import { HALLOWEEN_LEMON, seasonFor } from './seasons';


export { colors };

/** Set once when the app opens: the current season, if it has a look of its own. */
export const season = seasonFor(new Date());

// Halloween: the storybook's lemon yellow turns pumpkin orange everywhere it's used.
if (season === 'halloween') colors.lemon = HALLOWEEN_LEMON;

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
