import type { Fact, Quest } from '../../types';

const WIKI = 'https://en.wikipedia.org/wiki/';
const SM = WIKI + 'Space_Mountain_(Magic_Kingdom)';
const TRON = WIKI + 'Tron_Lightcycle_Power_Run';
const TRON_FILM = WIKI + 'Tron:_Legacy';
const BUZZ = WIKI + "Buzz_Lightyear's_Space_Ranger_Spin";
const TOY_STORY = WIKI + 'Toy_Story';
const PM = WIKI + 'Tomorrowland_Transit_Authority_PeopleMover';
const AO = WIKI + 'Astro_Orbiter';
const COP = WIKI + "Walt_Disney's_Carousel_of_Progress";
const LF = WIKI + 'Monsters,_Inc._Laugh_Floor';
const LF_DISNEY = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/monsters-inc-laugh-floor/';
const MONSTERS = WIKI + 'Monsters,_Inc.';

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
    ],
    quests: [
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
      // evidence: "From 1975 to 1989, the train cars featured two rows instead of three" / "The newer trains introduced the use of lap bars" / "April 19 to November 21, 2009"
      {
        type: 'order',
        id: 'space-mountain-x10',
        prompt: 'Put these Space Mountain moments in order, oldest first.',
        items: ['Space Mountain opens (1975)', 'New trains with lap bars (1989)', 'Big makeover (2009)'],
        explain: 'It opened in 1975, got new trains in 1989 and a big refurbishment in 2009.',
        source: SM,
      },
      // evidence: "repainted in a blue and gray color scheme"
      {
        type: 'trivia',
        id: 'space-mountain-x11',
        question: 'The trains were white at first. What colors were they painted in 2009?',
        choices: ['Red and gold', 'Blue and gray', 'Green and black', 'Pink and purple'],
        answer: 1,
        explain: 'The 2009 refurbishment repainted them blue and gray.',
        source: SM,
      },
      // evidence: "opened in 1959" (the Matterhorn Bobsleds, which Space Mountain descends from)
      {
        type: 'trivia',
        id: 'space-mountain-x12',
        question: 'Which older Disneyland coaster is Space Mountain’s “ancestor”?',
        choices: ['Big Thunder Mountain', 'Matterhorn Bobsleds', 'Splash Mountain', 'Gadget’s Go Coaster'],
        answer: 1,
        explain: 'Space Mountain descends from the Matterhorn Bobsleds, which opened in 1959.',
        source: SM,
      },
      // evidence: "a large room filled with small, silver, ball-pit like balls"
      {
        type: 'spy',
        id: 'space-mountain-x13',
        prompt: 'Find the room filled with lots of little silver balls. What do they look like to you?',
        hint: 'It’s near the start of the line.',
      },
      // evidence: "passes by "space windows" in the walls"
      {
        type: 'spy',
        id: 'space-mountain-x14',
        prompt: 'Spot a “space window” in the wall. What can you see out there?',
        hint: 'Look along the walls as the line climbs.',
      },
      {
        type: 'spy',
        id: 'space-mountain-x15',
        prompt: 'Find something that looks like it belongs on a real spaceship.',
      },
      {
        type: 'spy',
        id: 'space-mountain-x16',
        prompt: 'Count how many glowing lights or “stars” you can find in one look.',
      },
      {
        type: 'challenge',
        id: 'space-mountain-x17',
        prompt: 'Moonwalk time! Everyone take three slow, floaty astronaut steps in place.',
      },
      {
        type: 'challenge',
        id: 'space-mountain-x18',
        prompt: 'Be mission control: take turns saying a robot-voice safety announcement.',
      },
      {
        type: 'challenge',
        id: 'space-mountain-x19',
        prompt: 'Name a planet for every letter you can: M for Mars, J for Jupiter… go!',
      },
      {
        type: 'challenge',
        id: 'space-mountain-x20',
        prompt: 'Invent a name for your rocket and tell everyone what it can do.',
      },
      {
        type: 'wyr',
        id: 'space-mountain-x21',
        a: 'Ride a rocket through a meteor shower',
        b: 'Ride a rocket around Saturn’s rings',
      },
      { type: 'wyr', id: 'space-mountain-x22', a: 'Have a pet alien', b: 'Have a pet robot' },
      { type: 'wyr', id: 'space-mountain-x23', a: 'Ride in total darkness', b: 'Ride surrounded by sparkling stars' },
      { type: 'wyr', id: 'space-mountain-x24', a: 'Live on a space station', b: 'Live on the Moon' },
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
        emojis: '⭐ 🌌 🕳️',
        hint: 'Stars, a galaxy and a hole… that swirls at the end of the ride.',
        choices: ['Black ice', 'Wormhole', 'Volcano', 'Tunnel of love'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'space-mountain-x27',
        emojis: '👨‍🚀 🌕 🚶',
        hint: 'A floaty way to walk.',
        choices: ['Moonwalk', 'Sleepwalk', 'Boardwalk', 'Crosswalk'],
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
    ],
    quests: [
      // evidence: "Team Blue, the team guests join"
      {
        type: 'trivia',
        id: 'tron-x1',
        question: 'Which team do riders join on TRON?',
        choices: ['Team Red', 'Team Yellow', 'Team Blue', 'Team Orange'],
        answer: 2,
        explain: 'You race for Team Blue!',
        source: TRON,
      },
      // evidence: "capture eight 'Energy Gates'"
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
      // evidence: "riders 2 across in a single row for a total of 14 riders per train"
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
      // evidence: "lean forward and grip a set of handlebars"
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
      // evidence: "Opening date: June 16, 2016" (Shanghai Disneyland)
      {
        type: 'truefalse',
        id: 'tron-x7',
        statement: 'The very first TRON coaster opened at Shanghai Disneyland.',
        answer: true,
        explain: 'Fact! Shanghai’s version opened on June 16, 2016.',
        source: TRON,
      },
      // evidence: "Initiate in 3, 2, 1!"
      {
        type: 'trivia',
        id: 'tron-x8',
        question: 'What do you hear right before the launch?',
        choices: ['“Ready, set, go!”', '“Initiate in 3, 2, 1!”', '“Blast off!”', '“Hold on tight!”'],
        answer: 1,
        explain: 'The countdown is “Initiate in 3, 2, 1!”',
        source: TRON,
      },
      // evidence: "composed the film's musical score"
      {
        type: 'trivia',
        id: 'tron-x9',
        question: 'Which music duo made the score for Tron: Legacy?',
        choices: ['Daft Punk', 'The Beatles', 'Imagine Dragons', 'Coldplay'],
        answer: 0,
        explain: 'Daft Punk composed the Tron: Legacy music, mixing orchestra and electronic sounds.',
        source: TRON_FILM,
      },
      // evidence: "Flynn's "identity disc" is the master key to the Grid"
      {
        type: 'trivia',
        id: 'tron-x10',
        question: 'In Tron: Legacy, what is the master key to the Grid?',
        choices: ['A golden key', 'Flynn’s identity disc', 'A lightcycle', 'A secret password'],
        answer: 1,
        explain: 'Kevin Flynn’s identity disc is the master key to the Grid.',
        source: TRON_FILM,
      },
      // evidence: "Samuel "Sam" Flynn, Kevin‘s son"
      {
        type: 'trivia',
        id: 'tron-x11',
        question: 'In Tron: Legacy, what is Kevin Flynn’s son called?',
        choices: ['Sam', 'Clu', 'Alan', 'Max'],
        answer: 0,
        explain: 'Sam Flynn goes into the Grid to find his dad.',
        source: TRON_FILM,
      },
      // evidence: "a sequel to Tron (1982)" / "A sequel, Tron: Ares, was released in 2025."
      {
        type: 'order',
        id: 'tron-x12',
        prompt: 'Put the Tron movies in order, oldest first.',
        items: ['Tron (1982)', 'Tron: Legacy (2010)', 'Tron: Ares (2025)'],
        explain: 'Tron came out in 1982, Tron: Legacy in 2010 and Tron: Ares in 2025.',
        source: TRON_FILM,
      },
      // evidence: "Team Red, Team Yellow, Team Orange," and "Team Blue"
      {
        type: 'spy',
        id: 'tron-x13',
        prompt: 'In the team room, find the colors of the other racing teams. How many can you spot?',
        hint: 'Red, yellow, orange… and your team, blue!',
      },
      // evidence: "all loose items must be stowed in the lockers"
      {
        type: 'spy',
        id: 'tron-x14',
        prompt: 'Spot a screen telling riders where loose items go.',
        hint: 'Look at the monitors near the lockers.',
      },
      {
        type: 'spy',
        id: 'tron-x15',
        prompt: 'Find a shape or pattern that looks like a computer circuit.',
      },
      {
        type: 'spy',
        id: 'tron-x16',
        prompt: 'Find something that looks like it came from inside a video game.',
      },
      {
        type: 'challenge',
        id: 'tron-x17',
        prompt: 'Hold your “handlebars” and lean forward. Everyone make your best lightcycle zoom sound!',
      },
      {
        type: 'challenge',
        id: 'tron-x18',
        prompt: 'Talk like a computer program for one minute. Beep boop, user!',
      },
      {
        type: 'challenge',
        id: 'tron-x19',
        prompt: 'Make up a Team Blue cheer and say it together.',
      },
      {
        type: 'challenge',
        id: 'tron-x20',
        prompt: 'Freeze like a glitching video game character until someone says “reboot!”',
      },
      { type: 'wyr', id: 'tron-x21', a: 'Race a lightcycle', b: 'Fly a light jet' },
      { type: 'wyr', id: 'tron-x22', a: 'Glow bright blue', b: 'Glow bright orange' },
      { type: 'wyr', id: 'tron-x23', a: 'Live inside a video game', b: 'Have a video game character live with you' },
      {
        type: 'wyr',
        id: 'tron-x24',
        a: 'Ride your lightcycle on the Grid',
        b: 'Ride your lightcycle through Magic Kingdom',
      },
      {
        type: 'emoji',
        id: 'tron-x25',
        emojis: '💡 🏍️',
        hint: 'A glowing motorbike from the Grid.',
        choices: ['Lightcycle', 'Moped', 'Scooter', 'Hoverboard'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'tron-x26',
        emojis: '💻 🌐 🔷',
        hint: 'The digital world inside the computer.',
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
      // evidence: "The film's signature song "You've Got a Friend in Me", was written in one day."
      { text: 'The Toy Story song “You’ve Got a Friend in Me” was written in one day.', source: TOY_STORY },
    ],
    quests: [
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
      // evidence: "originally constructed in 1972 for If You Had Wings"
      {
        type: 'truefalse',
        id: 'buzz-lightyear-x2',
        statement: 'The track and ride system were first built for a different ride in 1972.',
        answer: true,
        explain: 'Fact! It was built in 1972 for If You Had Wings.',
        source: BUZZ,
      },
      // evidence: "to steal the batteries (known as "crystallic fusion cells")."
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
      // evidence: "Mattel originally sponsored the Magic Kingdom attraction from its opening to 1999."
      {
        type: 'trivia',
        id: 'buzz-lightyear-x5',
        question: 'Which toy company first sponsored this ride?',
        choices: ['Lego', 'Hasbro', 'Mattel', 'Fisher-Price'],
        answer: 2,
        explain: 'Mattel sponsored it from opening day until 1999.',
        source: BUZZ,
      },
      // evidence: "they are now handheld like the other versions"
      {
        type: 'truefalse',
        id: 'buzz-lightyear-x6',
        statement: 'Since 2026, you can pick up and hold your blaster.',
        answer: true,
        explain: 'Fact! The blasters were stuck in place before, and now they’re handheld.',
        source: BUZZ,
      },
      // evidence: "The first entirely computer-animated feature film"
      {
        type: 'truefalse',
        id: 'buzz-lightyear-x7',
        statement: 'Toy Story was the first movie made entirely with computer animation.',
        answer: true,
        explain: 'Fact! It was the first entirely computer-animated feature film.',
        source: TOY_STORY,
      },
      // evidence: "Tim Allen as Buzz Lightyear, a Space Ranger action figure"
      {
        type: 'trivia',
        id: 'buzz-lightyear-x8',
        question: 'Who voices Buzz Lightyear in Toy Story?',
        choices: ['Tom Hanks', 'Tim Allen', 'Billy Crystal', 'John Goodman'],
        answer: 1,
        explain: 'Tim Allen voices Buzz. Tom Hanks voices Woody!',
        source: TOY_STORY,
      },
      // evidence: "At Pizza Planet, Buzz mistakes a claw machine arcade game for a rocket"
      {
        type: 'trivia',
        id: 'buzz-lightyear-x9',
        question: 'In Toy Story, where does Buzz think a claw machine is a rocket?',
        choices: ['Pizza Planet', 'Al’s Toy Barn', 'Sid’s house', 'Andy’s room'],
        answer: 0,
        explain: 'At Pizza Planet, Buzz mistakes the claw machine for a rocket.',
        source: TOY_STORY,
      },
      // evidence: "the addition of the three-eyed squeaky toy aliens"
      {
        type: 'guess',
        id: 'buzz-lightyear-x10',
        question: 'How many eyes does each Little Green Man alien have?',
        answer: 3,
        min: 1,
        max: 10,
        step: 1,
        unit: 'eyes',
        tolerance: 0,
        explain: 'They’re three-eyed squeaky toy aliens. Ooooh!',
        source: TOY_STORY,
      },
      // evidence: "John Morris as Andy Davis, the six-year-old boy who owns all the toys"
      {
        type: 'guess',
        id: 'buzz-lightyear-x11',
        question: 'How old is Andy in the first Toy Story?',
        answer: 6,
        min: 1,
        max: 15,
        step: 1,
        unit: 'years',
        tolerance: 1,
        explain: 'Andy is six years old.',
        source: TOY_STORY,
      },
      // evidence: "Sid Phillips, Andy's mischievous next-door neighbor who destroys toys for fun"
      {
        type: 'trivia',
        id: 'buzz-lightyear-x12',
        question: 'Who is Andy’s next-door neighbor who is mean to toys?',
        choices: ['Sid', 'Al', 'Bonnie', 'Molly'],
        answer: 0,
        explain: 'Sid Phillips lives next door and breaks toys for fun.',
        source: TOY_STORY,
      },
      // evidence: "Toy Story is a 1995 American animated adventure comedy film" / "first opened at Magic Kingdom on November 3, 1998."
      {
        type: 'order',
        id: 'buzz-lightyear-x13',
        prompt: 'Put these in order, oldest first.',
        items: ['Toy Story comes out (1995)', 'This ride opens (1998)', 'Ride reopens with handheld blasters (2026)'],
        explain: 'Toy Story came out in 1995, the ride opened in 1998 and got its big update in 2026.',
        source: BUZZ,
      },
      {
        type: 'spy',
        id: 'buzz-lightyear-x14',
        prompt: 'Find something that looks like it belongs in a toy box.',
      },
      {
        type: 'spy',
        id: 'buzz-lightyear-x15',
        prompt: 'Spot something green. Bonus points if it looks like an alien!',
      },
      {
        type: 'spy',
        id: 'buzz-lightyear-x16',
        prompt: 'Find a planet, a star or a rocket somewhere in the line.',
      },
      {
        type: 'spy',
        id: 'buzz-lightyear-x17',
        prompt: 'Find a shape that could be a target: a circle, square, diamond or triangle.',
      },
      {
        type: 'challenge',
        id: 'buzz-lightyear-x18',
        prompt: 'Little Green Men moment: everyone look up and say “The claaaaw!” together.',
      },
      {
        type: 'challenge',
        id: 'buzz-lightyear-x19',
        prompt: 'Do your best Zurg villain laugh. Who sounds the most evil?',
      },
      {
        type: 'challenge',
        id: 'buzz-lightyear-x20',
        prompt: 'Space Ranger training: practice aiming with finger blasters at an imaginary target.',
      },
      {
        type: 'challenge',
        id: 'buzz-lightyear-x21',
        prompt: 'Pretend to be a toy: freeze whenever someone says “Andy’s coming!”',
      },
      { type: 'wyr', id: 'buzz-lightyear-x22', a: 'Have Buzz’s wings', b: 'Have Buzz’s laser' },
      { type: 'wyr', id: 'buzz-lightyear-x23', a: 'Be a toy for a day', b: 'Have your toys come alive for a day' },
      { type: 'wyr', id: 'buzz-lightyear-x24', a: 'Be a Little Green Man', b: 'Be a Space Ranger' },
      { type: 'wyr', id: 'buzz-lightyear-x25', a: 'Visit Pizza Planet', b: 'Visit Star Command' },
      {
        type: 'emoji',
        id: 'buzz-lightyear-x26',
        emojis: '👽 👽 👽 🧸',
        hint: 'Three-eyed squeaky friends.',
        choices: ['Little Green Men', 'Minions', 'Martians', 'Smurfs'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'buzz-lightyear-x27',
        emojis: '🤠 🧸 ⭐',
        hint: 'A cowboy doll and Andy’s favorite toy.',
        choices: ['Jessie', 'Woody', 'Bullseye', 'Rex'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'buzz-lightyear-x28',
        emojis: '🍕 🪐',
        hint: 'Where Buzz finds the claw machine.',
        choices: ['Pizza Planet', 'Pizza Moon', 'Space Pizza', 'Planet Pepperoni'],
        answer: 0,
      },
    ],
  },

  peoplemover: {
    facts: [
      // evidence: "The Edison Electric Institute was the original institutional patron of the attraction"
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
    ],
    quests: [
      // evidence: "WED for Walter Elias Disney"
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
      // evidence: "get a view down into Buzz Lightyear's Space Ranger Spin"
      {
        type: 'trivia',
        id: 'peoplemover-x5',
        question: 'Besides Space Mountain, which ride can you look down into?',
        choices: ['Buzz Lightyear’s Space Ranger Spin', 'Haunted Mansion', 'Peter Pan’s Flight', 'Jungle Cruise'],
        answer: 0,
        explain: 'You get a view down into Buzz Lightyear’s Space Ranger Spin.',
        source: PM,
      },
      // evidence: "the narration was updated to feature an entirely new narration by ORAC-5"
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
      // evidence: "passes a large diorama containing a portion of the Progress City"
      {
        type: 'trivia',
        id: 'peoplemover-x9',
        question: 'What model city do you pass on the ride?',
        choices: ['Toontown', 'Progress City', 'Monstropolis', 'Radiator Springs'],
        answer: 1,
        explain: 'You pass a big model of part of Progress City, Walt’s city of the future.',
        source: PM,
      },
      // evidence: "at the New York World's Fair of 1964-1965"
      {
        type: 'guess',
        id: 'peoplemover-x10',
        question: 'The Progress City model was first shown at a World’s Fair. In what year did that fair start?',
        answer: 1964,
        min: 1900,
        max: 2000,
        step: 1,
        unit: '',
        tolerance: 3,
        explain: 'It was at the 1964–1965 New York World’s Fair.',
        source: PM,
      },
      // evidence: "the attraction's name changed from the Wedway PeopleMover to Tomorrowland Transit Authority" / "Tomorrowland Transit Authority PeopleMover (October 2, 2009 – present"
      {
        type: 'order',
        id: 'peoplemover-x11',
        prompt: 'Put the PeopleMover’s names in order, oldest first.',
        items: ['WEDway PeopleMover', 'Tomorrowland Transit Authority', 'Tomorrowland Transit Authority PeopleMover'],
        explain: 'WEDway in 1975, Tomorrowland Transit Authority in 1994, and its current name since 2009.',
        source: PM,
      },
      // evidence: "the system did not utilize the rotating Goodyear tires"
      {
        type: 'truefalse',
        id: 'peoplemover-x12',
        statement: 'Spinning rubber tires push the Magic Kingdom PeopleMover along.',
        answer: false,
        explain: 'Fiction! It uses linear induction motors instead of rotating tires.',
        source: PM,
      },
      // evidence: "the ride crosses the Walt Disney World Railroad tracks"
      {
        type: 'trivia',
        id: 'peoplemover-x13',
        question: 'What other train’s tracks does the PeopleMover cross over?',
        choices: [
          'The Monorail',
          'The Walt Disney World Railroad',
          'Big Thunder Mountain',
          'The Seven Dwarfs Mine Train',
        ],
        answer: 1,
        explain: 'It crosses the Walt Disney World Railroad tracks on the way to Space Mountain.',
        source: PM,
      },
      {
        type: 'spy',
        id: 'peoplemover-x14',
        prompt: 'Look up! Spot a PeopleMover train gliding by. Wave to the riders!',
      },
      {
        type: 'spy',
        id: 'peoplemover-x15',
        prompt: 'Find something that looks like it belongs in a city of the future.',
      },
      {
        type: 'spy',
        id: 'peoplemover-x16',
        prompt: 'From up high, how many other rides can you spot?',
        hint: 'Look for rockets, mountains and castles.',
      },
      {
        type: 'spy',
        id: 'peoplemover-x17',
        prompt: 'Find something that moves without anyone pushing it.',
      },
      {
        type: 'challenge',
        id: 'peoplemover-x18',
        prompt: 'Be the tour guide! Take turns announcing “On your left…” and naming something you see.',
      },
      {
        type: 'challenge',
        id: 'peoplemover-x19',
        prompt: 'Say “Paging Mr. Tom Morrow” in your fanciest announcer voice.',
      },
      {
        type: 'challenge',
        id: 'peoplemover-x20',
        prompt: 'Design the city of the future: everyone adds one invention to it.',
      },
      {
        type: 'challenge',
        id: 'peoplemover-x21',
        prompt: 'Make the smooth, quiet PeopleMover sound. Who can do the longest “whoosh”?',
      },
      {
        type: 'wyr',
        id: 'peoplemover-x22',
        a: 'Ride the PeopleMover forever',
        b: 'Ride the PeopleMover super fast just once',
      },
      {
        type: 'wyr',
        id: 'peoplemover-x23',
        a: 'Ride a moving sidewalk to school',
        b: 'Ride a train to school every day',
      },
      { type: 'wyr', id: 'peoplemover-x24', a: 'Live in Progress City', b: 'Live on top of Space Mountain' },
      { type: 'wyr', id: 'peoplemover-x25', a: 'Be the PeopleMover’s narrator', b: 'Be the PeopleMover’s driver' },
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
    ],
  },

  'astro-orbiter': {
    facts: [
      // evidence: "averages 1.2 million miles a year"
      { text: 'The rockets travel about 1.2 million miles every year!', source: AO },
      // evidence: "until 1974, three years after the park's opening"
      { text: 'The ride arrived in 1974, three years after Magic Kingdom opened.', source: AO },
      // evidence: "appear as if the rockets were weaving between the planets"
      { text: 'Planets on the tower make it look like the rockets weave between them.', source: AO },
    ],
    quests: [
      // evidence: "circled round and round, 60 feet above the ground"
      {
        type: 'guess',
        id: 'astro-orbiter-x1',
        question: 'About how many feet above the ground do the rockets circle?',
        answer: 60,
        min: 10,
        max: 200,
        step: 5,
        unit: 'feet',
        tolerance: 10,
        explain: 'The rockets circle about 60 feet up. That’s high!',
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
        question: 'About how many seconds does a ride last?',
        answer: 90,
        min: 20,
        max: 300,
        step: 5,
        unit: 'seconds',
        tolerance: 15,
        explain: 'A flight lasts about 1 minute 30 seconds.',
        source: AO,
      },
      // evidence: "In 1956, the first rocket-spinner attraction opened at Disneyland" / "until 1974" / "April 30, 1994"
      {
        type: 'order',
        id: 'astro-orbiter-x9',
        prompt: 'Put these rocket rides in order, oldest first.',
        items: ['Disneyland’s Astro Jets (1956)', 'Magic Kingdom’s Star Jets (1974)', 'Astro Orbiter (1994)'],
        explain: 'The first rocket-spinner opened at Disneyland in 1956, Star Jets in 1974, and Astro Orbiter in 1994.',
        source: AO,
      },
      // evidence: "controlling their ascent and descent with a metal control stick"
      {
        type: 'trivia',
        id: 'astro-orbiter-x10',
        question: 'What do riders use to make the rocket go up and down?',
        choices: ['A button', 'A metal control stick', 'A steering wheel', 'A foot pedal'],
        answer: 1,
        explain: 'Riders use a metal control stick to climb and dive.',
        source: AO,
      },
      {
        type: 'spy',
        id: 'astro-orbiter-x11',
        prompt: 'Look up at the planets. Which one is your favorite color?',
      },
      {
        type: 'spy',
        id: 'astro-orbiter-x12',
        prompt: 'Watch the rockets. Find one flying high and one flying low.',
      },
      {
        type: 'spy',
        id: 'astro-orbiter-x13',
        prompt: 'Find a planet with rings around it.',
        hint: 'Think Saturn!',
      },
      {
        type: 'spy',
        id: 'astro-orbiter-x14',
        prompt: 'Spot something shiny that would look great on a spaceship.',
      },
      {
        type: 'challenge',
        id: 'astro-orbiter-x15',
        prompt: 'Be a rocket: arms out, and everyone slowly “fly” up and down together.',
      },
      {
        type: 'challenge',
        id: 'astro-orbiter-x16',
        prompt: 'Name all the planets you can before the next rocket passes!',
      },
      {
        type: 'challenge',
        id: 'astro-orbiter-x17',
        prompt: 'Pilot check! Take turns doing a cool pilot salute and saying your space name.',
      },
      {
        type: 'challenge',
        id: 'astro-orbiter-x18',
        prompt: 'Make up a new planet and describe who lives there.',
      },
      { type: 'wyr', id: 'astro-orbiter-x19', a: 'Fly your rocket as high as it goes', b: 'Fly your rocket super low' },
      { type: 'wyr', id: 'astro-orbiter-x20', a: 'Be the pilot', b: 'Be the passenger' },
      { type: 'wyr', id: 'astro-orbiter-x21', a: 'Ride a rocket around Jupiter', b: 'Ride a rocket around the Sun' },
      { type: 'wyr', id: 'astro-orbiter-x22', a: 'Have a rocket for a car', b: 'Have a jetpack for a backpack' },
      {
        type: 'emoji',
        id: 'astro-orbiter-x23',
        emojis: '🪐 💍',
        hint: 'A planet famous for its rings.',
        choices: ['Mars', 'Saturn', 'Earth', 'Mercury'],
        answer: 1,
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
    ],
  },

  'carousel-of-progress': {
    facts: [
      // evidence: "the ride would close on July 6, 2026 to install the update" / "expected to reopen in late Spring 2027."
      {
        text: 'The show was set to close on July 6, 2026 for an update, and is expected back in late spring 2027.',
        source: COP,
      },
      // evidence: "The Imagineers, led by Disney engineers Roger E. Broggie and Bob Gurr, also devised a 'carousel theater'"
      { text: 'Imagineers Roger E. Broggie and Bob Gurr came up with the spinning “carousel theater.”', source: COP },
      // evidence: "the oldest attraction at Walt Disney World to have been worked on by Walt Disney."
      { text: 'It is the oldest Walt Disney World attraction that Walt Disney himself worked on.', source: COP },
      // evidence: "two brothers in North Carolina are working on a "flying contraption""
      {
        text: 'In the first scene, the family hears about two brothers in North Carolina building a “flying contraption.”',
        source: COP,
      },
    ],
    quests: [
      // evidence: "the theme song "There's a Great Big Beautiful Tomorrow" by the Sherman Brothers."
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
      // evidence: "the theme song "There's a Great Big Beautiful Tomorrow" by the Sherman Brothers."
      {
        type: 'trivia',
        id: 'carousel-of-progress-x2',
        question: 'Who wrote the show’s famous theme song?',
        choices: ['The Sherman Brothers', 'The Wright Brothers', 'The Jonas Brothers', 'The Mario Brothers'],
        answer: 0,
        explain: 'The Sherman Brothers wrote it. They wrote lots of Disney songs!',
        source: COP,
      },
      // evidence: "The first act is set on Valentine's Day" / "on Independence Day." / "set on Halloween" / "during Christmas in the 21st century"
      {
        type: 'order',
        id: 'carousel-of-progress-x3',
        prompt: 'Each scene happens on a holiday. Put them in show order.',
        items: ['Valentine’s Day', 'Independence Day', 'Halloween', 'Christmas'],
        explain: 'Valentine’s Day, then Independence Day, then Halloween, and finally Christmas.',
        source: COP,
      },
      // evidence: "Uncle Orville, who is shown sitting in a bathtub on the left side of the stage."
      {
        type: 'trivia',
        id: 'carousel-of-progress-x4',
        question: 'Which family member is sitting in a bathtub?',
        choices: ['Grandpa', 'Uncle Orville', 'Jimmy', 'Rover'],
        answer: 1,
        explain: 'Uncle Orville relaxes in the tub in the 1920s scene.',
        source: COP,
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
        id: 'carousel-of-progress-x6',
        question: 'About how many minutes long is the show?',
        answer: 21,
        min: 5,
        max: 60,
        step: 1,
        unit: 'minutes',
        tolerance: 3,
        explain: 'The show runs about 21 minutes.',
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
      // evidence: "a design of a blueprint of the six carousel theaters surrounding the six fixed stages"
      {
        type: 'guess',
        id: 'carousel-of-progress-x8',
        question: 'How many carousel theaters spin around the stages?',
        answer: 6,
        min: 1,
        max: 12,
        step: 1,
        unit: 'theaters',
        tolerance: 0,
        explain: 'Six carousel theaters surround six fixed stages.',
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
      // evidence: "The father of the family, John" / "his wife, Sarah"
      {
        type: 'trivia',
        id: 'carousel-of-progress-x10',
        question: 'What are the mom and dad’s names?',
        choices: ['John and Sarah', 'Walt and Lilly', 'Bob and Helen', 'George and Jane'],
        answer: 0,
        explain: 'The dad is John and the mom is Sarah.',
        source: COP,
      },
      // evidence: "a refrigerator that holds more quantity of food and ice cubes" / "they now have television, when it works"
      {
        type: 'trivia',
        id: 'carousel-of-progress-x11',
        question: 'Which new gadget does the family have in the 1940s scene?',
        choices: ['A smartphone', 'A television', 'A robot vacuum', 'A video game console'],
        answer: 1,
        explain: 'They have a television, when it works! And a bigger refrigerator.',
        source: COP,
      },
      // evidence: "So the Sherman Brothers created a new song" ("The Best Time Of Your Life", 1975)
      {
        type: 'truefalse',
        id: 'carousel-of-progress-x12',
        statement: 'For a while, the show used a different theme song.',
        answer: true,
        explain: 'Fact! In 1975 the Sherman Brothers wrote “The Best Time of Your Life” for it.',
        source: COP,
      },
      {
        type: 'spy',
        id: 'carousel-of-progress-x13',
        prompt: 'Find something that looks old-fashioned and something that looks futuristic.',
      },
      {
        type: 'spy',
        id: 'carousel-of-progress-x14',
        prompt: 'Spot anything that uses electricity. How many can you count?',
      },
      {
        type: 'spy',
        id: 'carousel-of-progress-x15',
        prompt: 'Find something round that turns, just like this theater does.',
      },
      {
        type: 'spy',
        id: 'carousel-of-progress-x16',
        prompt: 'Look for something your grandparents might have used when they were kids.',
      },
      {
        type: 'challenge',
        id: 'carousel-of-progress-x17',
        prompt: 'Sing “There’s a great big beautiful tomorrow…” together. Hum if you don’t know the words!',
      },
      {
        type: 'challenge',
        id: 'carousel-of-progress-x18',
        prompt: 'Act out life before electricity: everyone mime washing clothes by hand!',
      },
      {
        type: 'challenge',
        id: 'carousel-of-progress-x19',
        prompt: 'Do your best Rover the dog impression. Woof!',
      },
      {
        type: 'challenge',
        id: 'carousel-of-progress-x20',
        prompt: 'Imagine a fifth scene in the future. What holiday is it, and what gadgets are there?',
      },
      { type: 'wyr', id: 'carousel-of-progress-x21', a: 'Live in the 1920s', b: 'Live 100 years in the future' },
      {
        type: 'wyr',
        id: 'carousel-of-progress-x22',
        a: 'Have a robot that cooks',
        b: 'Have a robot that cleans your room',
      },
      {
        type: 'wyr',
        id: 'carousel-of-progress-x23',
        a: 'Celebrate Halloween with the family',
        b: 'Celebrate Christmas with the family',
      },
      { type: 'wyr', id: 'carousel-of-progress-x24', a: 'Never have TV again', b: 'Never have a refrigerator again' },
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
        hint: 'He’s taking a bath in the 1920s.',
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
      // evidence: "with student Art promoting the Monsters University School of Laughter"
      {
        text: 'In the pre-show, Art from Monsters University promotes the Monsters University School of Laughter.',
        source: LF,
      },
    ],
    quests: [
      // evidence: "hosted by Monster of Ceremonies Mike Wazowski"
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
      // evidence: "The attraction opened on April 2, 2007"
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
      // evidence: "the city of Monstropolis harnesses the screams of human children for energy"
      {
        type: 'trivia',
        id: 'laugh-floor-x4',
        question: 'In Monsters, Inc., what is the monster city called?',
        choices: ['Monstropolis', 'Scaretown', 'Boo City', 'Monster Falls'],
        answer: 0,
        explain: 'The city is Monstropolis.',
        source: MONSTERS,
      },
      // evidence: "the city of Monstropolis harnesses the screams of human children for energy"
      {
        type: 'truefalse',
        id: 'laugh-floor-x5',
        statement: 'At the start of Monsters, Inc., the city is powered by kids’ laughs.',
        answer: false,
        explain: 'Fiction! At first, Monstropolis runs on kids’ screams. Laughs come later!',
        source: MONSTERS,
      },
      // evidence: "since laughter is ten times more powerful"
      {
        type: 'guess',
        id: 'laugh-floor-x6',
        question: 'In the movie, how many times more powerful is laughter than screams?',
        answer: 10,
        min: 1,
        max: 100,
        step: 1,
        unit: 'times',
        tolerance: 1,
        explain: 'Laughter is ten times more powerful. That’s why the monsters want your laughs!',
        source: MONSTERS,
      },
      // evidence: "John Goodman as James P. "Sulley" Sullivan" / "Billy Crystal as Mike Wazowski"
      {
        type: 'trivia',
        id: 'laugh-floor-x7',
        question: 'Who voices Mike Wazowski in Monsters, Inc.?',
        choices: ['Billy Crystal', 'John Goodman', 'Tim Allen', 'Tom Hanks'],
        answer: 0,
        explain: 'Billy Crystal is Mike. John Goodman is Sulley!',
        source: MONSTERS,
      },
      // evidence: "James P. "Sulley" Sullivan"
      {
        type: 'trivia',
        id: 'laugh-floor-x8',
        question: 'What is Sulley’s full name?',
        choices: ['Sully Monster', 'James P. Sullivan', 'Henry J. Sullivan', 'Mike Sullivan'],
        answer: 1,
        explain: 'His full name is James P. “Sulley” Sullivan.',
        source: MONSTERS,
      },
      // evidence: "a chameleon-like ability to change his skin color"
      {
        type: 'trivia',
        id: 'laugh-floor-x9',
        question: 'What sneaky trick can Randall do?',
        choices: ['Fly', 'Change his skin color to blend in', 'Breathe fire', 'Shrink'],
        answer: 1,
        explain: 'Randall can change his skin color like a chameleon.',
        source: MONSTERS,
      },
      // evidence: "won the Academy Award for Best Original Song" ("If I Didn't Have You")
      {
        type: 'trivia',
        id: 'laugh-floor-x10',
        question: 'Which Monsters, Inc. song won an Oscar?',
        choices: ['“If I Didn’t Have You”', '“You’ve Got a Friend in Me”', '“Let It Go”', '“Remember Me”'],
        answer: 0,
        explain: '“If I Didn’t Have You” won Best Original Song.',
        source: MONSTERS,
      },
      // evidence: "a 2001 American animated" / "The attraction opened on April 2, 2007" / "was released on June 21, 2013"
      {
        type: 'order',
        id: 'laugh-floor-x11',
        prompt: 'Put these in order, oldest first.',
        items: ['Monsters, Inc. comes out (2001)', 'Laugh Floor opens (2007)', 'Monsters University comes out (2013)'],
        explain: 'The movie came out in 2001, the Laugh Floor opened in 2007 and Monsters University in 2013.',
        source: MONSTERS,
      },
      // evidence: "Jennifer Tilly as Celia Mae"
      {
        type: 'trivia',
        id: 'laugh-floor-x12',
        question: 'Which of these is a character played by Jennifer Tilly in Monsters, Inc.?',
        choices: ['Roz', 'Celia', 'Boo', 'Fungus'],
        answer: 1,
        explain: 'Celia Mae is played by Jennifer Tilly.',
        source: MONSTERS,
      },
      {
        type: 'spy',
        id: 'laugh-floor-x13',
        prompt: 'Find something with only one eye, just like Mike.',
      },
      {
        type: 'spy',
        id: 'laugh-floor-x14',
        prompt: 'Spot something that looks like a door to a kid’s bedroom.',
      },
      {
        type: 'spy',
        id: 'laugh-floor-x15',
        prompt: 'Find something big, blue and fuzzy-looking, like Sulley.',
      },
      {
        type: 'spy',
        id: 'laugh-floor-x16',
        prompt: 'Find something that would make a monster laugh.',
      },
      {
        type: 'challenge',
        id: 'laugh-floor-x17',
        prompt: 'Laughing contest: everyone try NOT to laugh while one person makes silly faces.',
      },
      {
        type: 'challenge',
        id: 'laugh-floor-x18',
        prompt: 'Do your best friendly monster roar, then turn it into a giggle.',
      },
      {
        type: 'challenge',
        id: 'laugh-floor-x19',
        prompt: 'Make up a monster joke to send to Mike. Practice it on your group!',
      },
      {
        type: 'challenge',
        id: 'laugh-floor-x20',
        prompt: 'Everyone say “Hi, I’m Mike Wazowski!” in your best Mike voice.',
      },
      { type: 'wyr', id: 'laugh-floor-x21', a: 'Have one big eye like Mike', b: 'Have blue fur like Sulley' },
      { type: 'wyr', id: 'laugh-floor-x22', a: 'Be a comedian monster', b: 'Be the audience that laughs' },
      { type: 'wyr', id: 'laugh-floor-x23', a: 'Have a door to anywhere', b: 'Have Randall’s color-changing skin' },
      { type: 'wyr', id: 'laugh-floor-x24', a: 'Tell jokes to a monster', b: 'Hear jokes from a monster' },
      {
        type: 'emoji',
        id: 'laugh-floor-x25',
        emojis: '👧 🚪 💜',
        hint: 'The little girl who comes through the closet door.',
        choices: ['Boo', 'Roz', 'Celia', 'Andy'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'laugh-floor-x26',
        emojis: '🦎 🎨',
        hint: 'A sneaky monster who changes colors.',
        choices: ['Randall', 'Mike', 'Sulley', 'Fungus'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'laugh-floor-x27',
        emojis: '😂 ⚡',
        hint: 'What the Laugh Floor monsters want from you!',
        choices: ['Laughter', 'Screams', 'Batteries', 'Sunshine'],
        answer: 0,
      },
    ],
  },
};
