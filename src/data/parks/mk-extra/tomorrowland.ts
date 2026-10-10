import type { Fact, Quest } from '../../types';

const WIKI = 'https://en.wikipedia.org/wiki/';

// Space Mountain
const SM = WIKI + 'Space_Mountain_(Magic_Kingdom)';
const SM_TP = 'https://touringplans.com/blog/?p=586112';
const SM_FAN = 'https://disney.fandom.com/wiki/Space_Mountain_(Magic_Kingdom)';

// TRON Lightcycle / Run
const TRON = WIKI + 'Tron_Lightcycle_Power_Run';
const TRON_WDWNT = 'https://wdwnt.com/?p=866750';
const TRON_RG = 'https://www.resortsgal.com/blog/tron-lightcycle-run/';
const TRON_TP = 'https://touringplans.com/blog/tron-lightcycle-run-the-spoiler-review/';

// Buzz Lightyear's Space Ranger Spin
const BUZZ = WIKI + "Buzz_Lightyear's_Space_Ranger_Spin";
const BUZZ_FAN = "https://disney.fandom.com/wiki/Buzz_Lightyear's_Space_Ranger_Spin";
const BUZZ_WDWNT = 'https://wdwnt.com/?p=1397968';
const BUZZ_OPEN =
  'https://www.wdwmagic.com/attractions/buzz-lightyears-space-ranger-spin/news/08apr2026-buzz-lightyears-space-ranger-spin-now-officially-open-at-magic-kingdom.htm';
const BUZZ_EGGS =
  'https://www.wdwmagic.com/attractions/buzz-lightyears-space-ranger-spin/news/10mar2026-magic-kingdoms-buzz-lightyear-to-include-easter-eggs,-queue-refresh,-and-toy-story-5-surprises.htm';
const BUZZ_MB = 'https://mickeyblog.com/2026/03/21/join-us-on-the-new-buzz-lightyears-space-ranger-spin/';

// PeopleMover
const PM = WIKI + 'Tomorrowland_Transit_Authority_PeopleMover';
const PM_TP = 'https://touringplans.com/blog/2019/09/29/everything-you-need-to-know-about-the-tomorrowland-peoplemover';

// Tomorrowland Speedway
const SP = WIKI + 'Tomorrowland_Speedway';
const SP_TP = 'https://touringplans.com/blog/2020/08/10/everything-you-need-to-know-about-the-tomorrowland-speedway/';
const SP_RG = 'https://www.resortsgal.com/parks/magic-kingdom/tomorrowland-speedway';
const SP_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/tomorrowland-speedway/';

// Astro Orbiter
const AO = WIKI + 'Astro_Orbiter';
const AO_DISNEY = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/astro-orbiter/';
const AO_WDWNT = 'https://wdwnt.com/2020/07/photos-a-look-at-astro-orbiter-as-magic-kingdom-reopens-with-new-social-distancing-queue/';
const AO_TRIP = 'https://www.tripster.com/travelguide/astro-orbiter/';
const AO_CRANE =
  'https://www.wdwmagic.com/attractions/astro-orbitor/news/04feb2025-astro-orbiter-ride-system-removed-as-crane-leaves-tomorrowland-at-magic-kingdom.htm';
const AO_REBUILT = 'https://blogmickey.com/2025/06/astro-orbiter-fully-rebuilt-vibrant-planets-return/';
const AO_LIFT = 'https://blogmickey.com/2025/10/astro-orbiter-broken-following-full-rebuild-magic-kingdom/';

// Carousel of Progress
const COP = WIKI + "Walt_Disney's_Carousel_of_Progress";
const COP_WDWNT = 'https://wdwnt.com/2026/07/last-look-at-walt-disneys-carousel-of-progress-before-major-reimagining/';

// Monsters, Inc. Laugh Floor
const LF = WIKI + 'Monsters,_Inc._Laugh_Floor';
const LF_DISNEY = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/monsters-inc-laugh-floor/';
const LF_FAN = 'https://disney.fandom.com/wiki/Monsters,_Inc._Laugh_Floor';
const LF_TP = 'https://touringplans.com/blog/five-things-to-know-about-monsters-inc-laugh-floor/';
const LF_RG = 'https://www.resortsgal.com/blog/monsters-inc-laugh-floor/';
const LF_DA = 'https://www.disneyavenue.com/2017/10/exploring-monsters-inc-laugh-floor.html';
const TIMEKEEPER = WIKI + 'The_Timekeeper';

/**
 * Base quests (in magic-kingdom.ts) that are not about the ride itself, or
 * that are replaced by a fixed version below.
 */
export const drop: string[] = [
  // Space Mountain: generic countdown, generic Moon vs ocean, and an order quest about other rides
  'sm-ch',
  'sm-wyr',
  'sm-4',
  // TRON: spy with no backstory; replaced by queue walk-through spies below
  'tr-spy',
  // Buzz: movie catchphrase challenge and movie catchphrase emoji
  'bz-ch',
  'bz-3',
  // PeopleMover: generic would-you-rather
  'pm-wyr',
  // Astro Orbiter: generic would-you-rather
  'ao-wyr',
  // Carousel of Progress: scene order replaced by a version that says it was the classic show; generic invention challenge
  'cp-2',
  'cp-ch',
  // Laugh Floor: movie emoji and generic joke battle
  'lf-2',
  'lf-ch',
];

