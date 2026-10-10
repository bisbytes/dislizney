export type Season = 'halloween';

/** The app wears a Halloween look for all of October, going by the phone's own date. Nothing is stored or sent. */
export function seasonFor(date: Date): Season | undefined {
  return date.getMonth() === 9 ? 'halloween' : undefined;
}

export const SEASON_SPARKLES: Record<Season | 'none', readonly string[]> = {
  none: ['✨'],
  halloween: ['🎃', '🦇', '✨', '👻'],
};

/** Halloween turns the storybook's lemon yellow into this pumpkin orange. */
export const HALLOWEEN_LEMON = '#FF9F45';
