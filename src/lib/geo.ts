import type { LatLng } from '@/data/types';
import { allAttractions, type AttractionRef } from '@/data/parks';

/** How close (in meters) you need to be for an attraction to count as "nearby". */
export const NEARBY_METERS = 80;

export function distanceMeters(a: LatLng, b: LatLng): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export function nearestAttraction(here: LatLng): (AttractionRef & { meters: number }) | null {
  let best: (AttractionRef & { meters: number }) | null = null;
  for (const ref of allAttractions()) {
    const meters = distanceMeters(here, ref.attraction.coords);
    if (!best || meters < best.meters) best = { ...ref, meters };
  }
  return best && best.meters <= NEARBY_METERS ? best : null;
}