/** Extra ride-specific content for Tomorrowland. Every sourced item was checked against its source page. */
export const extra: Record<string, { facts: Fact[]; quests: Quest[] }> = {
  'space-mountain': {
    facts: [
      // evidence: "30 trains with 2 cars"
      { text: 'Space Mountain has 30 trains, and each one has two rocket-shaped cars.', source: SM },
      // evidence: "one of the first computer operated roller coasters"
      { text: 'Space Mountain was one of the first roller coasters run by computers.', source: SM },
      // evidence: "passing through a red and orange swirling wormhole"
      { text: 'Near the end of the ride, you zoom through a red and orange swirling wormhole.', source: SM },
      // evidence: "identical mirror images of one another"
      { text: 'Space Mountain has two tracks that are mirror images of each other.', source: SM },
      // evidence: "Starport was the working name, and "7-5" refers to the opening year, 1975"
      { text: 'Starport Seven-Five is named for 1975, the year Space Mountain opened.', source: SM_TP },
      // evidence: "the first mountain at Walt Disney World, the first fully enclosed roller coaster"
      { text: 'It was the first “mountain” at Walt Disney World and the first fully enclosed roller coaster.', source: SM_TP },
    ],
    quests: [
      // ---- Look around the queue, in walking order ----
      // source: SM_TP. evidence: "Welcome Space Travelers, Starport Seven-Five, Your Gateway to the Stars."
      {
        type: 'spy',
        id: 'space-mountain-r1',
        prompt: 'At the entrance, find the sign that welcomes you to “Starport Seven-Five.”',
        hint: 'Seven-Five is a secret birthday: Space Mountain opened in 1975. You are now a space traveler!',
      },
      // source: SM_TP. evidence: "A three-paneled lighted sign to the right is often overlooked."
      {
        type: 'spy',
        id: 'space-mountain-r2',
        prompt: 'Find the three-panel lighted sign near the entrance. Most people walk right past it!',
        hint: 'Look to the right. Superfans love it because hardly anyone notices it.',
      },
      // source: SM_TP. evidence: Lists of "Active Lunar Stations" name real star systems, scientists, and astronauts.
      {
        type: 'spy',
        id: 'space-mountain-r4',
        prompt: 'Now find the “Active Lunar Stations.” Do you recognize any names?',
        hint: 'Imagineers named these after real star systems, scientists and astronauts.',
      },
      // source: SM_TP. evidence: An "Active Earth Stations" list names every Disney Park Space Mountain
      {
        type: 'spy',
        id: 'space-mountain-r3',
        prompt: 'Find the list of “Active Earth Stations.” Which one is Magic Kingdom?',
        hint: 'Every station is a real Space Mountain around the world. Ours is “Tomorrowland Station MK-1,” the very first.',
      },
      // source: SM. evidence: "The line then dips into the "star tunnel", which takes guests under the"
      {
        type: 'spy',
        id: 'space-mountain-r5',
        prompt: 'When the line dips into the starry tunnel, guess what is right above your head.',
        hint: 'The Walt Disney World Railroad! Space Mountain sits outside the park’s berm, so the line sneaks under the train tracks.',
      },
      // source: SM_TP. evidence: The Star Tunnel has "windows" showing stars, planets, and galaxies, plus star maps of space routes.
      {
        type: 'spy',
        id: 'space-mountain-r6',
        prompt: 'In the star tunnel, peek through a “window.” Find a planet, a galaxy and a star map.',
        hint: 'The star maps show pretend space routes, like a flight map for rockets.',
      },
      // source: SM_TP. evidence: Another room has a "window" showing space walkers fixing a satellite.
      {
        type: 'spy',
        id: 'space-mountain-r11',
        prompt: 'Find the astronauts on a spacewalk. What are they fixing?',
        hint: 'A satellite! Keep watching for more spacewalkers when your rocket climbs the lift.',
      },
      // source: SM_TP. evidence: "Celestial charts: Seven lighted charts."
      {
        type: 'spy',
        id: 'space-mountain-r-spy1',
        prompt: 'Count the glowing star charts on the wall. How many are there?',
        hint: 'Seven! Each one is a map of a different part of space.',
      },
      // source: SM_TP. evidence: The second celestial chart, "Titan Stations Sector Two," includes "Disney's Hyperion Resort"
      {
        type: 'spy',
        id: 'space-mountain-r7',
        prompt: 'Super-hard mission: find “Disney’s Hyperion Resort” hidden on a star chart.',
        hint: 'It’s on the “Titan Stations Sector Two” chart, upper right. Hyperion Avenue is where Walt’s studio moved in 1926.',
      },
      // source: SM_FAN. evidence: The entrance, star tunnel, and loading area music remain ... heard since 1985
      {
        type: 'spy',
        id: 'space-mountain-r13',
        prompt: 'Close your eyes for 10 seconds and just listen. What sounds do you hear?',
        hint: 'The spacey music in the tunnel and loading area has been playing since the 1980s.',
      },
      // source: SM. evidence: "The queue splits up into lines for the two separate tracks: Alpha (left) and Omega (right)."
      {
        type: 'spy',
        id: 'space-mountain-r14',
        prompt: 'Find where the line splits in two. Which side are you on, Alpha or Omega?',
        hint: 'Alpha is on the left and Omega is on the right. They are near mirror images.',
      },
      // evidence: "Welcome Space Travelers, Starport Seven-Five, Your Gateway to the Stars."
      {
        type: 'photo',
        id: 'space-mountain-r15',
        prompt: 'From the line, take a group photo with the Starport Seven-Five welcome sign.',
        tip: 'It’s at the entrance before you head inside.',
        source: SM_TP,
      },
      // evidence: "which is 183 feet tall and 300 feet in diameter" / "support beams on the outside"
      {
        type: 'photo',
        id: 'space-mountain-r-photo2',
        prompt: 'From the line, take a photo of the giant white cone. Can you fit the whole mountain in?',
        tip: 'The cone is 183 feet tall, with its support beams on the outside. Step back to fit it in.',
        source: SM_TP,
      },
      // evidence: "A three-paneled lighted sign to the right is often overlooked."
      {
        type: 'photo',
        id: 'space-mountain-r-photo3',
        prompt: 'From the line, photograph the three-panel lighted sign that most people walk past.',
        tip: 'Look to the right of the welcome sign.',
        source: SM_TP,
      },
      // evidence: An "Active Earth Stations" list names every Disney Park Space Mountain
      {
        type: 'photo',
        id: 'space-mountain-r-photo4',
        prompt: 'From the line, take a photo of the “Active Earth Stations” list. Point to Magic Kingdom!',
        tip: 'Ours is “Tomorrowland Station MK-1.”',
        source: SM_TP,
      },
      // evidence: Another room has a "window" showing space walkers fixing a satellite.
      {
        type: 'photo',
        id: 'space-mountain-r-photo6',
        prompt: 'From the line, photograph the window where astronauts are fixing a satellite.',
        tip: 'Hold your camera close to the glass so the window fills your photo.',
        source: SM_TP,
      },

      // ---- Trivia ----
      // evidence: "Alpha (left) and Omega (right)"
      {
        type: 'trivia',
        id: 'space-mountain-x1',
        question: 'What are the names of Space Mountain’s two tracks?',
        choices: ['Red and Blue', 'Alpha and Omega', 'Sun and Moon', 'Rocket and Comet'],
        answer: 1,
        explain: 'The line splits into Alpha (left) and Omega (right).',
        source: SM,
      },
      // evidence: "Height restriction: 44 in (112 cm)"
      {
        type: 'guess',
        id: 'space-mountain-x2',
        question: 'How many inches tall do you need to be to ride Space Mountain?',
        answer: 44,
        min: 30,
        max: 60,
        step: 1,
        unit: 'inches',
        tolerance: 2,
        explain: 'Riders need to be at least 44 inches (112 cm) tall.',
        source: SM,
      },
      // evidence: "the coaster tracks' steepest drop of 39 degrees"
      {
        type: 'guess',
        id: 'space-mountain-x3',
        question: 'How steep is Space Mountain’s steepest drop, in degrees?',
        answer: 39,
        min: 10,
        max: 90,
        step: 1,
        unit: 'degrees',
        tolerance: 5,
        explain: 'The steepest drop is 39 degrees, in total darkness!',
        source: SM,
      },
      // evidence: "Inversions: 0 / 0"
      {
        type: 'truefalse',
        id: 'space-mountain-x4',
        statement: 'Space Mountain flips you upside down.',
        answer: false,
        explain: 'Fiction! Space Mountain has zero upside-down loops.',
        source: SM,
      },
      // evidence: "Originally called "Space Voyage""
      {
        type: 'trivia',
        id: 'space-mountain-x5',
        question: 'What was the idea for Space Mountain first called?',
        choices: ['Space Voyage', 'Star Race', 'Moon Coaster', 'Galaxy Jet'],
        answer: 0,
        explain: 'The early idea was called “Space Voyage.”',
        source: SM,
      },
      // evidence: "the oldest operating roller coaster in the state of Florida"
      {
        type: 'truefalse',
        id: 'space-mountain-x6',
        statement: 'Space Mountain is the oldest roller coaster still running in Florida.',
        answer: true,
        explain: 'Fact! It’s the oldest operating coaster in the whole state.',
        source: SM,
      },
      // evidence: "Visitors board the trains in the Starport: Seven Five"
      {
        type: 'trivia',
        id: 'space-mountain-x7',
        question: 'What is the boarding station inside Space Mountain called?',
        choices: ['Moonbase One', 'Starport: Seven Five', 'Rocket Dock 9', 'Launch Pad Z'],
        answer: 1,
        explain: 'You board your rocket at Starport: Seven Five.',
        source: SM,
      },
      // evidence: "a tunnel, called the "star corridor", under the Walt Disney World Railroad tracks"
      {
        type: 'trivia',
        id: 'space-mountain-x8',
        question: 'The line goes through a tunnel underneath what?',
        choices: ['A lake', 'The Walt Disney World Railroad tracks', 'Cinderella Castle', 'The monorail'],
        answer: 1,
        explain: 'The star tunnel runs under the Walt Disney World Railroad tracks.',
        source: SM,
      },
      // evidence: "Length: 3,196 ft (974.1 m) / 3,186 ft (971.1 m)"
      {
        type: 'guess',
        id: 'space-mountain-x9',
        question: 'About how many feet long is the Alpha track?',
        answer: 3196,
        min: 500,
        max: 6000,
        step: 50,
        unit: 'feet',
        tolerance: 300,
        explain: 'Alpha is 3,196 feet long and Omega is 3,186 feet.',
        source: SM,
      },
      // evidence: "From 1975 to 1989, the train cars featured two rows instead of three" / "The newer trains introduced the use of lap bars" / "From April 19 to November 21, 2009"
      {
        type: 'order',
        id: 'space-mountain-x10',
        prompt: 'Put these Space Mountain moments in order, oldest first.',
        items: ['Space Mountain opens (1975)', 'New trains with lap bars (1989)', 'Big makeover (2009)'],
        explain: 'It opened in 1975, got new trains in 1989 and a big refurbishment in 2009.',
        source: SM,
      },
      // evidence: The 2009 refurbishment gave the trains new seat fabric and a blue-and-gray paint scheme.
      {
        type: 'trivia',
        id: 'space-mountain-x11',
        question: 'What colors were the trains painted in the 2009 makeover?',
        choices: ['Red and gold', 'Blue and gray', 'Green and black', 'Pink and purple'],
        answer: 1,
        explain: 'The 2009 refurbishment repainted them blue and gray.',
        source: SM,
      },
      // evidence: Walt Disney was inspired by the Matterhorn Bobsleds' success at Disneyland and envisioned a space-themed, dark version.
      {
        type: 'trivia',
        id: 'space-mountain-x12',
        question: 'Which older Disneyland coaster inspired Space Mountain?',
        choices: ['Big Thunder Mountain', 'Matterhorn Bobsleds', 'Splash Mountain', 'Gadget’s Go Coaster'],
        answer: 1,
        explain: 'Walt was inspired by the Matterhorn Bobsleds and dreamed of a dark, space version.',
        source: SM_TP,
      },
      // evidence: "From 1975 to 1993, Space Mountain was sponsored by RCA."
      {
        type: 'trivia',
        id: 'space-mountain-r16',
        question: 'Which electronics company sponsored Space Mountain when it opened?',
        choices: ['RCA', 'Apple', 'Nintendo', 'Sony'],
        answer: 0,
        explain: 'RCA sponsored Space Mountain from 1975 to 1993.',
        source: SM,
      },
      // evidence: "FedEx assumed sponsorship from 1994 to 2004."
      {
        type: 'truefalse',
        id: 'space-mountain-r17',
        statement: 'A package delivery company once sponsored Space Mountain.',
        answer: true,
        explain: 'Fact! FedEx sponsored the ride from 1994 to 2004.',
        source: SM,
      },
      // evidence: "John Hench designed the conical building, which is 183 feet tall and 300 feet in diameter"
      {
        type: 'trivia',
        id: 'space-mountain-r18',
        question: 'Which Imagineer designed Space Mountain’s cone-shaped building?',
        choices: ['John Hench', 'Bob Gurr', 'Marc Davis', 'Rolly Crump'],
        answer: 0,
        explain: 'John Hench designed the cone, with its support beams on the outside.',
        source: SM_TP,
      },
      // evidence: "which is 183 feet tall and 300 feet in diameter"
      {
        type: 'guess',
        id: 'space-mountain-r19',
        question: 'How many feet tall is the Space Mountain building?',
        answer: 183,
        min: 50,
        max: 400,
        step: 1,
        unit: 'feet',
        tolerance: 20,
        explain: 'The cone is 183 feet tall and 300 feet across.',
        source: SM_TP,
      },
      // evidence: "Construction cost about $20 million, compared with $17 million for all of Disneyland."
      {
        type: 'truefalse',
        id: 'space-mountain-r21',
        statement: 'Building Space Mountain cost more than building all of Disneyland.',
        answer: true,
        explain: 'Fact! About $20 million, compared with $17 million for all of Disneyland.',
        source: SM_TP,
      },
      // evidence: "Astronauts Scott Carpenter, Gordon Cooper, and Jim Irwin attended."
      {
        type: 'truefalse',
        id: 'space-mountain-r22',
        statement: 'Real astronauts came to Space Mountain’s opening in 1975.',
        answer: true,
        explain: 'Fact! Scott Carpenter, Gordon Cooper and Jim Irwin were there.',
        source: SM_TP,
      },
      // evidence: "Trains: 30 trains with 2 cars. Riders are arranged 1 across in 3 rows for a total of 6 riders per train."
      {
        type: 'guess',
        id: 'space-mountain-r23',
        question: 'How many riders fit in one Space Mountain rocket train?',
        answer: 6,
        min: 1,
        max: 20,
        step: 1,
        unit: 'riders',
        tolerance: 1,
        explain: 'Six riders, sitting one behind the other.',
        source: SM,
      },
      // evidence: "From 1975 to 1989, the train cars featured two rows instead of three."
      {
        type: 'truefalse',
        id: 'space-mountain-r24',
        statement: 'The first rocket cars had only two rows of seats.',
        answer: true,
        explain: 'Fact! From 1975 to 1989 each car had two rows. Today there are three.',
        source: SM,
      },
      // evidence: "In August 2010, the ride received "Starry-O-Phonic Sound" effects."
      {
        type: 'trivia',
        id: 'space-mountain-r25',
        question: 'What fun name was given to the sound effects added in 2010?',
        choices: ['Starry-O-Phonic Sound', 'Rocket Radio', 'Galaxy Stereo', 'Moon Music'],
        answer: 0,
        explain: 'They are called “Starry-O-Phonic Sound.”',
        source: SM,
      },
      // evidence: "the trains of the PeopleMover passing between the two tracks."
      {
        type: 'truefalse',
        id: 'space-mountain-r26',
        statement: 'The PeopleMover glides right through Space Mountain, between the two tracks.',
        answer: true,
        explain: 'Fact! PeopleMover riders get a peek inside, and you might spot them from the lift hill.',
        source: SM,
      },

      // ---- Ride games ----
      { type: 'wyr', id: 'space-mountain-r31', a: 'Ride the Alpha track', b: 'Ride the Omega track' },
      { type: 'wyr', id: 'space-mountain-r32', a: 'Sit in the very front seat of the rocket', b: 'Sit in the very back seat' },
      {
        type: 'challenge',
        id: 'space-mountain-r33',
        prompt: 'Mission control voice! Take turns saying “Welcome space travelers to Starport Seven-Five!”',
      },
      {
        type: 'challenge',
        id: 'space-mountain-r34',
        prompt: 'Act out the red and orange swirling wormhole at the end of the ride, using only your hands.',
      },
      {
        type: 'emoji',
        id: 'space-mountain-x25',
        emojis: '🚀 ⛰️',
        hint: 'You’re in line for it!',
        choices: ['Big Thunder Mountain', 'Space Mountain', 'Rocket Jets', 'Moon Hill'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'space-mountain-x26',
        emojis: '🔴 🟠 🌀',
        hint: 'You zoom through it right at the end of the ride.',
        choices: ['Black ice', 'Wormhole', 'Volcano', 'Tunnel of love'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'space-mountain-r35',
        emojis: '7️⃣ 5️⃣ ⭐',
        hint: 'The name of the boarding station, and a secret birthday.',
        choices: ['Starport Seven-Five', 'Moonbase 75', 'Galaxy Gate', 'Rocket Row'],
        answer: 0,
      },
    ],
  },

  tron: {
    facts: [
      // evidence: "7 trains with 7 cars"
      { text: 'TRON has 7 trains, and each train has 7 lightcycle cars.', source: TRON },
      // evidence: "takes riders inside and outside the attraction's building"
      { text: 'The track zooms both inside and outside the building.', source: TRON },
      // evidence: "Capacity: 1,680 riders per hour"
      { text: 'About 1,680 riders can race on TRON every hour.', source: TRON },
      // evidence: "the lightcycles featured in the Tron franchise," primarily from "Tron: Legacy (2010)"
      { text: 'The lightcycles are mostly inspired by the movie Tron: Legacy (2010).', source: TRON },
      // evidence: "The attraction is located underneath a color-shifting canopy in Tomorrowland."
      { text: 'The whole ride sits under a giant color-shifting canopy.', source: TRON },
    ],
    quests: [
      // ---- Look around the queue, in walking order ----
      // source: TRON_RG. evidence: "glows in varying sequences of blue, white, and orange after nightfall."
      {
        type: 'spy',
        id: 'tron-r1',
        prompt: 'Look up at the wavy canopy. What color is it glowing right now?',
        hint: 'After dark it glows in blue, white and orange. When it shifts to orange, listen: the music changes too!',
      },
      // source: TRON_WDWNT. evidence: the canopy, which the article calls the "Upload Conduit."
      {
        type: 'spy',
        id: 'tron-r2',
        prompt: 'As you walk the path under the canopy, imagine you are being “uploaded.”',
        hint: 'This walkway is nicknamed the Upload Conduit: it’s your path into the computer world.',
      },
      // source: TRON_TP. evidence: "Disney smartly put part of the ride track above the extended outdoor queue, also covered by the canopy"
      {
        type: 'spy',
        id: 'tron-r3',
        prompt: 'Find the track that runs right above the outdoor line. Wait for a train to roar over!',
        hint: 'Right after launch, riders blast out of the building and fly over the line.',
      },
      // source: TRON_WDWNT. evidence: Two TRON ride vehicles sit to the left as you approach, which the article says serve as a test fit and a photo spot.
      {
        type: 'spy',
        id: 'tron-r4',
        prompt: 'Spot the two lightcycles parked near the entrance.',
        hint: 'These are test vehicles so riders can check the fit before the real race.',
      },
      // source: TRON_WDWNT. evidence: Signage welcomes "members of Team Blue in the lightcycle games to The Grid."
      {
        type: 'spy',
        id: 'tron-r5',
        prompt: 'Find the sign that welcomes your team to the lightcycle games. Which team are you on?',
        hint: 'It welcomes members of Team Blue to the Grid. That’s you!',
      },
      // source: TRON_WDWNT. evidence: a giant digitizer from the films sits at the back of the building.
      {
        type: 'spy',
        id: 'tron-r6',
        prompt: 'Look for the giant digitizer at the back of the building.',
        hint: 'In the TRON stories, a digitizer is the laser that beams people into the computer. It’s how you “enter” the Grid.',
      },
      // source: TRON. evidence: "First, guests start by going inside a corridor with circuitry-like patterns illuminated blue."
      {
        type: 'spy',
        id: 'tron-r7',
        prompt: 'Inside, find the hallway with glowing blue circuit patterns. Does it feel like you’re inside a computer?',
        hint: 'The walls look like a circuit board, to make it feel like you are moving deeper into the game.',
      },
      // source: TRON. evidence: "Inside, a video is projected onto a screen in front of them" ... the screen becoming transparent to reveal the launch
      {
        type: 'spy',
        id: 'tron-r8',
        prompt: 'In the pre-show room, keep your eyes on the big screen. Something surprising happens!',
        hint: 'The screen turns see-through and you get a peek at the real launch. Fans call it “the reveal.”',
      },
      // source: TRON_WDWNT. evidence: An Identity Disk is on display, and the overhead lighting is reminiscent of Identity Disks.
      {
        type: 'spy',
        id: 'tron-r9',
        prompt: 'Find an Identity Disc. Then look up: do the lights look like discs too?',
        hint: 'In the TRON world, every program carries an Identity Disc. Imagineers echoed the shape in the ceiling lights.',
      },
      // source: TRON_RG. evidence: The room holds discs showing users who have beaten the grid, along with posters for Team Yellow, Team Red, and Team Orange.
      {
        type: 'spy',
        id: 'tron-x13',
        prompt: 'In the team room, find the posters for the other racing teams. How many can you spot?',
        hint: 'Team Yellow, Team Red and Team Orange. The glowing discs show users who have beaten the Grid.',
      },
      // source: TRON. evidence: "all loose items must be stowed in the lockers"
      {
        type: 'spy',
        id: 'tron-x14',
        prompt: 'Spot a screen with a Team Blue member telling riders where loose items go.',
        hint: 'Everything bigger than a phone goes in a locker before the race.',
      },
      // source: TRON_TP. evidence: "Each locker is numbered, and the numbers are illuminated on empty lockers."
      {
        type: 'spy',
        id: 'tron-r10',
        prompt: 'Find the lockers. How can you tell which ones are empty?',
        hint: 'Empty lockers light up their numbers. And they’re double-sided, so you grab your things from the other side after the race!',
      },
      // source: TRON_WDWNT. evidence: Video screens explain how the Lightcycle game works.
      {
        type: 'spy',
        id: 'tron-r11',
        prompt: 'Near loading, find the screens that explain how to ride a lightcycle.',
        hint: 'You lean forward like on a motorbike. Watch closely so you’re race-ready!',
      },
      // source: TRON_RG. evidence: "Each position has an A or a B option."
      {
        type: 'spy',
        id: 'tron-r-spy1',
        prompt: 'At the loading area, find the floor markings. Are you going to be an A or a B?',
        hint: 'Every spot on the loading platform has an A or a B.',
      },
      // evidence: "white canopy that glows in varying sequences of blue, white, and orange"
      {
        type: 'photo',
        id: 'tron-r-photo1',
        prompt: 'From the line, take a photo looking up at the wavy white canopy.',
        tip: 'Aim straight up. After dark, wait for the colors to change.',
        source: TRON_RG,
      },
      // evidence: "there are two TRON ride vehicles to the left"
      {
        type: 'photo',
        id: 'tron-r-photo2',
        prompt: 'From the line, take a photo with the two parked lightcycles near the entrance.',
        tip: 'Look to the left as you approach. These are the test vehicles.',
        source: TRON_WDWNT,
      },
      // evidence: "welcomes members of Team Blue"
      {
        type: 'photo',
        id: 'tron-r-photo3',
        prompt: 'From the line, photograph the sign that welcomes Team Blue. Stand next to it with your team!',
        tip: 'Everyone riding is on Team Blue.',
        source: TRON_WDWNT,
      },
      // evidence: "At the back of the building is a giant digitizer"
      {
        type: 'photo',
        id: 'tron-r-photo4',
        prompt: 'From the line, take a photo of the giant digitizer at the back of the building.',
        tip: 'Look to the back of the building as the line winds around.',
        source: TRON_WDWNT,
      },
      // evidence: "An Identity Disk is on display."
      {
        type: 'photo',
        id: 'tron-r-photo5',
        prompt: 'From the line, photograph the Identity Disc on display in the pre-show area.',
        tip: 'Then look up and snap the ceiling lights that echo its shape.',
        source: TRON_WDWNT,
      },
      // evidence: "part of the ride track above the extended outdoor queue"
      {
        type: 'photo',
        id: 'tron-r-photo6',
        prompt: 'From the line, photograph the ride track passing over the outdoor queue.',
        tip: 'Wait for a train to zoom overhead, then snap the track.',
        source: TRON_TP,
      },

      // ---- Trivia ----
      // evidence: "Team Blue, the team that the guests are on."
      {
        type: 'trivia',
        id: 'tron-x1',
        question: 'Which team do riders join on TRON?',
        choices: ['Team Red', 'Team Yellow', 'Team Blue', 'Team Orange'],
        answer: 2,
        explain: 'You race for Team Blue!',
        source: TRON,
      },
      // evidence: "capture eight “Energy Gates”"
      {
        type: 'guess',
        id: 'tron-x2',
        question: 'How many Energy Gates does Team Blue need to capture?',
        answer: 8,
        min: 1,
        max: 20,
        step: 1,
        unit: 'gates',
        tolerance: 1,
        explain: 'Team Blue races to capture eight Energy Gates.',
        source: TRON,
      },
      // evidence: "Riders are arranged 2 across in a single row for a total of 14 riders per train."
      {
        type: 'guess',
        id: 'tron-x3',
        question: 'How many riders fit on one TRON train?',
        answer: 14,
        min: 2,
        max: 40,
        step: 1,
        unit: 'riders',
        tolerance: 2,
        explain: '14 riders: 2 across in each of the 7 cars.',
        source: TRON,
      },
      // evidence: "Height: 78.1 ft (23.8 m)"
      {
        type: 'guess',
        id: 'tron-x4',
        question: 'About how many feet tall does the TRON track get?',
        answer: 78,
        min: 10,
        max: 200,
        step: 1,
        unit: 'feet',
        tolerance: 8,
        explain: 'The coaster reaches 78.1 feet (23.8 m).',
        source: TRON,
      },
      // evidence: "Riders lean forward and grip a set of handlebars"
      {
        type: 'trivia',
        id: 'tron-x5',
        question: 'How do you sit on a lightcycle?',
        choices: ['Lying down flat', 'Leaning forward gripping handlebars', 'Standing up', 'Sitting backwards'],
        answer: 1,
        explain: 'Riders lean forward and grip handlebars, like on a motorbike.',
        source: TRON,
      },
      // evidence: "Inversions: 0"
      {
        type: 'truefalse',
        id: 'tron-x6',
        statement: 'TRON Lightcycle / Run turns you upside down.',
        answer: false,
        explain: 'Fiction! It has zero inversions, just lots of speed.',
        source: TRON,
      },
      // evidence: "the first incarnation opened at Shanghai Disneyland on June 16, 2016."
      {
        type: 'truefalse',
        id: 'tron-x7',
        statement: 'The very first TRON coaster opened at Shanghai Disneyland.',
        answer: true,
        explain: 'Fact! Shanghai’s version opened on June 16, 2016.',
        source: TRON,
      },
      // evidence: "A voice is then heard saying, “Initiate in 3, 2, 1!”"
      {
        type: 'trivia',
        id: 'tron-x8',
        question: 'What do you hear right before the launch?',
        choices: ['“Ready, set, go!”', '“Initiate in 3, 2, 1!”', '“Blast off!”', '“Hold on tight!”'],
        answer: 1,
        explain: 'The countdown is “Initiate in 3, 2, 1!”',
        source: TRON,
      },
      // evidence: "Music: Daft Punk" / "riders will be met with various soundtracks from the Tron franchise"
      {
        type: 'trivia',
        id: 'tron-r12',
        question: 'Music from which duo plays on the ride?',
        choices: ['Daft Punk', 'The Beatles', 'Imagine Dragons', 'Coldplay'],
        answer: 0,
        explain: 'The ride uses soundtracks from the TRON films, including music by Daft Punk.',
        source: TRON,
      },
      // evidence: "The Magic Kingdom version was first announced at the D23 Expo on July 15, 2017"
      {
        type: 'trivia',
        id: 'tron-r13',
        question: 'Where was Magic Kingdom’s TRON ride first announced?',
        choices: ['At the D23 Expo', 'On a TV commercial', 'On the castle stage', 'In a movie trailer'],
        answer: 0,
        explain: 'It was announced at the D23 Expo on July 15, 2017.',
        source: TRON,
      },
      // evidence: "It was originally scheduled to open for Walt Disney World's 50th anniversary in fall 2021"
      {
        type: 'truefalse',
        id: 'tron-r14',
        statement: 'TRON was first planned to open for Walt Disney World’s 50th anniversary.',
        answer: true,
        explain: 'Fact! It was set for fall 2021 but was delayed, and opened on April 4, 2023.',
        source: TRON,
      },
      // evidence: "Shanghai Disneyland on June 16, 2016" / "D23 Expo on July 15, 2017" / "construction began in February 2018" / "open on April 4, 2023"
      {
        type: 'order',
        id: 'tron-r15',
        prompt: 'Put TRON’s story in order, oldest first.',
        items: [
          'First TRON coaster opens in Shanghai (2016)',
          'Magic Kingdom version announced (2017)',
          'Construction begins (2018)',
          'Opens at Magic Kingdom (2023)',
        ],
        explain: 'Shanghai in 2016, announced in 2017, building began in 2018, and it opened on April 4, 2023.',
        source: TRON,
      },
      // evidence: "Manufacturer: Vekoma"
      {
        type: 'trivia',
        id: 'tron-r16',
        question: 'Which company built the TRON coaster?',
        choices: ['Vekoma', 'Lego', 'Boeing', 'Tesla'],
        answer: 0,
        explain: 'Vekoma built it, from a Walt Disney Imagineering design.',
        source: TRON,
      },
      // evidence: "Length: 3,169.3 ft (966.0 m)"
      {
        type: 'guess',
        id: 'tron-r17',
        question: 'About how many feet long is the TRON track?',
        answer: 3169,
        min: 500,
        max: 6000,
        step: 50,
        unit: 'feet',
        tolerance: 300,
        explain: 'About 3,169 feet. That’s a lot of Grid in one minute!',
        source: TRON,
      },
      // evidence: "the fastest for any Disney roller coaster at the time of its opening in 2016."
      {
        type: 'truefalse',
        id: 'tron-r18',
        statement: 'When the first TRON coaster opened, it was the fastest Disney roller coaster.',
        answer: true,
        explain: 'Fact! At nearly 60 mph, it was the fastest Disney coaster when it opened in 2016.',
        source: TRON,
      },
      // evidence: "which has not been in any of the films but is the brand color of the attraction sponsor Enterprise."
      {
        type: 'trivia',
        id: 'tron-r19',
        question: 'After the ride, you pass an area for a team that’s never been in the movies. Which team?',
        choices: ['Team Green', 'Team Purple', 'Team Pink', 'Team Gold'],
        answer: 0,
        explain: 'Team Green! It’s the color of the ride’s sponsor, Enterprise.',
        source: TRON,
      },
      // evidence: "inspired by Tron: Ares (featuring red lighting and music by Nine Inch Nails)" / "The overlay was ended on January 20, 2026"
      {
        type: 'truefalse',
        id: 'tron-r20',
        statement: 'For a few months in 2025, the ride glowed red for a special Tron: Ares makeover.',
        answer: true,
        explain: 'Fact! It had red lighting and Nine Inch Nails music until January 20, 2026.',
        source: TRON,
      },
      // evidence: "The train then launches out of the building and under the canopy." / "This is where the on-ride photo is taken."
      {
        type: 'trivia',
        id: 'tron-r21',
        question: 'Where is your on-ride photo taken?',
        choices: [
          'Outside under the canopy, right after launch',
          'In the locker room',
          'At the very top of a hill',
          'Inside the digitizer',
        ],
        answer: 0,
        explain: 'Right after the launch, as you zoom out under the canopy. Smile fast!',
        source: TRON,
      },
      // evidence: "After being dispatched, the train makes a right turn to the launch."
      {
        type: 'trivia',
        id: 'tron-r22',
        question: 'What does your train do right after leaving the station?',
        choices: ['Turns right to the launch', 'Climbs a tall lift hill', 'Goes backwards', 'Stops for a photo'],
        answer: 0,
        explain: 'It makes a right turn to the launch. Then: Initiate in 3, 2, 1!',
        source: TRON,
      },

      // ---- Ride games ----
      {
        type: 'challenge',
        id: 'tron-x17',
        prompt: 'Hold your “handlebars” and lean forward. Everyone make your best lightcycle zoom sound!',
      },
      {
        type: 'challenge',
        id: 'tron-x19',
        prompt: 'Make up a Team Blue cheer and say it together.',
      },
      {
        type: 'challenge',
        id: 'tron-r25',
        prompt: 'Launch countdown! Whisper “Initiate in 3, 2, 1…” together, then lean forward on 1.',
      },
      { type: 'wyr', id: 'tron-r26', a: 'Race in the front lightcycle', b: 'Race in the back lightcycle' },
      { type: 'wyr', id: 'tron-r27', a: 'Ride when the canopy glows blue', b: 'Ride when the canopy glows orange' },
      { type: 'wyr', id: 'tron-r28', a: 'Ride TRON in the daytime', b: 'Ride TRON at night with the canopy lit up' },
      {
        type: 'emoji',
        id: 'tron-x25',
        emojis: '💡 🏍️',
        hint: 'The glowing bike you ride.',
        choices: ['Lightcycle', 'Moped', 'Scooter', 'Hoverboard'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'tron-x26',
        emojis: '💻 🌐 🔷',
        hint: 'The digital world your lightcycle races through.',
        choices: ['The Cloud', 'The Grid', 'The Web', 'The Matrix'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'tron-x27',
        emojis: '🔵 👥 🏁',
        hint: 'The team you race for.',
        choices: ['Team Red', 'Team Blue', 'Team Green', 'Team Gold'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'tron-r29',
        emojis: '⚡ 🚪 8️⃣',
        hint: 'How many of these Team Blue has to capture.',
        choices: ['Eight Energy Gates', 'Eight Power Doors', 'Eight Lightning Bolts', 'Eight Exits'],
        answer: 0,
      },
    ],
  },

  'buzz-lightyear': {
    facts: [
      // evidence: "combines a carnival game and a third-generation Omnimover system."
      { text: 'The ride mixes a carnival game with an Omnimover ride system.', source: BUZZ },
      // evidence: "which runs through the south show building"
      { text: 'The PeopleMover passes through the same building as this ride.', source: BUZZ },
      // evidence: "Zurg is shooting at Buzz Lightyear."
      { text: 'Since the 2026 update, Zurg shoots at Buzz instead of at riders.', source: BUZZ },
      // evidence: Planet Z's green space chickens are recolored from the barnstorming chickens of Delta Dreamflight.
      {
        text: 'The green space chickens on Planet Z are recolored chickens from Delta Dreamflight, the ride that was here before.',
        source: BUZZ_FAN,
      },
    ],
    quests: [
      // ---- Look around the queue, in walking order ----
      // source: BUZZ_EGGS. evidence: The new marquee has "a Space Mountain-style white spire"
      {
        type: 'spy',
        id: 'buzz-lightyear-r1',
        prompt: 'Look up at the entrance sign. What famous Tomorrowland ride does its white spire remind you of?',
        hint: 'Space Mountain! The new marquee arrived in 2026 with a Space Mountain-style spire.',
      },
      // source: BUZZ_MB. evidence: "A refreshed look and bright colors!" ... "new signage and posters"
      {
        type: 'spy',
        id: 'buzz-lightyear-r2',
        prompt: 'Find a brightly colored poster or sign getting you ready for the mission.',
        hint: 'The queue got a refreshed look, bright colors and new signs in 2026.',
      },
      // source: BUZZ. evidence: "The queue of the ride shows different pictures of Buzz Lightyear and the Little Green Men."
      {
        type: 'spy',
        id: 'buzz-lightyear-r3',
        prompt: 'Spot a picture of Buzz and a picture of the Little Green Men. Who did you find first?',
        hint: 'The three-eyed aliens are Buzz’s helpers. They show up again in the big final battle!',
      },
      // source: BUZZ_FAN. evidence: battery cells and pipes plugging into Star Command
      {
        type: 'spy',
        id: 'buzz-lightyear-r4',
        prompt: 'Find the giant batteries and the pipes that plug into Star Command.',
        hint: 'Those batteries are what Zurg wants to steal. Protect them, Space Ranger!',
      },
      // source: BUZZ_WDWNT. evidence: "Buzz is still on the platform between the Zurg wanted poster and the View Master toy."
      {
        type: 'spy',
        id: 'buzz-lightyear-r5',
        prompt: 'Find Zurg’s wanted poster. What would you write on it?',
        hint: 'Evil Emperor Zurg is the most wanted villain in the galaxy. You will meet him on the ride.',
      },
      // source: BUZZ_FAN. evidence: A Buzz Lightyear animatronic with wings open ... Buzz's face is a projected screen.
      {
        type: 'spy',
        id: 'buzz-lightyear-r9',
        prompt: 'Find Buzz on his platform. Are his wings open or closed?',
        hint: 'Open! He’s an Audio-Animatronic figure, and his moving face is projected.',
      },
      // source: BUZZ_WDWNT. evidence: The View Master now also shows Buddy among its scenes.
      {
        type: 'spy',
        id: 'buzz-lightyear-r8',
        prompt: 'Find the giant View-Master toy. Watch the scenes: can you spot Buddy the robot?',
        hint: 'Buddy was added to the View-Master in 2026, right after joining Star Command.',
      },
      // NOTE: sources confirm these three murals/displays exist but not where they sit relative to Buzz's platform.
      // source: BUZZ_WDWNT. evidence: The Sector 9 scan murals "appear unchanged."
      {
        type: 'spy',
        id: 'buzz-lightyear-r7',
        prompt: 'Find the “Sector 9” scan murals on the wall.',
        hint: 'These murals survived the big 2026 update unchanged, a treat for longtime fans.',
      },
      // source: BUZZ_WDWNT. evidence: "Star Command Power Center display also appears unchanged."
      {
        type: 'spy',
        id: 'buzz-lightyear-r-spy1',
        prompt: 'Find the Star Command Power Center display. What do you think it powers?',
        hint: 'It survived the 2026 update unchanged, like the Sector 9 murals.',
      },
      // source: BUZZ_WDWNT. evidence: "The green aliens' journey mural is also unchanged."
      {
        type: 'spy',
        id: 'buzz-lightyear-r-spy2',
        prompt: 'Find the mural that follows the little green aliens’ journey. Where are they going?',
        hint: 'This mural is also unchanged from before the 2026 update.',
      },
      // source: BUZZ_FAN. evidence: The briefing uses an oversized, toy-instruction-style explanation.
      {
        type: 'spy',
        id: 'buzz-lightyear-r10',
        prompt: 'Listen to Buzz’s mission briefing. Does it look like a toy’s instruction sheet?',
        hint: 'It’s styled like the giant instructions that come in a toy box.',
      },
      // source: BUZZ_WDWNT. evidence: The loading zone sign now reads "Aim for the Z," replacing the old "Score Counter."
      {
        type: 'spy',
        id: 'buzz-lightyear-r11',
        prompt: 'Near loading, find the sign with a tip for scoring big.',
        hint: 'It says “Aim for the Z.” It replaced the old “Score Counter” sign in 2026.',
      },
      // source: BUZZ_OPEN. evidence: Vehicles have "Star Command styling and onboard screens displaying real-time scoring."
      {
        type: 'spy',
        id: 'buzz-lightyear-r12',
        prompt: 'Watch the Star Cruisers roll by. Can you spot the screens on board?',
        hint: 'Since 2026, every vehicle has screens that show your score in real time.',
      },
      // evidence: "a Space Mountain-style white spire"
      {
        type: 'photo',
        id: 'buzz-lightyear-r-photo1',
        prompt: 'From the line, take a photo of the new entrance sign and its tall white spire.',
        tip: 'Step back to fit the spire in.',
        source: BUZZ_EGGS,
      },
      // evidence: "Buzz is still on the platform between the Zurg wanted poster and the View Master toy."
      {
        type: 'photo',
        id: 'buzz-lightyear-r-photo2',
        prompt: 'From the line, photograph Buzz Lightyear on his platform. Strike his pose!',
        tip: 'Buzz stands between the Zurg wanted poster and the giant View-Master.',
        source: BUZZ_WDWNT,
      },
      // evidence: "Buzz is still on the platform between the Zurg wanted poster and the View Master toy."
      {
        type: 'photo',
        id: 'buzz-lightyear-r-photo3',
        prompt: 'From the line, take a photo of Zurg’s wanted poster. Make your meanest Zurg face next to it!',
        tip: 'It’s on one side of Buzz’s platform.',
        source: BUZZ_WDWNT,
      },
      // evidence: "now shows an image of Buddy, the support bot, among the scenes."
      {
        type: 'photo',
        id: 'buzz-lightyear-r-photo4',
        prompt: 'From the line, photograph the giant View-Master toy.',
        tip: 'Buddy the robot is one of the pictures. Can you see him?',
        source: BUZZ_WDWNT,
      },
      // evidence: "Sector 9 scan murals appear unchanged."
      {
        type: 'photo',
        id: 'buzz-lightyear-r-photo5',
        prompt: 'From the line, take a photo of the Sector 9 scan murals.',
        tip: 'They are on the wall as you walk.',
        source: BUZZ_WDWNT,
      },

      // ---- Trivia ----
      // evidence: "Replaced: Delta Dreamflight"
      {
        type: 'trivia',
        id: 'buzz-lightyear-x1',
        question: 'Which ride was here before Buzz Lightyear’s Space Ranger Spin?',
        choices: ['Delta Dreamflight', 'Mr. Toad’s Wild Ride', 'Captain EO', 'Horizons'],
        answer: 0,
        explain: 'Buzz replaced Delta Dreamflight when it opened in 1998.',
        source: BUZZ,
      },
      // evidence: "originally constructed in 1972"
      {
        type: 'truefalse',
        id: 'buzz-lightyear-x2',
        statement: 'The track and ride system were first built for a different ride in 1972.',
        answer: true,
        explain: 'Fact! It was built in 1972 for If You Had Wings.',
        source: BUZZ,
      },
      // evidence: "to steal the batteries (known as "crystallic fusion cells")"
      {
        type: 'trivia',
        id: 'buzz-lightyear-x3',
        question: 'What is Zurg trying to steal?',
        choices: ['Buzz’s wings', 'Batteries called crystallic fusion cells', 'Woody’s hat', 'The claw'],
        answer: 1,
        explain: 'Zurg wants the batteries, called crystallic fusion cells.',
        source: BUZZ,
      },
      // evidence: "Participants are "Star Command" raw recruits sent to defeat Zurg."
      {
        type: 'trivia',
        id: 'buzz-lightyear-x4',
        question: 'Who are you on this ride?',
        choices: ['Pizza Planet cooks', 'Star Command recruits', 'Zurg’s robots', 'Toys in Andy’s room'],
        answer: 1,
        explain: 'You’re brand-new Star Command recruits sent to defeat Zurg!',
        source: BUZZ,
      },
      // evidence: "originally sponsored the Magic Kingdom attraction from its opening to 1999."
      {
        type: 'trivia',
        id: 'buzz-lightyear-x5',
        question: 'Which toy company first sponsored this ride?',
        choices: ['Lego', 'Hasbro', 'Mattel', 'Fisher-Price'],
        answer: 2,
        explain: 'Mattel sponsored it from opening day until 1999.',
        source: BUZZ,
      },
      // evidence: "However as of the 2026 refurbishment, they are now handheld like the other versions."
      {
        type: 'truefalse',
        id: 'buzz-lightyear-x6',
        statement: 'Since 2026, you can pick up and hold your blaster.',
        answer: true,
        explain: 'Fact! The blasters were stuck in place before, and now they’re handheld.',
        source: BUZZ,
      },
      // evidence: "allowing them to board XP 37 Star Cruiser"
      {
        type: 'trivia',
        id: 'buzz-lightyear-r13',
        question: 'What is your ride vehicle called?',
        choices: ['XP-37 Star Cruiser', 'Rocket Racer 9', 'Zurg Zapper', 'Galaxy Bus'],
        answer: 0,
        explain: 'You board an XP-37 Star Cruiser.',
        source: BUZZ,
      },
      // evidence: "The joystick allows full 360-degree rotation of the vehicle to assist in aiming."
      {
        type: 'truefalse',
        id: 'buzz-lightyear-r14',
        statement: 'The joystick can spin your Star Cruiser all the way around.',
        answer: true,
        explain: 'Fact! It spins a full 360 degrees to help you aim.',
        source: BUZZ,
      },
      // evidence: Each vehicle has two laser guns, one red and one green, so guests can tell which laser hit a target.
      {
        type: 'trivia',
        id: 'buzz-lightyear-r15',
        question: 'Each Star Cruiser has two blasters. What colors are their lasers?',
        choices: ['Red and green', 'Blue and yellow', 'Pink and purple', 'Both white'],
        answer: 0,
        explain: 'One red and one green, so you can tell whose shot hit the target.',
        source: BUZZ_MB,
      },
      // evidence: Guests can now take the blasters off their holsters, which had been fixed for 27 years.
      {
        type: 'guess',
        id: 'buzz-lightyear-r16',
        question: 'For how many years were the blasters stuck in place before 2026?',
        answer: 27,
        min: 1,
        max: 50,
        step: 1,
        unit: 'years',
        tolerance: 2,
        explain: '27 years! Now you can lift them out of their holsters.',
        source: BUZZ_MB,
      },
      // evidence: Buddy, described as "a new support robot created by Walt Disney Imagineering and Pixar."
      {
        type: 'trivia',
        id: 'buzz-lightyear-r17',
        question: 'Who created Buddy, the new support robot?',
        choices: ['Walt Disney Imagineering and Pixar', 'Zurg', 'The Little Green Men', 'Andy'],
        answer: 0,
        explain: 'Imagineers and Pixar made Buddy together for the 2026 update.',
        source: BUZZ_EGGS,
      },
      // evidence: "I'll bring you in for landing. That was astro-mazing."
      {
        type: 'trivia',
        id: 'buzz-lightyear-r18',
        question: 'Which fun word does Buddy use?',
        choices: ['Astro-mazing', 'Star-tastic', 'Zurg-errific', 'Rocket-rific'],
        answer: 0,
        explain: 'Buddy says “That was astro-mazing.”',
        source: BUZZ_WDWNT,
      },
      // evidence: "Zurg is in his spaceship, which he calls his Spiderbot."
      {
        type: 'trivia',
        id: 'buzz-lightyear-r19',
        question: 'What is Zurg’s spaceship called?',
        choices: ['The Spiderbot', 'The Death Ball', 'The Z-Wing', 'The Claw'],
        answer: 0,
        explain: 'Zurg escapes in his Spiderbot, until Buzz destroys it!',
        source: BUZZ,
      },
      // evidence: Buddy's room / "The ride then enters a robot attack scene." / "slopes down a short hill into Planet Z." / "Zurg's fortress" / "Buzz Lightyear fighting with Zurg"
      {
        type: 'order',
        id: 'buzz-lightyear-r20',
        prompt: 'Put the ride’s scenes in order, first to last.',
        items: ['Training with Buddy', 'Robot attack', 'Planet Z', 'Zurg’s fortress', 'Buzz battles Zurg'],
        explain: 'Buddy trains you, robots attack, you land on Planet Z, sneak into Zurg’s fortress, then watch Buzz battle Zurg.',
        source: BUZZ,
      },
      // evidence: a descent into Planet Z, with space chickens, space spiders, and a volcano spitting green goo.
      {
        type: 'trivia',
        id: 'buzz-lightyear-r21',
        question: 'What does the volcano on Planet Z spit out?',
        choices: ['Green goo', 'Popcorn', 'Bubbles', 'Batteries'],
        answer: 0,
        explain: 'Green goo! Planet Z also has space chickens and space spiders.',
        source: BUZZ_FAN,
      },
      // evidence: Planet Z's green space chickens are recolored from the barnstorming chickens of Delta Dreamflight.
      {
        type: 'truefalse',
        id: 'buzz-lightyear-r22',
        statement: 'The space chickens on Planet Z used to be in the ride that was here before Buzz.',
        answer: true,
        explain: 'Fact! They are recolored barnstorming chickens from Delta Dreamflight.',
        source: BUZZ_FAN,
      },
      // evidence: "Before the 2026 refurbishment, the scene was different and featured the "Astro-Accelerator.""
      {
        type: 'trivia',
        id: 'buzz-lightyear-r23',
        question: 'Before Buddy’s training room, what was the first scene called?',
        choices: ['The Astro-Accelerator', 'The Pizza Planet', 'The Toy Box', 'The Moon Base'],
        answer: 0,
        explain: 'It was the Astro-Accelerator until 2026.',
        source: BUZZ,
      },
      // evidence: "This space was originally home to If You Had Wings, an aviation themed ride sponsored by Eastern Airlines."
      {
        type: 'trivia',
        id: 'buzz-lightyear-r24',
        question: 'The first ride in this building was about flying. What was it called?',
        choices: ['If You Had Wings', 'Peter Pan’s Flight', 'Soarin’', 'Dumbo'],
        answer: 0,
        explain: 'If You Had Wings, an airplane ride sponsored by Eastern Airlines.',
        source: BUZZ,
      },
      // evidence: "originally home to If You Had Wings" / "transformed into Delta Dreamflight" / "the current attraction in 1998" / "reopened on April 8, 2026"
      {
        type: 'order',
        id: 'buzz-lightyear-r25',
        prompt: 'Put this building’s rides in order, oldest first.',
        items: ['If You Had Wings', 'Delta Dreamflight', 'Buzz Lightyear opens (1998)', 'Handheld blasters arrive (2026)'],
        explain: 'If You Had Wings came first, then Delta Dreamflight, then Buzz in 1998, updated in 2026.',
        source: BUZZ,
      },
      // evidence: "Then the unload area shows Buzz Lightyear thanking the guests while holding Zurg in the claw."
      {
        type: 'trivia',
        id: 'buzz-lightyear-r26',
        question: 'At the very end, what is Buzz holding Zurg in?',
        choices: ['The claw', 'A net', 'A toy box', 'A bubble'],
        answer: 0,
        explain: 'The claw! But Zurg promises he’ll be back.',
        source: BUZZ,
      },
      // evidence: The hyperspace tunnel uses "new projection technology showing Buzz Lightyear and Emperor Zurg for the first time during the ride."
      {
        type: 'truefalse',
        id: 'buzz-lightyear-r27',
        statement: 'Since 2026, you see Buzz and Zurg in the hyperspace tunnel.',
        answer: true,
        explain: 'Fact! New projections show them both there for the first time.',
        source: BUZZ_EGGS,
      },
      // evidence: Scores can now go beyond 999,999, and the rank names were updated.
      {
        type: 'truefalse',
        id: 'buzz-lightyear-r30',
        statement: 'Since 2026, scores can go higher than 999,999.',
        answer: true,
        explain: 'Fact! And the rank names were updated too.',
        source: BUZZ_WDWNT,
      },
      // evidence: The Z-targets react to the blasters with lighting in the rider's color.
      {
        type: 'trivia',
        id: 'buzz-lightyear-r31',
        question: 'What happens when you hit a Z target now?',
        choices: ['It lights up in your laser’s color', 'It plays a song', 'It sprays water', 'Nothing'],
        answer: 0,
        explain: 'The Z targets light up in your color, so you know it was your hit.',
        source: BUZZ_WDWNT,
      },

      // ---- Ride games ----
      {
        type: 'challenge',
        id: 'buzz-lightyear-x20',
        prompt: 'Space Ranger training: practice aiming with finger blasters at an imaginary Z target.',
      },
      {
        type: 'challenge',
        id: 'buzz-lightyear-r33',
        prompt: 'Zurg’s last words at the end of the ride: everyone say “I’ll be back!” in your best villain voice.',
      },
      {
        type: 'challenge',
        id: 'buzz-lightyear-r34',
        prompt: 'Be Buddy the robot! Take turns saying “That was astro-mazing!” in a robot voice.',
      },
      { type: 'wyr', id: 'buzz-lightyear-r35', a: 'Blast with the red laser', b: 'Blast with the green laser' },
      { type: 'wyr', id: 'buzz-lightyear-r36', a: 'Steer the joystick', b: 'Just focus on blasting' },
      {
        type: 'emoji',
        id: 'buzz-lightyear-x26',
        emojis: '👽 👽 👽',
        hint: 'Three-eyed friends who help Buzz in the final battle.',
        choices: ['Little Green Men', 'Minions', 'Martians', 'Smurfs'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'buzz-lightyear-r37',
        emojis: '🎯 🇿',
        hint: 'The tip on the sign at loading.',
        choices: ['Aim for the Z', 'Zap the Zoo', 'Zero Points', 'Zoom Zone'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'buzz-lightyear-r38',
        emojis: '🤖 🤝',
        hint: 'The new robot who trains you in the first scene.',
        choices: ['Buddy', 'WALL-E', 'Baymax', 'R2-D2'],
        answer: 0,
      },
    ],
  },

  peoplemover: {
    facts: [
      // evidence: "The Edison Electric Institute was the original institutional patron of the attraction."
      { text: 'The Edison Electric Institute was the PeopleMover’s first sponsor.', source: PM },
      // evidence: "built as open-air cars that traveled under a permanent roof over the guideway"
      { text: 'The cars are open-air and ride under a roof that covers the track.', source: PM },
      // evidence: "new multicolored LED lighting that moves in time with the music being played in Tomorrowland"
      { text: 'Colorful LED lights on the track move in time with Tomorrowland’s music.', source: PM },
      // evidence: "the Blue Line, the Red Line, and the Green Line"
      {
        text: 'From 1994 to 2009, the story said the PeopleMover was the Blue Line, with Red and Green Lines too.',
        source: PM,
      },
      // evidence: About 10 minutes long. Track length is 5,484 feet
      { text: 'A trip lasts about 10 minutes on 5,484 feet of track.', source: PM_TP },
    ],
    quests: [
      // ---- Look around the queue, in walking order ----
      // source: PM. evidence: "which resides in the center of Rocket Tower Plaza and beneath the Astro Orbiter"
      {
        type: 'spy',
        id: 'peoplemover-r1',
        prompt: 'Look straight up. What is flying right above the PeopleMover station?',
        hint: 'Astro Orbiter’s rockets! The station sits in Rocket Tower Plaza, right beneath them.',
      },
      // source: PM_TP. evidence: The entrance is next to the Lunching Pad
      {
        type: 'spy',
        id: 'peoplemover-r3',
        prompt: 'Find the Lunching Pad snack stand near the entrance. Say its name out loud. Get the joke?',
        hint: 'Lunch + launch pad. It’s the PeopleMover’s next-door neighbor.',
      },
      // source: PM_TP. evidence: "A turnstile marks the start of the queue."
      {
        type: 'spy',
        id: 'peoplemover-r-spy1',
        prompt: 'Find the turnstile where the line begins. Walk through it, one at a time!',
        hint: 'Past the turnstile, the line zigzags in switchbacks in the open air.',
      },
      // source: PM_TP. evidence: Because of the continuous load system, the author estimates about 1.5 minutes of waiting per 100 people ahead of you.
      {
        type: 'spy',
        id: 'peoplemover-x14',
        prompt: 'Spot a PeopleMover train gliding by. Does it ever stop?',
        hint: 'Never! The trains keep moving while you board, so the line moves fast: about 1.5 minutes per 100 people.',
      },
      // source: PM_TP. evidence: The trams have five cars, each with two benches facing each other.
      {
        type: 'spy',
        id: 'peoplemover-r4',
        prompt: 'Count the cars on one passing train.',
        hint: 'Five cars, each with two benches that face each other.',
      },
      // source: PM. evidence: "new multicolored LED lighting that moves in time with the music being played in Tomorrowland"
      {
        type: 'spy',
        id: 'peoplemover-r5',
        prompt: 'Look at the track’s colored lights. Are they moving to the music?',
        hint: 'The LED lights dance in time with the Tomorrowland music.',
      },
      // source: PM. evidence: "the trains were designed were built as open-air cars that traveled under a permanent roof over the guideway."
      {
        type: 'spy',
        id: 'peoplemover-r6',
        prompt: 'Look at the track above. What keeps riders dry in the rain?',
        hint: 'A permanent roof over the track. At Disneyland, the cars had covers instead.',
      },
      // source: PM. evidence: "Passing the queue, passengers step onto the Speedramp (inclined moving walkway) to the second level."
      {
        type: 'spy',
        id: 'peoplemover-r7',
        prompt: 'Find the moving ramp that carries you up to the trains.',
        hint: 'It’s called the Speedramp. Hold the handrail and let it lift you to the second level!',
      },
      // source: PM_TP. evidence: A small WED Transportation Systems, Inc. logo appears on the back of a boarding-instruction sign.
      {
        type: 'spy',
        id: 'peoplemover-r8',
        prompt: 'Super-secret mission: find a tiny “WED Transportation Systems” logo.',
        hint: 'It’s on the back of a boarding sign. Disney once sold this kind of ride system, and it went to just one airport, in Houston.',
      },
      // source: PM. evidence: "which matches the speed of the PeopleMover trains"
      {
        type: 'spy',
        id: 'peoplemover-r9',
        prompt: 'At the top, watch the boarding platform. Is it standing still?',
        hint: 'No! It moves at the same speed as the trains so you can step right on.',
      },
      // source: PM_TP. evidence: Linear Synchronous Induction motors ... 629 electromagnets pulsing to move the cars
      {
        type: 'spy',
        id: 'peoplemover-r10',
        prompt: 'When a train glides by, listen closely. How loud is it?',
        hint: 'Super quiet! There’s no engine on board. Magnets in the track pull the train along.',
      },
      // evidence: "which resides in the center of Rocket Tower Plaza and beneath the Astro Orbiter"
      {
        type: 'photo',
        id: 'peoplemover-r-photo1',
        prompt: 'From the line, take a photo of the Astro Orbiter rockets flying right above the station.',
        tip: 'Tilt your camera up and wait for a rocket to swing by.',
        source: PM,
      },
      // evidence: The entrance is next to the Lunching Pad
      {
        type: 'photo',
        id: 'peoplemover-r-photo3',
        prompt: 'From the line, take a photo with the Lunching Pad sign.',
        tip: 'It is right next to the entrance.',
        source: PM_TP,
      },
      // evidence: The trams have five cars, each with two benches facing each other.
      {
        type: 'photo',
        id: 'peoplemover-r-photo4',
        prompt: 'From the line, photograph a whole PeopleMover train gliding by. Can you fit all five cars in?',
        tip: 'Count the cars in your photo.',
        source: PM_TP,
      },
      // evidence: "Passing the queue, passengers step onto the Speedramp (inclined moving walkway) to the second level."
      {
        type: 'photo',
        id: 'peoplemover-r-photo5',
        prompt: 'From the line, take a photo of the Speedramp that carries riders up to the trains.',
        tip: 'Take it before you step on. Keep both hands free on the ramp.',
        source: PM,
      },
      // evidence: "new multicolored LED lighting that moves in time with the music being played in Tomorrowland"
      {
        type: 'photo',
        id: 'peoplemover-r-photo6',
        prompt: 'From the line, photograph the track’s colored lights.',
        tip: 'The lights show best after dark.',
        source: PM,
      },

      // ---- Trivia ----
      // evidence: "(WED for Walter Elias Disney)"
      {
        type: 'trivia',
        id: 'peoplemover-x1',
        question: 'The PeopleMover was first called the WEDway. What does WED stand for?',
        choices: ['Walter Elias Disney', 'World Electric Drive', 'Wheels Every Day', 'Wonderful Exciting Distance'],
        answer: 0,
        explain: 'WED stands for Walter Elias Disney, Walt’s full name.',
        source: PM,
      },
      // evidence: "which resides in the center of Rocket Tower Plaza and beneath the Astro Orbiter"
      {
        type: 'trivia',
        id: 'peoplemover-x2',
        question: 'Which ride sits right on top of the PeopleMover station?',
        choices: ['Space Mountain', 'Astro Orbiter', 'TRON', 'Dumbo'],
        answer: 1,
        explain: 'The station is beneath the Astro Orbiter in Rocket Tower Plaza.',
        source: PM,
      },
      // evidence: "designed to remain at the same elevation from start to finish"
      {
        type: 'truefalse',
        id: 'peoplemover-x3',
        statement: 'The PeopleMover track goes up and down hills like a roller coaster.',
        answer: false,
        explain: 'Fiction! The track stays at the same height from start to finish.',
        source: PM,
      },
      // evidence: "which matches the speed of the PeopleMover trains"
      {
        type: 'truefalse',
        id: 'peoplemover-x4',
        statement: 'You board from a moving platform that goes the same speed as the trains.',
        answer: true,
        explain: 'Fact! The platform matches the trains’ speed so you can step right on.',
        source: PM,
      },
      // evidence: "then get a view down into Buzz Lightyear's Space Ranger Spin"
      {
        type: 'trivia',
        id: 'peoplemover-x5',
        question: 'Besides Space Mountain, which ride can you look down into?',
        choices: ['Buzz Lightyear’s Space Ranger Spin', 'Haunted Mansion', 'Peter Pan’s Flight', 'Jungle Cruise'],
        answer: 0,
        explain: 'You get a view down into Buzz Lightyear’s Space Ranger Spin.',
        source: PM,
      },
      // evidence: "On July 1, 2022, the narration was updated to feature an entirely new narration by ORAC-5"
      {
        type: 'trivia',
        id: 'peoplemover-x6',
        question: 'Who is the PeopleMover’s narrator since 2022?',
        choices: ['Buzz Lightyear', 'ORAC-5', 'Mickey Mouse', 'Tom Morrow'],
        answer: 1,
        explain: 'A computer voice named ORAC-5 tells you about the trip.',
        source: PM,
      },
      // evidence: "the PeopleMover does not have to stop during Space Mountain breakdowns"
      {
        type: 'truefalse',
        id: 'peoplemover-x7',
        statement: 'If Space Mountain stops, the PeopleMover has to stop too.',
        answer: false,
        explain: 'Fiction! They run on separate systems, so the PeopleMover keeps going.',
        source: PM,
      },
      // evidence: "a female voice paging for Mr. Tom Morrow"
      {
        type: 'trivia',
        id: 'peoplemover-x8',
        question: 'Whose name do you hear being called over the speakers?',
        choices: ['Mr. Tom Morrow', 'Mr. Space Man', 'Dr. Future', 'Captain Comet'],
        answer: 0,
        explain: 'A voice pages “Mr. Tom Morrow.” Say it fast: Tomorrow!',
        source: PM,
      },
      // evidence: "passes a large diorama containing a portion of the Progress City/"Epcot" model"
      {
        type: 'trivia',
        id: 'peoplemover-x9',
        question: 'What model city do you pass on the ride?',
        choices: ['Toontown', 'Progress City', 'Monstropolis', 'Radiator Springs'],
        answer: 1,
        explain: 'You pass a big model of part of Progress City, Walt’s city of the future.',
        source: PM,
      },
      // evidence: For the New York World's Fair, Imagineers worked with Ford on the WEDway PeopleMover, designed to provide "transportation as an attraction."
      {
        type: 'guess',
        id: 'peoplemover-x10',
        question: 'Imagineers first tried out a PeopleMover idea at a World’s Fair. In what year?',
        answer: 1964,
        min: 1900,
        max: 2000,
        step: 1,
        unit: '',
        tolerance: 3,
        explain: 'At the 1964 New York World’s Fair, with Ford, as “transportation as an attraction.”',
        source: PM_TP,
      },
      // evidence: "WEDway PeopleMover (July 1, 1975 – June 11, 1994)" / "Tomorrowland Transit Authority (June 12, 1994 – October 1, 2009)" / "(October 2, 2009 – present"
      {
        type: 'order',
        id: 'peoplemover-x11',
        prompt: 'Put the PeopleMover’s names in order, oldest first.',
        items: ['WEDway PeopleMover', 'Tomorrowland Transit Authority', 'Tomorrowland Transit Authority PeopleMover'],
        explain: 'WEDway in 1975, Tomorrowland Transit Authority in 1994, and its current name since 2009.',
        source: PM,
      },
      // evidence: "instead relying on Linear induction motors"
      {
        type: 'truefalse',
        id: 'peoplemover-x12',
        statement: 'Spinning rubber tires push the Magic Kingdom PeopleMover along.',
        answer: false,
        explain: 'Fiction! It uses linear induction motors in the track instead. Disneyland’s used Goodyear tires.',
        source: PM,
      },
      // evidence: "Afterwards, the ride crosses the Walt Disney World Railroad tracks"
      {
        type: 'trivia',
        id: 'peoplemover-x13',
        question: 'What other train’s tracks does the PeopleMover cross over?',
        choices: ['The Monorail', 'The Walt Disney World Railroad', 'Big Thunder Mountain', 'The Seven Dwarfs Mine Train'],
        answer: 1,
        explain: 'It crosses the Walt Disney World Railroad tracks on the way to Space Mountain.',
        source: PM,
      },
      // evidence: About 10 minutes long.
      {
        type: 'guess',
        id: 'peoplemover-r11',
        question: 'About how many minutes does a PeopleMover trip last?',
        answer: 10,
        min: 1,
        max: 30,
        step: 1,
        unit: 'minutes',
        tolerance: 2,
        explain: 'About 10 relaxing minutes.',
        source: PM_TP,
      },
      // evidence: Track length is 5,484 feet ... compared with 3,196 feet for Space Mountain's track.
      {
        type: 'guess',
        id: 'peoplemover-r12',
        question: 'About how many feet of track does the PeopleMover glide along?',
        answer: 5484,
        min: 1000,
        max: 10000,
        step: 100,
        unit: 'feet',
        tolerance: 500,
        explain: '5,484 feet. That’s much longer than Space Mountain’s 3,196-foot track!',
        source: PM_TP,
      },
      // evidence: Maximum speed is just under 7 mph.
      {
        type: 'trivia',
        id: 'peoplemover-r13',
        question: 'What is the PeopleMover’s top speed?',
        choices: ['Just under 7 mph', 'About 27 mph', 'About 60 mph', 'Just under 1 mph'],
        answer: 0,
        explain: 'Just under 7 mph. Slow and breezy!',
        source: PM_TP,
      },
      // evidence: 629 electromagnets pulsing to move the cars
      {
        type: 'guess',
        id: 'peoplemover-r14',
        question: 'How many electromagnets in the track help move the trains?',
        answer: 629,
        min: 10,
        max: 2000,
        step: 10,
        unit: 'magnets',
        tolerance: 100,
        explain: '629 electromagnets pulse to push the cars along.',
        source: PM_TP,
      },
      // evidence: Two-way traffic occurs only near Space Mountain. Elsewhere it's a single track.
      {
        type: 'truefalse',
        id: 'peoplemover-r15',
        statement: 'Trains pass each other going opposite ways all along the ride.',
        answer: false,
        explain: 'Fiction! Two-way traffic only happens near Space Mountain.',
        source: PM_TP,
      },
      // evidence: the alien getting her hair done wears a belt with a red buckle bearing a black Mickey face.
      {
        type: 'trivia',
        id: 'peoplemover-r16',
        question: 'Where is a Hidden Mickey in the futuristic salon scene?',
        choices: ['On an alien’s belt buckle', 'In the hair dryer', 'On the ceiling', 'In a mirror'],
        answer: 0,
        explain: 'The alien getting her hair done has a Mickey face on her red belt buckle.',
        source: PM_TP,
      },
      // evidence: Mr. Johnson, the flight director of Mission to Mars, which closed in 1993.
      {
        type: 'trivia',
        id: 'peoplemover-r17',
        question: 'Tom Morrow is told to contact “Mr. Johnson in the control tower.” Who is Mr. Johnson?',
        choices: [
          'The flight director from an old ride, Mission to Mars',
          'Walt Disney’s cousin',
          'The PeopleMover driver',
          'Buzz Lightyear’s boss',
        ],
        answer: 0,
        explain: 'A sweet nod to Mission to Mars, a Tomorrowland ride that closed in 1993.',
        source: PM_TP,
      },
      // evidence: "The original narration was provided by longtime Disney announcer, Jack Wagner."
      {
        type: 'trivia',
        id: 'peoplemover-r18',
        question: 'Who gave the PeopleMover’s very first narration?',
        choices: ['Disney announcer Jack Wagner', 'Walt Disney', 'Buzz Lightyear', 'ORAC-5'],
        answer: 0,
        explain: 'Longtime Disney announcer Jack Wagner.',
        source: PM,
      },
      // evidence: "the voice of ORAC One – "The Commuter Computer" voiced by actor Ronnie Schell"
      {
        type: 'trivia',
        id: 'peoplemover-r19',
        question: 'Before ORAC-5 there was ORAC One. What was its nickname?',
        choices: ['The Commuter Computer', 'The Talking Train', 'Robo-Guide', 'The Space Brain'],
        answer: 0,
        explain: 'ORAC One was “The Commuter Computer.”',
        source: PM,
      },
      // evidence: The narration was updated and now references attractions such as If You Had Wings and The Timekeeper, plus TRON Lightcycle / Run.
      {
        type: 'truefalse',
        id: 'peoplemover-r20',
        statement: 'Today’s narration sneaks in names of old Tomorrowland rides that are gone.',
        answer: true,
        explain: 'Fact! Listen for If You Had Wings and The Timekeeper.',
        source: PM_TP,
      },
      // evidence: "The ride soft-opened on April 25, 2021, and officially reopened the next day."
      {
        type: 'trivia',
        id: 'peoplemover-r21',
        question: 'After closing in 2020, when did the PeopleMover glide again?',
        choices: ['April 2021', 'December 2020', 'January 2023', 'It never closed'],
        answer: 0,
        explain: 'It soft-opened on April 25, 2021 and officially reopened the next day.',
        source: PM,
      },
      // evidence: you peek into the Star Traders gift shop from above, pass the Tomorrowland Speedway, and run alongside TRON Lightcycle / Run.
      {
        type: 'trivia',
        id: 'peoplemover-r22',
        question: 'Which race track do you glide past on the PeopleMover?',
        choices: ['Tomorrowland Speedway', 'Daytona', 'Test Track', 'Radiator Springs Racers'],
        answer: 0,
        explain: 'You pass the Tomorrowland Speedway and run alongside TRON.',
        source: PM_TP,
      },

      // ---- Ride games ----
      {
        type: 'challenge',
        id: 'peoplemover-x19',
        prompt: 'Say “Paging Mr. Tom Morrow” in your fanciest announcer voice.',
      },
      {
        type: 'challenge',
        id: 'peoplemover-r23',
        prompt: 'Be ORAC-5! Take turns giving a robot-voice tour of something you can see from the line.',
      },
      {
        type: 'wyr',
        id: 'peoplemover-r24',
        a: 'See Space Mountain in the dark',
        b: 'See Space Mountain with the work lights on',
      },
      { type: 'wyr', id: 'peoplemover-r25', a: 'Sit on the forward-facing bench', b: 'Sit on the backward-facing bench' },
      {
        type: 'emoji',
        id: 'peoplemover-x26',
        emojis: '🧑‍🤝‍🧑 ➡️ 🚝',
        hint: 'It’s what this ride does!',
        choices: ['Monorail', 'PeopleMover', 'Skyway', 'Railroad'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'peoplemover-x27',
        emojis: '🔮 🏙️',
        hint: 'The city model you pass, built for a bright future.',
        choices: ['Progress City', 'Emerald City', 'Atlantis', 'Monstropolis'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'peoplemover-r26',
        emojis: '📢 🕰️ ➡️ 📅',
        hint: 'Mr. Tom Morrow’s name, said fast.',
        choices: ['Tomorrow', 'Yesterday', 'Today', 'Someday'],
        answer: 0,
      },
    ],
  },

  'astro-orbiter': {
    facts: [
      // evidence: "averages 1.2 million miles a year"
      { text: 'The rockets travel about 1.2 million miles every year!', source: AO },
      // evidence: "No form of the attraction existed in the Magic Kingdom at Walt Disney World until 1974"
      { text: 'The ride arrived in 1974, three years after Magic Kingdom opened.', source: AO },
      // evidence: "various planets on the outside of the attraction"
      { text: 'Planets on the tower make it look like the rockets weave between them.', source: AO },
      // evidence: "lengthy refurbishment that saw the ride system and most of the theming removed"
      { text: 'In 2025 the whole ride was taken apart and rebuilt, and its planets came back bright and vibrant.', source: AO_REBUILT },
    ],
    quests: [
      // ---- Look around the queue, in walking order ----
      // source: AO. evidence: "on top of the PeopleMover platform"
      {
        type: 'spy',
        id: 'astro-orbiter-r1',
        prompt: 'From the ground, look up. What is the rocket ride sitting on top of?',
        hint: 'The PeopleMover station! Astro Orbiter is perched right on its roof.',
      },
      // source: AO. evidence: "Each of the 12 open-air vehicles"
      {
        type: 'spy',
        id: 'astro-orbiter-r2',
        prompt: 'Count the rockets flying around. Did you get them all?',
        hint: 'There are 12 rockets.',
      },
      // source: AO. evidence: "a highly stylized iron-work tower in lieu of the center rocket"
      {
        type: 'spy',
        id: 'astro-orbiter-r3',
        prompt: 'Find the fancy ironwork tower in the middle of the ride.',
        hint: 'A giant Saturn V rocket stood here when the ride was Star Jets. The tower arrived in 1994.',
      },
      // source: AO_REBUILT. evidence: "very vibrant planets"
      {
        type: 'spy',
        id: 'astro-orbiter-x11',
        prompt: 'Look up at the planets on the tower. Which one is your favorite color?',
        hint: 'The planets were taken down and brought back bright and vibrant in the 2025 rebuild.',
      },
      // source: AO. evidence: "appear as if the rockets were weaving between the planets"
      {
        type: 'spy',
        id: 'astro-orbiter-r4',
        prompt: 'Watch one rocket closely. Does it look like it’s weaving between the planets?',
        hint: 'That’s the Imagineers’ trick: the planets sit just right so rockets seem to zip between them.',
      },
      // source: AO_DISNEY, AO_LIFT. evidence: "Control how high you fly by pulling or pushing the lever inside your ship." / October 2025: the central lift stopped working, so the ride ran at about half height; no later fix confirmed
      {
        type: 'spy',
        id: 'astro-orbiter-x12',
        prompt: 'Watch the rockets. Do they all fly at the same height?',
        hint: 'Every ship has a lever inside to change height. Fans reported in fall 2025 that the rebuilt ride was running lower than before, so heights may vary.',
      },
      // source: AO_DISNEY. evidence: "your retro 2-passenger spacecraft"
      {
        type: 'spy',
        id: 'astro-orbiter-r5',
        prompt: 'How many space travelers can you count in one rocket?',
        hint: 'Each retro spacecraft holds two passengers.',
      },
      // source: AO_TRIP. evidence: "Access happens via a dedicated elevator tucked beside the PeopleMover queue."
      {
        type: 'spy',
        id: 'astro-orbiter-r6',
        prompt: 'Find the elevator that will lift you up to the rockets.',
        hint: 'It’s tucked beside the PeopleMover line. Very few rides start with an elevator!',
      },
      // source: AO_WDWNT. evidence: "to guide you up to the Rocket Platform via these elevators."
      {
        type: 'spy',
        id: 'astro-orbiter-r7',
        prompt: 'At the top, find out what the boarding area is called.',
        hint: 'It’s the Rocket Platform, high above Tomorrowland.',
      },
      // source: AO_WDWNT. evidence: "A lovely view of Space Mountain can be seen to the right."
      {
        type: 'spy',
        id: 'astro-orbiter-r8',
        prompt: 'Up on the platform, find Space Mountain’s white cone.',
        hint: 'Look to the right. It’s one of the best views of Space Mountain in the park.',
      },
      // source: PM. evidence: "The attraction has a single station, which resides in the center of Rocket Tower Plaza and beneath the Astro Orbiter."
      {
        type: 'spy',
        id: 'astro-orbiter-r9',
        prompt: 'Spot a PeopleMover train gliding near the station below you.',
        hint: 'The PeopleMover’s only station is right underneath Astro Orbiter.',
      },
      // evidence: "while the sights and sounds of Tomorrowland whirl by far below"
      {
        type: 'photo',
        id: 'astro-orbiter-r10',
        prompt: 'From the line, snap a photo of a rocket flying past the planets.',
        tip: 'Wait for a rocket to swing by the colorful planets.',
        source: AO_DISNEY,
      },
      // evidence: "a highly stylized iron-work tower in lieu of the center rocket"
      {
        type: 'photo',
        id: 'astro-orbiter-r-photo2',
        prompt: 'From the line, take a photo of the fancy ironwork tower in the middle of the ride.',
        tip: 'Look up from the ground. Try to fit the tower and a rocket in the same shot.',
        source: AO,
      },
      // evidence: "very vibrant planets"
      {
        type: 'photo',
        id: 'astro-orbiter-r-photo3',
        prompt: 'From the line, photograph your favorite planet on the tower.',
        tip: 'The planets were rebuilt in 2025 and are bright and vibrant.',
        source: AO_REBUILT,
      },
      // evidence: "Access happens via a dedicated elevator tucked beside the PeopleMover queue."
      {
        type: 'photo',
        id: 'astro-orbiter-r-photo4',
        prompt: 'From the line, take a photo at the elevator that lifts you up to the rockets.',
        tip: 'It is tucked beside the PeopleMover line.',
        source: AO_TRIP,
      },
      // evidence: "A lovely view of Space Mountain can be seen to the right."
      {
        type: 'photo',
        id: 'astro-orbiter-r-photo5',
        prompt: 'From the Rocket Platform, photograph Space Mountain’s white cone.',
        tip: 'Look to the right once you get to the top. Take it while you wait, before you board.',
        source: AO_WDWNT,
      },
      // evidence: "on top of the PeopleMover platform"
      {
        type: 'photo',
        id: 'astro-orbiter-r-photo6',
        prompt: 'From the line, photograph the whole ride perched on top of the PeopleMover station.',
        tip: 'Stand far back on the ground to fit it all in.',
        source: AO,
      },

      // ---- Trivia ----
      // evidence: "circled round and round, 60 feet above the ground"
      {
        type: 'guess',
        id: 'astro-orbiter-x1',
        question: 'Star Jets rockets were built to circle about how many feet above the ground?',
        answer: 60,
        min: 10,
        max: 200,
        step: 5,
        unit: 'feet',
        tolerance: 10,
        explain: 'About 60 feet up, because the ride sits on top of the PeopleMover station.',
        source: AO,
      },
      // evidence: "attached to the central axis by a 20-foot arm"
      {
        type: 'guess',
        id: 'astro-orbiter-x2',
        question: 'How many feet long is the arm holding each rocket?',
        answer: 20,
        min: 5,
        max: 60,
        step: 1,
        unit: 'feet',
        tolerance: 3,
        explain: 'Each rocket is held by a 20-foot arm.',
        source: AO,
      },
      // evidence: "a large Saturn V rocket as the centerpiece"
      {
        type: 'trivia',
        id: 'astro-orbiter-x3',
        question: 'Back when it was Star Jets, what stood in the middle?',
        choices: ['A giant Saturn V rocket', 'A big Moon', 'A robot', 'A flying saucer'],
        answer: 0,
        explain: 'A large Saturn V rocket was the centerpiece.',
        source: AO,
      },
      // evidence: "a highly stylized iron-work tower in lieu of the center rocket"
      {
        type: 'truefalse',
        id: 'astro-orbiter-x4',
        statement: 'Today there is a big rocket in the middle of Astro Orbiter.',
        answer: false,
        explain: 'Fiction! Since 1994 there’s an ironwork tower with planets instead.',
        source: AO,
      },
      // evidence: "The vehicles held up to two passengers"
      {
        type: 'truefalse',
        id: 'astro-orbiter-x5',
        statement: 'Each rocket holds up to two riders.',
        answer: true,
        explain: 'Fact! Up to two space travelers per rocket.',
        source: AO,
      },
      // evidence: "on top of the PeopleMover platform"
      {
        type: 'trivia',
        id: 'astro-orbiter-x6',
        question: 'Astro Orbiter sits on top of which ride’s platform?',
        choices: ['The PeopleMover', 'Space Mountain', 'TRON', 'The Railroad'],
        answer: 0,
        explain: 'It sits on top of the PeopleMover platform.',
        source: AO,
      },
      // evidence: "League of Planets Astro Orbiter"
      {
        type: 'trivia',
        id: 'astro-orbiter-x7',
        question: 'The old PeopleMover narration called it the “League of ___ Astro Orbiter.” Fill it in!',
        choices: ['Stars', 'Planets', 'Rockets', 'Heroes'],
        answer: 1,
        explain: 'From 1994 to 2009 it was called the League of Planets Astro Orbiter.',
        source: AO,
      },
      // evidence: "Duration: 1:30"
      {
        type: 'guess',
        id: 'astro-orbiter-x8',
        question: 'About how many seconds does a flight last?',
        answer: 90,
        min: 20,
        max: 300,
        step: 5,
        unit: 'seconds',
        tolerance: 15,
        explain: 'A flight lasts about 1 minute 30 seconds.',
        source: AO,
      },
      // evidence: "In 1956, the first rocket-spinner attraction opened at Disneyland" / "until 1974" / "re-opened on April 30, 1994, as the Astro Orbiter"
      {
        type: 'order',
        id: 'astro-orbiter-x9',
        prompt: 'Put these rocket rides in order, oldest first.',
        items: ['Disneyland’s Astro Jets (1956)', 'Magic Kingdom’s Star Jets (1974)', 'Astro Orbiter (1994)'],
        explain: 'The first rocket-spinner opened at Disneyland in 1956, Star Jets in 1974, and Astro Orbiter in 1994.',
        source: AO,
      },
      // evidence: "a metal control stick"
      {
        type: 'trivia',
        id: 'astro-orbiter-x10',
        question: 'What do riders use to make the rocket go up and down?',
        choices: ['A button', 'A metal control stick', 'A steering wheel', 'A foot pedal'],
        answer: 1,
        explain: 'Riders use a metal control stick to climb and dive.',
        source: AO,
      },
      // evidence: "The ride at the Magic Kingdom does 11 rotations per minute"
      {
        type: 'guess',
        id: 'astro-orbiter-r11',
        question: 'How many times do the rockets spin around every minute?',
        answer: 11,
        min: 1,
        max: 40,
        step: 1,
        unit: 'spins',
        tolerance: 2,
        explain: '11 spins every minute. Wheee!',
        source: AO,
      },
      // evidence: "averages 1.2 million miles a year"
      {
        type: 'trivia',
        id: 'astro-orbiter-r12',
        question: 'About how far do the rockets travel in a year?',
        choices: ['1.2 million miles', '12 miles', '1,200 miles', '12 billion miles'],
        answer: 0,
        explain: 'About 1.2 million miles a year, all without leaving Tomorrowland!',
        source: AO,
      },
      // evidence: Opening: November 28, 1974 (infobox)
      {
        type: 'guess',
        id: 'astro-orbiter-r13',
        question: 'In what year did the rockets first fly here, as Star Jets?',
        answer: 1974,
        min: 1960,
        max: 2000,
        step: 1,
        unit: '',
        tolerance: 1,
        explain: 'Star Jets opened on November 28, 1974.',
        source: AO,
      },
      // evidence: "the original Star Jets closed in order to undergo a complete makeover as part of the New Tomorrowland."
      {
        type: 'trivia',
        id: 'astro-orbiter-r14',
        question: 'Star Jets became Astro Orbiter in 1994 as part of what?',
        choices: ['The New Tomorrowland', 'A movie premiere', 'A space launch', 'Walt’s birthday'],
        answer: 0,
        explain: 'It got a complete makeover as part of the New Tomorrowland.',
        source: AO,
      },
      // evidence: The entire ride system is "fully removed from its elevated platform in Tomorrowland."
      {
        type: 'truefalse',
        id: 'astro-orbiter-r15',
        statement: 'In 2025, the whole ride system was removed from its platform and rebuilt.',
        answer: true,
        explain: 'Fact! The ride system was fully removed in early 2025, rebuilt, and reopened in June 2025.',
        source: AO_CRANE,
      },
      // evidence: "was closed for more than 5 months as Disney rebuilt the attraction."
      {
        type: 'guess',
        id: 'astro-orbiter-r16',
        question: 'For how many months was Astro Orbiter closed for its 2025 rebuild?',
        answer: 5,
        min: 1,
        max: 24,
        step: 1,
        unit: 'months',
        tolerance: 1,
        explain: 'More than 5 months, and it reopened in June 2025.',
        source: AO_LIFT,
      },
      // evidence: Height requirement: "Any Height"
      {
        type: 'truefalse',
        id: 'astro-orbiter-r17',
        statement: 'You must be a certain height to fly a rocket on Astro Orbiter.',
        answer: false,
        explain: 'Fiction! Space travelers of any height can fly.',
        source: AO_DISNEY,
      },
      // evidence: "Access happens via a dedicated elevator tucked beside the PeopleMover queue."
      {
        type: 'trivia',
        id: 'astro-orbiter-r18',
        question: 'How do you get up to the rockets?',
        choices: ['By elevator', 'By ladder', 'By slide', 'By jetpack'],
        answer: 0,
        explain: 'A special elevator lifts you up to the Rocket Platform.',
        source: AO_TRIP,
      },
      // evidence: "accessible from ground level via an elevator." (Disneyland Rocket Jets)
      {
        type: 'truefalse',
        id: 'astro-orbiter-r19',
        statement: 'Disneyland’s old Rocket Jets also had an elevator up to the rockets.',
        answer: true,
        explain: 'Fact! Its rockets were also reached by an elevator from ground level.',
        source: AO,
      },
      // evidence: "Designer: WED Enterprises/Walt Disney Imagineering"
      {
        type: 'trivia',
        id: 'astro-orbiter-r20',
        question: 'Who designed Astro Orbiter?',
        choices: ['WED Enterprises / Walt Disney Imagineering', 'NASA', 'Pixar', 'Lego'],
        answer: 0,
        explain: 'Walt Disney’s own design company, WED Enterprises, now called Walt Disney Imagineering.',
        source: AO,
      },
      // evidence: "Star Jets (November 28, 1974 – January 10, 1994)" / "re-opened on April 30, 1994"
      {
        type: 'trivia',
        id: 'astro-orbiter-r21',
        question: 'What was this ride’s name for its first 20 years?',
        choices: ['Star Jets', 'Rocket Jets', 'Astro Jets', 'Moon Rockets'],
        answer: 0,
        explain: 'Star Jets, from 1974 until January 1994.',
        source: AO,
      },

      // ---- Ride games ----
      {
        type: 'challenge',
        id: 'astro-orbiter-x15',
        prompt: 'Be a rocket: arms out, and everyone slowly “fly” up and down together.',
      },
      {
        type: 'challenge',
        id: 'astro-orbiter-r22',
        prompt: 'Pilot practice: pull your pretend lever back to climb, push it forward to dive. Go!',
      },
      {
        type: 'challenge',
        id: 'astro-orbiter-r23',
        prompt: 'Spin count: watch one rocket and count how many laps it makes before your group says “Lift off!”',
      },
      { type: 'wyr', id: 'astro-orbiter-x19', a: 'Fly your rocket as high as it goes', b: 'Fly your rocket super low' },
      { type: 'wyr', id: 'astro-orbiter-x20', a: 'Be the pilot on the lever', b: 'Be the passenger enjoying the view' },
      {
        type: 'wyr',
        id: 'astro-orbiter-r24',
        a: 'Fly in the daytime and spot the castle',
        b: 'Fly at night over the glowing lights of Tomorrowland',
      },
      {
        type: 'emoji',
        id: 'astro-orbiter-x24',
        emojis: '⭐ ✈️',
        hint: 'Astro Orbiter’s very first name.',
        choices: ['Star Jets', 'Sky Planes', 'Moon Wings', 'Star Wars'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'astro-orbiter-x25',
        emojis: '🚀 🔄 🪐',
        hint: 'Rockets going round and round.',
        choices: ['Astro Orbiter', 'Space Mountain', 'Mad Tea Party', 'Dumbo'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'astro-orbiter-r25',
        emojis: '🛗 ⬆️ 🚀',
        hint: 'How you get up to your ship.',
        choices: ['Elevator', 'Escalator', 'Staircase', 'Slide'],
        answer: 0,
      },
    ],
  },

  'carousel-of-progress': {
    facts: [
      // evidence: "would close on July 6, 2026 to install the update" / "expected to reopen in late Spring 2027, with new scenes and a timeline shift."
      {
        text: 'The show closed in July 2026 for a big update and is expected back in late spring 2027 with new scenes.',
        source: COP,
      },
      // evidence: "The Imagineers, led by Disney engineers Roger E. Broggie and Bob Gurr"
      { text: 'Imagineers Roger E. Broggie and Bob Gurr came up with the spinning “carousel theater.”', source: COP },
      // evidence: "It is also the oldest attraction at Walt Disney World to have been worked on by Walt Disney."
      { text: 'It is the oldest Walt Disney World attraction that Walt Disney himself worked on.', source: COP },
      // evidence: "a new introductory scene featuring an Audio-Animatronics figure of Walt Disney"
      { text: 'The updated show is set to open with an Audio-Animatronics figure of Walt Disney.', source: COP },
    ],
    quests: [

      // ---- Trivia ----
      // evidence: "Music: "There's a Great Big Beautiful Tomorrow" by the Sherman Brothers"
      {
        type: 'trivia',
        id: 'carousel-of-progress-x1',
        question: 'What is the Carousel of Progress theme song?',
        choices: [
          '“It’s a Small World”',
          '“There’s a Great Big Beautiful Tomorrow”',
          '“When You Wish Upon a Star”',
          '“Yo Ho”',
        ],
        answer: 1,
        explain: '“There’s a Great Big Beautiful Tomorrow,” by the Sherman Brothers.',
        source: COP,
      },
      // evidence: "Music: "There's a Great Big Beautiful Tomorrow" by the Sherman Brothers"
      {
        type: 'trivia',
        id: 'carousel-of-progress-x2',
        question: 'Who wrote the show’s famous theme song?',
        choices: ['The Sherman Brothers', 'The Wright Brothers', 'The Jonas Brothers', 'The Mario Brothers'],
        answer: 0,
        explain: 'The Sherman Brothers wrote it. They wrote lots of Disney songs!',
        source: COP,
      },
      // evidence: "The first act is set on Valentine's Day." / Independence Day / Halloween / "during Christmas in the 21st century"
      {
        type: 'order',
        id: 'carousel-of-progress-r12',
        prompt: 'In the classic show (1975 to 2026), each scene happened on a holiday. Put them in order.',
        items: ['Valentine’s Day', 'Independence Day', 'Halloween', 'Christmas'],
        explain: 'Valentine’s Day, then the Fourth of July, then Halloween, and finally Christmas.',
        source: COP,
      },
      // evidence: Act 1 (1960s) moon landing / Act 2 (1980s) Halloween 1985 / Act 3 New Year's Eve 1999 / Act 4 (Possible Future)
      {
        type: 'order',
        id: 'carousel-of-progress-r13',
        prompt: 'The new show visits new times. Put its scenes in order.',
        items: ['1969 Moon landing', 'Halloween 1985', 'New Year’s Eve 1999', 'A possible future'],
        explain: 'The family watches the Moon landing, then Halloween 1985, New Year’s Eve 1999, and a future in space.',
        source: COP_WDWNT,
      },
      // evidence: Uncle Orville, in a bathtub ... His famous line: "No privacy at all around this place!" / Orville gets privacy with The Clapper.
      {
        type: 'trivia',
        id: 'carousel-of-progress-x4',
        question: 'Which family member was famous for complaining about privacy from his bathtub?',
        choices: ['Grandpa', 'Uncle Orville', 'Jimmy', 'Rover'],
        answer: 1,
        explain: 'Uncle Orville! In the new 1985 scene, he finally gets some privacy with The Clapper.',
        source: COP_WDWNT,
      },
      // evidence: "the prime feature of the General Electric (GE) Pavilion for the 1964 New York World's Fair"
      {
        type: 'trivia',
        id: 'carousel-of-progress-x5',
        question: 'Which company’s pavilion first had this show at the World’s Fair?',
        choices: ['General Electric', 'Ford', 'Coca-Cola', 'Kodak'],
        answer: 0,
        explain: 'It was the main feature of the General Electric (GE) Pavilion.',
        source: COP,
      },
      // evidence: "Duration: 21:00"
      {
        type: 'guess',
        id: 'carousel-of-progress-r14',
        question: 'About how many minutes long was the classic show?',
        answer: 21,
        min: 5,
        max: 60,
        step: 1,
        unit: 'minutes',
        tolerance: 3,
        explain: 'The classic show ran about 21 minutes.',
        source: COP,
      },
      // evidence: "Audience capacity: 240 per show"
      {
        type: 'guess',
        id: 'carousel-of-progress-x7',
        question: 'How many people can watch each show?',
        answer: 240,
        min: 20,
        max: 1000,
        step: 10,
        unit: 'people',
        tolerance: 40,
        explain: 'Each show seats 240 people.',
        source: COP,
      },
      // evidence: "The theater also now rotated counterclockwise, rather than clockwise like the two former theater systems."
      {
        type: 'truefalse',
        id: 'carousel-of-progress-x9',
        statement: 'The Magic Kingdom theater spins clockwise.',
        answer: false,
        explain: 'Fiction! It turns counterclockwise. The older theaters went clockwise.',
        source: COP,
      },
      // evidence: "the voices of Jamie Lee Curtis and Bryan Cranston as Sarah and John"
      {
        type: 'trivia',
        id: 'carousel-of-progress-x10',
        question: 'What are the mom and dad’s names?',
        choices: ['John and Sarah', 'Walt and Lilly', 'Bob and Helen', 'George and Jane'],
        answer: 0,
        explain: 'The dad is John and the mom is Sarah, in the classic show and the new one.',
        source: COP,
      },
      // evidence: "the attraction will feature the voices of Jamie Lee Curtis and Bryan Cranston as Sarah and John."
      {
        type: 'trivia',
        id: 'carousel-of-progress-r15',
        question: 'Who voices Sarah in the new version of the show?',
        choices: ['Jamie Lee Curtis', 'Tom Hanks', 'Idina Menzel', 'Julie Andrews'],
        answer: 0,
        explain: 'Jamie Lee Curtis voices Sarah, and Bryan Cranston voices John.',
        source: COP,
      },
      // evidence: "Jean Shepherd as John, the family's father, as well as the ride's narrator."
      {
        type: 'trivia',
        id: 'carousel-of-progress-r16',
        question: 'Who voiced John in the classic show from 1994 to 2026?',
        choices: ['Jean Shepherd', 'Walt Disney', 'Bryan Cranston', 'Mickey Mouse'],
        answer: 0,
        explain: 'Radio storyteller Jean Shepherd voiced John and narrated the show.',
        source: COP,
      },
      // evidence: Sarah sets the oven to 375, and it responds. Each score Jimmy calls out raises the oven temperature, burning the turkey.
      {
        type: 'trivia',
        id: 'carousel-of-progress-r18',
        question: 'In the classic Christmas finale, what went wrong with dinner?',
        choices: [
          'The voice-controlled oven burned the turkey',
          'Rover ate the pie',
          'The fridge froze the soup',
          'The lights went out',
        ],
        answer: 0,
        explain: 'Jimmy’s game scores kept changing the voice-activated oven, and the turkey burned!',
        source: COP_WDWNT,
      },
      // evidence: "So the Sherman Brothers created a new song" ("The Best Time Of Your Life") / "A contemporary version of "There's a Great Big Beautiful Tomorrow" returned"
      {
        type: 'truefalse',
        id: 'carousel-of-progress-x12',
        statement: 'For a while, the show used a different theme song.',
        answer: true,
        explain: 'Fact! In 1975 the Sherman Brothers wrote “The Best Time of Your Life.” The original song returned in 1994.',
        source: COP,
      },
      // evidence: "The Carousel of Progress holds the record as the longest-running stage show in the history of American theater."
      {
        type: 'trivia',
        id: 'carousel-of-progress-r19',
        question: 'What record does the Carousel of Progress hold?',
        choices: [
          'Longest-running stage show in American theater',
          'Fastest spinning theater',
          'Most robots on one stage',
          'Biggest Christmas tree',
        ],
        answer: 0,
        explain: 'It’s the longest-running stage show in the history of American theater!',
        source: COP,
      },
      // evidence: the daughter plays guitar in the living room as a homage to past shows / Designs draw on John Hench's concept sketches
      {
        type: 'truefalse',
        id: 'carousel-of-progress-r22',
        statement: 'The new future scene is inspired by old sketches from Imagineer John Hench.',
        answer: true,
        explain: 'Fact! The family lives off-planet with a helpful robot, in designs based on John Hench’s sketches.',
        source: COP_WDWNT,
      },

      // ---- Ride games ----
      {
        type: 'challenge',
        id: 'carousel-of-progress-x17',
        prompt: 'Sing “There’s a great big beautiful tomorrow…” together. Hum if you don’t know the words!',
      },
      {
        type: 'challenge',
        id: 'carousel-of-progress-x19',
        prompt: 'Do your best Rover the dog impression. Woof!',
      },
      {
        type: 'challenge',
        id: 'carousel-of-progress-r23',
        prompt: 'Be Uncle Orville: say “No privacy at all around this place!” in your grumpiest voice.',
      },
      { type: 'wyr', id: 'carousel-of-progress-r24', a: 'Watch the 1969 Moon landing scene', b: 'Visit the family’s future home in space' },
      {
        type: 'emoji',
        id: 'carousel-of-progress-x25',
        emojis: '🐕 🦴',
        hint: 'The family’s loyal pet.',
        choices: ['Pluto', 'Rover', 'Max', 'Buster'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'carousel-of-progress-x26',
        emojis: '🛁 👨',
        hint: 'The family member who loves his bath.',
        choices: ['Uncle Orville', 'Grandpa', 'John', 'Jimmy'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'carousel-of-progress-x27',
        emojis: '🎠 ➡️ 🔮',
        hint: 'A spinning show all about the future.',
        choices: ['Carousel of Progress', 'Prince Charming Regal Carrousel', 'Mad Tea Party', 'Astro Orbiter'],
        answer: 0,
      },
    ],
  },

  'laugh-floor': {
    facts: [
      // evidence: "Step inside the only laugh factory in Monstropolis"
      { text: 'The Laugh Floor is called “the only laugh factory in Monstropolis.”', source: LF_DISNEY },
      // evidence: "Inspired by the Disney and Pixar animated films Monsters, Inc. and Monsters University"
      { text: 'The show is inspired by both Monsters, Inc. and Monsters University.', source: LF_DISNEY },
      // evidence: "which has Monsters University student Art advertise the "Monsters University School of Laughter""
      {
        text: 'In the pre-show, Art from Monsters University promotes the Monsters University School of Laughter.',
        source: LF,
      },
      // evidence: Animated monsters appear on a rear projection screen, voiced by live actors
      { text: 'The monsters on screen are voiced live by real actors, so every show is different.', source: LF_TP },
    ],
    quests: [
      // ---- Look around the queue, in walking order ----
      // source: LF_FAN. evidence: In fall 2018, the entry structure left over from The Timekeeper was removed and replaced with a sign in the style of 1971 Tomorrowland attraction signs.
      {
        type: 'spy',
        id: 'laugh-floor-r1',
        prompt: 'Find the Laugh Floor sign at the entrance. Does it look old-school or futuristic?',
        hint: 'Both! Since 2018 it’s styled like the original 1971 Tomorrowland signs.',
      },
      // source: TIMEKEEPER. evidence: "The attraction building still retains most of the elements of the previous tenant"
      {
        type: 'spy',
        id: 'laugh-floor-r2',
        prompt: 'Look at the building itself. Can you guess what kind of theater it used to be?',
        hint: 'A round-screen movie theater for The Timekeeper. The building still keeps most of it.',
      },
      // source: PM_TP. evidence: glide above the Monsters, Inc. Laugh Floor queue before reaching the station.
      {
        type: 'spy',
        id: 'laugh-floor-r3',
        prompt: 'Look up. Can you spot a PeopleMover train gliding over this line?',
        hint: 'The PeopleMover passes right above the Laugh Floor queue.',
      },
      // source: LF_DISNEY. evidence: "Text your favorite joke before the lights go down and it could be used in the show!"
      {
        type: 'spy',
        id: 'laugh-floor-r7',
        prompt: 'Find the sign that explains how to send a joke to the monsters.',
        hint: 'Grown-ups can text a joke before the show. A few get read on stage!',
      },
      // source: LF_RG. evidence: sign reading "Monstropolis Needs You!" "Text us Your Jokes Today"; "Monitors overhead display the following instructions" (updated April 2026)
      {
        type: 'spy',
        id: 'laugh-floor-r-spy2',
        prompt: 'Find the “Monstropolis Needs You!” sign and the screens with the joke-texting steps.',
        hint: 'The overhead monitors list the steps for texting in a joke.',
      },
      // source: LF_RG. evidence: Roz sign "asking audience members to text in votes before the show" (updated April 2026)
      {
        type: 'spy',
        id: 'laugh-floor-r-spy3',
        prompt: 'Look for a sign with Roz on it asking for your help.',
        hint: 'Roz asks the audience to text in votes before the show.',
      },
      // source: LF_DISNEY. evidence: Guests can watch Mike Wazowski's video while they wait
      {
        type: 'spy',
        id: 'laugh-floor-r8',
        prompt: 'Find a screen with Mike Wazowski talking to the line.',
        hint: 'Mike explains the plan: the city needs your laughs!',
      },
      // source: LF. evidence: "which has Monsters University student Art advertise the "Monsters University School of Laughter""
      {
        type: 'spy',
        id: 'laugh-floor-r9',
        prompt: 'In the pre-show, watch for a “commercial” from a college student monster.',
        hint: 'It’s Art, advertising the Monsters University School of Laughter.',
      },
      // source: LF_FAN. evidence: Guests enter the monster world through a door in Tomorrowland
      {
        type: 'spy',
        id: 'laugh-floor-r10',
        prompt: 'When it’s time, notice the door you walk through. Where does it lead?',
        hint: 'Into the monster world! In the story, it’s a door from Tomorrowland to Monstropolis.',
      },
      // source: LF_TP. evidence: Screens around the theater show fellow guests with silly captions.
      {
        type: 'spy',
        id: 'laugh-floor-r-spy1',
        prompt: 'Inside, look for screens that show the audience. Who might show up on them?',
        hint: 'They can show guests with silly captions. You might see yourself!',
      },
      // source: LF_RG. evidence: "You may notice that some seats have lights in front of them." (updated April 2026)
      {
        type: 'spy',
        id: 'laugh-floor-r-spy4',
        prompt: 'Once you sit down, look for little lights in front of some seats.',
        hint: 'They light up when a guest is called on, so everyone can see them.',
      },
      // source: LF_RG, LF_TP. evidence: "fill the giant canister with enough laughter to open the exit doors"; Mike announces the canister full
      {
        type: 'spy',
        id: 'laugh-floor-r-spy5',
        prompt: 'Look for the giant laugh canister. The show is all about filling it up.',
        hint: 'Laugh loudly! At the end, Mike checks whether it is full.',
      },
      // source: LF_TP. evidence: Roz is one of only two characters from the original movie in the show, the other being Mike. She makes a final joke that credits "That Guy."
      {
        type: 'spy',
        id: 'laugh-floor-r12',
        prompt: 'Keep your eyes open for Roz. She is one of only two movie characters in the show!',
        hint: 'The other is Mike Wazowski. Roz makes the very last joke.',
      },
      // evidence: In fall 2018, the entry structure ... replaced with a sign in the style of 1971 Tomorrowland attraction signs.
      {
        type: 'photo',
        id: 'laugh-floor-r13',
        prompt: 'From the line, take your silliest group photo with the Laugh Floor sign.',
        tip: 'The sign is at the entrance.',
        source: LF_FAN,
      },
      // evidence: Guests can watch Mike Wazowski's video while they wait
      {
        type: 'photo',
        id: 'laugh-floor-r-photo4',
        prompt: 'From the line, take a photo of Mike Wazowski on the screen.',
        tip: 'Wait for Mike to appear, then snap.',
        source: LF_DISNEY,
      },
      // evidence: "Text your favorite joke before the lights go down and it could be used in the show!"
      {
        type: 'photo',
        id: 'laugh-floor-r-photo5',
        prompt: 'From the line, photograph the sign that tells you how to send a joke to the monsters.',
        tip: 'A grown-up can text a joke before the show starts.',
        source: LF_DISNEY,
      },
      // evidence: sign reading "Monstropolis Needs You!" "Text us Your Jokes Today"
      {
        type: 'photo',
        id: 'laugh-floor-r-photo6',
        prompt: 'From the line, take a photo of the “Monstropolis Needs You!” sign.',
        tip: 'Try to fit the overhead screens in too.',
        source: LF_RG,
      },
      // evidence: "glide above the queue Monsters, Inc. Laugh Floor as you head to the station to disembark."
      {
        type: 'photo',
        id: 'laugh-floor-r-photo7',
        prompt: 'From the line, snap a PeopleMover train gliding over the queue.',
        tip: 'Look up and wait for a train to pass.',
        source: PM_TP,
      },

      // ---- Trivia ----
      // evidence: "Step inside the only laugh factory in Monstropolis" ... Monster of Ceremonies Mike Wazowski
      {
        type: 'trivia',
        id: 'laugh-floor-x1',
        question: 'Who is the “Monster of Ceremonies” who hosts the show?',
        choices: ['Sulley', 'Mike Wazowski', 'Randall', 'Celia'],
        answer: 1,
        explain: 'Mike Wazowski is the Monster of Ceremonies!',
        source: LF_DISNEY,
      },
      // evidence: "Text your favorite joke before the lights go down and it could be used in the show!"
      {
        type: 'truefalse',
        id: 'laugh-floor-x2',
        statement: 'A joke sent in by the audience could be used in the show.',
        answer: true,
        explain: 'Fact! Jokes sent in before the lights go down could be used in the show.',
        source: LF_DISNEY,
      },
      // evidence: "It opened on April 2, 2007, replacing the Circle-Vision attraction The Timekeeper."
      {
        type: 'guess',
        id: 'laugh-floor-x3',
        question: 'In what year did the Laugh Floor open?',
        answer: 2007,
        min: 1971,
        max: 2025,
        step: 1,
        unit: '',
        tolerance: 2,
        explain: 'It opened on April 2, 2007.',
        source: LF,
      },
      // evidence: The show's premise is that laughter was ten times more efficient than screams for generating energy.
      {
        type: 'guess',
        id: 'laugh-floor-r14',
        question: 'In the show’s story, how many times more powerful are laughs than screams?',
        answer: 10,
        min: 1,
        max: 100,
        step: 1,
        unit: 'times',
        tolerance: 1,
        explain: 'Ten times! That’s why the monsters want your laughs.',
        source: LF_TP,
      },
      // evidence: "their laughs will be collected and converted to electricity."
      {
        type: 'trivia',
        id: 'laugh-floor-r15',
        question: 'What happens to your laughs during the show?',
        choices: ['They are turned into electricity', 'They are recorded for a movie', 'They make it rain', 'Nothing'],
        answer: 0,
        explain: 'Your laughs are collected and turned into power for Monstropolis!',
        source: LF_FAN,
      },
      // evidence: Buddy Boil is a purple monster with long eye stalks. His sketches include a mind-reading act
      {
        type: 'trivia',
        id: 'laugh-floor-r16',
        question: 'Which comedian is purple with long eye stalks?',
        choices: ['Buddy Boil', 'Roz', 'Marty', 'Art'],
        answer: 0,
        explain: 'Buddy Boil! He sometimes does a mind-reading act.',
        source: LF_FAN,
      },
      // evidence: Marty Wazowski is a smaller, orange version of Mike and his nephew.
      {
        type: 'trivia',
        id: 'laugh-floor-r17',
        question: 'Who is Marty Wazowski?',
        choices: ['Mike’s nephew', 'Mike’s boss', 'Mike’s dog', 'A security guard'],
        answer: 0,
        explain: 'Marty is Mike’s nephew, a smaller orange version of him.',
        source: LF_FAN,
      },
      // evidence: The two-headed yellow monster goes by names such as Sam and Ella or Mac and Jeeves.
      {
        type: 'trivia',
        id: 'laugh-floor-r18',
        question: 'One comedian is yellow and has two heads. What is one of its stage names?',
        choices: ['Sam and Ella', 'Bert and Ernie', 'Mike and Sulley', 'Tick and Tock'],
        answer: 0,
        explain: 'Sam and Ella, or sometimes Mac and Jeeves.',
        source: LF_FAN,
      },
      // evidence: That guy receives an "I Was 'That Guy'" sticker at the end.
      {
        type: 'trivia',
        id: 'laugh-floor-r19',
        question: 'The guest picked as “That Guy” gets what at the end?',
        choices: ['A sticker', 'A trophy', 'A free churro', 'A monster costume'],
        answer: 0,
        explain: 'A sticker that says “I Was ‘That Guy’.”',
        source: LF_TP,
      },
      // evidence: The main theater has 400 seats.
      {
        type: 'guess',
        id: 'laugh-floor-r20',
        question: 'How many seats are in the comedy club?',
        answer: 400,
        min: 50,
        max: 1500,
        step: 10,
        unit: 'seats',
        tolerance: 50,
        explain: 'About 400 seats. That’s a lot of laughs!',
        source: LF_FAN,
      },
      // evidence: "The show lasts about 15 minutes," and the preshow is under 5 minutes.
      {
        type: 'guess',
        id: 'laugh-floor-r21',
        question: 'About how many minutes does the main show last?',
        answer: 15,
        min: 1,
        max: 60,
        step: 1,
        unit: 'minutes',
        tolerance: 3,
        explain: 'About 15 minutes, after a pre-show of under 5 minutes.',
        source: LF_TP,
      },
      // evidence: It uses digital puppetry, similar to Epcot's Turtle Talk with Crush.
      {
        type: 'trivia',
        id: 'laugh-floor-r22',
        question: 'The talking monsters use the same kind of magic as which other Disney show?',
        choices: ['Turtle Talk with Crush', 'Haunted Mansion', 'Dumbo', 'Space Mountain'],
        answer: 0,
        explain: 'Live actors voice digital puppets, just like Turtle Talk with Crush at Epcot.',
        source: LF_FAN,
      },
      // evidence: "The working title was 'Laugh Floor Comedy Club.' It became 'Monsters, Inc. Laugh Floor' two weeks before opening."
      {
        type: 'trivia',
        id: 'laugh-floor-r-t1',
        question: 'What was the show’s working title before it opened?',
        choices: ['Laugh Floor Comedy Club', 'Monstropolis Live', 'Mike’s Joke Factory', 'Scream Floor'],
        answer: 0,
        explain: 'It became Monsters, Inc. Laugh Floor about two weeks before opening.',
        source: LF_TP,
      },
      // evidence: "fill the giant canister with enough laughter to open the exit doors"
      {
        type: 'truefalse',
        id: 'laugh-floor-r-t2',
        statement: 'In the show’s story, the audience’s laughter has to fill a giant canister to open the exit doors.',
        answer: true,
        explain: 'Fact! So laugh loudly!',
        source: LF_RG,
      },
      // evidence: "After guests entered the Theatre, Timekeeper (voiced by Robin Williams) came to life"
      {
        type: 'trivia',
        id: 'laugh-floor-r23',
        question: 'The show before the Laugh Floor starred a robot voiced by which comedian?',
        choices: ['Robin Williams', 'Billy Crystal', 'Tim Allen', 'Eddie Murphy'],
        answer: 0,
        explain: 'Robin Williams voiced the Timekeeper, in this very building.',
        source: TIMEKEEPER,
      },
      // evidence: Whenever a monster says "Hello, humans!", the audience is encouraged to scream and wave their arms.
      {
        type: 'trivia',
        id: 'laugh-floor-r25',
        question: 'What does the audience do when a monster says “Hello, humans”?',
        choices: ['Scream and wave their arms', 'Stay very quiet', 'Stand up and dance', 'Clap twice'],
        answer: 0,
        explain: 'Everyone screams and waves!',
        source: LF_FAN,
      },
      // evidence: Sulley does not appear in the show
      {
        type: 'truefalse',
        id: 'laugh-floor-r26',
        statement: 'Sulley is one of the monsters in the show.',
        answer: false,
        explain: 'Fiction! Mike and Roz appear, but Sulley does not.',
        source: LF_FAN,
      },

      // ---- Show games ----
      {
        type: 'challenge',
        id: 'laugh-floor-x19',
        prompt: 'Make up a monster joke you could send to the show. Practice it on your group!',
      },
      {
        type: 'challenge',
        id: 'laugh-floor-x20',
        prompt: 'Everyone say “Hi, I’m Mike Wazowski!” in your best Mike voice.',
      },
      {
        type: 'challenge',
        id: 'laugh-floor-r30',
        prompt: 'Practice for the show: when someone says “Hello, humans!”, everyone wave your arms and cheer.',
      },
      { type: 'wyr', id: 'laugh-floor-r31', a: 'Get picked as “That Guy”', b: 'Have your joke read on stage' },
      { type: 'wyr', id: 'laugh-floor-r32', a: 'Have Buddy Boil read your mind', b: 'Chat with Marty Wazowski' },
      {
        type: 'emoji',
        id: 'laugh-floor-x27',
        emojis: '😂 ⚡',
        hint: 'What the Laugh Floor monsters want from you!',
        choices: ['Laughter', 'Screams', 'Batteries', 'Sunshine'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'laugh-floor-r33',
        emojis: '😂 📈',
        hint: 'It rises as the audience laughs.',
        choices: ['Laugh-o-meter', 'Thermometer', 'Speedometer', 'Scream Gauge'],
        answer: 0,
      },
    ],
  },
  'tomorrowland-speedway': {
    facts: [
      // evidence: "On opening day, it was called the Grand Prix Raceway"
      { text: 'On Magic Kingdom’s first day, October 1, 1971, this ride was called the Grand Prix Raceway.', source: SP_TP },
      // evidence: "The Speedway is modeled on the Autopia attraction at Disneyland"
      { text: 'The Speedway is modeled on Disneyland’s Autopia.', source: SP_TP },
      // evidence: "In total, there are 146 cars driving with you on the 4 “lanes”."
      { text: 'There are 146 cars sharing the track’s four lanes.', source: SP_TP },
      // evidence: "your car follows a guide rail"
      { text: 'Your car follows a guide rail, so steering is more for fun than for finding the way.', source: SP_TP },
      // evidence: "every car gets the checkered flag when it crosses the finish line"
      { text: 'Every car gets the checkered flag when it crosses the finish line.', source: SP_TP },
      // evidence: "from its original length of more than 3100 feet" / "The present length is just over 2100 feet"
      { text: 'The track started at more than 3,100 feet long and is now just over 2,100 feet.', source: SP_TP },
    ],
    quests: [
      // ---- Look around the queue, in walking order ----
      // source: SP_RG. evidence: "The entrance sign and the warning sign listing safety and eligibility notices."
      {
        type: 'spy',
        id: 'speedway-r1',
        prompt: 'At the entrance, find the big attraction sign and the warning sign near it.',
        hint: 'The warning sign lists the safety rules and who can ride.',
      },
      // source: SP_RG. evidence: "You must be at least 54″ tall to drive a Speedway Car alone."
      {
        type: 'spy',
        id: 'speedway-r2',
        prompt: 'Read the warning sign. How tall must a driver be to drive a Speedway car alone?',
        hint: '54 inches. Shorter riders can still ride with a driver who is tall enough.',
      },
      // source: SP_RG. evidence: "Supervise children at all times."
      {
        type: 'spy',
        id: 'speedway-r3',
        prompt: 'Find the sign that says “Supervise children at all times.”',
        hint: 'It is one of the warnings at the entrance.',
      },
      // source: SP_TP. evidence: "The queue winds outside the entrance and across a pedestrian bridge"
      {
        type: 'spy',
        id: 'speedway-r4',
        prompt: 'Your line winds out and across a pedestrian bridge. Can you spot where it crosses?',
        hint: 'The queue snakes across the bridge on its way to the loading areas.',
      },
      // source: SP_TP. evidence: "some pretty nice views of Storybook Circus, Space Mountain, the Tomorrowland PeopleMover"
      {
        type: 'spy',
        id: 'speedway-r5',
        prompt: 'From the queue, look for Space Mountain in the distance.',
        hint: 'The queue has views of Space Mountain, the PeopleMover and Storybook Circus.',
      },
      // source: SP_RG. evidence: "It's fun to look up and see guests passing by on the Peoplemover."
      {
        type: 'spy',
        id: 'speedway-r6',
        prompt: 'Look up. Can you spot guests gliding by on the PeopleMover?',
        hint: 'The track passes right underneath it.',
      },
      // source: SP_RG. evidence: "The track was shortened due to the addition of TRON Lightcycle Run." / TRON is visible from several points
      {
        type: 'spy',
        id: 'speedway-r7',
        prompt: 'Look for TRON Lightcycle / Run peeking over the track.',
        hint: 'The Speedway track was shortened when TRON was built.',
      },
      // source: SP_RG. evidence: "The track curve is painted with the attraction's name."
      {
        type: 'spy',
        id: 'speedway-r8',
        prompt: 'Find the curve of the track that has the ride’s name painted on it.',
        hint: 'It is painted right on the track.',
      },
      // source: SP_TP. evidence: "signs warn drivers not to bump into the cars in front of them"
      {
        type: 'spy',
        id: 'speedway-r9',
        prompt: 'Find a sign that warns drivers not to bump the car in front of them.',
        hint: 'Good manners on a racetrack!',
      },
      // source: SP_TP. evidence: "at one point go over the roadway"
      {
        type: 'spy',
        id: 'speedway-r10',
        prompt: 'Watch where the cars go over a roadway. Can you find that spot?',
        hint: 'Part of the track crosses above a road.',
      },
      // source: SP_RG. evidence: "When guests reach the loading area, a cast member assigns them a gate."
      {
        type: 'spy',
        id: 'speedway-r11',
        prompt: 'At the loading area, listen for the Cast Member who sends you to your gate.',
        hint: 'You board when the next car pulls up to your gate.',
      },
      // source: SP_RG. evidence: "Cars waiting to depart are visible from the line."
      {
        type: 'spy',
        id: 'speedway-r12',
        prompt: 'Look at the row of cars waiting to take off. What color are most of them?',
        hint: 'Count how many cars you can see from the line.',
      },
      // source: SP_TP. evidence: "every car gets the checkered flag when it crosses the finish line"
      {
        type: 'spy',
        id: 'speedway-r13',
        prompt: 'Find the checkered flag that marks the finish line.',
        hint: 'Every car gets the checkered flag as it finishes.',
      },

      // ---- Photo spots ----
      // evidence: "The queue winds outside the entrance and across a pedestrian bridge"
      {
        type: 'photo',
        id: 'speedway-photo2',
        prompt: 'From the line, take a group photo on the pedestrian bridge.',
        tip: 'The queue crosses the bridge before it reaches the loading areas.',
        source: SP_TP,
      },
      // evidence: "some pretty nice views of Storybook Circus, Space Mountain, the Tomorrowland PeopleMover"
      {
        type: 'photo',
        id: 'speedway-photo3',
        prompt: 'From the line, take a photo of Space Mountain behind the track.',
        tip: 'Look for the view while the line winds toward the cars.',
        source: SP_TP,
      },
      // evidence: "It's fun to look up and see guests passing by on the Peoplemover."
      {
        type: 'photo',
        id: 'speedway-photo4',
        prompt: 'From the line, photograph the PeopleMover gliding overhead.',
        tip: 'The track passes underneath it.',
        source: SP_RG,
      },
      // evidence: "The track curve is painted with the attraction's name."
      {
        type: 'photo',
        id: 'speedway-photo5',
        prompt: 'From the line, take a photo of the ride’s name painted on the curve of the track.',
        tip: 'Look down at the track.',
        source: SP_RG,
      },
      // evidence: "Cars waiting to depart are visible from the line."
      {
        type: 'photo',
        id: 'speedway-photo6',
        prompt: 'From the line, take a photo of the row of cars lined up and ready to race.',
        tip: 'Take it from the loading area, while you wait for your gate.',
        source: SP_RG,
      },

      // ---- Trivia ----
      // evidence: "The Mark VII cars were designed by Bob Gurr"
      {
        type: 'trivia',
        id: 'speedway-x1',
        question: 'Which Imagineer designed the Mark VII cars?',
        choices: ['Bob Gurr', 'John Hench', 'Marc Davis', 'Rolly Crump'],
        answer: 0,
        explain: 'Bob Gurr designed the Mark VII cars.',
        source: SP_TP,
      },
      // evidence: "took their inspiration from the Corvette Stingray"
      {
        type: 'trivia',
        id: 'speedway-x2',
        question: 'Which sports car inspired the Mark VII cars?',
        choices: ['Corvette Stingray', 'Model T', 'Volkswagen Beetle', 'Jeep'],
        answer: 0,
        explain: 'The Mark VII cars took their inspiration from the Corvette Stingray.',
        source: SP_TP,
      },
      // evidence: "On opening day, it was called the Grand Prix Raceway"
      {
        type: 'trivia',
        id: 'speedway-x3',
        question: 'What was this ride called on opening day?',
        choices: ['Grand Prix Raceway', 'Tomorrowland Speedway', 'Rocket Road', 'Autopia Junior'],
        answer: 0,
        explain: 'It opened as the Grand Prix Raceway.',
        source: SP_TP,
      },
      // evidence: "The Speedway is modeled on the Autopia attraction at Disneyland"
      {
        type: 'trivia',
        id: 'speedway-x4',
        question: 'Which Disneyland ride is the Speedway modeled on?',
        choices: ['Autopia', 'Matterhorn Bobsleds', 'Casey Jr. Circus Train', 'Rocket Rods'],
        answer: 0,
        explain: 'The Speedway is modeled on Disneyland’s Autopia.',
        source: SP_TP,
      },
      // evidence: "The first reduction occurred when Space Mountain was built"
      {
        type: 'trivia',
        id: 'speedway-x5',
        question: 'Which attraction’s construction first made the Speedway track shorter?',
        choices: ['Space Mountain', 'TRON Lightcycle / Run', 'Astro Orbiter', 'The Barnstormer'],
        answer: 0,
        explain: 'The first reduction came when Space Mountain was built.',
        source: SP_TP,
      },
      // evidence: "The attraction reopened on May 18, 2019." / track adjusted for TRON Lightcycle / Run
      {
        type: 'trivia',
        id: 'speedway-x6',
        question: 'The track was changed to make room for which new coaster, reopening in May 2019?',
        choices: ['TRON Lightcycle / Run', 'Big Thunder Mountain', 'Seven Dwarfs Mine Train', 'Tiana’s Bayou Adventure'],
        answer: 0,
        explain: 'Track adjustments made room for TRON Lightcycle / Run. The Speedway reopened on May 18, 2019.',
        source: SP,
      },
      // evidence: Goodyear "supplied all of the tires on the Mark VII vehicles"
      {
        type: 'trivia',
        id: 'speedway-x7',
        question: 'Which company supplied the tires on the Mark VII cars?',
        choices: ['Goodyear', 'Firestone', 'Michelin', 'Bridgestone'],
        answer: 0,
        explain: 'Goodyear, the opening-day sponsor, supplied the tires.',
        source: SP,
      },
      // evidence: "every car gets the checkered flag when it crosses the finish line"
      {
        type: 'trivia',
        id: 'speedway-x8',
        question: 'What flag does every car get at the finish line?',
        choices: ['Checkered flag', 'Green flag', 'Yellow flag', 'Pirate flag'],
        answer: 0,
        explain: 'Every car gets the checkered flag when it crosses the finish line.',
        source: SP_TP,
      },
      // evidence: "you’ll sit on a hard bench with a back with one fabric lap belt for all riders"
      {
        type: 'trivia',
        id: 'speedway-x9',
        question: 'How many lap belts does each car have for its riders?',
        choices: ['One shared belt', 'Two belts', 'A belt for each wheel', 'None'],
        answer: 0,
        explain: 'Each car has one fabric lap belt for all riders.',
        source: SP_TP,
      },

      // ---- True or false ----
      // evidence: "your car follows a guide rail"
      {
        type: 'truefalse',
        id: 'speedway-x10',
        statement: 'You can steer your car anywhere on the track you like.',
        answer: false,
        explain: 'Fiction! Your car follows a guide rail.',
        source: SP_TP,
      },
      // evidence: "no one can drive alone unless they are 54 inches tall"
      {
        type: 'truefalse',
        id: 'speedway-x11',
        statement: 'You have to be 54 inches tall to drive a car by yourself.',
        answer: true,
        explain: 'Fact! No one can drive alone unless they are 54 inches tall.',
        source: SP_TP,
      },
      // evidence: "from the opening day of Magic Kingdom on October 1, 1971"
      {
        type: 'truefalse',
        id: 'speedway-x12',
        statement: 'The Speedway was there from Magic Kingdom’s opening day.',
        answer: true,
        explain: 'Fact! It opened with the park on October 1, 1971.',
        source: SP_TP,
      },
      // evidence: "Tomorrowland Speedway is a gas-powered race car attraction"
      {
        type: 'truefalse',
        id: 'speedway-x13',
        statement: 'The Speedway cars are electric.',
        answer: false,
        explain: 'Fiction! The Speedway cars are gas-powered.',
        source: SP_DIS,
      },

      // ---- Guess ----
      // evidence: "zip along at a breathtaking 7 mph!"
      {
        type: 'guess',
        id: 'speedway-x14',
        question: 'What is the Speedway cars’ top speed?',
        answer: 7,
        min: 1,
        max: 40,
        step: 1,
        unit: 'mph',
        tolerance: 2,
        explain: 'Seven miles per hour. A governor keeps it there.',
        source: SP_TP,
      },
      // evidence: "In total, there are 146 cars driving with you"
      {
        type: 'guess',
        id: 'speedway-x15',
        question: 'How many cars drive around the Speedway?',
        answer: 146,
        min: 20,
        max: 300,
        step: 2,
        unit: 'cars',
        tolerance: 20,
        explain: 'There are 146 cars.',
        source: SP_TP,
      },
      // evidence: "from its original length of more than 3100 feet"
      {
        type: 'guess',
        id: 'speedway-x16',
        question: 'About how long was the track on opening day?',
        answer: 3100,
        min: 1000,
        max: 5000,
        step: 100,
        unit: 'feet',
        tolerance: 300,
        explain: 'More than 3,100 feet. Today it is just over 2,100.',
        source: SP_TP,
      },
      // evidence: "You must be 32 inches tall to ride"
      {
        type: 'guess',
        id: 'speedway-x17',
        question: 'How many inches tall do you need to be to ride at all?',
        answer: 32,
        min: 20,
        max: 60,
        step: 1,
        unit: 'inches',
        tolerance: 2,
        explain: 'Riders must be 32 inches tall. Driving alone takes 54.',
        source: SP_TP,
      },

      // ---- Order ----
      // evidence: "On opening day, it was called the Grand Prix Raceway" / "in 1994 the name was changed to the Tomorrowland Indy Speedway" / "in 2008 the name was shortened to Tomorrowland Speedway"
      {
        type: 'order',
        id: 'speedway-x18',
        prompt: 'Put the Speedway’s names in order, oldest first.',
        items: ['Grand Prix Raceway (1971)', 'Tomorrowland Indy Speedway (1994)', 'Tomorrowland Speedway (2008)'],
        explain: 'It opened as Grand Prix Raceway, became the Indy Speedway in 1994, and shortened its name in 2008.',
        source: SP_TP,
      },
      // evidence: "The first reduction occurred when Space Mountain was built" / "Dumbo's relocation (2012), and TRON Lightcycle/Run adjustments (2019)"
      {
        type: 'order',
        id: 'speedway-x19',
        prompt: 'Put the changes that shortened the track in order, oldest first.',
        items: ['Space Mountain is built', 'Dumbo moves (2012)', 'TRON changes (2019)'],
        explain: 'Space Mountain came first, then Dumbo’s move in 2012, then TRON in 2019.',
        source: SP_TP,
      },

      // ---- Ride games ----
      { type: 'wyr', id: 'speedway-r31', a: 'Drive your own Speedway car', b: 'Ride along in the passenger seat' },
      { type: 'wyr', id: 'speedway-r32', a: 'Take the first loading area', b: 'Take the second loading area' },
      { type: 'wyr', id: 'speedway-r33', a: 'Win the checkered flag', b: 'Wave the checkered flag' },
      {
        type: 'challenge',
        id: 'speedway-r34',
        prompt: 'Race announcer voice! Take turns saying “Start your engines!” as dramatically as you can.',
      },
      {
        type: 'challenge',
        id: 'speedway-r35',
        prompt: 'Plan your seating: who drives and who works the pedal? Pick a team name for your car.',
      },
      {
        type: 'emoji',
        id: 'speedway-x20',
        emojis: '🏁 🏎️',
        hint: 'You are in line for it!',
        choices: ['Tomorrowland Speedway', 'Space Mountain', 'Astro Orbiter', 'Dumbo'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'speedway-x21',
        emojis: '🏁 ⬛⬜',
        hint: 'Every car gets one at the finish line.',
        choices: ['Checkered flag', 'White flag', 'Pirate flag', 'Red flag'],
        answer: 0,
      },
    ],
  },
};
