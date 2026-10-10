export const lightColors = {
  paper: '#FFF8E7',
  paperEdge: '#F1E3C2',
  surface: '#FFFFFF',
  surfaceDim: '#F5EFD9',
  onGround: '#FFF8E7',
  ink: '#2B1B3F',
  inkSoft: '#6B5A7E',
  link: '#C2306A',
  lemon: '#FFFD54',
  gold: '#F4B400',
  ears: '#BDBDBD',
  berry: '#C2306A',
  sky: '#5AB4F0',
  mint: '#3CC48A',
  wrong: '#C23F1C',
  white: '#FFFFFF',
};

/**
 * The same storybook after dark, for phones set to dark mode (easier on the eyes
 * in a dim queue). Fills are deep versions of the bright ones, so `ink` (now light)
 * and `white` text both stay readable on them.
 */
export const darkColors: typeof lightColors = {
  ...lightColors,
  paper: '#1B1230',
  paperEdge: '#3A2E57',
  surface: '#2A1F45',
  surfaceDim: '#241A3B',
  ink: '#FFF8E7',
  inkSoft: '#CDC2E2',
  link: '#FF8DBA',
  lemon: '#4B38D6',
  gold: '#7A5600',
  sky: '#1F5E8C',
  mint: '#17684A',
  berry: '#B02A5F',
  wrong: '#B23A18',
};

/** The colors the app draws with. Starts light; the theme swaps in dark ones at app open. */
export const colors = { ...lightColors };
