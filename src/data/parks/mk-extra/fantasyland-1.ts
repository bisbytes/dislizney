import type { Fact, Quest } from '../../types';

const PP = "https://en.wikipedia.org/wiki/Peter_Pan's_Flight";
const PP_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/peter-pan-flight/';
const PP_AE = 'https://green.allears.net/magic-kingdom/peter-pans-flight-fantasyland-magic-kingdom/';
const PP_AEQ = 'https://www.allearsnet.com/2015/01/05/new-peter-pan-queue-magic-kingdom-walt-disney-world/';
const PP_WM =
  'https://wdwmagic.com/attractions/peter-pans-flight/news/29jan2015-video---peter-pans-flight-debuts-new-interactive-features-in-expanded-queue-area.htm';
const PP_WI = 'https://www.wdwinfo.com/?p=31557';
const PP_MV = 'https://www.mickeyvacations.com/Articles/2015PeterPanQueue.htm';
const SW = "https://en.wikipedia.org/wiki/It's_a_Small_World";
const SW_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/its-a-small-world/';
const SW_TP = 'https://touringplans.com/blog/five-things-to-know-about-its-a-small-world/';
const SW_TPD = 'https://touringplans.com/blog/disneys-details-fantasyland-part-2/';
const SW_NT21 = 'https://wdwnt.com/?p=493769';
const SW_NT25 = 'https://wdwnt.com/2025/03/update-its-a-small-world-clock-tower-facade-repaired-at-magic-kingdom';
const SW_NTV = 'https://wdwnt.com/?p=1262495';
const SW_MFL = 'https://www.themouseforless.com/walt-disney-world/parks/magic-kingdom/its-a-small-world/';
const SD = 'https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train';
const SD_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/seven-dwarfs-mine-train/';
const SD_AE = 'https://www.allearsnet.com/tp/mk/seven-dwarfs-mine-train.htm';
const SD_MV = 'https://mickeyvacations.com/Articles/7DwarfsMinTrain.htm';
const SD_WM = 'https://www.wdw-magazine.com/6-dopey-facts-about-the-seven-dwarfs-mine-train/';
const SD_AM =
  'https://attractionsmagazine.com/seven-dwarfs-mine-train-comes-life-final-piece-new-fantasyland-magic-kingdom/';
const LM = 'https://en.wikipedia.org/wiki/Under_the_Sea:_Journey_of_the_Little_Mermaid';
const LM_DIS =
  'https://disneyworld.disney.go.com/attractions/magic-kingdom/under-the-sea-journey-of-the-little-mermaid/';
const LM_AE = 'https://allearsnet.com/tp/mk/under-the-sea-journey-of-the-little-mermaid.htm';
const LM_RG = 'https://www.resortsgal.com/parks/magic-kingdom/under-the-sea-little-mermaid/';
const LM_AM = 'https://attractionsmagazine.com/now-open-journey-with-ariel-in-under-the-sea-at-new-fantasyland/';
const LM_BM =
  'https://blogmickey.com/2023/02/scuttle-animatronic-queue-show-returns-following-lengthy-disappearance-at-journey-of-the-little-mermaid/';
const LM_DB =
  'https://disneyblog.com/destinations/walt-disney-world/magic-kingdom/fantasyland/under-the-sea-journey-of-the-little-mermaid/';
const DU = 'https://en.wikipedia.org/wiki/Dumbo_the_Flying_Elephant';
const DU_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/dumbo-the-flying-elephant/';
const DU_FAN = 'https://disney.fandom.com/wiki/Dumbo_the_Flying_Elephant';
const DU_AE = 'https://allears.net/?p=11306';
const DU_KP = 'https://kennythepirate.com/2021/10/04/how-does-the-dumbo-the-flying-elephant-pager-system-work';
const DU_PS = 'https://wdwprepschool.com/disney-world-parks/magic-kingdom/attractions/dumbo-the-flying-elephant';
const DU_MB = 'https://mickeyblog.com/2025/07/20/the-dumbo-the-flying-elephant-queue-playground-has-reopened/';
const DU_DG = 'https://dadsguidetowdw.com/?p=6694';
const MT = 'https://en.wikipedia.org/wiki/Mad_Tea_Party';
const MT_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/mad-tea-party/';
const MT_AE = 'https://allearsnet.com/tp/mk/tea.htm';
const MT_MB = 'https://mickeyblog.com/2024/04/15/step-in-time-the-history-of-magic-kingdoms-mad-tea-party';
const MT_SIGN = 'https://mickeyblog.com/?p=429291';
const MT_DF = 'https://www.disneyfanatic.com/10-wonderful-facts-about-the-mad-tea-party-ride/';

/**
 * Base quests in magic-kingdom.ts that are not about the ride itself (or are worded badly).
 * Fixed versions, where needed, live below with new ids.
 */
export const drop: string[] = [
  // Photo prompts not worded "From the line…". Fixed as peter-pan-r-photo1 / peter-pan-r-photo2.
  'peter-pan-photo-1',
  'peter-pan-photo-2',
  // Shadow spy with no backstory. Replaced by the nursery shadow-wall spy peter-pan-r-spy10.
  'pp-spy',
  // Generic "fly or never grow up" would-you-rather.
  'pp-wyr',
  // Photo prompt not worded "From the line…". Fixed as small-world-r-photo2.
  'small-world-photo-1',
  // Generic "say hello in other languages" game.
  'sw-ch',
  // Photo prompts not worded "From the line…". Fixed as seven-dwarfs-r-photo1 / seven-dwarfs-r-photo2.
  'seven-dwarfs-photo-1',
  'seven-dwarfs-photo-2',
  // Barrel spy with an unverified "Snow White appears" claim. Replaced by seven-dwarfs-r-spy10.
  'sd-spy',
  // Movie quiz ("name the dwarfs"). Replaced by the in-mine version seven-dwarfs-r-ch1.
  'sd-ch',
  // Same question as sd-1 (top speed).
  'sd-3',
  // Photo prompts not worded "From the line…". Fixed as little-mermaid-r-photo1 / little-mermaid-r-photo2.
  'little-mermaid-photo-1',
  'little-mermaid-photo-2',
  // Generic superpower would-you-rather.
  'lm-wyr',
  // Photo prompt not worded "From the line…". Fixed as dumbo-r-photo1.
  'dumbo-photo-1',
  // Generic flapping challenge. Replaced by the joystick challenge dumbo-r-ch1.
  'du-ch',
  // Same fact as du-2 (opposite directions).
  'du-3',
  // Generic unbirthday sing-along. Replaced by the calliope challenge mad-tea-party-r-ch1.
  'mt-ch',
];

