import type { Park } from '../../types';
import { extra as adventureland } from './adventureland';
import { extra as fantasyland1 } from './fantasyland-1';
import { extra as fantasyland2 } from './fantasyland-2';
import { extra as mainFrontierLiberty } from './main-frontier-liberty';
import { extra as tomorrowland } from './tomorrowland';

/** More facts and quests about each ride itself, so every line story stays on its own ride. */
const extras = { ...mainFrontierLiberty, ...adventureland, ...fantasyland1, ...fantasyland2, ...tomorrowland };

export function withExtras(park: Park): Park {
  return {
    ...park,
    lands: park.lands.map((land) => ({
      ...land,
      attractions: land.attractions.map((a) => {
        const more = extras[a.id];
        return more ? { ...a, facts: [...a.facts, ...more.facts], quests: [...a.quests, ...more.quests] } : a;
      }),
    })),
  };
}
