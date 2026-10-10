import type { Fact, Park, Quest } from '../../types';
import * as adventureland from './adventureland';
import * as fantasyland1 from './fantasyland-1';
import * as fantasyland2 from './fantasyland-2';
import * as mainFrontierLiberty from './main-frontier-liberty';
import { seasonalQuests } from './main-street-halloween';
import * as tomorrowland from './tomorrowland';

type ExtraFile = { extra: Record<string, { facts: Fact[]; quests: Quest[] }>; drop?: string[] };
const files: ExtraFile[] = [mainFrontierLiberty, adventureland, fantasyland1, fantasyland2, tomorrowland];

/** More facts and quests about each ride itself, so every line story stays on its own ride. */
const extras = Object.assign({}, ...files.map((f) => f.extra)) as ExtraFile['extra'];

/** Base quests that wander off the ride (movie trivia, generic games), replaced by the extras. */
const dropped = new Set(files.flatMap((f) => f.drop ?? []));

export function withExtras(park: Park): Park {
  return {
    ...park,
    lands: park.lands.map((land) => ({
      ...land,
      attractions: land.attractions.map((a) => {
        const more = extras[a.id];
        const own = a.quests.filter((q) => !dropped.has(q.id));
        // Seasonal items come last; buildQueue hides them outside their season.
        const seasonal = seasonalQuests[a.id] ?? [];
        return more || seasonal.length
          ? { ...a, facts: [...a.facts, ...(more?.facts ?? [])], quests: [...own, ...(more?.quests ?? []), ...seasonal] }
          : { ...a, quests: own };
      }),
    })),
  };
}
