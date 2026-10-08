import type { Fact, Quest } from '../../types';

const RR = 'https://en.wikipedia.org/wiki/Walt_Disney_World_Railroad';
const CASTLE = 'https://en.wikipedia.org/wiki/Cinderella_Castle';
const CINDY = 'https://en.wikipedia.org/wiki/Cinderella_(1950_film)';
const BT = 'https://en.wikipedia.org/wiki/Big_Thunder_Mountain_Railroad';
const TIANA = 'https://en.wikipedia.org/wiki/Tiana%27s_Bayou_Adventure';
const PATF = 'https://en.wikipedia.org/wiki/The_Princess_and_the_Frog';
const BEARS = 'https://en.wikipedia.org/wiki/Country_Bear_Jamboree';
const HM = 'https://en.wikipedia.org/wiki/The_Haunted_Mansion';
const HOP = 'https://en.wikipedia.org/wiki/The_Hall_of_Presidents';

/** Extra ride-specific content for Main Street, U.S.A., Frontierland and Liberty Square. Every sourced item was checked against its source page. */
export const extra: Record<string, { facts: Fact[]; quests: Quest[] }> = {
  'wdw-railroad': {
    facts: [
      // evidence: "pulls a set of five passenger cars with seating capacity for 75 passengers per car"
      { text: 'Each engine pulls five passenger cars, with room for 375 riders per train.', source: RR },
      // evidence: "modeled after the former Victorian-style Saratoga Springs station in Saratoga Springs, New York"
      {
        text: 'Main Street, U.S.A. Station was modeled after an old Victorian train station in Saratoga Springs, New York.',
        source: RR,
      },
      // evidence: "This bridge was originally located in Wabasso, Florida."
      { text: 'The train crosses a working swing bridge that first stood in Wabasso, Florida.', source: RR },
      // evidence: "where live alligators and deer are occasionally spotted"
      {
        text: 'In the quiet northern part of the route, riders sometimes spot real alligators and deer!',
        source: RR,
      },
    ],
    quests: [
      // evidence: "The speed limit of the WDWRR is 10 mph (16 km/h)."
      {
        type: 'guess',
        id: 'wdw-railroad-x1',
        question: 'What is the speed limit for the Walt Disney World Railroad trains?',
        answer: 10,
        min: 1,
        max: 60,
        step: 1,
        unit: 'mph',
        tolerance: 2,
        explain: 'Just 10 mph. Nice and easy so everyone can enjoy the view!',
        source: RR,
      },
      // evidence: "It takes about 20 minutes for each train to complete a round trip."
      {
        type: 'trivia',
        id: 'wdw-railroad-x2',
        question: 'About how long does one full trip around the park take?',
        choices: ['5 minutes', '20 minutes', '1 hour', '2 hours'],
        answer: 1,
        explain: 'About 20 minutes for a full round trip.',
        source: RR,
      },
      // evidence: "seating capacity for 75 passengers per car"
      {
        type: 'truefalse',
        id: 'wdw-railroad-x3',
        statement: 'Each passenger car on the train can seat 75 people.',
        answer: true,
        explain: 'Fact! 75 per car, and five cars per train.',
        source: RR,
      },
      // evidence: "for a total of 375 passengers per train"
      {
        type: 'guess',
        id: 'wdw-railroad-x4',
        question: 'How many passengers can ride one whole train?',
        answer: 375,
        min: 50,
        max: 1000,
        step: 25,
        unit: 'riders',
        tolerance: 50,
        explain: '375 riders: five cars with 75 seats each.',
        source: RR,
      },
      // evidence: No. 4 Roy O. Disney "February 1916"; No. 1 Walter E. Disney "May 1925"; No. 2 Lilly Belle "September 1928"
      {
        type: 'order',
        id: 'wdw-railroad-x5',
        prompt: 'Put these steam engines in order from oldest to newest.',
        items: ['Roy O. Disney (1916)', 'Walter E. Disney (1925)', 'Lilly Belle (1928)'],
        explain: 'Roy O. Disney was built in 1916, Walter E. Disney in 1925 and Lilly Belle in 1928.',
        source: RR,
      },
      // evidence: "new diamond-shaped smokestacks and square-shaped headlamps"
      {
        type: 'trivia',
        id: 'wdw-railroad-x6',
        question: 'What shape are the engines’ smokestacks?',
        choices: ['Round', 'Star-shaped', 'Diamond-shaped', 'Heart-shaped'],
        answer: 2,
        explain: 'They got diamond-shaped smokestacks and square headlamps.',
        source: RR,
      },
      // evidence: "where live alligators and deer are occasionally spotted"
      {
        type: 'truefalse',
        id: 'wdw-railroad-x7',
        statement: 'Riders on the train sometimes spot real alligators.',
        answer: true,
        explain: 'Fact! Live alligators and deer are sometimes spotted along the route.',
        source: RR,
      },
      // evidence: "temporarily closed to accommodate construction of the TRON attraction in the Tomorrowland section"
      {
        type: 'trivia',
        id: 'wdw-railroad-x8',
        question: 'In 2018 the railroad closed for a while so a new ride could be built. Which one?',
        choices: ['Space Mountain', 'TRON Lightcycle / Run', 'Big Thunder Mountain', 'Peter Pan’s Flight'],
        answer: 1,
        explain: 'It closed for TRON construction and came back in 2022 with a new tunnel.',
        source: RR,
      },
      // evidence: "a tunnel through the Tiana's Bayou Adventure attraction in which its finale can be viewed"
      {
        type: 'trivia',
        id: 'wdw-railroad-x9',
        question: 'The train goes through a tunnel inside which ride, where you can peek at its finale?',
        choices: ['Haunted Mansion', 'Tiana’s Bayou Adventure', 'it’s a small world', 'Jungle Cruise'],
        answer: 1,
        explain: 'You can see the finale of Tiana’s Bayou Adventure from the train!',
        source: RR,
      },
      // evidence: "make the locomotives appear as if they were built in the 1880s"
      {
        type: 'truefalse',
        id: 'wdw-railroad-x10',
        statement: 'The engines were fixed up to look like they were built in the 1950s.',
        answer: false,
        explain: 'Fiction! They were made to look like trains from the 1880s.',
        source: RR,
      },
      // evidence: "where the railroad's water tower is used to refill the tender if needed"
      {
        type: 'trivia',
        id: 'wdw-railroad-x11',
        question: 'At which station is the water tower that refills the train?',
        choices: ['Main Street, U.S.A.', 'Frontierland', 'Fantasyland', 'Tomorrowland'],
        answer: 2,
        explain: 'The water tower is at Fantasyland Station.',
        source: RR,
      },
      // evidence: "A 3-foot (914 mm) narrow-gauge railway"
      {
        type: 'truefalse',
        id: 'wdw-railroad-x12',
        statement: 'The railroad is a narrow-gauge railway, with rails 3 feet apart.',
        answer: true,
        explain: 'Fact! It’s a 3-foot narrow-gauge railway.',
        source: RR,
      },
      // evidence: "the trains are halted due to the parade route crossing over the WDWRR tracks"
      {
        type: 'trivia',
        id: 'wdw-railroad-x13',
        question: 'Why do the trains sometimes stop and wait?',
        choices: ['To feed the ducks', 'A parade crosses the tracks', 'To wash the engine', 'For a nap'],
        answer: 1,
        explain: 'The parade route crosses the tracks, so trains pause during parades.',
        source: RR,
      },
      // evidence: "modeled after the former Victorian-style Saratoga Springs station"
      {
        type: 'spy',
        id: 'wdw-railroad-x14',
        prompt: 'Spot something on the station building that looks like it’s from the old Victorian days.',
        hint: 'Look at fancy trim, old lamps or decorations.',
      },
      {
        type: 'spy',
        id: 'wdw-railroad-x15',
        prompt: 'Find a clock or something that tells the time. Trains have to be on schedule!',
      },
      {
        type: 'spy',
        id: 'wdw-railroad-x16',
        prompt: 'Spot puffs of steam or smoke from a train. Count how many you see!',
        hint: 'Listen for the whistle first.',
      },
      {
        type: 'spy',
        id: 'wdw-railroad-x17',
        prompt: 'Find something round and something square nearby that could be part of a train.',
      },
      {
        type: 'challenge',
        id: 'wdw-railroad-x18',
        prompt: 'Make a human train! Everyone hold the shoulders of the person in front and chug in place.',
      },
      {
        type: 'challenge',
        id: 'wdw-railroad-x19',
        prompt: 'Be the train conductor: announce the next stop in your fanciest conductor voice.',
      },
      {
        type: 'challenge',
        id: 'wdw-railroad-x20',
        prompt:
          'Say “chugga chugga” slowly, then faster and faster, like a train speeding up. Then slow down to a stop!',
      },
      {
        type: 'challenge',
        id: 'wdw-railroad-x21',
        prompt: 'Name your own steam engine after someone in your group. Everyone explain why!',
      },
      {
        type: 'wyr',
        id: 'wdw-railroad-x22',
        a: 'Drive the steam engine',
        b: 'Ring the train bell all day',
      },
      {
        type: 'wyr',
        id: 'wdw-railroad-x23',
        a: 'Ride the train around the park forever',
        b: 'Be the conductor who shouts “All aboard!”',
      },
      {
        type: 'wyr',
        id: 'wdw-railroad-x24',
        a: 'Have a train whistle for a voice',
        b: 'Puff steam every time you laugh',
      },
      {
        type: 'wyr',
        id: 'wdw-railroad-x25',
        a: 'Spot a real alligator from the train',
        b: 'Spot a deer from the train',
      },
      {
        type: 'emoji',
        id: 'wdw-railroad-x26',
        emojis: '🚂 💨 🔔',
        hint: 'Chugga chugga, choo choo!',
        choices: ['Steam train', 'Monorail', 'Bus', 'Boat'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'wdw-railroad-x27',
        emojis: '🎟️ 🧢 📢',
        hint: 'This person shouts “All aboard!”',
        choices: ['Pilot', 'Conductor', 'Captain', 'Chef'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'wdw-railroad-x28',
        emojis: '🛤️ ⭕ 🏰',
        hint: 'The train goes all the way around the park on this.',
        choices: ['A river', 'A race track', 'A loop of track', 'A rainbow'],
        answer: 2,
      },
    ],
  },

  'cinderella-castle': {
    facts: [
      // evidence: "no bricks were used in its construction"
      { text: 'It looks like stone, but no bricks were used to build Cinderella Castle!', source: CASTLE },
      // evidence: "no gold is used on the exterior; all gold colors are anodized aluminum."
      { text: 'The shiny gold on the outside isn’t real gold. It’s a special kind of aluminum.', source: CASTLE },
      // evidence: "There are three elevators inside the castle."
      { text: 'There are three elevators hidden inside the castle.', source: CASTLE },
      // evidence: "The set-building trick of forced perspective makes the castle appear larger than it is."
      {
        text: 'A movie-set trick called forced perspective makes the castle look even bigger than it really is.',
        source: CASTLE,
      },
    ],
    quests: [
      // evidence: "Cinderella Castle was completed in July 1971, after about 18 months of construction."
      {
        type: 'trivia',
        id: 'cinderella-castle-x1',
        question: 'About how long did it take to build Cinderella Castle?',
        choices: ['1 month', '18 months', '10 years', '50 years'],
        answer: 1,
        explain: 'About 18 months. It was finished in July 1971.',
        source: CASTLE,
      },
      // evidence: "Contrary to a popular legend, the castle cannot be taken apart or moved in any way in the event of a hurricane."
      {
        type: 'truefalse',
        id: 'cinderella-castle-x2',
        statement: 'The castle can be taken apart and stored away when a hurricane is coming.',
        answer: false,
        explain: 'Fiction! That’s a popular legend. The castle can’t be moved, but it’s built to handle 125 mph winds.',
        source: CASTLE,
      },
      // evidence: "There are a total of 27 towers on the castle"
      {
        type: 'guess',
        id: 'cinderella-castle-x3',
        question: 'How many towers does Cinderella Castle have?',
        answer: 27,
        min: 1,
        max: 60,
        step: 1,
        unit: 'towers',
        tolerance: 3,
        explain: '27 towers! Try counting the ones you can see.',
        source: CASTLE,
      },
      // evidence: "the Týn Church in Prague, Czech Republic, built in the 14th century"
      {
        type: 'trivia',
        id: 'cinderella-castle-x4',
        question: 'A very old church helped inspire the castle. Which city is it in?',
        choices: ['Paris', 'Prague', 'London', 'Rome'],
        answer: 1,
        explain:
          'The Týn Church in Prague, Czech Republic, was one inspiration. Neuschwanstein Castle in Germany was another.',
        source: CASTLE,
      },
      // evidence: "contain just over 300,000 pieces of Italian glass"
      {
        type: 'guess',
        id: 'cinderella-castle-x5',
        question: 'About how many pieces of glass are in the castle’s mosaic murals?',
        answer: 300000,
        min: 1000,
        max: 1000000,
        step: 10000,
        unit: 'pieces',
        tolerance: 50000,
        explain: 'Just over 300,000 pieces of Italian glass!',
        source: CASTLE,
      },
      // evidence: "a series of five mosaic murals tells the story of"
      {
        type: 'trivia',
        id: 'cinderella-castle-x6',
        question: 'How many mosaic murals tell Cinderella’s story inside the archway?',
        choices: ['2', '5', '10', '20'],
        answer: 1,
        explain: 'Five mosaic murals tell the story.',
        source: CASTLE,
      },
      // evidence: "Cinderella Castle is more than 100 feet (30 m) taller than Sleeping Beauty Castle at Disneyland"
      {
        type: 'truefalse',
        id: 'cinderella-castle-x7',
        statement: 'Cinderella Castle is more than 100 feet taller than Sleeping Beauty Castle at Disneyland.',
        answer: true,
        explain: 'Fact! It’s much taller than the California castle.',
        source: CASTLE,
      },
      // evidence: "The murals took 22 months to complete"
      {
        type: 'guess',
        id: 'cinderella-castle-x8',
        question: 'How many months did it take to make the mosaic murals?',
        answer: 22,
        min: 1,
        max: 60,
        step: 1,
        unit: 'months',
        tolerance: 3,
        explain: '22 months! Even longer than building the castle itself.',
        source: CASTLE,
      },
      // evidence: "26 glowing candles"
      {
        type: 'trivia',
        id: 'cinderella-castle-x9',
        question:
          'For Walt Disney World’s 25th anniversary, the castle became a giant birthday cake. How many candles did it have?',
        choices: ['10', '25', '26', '100'],
        answer: 2,
        explain: '26 glowing candles, and more than 400 gallons of pink paint!',
        source: CASTLE,
      },
      // evidence: "two mice named Jaq and Gus"
      {
        type: 'trivia',
        id: 'cinderella-castle-x10',
        question: 'In the movie Cinderella, what are the names of her two mouse friends?',
        choices: ['Chip and Dale', 'Jaq and Gus', 'Timon and Pumbaa', 'Mickey and Minnie'],
        answer: 1,
        explain: 'Jaq and Gus help Cinderella all through the movie.',
        source: CINDY,
      },
      // evidence: "Lucifer, Lady Tremaine's cat who messes up Cinderella's work"
      {
        type: 'trivia',
        id: 'cinderella-castle-x11',
        question: 'What kind of animal is Lucifer?',
        choices: ['A dog', 'A cat', 'A horse', 'A bird'],
        answer: 1,
        explain: 'Lucifer is Lady Tremaine’s grumpy cat.',
        source: CINDY,
      },
      // evidence: "She transforms a pumpkin into a carriage" / "losing one of her glass slippers on the staircase" / "Jaq and Gus steal the key back" / "which the Grand Duke places on her foot"
      {
        type: 'order',
        id: 'cinderella-castle-x12',
        prompt: 'Put these Cinderella moments in story order.',
        items: [
          'A pumpkin becomes a carriage',
          'Cinderella loses a glass slipper',
          'Jaq and Gus bring her the key',
          'The Grand Duke puts the slipper on her foot',
        ],
        explain: 'Magic, the ball, a lost slipper, a rescue by the mice, and a perfect fit!',
        source: CINDY,
      },
      // evidence: "her bloodhound Bruno into a footman"
      {
        type: 'truefalse',
        id: 'cinderella-castle-x13',
        statement: 'The Fairy Godmother turns Bruno the dog into a footman.',
        answer: true,
        explain: 'Fact! Bruno the bloodhound becomes a footman for the night.',
        source: CINDY,
      },
      // evidence: "Drizella and Anastasia Tremaine, Lady Tremaine's spoiled and awkward daughters"
      {
        type: 'trivia',
        id: 'cinderella-castle-x14',
        question: 'What are the stepsisters’ names?',
        choices: ['Elsa and Anna', 'Drizella and Anastasia', 'Flora and Fauna', 'Belle and Ariel'],
        answer: 1,
        explain: 'Drizella and Anastasia are Lady Tremaine’s daughters.',
        source: CINDY,
      },
      {
        type: 'spy',
        id: 'cinderella-castle-x15',
        prompt: 'Count how many towers you can see from where you are standing.',
        hint: 'There are 27 in all, but you won’t see every one at once!',
      },
      {
        type: 'spy',
        id: 'cinderella-castle-x16',
        prompt: 'Spot something gold or shiny on the castle.',
      },
      {
        type: 'spy',
        id: 'cinderella-castle-x17',
        prompt: 'Find something nearby that’s blue, like Cinderella’s ball gown.',
      },
      {
        type: 'spy',
        id: 'cinderella-castle-x18',
        prompt: 'Find a window high up on the castle. Who do you think lives there?',
      },
      {
        type: 'challenge',
        id: 'cinderella-castle-x19',
        prompt: 'Everyone sing “Bibbidi-Bobbidi-Boo” together and wave a pretend magic wand.',
      },
      {
        type: 'challenge',
        id: 'cinderella-castle-x20',
        prompt: 'Count down to midnight like the castle clock: 12 bongs, then everyone freeze!',
      },
      {
        type: 'challenge',
        id: 'cinderella-castle-x21',
        prompt: 'Take turns doing your best royal bow or curtsy. Everyone else cheers like a royal crowd.',
      },
      {
        type: 'challenge',
        id: 'cinderella-castle-x22',
        prompt: 'Be Jaq and Gus! Everyone speak in a squeaky mouse voice for one minute.',
      },
      {
        type: 'wyr',
        id: 'cinderella-castle-x23',
        a: 'Ride in a pumpkin carriage',
        b: 'Wear glass slippers all day',
      },
      {
        type: 'wyr',
        id: 'cinderella-castle-x24',
        a: 'Have a Fairy Godmother',
        b: 'Have mouse friends who help with chores',
      },
      {
        type: 'wyr',
        id: 'cinderella-castle-x25',
        a: 'Dance at the royal ball',
        b: 'Eat a feast in the castle',
      },
      {
        type: 'wyr',
        id: 'cinderella-castle-x26',
        a: 'Have your magic end at midnight',
        b: 'Have your magic last only one hour, any time you pick',
      },
      {
        type: 'emoji',
        id: 'cinderella-castle-x27',
        emojis: '🐭 🐭 🧀',
        hint: 'Cinderella’s tiny best friends.',
        choices: ['Jaq and Gus', 'Chip and Dale', 'Remy and Emile', 'Timon and Pumbaa'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'cinderella-castle-x28',
        emojis: '🧚 🪄 ✨',
        hint: 'Bibbidi-Bobbidi-Boo!',
        choices: ['Tinker Bell', 'Fairy Godmother', 'Blue Fairy', 'Merlin'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'cinderella-castle-x29',
        emojis: '🐈‍⬛ 😼',
        hint: 'A sneaky cat who chases the mice.',
        choices: ['Figaro', 'Lucifer', 'Cheshire Cat', 'Dinah'],
        answer: 1,
      },
    ],
  },

  'big-thunder': {
    facts: [
      // evidence: "led by Imagineer Tony Baxter"
      { text: 'Imagineer Tony Baxter led the team that created Big Thunder Mountain Railroad.', source: BT },
      // evidence: "the rockwork designs are based on the rising buttes"
      {
        text: 'In Florida, the rocks are based on the tall buttes of Arizona and Monument Valley, Utah.',
        source: BT,
      },
      // evidence: "The track layout of the Magic Kingdom's version is nearly an identical mirrored layout of the Disneyland attraction."
      { text: 'Florida’s track is almost a mirror image of the Disneyland version’s track.', source: BT },
      // evidence: "includes a refreshed Rainbow Caverns, new audio-animatronics and gold props"
      {
        text: 'A big makeover added a refreshed Rainbow Caverns, new Audio-Animatronics and gold props.',
        source: BT,
      },
    ],
    quests: [
      // evidence: "Tumbleweed in Magic Kingdom"
      {
        type: 'trivia',
        id: 'big-thunder-x1',
        question: 'What is the name of the mining town in Florida’s Big Thunder Mountain?',
        choices: ['Rainbow Ridge', 'Tumbleweed', 'Thunder Mesa', 'Dusty Gulch'],
        answer: 1,
        explain: 'Tumbleweed! Disneyland’s town is Rainbow Ridge, and Paris has Thunder Mesa.',
        source: BT,
      },
      // evidence: "or a flash flood (Magic Kingdom)"
      {
        type: 'trivia',
        id: 'big-thunder-x2',
        question: 'What happened to the town of Tumbleweed?',
        choices: ['A snowstorm', 'A flash flood', 'A volcano', 'A tornado'],
        answer: 1,
        explain: 'Your train rolls through the flooded town of Tumbleweed.',
        source: BT,
      },
      // evidence: "Opening date: November 15, 1980"
      {
        type: 'guess',
        id: 'big-thunder-x3',
        question: 'In what year did Big Thunder Mountain open at Magic Kingdom?',
        answer: 1980,
        min: 1950,
        max: 2020,
        step: 1,
        unit: '',
        tolerance: 3,
        explain: 'It opened on November 15, 1980.',
        source: BT,
      },
      // evidence: "climb the third lift hill"
      {
        type: 'trivia',
        id: 'big-thunder-x4',
        question: 'How many lift hills does your train climb?',
        choices: ['1', '2', '3', '10'],
        answer: 2,
        explain: 'Three lift hills. Clickety-clack!',
        source: BT,
      },
      // evidence: "through the ribcage of a" [T. rex skeleton]
      {
        type: 'truefalse',
        id: 'big-thunder-x5',
        statement: 'The train passes right through the ribcage of a dinosaur skeleton.',
        answer: true,
        explain: 'Fact! Watch for the giant dinosaur bones.',
        source: BT,
      },
      // evidence: "through a cavern lit up by several rainbow colored pools of water"
      {
        type: 'truefalse',
        id: 'big-thunder-x6',
        statement: 'On the first lift hill, the train climbs through a cave with rainbow-colored pools.',
        answer: true,
        explain: 'Fact! It’s called Rainbow Caverns.',
        source: BT,
      },
      // evidence: the pools turn red as trains crest the first lift, "accompanied by a low rumble"
      {
        type: 'trivia',
        id: 'big-thunder-x7',
        question: 'At the top of the first lift, the rainbow pools change to what color?',
        choices: ['Green', 'Red', 'Purple', 'Gold'],
        answer: 1,
        explain: 'They turn red, with a low rumble. Uh oh!',
        source: BT,
      },
      // evidence: "It first opened at Disneyland in 1979" / "November 15, 1980" / "In January 2025 ... temporarily closed" / "on May 3, 2026"
      {
        type: 'order',
        id: 'big-thunder-x8',
        prompt: 'Put these Big Thunder moments in order, oldest first.',
        items: [
          'First version opens at Disneyland (1979)',
          'Magic Kingdom version opens (1980)',
          'Closes for a big makeover (2025)',
          'Reopens with new effects (2026)',
        ],
        explain: 'Disneyland got it first in 1979, Florida in 1980, and Florida’s got a big refresh in 2025 to 2026.',
        source: BT,
      },
      // evidence: "several veins of gold that illuminate the tunnel"
      {
        type: 'trivia',
        id: 'big-thunder-x9',
        question: 'On the third lift hill, what glows in the tunnel?',
        choices: ['Diamonds', 'Veins of gold', 'Glow worms', 'Lanterns'],
        answer: 1,
        explain: 'Veins of gold light up the tunnel. Gold rush!',
        source: BT,
      },
      // evidence: "The concept came from Baxter's work on fellow Imagineer Marc Davis's concept for the Western River Expedition"
      {
        type: 'trivia',
        id: 'big-thunder-x10',
        question: 'Big Thunder’s idea grew out of plans for which never-built ride?',
        choices: ['Western River Expedition', 'Space Pirates', 'Dino Land', 'Gold Coast Express'],
        answer: 0,
        explain: 'It came from Marc Davis’s idea for the Western River Expedition.',
        source: BT,
      },
      {
        type: 'spy',
        id: 'big-thunder-x11',
        prompt: 'Spot something in line that a gold miner might use.',
        hint: 'Think picks, shovels, carts or lanterns.',
      },
      {
        type: 'spy',
        id: 'big-thunder-x12',
        prompt: 'Find a red rock that looks like an animal or a face.',
      },
      {
        type: 'spy',
        id: 'big-thunder-x13',
        prompt: 'Spot a wooden barrel, crate or box. What do you think is inside?',
      },
      {
        type: 'spy',
        id: 'big-thunder-x14',
        prompt: 'Listen and look for a runaway train zooming by. Wave if you see one!',
      },
      {
        type: 'challenge',
        id: 'big-thunder-x15',
        prompt: 'Everyone do your best “Yee-haw!” Who has the loudest cowboy call?',
      },
      {
        type: 'challenge',
        id: 'big-thunder-x16',
        prompt: 'Pretend to pan for gold. Shake your pan, then shout “Eureka!” when you find a nugget.',
      },
      {
        type: 'challenge',
        id: 'big-thunder-x17',
        prompt: 'Do the train sounds for the lift hill: click, click, click, then everyone go “Whoooosh!”',
      },
      {
        type: 'challenge',
        id: 'big-thunder-x18',
        prompt: 'Lean left, then right, then hold on to your hat, like you’re on the wildest ride in the wilderness!',
      },
      {
        type: 'wyr',
        id: 'big-thunder-x19',
        a: 'Find a giant gold nugget',
        b: 'Find a real dinosaur bone',
      },
      {
        type: 'wyr',
        id: 'big-thunder-x20',
        a: 'Live in a mining town in the Old West',
        b: 'Drive a runaway mine train',
      },
      {
        type: 'wyr',
        id: 'big-thunder-x21',
        a: 'Ride a horse through the desert',
        b: 'Ride a train through a mountain',
      },
      {
        type: 'wyr',
        id: 'big-thunder-x22',
        a: 'Sit in the very front of the train',
        b: 'Sit in the very back of the train',
      },
      {
        type: 'emoji',
        id: 'big-thunder-x23',
        emojis: '⛏️ 🪙 ✨',
        hint: 'Miners dug for this shiny treasure.',
        choices: ['Gold', 'Candy', 'Pizza', 'Seashells'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'big-thunder-x24',
        emojis: '🌈 🕳️ 💧',
        hint: 'A colorful cave on the first lift hill.',
        choices: ['Rainbow Caverns', 'Skull Rock', 'Cave of Wonders', 'Splash Pool'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'big-thunder-x25',
        emojis: '🦖 🦴',
        hint: 'You ride right through its ribs!',
        choices: ['A dinosaur skeleton', 'A whale', 'A dragon', 'A snowman'],
        answer: 0,
      },
    ],
  },

  'tianas-bayou': {
    facts: [
      // evidence: "The attraction is set a year after the events of The Princess and the Frog."
      { text: 'The ride’s story happens one year after the movie The Princess and the Frog.', source: TIANA },
      // evidence: "employee-owned food cooperative called Tiana's Foods"
      { text: 'Tiana now runs Tiana’s Foods, a food company owned by the people who work there.', source: TIANA },
      // evidence: "the original song written for the attraction, was made available on streaming music platforms on May 31, 2024."
      { text: 'The ride has its own brand-new song, “Special Spice.”', source: TIANA },
      // evidence: "At Magic Kingdom, passengers are seated side-by-side"
      { text: 'At Magic Kingdom, riders sit side-by-side in the log.', source: TIANA },
    ],
    quests: [
      // evidence: "her celebration is missing a band and she needs the guests' help to find one"
      {
        type: 'trivia',
        id: 'tianas-bayou-x1',
        question: 'What is Tiana’s big party missing?',
        choices: ['A cake', 'A band', 'Balloons', 'A dance floor'],
        answer: 1,
        explain: 'It needs a band, and you help find one in the bayou!',
        source: TIANA,
      },
      // evidence: "keeps Juju from trying to steal her beignets"
      {
        type: 'trivia',
        id: 'tianas-bayou-x2',
        question: 'Mama Odie’s snake Juju tries to steal her what?',
        choices: ['Hat', 'Beignets', 'Gumbo', 'Glasses'],
        answer: 1,
        explain: 'Beignets! Those yummy New Orleans doughnuts.',
        source: TIANA,
      },
      // evidence: "The attraction is set a year after the events of The Princess and the Frog."
      {
        type: 'truefalse',
        id: 'tianas-bayou-x3',
        statement: 'The ride takes place ten years after the movie.',
        answer: false,
        explain: 'Fiction! It’s set just one year after the movie.',
        source: TIANA,
      },
      // evidence: "the original song written for the attraction"
      {
        type: 'trivia',
        id: 'tianas-bayou-x4',
        question: 'What is the name of the new song written for this ride?',
        choices: ['“Almost There”', '“Special Spice”', '“Zip-a-Dee-Doo-Dah”', '“Gumbo Groove”'],
        answer: 1,
        explain: '“Special Spice” was written just for Tiana’s Bayou Adventure.',
        source: TIANA,
      },
      // evidence: "reaching a maximum speed of 40 mph"
      {
        type: 'guess',
        id: 'tianas-bayou-x5',
        question: 'What is the top speed of your log on the ride?',
        answer: 40,
        min: 5,
        max: 100,
        step: 5,
        unit: 'mph',
        tolerance: 5,
        explain: 'Up to 40 mph. Whoosh!',
        source: TIANA,
      },
      // evidence: "Louis can be seen in some stalks searching for musicians"
      {
        type: 'truefalse',
        id: 'tianas-bayou-x6',
        statement: 'On the ride, Louis the alligator helps search for musicians.',
        answer: true,
        explain: 'Fact! Look for Louis peeking out of the stalks.',
        source: TIANA,
      },
      // evidence: Louis "dream is to play his trumpet in a jazz band"
      {
        type: 'trivia',
        id: 'tianas-bayou-x7',
        question: 'In the movie, what instrument does Louis the alligator dream of playing in a jazz band?',
        choices: ['Drums', 'Trumpet', 'Violin', 'Tuba'],
        answer: 1,
        explain: 'Louis loves his trumpet!',
        source: PATF,
      },
      // evidence: Ray's love is "an Evening Star in the sky" named Evangeline
      {
        type: 'trivia',
        id: 'tianas-bayou-x8',
        question: 'Ray the firefly is in love with Evangeline. What is she really?',
        choices: ['A firefly', 'A star in the sky', 'A frog', 'A flower'],
        answer: 1,
        explain: 'Evangeline is the Evening Star.',
        source: PATF,
      },
      // evidence: "Set in New Orleans during the 1920s."
      {
        type: 'trivia',
        id: 'tianas-bayou-x9',
        question: 'Which city is The Princess and the Frog set in?',
        choices: ['Paris', 'New Orleans', 'New York', 'Chicago'],
        answer: 1,
        explain: 'New Orleans, in the 1920s.',
        source: PATF,
      },
      // evidence: She "dreams of opening her own restaurant."
      {
        type: 'trivia',
        id: 'tianas-bayou-x10',
        question: 'What is Tiana’s big dream in the movie?',
        choices: ['Becoming a singer', 'Opening her own restaurant', 'Sailing the world', 'Becoming a queen'],
        answer: 1,
        explain: 'She works hard to open her own restaurant.',
        source: PATF,
      },
      // evidence: "blind, 197-year-old voodoo priestess"
      {
        type: 'guess',
        id: 'tianas-bayou-x11',
        question: 'In the movie, how old is Mama Odie?',
        answer: 197,
        min: 50,
        max: 500,
        step: 1,
        unit: 'years',
        tolerance: 15,
        explain: 'Mama Odie is 197 years old!',
        source: PATF,
      },
      // evidence: Tiana "became the first African American Disney princess."
      {
        type: 'truefalse',
        id: 'tianas-bayou-x12',
        statement: 'Tiana was the first African American Disney princess.',
        answer: true,
        explain: 'Fact! The movie came out in 2009.',
        source: PATF,
      },
      // evidence: "Dig a Little Deeper" (a song for Mama Odie)
      {
        type: 'trivia',
        id: 'tianas-bayou-x13',
        question: 'Which song does Mama Odie sing in the movie?',
        choices: ['“Almost There”', '“Dig a Little Deeper”', '“Let It Go”', '“Under the Sea”'],
        answer: 1,
        explain: '“Dig a Little Deeper.” Tiana sings “Almost There.”',
        source: PATF,
      },
      // evidence: "Disney announced that the new ride would be called Tiana's Bayou Adventure" (July 2022) / "would close on January 23, 2023" / "opened on June 28, 2024 at Magic Kingdom"
      {
        type: 'order',
        id: 'tianas-bayou-x14',
        prompt: 'Put these in order, first to last.',
        items: [
          'The ride’s name is announced (2022)',
          'Splash Mountain closes (2023)',
          'Tiana’s Bayou Adventure opens (2024)',
        ],
        explain: 'Named in July 2022, Splash Mountain closed in January 2023, and Tiana’s opened June 28, 2024.',
        source: TIANA,
      },
      {
        type: 'spy',
        id: 'tianas-bayou-x15',
        prompt: 'Spot something in line that looks like it belongs in Tiana’s kitchen.',
        hint: 'Pots, spices, jars or food boxes!',
      },
      {
        type: 'spy',
        id: 'tianas-bayou-x16',
        prompt: 'Find something green, like a frog or a lily pad.',
      },
      {
        type: 'spy',
        id: 'tianas-bayou-x17',
        prompt: 'Look for a musical instrument, or a picture of one. The party needs a band!',
      },
      {
        type: 'spy',
        id: 'tianas-bayou-x18',
        prompt: 'Spot something that glows or twinkles, like Ray the firefly.',
      },
      {
        type: 'challenge',
        id: 'tianas-bayou-x19',
        prompt: 'Form a pretend jazz band! Everyone picks an instrument and plays it with your voice.',
      },
      {
        type: 'challenge',
        id: 'tianas-bayou-x20',
        prompt: 'Everyone croak like a frog. Then try to croak a song everyone knows!',
      },
      {
        type: 'challenge',
        id: 'tianas-bayou-x21',
        prompt: 'Invent a new gumbo recipe. Each person adds one silly ingredient.',
      },
      {
        type: 'challenge',
        id: 'tianas-bayou-x22',
        prompt: 'Do a little Mardi Gras parade dance in place. Wave your hands like you’re catching beads!',
      },
      {
        type: 'wyr',
        id: 'tianas-bayou-x23',
        a: 'Play trumpet with Louis',
        b: 'Glow like Ray the firefly',
      },
      {
        type: 'wyr',
        id: 'tianas-bayou-x24',
        a: 'Eat a plate of beignets',
        b: 'Eat a big bowl of gumbo',
      },
      {
        type: 'wyr',
        id: 'tianas-bayou-x25',
        a: 'Have a pet snake like Juju',
        b: 'Have a pet alligator like Louis',
      },
      {
        type: 'wyr',
        id: 'tianas-bayou-x26',
        a: 'Own your own restaurant like Tiana',
        b: 'Lead a band at a big party',
      },
      {
        type: 'emoji',
        id: 'tianas-bayou-x27',
        emojis: '🐊 🎺',
        hint: 'He dreams of playing jazz.',
        choices: ['Louis', 'Tick-Tock', 'Ray', 'Naveen'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'tianas-bayou-x28',
        emojis: '🪲 ✨ ⭐',
        hint: 'A firefly in love with a star.',
        choices: ['Ray', 'Jiminy Cricket', 'Flik', 'Heimlich'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'tianas-bayou-x29',
        emojis: '👸 🐸 💋',
        hint: 'A movie set in New Orleans.',
        choices: ['The Little Mermaid', 'The Princess and the Frog', 'Frozen', 'Moana'],
        answer: 1,
      },
    ],
  },

  'country-bears': {
    facts: [
      // evidence: "originally intended by Walt Disney to be placed at Disney's Mineral King Ski Resort"
      {
        text: 'Walt Disney first planned the bear show for Mineral King, a ski resort in California that was never built.',
        source: BEARS,
      },
      // evidence: "who founded Grizzly Hall, the venue the bears perform at in Florida"
      { text: 'The bears perform in Grizzly Hall, founded by Henry’s grandfather, Ursus H. Bear.', source: BEARS },
      // evidence: "Audio-animatronics: 24 (Magic Kingdom)"
      { text: 'The Magic Kingdom show has 24 Audio-Animatronics figures.', source: BEARS },
      // evidence: "The project was assigned to imagineer Marc Davis."
      { text: 'Imagineer Marc Davis designed the bears, with help from Al Bertino.', source: BEARS },
    ],
    quests: [
      // evidence: "Gomer is a bear who never sings but instead plays his piano"
      {
        type: 'trivia',
        id: 'country-bears-x1',
        question: 'Which bear never sings, but plays the piano?',
        choices: ['Gomer', 'Henry', 'Wendell', 'Big Al'],
        answer: 0,
        explain: 'Gomer plays a piano with a honeycomb on top.',
        source: BEARS,
      },
      // evidence: "Wendell is a hyperactive golden brown bear who plays the mandolin."
      {
        type: 'trivia',
        id: 'country-bears-x2',
        question: 'What instrument does Wendell play?',
        choices: ['Drums', 'Mandolin', 'Tuba', 'Harmonica'],
        answer: 1,
        explain: 'Wendell plays the mandolin.',
        source: BEARS,
      },
      // evidence: "Trixie is a very large brown bear who wears a blue bow on her head"
      {
        type: 'trivia',
        id: 'country-bears-x3',
        question: 'What does Trixie wear on her head?',
        choices: ['A cowboy hat', 'A blue bow', 'A crown', 'Flowers'],
        answer: 1,
        explain: 'Trixie wears a big blue bow.',
        source: BEARS,
      },
      // evidence: "Ernest always takes his entire 17-trunk wardrobe everywhere he goes."
      {
        type: 'guess',
        id: 'country-bears-x4',
        question: 'Ernest the Dude brings his whole wardrobe everywhere. How many trunks is that?',
        answer: 17,
        min: 1,
        max: 50,
        step: 1,
        unit: 'trunks',
        tolerance: 2,
        explain: '17 trunks of fancy clothes!',
        source: BEARS,
      },
      // evidence: "Because she and her sisters are triplets, they all have brown fur"
      {
        type: 'truefalse',
        id: 'country-bears-x5',
        statement: 'Bunny, Bubbles and Beulah, the Sun Bonnets, are triplets.',
        answer: true,
        explain: 'Fact! The three sisters are triplets.',
        source: BEARS,
      },
      // evidence: "Romeo McGrowl, formerly Liver Lips McGrowl"
      {
        type: 'trivia',
        id: 'country-bears-x6',
        question: 'In the new show, Liver Lips McGrowl has a new name. What is it?',
        choices: ['Romeo McGrowl', 'Elvis McGrowl', 'Rocky McGrowl', 'Buddy McGrowl'],
        answer: 0,
        explain: 'He’s now Romeo McGrowl, and he plays guitar.',
        source: BEARS,
      },
      // evidence: "the three trophy heads of Max, Buff and Melvin hung on the right side of the theater"
      {
        type: 'trivia',
        id: 'country-bears-x7',
        question: 'Three talking trophy heads hang on the wall. Which names are theirs?',
        choices: ['Max, Buff and Melvin', 'Huey, Dewey and Louie', 'Larry, Moe and Curly', 'Tom, Dick and Harry'],
        answer: 0,
        explain: 'Max, Buff and Melvin hang on the right side of the theater.',
        source: BEARS,
      },
      // evidence: classic Disney songs in country styles, including "The Bare Necessities"
      {
        type: 'trivia',
        id: 'country-bears-x8',
        question: 'The new show plays Disney songs country-style. Which bear-y song is one of them?',
        choices: ['“The Bare Necessities”', '“Let It Go”', '“Under the Sea”', '“Be Our Guest”'],
        answer: 0,
        explain: '“The Bare Necessities” from The Jungle Book, played country-style!',
        source: BEARS,
      },
      // evidence: "On October 1, 1971, The Country Bear Jamboree opened" / "On September 9, 2023, it was announced" / "January 27, 2024 (Original)" / "It officially opened on July 17, 2024."
      {
        type: 'order',
        id: 'country-bears-x9',
        prompt: 'Put these bear moments in order, oldest first.',
        items: [
          'The original show opens (1971)',
          'A new version is announced (2023)',
          'The original show closes (January 2024)',
          'The Musical Jamboree opens (July 2024)',
        ],
        explain: 'The bears played from 1971 to 2024, then came back with a new show that July.',
        source: BEARS,
      },
      // evidence: "Gomer is a bear who never sings"
      {
        type: 'truefalse',
        id: 'country-bears-x10',
        statement: 'Gomer sings the loudest of all the bears.',
        answer: false,
        explain: 'Fiction! Gomer never sings. He just plays piano.',
        source: BEARS,
      },
      // evidence: "plays a banjo and taps on the dishpan"
      {
        type: 'trivia',
        id: 'country-bears-x11',
        question: 'Zeke from the Five Bear Rugs plays a banjo and taps on what?',
        choices: ['A dishpan', 'A trash can', 'A cowbell', 'A teapot'],
        answer: 0,
        explain: 'Zeke plays banjo and taps on a dishpan.',
        source: BEARS,
      },
      // evidence: "originally intended by Walt Disney to be placed at Disney's Mineral King Ski Resort"
      {
        type: 'truefalse',
        id: 'country-bears-x12',
        statement: 'The bears were first planned for a ski resort.',
        answer: true,
        explain: 'Fact! Walt Disney planned them for Mineral King, a ski resort that was never built.',
        source: BEARS,
      },
      {
        type: 'spy',
        id: 'country-bears-x13',
        prompt: 'Spot something that looks like it came from an old country music hall.',
        hint: 'Think instruments, old posters or wooden signs.',
      },
      {
        type: 'spy',
        id: 'country-bears-x14',
        prompt: 'Find something shaped like, or made to look like, a bear.',
      },
      {
        type: 'spy',
        id: 'country-bears-x15',
        prompt: 'Look for something made of wood. Bears love the woods!',
      },
      {
        type: 'spy',
        id: 'country-bears-x16',
        prompt: 'Spot something sweet a bear would love, like honey or a beehive picture.',
      },
      {
        type: 'challenge',
        id: 'country-bears-x17',
        prompt: 'Everyone give a big bear growl, then a tiny cub growl!',
      },
      {
        type: 'challenge',
        id: 'country-bears-x18',
        prompt: 'Play “air banjo” together and hum a country tune for 10 seconds.',
      },
      {
        type: 'challenge',
        id: 'country-bears-x19',
        prompt: 'Give everyone in your group a Country Bear stage name, like “Jumpin’ Jo.”',
      },
      {
        type: 'challenge',
        id: 'country-bears-x20',
        prompt: 'Clap and stomp a rhythm together. Can you keep the beat for 20 seconds?',
      },
      {
        type: 'wyr',
        id: 'country-bears-x21',
        a: 'Swing down from the ceiling like Teddi Barra',
        b: 'Hang on the wall and tell jokes like Max, Buff and Melvin',
      },
      {
        type: 'wyr',
        id: 'country-bears-x22',
        a: 'Play piano like Gomer',
        b: 'Play mandolin like Wendell',
      },
      {
        type: 'wyr',
        id: 'country-bears-x23',
        a: 'Bring 17 trunks of clothes on every trip',
        b: 'Wear the same outfit every day',
      },
      {
        type: 'wyr',
        id: 'country-bears-x24',
        a: 'Sing in a bear band',
        b: 'Dance in the front row',
      },
      {
        type: 'emoji',
        id: 'country-bears-x25',
        emojis: '🐻 🎸 🎩',
        hint: 'The host of the show.',
        choices: ['Henry', 'Baloo', 'Winnie the Pooh', 'Little John'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'country-bears-x26',
        emojis: '🐻 🎹 🍯',
        hint: 'He never sings a note.',
        choices: ['Gomer', 'Big Al', 'Wendell', 'Zeke'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'country-bears-x27',
        emojis: '🐻 🎀 💙',
        hint: 'A big bear with a bow.',
        choices: ['Trixie', 'Teddi Barra', 'Bunny', 'Beulah'],
        answer: 0,
      },
    ],
  },

  'haunted-mansion': {
    facts: [
      // evidence: "Unlike its Disneyland counterpart, the stretching rooms are not elevators and instead have the ceilings rise."
      { text: 'In Florida, the Stretching Room isn’t an elevator. The ceiling rises up instead!', source: HM },
      // evidence: "Paul Frees recorded additional voice-overs, including dialogue the \"Ghost Host\""
      { text: 'Paul Frees is the voice of the Ghost Host who guides you through the Mansion.', source: HM },
      // evidence: "Davis and Coats, two of the Mansion's main designers"
      { text: 'Marc Davis and Claude Coats were two of the Mansion’s main designers.', source: HM },
      // evidence: "Little Leota appears above the vehicles as guests disembark"
      { text: 'Little Leota waves goodbye from above as you climb out of your Doom Buggy.', source: HM },
    ],
    quests: [
      // evidence: "the stretching rooms are not elevators and instead have the ceilings rise"
      {
        type: 'truefalse',
        id: 'haunted-mansion-x1',
        statement: 'Florida’s Stretching Room is secretly an elevator.',
        answer: false,
        explain: 'Fiction! That’s Disneyland’s. In Florida the ceiling rises.',
        source: HM,
      },
      // evidence: "the guests go through the library where busts of ghost writers stare and follow them"
      {
        type: 'trivia',
        id: 'haunted-mansion-x2',
        question: 'In the library, whose statue busts seem to follow you with their eyes?',
        choices: ['Ghost writers', 'Ghost kings', 'Ghost pirates', 'Ghost chefs'],
        answer: 0,
        explain: 'Busts of ghost writers watch you go by. Get it? Ghost writers!',
        source: HM,
      },
      // evidence: "Madame Leota is seen floating and reciting her spell as instruments play"
      {
        type: 'trivia',
        id: 'haunted-mansion-x3',
        question: 'Who floats in the séance room reciting a spell while instruments play?',
        choices: ['Madame Leota', 'The Hatbox Ghost', 'Constance', 'The Ghost Host'],
        answer: 0,
        explain: 'Madame Leota calls the spirits with her spell.',
        source: HM,
      },
      // evidence: "the vehicles pass a group of three ghosts"
      {
        type: 'trivia',
        id: 'haunted-mansion-x4',
        question: 'How many hitchhiking ghosts are waiting near the end of the ride?',
        choices: ['1', '3', '5', '999'],
        answer: 1,
        explain: 'Three hitchhiking ghosts. Watch your Doom Buggy!',
        source: HM,
      },
      // evidence: "gleefully recites twisted wedding vows" (Constance Hatchaway)
      {
        type: 'trivia',
        id: 'haunted-mansion-x5',
        question: 'What is the name of the bride in the attic?',
        choices: ['Constance Hatchaway', 'Prudence Pock', 'Madame Leota', 'Emily Grim'],
        answer: 0,
        explain: 'Constance Hatchaway recites her wedding vows in the attic.',
        source: HM,
      },
      // evidence: "a murder mystery for guests to solve featuring the sinister Dread Family"
      {
        type: 'trivia',
        id: 'haunted-mansion-x6',
        question: 'Which ghostly family is part of a mystery in the queue?',
        choices: ['The Dread Family', 'The Gloom Family', 'The Spooks', 'The Addams Family'],
        answer: 0,
        explain: 'The Dread Family has a mystery for guests to solve.',
        source: HM,
      },
      // evidence: "a crypt for Prudence Pock the poetess"
      {
        type: 'trivia',
        id: 'haunted-mansion-x7',
        question: 'In the queue, Prudence Pock has a crypt. What was her job?',
        choices: ['Poetess', 'Pirate', 'Baker', 'Painter'],
        answer: 0,
        explain: 'Prudence Pock was a poetess, a writer of poems.',
        source: HM,
      },
      // evidence: "Throughout the scene, a quintet of busts sing"
      {
        type: 'guess',
        id: 'haunted-mansion-x8',
        question: 'How many singing busts perform in the graveyard scene?',
        answer: 5,
        min: 1,
        max: 20,
        step: 1,
        unit: 'busts',
        tolerance: 1,
        explain: 'A quintet: five singing busts!',
        source: HM,
      },
      // evidence: "was composed by Buddy Baker with lyrics by Atencio"
      {
        type: 'truefalse',
        id: 'haunted-mansion-x9',
        statement: 'The Mansion’s theme song was composed by Buddy Baker, with words by X Atencio.',
        answer: true,
        explain: 'Fact! Buddy Baker wrote the music and X Atencio wrote the lyrics.',
        source: HM,
      },
      // evidence: "The Mansion opened to all guests on August 12, 1969." / "Opening date: October 1, 1971" / "a new \"interactive queue\" debuted at the Walt Disney World location" (2011)
      {
        type: 'order',
        id: 'haunted-mansion-x10',
        prompt: 'Put these Mansion moments in order, oldest first.',
        items: [
          'Disneyland’s Mansion opens (1969)',
          'Florida’s Mansion opens (1971)',
          'Florida’s interactive queue arrives (2011)',
        ],
        explain: 'Disneyland in 1969, Florida in 1971, and the interactive queue in 2011.',
        source: HM,
      },
      // evidence: "This Ballroom Scene is the most famous and elaborate use of the" [Pepper's ghost illusion]
      {
        type: 'trivia',
        id: 'haunted-mansion-x11',
        question: 'The see-through dancing ghosts in the ballroom use a famous old trick. What is it called?',
        choices: ['Pepper’s ghost', 'Salt’s spirit', 'Mirror magic', 'Ghost glue'],
        answer: 0,
        explain: 'It’s called Pepper’s ghost, a trick with glass and light.',
        source: HM,
      },
      // evidence: "an invisible pianist plays a sinister version of"
      {
        type: 'trivia',
        id: 'haunted-mansion-x12',
        question: 'Who plays the piano in the music room?',
        choices: ['An invisible pianist', 'A skeleton', 'A cat', 'Madame Leota'],
        answer: 0,
        explain: 'An invisible pianist plays a spooky version of the theme song.',
        source: HM,
      },
      // evidence: "where footprints can be seen and candelabras are blown out occasionally by unseen ghosts"
      {
        type: 'truefalse',
        id: 'haunted-mansion-x13',
        statement: 'On the Endless Staircase, you can see ghostly footprints.',
        answer: true,
        explain: 'Fact! Footprints appear and unseen ghosts blow out candles.',
        source: HM,
      },
      // evidence: "a crypt for Prudence Pock the poetess"
      {
        type: 'spy',
        id: 'haunted-mansion-x14',
        prompt: 'Find the crypt of Prudence Pock, the ghostly poetess.',
        hint: 'It’s in the interactive queue with the other crypts.',
      },
      // evidence: "a murder mystery for guests to solve featuring the sinister Dread Family"
      {
        type: 'spy',
        id: 'haunted-mansion-x15',
        prompt: 'Look for a clue about the Dread Family in the line.',
        hint: 'Read the names and words carved nearby.',
      },
      {
        type: 'spy',
        id: 'haunted-mansion-x16',
        prompt: 'Find a tombstone with a funny name or silly poem. Read it out loud!',
      },
      {
        type: 'spy',
        id: 'haunted-mansion-x17',
        prompt: 'Spot something with bats on it. How many bats can you count?',
      },
      {
        type: 'challenge',
        id: 'haunted-mansion-x18',
        prompt: 'Everyone do a friendly ghost “Boooo!” Then whisper “Room for one more...”',
      },
      {
        type: 'challenge',
        id: 'haunted-mansion-x19',
        prompt: 'Be a singing bust! Stand very still and sing one line of any song in your deepest voice.',
      },
      {
        type: 'challenge',
        id: 'haunted-mansion-x20',
        prompt: 'Make your best Ghost Host welcome speech, in a slow, mysterious voice.',
      },
      {
        type: 'challenge',
        id: 'haunted-mansion-x21',
        prompt: 'Pretend you’re a hitchhiking ghost and do your best thumbs-up pose!',
      },
      {
        type: 'wyr',
        id: 'haunted-mansion-x22',
        a: 'Dance at the ghost ballroom party',
        b: 'Sing with the busts in the graveyard',
      },
      {
        type: 'wyr',
        id: 'haunted-mansion-x23',
        a: 'Have a ghost follow you home',
        b: 'Have a portrait that changes every time you look',
      },
      {
        type: 'wyr',
        id: 'haunted-mansion-x24',
        a: 'Be able to walk through walls',
        b: 'Be able to float in the air',
      },
      {
        type: 'wyr',
        id: 'haunted-mansion-x25',
        a: 'Ride in a Doom Buggy',
        b: 'Climb the Endless Staircase',
      },
      {
        type: 'emoji',
        id: 'haunted-mansion-x26',
        emojis: '🔮 👩 🗣️',
        hint: 'A head inside a crystal ball.',
        choices: ['Madame Leota', 'Mama Odie', 'The Evil Queen', 'Ursula'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'haunted-mansion-x27',
        emojis: '👻 👻 👻 👍',
        hint: 'They want a ride home with you!',
        choices: ['Hitchhiking Ghosts', 'Singing Busts', 'Ghost Host', 'Dread Family'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'haunted-mansion-x28',
        emojis: '👰 💍 🕯️',
        hint: 'She’s waiting in the attic.',
        choices: ['The bride, Constance', 'Cinderella', 'Belle', 'Madame Leota'],
        answer: 0,
      },
    ],
  },

  'hall-of-presidents': {
    facts: [
      // evidence: "Morgan Freeman replaced Hall as narrator for the 2009 revised show"
      { text: 'Actor Morgan Freeman became the show’s narrator in 2009.', source: HOP },
      // evidence: "The show opened as Great Moments with Mr. Lincoln at the world's fair in 1964"
      {
        text: 'The idea first appeared as a Lincoln show called Great Moments with Mr. Lincoln at the 1964 world’s fair.',
        source: HOP,
      },
      // evidence: "Originally conceived by Walt Disney as an attraction for Disneyland Park in California"
      { text: 'Walt Disney first dreamed up the show for Disneyland in California.', source: HOP },
    ],
    quests: [
      // evidence: "Audience capacity: 700 per show"
      {
        type: 'guess',
        id: 'hall-of-presidents-x1',
        question: 'How many people can watch each show?',
        answer: 700,
        min: 50,
        max: 2000,
        step: 50,
        unit: 'people',
        tolerance: 100,
        explain: '700 people per show!',
        source: HOP,
      },
      // evidence: "Duration: 25 minutes"
      {
        type: 'guess',
        id: 'hall-of-presidents-x2',
        question: 'How many minutes long is the show?',
        answer: 25,
        min: 5,
        max: 90,
        step: 1,
        unit: 'minutes',
        tolerance: 4,
        explain: 'About 25 minutes.',
        source: HOP,
      },
      // evidence: "the film portion began at the Constitutional Convention in 1787"
      {
        type: 'trivia',
        id: 'hall-of-presidents-x3',
        question: 'The original show’s film began at which famous meeting?',
        choices: [
          'The Constitutional Convention',
          'The first Thanksgiving',
          'The Moon landing',
          'The Boston Tea Party',
        ],
        answer: 0,
        explain: 'It started at the Constitutional Convention in 1787.',
        source: HOP,
      },
      // evidence: "George Washington was added as a third speaking president."
      {
        type: 'trivia',
        id: 'hall-of-presidents-x4',
        question: 'In 2009, which president was added as a third speaking president?',
        choices: ['George Washington', 'Thomas Jefferson', 'John Adams', 'Teddy Roosevelt'],
        answer: 0,
        explain: 'George Washington joined Lincoln and the current president as a speaker.',
        source: HOP,
      },
      // evidence: "All versions of the attraction begin with a film presentation, followed by a lifting of a curtain"
      {
        type: 'truefalse',
        id: 'hall-of-presidents-x5',
        statement: 'The show starts with a film, then a curtain lifts to reveal the presidents.',
        answer: true,
        explain: 'Fact! Every version has worked this way.',
        source: HOP,
      },
      // evidence: "it would have been a representation of Colonial Boston on the eve of the American Revolution"
      {
        type: 'trivia',
        id: 'hall-of-presidents-x6',
        question: 'Walt once planned a “Liberty Street” for Disneyland. Which colonial city would it have looked like?',
        choices: ['Boston', 'Miami', 'Los Angeles', 'Denver'],
        answer: 0,
        explain: 'It would have looked like colonial Boston just before the American Revolution.',
        source: HOP,
      },
      // evidence: "narrated by actor Lawrence Dobkin" / "Maya Angelou narrated the revised script" (1993) / "J. D. Hall replaced Angelou" (2001) / "Morgan Freeman replaced Hall as narrator for the 2009 revised show"
      {
        type: 'order',
        id: 'hall-of-presidents-x7',
        prompt: 'Put the show’s narrators in order, first to most recent.',
        items: ['Lawrence Dobkin', 'Maya Angelou', 'J. D. Hall', 'Morgan Freeman'],
        explain: 'Dobkin was first, then Maya Angelou in 1993, J. D. Hall in 2001 and Morgan Freeman in 2009.',
        source: HOP,
      },
      // evidence: "The attraction closed for refurbishment on January 20, 2025" / "reopened on June 29 of the same year"
      {
        type: 'truefalse',
        id: 'hall-of-presidents-x8',
        statement: 'The Hall of Presidents closed for a refresh in 2025 and reopened the same year.',
        answer: true,
        explain: 'Fact! It closed in January 2025 and reopened on June 29, 2025.',
        source: HOP,
      },
      // evidence: "Nowhere in the world is presented a government of so much liberty and equality."
      {
        type: 'trivia',
        id: 'hall-of-presidents-x9',
        question: 'Lincoln says: “Nowhere in the world is presented a government of so much liberty and ___.”',
        choices: ['equality', 'pizza', 'sunshine', 'music'],
        answer: 0,
        explain: '“...so much liberty and equality.”',
        source: HOP,
      },
      // evidence: "The Hall of Presidents opened with the Magic Kingdom on October 1, 1971"
      {
        type: 'truefalse',
        id: 'hall-of-presidents-x10',
        statement: 'The Hall of Presidents opened many years after Magic Kingdom did.',
        answer: false,
        explain: 'Fiction! It opened on the park’s very first day, October 1, 1971.',
        source: HOP,
      },
      // evidence: "the film portion began at the Constitutional Convention in 1787"
      {
        type: 'guess',
        id: 'hall-of-presidents-x11',
        question: 'In what year was the Constitutional Convention, where the original film began?',
        answer: 1787,
        min: 1600,
        max: 1900,
        step: 1,
        unit: '',
        tolerance: 10,
        explain: '1787, when the U.S. Constitution was written.',
        source: HOP,
      },
      // evidence: "the attraction was renamed The Hall of Presidents: A Celebration of Liberty’s Leaders"
      {
        type: 'trivia',
        id: 'hall-of-presidents-x12',
        question: 'In 2008 the show got a longer name: The Hall of Presidents: A Celebration of ___.',
        choices: ['Liberty’s Leaders', 'Famous Faces', 'American Heroes', 'Big Speeches'],
        answer: 0,
        explain: 'A Celebration of Liberty’s Leaders.',
        source: HOP,
      },
      {
        type: 'spy',
        id: 'hall-of-presidents-x13',
        prompt: 'Spot something red, white and blue nearby.',
      },
      {
        type: 'spy',
        id: 'hall-of-presidents-x14',
        prompt: 'Find an eagle, a star or a flag design. How many stars can you count?',
      },
      {
        type: 'spy',
        id: 'hall-of-presidents-x15',
        prompt: 'Look for something that looks like it came from colonial times, like a lantern or old sign.',
      },
      {
        type: 'spy',
        id: 'hall-of-presidents-x16',
        prompt: 'Find a picture or name of a president anywhere around you.',
      },
      {
        type: 'challenge',
        id: 'hall-of-presidents-x17',
        prompt: 'Give a 10-second speech about the best snack in the park. Everyone claps at the end!',
      },
      {
        type: 'challenge',
        id: 'hall-of-presidents-x18',
        prompt: 'Hold a pretend vote: what should your group do next? Everyone raises a hand for their pick.',
      },
      {
        type: 'challenge',
        id: 'hall-of-presidents-x19',
        prompt: 'Stand as still as an Audio-Animatronic figure. First one to giggle is out!',
      },
      {
        type: 'challenge',
        id: 'hall-of-presidents-x20',
        prompt: 'Name as many presidents as your group can together. Can you get to 10?',
      },
      {
        type: 'wyr',
        id: 'hall-of-presidents-x21',
        a: 'Give a speech on the big stage',
        b: 'Be one of the presidents standing on stage',
      },
      {
        type: 'wyr',
        id: 'hall-of-presidents-x22',
        a: 'Meet George Washington',
        b: 'Meet Abraham Lincoln',
      },
      {
        type: 'wyr',
        id: 'hall-of-presidents-x23',
        a: 'Write a new law about recess',
        b: 'Write a new law about dessert',
      },
      {
        type: 'wyr',
        id: 'hall-of-presidents-x24',
        a: 'Be the narrator of the show',
        b: 'Run the curtain that reveals the presidents',
      },
      {
        type: 'emoji',
        id: 'hall-of-presidents-x25',
        emojis: '🎩 🧔 🇺🇸',
        hint: 'A tall president famous for his top hat.',
        choices: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'John Adams'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'hall-of-presidents-x26',
        emojis: '1️⃣ 🇺🇸 🏛️',
        hint: 'The very first president.',
        choices: ['George Washington', 'Abraham Lincoln', 'James Madison', 'Teddy Roosevelt'],
        answer: 0,
      },
    ],
  },
};
