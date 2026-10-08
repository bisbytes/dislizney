import type { Attraction, Land, Park } from '../types';
import { magicKingdom } from './magic-kingdom';
import { withExtras } from './mk-extra';

const comingSoon = (id: string, name: string, emoji: string, tagline: string, lat: number, lng: number): Park => ({
  id,
  name,
  emoji,
  tagline,
  comingSoon: true,
  center: { lat, lng },
  lands: [],
});

/** Every park in the app. Add new parks here. */
export const parks: Park[] = [
  withExtras(magicKingdom),
  comingSoon('epcot', 'EPCOT', '🌐', 'A future chapter: around the world and beyond.', 28.3747, -81.5494),
  comingSoon(
    'hollywood-studios',
    'Hollywood Studios',
    '🎬',
    'A future chapter: lights, camera, adventure.',
    28.3575,
    -81.5582,
  ),
  comingSoon('animal-kingdom', 'Animal Kingdom', '🌳', 'A future chapter: into the wild.', 28.3553, -81.5901),
];

export function getPark(id: string): Park | undefined {
  return parks.find((p) => p.id === id);
}

export type AttractionRef = { park: Park; land: Land; attraction: Attraction };

export function allAttractions(): AttractionRef[] {
  return parks.flatMap((park) =>
    park.lands.flatMap((land) => land.attractions.map((attraction) => ({ park, land, attraction }))),
  );
}

export function getAttraction(id: string): AttractionRef | undefined {
  return allAttractions().find((r) => r.attraction.id === id);
}

/** Orlando's date today, since that's when the park opens and closes. */
function orlandoToday(now = new Date()) {
  try {
    return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' }).format(now);
  } catch {
    return now.toISOString().slice(0, 10);
  }
}

/** True while an announced refurbishment has the ride closed. */
export function isClosedForRefurb(a: Attraction, now = new Date()): boolean {
  if (!a.closure) return false;
  const today = orlandoToday(now);
  return (!a.closure.from || today >= a.closure.from) && (!a.closure.until || today < a.closure.until);
}
