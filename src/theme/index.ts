import { Platform } from 'react-native';

export const colors = {
  paper: '#FFF8E7',
  paperEdge: '#F1E3C2',
  ink: '#2B1B3F',
  inkSoft: '#6B5A7E',
  lemon: '#FFFD54',
  gold: '#F4B400',
  ears: '#BDBDBD',
  berry: '#E0457B',
  sky: '#5AB4F0',
  mint: '#3CC48A',
  wrong: '#E4572E',
  white: '#FFFFFF',
};

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
