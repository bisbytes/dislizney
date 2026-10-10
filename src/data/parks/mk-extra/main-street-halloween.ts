import type { Quest } from '../../types';

/**
 * Halloween-season look-around and photo items for Main Street, U.S.A.
 * Each is tagged `season: 'halloween'`, so buildQueue only uses it in October.
 * Look-around items are listed in walking order and come after the year-round ones.
 * Decor changes year to year, so each item cites a 2025 or 2026 report.
 */
const MB_2026 = 'https://mickeyblog.com/2026/08/04/more-halloween-decor-pumpkins-have-sprouted-at-magic-kingdom/';
const BM_2026 = 'https://blogmickey.com/2026/08/mickey-pumpkins-halloween-decor-return-to-main-street-usa/';

export const seasonalQuests: Record<string, Quest[]> = {
  'wdw-railroad': [
    {
      // evidence: resortsgal.com (published Aug 23, 2025, updated Apr 6, 2026): "a closeup of the entrance pumpkins outside the Main Street train station"
      type: 'spy',
      id: 'wdw-railroad-halloween-spy1',
      season: 'halloween',
      prompt: 'It is the spooky season! Find the pumpkins by the station entrance.',
      hint: 'They sit right outside the Main Street station.',
    },
    {
      // evidence: resortsgal.com (2025): "The Main Street Train Station with the floral Mickey in a bat costume surrounded by bats."
      type: 'spy',
      id: 'wdw-railroad-halloween-spy2',
      season: 'halloween',
      prompt: 'Spot the flower-bed Mickey dressed up as a bat. How many bats are flying around him?',
      hint: 'Look at the garden beside the station.',
    },
    {
      // evidence: mickeyblog.com (Aug 4, 2026): "gorgeous garlands had been hung from the train station"
      type: 'spy',
      id: 'wdw-railroad-halloween-spy3',
      season: 'halloween',
      prompt: 'Look up at the station building. What fall garlands are hanging from it?',
    },
    {
      // evidence: mickeyblog.com (Aug 4, 2026): "Sat right there in front of the train station is an adorable fall photo spot"
      type: 'photo',
      id: 'wdw-railroad-halloween-photo1',
      season: 'halloween',
      prompt: 'Snap the fall photo spot in front of the station, with everyone in your group.',
      tip: 'Step out of the queue path first, and keep the camera away once you are on the train.',
      source: MB_2026,
    },
  ],
  'cinderella-castle': [
    {
      // evidence: blogmickey.com (Aug 2026): "Crews have staged additional wreaths and pumpkin displays near the Railroad Station and around the hub"
      type: 'spy',
      id: 'cinderella-castle-halloween-spy1',
      season: 'halloween',
      prompt: 'Find the pumpkin displays around the hub in front of the castle.',
      hint: 'The hub is the grassy circle at the end of Main Street.',
    },
    {
      // evidence: same blogmickey.com article: hub displays in front of the castle
      type: 'photo',
      id: 'cinderella-castle-halloween-photo1',
      season: 'halloween',
      prompt: 'Take a picture of the castle with the pumpkin decor in front.',
      tip: 'Stand back on the hub for the whole castle.',
      source: BM_2026,
    },
  ],
};