/** Extra ride-specific content for Fantasyland (part 1). Every sourced item was checked against its source page. */
export const extra: Record<string, { facts: Fact[]; quests: Quest[] }> = {
  'peter-pan': {
    facts: [
      // evidence: "The earliest version of Peter Pan's Flight debuted at Disneyland on the park's opening day in July 1955."
      {
        text: 'The very first Peter Pan’s Flight opened at Disneyland on its opening day in July 1955.',
        source: 'https://en.wikipedia.org/wiki/Peter_Pan%27s_Flight',
      },
      // evidence: "added scenes with Peter and made use of Audio-Animatronic figures."
      {
        text: 'The Walt Disney World version added extra scenes with Peter and uses Audio-Animatronic figures.',
        source: 'https://en.wikipedia.org/wiki/Peter_Pan%27s_Flight',
      },
      // evidence: "Five of the six Disney resort destinations feature it."
      {
        text: 'Five of the six Disney resorts around the world have a Peter Pan’s Flight.',
        source: 'https://en.wikipedia.org/wiki/Peter_Pan%27s_Flight',
      },
      // evidence: "Hook's 48-foot pirate ship is included, complete with deck, masts, sails and rigging."
      {
        text: 'Captain Hook’s pirate ship in the ride is 48 feet long, with a deck, masts, sails and rigging.',
        source: PP,
      },
    ],
    quests: [
      // ---- Look around the queue, in walking order ----
      // source: PP. evidence: "the old restrooms were removed," / "the new queue starts by entering into a corridor with interactive murals,"
      {
        type: 'spy',
        id: 'peter-pan-r-spy1',
        prompt: 'In the first hallway, find a painted scene from the story that you can’t wait to fly through.',
        hint: 'Surprise: this hallway used to be restrooms! They were removed in 2014 to make room for this indoor queue.',
      },
      // source: PP_MV. evidence: "a corridor of interactive murals" / PP_WM: "Some of the effects are achieved through projection mapping."
      {
        type: 'spy',
        id: 'peter-pan-r-spy2',
        prompt: 'Wave at the murals as you pass. Do any of them seem to react?',
        hint: 'These are interactive murals. Imagineers use projection mapping to make parts of this queue come alive.',
      },
      // source: PP_WI. evidence: outdoor Darlings' house with "Nana's doghouse" / PP_AEQ: "Nana in the backyard area."
      {
        type: 'spy',
        id: 'peter-pan-r-spy3',
        prompt: 'Out in the Darlings’ yard, find Nana’s doghouse.',
        hint: 'Nana is the Darling family’s nanny dog. Her doghouse sits right in the backyard.',
      },
      // source: PP_WI. evidence: the Darlings' house has "silhouetted windows"
      {
        type: 'spy',
        id: 'peter-pan-r-spy4',
        prompt: 'Look up at the Darling house. Find a window with a silhouette in it.',
        hint: 'The silhouettes make it feel like the family is home, right before Peter Pan comes to visit.',
      },
      // source: PP_WI. evidence: "a view of London" / PP_DIS: "Big Ben and Tower Bridge light up the night sky."
      {
        type: 'spy',
        id: 'peter-pan-r-spy5',
        prompt: 'From the yard, find the view of London.',
        hint: 'The Darlings live in London. Soon your galleon flies right over it, past Big Ben and Tower Bridge!',
      },
      // source: PP_AEQ. evidence: "You enter the house and portraits of the kids are on the wall." / PP: "Peter and the Darlings posed victoriously on the ship"
      {
        type: 'spy',
        id: 'peter-pan-r-spy6',
        prompt: 'Inside the house, find the portraits of Wendy, John and Michael.',
        hint: 'Remember their faces! At the end of the ride you’ll see the Darling kids again, posed on Hook’s ship with Peter.',
      },
      // source: PP_WI. evidence: "very neat window that looks out onto London at night"
      {
        type: 'spy',
        id: 'peter-pan-r-spy7',
        prompt: 'In the nursery, find the window that looks out over London at night.',
        hint: 'This nursery is where the Darlings’ adventure begins, and it’s the room you’ll fly out of on the ride.',
      },
      // source: PP_WI. evidence: "you might see and hear Tinkerbell flying around the first bed" / PP_WM: Tink can "fly through the nursery"
      {
        type: 'spy',
        id: 'peter-pan-r-spy8',
        prompt: 'Listen for a jingle! Watch for Tinker Bell zipping around the first bed.',
        hint: 'Tink is a projection effect. She flies through the nursery and even seems to move real objects.',
      },
      // source: PP_AE. evidence: building blocks in the nursery spell "P Pan", one group "by Wendy's bed"
      {
        type: 'spy',
        id: 'peter-pan-r-spy9',
        prompt: 'Find the toy building blocks near Wendy’s bed. What do they spell?',
        hint: 'Imagineers hid a message here: the blocks spell “P Pan”!',
      },
      // source: PP_WI. evidence: wall shows shadows of Peter or butterflies; bells drop down that guests can ring / PP_MV: "their own shadows dance and play on the walls"
      {
        type: 'spy',
        id: 'peter-pan-r-spy10',
        prompt: 'At the shadow wall, find your own shadow. Can you get a butterfly to land on your finger?',
        hint: 'Peter’s shadow and butterflies play on this wall, and sometimes bells drop down for your shadow to ring.',
      },
      // source: PP_AE. evidence: blocks spell "DISNEY", the other group "by the window as you exit"
      {
        type: 'spy',
        id: 'peter-pan-r-spy11',
        prompt: 'As you leave the nursery, look by the window for more blocks. What word do these spell?',
        hint: 'This set spells “DISNEY.” Did you find both hidden words?',
      },
      // source: PP_WM. evidence: "a sprinkling of pixie dust before leaving the new queue to board the ride."
      {
        type: 'spy',
        id: 'peter-pan-r-spy12',
        prompt: 'In the last hallway, watch for a sprinkle of pixie dust.',
        hint: 'Tinker Bell dusts you with pixie dust so you can fly to Never Land. Now you’re ready to board!',
      },
      // source: PP. evidence: "The load/unload area features Omnimover-style moving ramps" / PP_AE: belt that does not stop for boarding
      {
        type: 'spy',
        id: 'peter-pan-r-spy13',
        prompt: 'At boarding, watch the pirate galleons hanging from the track above. How many can you count?',
        hint: 'The ships never stop, so you step aboard from a moving walkway, just like catching a ride on a flying ship.',
      },
      // source: PP_WI. evidence: "a plain-looking wall shows shadows of Peter or butterflies"
      {
        type: 'photo',
        id: 'peter-pan-r-photo1',
        prompt: 'From the line, snap a photo of your shadow playing on the nursery shadow wall!',
        tip: 'The shadow wall is inside the Darlings’ nursery.',
        source: PP_WI,
      },
      // source: PP_WI. evidence: "The outdoor Darlings' house has silhouetted windows, a view of London, and Nana's doghouse."
      {
        type: 'photo',
        id: 'peter-pan-r-photo2',
        prompt: 'From the line, snap a picture of the Darling house and Nana’s doghouse in the yard.',
        tip: 'Look for them in the outdoor part of the queue.',
        source: PP_WI,
      },
      // ---- Trivia ----
      // evidence: "Board your pirate galleon and follow Peter Pan as he beckons you"
      {
        type: 'trivia',
        id: 'peter-pan-r1',
        question: 'What do you fly in on Peter Pan’s Flight?',
        choices: ['A hot-air balloon', 'A pirate galleon', 'A flying carpet', 'A rocket'],
        answer: 1,
        explain: 'You board a little pirate galleon and follow Peter Pan into the sky.',
        source: PP_DIS,
      },
      // evidence: "gentle cruise over London, where Big Ben and Tower Bridge light up the night sky."
      {
        type: 'trivia',
        id: 'peter-pan-r2',
        question: 'Which two London landmarks light up below your ship?',
        choices: [
          'Big Ben and Tower Bridge',
          'The Eiffel Tower and a windmill',
          'A pyramid and a palm tree',
          'A lighthouse and a castle',
        ],
        answer: 0,
        explain: 'Big Ben and Tower Bridge glow in the night sky as you float over London.',
        source: PP_DIS,
      },
      // evidence: "Attraction type: Rail-suspended dark ride"
      {
        type: 'truefalse',
        id: 'peter-pan-r3',
        statement: 'Your pirate ship rolls along a track on the floor.',
        answer: false,
        explain: 'Fiction! The ships hang from a rail above you. That’s why it feels like flying.',
        source: PP,
      },
      // evidence: "Descend into Never Land between glowing volcanoes and sparkling waterfalls."
      {
        type: 'trivia',
        id: 'peter-pan-r4',
        question: 'What do you fly between as you drop into Never Land?',
        choices: [
          'Snowy mountains',
          'Glowing volcanoes and sparkling waterfalls',
          'Tall skyscrapers',
          'Giant mushrooms',
        ],
        answer: 1,
        explain: 'Glowing volcanoes and sparkling waterfalls welcome you to Never Land.',
        source: PP_DIS,
      },
      // evidence: "As you swoop into Pirate's Cove, there's danger ahead!"
      {
        type: 'trivia',
        id: 'peter-pan-r5',
        question: 'What is the name of the place where danger waits with Captain Hook?',
        choices: ['Skull Island Beach', 'Pirate’s Cove', 'Crocodile Creek', 'Hook Harbor'],
        answer: 1,
        explain: 'You swoop into Pirate’s Cove, where Hook and a ticking crocodile are waiting.',
        source: PP_DIS,
      },
      // evidence: "Hook's 48-foot pirate ship is included, complete with deck, masts, sails and rigging."
      {
        type: 'guess',
        id: 'peter-pan-r6',
        question: 'How many feet long is Captain Hook’s pirate ship in the ride?',
        answer: 48,
        min: 10,
        max: 120,
        step: 1,
        unit: 'feet',
        tolerance: 8,
        explain: 'It’s 48 feet long, with a deck, masts, sails and rigging.',
        source: PP,
      },
      // evidence: "a play tea party featuring two famous toys, Raggedy Ann and Andy, can be seen."
      {
        type: 'trivia',
        id: 'peter-pan-r7',
        question: 'Which two toys are having a tea party at the start of the ride’s nursery scene?',
        choices: ['Woody and Buzz', 'Raggedy Ann and Andy', 'Two teddy bears', 'Two toy soldiers'],
        answer: 1,
        explain: 'Raggedy Ann and Andy are having a play tea party in the nursery.',
        source: PP,
      },
      // evidence: "while the boys are lashed to the mast and Wendy is about to walk the plank."
      {
        type: 'truefalse',
        id: 'peter-pan-r8',
        statement: 'In the big pirate ship scene, Wendy is about to walk the plank.',
        answer: true,
        explain: 'Fact! While Peter and Hook duel, Wendy is about to walk the plank.',
        source: PP,
      },
      // evidence: "while the boys are lashed to the mast"
      {
        type: 'trivia',
        id: 'peter-pan-r9',
        question: 'Where are John and Michael during the pirate ship scene?',
        choices: ['Tied to the mast', 'Up in the crow’s nest', 'Steering the ship', 'Swimming with mermaids'],
        answer: 0,
        explain: 'The boys are lashed to the mast while Peter battles Hook.',
        source: PP,
      },
      // evidence: "The Lost Boys camp and Mermaid Lagoon are now a part of the Never Land scene."
      {
        type: 'truefalse',
        id: 'peter-pan-r10',
        statement: 'You can spot both the Lost Boys’ camp and Mermaid Lagoon in the Never Land scene.',
        answer: true,
        explain: 'Fact! Both are part of the giant Never Land scene below you.',
        source: PP,
      },
      // evidence: "Manufacturer: Arrow Development (Walt Disney World)"
      {
        type: 'trivia',
        id: 'peter-pan-r11',
        question: 'Which company built the ride system for this Peter Pan’s Flight?',
        choices: ['Vekoma', 'Arrow Development', 'Lego', 'Boeing'],
        answer: 1,
        explain: 'Arrow Development built it. They worked on many classic Disney rides.',
        source: PP,
      },
      // evidence: "It reuses audio and sound effects from the 1955 Disneyland version."
      {
        type: 'truefalse',
        id: 'peter-pan-r12',
        statement: 'Some of the sounds you hear on this ride first played on the 1955 Disneyland version.',
        answer: true,
        explain: 'Fact! It reuses audio and sound effects from the original 1955 ride.',
        source: PP,
      },
      // evidence: "Two to three guests can fit on each ship."
      {
        type: 'trivia',
        id: 'peter-pan-r13',
        question: 'How many guests fit on each little pirate ship?',
        choices: ['Just 1', 'Two to three', 'Eight', 'Twenty'],
        answer: 1,
        explain: 'Two to three guests fit on each ship, so it feels cozy and personal.',
        source: PP_AE,
      },
      // evidence: (PP_DIS) London with "Big Ben and Tower Bridge"; "Descend into Never Land"; "swoop into Pirate's Cove"; (PP) "poised to sail into the sky, back to London."
      {
        type: 'order',
        id: 'peter-pan-r14',
        prompt: 'Put your flight in order, from takeoff to the end.',
        items: [
          'Fly over London',
          'Drop into Never Land',
          'Swoop into Pirate’s Cove',
          'Sail back toward London with Peter',
        ],
        explain: 'London first, then Never Land, then Pirate’s Cove, and finally Peter and the Darlings sail home.',
        source: PP_DIS,
      },
      // evidence: "one of the few remaining attractions that was operational on opening day in 1955."
      {
        type: 'truefalse',
        id: 'peter-pan-r15',
        statement:
          'The Disneyland version of this ride is one of the few rides still running from Disneyland’s opening day.',
        answer: true,
        explain: 'Fact! It has been flying since Disneyland opened in 1955.',
        source: PP_DIS,
      },
      // evidence: "In 2014, this version was upgraded to include an updated indoor queue"
      {
        type: 'guess',
        id: 'peter-pan-r16',
        question: 'In what year did this ride get its indoor Darling-house queue?',
        answer: 2014,
        min: 1971,
        max: 2026,
        step: 1,
        unit: '',
        tolerance: 1,
        explain: 'The new indoor queue came in 2014.',
        source: PP,
      },
      // evidence: "the old restrooms were removed,"
      {
        type: 'trivia',
        id: 'peter-pan-r17',
        question: 'What used to be where part of the indoor queue is now?',
        choices: ['A gift shop', 'Restrooms', 'A snack stand', 'A parking spot for parade floats'],
        answer: 1,
        explain: 'The old restrooms were removed to make space for the new queue.',
        source: PP,
      },
      // evidence: "opened in 1983 and its features are very similar to those of the Magic Kingdom version."
      {
        type: 'truefalse',
        id: 'peter-pan-r18',
        statement: 'Tokyo Disneyland’s Peter Pan’s Flight is very similar to this one.',
        answer: true,
        explain: 'Fact! Tokyo’s version opened in 1983 and is very much like Magic Kingdom’s.',
        source: PP,
      },
      // evidence: "Any Height"
      {
        type: 'truefalse',
        id: 'peter-pan-r19',
        statement: 'You must be 40 inches tall to fly on Peter Pan’s Flight.',
        answer: false,
        explain: 'Fiction! Any height can fly.',
        source: PP_DIS,
      },
      // evidence: "The earliest version of Peter Pan's Flight debuted at Disneyland on the park's opening day in July 1955."
      {
        type: 'guess',
        id: 'peter-pan-x5',
        question: 'In what year did the very first Peter Pan’s Flight open at Disneyland?',
        answer: 1955,
        min: 1940,
        max: 2000,
        step: 1,
        unit: '',
        tolerance: 3,
        explain: 'It opened with Disneyland in July 1955.',
        source: 'https://en.wikipedia.org/wiki/Peter_Pan%27s_Flight',
      },
      // evidence: "Five of the six Disney resort destinations feature it."
      {
        type: 'guess',
        id: 'peter-pan-x6',
        question: 'How many of the six Disney resorts around the world have Peter Pan’s Flight?',
        answer: 5,
        min: 1,
        max: 6,
        step: 1,
        unit: 'resorts',
        tolerance: 0,
        explain: 'Five of the six Disney resorts have it!',
        source: 'https://en.wikipedia.org/wiki/Peter_Pan%27s_Flight',
      },
      // evidence: "debuted at Disneyland on the park's opening day in July 1955" / "opened two days after the park's grand opening on October 3, 1971" / Tokyo "opened in 1983" / "In 2014, this version was upgraded to include an updated indoor queue"
      {
        type: 'order',
        id: 'peter-pan-x9',
        prompt: 'Put these Peter Pan’s Flight moments in order, oldest first.',
        items: [
          'Ride opens at Disneyland',
          'Ride opens at Magic Kingdom',
          'Tokyo Disneyland’s version opens',
          'Darling house queue opens here',
        ],
        explain: 'Disneyland in 1955, Magic Kingdom in 1971, Tokyo in 1983, and the Darling house queue in 2014.',
        source: 'https://en.wikipedia.org/wiki/Peter_Pan%27s_Flight',
      },
      // ---- Play together ----
      {
        type: 'challenge',
        id: 'peter-pan-r-ch1',
        prompt:
          'Peter Pan is about to lead your galleon over London. Strike your best soaring pose right here in line and hold it for 10 seconds!',
      },
      {
        type: 'challenge',
        id: 'peter-pan-r-ch2',
        prompt:
          'Peter and Hook duel on the mainsail in this ride. Have a pretend duel using only your pointer fingers. No touching!',
      },
      {
        type: 'challenge',
        id: 'peter-pan-r-ch3',
        prompt:
          'The ticking crocodile lurks in Pirate’s Cove. Everyone go “tick-tock” softly together. Who can keep the steadiest beat?',
      },
      {
        type: 'wyr',
        id: 'peter-pan-r-wyr1',
        a: 'Float over London with Big Ben glowing below',
        b: 'Drop into Never Land past the glowing volcanoes',
      },
      { type: 'wyr', id: 'peter-pan-r-wyr2', a: 'Linger over Mermaid Lagoon', b: 'Linger over the Lost Boys’ camp' },
      {
        type: 'wyr',
        id: 'peter-pan-r-wyr3',
        a: 'Watch Peter and Hook duel on the mainsail',
        b: 'Cheer as the crocodile waits below for Hook',
      },
      {
        type: 'emoji',
        id: 'peter-pan-r-emoji1',
        emojis: '🏴‍☠️ ⛵ ☁️',
        hint: 'You’re about to ride in one!',
        choices: ['A flying pirate galleon', 'A submarine', 'A teacup', 'A mine cart'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'peter-pan-x23',
        emojis: '🐊 ⏰',
        hint: 'He waits in Pirate’s Cove, hoping Hook falls in.',
        choices: ['The ticking crocodile', 'Mr. Smee', 'Nana', 'Sebastian'],
        answer: 0,
      },
    ],
  },
  'small-world': {
    facts: [
      // evidence: "Mary Blair was responsible for the attraction's whimsical design and color styling."
      {
        text: 'Artist Mary Blair created the ride’s whimsical design and bright colors.',
        source: 'https://en.wikipedia.org/wiki/It%27s_a_Small_World',
      },
      // evidence: "Pepsi approached Disney with a plan for a tribute to UNICEF, the United Nations Children's Fund."
      {
        text: 'The ride began as a tribute to UNICEF, the United Nations Children’s Fund, at the 1964 World’s Fair.',
        source: 'https://en.wikipedia.org/wiki/It%27s_a_Small_World',
      },
      // evidence: "In 2021, for the park's 50th anniversary, its facade was repainted in bright colors."
      {
        text: 'For Magic Kingdom’s 50th anniversary in 2021, the ride’s front was repainted in bright colors.',
        source: 'https://en.wikipedia.org/wiki/It%27s_a_Small_World',
      },
      // evidence: "the song, at 48 seconds long, is played 1,200 times during a 16-hour operating day."
      {
        text: 'The song is only 48 seconds long, which is why it repeats so many times.',
        source: 'https://en.wikipedia.org/wiki/It%27s_a_Small_World',
      },
    ],
    quests: [
      // ---- Look around the queue, in walking order ----
      // source: SW. evidence: "In 2021, for the park's 50th anniversary, its facade was repainted in bright colors."
      {
        type: 'spy',
        id: 'small-world-r-spy1',
        prompt: 'At the entrance, look up at the building’s front. How many different colors can you count?',
        hint: 'For Magic Kingdom’s 50th birthday in 2021, this front was repainted in bright, happy colors.',
      },
      // source: SW_TP. evidence: "always spelled without capital letters!"
      {
        type: 'spy',
        id: 'small-world-r-spy2',
        prompt: 'Find the ride’s name on a sign. Can you spot any capital letters?',
        hint: 'Fans love this detail: “it’s a small world” is always written without capital letters.',
      },
      // source: SW_TP. evidence: "In the queue, you'll wind your way down long ramps."
      {
        type: 'spy',
        id: 'small-world-r-spy3',
        prompt: 'As you wind down the long ramps, find a spot where you can see the boats below.',
        hint: 'The ramps give you a sneak peek at the boats setting sail while you wait.',
      },
      // source: SW_TP. evidence: "In 2021, new colors were added to the scenery to keep it fresh and vibrant."
      {
        type: 'spy',
        id: 'small-world-r-spy4',
        prompt: 'Spot the colorful trim in the queue scenery. Find something pink, something blue and something green.',
        hint: 'In 2021 new colors were added to the queue scenery to keep it fresh and bright.',
      },
      // source: SW_TPD. evidence: "A renovation that completed in 2005 added a replica of the Disneyland clock to the indoor queue area"
      {
        type: 'spy',
        id: 'small-world-r-spy5',
        prompt: 'Find the giant clock tower near where the boats load.',
        hint: 'It’s a copy of the famous clock on Disneyland’s “small world” building. It was added here in a 2005 renovation.',
      },
      // source: SW_NT25. evidence: the clock tower sits above a "smiling clock face."
      {
        type: 'spy',
        id: 'small-world-r-spy6',
        prompt: 'Look closely at the clock tower. Can you find its smiling face?',
        hint: 'The clock smiles at every boat that sails past it.',
      },
      // source: SW_NT25. evidence: "glittery numbers 0 through 9." / the "3" had broken partly off and was reattached
      {
        type: 'spy',
        id: 'small-world-r-spy7',
        prompt: 'Find the glittery numbers 0 through 9 near the clock face. Which number is your favorite?',
        hint: 'In 2025 the “3” broke partly off. It was carefully reattached and touched up.',
      },
      // source: SW_NT21. evidence: "Each side of the clocktower is now a different bright color."
      {
        type: 'spy',
        id: 'small-world-r-spy8',
        prompt: 'What color is each side of the clock tower you can see?',
        hint: 'Since 2021 the front is blue and the sides are green and pink. Before that it was white and gold.',
      },
      // source: SW_TP. evidence: "The windows at Pinocchio Village Haus overlook the queue and the ride."
      {
        type: 'spy',
        id: 'small-world-r-spy9',
        prompt: 'Look around for restaurant windows peeking down at the boats.',
        hint: 'Windows at Pinocchio Village Haus overlook this queue and the ride, so diners can watch boats float by.',
      },
      // source: SW_TP. evidence: "Each row can accommodate 3-5 people, depending on size."
      {
        type: 'spy',
        id: 'small-world-r-spy10',
        prompt: 'Watch a boat load. How many people squeeze into one row?',
        hint: 'Each row of the boat fits about 3 to 5 people, depending on size.',
      },
      // source: SW_TP. evidence: "you pass underneath the ride operators who wave as you start out."
      {
        type: 'spy',
        id: 'small-world-r-spy11',
        prompt: 'Right before you sail, look up for the cast members waving you off.',
        hint: 'Every boat passes under the ride operators, who wave as you start your trip around the world.',
      },
      // evidence: "the colorful clock tower as boats pass by."
      {
        type: 'photo',
        id: 'small-world-r-photo1',
        prompt: 'From the line, snap a photo of the colorful clock tower as a boat sails past!',
        tip: 'The clock tower stands in the boat loading area.',
        source: SW_NT25,
      },
      // evidence: "In 2021, for the park's 50th anniversary, its facade was repainted in bright colors."
      {
        type: 'photo',
        id: 'small-world-r-photo2',
        prompt:
          'From the line, snap a photo of the super colorful building front. How many colors made it into your picture?',
        source: SW,
      },
      // ---- Trivia ----
      // evidence: "gentle 10-minute journey through all 7 continents"
      {
        type: 'guess',
        id: 'small-world-r1',
        question: 'About how many minutes does the boat ride last?',
        answer: 10,
        min: 2,
        max: 30,
        step: 1,
        unit: 'minutes',
        tolerance: 2,
        explain: 'It’s a gentle trip of about 10 minutes.',
        source: SW_DIS,
      },
      // evidence: "Cruise along the Seven Seaways Waterway"
      {
        type: 'trivia',
        id: 'small-world-r2',
        question: 'What is the name of the waterway your boat sails on?',
        choices: ['The Rivers of America', 'The Seven Seaways Waterway', 'The Happy Canal', 'The Rainbow River'],
        answer: 1,
        explain: 'Your boat cruises along the Seven Seaways Waterway.',
        source: SW_DIS,
      },
      // evidence: "gentle 10-minute journey through all 7 continents"
      {
        type: 'truefalse',
        id: 'small-world-r3',
        statement: 'The boat ride visits all 7 continents.',
        answer: true,
        explain: 'Fact! You sail through all 7 continents in about 10 minutes.',
        source: SW_DIS,
      },
      // evidence: "His wife Alice Davis designed the dolls' costumes."
      {
        type: 'trivia',
        id: 'small-world-r4',
        question: 'Who designed the dolls’ costumes?',
        choices: ['Alice Davis', 'Mary Blair', 'Walt Disney', 'Richard Sherman'],
        answer: 0,
        explain: 'Alice Davis designed the costumes. Her husband, Marc Davis, dreamed up the scenes and characters.',
        source: SW,
      },
      // evidence: "sewed over 300 costumes in all"
      {
        type: 'guess',
        id: 'small-world-r5',
        question: 'Disney seamstresses working with Alice Davis sewed over how many costumes?',
        answer: 300,
        min: 50,
        max: 1000,
        step: 50,
        unit: 'costumes',
        tolerance: 50,
        explain: 'Over 300 costumes, using authentic materials for each region.',
        source: SW_DIS,
      },
      // evidence: "Crump designed the toys and other supplemental figures on display, as well as the original attraction's facade."
      {
        type: 'trivia',
        id: 'small-world-r6',
        question: 'Which Imagineer designed the ride’s toys and its original front?',
        choices: ['Rolly Crump', 'Buzz Lightyear', 'Claude Monet', 'Walt’s brother Roy'],
        answer: 0,
        explain: 'Rolly Crump designed the toys and the original facade.',
        source: SW,
      },
      // evidence: "each country's national anthem to play as riders passed through."
      {
        type: 'trivia',
        id: 'small-world-r7',
        question: 'Before the famous song was written, what did Walt Disney first want to play in each room?',
        choices: ['Each country’s national anthem', 'Total silence', 'Birdsong', 'A marching band'],
        answer: 0,
        explain: 'He first imagined each country’s national anthem. Then he asked for one simple song.',
        source: SW_TP,
      },
      // evidence: "The ride was originally called "children of the world.""
      {
        type: 'trivia',
        id: 'small-world-r8',
        question: 'What was the ride originally called?',
        choices: ['“children of the world”', '“boats of fun”', '“dolls on parade”', '“the world tour”'],
        answer: 0,
        explain: 'It was “children of the world” until the Sherman Brothers wrote the title song.',
        source: SW_MFL,
      },
      // evidence: "A doll in a wheelchair was added in 2023"
      {
        type: 'truefalse',
        id: 'small-world-r9',
        statement: 'A doll in a wheelchair joined the Magic Kingdom ride in 2023.',
        answer: true,
        explain: 'Fact! She was added in 2023.',
        source: SW,
      },
      // evidence: "the dolls stay on, dancing (but not singing) through the evening after the park closes."
      {
        type: 'truefalse',
        id: 'small-world-r10',
        statement: 'After the park closes, the dolls keep dancing but stop singing.',
        answer: true,
        explain: 'Fact! They keep dancing into the evening, just without the song.',
        source: SW_TP,
      },
      // evidence: "each doll has the same face, but a different skin color and costume."
      {
        type: 'truefalse',
        id: 'small-world-r11',
        statement: 'Every doll on the ride has a totally different face.',
        answer: false,
        explain: 'Fiction! The dolls share the same face, with different skin colors and costumes.',
        source: SW_TP,
      },
      // evidence: the ride ends at the "Good-bye Scene," flowers showing parting phrases from different cultures
      {
        type: 'trivia',
        id: 'small-world-r12',
        question: 'What do you see in the very last room as your boat heads out?',
        choices: [
          'A giant birthday cake',
          'Flowers saying goodbye in many languages',
          'A fireworks show',
          'A pirate ship',
        ],
        answer: 1,
        explain: 'The “Good-bye Scene” is full of bright flowers with goodbyes from many cultures.',
        source: SW_MFL,
      },
      // evidence: Richard Sherman wrote the verse in 2023 for the attraction's 60th anniversary
      {
        type: 'trivia',
        id: 'small-world-r13',
        question: 'Who wrote the new verse that was added to the ride’s finale in 2025?',
        choices: ['Richard Sherman', 'Elton John', 'A robot', 'Mary Blair'],
        answer: 0,
        explain: 'Richard Sherman wrote it in 2023 for the ride’s 60th anniversary.',
        source: SW_NTV,
      },
      // evidence: "In 1999, the English moon dolls were replaced with Welsh dolls and the moon was repainted to pink"
      {
        type: 'trivia',
        id: 'small-world-r14',
        question: 'In 1999, the moon in the ride was repainted. What color is it now?',
        choices: ['Pink', 'Green', 'Black', 'Plaid'],
        answer: 0,
        explain: 'It was repainted pink when Welsh dolls replaced the English moon dolls.',
        source: SW,
      },
      // evidence: "The Pom-poms on the Yodeler's belt form a Hidden Mickey."
      {
        type: 'trivia',
        id: 'small-world-r15',
        question: 'Where can you find a Hidden Mickey on the ride?',
        choices: [
          'In the pom-poms on the yodeler’s belt',
          'On the clock’s nose',
          'On the bottom of your boat',
          'In the exit sign',
        ],
        answer: 0,
        explain: 'The pom-poms on the yodeler’s belt make a Hidden Mickey. Keep watch in Europe!',
        source: SW_MFL,
      },
      // evidence: "According to Time, the Sherman Brothers' song "It's a Small World" is the most publicly performed song of all time."
      {
        type: 'truefalse',
        id: 'small-world-x1',
        statement: '“It’s a Small World” has been called the most publicly performed song of all time.',
        answer: true,
        explain: 'Fact! Time magazine called it the most publicly performed song ever.',
        source: 'https://en.wikipedia.org/wiki/It%27s_a_Small_World',
      },
      // evidence: "the song, at 48 seconds long"
      {
        type: 'guess',
        id: 'small-world-x2',
        question: 'How many seconds long is one play of the song?',
        answer: 48,
        min: 10,
        max: 180,
        step: 1,
        unit: 'seconds',
        tolerance: 8,
        explain: 'Just 48 seconds, so it plays over and over!',
        source: 'https://en.wikipedia.org/wiki/It%27s_a_Small_World',
      },
      // evidence: "the song had played nearly 50 million times worldwide on the attractions alone"
      {
        type: 'guess',
        id: 'small-world-x3',
        question: 'By 2014, about how many MILLION times had the song played on the rides worldwide?',
        answer: 50,
        min: 1,
        max: 200,
        step: 1,
        unit: 'million times',
        tolerance: 10,
        explain: 'Nearly 50 million times!',
        source: 'https://en.wikipedia.org/wiki/It%27s_a_Small_World',
      },
      // evidence: "Mary Blair was responsible for the attraction's whimsical design and color styling."
      {
        type: 'trivia',
        id: 'small-world-x4',
        question: 'Which artist created the ride’s colorful look?',
        choices: ['Mary Blair', 'Mary Poppins', 'Walt’s mom', 'Snow White'],
        answer: 0,
        explain: 'Mary Blair gave the ride its whimsical design and colors.',
        source: 'https://en.wikipedia.org/wiki/It%27s_a_Small_World',
      },
      // evidence: "Pepsi approached Disney with a plan for a tribute to UNICEF, the United Nations Children's Fund."
      {
        type: 'trivia',
        id: 'small-world-x5',
        question: 'At the 1964 World’s Fair, the ride was a tribute to which children’s charity?',
        choices: ['The Red Cross', 'UNICEF', 'The Scouts', 'The Zoo'],
        answer: 1,
        explain: 'It honored UNICEF, the United Nations Children’s Fund.',
        source: 'https://en.wikipedia.org/wiki/It%27s_a_Small_World',
      },
      // evidence: "The ride was closed in May 2004 for refurbishment, which included a new entrance"
      {
        type: 'trivia',
        id: 'small-world-x6',
        question: 'What did this ride get when it was refurbished in 2004?',
        choices: ['A roller coaster drop', 'A new entrance', 'A water slide', 'Rocket boats'],
        answer: 1,
        explain: 'The 2004 refurbishment included a new entrance.',
        source: 'https://en.wikipedia.org/wiki/It%27s_a_Small_World',
      },
      // evidence: "The attraction lacks the elaborate facade present on the Disneyland version of the attraction, and it is also smaller in scale"
      {
        type: 'truefalse',
        id: 'small-world-x7',
        statement: 'The Magic Kingdom ride is bigger than the Disneyland version.',
        answer: false,
        explain: 'Fiction! The Magic Kingdom version is smaller in scale.',
        source: 'https://en.wikipedia.org/wiki/It%27s_a_Small_World',
      },
      // evidence: "at the end of the ride, where figures from every nationality sang side-by-side."
      {
        type: 'truefalse',
        id: 'small-world-x8',
        statement: 'At the end of the ride, dolls from all the different countries sing together.',
        answer: true,
        explain: 'Fact! In the finale, figures from every nationality sing side by side.',
        source: 'https://en.wikipedia.org/wiki/It%27s_a_Small_World',
      },
      // evidence: "In 2021, for the park's 50th anniversary, its facade was repainted in bright colors."
      {
        type: 'guess',
        id: 'small-world-x9',
        question: 'For which Magic Kingdom anniversary was the ride’s front repainted in bright colors?',
        answer: 50,
        min: 5,
        max: 100,
        step: 5,
        unit: 'years',
        tolerance: 0,
        explain: 'The 50th anniversary, in 2021.',
        source: 'https://en.wikipedia.org/wiki/It%27s_a_Small_World',
      },
      // evidence: "The ride was closed in May 2004..." / "In 2021, for the park's 50th anniversary, its facade was repainted"
      {
        type: 'order',
        id: 'small-world-x10',
        prompt: 'Put these Magic Kingdom ride moments in order, oldest first.',
        items: ['Ride opens', 'New entrance added', 'Front repainted for the 50th'],
        explain: 'Opened 1971, new entrance in 2004, repainted in 2021.',
        source: 'https://en.wikipedia.org/wiki/It%27s_a_Small_World',
      },
      // ---- Play together ----
      {
        type: 'challenge',
        id: 'small-world-x15',
        prompt: 'Hum the ride’s song without opening your mouth. First person to giggle loses!',
      },
      {
        type: 'challenge',
        id: 'small-world-x16',
        prompt: 'Make up a new verse about your family to the “small world” tune.',
      },
      {
        type: 'challenge',
        id: 'small-world-x18',
        prompt: 'Freeze like one of the ride’s dolls! When someone says “small world,” everyone holds a doll pose.',
      },
      // evidence (SW_MFL): "Sit in the front for clear views on both sides of the boat"
      {
        type: 'wyr',
        id: 'small-world-r-wyr1',
        a: 'Sit in the front row of the boat for the best view',
        b: 'Sit in the back row and watch everyone’s faces light up',
      },
      {
        type: 'emoji',
        id: 'small-world-x23',
        emojis: '🌍 🤏 🎶',
        hint: 'The song this ride is famous for.',
        choices: ['“It’s a Small World”', '“Under the Sea”', '“Heigh-Ho”', '“Let It Go”'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'small-world-x24',
        emojis: '🛶 🌎 🎎',
        hint: 'You’re about to do this!',
        choices: ['A boat ride around the world', 'A train to the mine', 'A flight to Never Land', 'A teacup spin'],
        answer: 0,
      },
    ],
  },
  'seven-dwarfs': {
    facts: [
      // evidence: "Manufactured by Vekoma"
      {
        text: 'The Mine Train roller coaster was built by the ride maker Vekoma.',
        source: 'https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train',
      },
      // evidence: "Length: 2,000 ft (610 m)"
      {
        text: 'The track is about 2,000 feet (610 meters) long.',
        source: 'https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train',
      },
      // evidence: "There are 12 spigots each representing a note on the chromatic scale."
      {
        text: 'Each of the 12 musical spigots in the queue plays a different note of the chromatic scale.',
        source: 'https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train',
      },
      // evidence: "No two ride vehicles are identical: "none of the ride vehicles for Seven Dwarfs Mine Train are the same""
      {
        text: 'No two mine cars are exactly the same. The bolts, wood grain and wear are different on each one.',
        source: SD_WM,
      },
    ],
    quests: [
      // ---- Look around the queue, in walking order ----
      // source: SD_AE. evidence: "impressions left by forest creatures, acorns and sticks."
      {
        type: 'spy',
        id: 'seven-dwarfs-r-spy1',
        prompt: 'On the path in, look down! Find animal tracks, acorns or sticks pressed into the ground.',
        hint: 'Imagineers pressed forest-creature prints into the path, as if Snow White’s woodland friends just walked by.',
      },
      // source: SD_WM. evidence: "these exact vultures actually appeared inside Snow White's Scary Adventures, too."
      {
        type: 'spy',
        id: 'seven-dwarfs-r-spy2',
        prompt: 'Look up at the crane near the mine entrance. Can you spot the two vultures?',
        hint: 'These exact vultures used to perch inside Snow White’s Scary Adventures, the ride that closed in 2012.',
      },
      // source: SD_MV. evidence: "down to the wisteria vine and birdhouse at the front door."
      {
        type: 'spy',
        id: 'seven-dwarfs-r-spy3',
        prompt: 'Find the dwarfs’ cottage. Can you spot the wisteria vine and the birdhouse by the door?',
        hint: 'The cottage copies the movie’s, right down to the wisteria and birdhouse. You’ll ride past it at the very end.',
      },
      // source: SD_WM. evidence: "It made it to the pencil test stage" (the queue song "Music in Your Soup")
      {
        type: 'spy',
        id: 'seven-dwarfs-r-spy4',
        prompt: 'Listen to the music playing in the queue. Is it “Heigh-Ho”?',
        hint: 'Nope! It’s “Music in Your Soup,” a song written for Snow White in 1937 and then cut. It found a home in this queue.',
      },
      // source: SD_DIS. evidence: "the notes that Doc left for you" / SD_AE: "read the notes the Dwarfs left for you."
      {
        type: 'spy',
        id: 'seven-dwarfs-r-spy5',
        prompt: 'Find the notes the dwarfs left for you. What job do they want help with?',
        hint: 'Doc left notes to put you to work: sorting gems, washing them and more.',
      },
      // source: SD_MV. evidence: "The trough is about 15 feet long and is accessible from both sides."
      {
        type: 'spy',
        id: 'seven-dwarfs-r-spy6',
        prompt: 'At the long wooden trough, find a gem and match it to others by color and shape.',
        hint: 'This jewel sluice is about 15 feet long, and you can play from both sides.',
      },
      // source: SD. evidence: "a gem washing station with wooden taps carved to woodland animals." / "There are 12 spigots each representing a note on the chromatic scale."
      {
        type: 'spy',
        id: 'seven-dwarfs-x12',
        prompt:
          'At the gem washing station, find the 12 wooden spigots carved like woodland animals. Which is your favorite?',
        hint: 'Each spigot plays a different note, so together they can play tunes you’ll recognize.',
      },
      // source: SD_AE. evidence: "Vault" is carved above the doorway, referencing Dopey locking the vault in the film.
      {
        type: 'spy',
        id: 'seven-dwarfs-r-spy7',
        prompt: 'Find the word “Vault” carved above a doorway.',
        hint: 'It’s a nod to the dwarfs’ jewel vault, the one Dopey locks up in the movie.',
      },
      // source: SD_WM. evidence: "an exact replica of that very same key"
      {
        type: 'spy',
        id: 'seven-dwarfs-r-spy8',
        prompt: 'Now find the key hanging on a peg beside the vault door.',
        hint: 'It’s an exact copy of the vault key from the film.',
      },
      // source: SD_AE. evidence: "Turn the barrels and look up to see the kaleidoscope effects on the ceiling."
      {
        type: 'spy',
        id: 'seven-dwarfs-r-spy10',
        prompt: 'Spin the gem barrels, then look up! What happens to the ceiling?',
        hint: 'The barrels make kaleidoscope patterns overhead. When all seven spin together, the effect is the strongest.',
      },
      // source: SD_AM. evidence: "Picks, shovels, barrels and hoists are scattered throughout the queue tunnel"
      {
        type: 'spy',
        id: 'seven-dwarfs-r-spy11',
        prompt: 'In the queue tunnel, spot a pick, a shovel, a barrel and a hoist.',
        hint: 'Mining tools are scattered all the way to the loading area, as if the dwarfs just set them down.',
      },
      // source: SD_MV. evidence: "Hand-hammered metal bands and nails are used to bind the wood."
      {
        type: 'spy',
        id: 'seven-dwarfs-r-spy12',
        prompt: 'When a train pulls in, look for the metal bands and nails holding the wooden cars together.',
        hint: 'The cars are styled as if the dwarfs made them by hand, with hand-hammered metal bands and nails.',
      },
      // source: SD. evidence: "This new technology simulates the swaying and tipping one would expect to experience in a mine cart."
      {
        type: 'spy',
        id: 'seven-dwarfs-r-spy13',
        prompt: 'Watch a train roll out. Can you see the cars sway side to side?',
        hint: 'Each car swings on its own, like a real mine cart. Imagineers patented this ride system.',
      },
      // source: SD_AE. evidence: "Turn the barrels and look up to see the kaleidoscope effects on the ceiling."
      {
        type: 'photo',
        id: 'seven-dwarfs-r-photo1',
        prompt: 'From the line, spin the gem barrels and snap a photo of the sparkly ceiling!',
        source: SD_AE,
      },
      // source: SD. evidence: "a gem washing station with wooden taps carved to woodland animals."
      {
        type: 'photo',
        id: 'seven-dwarfs-r-photo2',
        prompt: 'From the line, snap a photo of your favorite animal spigot at the gem washing station.',
        source: SD,
      },
      // ---- Trivia ----
      // evidence: "38in (97cm) or taller"
      {
        type: 'guess',
        id: 'seven-dwarfs-r1',
        question: 'How many inches tall do you need to be to ride the Mine Train?',
        answer: 38,
        min: 30,
        max: 60,
        step: 1,
        unit: 'inches',
        tolerance: 2,
        explain: 'Riders must be 38 inches (97 cm) or taller.',
        source: SD_DIS,
      },
      // evidence: "the Seven Dwarfs, whistling and singing while they work"
      {
        type: 'trivia',
        id: 'seven-dwarfs-r2',
        question: 'What are the dwarfs doing when you pass them in the mine?',
        choices: ['Sleeping', 'Whistling and singing while they work', 'Eating soup', 'Playing cards'],
        answer: 1,
        explain: 'They whistle and sing while they dig for jewels.',
        source: SD_DIS,
      },
      // evidence: "glimpse an incredible view of Fantasyland"
      {
        type: 'truefalse',
        id: 'seven-dwarfs-r3',
        statement: 'Near the top of the mountain you can glimpse a view of Fantasyland.',
        answer: true,
        explain: 'Fact! Look out at the top of the lift for a great view.',
        source: SD_DIS,
      },
      // evidence: "Riders are arranged 2 across in 2 rows for a total of 20 riders per train."
      {
        type: 'guess',
        id: 'seven-dwarfs-r4',
        question: 'How many riders fit on one Mine Train?',
        answer: 20,
        min: 4,
        max: 60,
        step: 1,
        unit: 'riders',
        tolerance: 2,
        explain: '20 riders: five cars, each with 2 rows of 2.',
        source: SD,
      },
      // evidence: "Inversions: 0"
      {
        type: 'truefalse',
        id: 'seven-dwarfs-r5',
        statement: 'The Mine Train turns you upside down.',
        answer: false,
        explain: 'Fiction! There are zero upside-down loops. It’s a family coaster.',
        source: SD,
      },
      // evidence: Snow White, Dopey, and Sneezy "were created for this attraction."
      {
        type: 'trivia',
        id: 'seven-dwarfs-r6',
        question: 'Which three figures in the cottage scene were brand new for this ride?',
        choices: ['Snow White, Dopey and Sneezy', 'Doc, Grumpy and Happy', 'Sleepy, Bashful and Doc', 'The vultures'],
        answer: 0,
        explain:
          'Snow White, Dopey and Sneezy were made for this ride. The other dwarfs came from Snow White’s Scary Adventures.',
        source: SD_AE,
      },
      // evidence: "Doc's high range of motion, two-degree-of-freedom wrist."
      {
        type: 'trivia',
        id: 'seven-dwarfs-r7',
        question: 'Which dwarf figure got a super-flexible wrist when it moved to this ride?',
        choices: ['Doc', 'Dopey', 'Sleepy', 'Grumpy'],
        answer: 0,
        explain: 'Doc got a high range of motion with a two-way bending wrist.',
        source: SD,
      },
      // evidence: "rotoscoped from the scene in the original film where the Dwarfs march across a log bridge."
      {
        type: 'trivia',
        id: 'seven-dwarfs-r8',
        question: 'Where did the dwarf shadows you see on the lift hill come from?',
        choices: ['Traced from the film’s log-bridge march', 'Real dwarfs walking by', 'A puppet show', 'A video game'],
        answer: 0,
        explain: 'They were rotoscoped (traced) from the film’s scene of the dwarfs marching across a log bridge.',
        source: SD_AE,
      },
      // evidence: "made up of three sparkling gems" / sits above Grumpy's head inside the mine
      {
        type: 'trivia',
        id: 'seven-dwarfs-r9',
        question: 'Inside the mine, a Hidden Mickey made of three gems sits above which dwarf’s head?',
        choices: ['Grumpy', 'Happy', 'Bashful', 'Sneezy'],
        answer: 0,
        explain: 'Look above Grumpy’s head for three sparkling gems.',
        source: SD_WM,
      },
      // evidence: "Oswald is carved into a ceiling beam."
      {
        type: 'truefalse',
        id: 'seven-dwarfs-r10',
        statement: 'Oswald the Lucky Rabbit is carved into a ceiling beam as you climb the lift inside the mine.',
        answer: true,
        explain: 'Fact! A Hidden Oswald hides on a beam on the lift hill.',
        source: SD_WM,
      },
      // evidence: "with the figures of two miners striking an anvil."
      {
        type: 'trivia',
        id: 'seven-dwarfs-r11',
        question: 'At Doc’s workstation in the mine, what does the carved clock show?',
        choices: ['Two miners striking an anvil', 'A cuckoo bird', 'A dancing apple', 'A sleeping cat'],
        answer: 0,
        explain: 'Two little miners strike an anvil, and that kicks off “Heigh-Ho.”',
        source: SD_MV,
      },
      // evidence: "The ride soft-opened in the Magic Kingdom on May 21, 2014" / "fully opening a week later on May 28, 2014"
      {
        type: 'truefalse',
        id: 'seven-dwarfs-r12',
        statement: 'Guests were riding the Mine Train a week before its official opening day.',
        answer: true,
        explain: 'Fact! It soft-opened May 21, 2014, and officially opened May 28.',
        source: SD,
      },
      // evidence: "the mine train loops back to cross a pool at the bottom of a waterfall."
      {
        type: 'trivia',
        id: 'seven-dwarfs-r13',
        question: 'Near the end of the ride, what does the train cross?',
        choices: ['A pool at the bottom of a waterfall', 'A rope bridge over lava', 'A busy road', 'A frozen lake'],
        answer: 0,
        explain: 'The train loops back to cross a pool at the foot of a waterfall.',
        source: SD_MV,
      },
      // evidence: "Drop: 39 ft (12 m)"
      {
        type: 'guess',
        id: 'seven-dwarfs-x1',
        question: 'How many feet is the Mine Train’s biggest drop?',
        answer: 39,
        min: 5,
        max: 150,
        step: 1,
        unit: 'feet',
        tolerance: 6,
        explain: 'The drop is 39 feet (12 m).',
        source: 'https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train',
      },
      // evidence: "Duration: 2:50"
      {
        type: 'trivia',
        id: 'seven-dwarfs-x2',
        question: 'About how long is the ride?',
        choices: ['30 seconds', 'Under 3 minutes', '10 minutes', 'Half an hour'],
        answer: 1,
        explain: 'It lasts 2 minutes and 50 seconds.',
        source: 'https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train',
      },
      // evidence: "Length: 2,000 ft (610 m)"
      {
        type: 'guess',
        id: 'seven-dwarfs-x3',
        question: 'How many feet long is the track?',
        answer: 2000,
        min: 200,
        max: 6000,
        step: 100,
        unit: 'feet',
        tolerance: 300,
        explain: 'About 2,000 feet (610 m) of track!',
        source: 'https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train',
      },
      // evidence: "replacing 20,000 Leagues Under the Sea: Submarine Voyage (1971-94)"
      {
        type: 'trivia',
        id: 'seven-dwarfs-x4',
        question: 'Long ago, this spot was home to a ride with what kind of vehicle?',
        choices: ['Submarines', 'Rocket ships', 'Hot-air balloons', 'Horses'],
        answer: 0,
        explain: 'It replaced 20,000 Leagues Under the Sea: Submarine Voyage (1971–94).',
        source: 'https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train',
      },
      // evidence: "both versions have a hut with Snow White dancing"
      {
        type: 'truefalse',
        id: 'seven-dwarfs-x5',
        statement: 'At the end of the ride you pass a cottage where Snow White is dancing.',
        answer: true,
        explain: 'Fact! Snow White dances in the dwarfs’ cottage.',
        source: 'https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train',
      },
      // evidence: "replacing 20,000 Leagues Under the Sea: Submarine Voyage (1971-94)" / "fully opening a week later on May 28, 2014" / "the Shanghai version opened on June 16, 2016"
      {
        type: 'order',
        id: 'seven-dwarfs-x10',
        prompt: 'Put these in order, oldest first.',
        items: [
          'Submarine ride opens on this spot',
          'Mine Train opens at Magic Kingdom',
          'Shanghai’s Mine Train opens',
        ],
        explain: 'Submarines in 1971, the Mine Train in 2014, and Shanghai’s twin in 2016.',
        source: 'https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train',
      },
      // evidence: "5 trains with 5 cars"
      {
        type: 'guess',
        id: 'seven-dwarfs-x11',
        question: 'How many trains run on the Mine Train?',
        answer: 5,
        min: 1,
        max: 12,
        step: 1,
        unit: 'trains',
        tolerance: 0,
        explain: '5 trains, each with 5 cars.',
        source: 'https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train',
      },
      // ---- Play together ----
      {
        type: 'challenge',
        id: 'seven-dwarfs-r-ch1',
        prompt:
          'You’ll pass all seven dwarfs in the mine. Race to name all seven before your group reaches the gem barrels!',
      },
      {
        type: 'challenge',
        id: 'seven-dwarfs-x16',
        prompt: 'March in place and sing “Heigh-Ho,” the song the mine starts when Doc’s clock strikes.',
      },
      {
        type: 'challenge',
        id: 'seven-dwarfs-x17',
        prompt:
          'Act out one of the dwarfs you’ll see in the mine and let the group guess which one. Try Sneezy or Sleepy!',
      },
      {
        type: 'challenge',
        id: 'seven-dwarfs-x18',
        prompt: 'The dwarfs whistle while they work in the mine. Who can whistle a tune the longest?',
      },
      {
        type: 'wyr',
        id: 'seven-dwarfs-r-wyr1',
        a: 'Ride in the front car of the mine train',
        b: 'Ride in the back car',
      },
      {
        type: 'wyr',
        id: 'seven-dwarfs-r-wyr2',
        a: 'Linger in the glittering mine with the dwarfs',
        b: 'Race down the mountain in the open air',
      },
      {
        type: 'emoji',
        id: 'seven-dwarfs-x24',
        emojis: '😴 💤 🛏️',
        hint: 'You’ll spot this dwarf in the mine and the cottage. He can’t keep his eyes open.',
        choices: ['Dopey', 'Sleepy', 'Doc', 'Bashful'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'seven-dwarfs-x25',
        emojis: '🪞 🧙‍♀️ 🍎',
        hint: 'At the end of the ride she watches from a cottage window and cackles.',
        choices: ['The Wicked Queen', 'Ursula', 'The Queen of Hearts', 'Maleficent'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'seven-dwarfs-x26',
        emojis: '😠 💪 🧔',
        hint: 'Look above his head in the mine for a Hidden Mickey.',
        choices: ['Happy', 'Grumpy', 'Sneezy', 'Doc'],
        answer: 1,
      },
    ],
  },
  'little-mermaid': {
    facts: [
      // evidence: "Guests board one of 105 Omnimover vehicles themed as large, colorful clamshells."
      {
        text: 'The clamshells are an Omnimover ride system, a chain of vehicles that never stops moving.',
        source: 'https://en.wikipedia.org/wiki/Under_the_Sea:_Journey_of_the_Little_Mermaid',
      },
      // evidence: "The Little Mermaid: Ariel's Undersea Adventure opened on June 3, 2011."
      {
        text: 'A sister version of this ride opened at Disney California Adventure in 2011.',
        source: 'https://en.wikipedia.org/wiki/Under_the_Sea:_Journey_of_the_Little_Mermaid',
      },
      // evidence: "There are 183 characters in Under the Sea ~ Journey of the Little Mermaid."
      {
        text: 'There are 183 characters in the ride, and 128 of them are in the “Under the Sea” scene.',
        source: LM_AM,
      },
    ],
    quests: [
      // ---- Look around the queue, in walking order ----
      // source: LM_RG. evidence: "A hand-carved Ariel is attached to the front of the ship."
      {
        type: 'spy',
        id: 'little-mermaid-r-spy1',
        prompt: 'Near the entrance, find the shipwreck. Who is carved on the front of the ship?',
        hint: 'A hand-carved Ariel figurehead rides on the front of the wrecked ship.',
      },
      // source: LM. evidence: "The Magic Kingdom attraction has a different exterior and queue, featuring Prince Eric's castle and the surrounding cliffs."
      {
        type: 'spy',
        id: 'little-mermaid-x11',
        prompt: 'Look up and find Prince Eric’s castle on the cliffs. Can you spot a tower?',
        hint: 'Only the Magic Kingdom version has Eric’s castle and cliffs. The California ride has a different outside.',
      },
      // source: LM. evidence: "Guests enter through a cavern at low tide"
      {
        type: 'spy',
        id: 'little-mermaid-r-spy2',
        prompt: 'Find the cavern opening where the line heads into the rocks.',
        hint: 'The story says you’re slipping into a seaside cavern at low tide, on your way under the sea.',
      },
      // source: LM_DB. evidence: "The outdoor queue winds through a rock-work grotto with waterfalls"
      {
        type: 'spy',
        id: 'little-mermaid-r-spy3',
        prompt: 'Listen for rushing water. Find a waterfall in the rockwork.',
        hint: 'The outdoor queue winds through a rocky grotto full of waterfalls.',
      },
      // source: LM_AM. evidence: "sea life, including barnacles and starfish, appear to help guide them to their destination."
      {
        type: 'spy',
        id: 'little-mermaid-r-spy4',
        prompt: 'Spot barnacles and starfish on the rocks.',
        hint: 'Imagineers placed sea life along the path to guide you toward Ariel’s world.',
      },
      // source: LM_AE. evidence: "Guests can view beautiful waterfalls and shells"
      {
        type: 'spy',
        id: 'little-mermaid-r-spy5',
        prompt: 'Find a seashell tucked into the queue. What color is it?',
        hint: 'Shells are hidden all along the way, like treasures washed up by the tide.',
      },
      // source: LM_AE. evidence: "When you see them on the screens, they will stop with thingamabobs they find." / LM_AM: games of "trash" or "treasure"
      {
        type: 'spy',
        id: 'little-mermaid-r-spy6',
        prompt: 'Find the crabs on the screens. When they stop with a “thingamabob,” point if you think it’s treasure!',
        hint: 'The crabs play “trash or treasure” with you, sorting Scuttle’s collection of human stuff.',
      },
      // source: LM_AE. evidence: "As you enter a grotto, you'll see Scuttle who tells stories and jokes." / LM_BM: "the Scuttle animatronic has returned to the queue"
      {
        type: 'spy',
        id: 'little-mermaid-r-spy7',
        prompt: 'Inside, find Scuttle the seagull and listen to his jokes.',
        hint: 'Scuttle’s Audio-Animatronic jokes about the human world. He disappeared for a while and came back in 2023.',
      },
      // source: LM_AE. evidence: "it would reach a depth of more than 14 fathoms" / LM: "The mural in the loading area is also substantially different"
      {
        type: 'spy',
        id: 'little-mermaid-r-spy8',
        prompt: 'At the loading area, find the giant mural.',
        hint: 'Turned on its side, it would reach more than 14 fathoms deep! It’s different from the mural in California.',
      },
      // source: LM. evidence: "The attraction offers 103 standard clamshells, as well as two wheelchair-accessible vehicles"
      {
        type: 'spy',
        id: 'little-mermaid-r-spy9',
        prompt: 'Watch the clamshells glide by without stopping. How many can you count?',
        hint: 'There are 105 in all: 103 standard clamshells plus two that are wheelchair accessible.',
      },
      // source: LM_AE. evidence: "you tip backwards slightly to go under the water"
      {
        type: 'spy',
        id: 'little-mermaid-r-spy10',
        prompt: 'Watch a clamshell as it leaves the station. Does it tip back?',
        hint: 'The clamshells tip backward slightly so it feels like you’re sinking under the sea.',
      },
      // source: LM. evidence: "featuring Prince Eric's castle and the surrounding cliffs."
      {
        type: 'photo',
        id: 'little-mermaid-r-photo1',
        prompt: 'From the line, strike a mermaid pose with Prince Eric’s castle behind you!',
        tip: 'Look up at the castle and cliffs before you head into the cavern.',
        source: LM,
      },
      // source: LM_RG. evidence: "A shipwreck with Ariel at the helm sits outside the attraction's entrance."
      {
        type: 'photo',
        id: 'little-mermaid-r-photo2',
        prompt: 'From the line, snap a photo of the Ariel figurehead on the shipwreck.',
        tip: 'The shipwreck sits by the entrance.',
        source: LM_RG,
      },
      // ---- Trivia ----
      // evidence: "Scuttle greets the Guests and makes a muddled attempt to tell them all about Ariel's story"
      {
        type: 'trivia',
        id: 'little-mermaid-r1',
        question: 'Who greets you at the start of the ride and tries (badly) to tell Ariel’s story?',
        choices: ['Scuttle', 'Ursula', 'Max the dog', 'Grimsby'],
        answer: 0,
        explain: 'Scuttle makes a muddled attempt to tell you all about Ariel.',
        source: LM,
      },
      // evidence: "The underwater passage opens to reveal Ariel in her grotto, singing "Part of Your World.""
      {
        type: 'trivia',
        id: 'little-mermaid-r2',
        question: 'What song is Ariel singing when you find her in her grotto?',
        choices: ['“Part of Your World”', '“Under the Sea”', '“Kiss the Girl”', '“Heigh-Ho”'],
        answer: 0,
        explain: 'She sings “Part of Your World” among her treasures.',
        source: LM,
      },
      // evidence: "There are 183 characters in Under the Sea ~ Journey of the Little Mermaid."
      {
        type: 'guess',
        id: 'little-mermaid-r3',
        question: 'How many characters are in the whole ride?',
        answer: 183,
        min: 20,
        max: 400,
        step: 1,
        unit: 'characters',
        tolerance: 20,
        explain: '183 characters!',
        source: LM_AM,
      },
      // evidence: "More than 70 percent (128, to be exact) are featured in the "Under the Sea" scene."
      {
        type: 'trivia',
        id: 'little-mermaid-r4',
        question: 'More than 70 percent of the ride’s characters appear in which scene?',
        choices: ['Ursula’s lair', '“Under the Sea”', 'The wedding', 'Ariel’s grotto'],
        answer: 1,
        explain: '128 of them party in the “Under the Sea” scene.',
        source: LM_AM,
      },
      // evidence: "find Ursula singing "Poor, Unfortunate Souls" inside, standing at her crystal ball"
      {
        type: 'trivia',
        id: 'little-mermaid-r5',
        question: 'What is Ursula standing at while she sings “Poor Unfortunate Souls”?',
        choices: ['Her crystal ball', 'A piano', 'A treasure chest', 'A ship’s wheel'],
        answer: 0,
        explain: 'She stands at her crystal ball.',
        source: LM,
      },
      // evidence: "Ursula the sea witch, who looms 7.5 feet tall and 12 feet wide!"
      {
        type: 'guess',
        id: 'little-mermaid-r6',
        question: 'How many feet tall is the Ursula figure?',
        answer: 7.5,
        min: 2,
        max: 20,
        step: 0.5,
        unit: 'feet',
        tolerance: 1,
        explain: 'She looms 7.5 feet tall!',
        source: LM_DIS,
      },
      // evidence: "Ursula the sea witch, who looms 7.5 feet tall and 12 feet wide!"
      {
        type: 'truefalse',
        id: 'little-mermaid-r7',
        statement: 'The Ursula figure is wider than she is tall.',
        answer: true,
        explain: 'Fact! She’s 12 feet wide and 7.5 feet tall.',
        source: LM_DIS,
      },
      // evidence: "Ahead, a vortex of light surrounds Ariel as she trades her voice for a pair of human legs."
      {
        type: 'trivia',
        id: 'little-mermaid-r8',
        question: 'What surrounds Ariel when she trades her voice for legs?',
        choices: ['A vortex of light', 'A school of fish', 'A rain cloud', 'Bubbles shaped like hearts'],
        answer: 0,
        explain: 'A swirling vortex of light surrounds her.',
        source: LM,
      },
      // evidence: "Sebastian sings "Kiss the Girl" while Eric and Ariel sit together in a boat"
      {
        type: 'trivia',
        id: 'little-mermaid-r9',
        question: 'Where are Ariel and Eric sitting during “Kiss the Girl”?',
        choices: ['In a boat', 'On a beach towel', 'On a carousel', 'On a throne'],
        answer: 0,
        explain: 'They sit together in a boat while Sebastian sings.',
        source: LM,
      },
      // evidence: "King Triton, Sebastian, Flounder, and several sea creatures celebrate the wedding of Ariel and Eric."
      {
        type: 'truefalse',
        id: 'little-mermaid-r10',
        statement: 'The ride ends with a wedding celebration for Ariel and Eric.',
        answer: true,
        explain: 'Fact! King Triton, Sebastian, Flounder and friends celebrate the wedding.',
        source: LM,
      },
      // evidence: "there is no actual water and you will not get wet."
      {
        type: 'truefalse',
        id: 'little-mermaid-r11',
        statement: 'You’ll get wet when your clamshell goes “under the sea.”',
        answer: false,
        explain: 'Fiction! There’s no actual water. It’s all Imagineering magic.',
        source: LM_DIS,
      },
      // evidence: "Skulk past a sinister eel-infested lair"
      {
        type: 'trivia',
        id: 'little-mermaid-r12',
        question: 'What creatures fill the sinister lair you skulk past?',
        choices: ['Eels', 'Penguins', 'Turtles', 'Seahorses'],
        answer: 0,
        explain: 'It’s an eel-infested lair, home of Flotsam and Jetsam.',
        source: LM_DIS,
      },
      // evidence: "More than 20,000 live and artificial plants decorate the attraction, inside and out."
      {
        type: 'guess',
        id: 'little-mermaid-r13',
        question: 'About how many live and artificial plants decorate this ride, inside and out?',
        answer: 20000,
        min: 1000,
        max: 50000,
        step: 1000,
        unit: 'plants',
        tolerance: 4000,
        explain: 'More than 20,000 plants!',
        source: LM_AM,
      },
      // evidence: "Under the Sea: Journey of the Little Mermaid opened on December 6, 2012."
      {
        type: 'guess',
        id: 'little-mermaid-r14',
        question: 'In what year did this ride open at Magic Kingdom?',
        answer: 2012,
        min: 1990,
        max: 2026,
        step: 1,
        unit: '',
        tolerance: 1,
        explain: 'It opened December 6, 2012.',
        source: LM,
      },
      // evidence: "Up to three per clamshell."
      {
        type: 'trivia',
        id: 'little-mermaid-r15',
        question: 'How many guests can ride in one clamshell?',
        choices: ['Just 1', 'Up to 3', 'Up to 8', 'Up to 12'],
        answer: 1,
        explain: 'Up to three guests per clamshell.',
        source: LM_RG,
      },
      // evidence: "said Chris Beatty, creative director for New Fantasyland."
      {
        type: 'trivia',
        id: 'little-mermaid-r16',
        question: 'Imagineer Chris Beatty helped bring this ride to life. What was his job?',
        choices: ['Creative director for New Fantasyland', 'Ride photographer', 'Head chef', 'Parade drummer'],
        answer: 0,
        explain: 'He was the creative director for New Fantasyland.',
        source: LM_AM,
      },
      // evidence: "Any Height"
      {
        type: 'truefalse',
        id: 'little-mermaid-r17',
        statement: 'There is no height requirement for this ride.',
        answer: true,
        explain: 'Fact! Any height can dive in.',
        source: LM_DIS,
      },
      // evidence: "Guests board one of 105 Omnimover vehicles themed as large, colorful clamshells"
      {
        type: 'trivia',
        id: 'little-mermaid-r18',
        question: 'What is the name of the ride system that moves the clamshells?',
        choices: ['Omnimover', 'Hydro-Wheel', 'Sea-Track 3000', 'Bubble Belt'],
        answer: 0,
        explain: 'It’s an Omnimover: a long chain of vehicles that keeps moving.',
        source: LM,
      },
      // evidence: songs "Part of Your World," "Under the Sea," "Poor, Unfortunate Souls," "Kiss the Girl"
      {
        type: 'trivia',
        id: 'little-mermaid-x9',
        question: 'Which of these songs do you hear on this ride?',
        choices: ['“Kiss the Girl”', '“Let It Go”', '“You Can Fly!”', '“Heigh-Ho”'],
        answer: 0,
        explain: 'The ride features “Kiss the Girl,” plus “Under the Sea,” “Part of Your World” and more.',
        source: 'https://en.wikipedia.org/wiki/Under_the_Sea:_Journey_of_the_Little_Mermaid',
      },
      // evidence: "the underwater passage opens to reveal Ariel in her grotto."
      {
        type: 'trivia',
        id: 'little-mermaid-x10',
        question: 'Where do you first see Ariel on the ride?',
        choices: ['On a ship', 'In her grotto', 'In a castle', 'On the beach'],
        answer: 1,
        explain: 'The passage opens to reveal Ariel in her grotto.',
        source: 'https://en.wikipedia.org/wiki/Under_the_Sea:_Journey_of_the_Little_Mermaid',
      },
      // evidence: Ariel in her grotto "singing "Part of Your World."" / Sebastian "through the song "Under the Sea."" / Ursula "Poor, Unfortunate Souls" / "Sebastian sings "Kiss the Girl"" / "celebrate the wedding of Ariel and Eric."
      {
        type: 'order',
        id: 'little-mermaid-x8',
        prompt: 'Put the ride’s scenes in order, first to last.',
        items: [
          'Ariel in her grotto',
          '“Under the Sea” with Sebastian',
          'Ursula’s lair',
          '“Kiss the Girl” lagoon',
          'The wedding',
        ],
        explain: 'Grotto, Under the Sea, Ursula, Kiss the Girl, then the wedding finale.',
        source: 'https://en.wikipedia.org/wiki/Under_the_Sea:_Journey_of_the_Little_Mermaid',
      },
      // ---- Play together ----
      {
        type: 'challenge',
        id: 'little-mermaid-x18',
        prompt: 'Sing “Under the Sea” together in your best Sebastian voice, just like the ride’s big number.',
      },
      {
        type: 'challenge',
        id: 'little-mermaid-r-ch1',
        prompt:
          'Scuttle tells a muddled version of Ariel’s story at the start of the ride. Take turns telling the ride’s story, but sneak in one silly wrong detail like Scuttle!',
      },
      {
        type: 'challenge',
        id: 'little-mermaid-r-ch2',
        prompt:
          'Ariel trades her voice in this ride. Without talking, use hand signals to show which scene you’re most excited for!',
      },
      {
        type: 'wyr',
        id: 'little-mermaid-r-wyr1',
        a: 'Hang out in Ariel’s treasure-filled grotto',
        b: 'Dance with the fish in the “Under the Sea” scene',
      },
      {
        type: 'wyr',
        id: 'little-mermaid-r-wyr2',
        a: 'Float past giant Ursula in her lair',
        b: 'Drift through the moonlit “Kiss the Girl” lagoon',
      },
      {
        type: 'emoji',
        id: 'little-mermaid-x23',
        emojis: '🦀 🎵 🌊',
        hint: 'He conducts every singing, dancing fish in the ride.',
        choices: ['Flounder', 'Sebastian', 'Scuttle', 'Max'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'little-mermaid-x24',
        emojis: '🐙 🧙‍♀️ 🐚',
        hint: 'In this ride she’s 7.5 feet tall!',
        choices: ['Ursula', 'The Wicked Queen', 'Maleficent', 'Cruella'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'little-mermaid-x26',
        emojis: '🔱 👑 🌊',
        hint: 'He celebrates at the wedding finale.',
        choices: ['Prince Eric', 'King Triton', 'Neptune the Fish', 'Grimsby'],
        answer: 1,
      },
    ],
  },
  dumbo: {
    facts: [
      // evidence: "The original attraction opened at Disneyland on August 16, 1955."
      {
        text: 'The first Dumbo ride opened at Disneyland on August 16, 1955.',
        source: 'https://en.wikipedia.org/wiki/Dumbo_the_Flying_Elephant',
      },
      // evidence: "Inside guests receive ticket-themed pagers where they can wait until prompted."
      {
        text: 'Inside the Big Top queue, families get circus-ticket pagers that buzz when it’s time to ride.',
        source: 'https://en.wikipedia.org/wiki/Dumbo_the_Flying_Elephant',
      },
      // evidence: "the utilidors running directly below the attraction prevented the installation of water pipes"
      {
        text: 'The old Dumbo had no fountains because the utilidor tunnels underneath blocked the water pipes. The 2012 version finally got them.',
        source: DU_FAN,
      },
    ],
    quests: [
      // ---- Look around the queue, in walking order ----
      // source: DU. evidence: "Starting in 2012, Magic Kingdom's Timothy currently spins with his magic feather on top of the attraction's marquee."
      {
        type: 'spy',
        id: 'dumbo-r-spy1',
        prompt: 'At the entrance, look up at the marquee. Who is spinning on top?',
        hint: 'Timothy Q. Mouse, holding his magic feather! He used to sit in the middle of the ride and moved up here in 2012.',
      },
      // source: DU_PS. evidence: "There is a Dumbo ride vehicle between the two Dumbo the Flying Elephant rides"
      {
        type: 'spy',
        id: 'dumbo-r-spy2',
        prompt: 'Find the Dumbo parked between the two rides that never takes off.',
        hint: 'It’s a real Dumbo ride vehicle set out just for photos.',
      },
      // source: DU. evidence: "where one spins counterclockwise while the other one spins clockwise."
      {
        type: 'spy',
        id: 'dumbo-r-spy3',
        prompt: 'Watch both rides. Which one spins clockwise?',
        hint: 'Since 2012 there have been two Dumbo rides side by side, spinning opposite ways.',
      },
      // source: DU_FAN. evidence: "it received the water features" / "the utilidors running directly below the attraction prevented the installation of water pipes"
      {
        type: 'spy',
        id: 'dumbo-r-spy4',
        prompt: 'Look under the flying Dumbos for the water fountains.',
        hint: 'The old Dumbo couldn’t have fountains because of tunnels underneath. When it moved in 2012, it finally got them!',
      },
      // source: DU_FAN. evidence: "The attraction also features a new soundtrack and artwork panels at the bottom of the carousels"
      {
        type: 'spy',
        id: 'dumbo-r-spy5',
        prompt: 'Find the artwork panels around the bottom of the ride.',
        hint: 'They came with the 2012 move, along with a brand-new soundtrack.',
      },
      // source: DU_KP. evidence: "the pager for this attraction resembles a Circus ticket" / "it plays a little song"
      {
        type: 'spy',
        id: 'dumbo-x12',
        prompt: 'Inside the big top, look at the pager your family gets. What does it look like?',
        hint: 'It’s designed like a circus ticket. When it plays a little song, it’s time to fly!',
      },
      // source: DU_AE. evidence: "Overhead, Dumbo flies in circles around the center ring"
      {
        type: 'spy',
        id: 'dumbo-r-spy6',
        prompt: 'Look up inside the big top tent. Can you find Dumbo flying in circles?',
        hint: 'A Dumbo figure flies around above the center ring, practicing for the big show.',
      },
      // source: DU_AE. evidence: "press a button to light up the pretend fire" / DU_KP: "the clowns are dressed as fireman"
      {
        type: 'spy',
        id: 'dumbo-r-spy7',
        prompt: 'Find the “burning” building in the play area. Watch for the pretend fire to light up!',
        hint: 'It’s Dumbo’s fire rescue stunt, where clowns dressed as firemen help him jump. A button lights the pretend flames.',
      },
      // source: DU_KP. evidence: "One of the slides is called "The Human Cannonball."" / "It contains a shorter set of stairs that leads directly to the slide."
      {
        type: 'spy',
        id: 'dumbo-r-spy8',
        prompt: 'Find the slide called “The Human Cannonball.”',
        hint: 'It has a shorter set of stairs, perfect for little flyers who don’t want the big climb.',
      },
      // source: DU_KP. evidence: "themed to look like a doghouse for "Sport" the dog"
      {
        type: 'spy',
        id: 'dumbo-r-spy9',
        prompt: 'Find the slide that looks like a doghouse. Whose house is it?',
        hint: 'It belongs to “Sport” the dog.',
      },
      // source: DU_KP. evidence: "look for the pretend box of fireworks and pull the string"
      {
        type: 'spy',
        id: 'dumbo-r-spy10',
        prompt: 'Find the pretend box of fireworks. What happens when someone pulls its string?',
        hint: 'It’s a noisy surprise, made for the play area!',
      },
      // source: DU_AE. evidence: "Spotlights are used to highlight the kids' movements"
      {
        type: 'spy',
        id: 'dumbo-r-spy11',
        prompt: 'Watch the spotlights in the tent. What are they shining on?',
        hint: 'Spotlights highlight kids’ moves, like every step and every slide landing, so everyone is a circus star.',
      },
      // source: DU_KP. evidence: "the center ring of the tent is the place to be" / DU_AE: "the grandstand bleacher seating allows for clear sight lines"
      {
        type: 'spy',
        id: 'dumbo-r-spy12',
        prompt: 'Find the center ring and the grandstand bleachers around it.',
        hint: 'The center ring is for the littlest flyers, and the bleachers let grown-ups watch like a real circus crowd.',
      },
      // source: DU_AE. evidence: "Timothy Q. Mouse, the rodent that befriended Dumbo, announces your time to leave"
      {
        type: 'spy',
        id: 'dumbo-r-spy13',
        prompt: 'Listen for Timothy Q. Mouse on the speakers.',
        hint: 'Timothy announces when it’s time to leave the big top and head to your flight.',
      },
      // source: DU. evidence: "small children can play in the play area themed to Dumbo's fire rescue stunt scene."
      {
        type: 'photo',
        id: 'dumbo-r-photo1',
        prompt: 'From the line, snap an action photo in the fire rescue play area, just like Dumbo’s big stunt!',
        tip: 'The play area is inside the big top tent.',
        source: DU,
      },
      // source: DU. evidence: "Timothy currently spins with his magic feather on top of the attraction's marquee."
      {
        type: 'photo',
        id: 'dumbo-r-photo2',
        prompt: 'From the line, snap a photo of Timothy spinning on top of the marquee.',
        source: DU,
      },
      // ---- Trivia ----
      // evidence: "You can adjust your altitude during your flight, so you can soar high or swoop low."
      {
        type: 'trivia',
        id: 'dumbo-r1',
        question: 'What can you control while you fly your Dumbo?',
        choices: ['How high you fly', 'Which way the ride spins', 'The music', 'How long the ride lasts'],
        answer: 0,
        explain: 'You can adjust your altitude to soar high or swoop low.',
        source: DU_DIS,
      },
      // evidence: "The joystick in front controls the elevation of your elephant."
      {
        type: 'trivia',
        id: 'dumbo-r2',
        question: 'What do you use to make your Dumbo go up and down?',
        choices: ['A joystick', 'A steering wheel', 'Pedals', 'A rope'],
        answer: 0,
        explain: 'The joystick in front controls your elephant’s height.',
        source: DU_PS,
      },
      // evidence: "Any Height"
      {
        type: 'truefalse',
        id: 'dumbo-r3',
        statement: 'Dumbo has no height requirement.',
        answer: true,
        explain: 'Fact! Flyers of any height are welcome.',
        source: DU_DIS,
      },
      // evidence: "Each elephant can hold up to 2 adults or 1 adult and 2 small children."
      {
        type: 'trivia',
        id: 'dumbo-r4',
        question: 'Who can fit in one Dumbo?',
        choices: ['Up to 2 adults, or 1 adult and 2 small kids', 'Only 1 person', '6 adults', 'A whole family of 8'],
        answer: 0,
        explain: 'Up to 2 adults or 1 adult and 2 small children.',
        source: DU_PS,
      },
      // evidence: "the elephants created for this version oddly wore no hats."
      {
        type: 'trivia',
        id: 'dumbo-r5',
        question: 'When this ride soft-opened in 1971, what were the Dumbos missing?',
        choices: ['Their ears', 'Their hats', 'Their tails', 'Their seats'],
        answer: 1,
        explain: 'They oddly wore no hats! Hats were added soon after.',
        source: DU,
      },
      // evidence: "It originally consisted of 10 Dumbos flying around in a circle"
      {
        type: 'guess',
        id: 'dumbo-r6',
        question: 'How many Dumbos flew on the Magic Kingdom ride when it first opened?',
        answer: 10,
        min: 2,
        max: 30,
        step: 1,
        unit: 'Dumbos',
        tolerance: 1,
        explain: 'It started with 10 Dumbos flying in a circle.',
        source: DU_PS,
      },
      // evidence: "the utilidors running directly below the attraction prevented the installation of water pipes"
      {
        type: 'trivia',
        id: 'dumbo-r7',
        question: 'Why did the old Magic Kingdom Dumbo have no fountains?',
        choices: [
          'Tunnels underneath blocked the water pipes',
          'Dumbo is afraid of water',
          'It was too windy',
          'Nobody thought of it',
        ],
        answer: 0,
        explain: 'The utilidor tunnels right below the ride left no room for water pipes.',
        source: DU_FAN,
      },
      // evidence: "Area: Fantasyland (Storybook Circus; 2012–present)"
      {
        type: 'trivia',
        id: 'dumbo-r8',
        question: 'Which part of Fantasyland is Dumbo in today?',
        choices: ['Storybook Circus', 'Pirate Cove', 'Toon Town', 'Castle Courtyard'],
        answer: 0,
        explain: 'Dumbo has flown over Storybook Circus since 2012.',
        source: DU,
      },
      // evidence: "Mickey's Toontown Fair closed permanently in February 2011"
      {
        type: 'trivia',
        id: 'dumbo-r9',
        question: 'Which land closed in 2011 to make room for Storybook Circus?',
        choices: ['Mickey’s Toontown Fair', 'Tomorrowland', 'Adventureland', 'Liberty Square'],
        answer: 0,
        explain: 'Mickey’s Toontown Fair closed in February 2011, and parts became Storybook Circus.',
        source: DU_FAN,
      },
      // evidence: "an additional effect occurs at night when the fountain lights change colors"
      {
        type: 'truefalse',
        id: 'dumbo-r10',
        statement: 'At night, the lights in Dumbo’s fountains change colors.',
        answer: true,
        explain: 'Fact! The fountain lights change color after dark.',
        source: DU_FAN,
      },
      // evidence: "Sponsor: Scentsy (Florida; 2023–present)"
      {
        type: 'trivia',
        id: 'dumbo-r11',
        question: 'Which company has presented this Dumbo ride since 2023?',
        choices: ['Scentsy', 'Kodak', 'Pepsi', 'Mattel'],
        answer: 0,
        explain: 'Scentsy has sponsored Florida’s Dumbo since 2023.',
        source: DU,
      },
      // evidence: "The ride is a hub and spoke attraction, like an aerial carousel"
      {
        type: 'trivia',
        id: 'dumbo-r12',
        question: 'What kind of ride is Dumbo?',
        choices: ['An aerial carousel', 'A roller coaster', 'A boat ride', 'A drop tower'],
        answer: 0,
        explain: 'It’s a hub-and-spoke ride, like a carousel in the air.',
        source: DU_PS,
      },
      // evidence: "enjoy a circus organ melody"
      {
        type: 'trivia',
        id: 'dumbo-r13',
        question: 'What kind of music plays while you fly?',
        choices: ['A circus organ melody', 'Rock and roll', 'Bagpipes', 'Total silence'],
        answer: 0,
        explain: 'A circus organ melody plays as the Dumbos soar.',
        source: DU_PS,
      },
      // evidence: "The original design of the attraction had 10 ride vehicles" meant to evoke "the alcohol-induced 'pink elephants' scene from the film."
      {
        type: 'truefalse',
        id: 'dumbo-r14',
        statement: 'The very first Dumbo ride design at Disneyland was based on the movie’s “pink elephants” scene.',
        answer: true,
        explain: 'Fact! The original design was meant to look like the pink elephants.',
        source: DU,
      },
      // evidence: it "soft-opened without Timothy and his disco ball" / "Timothy and his ball were eventually added around 1972."
      {
        type: 'truefalse',
        id: 'dumbo-r15',
        statement: 'Timothy Q. Mouse was on the ride from the very first day in 1971.',
        answer: false,
        explain: 'Fiction! The ride soft-opened without him. Timothy arrived around 1972.',
        source: DU,
      },
      // evidence: "Timothy's hot air balloon had red and white stripes, rather than rainbow stripes"
      {
        type: 'trivia',
        id: 'dumbo-r16',
        question: 'On the 1993 version of the ride, what stripes were on Timothy’s hot-air balloon?',
        choices: ['Red and white', 'Rainbow', 'Black and yellow', 'Polka dots'],
        answer: 0,
        explain: 'Red and white stripes, not rainbow ones.',
        source: DU_FAN,
      },
      // evidence: "There were no major changes to the area during the refurbishment." / "everything has been cleaned up and repainted"
      {
        type: 'truefalse',
        id: 'dumbo-r17',
        statement: 'The big top playground got cleaned up and repainted in 2025.',
        answer: true,
        explain: 'Fact! It reopened in July 2025, cleaned and freshly painted.',
        source: DU_MB,
      },
      // evidence: "Length: Approximately 2 minutes"
      {
        type: 'trivia',
        id: 'dumbo-r18',
        question: 'About how long is one Dumbo flight?',
        choices: ['About 2 minutes', 'About 20 seconds', 'About 10 minutes', 'About an hour'],
        answer: 0,
        explain: 'About 2 minutes of flying.',
        source: DU_DG,
      },
      // evidence: "The larger play area is for kids ages 4 to 8, with the smaller area for kids ages 1 to 3."
      {
        type: 'trivia',
        id: 'dumbo-r19',
        question: 'The smaller play area in the big top is made for kids of what ages?',
        choices: ['1 to 3', '10 to 12', '13 to 18', 'Grown-ups only'],
        answer: 0,
        explain: 'The smaller area is for ages 1 to 3, and the larger one is for ages 4 to 8.',
        source: DU_PS,
      },
      // evidence: "The ride was later updated with the 16 vehicles and the new ride mechanism in 1993."
      {
        type: 'guess',
        id: 'dumbo-x7',
        question: 'In 1993, the Magic Kingdom Dumbo ride got new vehicles. How many?',
        answer: 16,
        min: 2,
        max: 40,
        step: 1,
        unit: 'Dumbos',
        tolerance: 2,
        explain: 'It was updated with 16 vehicles in 1993.',
        source: 'https://en.wikipedia.org/wiki/Dumbo_the_Flying_Elephant',
      },
      // evidence: "small children can play in the play area themed to Dumbo's fire rescue stunt scene."
      {
        type: 'truefalse',
        id: 'dumbo-x8',
        statement: 'The queue has a play area themed to Dumbo’s fire rescue stunt.',
        answer: true,
        explain: 'Fact! Kids can play in an area themed to the fire rescue scene.',
        source: 'https://en.wikipedia.org/wiki/Dumbo_the_Flying_Elephant',
      },
      // evidence: "The original attraction opened at Disneyland on August 16, 1955." / "October 1, 1971 (original)" / "updated with the 16 vehicles ... in 1993" / "March 21, 2012 (relocation)"
      {
        type: 'order',
        id: 'dumbo-x9',
        prompt: 'Put these Dumbo ride moments in order, oldest first.',
        items: [
          'First Dumbo ride opens at Disneyland',
          'Magic Kingdom’s Dumbo opens',
          'Magic Kingdom gets 16 new Dumbos',
          'Dumbo moves to Storybook Circus',
        ],
        explain: '1955, 1971, 1993, then 2012.',
        source: 'https://en.wikipedia.org/wiki/Dumbo_the_Flying_Elephant',
      },
      // ---- Play together ----
      {
        type: 'challenge',
        id: 'dumbo-r-ch1',
        prompt:
          'Pretend your fist is the Dumbo joystick. On “up,” everyone soars your hand high. On “down,” swoop low. Who can follow the fastest?',
      },
      {
        type: 'challenge',
        id: 'dumbo-r-ch2',
        prompt:
          'Timothy keeps you aloft with his “magic” feather. Pass an invisible feather around. Whoever holds it gives the best “Dumbo is flying!” cheer.',
      },
      {
        type: 'challenge',
        id: 'dumbo-r-ch3',
        prompt:
          'Listen for the circus organ music while the Dumbos fly, then hum along together like a little circus band.',
      },
      {
        type: 'wyr',
        id: 'dumbo-r-wyr1',
        a: 'Fly your Dumbo as high as it will go',
        b: 'Swoop low near the fountains',
      },
      {
        type: 'wyr',
        id: 'dumbo-r-wyr2',
        a: 'Ride the Dumbo that spins clockwise',
        b: 'Ride the one that spins counterclockwise',
      },
      {
        type: 'emoji',
        id: 'dumbo-x23',
        emojis: '🐭 🎩 🎪',
        hint: 'He spins on top of the ride’s marquee.',
        choices: ['Mickey Mouse', 'Timothy Q. Mouse', 'Jaq', 'Remy'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'dumbo-x25',
        emojis: '🐘 👂 ✈️',
        hint: 'The star of this ride!',
        choices: ['Babar', 'Dumbo', 'Heffalump', 'Elmer'],
        answer: 1,
      },
    ],
  },
  'mad-tea-party': {
    facts: [
      // evidence: "Three small turntables, which rotate clockwise ... within one large turntable, rotating counter-clockwise"
      {
        text: 'The teacups sit on three small turntables that spin clockwise, all riding on one big turntable that spins counterclockwise.',
        source: 'https://en.wikipedia.org/wiki/Mad_Tea_Party',
      },
      // evidence: "It was updated in 1992 with a new color scheme, new music, and the colorful lanterns."
      {
        text: 'In 1992 the ride got new colors, new music and its colorful lanterns.',
        source: 'https://en.wikipedia.org/wiki/Mad_Tea_Party',
      },
      // evidence: "It was one of the opening day attractions operating at Disneyland on July 17, 1955."
      {
        text: 'The first Mad Tea Party spun on Disneyland’s opening day, July 17, 1955.',
        source: 'https://en.wikipedia.org/wiki/Mad_Tea_Party',
      },
      // evidence: "A company based in Mountain View, California called Arrow Development actually did the engineering work."
      {
        text: 'Arrow Development, a company in Mountain View, California, did the engineering work on the teacup ride.',
        source: MT_DF,
      },
    ],
    quests: [
      // ---- Look around the queue, in walking order ----
      // source: MT_SIGN. evidence: "designed to look like they are made up of Tulgey Wood." / "Previously, the signs had a floral look to them."
      {
        type: 'spy',
        id: 'mad-tea-party-r-spy1',
        prompt: 'At the entrance, look at the queue signs. What are they made to look like?',
        hint: 'Since 2024 they look like they’re carved from Tulgey Wood, the forest of Wonderland. They used to look floral.',
      },
      // source: MT_SIGN. evidence: the Lightning Lane sign is pink, and the stand-by sign is purple
      {
        type: 'spy',
        id: 'mad-tea-party-r-spy2',
        prompt: 'Which entrance sign is pink, and which one is purple?',
        hint: 'The Lightning Lane sign is pink and the standby sign is purple.',
      },
      // source: MT_SIGN. evidence: tulips hang above the stand-by entrance sign
      {
        type: 'spy',
        id: 'mad-tea-party-r-spy3',
        prompt: 'Find the tulips hanging above the standby entrance sign.',
        hint: 'They arrived with the new Wonderland signs in 2024. Flowers in Wonderland are never ordinary!',
      },
      // source: MT_SIGN. evidence: "this new clock clearly belongs to the White Rabbit."
      {
        type: 'spy',
        id: 'mad-tea-party-r-spy4',
        prompt: 'Find the clock at the ride. Whose clock do you think it is?',
        hint: 'In 2024 the old clock was swapped for one that clearly belongs to the White Rabbit. Don’t be late!',
      },
      // source: MT. evidence: "opened without a roof." / "It was eventually added in 1973 (along with the central teapot) due to extreme weather conditions."
      {
        type: 'spy',
        id: 'mad-tea-party-r-spy5',
        prompt: 'Look up at the big round roof over the teacups.',
        hint: 'The ride opened in 1971 with no roof! Florida’s wild weather led Imagineers to add one in 1973.',
      },
      // source: MT. evidence: "It was updated in 1992 with a new color scheme, new music, and the colorful lanterns."
      {
        type: 'spy',
        id: 'mad-tea-party-x14',
        prompt: 'Spot the colorful lanterns hanging over the teacups. Which color is your favorite?',
        hint: 'The lanterns arrived in 1992, along with new colors and new music.',
      },
      // source: MT_MB. evidence: "the central teapot (housing the Dormouse from Alice in Wonderland) was also added."
      {
        type: 'spy',
        id: 'mad-tea-party-r-spy6',
        prompt: 'Find the giant teapot in the middle of the ride. Keep watching it!',
        hint: 'The teapot came with the roof in 1973, and the sleepy Dormouse lives inside.',
      },
      // source: MT_AE. evidence: "one of 18 pastel-colored teacups." / MT_MB: "the attraction was once again repainted, giving it the color scheme that it has today."
      {
        type: 'spy',
        id: 'mad-tea-party-x12',
        prompt: 'Pick the teacup you want to ride. What colors and patterns does it have?',
        hint: 'There are 18 pastel teacups. Today’s color scheme comes from a 2010 repaint.',
      },
      // source: MT_AE. evidence: "There is a silver wheel inside each cup." / MT_DIS: "For a wild ride, turn the wheel fast and hold on."
      {
        type: 'spy',
        id: 'mad-tea-party-r-spy7',
        prompt: 'Look into a teacup for the silver wheel in the middle.',
        hint: 'Turn it fast for a wild spin, or slowly (or not at all) for a gentle ride. You’re the captain of your cup!',
      },
      // source: MT. evidence: "Three small turntables, which rotate clockwise, each holding six teacups, within one large turntable"
      {
        type: 'spy',
        id: 'mad-tea-party-r-spy8',
        prompt: 'Watch the ride spin. Can you see the three smaller circles turning inside the big one?',
        hint: 'Three small turntables spin one way while the big turntable spins the other. That’s the secret to the dizzy fun.',
      },
      // source: MT_SIGN. evidence: "this new clock clearly belongs to the White Rabbit."
      {
        type: 'photo',
        id: 'mad-tea-party-r-photo1',
        prompt: 'From the line, snap a photo of the White Rabbit’s clock.',
        tip: 'Look near the entrance.',
        source: MT_SIGN,
      },
      // ---- Trivia ----
      // evidence: "one of 18 pastel-colored teacups."
      {
        type: 'guess',
        id: 'mad-tea-party-r1',
        question: 'How many teacups spin on the Mad Tea Party?',
        answer: 18,
        min: 4,
        max: 50,
        step: 1,
        unit: 'teacups',
        tolerance: 2,
        explain: '18 pastel teacups: six on each of three turntables.',
        source: MT_AE,
      },
      // evidence: "Each teacup will hold three average-sized individuals."
      {
        type: 'trivia',
        id: 'mad-tea-party-r2',
        question: 'How many average-sized riders fit in one teacup?',
        choices: ['One', 'Three', 'Seven', 'Twelve'],
        answer: 1,
        explain: 'Each teacup holds three average-sized riders.',
        source: MT_AE,
      },
      // evidence: "spin around for 1.5 minutes."
      {
        type: 'guess',
        id: 'mad-tea-party-r3',
        question: 'About how many seconds does one spin on the teacups last?',
        answer: 90,
        min: 20,
        max: 300,
        step: 5,
        unit: 'seconds',
        tolerance: 15,
        explain: 'About a minute and a half, or 90 seconds.',
        source: MT_AE,
      },
      // evidence: "A company based in Mountain View, California called Arrow Development actually did the engineering work."
      {
        type: 'trivia',
        id: 'mad-tea-party-r4',
        question: 'Which company did the engineering work on the teacup ride?',
        choices: ['Arrow Development', 'Teacups Inc.', 'Vekoma', 'NASA'],
        answer: 0,
        explain: 'Arrow Development of Mountain View, California.',
        source: MT_DF,
      },
      // evidence: "the attraction was once again repainted, giving it the color scheme that it has today."
      {
        type: 'guess',
        id: 'mad-tea-party-r5',
        question: 'In what year did the ride get the color scheme it has today?',
        answer: 2010,
        min: 1971,
        max: 2026,
        step: 1,
        unit: '',
        tolerance: 2,
        explain: 'It was repainted in 2010.',
        source: MT_MB,
      },
      // evidence: "At Tokyo Disneyland the ride is called Alice's Tea Party."
      {
        type: 'trivia',
        id: 'mad-tea-party-r6',
        question: 'What is the teacup ride called at Tokyo Disneyland?',
        choices: ['Alice’s Tea Party', 'Spinning Saucers', 'The Hatter’s Twirl', 'Tea Time Tornado'],
        answer: 0,
        explain: 'In Tokyo it’s Alice’s Tea Party.',
        source: MT_DF,
      },
      // evidence: "is therefore open to the elements."
      {
        type: 'trivia',
        id: 'mad-tea-party-r7',
        question: 'Which park’s teacup ride is the only one with no roof?',
        choices: ['Disneyland', 'Magic Kingdom', 'Tokyo Disneyland', 'Disneyland Paris'],
        answer: 0,
        explain: 'Disneyland’s teacups are open to the sky, so rain can shut them down.',
        source: MT_DF,
      },
      // evidence: guests were to enter "walking past giant versions of the Cheshire Cat and the Caterpillar"
      {
        type: 'trivia',
        id: 'mad-tea-party-r8',
        question: 'The first teacup ride idea had guests walking past giant versions of which characters?',
        choices: ['The Cheshire Cat and the Caterpillar', 'Mickey and Minnie', 'Two dragons', 'The seven dwarfs'],
        answer: 0,
        explain: 'Early plans had a giant Cheshire Cat and Caterpillar. The ride was later made much simpler.',
        source: MT_MB,
      },
      // evidence: "The Mad Tea Party would open on October 1, 1971, with the rest of the Magic Kingdom."
      {
        type: 'truefalse',
        id: 'mad-tea-party-r9',
        statement: 'The Mad Tea Party opened on the very same day as Magic Kingdom.',
        answer: true,
        explain: 'Fact! It opened October 1, 1971, with the rest of the park.',
        source: MT_MB,
      },
      // evidence: "located in Fantasyland, across from the Many Adventures of Winnie the Pooh."
      {
        type: 'trivia',
        id: 'mad-tea-party-r10',
        question: 'Which ride sits right across from the Mad Tea Party?',
        choices: ['The Many Adventures of Winnie the Pooh', 'Space Mountain', 'Jungle Cruise', 'Haunted Mansion'],
        answer: 0,
        explain: 'It’s across from The Many Adventures of Winnie the Pooh.',
        source: MT_AE,
      },
      // evidence: "the attraction has also gotten new lighting for Mickey's Not-So-Scary Halloween Party."
      {
        type: 'trivia',
        id: 'mad-tea-party-r11',
        question: 'For which special event has the ride gotten new lighting in recent years?',
        choices: [
          'Mickey’s Not-So-Scary Halloween Party',
          'A spring flower show',
          'A rocket launch',
          'A pirate parade',
        ],
        answer: 0,
        explain: 'It gets new lighting for Mickey’s Not-So-Scary Halloween Party.',
        source: MT_MB,
      },
      // evidence: "Turn slowly, or not at all, and enjoy a gentle turn around the table."
      {
        type: 'truefalse',
        id: 'mad-tea-party-r12',
        statement: 'You can choose not to spin your teacup at all.',
        answer: true,
        explain: 'Fact! Leave the wheel alone for a gentle turn around the table.',
        source: MT_DIS,
      },
      // evidence: "Mad Tea Party is a spinning tea cup ride at five of the six Disneyland-style theme parks around the world."
      {
        type: 'guess',
        id: 'mad-tea-party-r13',
        question: 'How many of the six Disneyland-style parks have a spinning teacup ride?',
        answer: 5,
        min: 1,
        max: 6,
        step: 1,
        unit: 'parks',
        tolerance: 0,
        explain: 'Five of the six parks have one.',
        source: MT,
      },
      // evidence: "Japanese lanterns were added."
      {
        type: 'trivia',
        id: 'mad-tea-party-r14',
        question: 'What kind of lanterns were added to the ride in 1992?',
        choices: ['Japanese lanterns', 'Jack-o’-lanterns', 'Oil lamps', 'Neon tubes'],
        answer: 0,
        explain: 'Japanese lanterns were added in 1992, along with new colors and music.',
        source: MT_MB,
      },
      // evidence: "each holding six teacups"
      {
        type: 'guess',
        id: 'mad-tea-party-x1',
        question: 'How many teacups sit on each small turntable?',
        answer: 6,
        min: 1,
        max: 20,
        step: 1,
        unit: 'teacups',
        tolerance: 1,
        explain: 'Each small turntable holds six teacups.',
        source: 'https://en.wikipedia.org/wiki/Mad_Tea_Party',
      },
      // evidence: "Three small turntables" ... "within one large turntable"
      {
        type: 'trivia',
        id: 'mad-tea-party-x2',
        question: 'How many small turntables are on the big turntable?',
        choices: ['One', 'Two', 'Three', 'Ten'],
        answer: 2,
        explain: 'Three small turntables sit on one large one.',
        source: 'https://en.wikipedia.org/wiki/Mad_Tea_Party',
      },
      // evidence: "Three small turntables, which rotate clockwise ... one large turntable, rotating counter-clockwise"
      {
        type: 'truefalse',
        id: 'mad-tea-party-x3',
        statement: 'The big turntable and the small turntables all spin the same direction.',
        answer: false,
        explain: 'Fiction! The small ones spin clockwise and the big one spins counterclockwise.',
        source: 'https://en.wikipedia.org/wiki/Mad_Tea_Party',
      },
      // evidence: "All five versions of the attraction are located in Fantasyland."
      {
        type: 'truefalse',
        id: 'mad-tea-party-x4',
        statement: 'Every version of this teacup ride around the world is in Fantasyland.',
        answer: true,
        explain: 'Fact! All five versions are in Fantasyland.',
        source: 'https://en.wikipedia.org/wiki/Mad_Tea_Party',
      },
      // evidence: "plays a carousel version of the film's" Unbirthday Song
      {
        type: 'trivia',
        id: 'mad-tea-party-x5',
        question: 'Which song plays as you spin?',
        choices: ['“The Unbirthday Song”', '“Let It Go”', '“Heigh-Ho”', '“Baby Mine”'],
        answer: 0,
        explain: 'A carousel-style version of “The Unbirthday Song” plays.',
        source: 'https://en.wikipedia.org/wiki/Mad_Tea_Party',
      },
      // evidence: "It was eventually added in 1973 (along with the central teapot) due to extreme weather conditions."
      {
        type: 'trivia',
        id: 'mad-tea-party-x6',
        question: 'Why was a roof added to the ride in 1973?',
        choices: ['To hide the teapot', 'Because of extreme weather', 'For a fireworks show', 'To keep birds away'],
        answer: 1,
        explain: 'The roof was added because of extreme weather.',
        source: 'https://en.wikipedia.org/wiki/Mad_Tea_Party',
      },
      // evidence: "It was eventually added in 1973" / "It was updated in 1992 with a new color scheme, new music, and the colorful lanterns."
      {
        type: 'order',
        id: 'mad-tea-party-x7',
        prompt: 'Put these Magic Kingdom teacup moments in order, oldest first.',
        items: ['Ride opens with no roof', 'Roof and teapot added', 'New colors, music and lanterns'],
        explain: 'Opened 1971, roof in 1973, makeover in 1992.',
        source: 'https://en.wikipedia.org/wiki/Mad_Tea_Party',
      },
      // ---- Play together ----
      {
        type: 'challenge',
        id: 'mad-tea-party-r-ch1',
        prompt: 'Hum “The Unbirthday Song” like the ride’s bouncy calliope music. Who can do the bounciest version?',
      },
      {
        type: 'challenge',
        id: 'mad-tea-party-r-ch2',
        prompt:
          'Practice your teacup steering: everyone turn a pretend wheel slowly… then faster… then STOP and freeze!',
      },
      {
        type: 'wyr',
        id: 'mad-tea-party-x20',
        a: 'Spin super fast in your teacup',
        b: 'Spin slow and wave at everyone',
      },
      {
        type: 'wyr',
        id: 'mad-tea-party-r-wyr1',
        a: 'Fill your teacup with three riders',
        b: 'Ride with just one buddy',
      },
      {
        type: 'wyr',
        id: 'mad-tea-party-r-wyr2',
        a: 'Keep watch for the Dormouse while you spin',
        b: 'Watch the lanterns whirl overhead',
      },
      {
        type: 'emoji',
        id: 'mad-tea-party-r-emoji1',
        emojis: '☕ 🌀 🫖',
        hint: 'You’re about to ride one!',
        choices: ['A spinning teacup', 'A flying elephant', 'A mine train', 'A clamshell'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'mad-tea-party-x24',
        emojis: '🐰 ⏰ 🏃',
        hint: 'His clock hangs at this ride’s entrance.',
        choices: ['The White Rabbit', 'The March Hare', 'Thumper', 'Rabbit'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'mad-tea-party-x26',
        emojis: '🎩 ☕ 🎉',
        hint: 'This ride is inspired by his party.',
        choices: ['The Mad Hatter', 'Mr. Smee', 'The Caterpillar', 'Doc'],
        answer: 0,
      },
    ],
  },
};
