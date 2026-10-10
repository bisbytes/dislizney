import type { Fact, Quest } from '../../types';

const RR = 'https://en.wikipedia.org/wiki/Walt_Disney_World_Railroad';
const RR_RG = 'https://www.resortsgal.com/blog/walt-disney-world-railroad/';
const RR_TP = 'https://touringplans.com/blog/?p=610419';
const CASTLE = 'https://en.wikipedia.org/wiki/Cinderella_Castle';
const CASTLE_DPB = 'https://disneyparksblog.com/disney-experiences/disney-castles-hidden-details/';
const CASTLE_RG = 'https://www.resortsgal.com/parks/magic-kingdom/cinderella-castle/';
const BT = 'https://en.wikipedia.org/wiki/Big_Thunder_Mountain_Railroad';
const BT_MV = 'https://mickeyvisit.com/disney-big-thunder-mountain-railroad-secrets/';
const BT_MB = 'https://mickeyblog.com/2026/05/03/big-thunder-mountain-railroad-reopens-in-magic-kingdom/';
const BT_WM =
  'https://www.wdwmagic.com/attractions/big-thunder-mountain-railroad/news/01may2026-big-thunder-mountain-railroad-backstory-the-full-legend-of-barnabas-t-bullion-and-tumbleweed.htm';
const BT_NTQ = 'https://wdwnt.com/2026/05/photos-video-big-thunder-mountain-railroad-reopens-upgrades-changes/';
const BT_DD = 'https://www.disneydining.com/10-facts-and-secrets-about-big-thunder-mountain-in-the-magic-kingdom/';
const BT_NT26 =
  'https://wdwnt.com/2026/04/walt-disney-world-ambassadors-share-sneak-preview-of-big-thunder-mountain-ahead-of-reopening/';
const BT_WKMG =
  'https://www.clickorlando.com/theme-parks/2026/04/30/2000-bats-cavern-glow-up-among-wild-changes-at-magic-kingdoms-big-thunder-mountain-railroad/';
const BT_DTB =
  'https://www.disneytouristblog.com/new-rainbow-caverns-scene-big-thunder-mountain-railroad-magic-kingdom-reopens-2026/';
const BT_AE =
  'https://www.allears.net/2026/05/03/we-rode-the-newly-reopened-big-thunder-mountain-railroad-in-magic-kingdom-and-we-have-thoughts/';
const TIANA = 'https://en.wikipedia.org/wiki/Tiana%27s_Bayou_Adventure';
const TI_AM = 'https://attractionsmagazine.com/tianas-bayou-adventure-queue-tour';
const TI_BM =
  'https://blogmickey.com/2024/06/200-photos-scene-by-scene-breakdown-of-tianas-bayou-adventure-ride-tour-of-queue/';
const BEARS = 'https://en.wikipedia.org/wiki/Country_Bear_Jamboree';
const CB_NT = 'https://wdwnt.com/2024/07/first-look-grizzly-hall-country-bear-musical-jamboree';
const CB_TP = 'https://touringplans.com/blog/five-things-to-know-about-country-bear-musical-jamboree/';
const CB_BM = 'https://blogmickey.com/country-bear-musical-jamboree-review/';
const CB_IM = 'https://www.imaginerding.com/?p=14430';
const HM = 'https://en.wikipedia.org/wiki/The_Haunted_Mansion';
const HM_ITM =
  'https://insidethemagic.net/2011/03/preview-haunted-mansion-queue-enhancements-add-effects-tributes-and-include-unofficial-story-in-disney-world-lore/';
const HM_AE = 'https://allearsnet.com/tp/mk/haunted-mansion.htm';
const HM_RG = 'https://www.resortsgal.com/blog/haunted-mansion/';
const HOP = 'https://en.wikipedia.org/wiki/The_Hall_of_Presidents';
const HOP_NT =
  'https://wdwnt.com/2025/06/lobby-of-the-hall-of-presidents-reopens-at-magic-kingdom-show-remains-closed-following-trump-update/';
const HOP_RG = 'https://www.resortsgal.com/parks/hall-of-presidents';
const MSV = 'https://en.wikipedia.org/wiki/Main_Street_Vehicles';
const MSV_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/main-street-vehicles/';
const MSV_RG = 'https://www.resortsgal.com/blog/main-street-vehicles/';
const MSV_WDWNT = 'https://wdwnt.com/?p=700536';
const MSV_AE = 'https://allears.net/?p=583702';

/**
 * Base quests (in magic-kingdom.ts) that are not about the ride itself, or that
 * ask kids to touch show props. They are hidden for these rides; fixed versions
 * live below with new ids.
 */
export const drop: string[] = [
  'castle-wyr', // generic "tower or cottage" daydream
  'castle-5', // movie emoji, not the castle
  'bt-ch', // invent-a-town game, not this ride
  'ti-wyr', // generic "shrunk or frog" daydream
  'cb-ch', // generic song-writing game
  'haunted-mansion-photo-1', // told kids to touch the props; reworded as haunted-mansion-r1
  'hm-ch', // generic poem game
  'hp-ch', // generic "if you were president" game
];

/**
 * Extra content for Main Street, U.S.A., Frontierland and Liberty Square: a fan's
 * love letter to each ride. Every sourced item was checked against its source page.
 * Spy items are listed in the order guests walk past them, entrance first.
 */
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
      // ---- Look around the station, in walk order ----
      // source: RR. evidence: "modeled after the former Victorian-style Saratoga Springs station"
      {
        type: 'spy',
        id: 'wdw-railroad-x14',
        prompt: 'Before you climb the stairs, look up at the station building. Spot its fancy old-time trim.',
        hint: 'Imagineers modeled it on a real Victorian station in Saratoga Springs, New York, so the park starts with a trip back in time.',
      },
      // source: RR_RG. evidence: "Roy O. Disney display and the "Sharing the Magic" statue"
      {
        type: 'spy',
        id: 'wdw-railroad-s1',
        prompt: 'Under the station, find the statue of Roy O. Disney sitting with Minnie Mouse.',
        hint: 'Roy was Walt’s big brother, the one who made sure Walt Disney World got built. One of the four steam engines is named for him.',
      },
      // source: RR_RG. evidence: "Roger E. Broggie display" honors "the first Imagineer ever"
      {
        type: 'spy',
        id: 'wdw-railroad-s12',
        prompt: 'Find the display for Roger Broggie, the engine’s namesake.',
        hint: 'Roger Broggie was the first Imagineer ever. He helped Walt build his backyard railroad.',
      },
      // source: RR_RG. evidence: "mini-museum with information displays and shadow boxes"
      {
        type: 'spy',
        id: 'wdw-railroad-s2',
        prompt: 'Find a shadow box display about a real steam locomotive.',
        hint: 'The station doubles as a tiny train museum. Fans say the lower level is the best spot for train lovers.',
      },
      // source: RR_TP. evidence: bulletin board schedule lists "Carolwood Pacific" and "Grizzly Flats Express"
      {
        type: 'spy',
        id: 'wdw-railroad-s3',
        prompt: 'Find the train schedule board. Can you spot a train called the Carolwood Pacific?',
        hint: 'The Carolwood Pacific was the name of Walt Disney’s own backyard railroad, where his love of trains got rolling.',
      },
      // source: RR, RR_RG. evidence: "four commemorative plaques, representing information about each of the WDWRR's locomotives"
      {
        type: 'spy',
        id: 'wdw-railroad-s4',
        prompt: 'Find the plaque for the Lilly Belle engine and look for the fine print about flower beds.',
        hint: 'Lilly Belle is named for Walt’s wife, Lillian. She let Walt’s backyard train tracks run right through her flower beds!',
      },
      // source: RR_TP. evidence: "Walt Disney World Railroad Office, Keeping Dream on Track, Walter E. Disney, Chief Engineer"
      {
        type: 'spy',
        id: 'wdw-railroad-s5',
        prompt: 'Find the window painted for the railroad office. Who is listed as Chief Engineer?',
        hint: 'It says “Walter E. Disney, Chief Engineer.” Walt really did love driving trains.',
      },
      // source: RR. evidence: "they are able to observe the mutoscopes, medallions, and arcade machines in the waiting area"
      {
        type: 'spy',
        id: 'wdw-railroad-s6',
        prompt: 'Upstairs, spot a mutoscope: an old flip-picture movie machine.',
        hint: 'Before movie theaters, people cranked machines like this to watch tiny moving pictures. It fits a station from the 1880s.',
      },
      // source: RR_TP. evidence: "penny arcades, an old-timey football game, and railroad history artwork"
      {
        type: 'spy',
        id: 'wdw-railroad-s7',
        prompt: 'Find the old-timey football game in the waiting area.',
        hint: 'Penny arcade games like this kept travelers busy while they waited for their train, just like you!',
      },
      // source: RR_RG. evidence: "The second-floor balcony offers views"
      {
        type: 'spy',
        id: 'wdw-railroad-s8',
        prompt: 'From the platform, look down Main Street, U.S.A. Can you see the castle at the very end?',
        hint: 'The station sits at the front of the park on purpose, so the train is the first ride you meet.',
      },
      // source: RR. evidence: "new diamond-shaped smokestacks and square-shaped headlamps"
      {
        type: 'spy',
        id: 'wdw-railroad-s9',
        prompt: 'When a train pulls in, find its diamond-shaped smokestack and square headlamp.',
        hint: 'Imagineers added these so the engines would look like they were built in the 1880s.',
      },
      {
        type: 'spy',
        id: 'wdw-railroad-x16',
        prompt: 'Spot puffs of steam from an arriving train. Count how many you see!',
        hint: 'These are real steam engines, more than 90 years old. Listen for the whistle first.',
      },
      // source: RR. evidence: "the railroad's water tower is used to refill the tender if needed"
      {
        type: 'spy',
        id: 'wdw-railroad-s11',
        prompt: 'Boarding at Fantasyland Station? Find the tall water tower.',
        hint: 'Steam engines get thirsty! The tower refills the water tank behind the engine.',
      },
      // evidence: "modeled after the former Victorian-style Saratoga Springs station"
      {
        type: 'photo',
        id: 'wdw-railroad-photo1',
        prompt: 'From the front of the station, snap its fancy old-time Victorian building.',
        tip: 'Try to fit the whole roof and trim in your picture.',
        source: RR,
      },
      // evidence: "Roy O. Disney display and the "Sharing the Magic" statue"
      {
        type: 'photo',
        id: 'wdw-railroad-photo2',
        prompt: 'From the station, take a photo of the Sharing the Magic statue of Roy O. Disney and Minnie Mouse.',
        tip: 'You can stand next to it with your family.',
        source: RR_RG,
      },
      // evidence: Lilly Belle display "has fine print below, which tells how Lillian granted Walt permission to run the tracks through her flower beds"
      {
        type: 'photo',
        id: 'wdw-railroad-photo3',
        prompt: 'From the station, snap the Lilly Belle engine display and its fine print.',
        tip: 'The fine print tells a story about flower beds.',
        source: RR_RG,
      },
      // evidence: bulletin board schedule lists "Carolwood Pacific" and "Grizzly Flats Express"
      {
        type: 'photo',
        id: 'wdw-railroad-photo4',
        prompt: 'From the lower level of the station, photograph the train schedule board with its old train names.',
        tip: 'Look for the Carolwood Pacific.',
        source: RR_TP,
      },
      // evidence: "penny arcades, an old-timey football game, and railroad history artwork"
      {
        type: 'photo',
        id: 'wdw-railroad-photo5',
        prompt: 'From the upstairs waiting area, snap the old-timey football game.',
        tip: 'Penny arcade games kept travelers busy long ago.',
        source: RR_TP,
      },
      // evidence: "new diamond-shaped smokestacks and square-shaped headlamps"
      {
        type: 'photo',
        id: 'wdw-railroad-photo6',
        prompt: 'From the platform, photograph a train pulling in. Get its diamond-shaped smokestack in the shot.',
        tip: 'Wait for the whistle, then be ready!',
        source: RR,
      },

      // ---- Trivia ----
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
        explain: 'Just 10 mph. Slow and steady, so you can soak in every land.',
        source: RR,
      },
      // evidence: "It takes about 20 minutes for each train to complete a round trip."
      {
        type: 'trivia',
        id: 'wdw-railroad-x2',
        question: 'About how long does one full trip around the park take?',
        choices: ['5 minutes', '20 minutes', '1 hour', '2 hours'],
        answer: 1,
        explain: 'About 20 minutes for the whole grand circle.',
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
      // evidence: "temporarily closed to accommodate construction of the TRON attraction in the Tomorrowland section"
      {
        type: 'trivia',
        id: 'wdw-railroad-x8',
        question: 'In 2018 the railroad closed for a while so a new ride could be built. Which one?',
        choices: ['Space Mountain', 'TRON Lightcycle / Run', 'Big Thunder Mountain', 'Peter Pan’s Flight'],
        answer: 1,
        explain: 'It closed for TRON construction and came back in 2022 with a brand-new tunnel.',
        source: RR,
      },
      // evidence: "a tunnel through the Tiana's Bayou Adventure attraction in which its finale can be viewed"
      {
        type: 'trivia',
        id: 'wdw-railroad-x9',
        question: 'The train rolls through a tunnel inside which ride, where you can peek at its finale?',
        choices: ['Haunted Mansion', 'Tiana’s Bayou Adventure', 'it’s a small world', 'Jungle Cruise'],
        answer: 1,
        explain: 'Keep your eyes open in the tunnel for a sneak peek of Tiana’s party!',
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
        explain: 'The parade route crosses the tracks in Frontierland, so trains pause for parades.',
        source: RR,
      },
      // evidence: rolling stock table: No. 2 "Lilly Belle", named for Lillian Disney
      {
        type: 'trivia',
        id: 'wdw-railroad-r1',
        question: 'The engine Lilly Belle is named after which person?',
        choices: ['Walt’s wife, Lillian', 'Walt’s mom', 'A princess', 'A train driver'],
        answer: 0,
        explain:
          'Lillian Disney, Walt’s wife. The other engines honor Walt, Roy O. Disney and Imagineer Roger E. Broggie.',
        source: RR,
      },
      // evidence: "Its service entry date was delayed until two months after the park opened"
      {
        type: 'truefalse',
        id: 'wdw-railroad-r2',
        statement: 'All four engines were ready to roll on the park’s first day in 1971.',
        answer: false,
        explain: 'Fiction! The Roy O. Disney engine joined two months after the park opened.',
        source: RR,
      },
      // evidence: "modified to burn ultra-low-sulfur diesel oil instead of bunker oil"
      {
        type: 'trivia',
        id: 'wdw-railroad-r3',
        question: 'What do the steam engines burn to heat their water?',
        choices: ['Coal', 'Wood', 'Ultra-low-sulfur diesel oil', 'Pixie dust'],
        answer: 2,
        explain: 'Their fireboxes burn ultra-low-sulfur diesel oil to make the steam.',
        source: RR,
      },
      // evidence: "the original Frontierland Station was demolished to make way for the new Splash Mountain log flume attraction"
      {
        type: 'trivia',
        id: 'wdw-railroad-r4',
        question: 'The first Frontierland Station was taken down to make room for which ride?',
        choices: ['Big Thunder Mountain', 'Splash Mountain', 'Haunted Mansion', 'Country Bear Jamboree'],
        answer: 1,
        explain: 'Splash Mountain! That ride is now Tiana’s Bayou Adventure.',
        source: RR,
      },
      // evidence: "opened ... October 1, 1971" / "On December 3, 2018, the WDWRR temporarily closed" / "On December 23, 2022, the WDWRR reopened with a new tunnel"
      {
        type: 'order',
        id: 'wdw-railroad-r5',
        prompt: 'Put these railroad moments in order, oldest first.',
        items: [
          'Opens with Magic Kingdom (1971)',
          'Closes so TRON can be built (2018)',
          'Reopens with a new tunnel (2022)',
        ],
        explain: 'Opening day 1971, a break in 2018, and back on track in December 2022.',
        source: RR,
      },

      // ---- Play ----
      {
        type: 'challenge',
        id: 'wdw-railroad-x19',
        prompt:
          'Be the conductor: announce the next stop, Frontierland or Fantasyland, in your fanciest conductor voice.',
      },
      {
        type: 'wyr',
        id: 'wdw-railroad-x25',
        a: 'Spot a real alligator from the train',
        b: 'Spot a deer from the train',
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
      // ---- Look around, from Main Street through the archway and around back ----
      // source: CASTLE. evidence: "There are a total of 27 towers on the castle"
      {
        type: 'spy',
        id: 'cinderella-castle-x15',
        prompt: 'Count how many towers you can see from where you are standing.',
        hint: 'There are 27 in all, numbered up to 29, because towers 13 and 17 were never built.',
      },
      // source: CASTLE. evidence: "The set-building trick of forced perspective makes the castle appear larger than it is."
      {
        type: 'spy',
        id: 'cinderella-castle-s1',
        prompt: 'Look up high. Do the top windows and stones look smaller than the ones near the ground?',
        hint: 'That’s forced perspective, a movie-set trick. Building the top smaller makes the castle seem even taller.',
      },
      // source: CASTLE. evidence: "The tower with the clock in front is number 10."
      {
        type: 'spy',
        id: 'cinderella-castle-s10',
        prompt: 'Find the clock on the front of the castle. What time does it show?',
        hint: 'It sits on tower number 10. Towers on this castle are numbered, just like rooms in a hotel.',
      },
      // source: CASTLE. evidence: "The tallest is number 20"
      {
        type: 'spy',
        id: 'cinderella-castle-s11',
        prompt: 'Find the tallest tower of all.',
        hint: 'It is tower number 20, and Tinker Bell’s fireworks zipline is attached to it.',
      },
      // source: CASTLE. evidence: "all gold colors are anodized aluminum"
      {
        type: 'spy',
        id: 'cinderella-castle-x16',
        prompt: 'Spot something gold and shiny on the castle.',
        hint: 'Surprise: none of it is real gold. It’s anodized aluminum that stays shiny in the Florida sun.',
      },
      // source: CASTLE_DPB. evidence: the Disney Family crest "has been included on every Disney Castle"
      {
        type: 'spy',
        id: 'cinderella-castle-s2',
        prompt: 'Look for a coat of arms on the castle.',
        hint: 'A Disney family crest has been part of every Disney castle since Sleeping Beauty Castle got one in the 1960s.',
      },
      // source: CASTLE. evidence: "surrounded by a moat, which contains approximately 3.37 million US gallons"
      {
        type: 'spy',
        id: 'cinderella-castle-s3',
        prompt: 'Find the moat and look for the castle’s reflection in the water.',
        hint: 'The moat holds about 3.37 million gallons of water. Counting its depth, the castle is 189 feet tall.',
      },
      // source: CASTLE. evidence: "Cinderella Castle cannot raise its bridge"
      {
        type: 'spy',
        id: 'cinderella-castle-s4',
        prompt: 'As you walk toward the archway, find the drawbridge.',
        hint: 'It looks ready to rise, but it can’t. Disneyland’s Sleeping Beauty Castle has one that can.',
      },
      // source: CASTLE_DPB. evidence: "Herb is presenting the slipper to Cinderella, while John looks down at him."
      {
        type: 'spy',
        id: 'cinderella-castle-s5',
        prompt: 'In the archway mosaics, find the man holding out the glass slipper, and the man looking down at him.',
        hint: 'They’re Imagineers Herb Ryman and John Hench, hidden in the mosaic as a thank-you for their work.',
      },
      // source: CASTLE. evidence: one sister's face is clearly "red with anger"
      {
        type: 'spy',
        id: 'cinderella-castle-s6',
        prompt: 'Find the mosaic stepsister whose face is “red with anger.”',
        hint: 'The artists used red glass for one sister and green glass for the other, who is “green with envy.”',
      },
      // source: CASTLE. evidence: "a series of five mosaic murals tells the story of Cinderella"
      {
        type: 'spy',
        id: 'cinderella-castle-s7',
        prompt: 'Walk the archway and count the big mosaic murals. Can you find all of them?',
        hint: 'There are five, made from just over 300,000 pieces of Italian glass.',
      },
      // source: CASTLE_RG. evidence: "Stained glass windows line the back of the castle."
      {
        type: 'spy',
        id: 'cinderella-castle-s8',
        prompt: 'On the Fantasyland side, look for stained glass windows.',
        hint: 'The back of the castle has its own treasures. At night the whole castle glows with light shows.',
      },
      // source: CASTLE_RG. evidence: Cinderella Fountain near Bibbidi Bobbidi Boutique, with "a bird in her hand"
      {
        type: 'spy',
        id: 'cinderella-castle-s9',
        prompt: 'Behind the castle, find the Cinderella Fountain. What is she holding in her hand?',
        hint: 'A little bird. Look for her mouse friends nearby too.',
      },
      // evidence: "There are a total of 27 towers on the castle"
      {
        type: 'photo',
        id: 'cinderella-castle-photo1',
        prompt: 'From the path in front of the castle, take a photo of its tall towers and pointy roofs.',
        tip: 'Stand back so you can fit the tallest ones in.',
        source: CASTLE,
      },
      // evidence: moat "Holds about 3.37 million US gallons of water"
      {
        type: 'photo',
        id: 'cinderella-castle-photo2',
        prompt: 'From beside the moat, snap the castle’s reflection in the water.',
        tip: 'Hold your phone low for a bigger reflection.',
        source: CASTLE,
      },
      // evidence: "Cinderella Castle cannot raise its bridge"
      {
        type: 'photo',
        id: 'cinderella-castle-photo3',
        prompt: 'From the walkway, photograph the drawbridge that looks ready to rise.',
        tip: 'Fun fact for your photo caption: this one can’t actually move!',
        source: CASTLE,
      },
      // evidence: one sister is "red with anger" and the other "green with envy"
      {
        type: 'photo',
        id: 'cinderella-castle-photo4',
        prompt: 'From under the archway, snap the mosaic stepsister whose face is red with anger.',
        tip: 'Look but don’t touch. The glass pieces are tiny and delicate.',
        source: CASTLE,
      },
      // evidence: "A bird rests in the palm of her hand."
      {
        type: 'photo',
        id: 'cinderella-castle-photo5',
        prompt: 'From behind the castle, photograph Cinderella Fountain and the little bird in her hand.',
        tip: 'The fountain is near Bibbidi Bobbidi Boutique.',
        source: CASTLE_RG,
      },
      // evidence: "Stained glass windows line the back of the castle."
      {
        type: 'photo',
        id: 'cinderella-castle-photo6',
        prompt: 'From the Fantasyland side, snap the stained glass windows on the back of the castle.',
        tip: 'Sunlight makes the colors glow.',
        source: CASTLE_RG,
      },

      // ---- Trivia ----
      // evidence: "Cinderella Castle was completed in July 1971, after about 18 months of construction."
      {
        type: 'trivia',
        id: 'cinderella-castle-x1',
        question: 'About how long did it take to build Cinderella Castle?',
        choices: ['1 month', '18 months', '10 years', '50 years'],
        answer: 1,
        explain: 'About 18 months. It was finished in July 1971, just in time for opening day.',
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
          'The Týn Church in Prague, Czech Republic, was one inspiration. Neuschwanstein Castle in Bavaria was another.',
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
      // evidence: "Cinderella Castle is more than 100 feet (30 m) taller than Sleeping Beauty Castle at Disneyland"
      {
        type: 'truefalse',
        id: 'cinderella-castle-x7',
        statement: 'Cinderella Castle is more than 100 feet taller than Sleeping Beauty Castle at Disneyland.',
        answer: true,
        explain: 'Fact! Florida’s castle towers over the California one.',
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
      // evidence: "Designed by Imagineer Dorothea Redmond"
      {
        type: 'trivia',
        id: 'cinderella-castle-r1',
        question: 'Which Imagineer designed the archway mosaics?',
        choices: ['Dorothea Redmond', 'Mary Blair', 'Marc Davis', 'Tony Baxter'],
        answer: 0,
        explain: 'Dorothea Redmond designed them, and a team led by mosaicist Hanns-Joachim Scharff built them.',
        source: CASTLE,
      },
      // evidence: "most of the exterior is a thick, very hard fiber-reinforced gypsum plaster"
      {
        type: 'trivia',
        id: 'cinderella-castle-r2',
        question: 'If not bricks, what is most of the castle’s outside made of?',
        choices: ['Gingerbread', 'Hard plaster', 'Wood', 'Ice'],
        answer: 1,
        explain: 'Mostly a thick, very hard fiber-reinforced plaster over a steel frame.',
        source: CASTLE,
      },
      // evidence: "the zipline cable that Tinker Bell "flies" on for the fireworks show is attached to tower 20"
      {
        type: 'trivia',
        id: 'cinderella-castle-r3',
        question: 'Tinker Bell’s fireworks zipline is attached to which tower number?',
        choices: ['1', '13', '20', '29'],
        answer: 2,
        explain: 'Tower 20! That’s where Tink takes off.',
        source: CASTLE,
      },
      // evidence: "moat, which contains approximately 3.37 million US gallons"
      {
        type: 'trivia',
        id: 'cinderella-castle-r4',
        question: 'About how much water is in the castle’s moat?',
        choices: ['3,000 gallons', '300,000 gallons', '3.4 million gallons', '300 million gallons'],
        answer: 2,
        explain: 'About 3.37 million gallons. That’s a lot of splash!',
        source: CASTLE,
      },
      // evidence: "the suite was used as a prize for the Disney Dreams Giveaway"
      {
        type: 'truefalse',
        id: 'cinderella-castle-r5',
        statement: 'There is a secret suite inside the castle, and some lucky guests won a night there.',
        answer: true,
        explain: 'Fact! From 2007 to 2009 it was a prize in the Disney Dreams Giveaway.',
        source: CASTLE,
      },
      // evidence: a "grandfather clock" whose hands "magically remain at 11:59 p.m."
      {
        type: 'trivia',
        id: 'cinderella-castle-r6',
        question: 'The grandfather clock in the castle suite is stuck at what time?',
        choices: ['Noon', '11:59 p.m.', '3:00 p.m.', '6:00 a.m.'],
        answer: 1,
        explain: 'One minute to midnight, so the magic never runs out!',
        source: CASTLE_RG,
      },
      // evidence: "more than forty coats of arms" / "Each of these is an actual family seal"
      {
        type: 'truefalse',
        id: 'cinderella-castle-r7',
        statement: 'The coats of arms inside Cinderella’s Royal Table are made up, not real family seals.',
        answer: false,
        explain: 'Fiction! There are more than forty, and each one is a real family seal.',
        source: CASTLE,
      },
      // evidence: "new paint scheme that "will feature grays, creams, blues, and touches of gold.""
      {
        type: 'trivia',
        id: 'cinderella-castle-r8',
        question: 'The castle’s newest paint job is inspired by its original look. Which colors does it use?',
        choices: ['Grays, creams, blues and gold', 'Hot pink and purple', 'Black and orange', 'Rainbow stripes'],
        answer: 0,
        explain: 'Grays, creams, blues and touches of gold, a nod to the classic 1971 castle.',
        source: CASTLE_DPB,
      },

      // ---- Play ----
      {
        type: 'challenge',
        id: 'cinderella-castle-r9',
        prompt:
          'Greet each other the Cinderella’s Royal Table way: grown-ups are “my lord” and “my lady,” kids are princes and princesses.',
      },
      {
        type: 'wyr',
        id: 'cinderella-castle-r10',
        a: 'Study the archway mosaics up close',
        b: 'Watch the castle light up with a nighttime show',
      },
      {
        type: 'emoji',
        id: 'cinderella-castle-r11',
        emojis: '🪟 🟦 🟨 ✨ 🧩',
        hint: 'Over 300,000 pieces of Italian glass inside the archway.',
        choices: ['The mosaic murals', 'The moat', 'The drawbridge', 'The elevators'],
        answer: 0,
      },
    ],
  },

  'big-thunder': {
    facts: [
      // evidence: "designed by Imagineer Tony Baxter and ride design engineer Bill Watkins"
      {
        text: 'Imagineer Tony Baxter designed Big Thunder Mountain Railroad with ride engineer Bill Watkins.',
        source: BT,
      },
      // evidence: "the rockwork designs are based on the rising buttes"
      {
        text: 'In Florida, the rocks are based on the tall buttes of Arizona and Monument Valley, Utah.',
        source: BT,
      },
      // evidence: "The track layout of the Magic Kingdom's version is nearly an identical mirrored layout of the Disneyland attraction."
      { text: 'Florida’s track is almost a mirror image of the Disneyland version’s track.', source: BT },
      // evidence: "includes a refreshed Rainbow Caverns, new audio-animatronics and gold props"
      {
        text: 'The 2025 to 2026 makeover added a refreshed Rainbow Caverns, new Audio-Animatronics and gold props.',
        source: BT,
      },
    ],
    quests: [
      // ---- Look around the queue, in walk order ----
      // source: BT_WKMG. evidence: "the return of two working smokestacks on the mountain's exterior"
      {
        type: 'spy',
        id: 'big-thunder-s1',
        prompt: 'From the entrance, look up at the mountain. Can you spot a smokestack puffing away?',
        hint: 'Two working smokestacks came back in the 2026 makeover after sitting quiet for years.',
      },
      // source: BT_MB. evidence: one sign notes that "this mining job is dangerous" / "fire is prohibited!"
      {
        type: 'spy',
        id: 'big-thunder-s2',
        prompt: 'Find a warning sign for the miners. What is NOT allowed here?',
        hint: 'Fire is prohibited! The Big Thunder Mining Company keeps lots of explosives around, and this mining job is dangerous.',
      },
      // source: BT_DD, BT_WM. evidence: guests can set off "explosives" in the queue's "Explosives Magazine room" (2024); queue has "blasting machines" (May 2026)
      {
        type: 'spy',
        id: 'big-thunder-s3',
        prompt: 'Find the explosives room and its blasting machines.',
        hint: 'The Big Thunder Mining Company keeps lots of explosives around. Follow the posted instructions to set off a blast!',
      },
      // source: BT_DD. evidence: guests set off explosives "by following instructions posted there"
      {
        type: 'spy',
        id: 'big-thunder-s4',
        prompt:
          'Read the operating instructions posted near the blasting machines. Who can explain them in one sentence?',
        hint: 'The queue tells you how to set off a blast, written like a real 1800s mining company.',
      },
      // source: BT_WM. evidence: "Big Thunder Mining Offices"
      {
        type: 'spy',
        id: 'big-thunder-s5',
        prompt: 'Find the mining office. What would the boss keep on his desk?',
        hint: 'This is where the Big Thunder Mining Company ran its business. Read the papers for clues.',
      },
      // source: BT_MB. evidence: signs tell the attraction's story, "including an Assay Report"
      {
        type: 'spy',
        id: 'big-thunder-s6',
        prompt: 'Look for the Assay Report sign.',
        hint: 'An assay tests rock to see how much gold is inside. Good reports kept the miners digging deeper and deeper.',
      },
      // source: BT_DD. evidence: "A birdcage hangs overhead in the second queue room, labeled "Rosita."" (page modified July 2024)
      {
        type: 'spy',
        id: 'big-thunder-s8',
        prompt: 'Find a birdcage. What name is on it?',
        hint: 'It says Rosita, a wink to a bird from the Enchanted Tiki Room. Miners once took canaries underground to check the air.',
      },
      // source: BT_NTQ, BT_DD. evidence: "an ornate framed portrait of Barnabas T. Bullion can be seen situated on top of some rafters" in the upstairs queue (May 2026); portrait "a nod to Imagineer Tony Baxter"
      {
        type: 'spy',
        id: 'big-thunder-s10',
        prompt: 'Upstairs in the queue, look up on the rafters for the portrait of mine boss Barnabas T. Bullion.',
        hint: 'Look closely: his face is modeled on Tony Baxter, the Imagineer who created Big Thunder!',
      },
      // source: BT_DD, BT_WM. evidence: "I.M Brave, I.B Hearty, I.M Fearless, U.B Bold, U.R Courageous, and U.R Daring" / trains "U.R. Daring" and "I.M. Fearless" (May 2026)
      {
        type: 'spy',
        id: 'big-thunder-s11',
        prompt: 'At the station, read the name on the front of a train. Is it I.M. Brave or U.R. Daring?',
        hint: 'All six trains have names that cheer you on: U.R. Daring, U.B. Bold, I.M. Brave, I.B. Hearty, U.R. Courageous and I.M. Fearless.',
      },
      // evidence: "rockwork designs are based on the rising buttes that are located in Arizona and at Monument Valley in Utah"
      {
        type: 'photo',
        id: 'big-thunder-r1',
        prompt: 'From the line, snap the red rock spires of Big Thunder Mountain.',
        tip: 'They’re shaped like the buttes of Monument Valley.',
        source: BT,
      },
      // evidence: "the return of two working smokestacks on the mountain's exterior"
      {
        type: 'photo',
        id: 'big-thunder-photo2',
        prompt: 'From the entrance path, snap a smokestack on the side of the mountain.',
        tip: 'Wait for a puff of smoke for a great picture.',
        source: BT_WKMG,
      },
      // evidence: guests can set off "explosives" in the queue's "Explosives Magazine room"
      {
        type: 'photo',
        id: 'big-thunder-photo3',
        prompt: 'From the line, photograph the blasting machines in the explosives room.',
        tip: 'Ask a grown-up to hold your spot in line first.',
        source: BT_DD,
      },
      // evidence: "A birdcage hangs overhead in the second queue room, labeled "Rosita.""
      {
        type: 'photo',
        id: 'big-thunder-photo4',
        prompt: 'From the line, look up and snap the birdcage with the name Rosita on it.',
        tip: 'It hangs overhead, so tilt your camera up.',
        source: BT_DD,
      },
      // evidence: "an ornate framed portrait of Barnabas T. Bullion can be seen situated on top of some rafters"
      {
        type: 'photo',
        id: 'big-thunder-photo5',
        prompt: 'From the upstairs queue, snap the portrait of mine boss Barnabas T. Bullion.',
        tip: 'It sits up high on the rafters, so tilt your camera up.',
        source: BT_NTQ,
      },
      // evidence: "I.M Brave, I.B Hearty, I.M Fearless, U.B Bold, U.R Courageous, and U.R Daring"
      {
        type: 'photo',
        id: 'big-thunder-photo6',
        prompt: 'From the station, photograph the name on the front of a train before you board.',
        tip: 'Can you find I.M. Fearless?',
        source: BT_DD,
      },

      // ---- Trivia ----
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
        question: 'In Florida’s story, what disaster struck the town of Tumbleweed?',
        choices: ['A snowstorm', 'A flash flood', 'A volcano', 'A tornado'],
        answer: 1,
        explain: 'A flash flood! Your train rolls right through the flooded town.',
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
      // evidence: "a completely brand-new scene: the Rainbow Caverns"
      {
        type: 'truefalse',
        id: 'big-thunder-x6',
        statement: 'Since 2026, the ride opens in a glowing cave called Rainbow Caverns.',
        answer: true,
        explain: 'Fact! The new opening scene glows with colorful pools and shimmering stalagmites.',
        source: BT_AE,
      },
      // evidence: "It first opened at Disneyland in 1979" / "November 15, 1980" / "temporarily closed for a complete refurbishment" / "with the ride reopening on May 3, 2026."
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
        explain: 'Disneyland got it first in 1979, Florida in 1980, and Florida’s reopened all shiny on May 3, 2026.',
        source: BT,
      },
      // evidence: "it passes by several veins of gold that illuminate the tunnel"
      {
        type: 'trivia',
        id: 'big-thunder-x9',
        question: 'Deep inside the mountain, what glows in the tunnel?',
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
      // evidence: "the height limit for the ride was lowered from 40 in (1.02 m) to 38 in (0.97 m)"
      {
        type: 'guess',
        id: 'big-thunder-r2',
        question: 'How tall do you need to be to ride Big Thunder now?',
        answer: 38,
        min: 30,
        max: 54,
        step: 1,
        unit: 'inches',
        tolerance: 1,
        explain: '38 inches. It was lowered from 40 inches in the 2026 makeover, so more little miners can ride!',
        source: BT,
      },
      // evidence: "Speed: 35 mph (56 km/h)"
      {
        type: 'guess',
        id: 'big-thunder-r3',
        question: 'What is the top speed of a runaway mine train?',
        answer: 35,
        min: 5,
        max: 80,
        step: 1,
        unit: 'mph',
        tolerance: 5,
        explain: 'About 35 mph. Hang on to your hats!',
        source: BT,
      },
      // evidence: "Duration: ~3:00"
      {
        type: 'trivia',
        id: 'big-thunder-r4',
        question: 'About how long is a ride on Big Thunder?',
        choices: ['30 seconds', '3 minutes', '10 minutes', '20 minutes'],
        answer: 1,
        explain: 'About 3 wild minutes.',
        source: BT,
      },
      // evidence: "Barnabas T. Bullion in the American versions"
      {
        type: 'trivia',
        id: 'big-thunder-r5',
        question: 'Who founded the Big Thunder Mining Company?',
        choices: ['Barnabas T. Bullion', 'Pecos Bill', 'Davy Crockett', 'Tom Sawyer'],
        answer: 0,
        explain: 'Barnabas T. Bullion struck gold here, and the mountain has been fighting back ever since.',
        source: BT,
      },
      // evidence: "make a left hand turn into a bat-infested tunnel"
      {
        type: 'truefalse',
        id: 'big-thunder-r6',
        statement: 'One of Big Thunder’s tunnels is full of bats.',
        answer: true,
        explain: 'Fact! Your train swoops into a bat-infested tunnel.',
        source: BT,
      },
      // evidence: "now features more than 2,000 bats in that section alone"
      {
        type: 'guess',
        id: 'big-thunder-r7',
        question: 'Since 2026, about how many bats hang out in the Rainbow Caverns section?',
        answer: 2000,
        min: 10,
        max: 5000,
        step: 50,
        unit: 'bats',
        tolerance: 300,
        explain: 'More than 2,000 bats! Look up when the lightning flashes.',
        source: BT_WKMG,
      },
      // evidence: "a flash of lightning reveals that they aren't as friendly as they first appear"
      {
        type: 'trivia',
        id: 'big-thunder-r8',
        question: 'In the new Rainbow Caverns, what shows you the cave is not as friendly as it looks?',
        choices: ['A flash of lightning', 'A ringing bell', 'A goat sneezing', 'A train whistle'],
        answer: 0,
        explain: 'A flash of lightning! The forces of Big Thunder do not like being disturbed.',
        source: BT_DTB,
      },
      // evidence: guests will be able to see "that gold motherlode" after cresting one of the last hills
      {
        type: 'trivia',
        id: 'big-thunder-r9',
        question: 'Near the end of the ride, what treasure do you finally see?',
        choices: ['A pirate chest', 'The gold motherlode', 'A dragon egg', 'A crown'],
        answer: 1,
        explain: 'The gold motherlode the miners have been digging for!',
        source: BT_WKMG,
      },
      // evidence: "we replaced the track, the vehicles, and the ride control system"
      {
        type: 'trivia',
        id: 'big-thunder-r10',
        question: 'In the 2025 to 2026 makeover, what did Imagineers replace?',
        choices: [
          'The track, the trains and the ride control system',
          'Only the paint',
          'Only the seat belts',
          'Nothing at all',
        ],
        answer: 0,
        explain: 'Pretty much everything that moves: new track, new trains and a new control system.',
        source: BT_NT26,
      },
      // evidence: "the original maintenance shed was removed to accommodate the new Villains Land"
      {
        type: 'truefalse',
        id: 'big-thunder-r11',
        statement: 'Big Thunder’s old maintenance shed was removed to make room for Villains Land.',
        answer: true,
        explain: 'Fact! A new land is coming to the area behind the mountain.',
        source: BT,
      },
      // evidence: The ride name mirrors Tony Baxter's initials, "TB – BT."
      {
        type: 'trivia',
        id: 'big-thunder-r12',
        question: 'Big Thunder’s initials, B.T., are a secret nod to whom?',
        choices: ['Tony Baxter, its designer', 'Buzz and Tinker Bell', 'Big Toe', 'Bill Thompson'],
        answer: 0,
        explain: 'Flip T.B. (Tony Baxter) and you get B.T. (Big Thunder)!',
        source: BT_MV,
      },
      // evidence: "U.R. Daring, U.B. Bold, I.M. Brave, I.B. Hearty, U.R. Courageous, and I.M. Fearless"
      {
        type: 'trivia',
        id: 'big-thunder-r13',
        question: 'Which of these is the real name of a Big Thunder train?',
        choices: ['I.M. Fearless', 'U.R. Sleepy', 'I.M. Hungry', 'U.B. Quiet'],
        answer: 0,
        explain: 'I.M. Fearless! The others are U.R. Daring, U.B. Bold, I.M. Brave, I.B. Hearty and U.R. Courageous.',
        source: BT_MV,
      },
      // evidence: a birdcage labeled "Rosita," a tribute to the canary from The Enchanted Tiki Room
      {
        type: 'truefalse',
        id: 'big-thunder-r14',
        statement: 'The birdcage in the queue is labeled “Rosita,” a nod to a bird from the Enchanted Tiki Room.',
        answer: true,
        explain: 'Fact! A little Imagineer joke hidden in the mine.',
        source: BT_MV,
      },
      // evidence: "the return of two working smokestacks on the mountain's exterior"
      {
        type: 'truefalse',
        id: 'big-thunder-r15',
        statement: 'The 2026 makeover brought back two working smokestacks on the mountain.',
        answer: true,
        explain: 'Fact! Watch for them puffing on the outside of the mountain.',
        source: BT_WKMG,
      },

      // ---- Play ----
      {
        type: 'challenge',
        id: 'big-thunder-x17',
        prompt: 'Do the sounds of the lift hill: click, click, click, then everyone go “Whoooosh!”',
      },
      {
        type: 'challenge',
        id: 'big-thunder-x18',
        prompt: 'Lean left, then right, then hold on to your hat, like you’re on the wildest ride in the wilderness!',
      },
      {
        type: 'challenge',
        id: 'big-thunder-r16',
        prompt: 'Be the mountain! Everyone make a low, spooky rumble to warn the miners to stop digging.',
      },
      {
        type: 'wyr',
        id: 'big-thunder-x22',
        a: 'Sit in the very front of the train',
        b: 'Sit in the very back of the train',
      },
      {
        type: 'wyr',
        id: 'big-thunder-x19',
        a: 'Zoom through the glowing Rainbow Caverns',
        b: 'Find the gold motherlode at the end',
      },
      {
        type: 'emoji',
        id: 'big-thunder-x23',
        emojis: '⛏️ 🪙 ✨',
        hint: 'Barnabas T. Bullion struck it here.',
        choices: ['Gold', 'Candy', 'Pizza', 'Seashells'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'big-thunder-x24',
        emojis: '🌈 🕳️ 💧 🦇',
        hint: 'The glowing cave where your ride begins.',
        choices: ['Rainbow Caverns', 'Skull Rock', 'Cave of Wonders', 'Splash Pool'],
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
      // ---- Look around the queue, in walk order ----
      // source: TI_BM. evidence: tap points sit "under the Frontierland Railroad Station"
      {
        type: 'spy',
        id: 'tianas-bayou-s1',
        prompt: 'At the very start of the line, look up. What is right above you?',
        hint: 'The Frontierland train station! The Walt Disney World Railroad even rolls through a tunnel inside this ride.',
      },
      // source: TI_AM. evidence: Visitors are greeted with a sign reading "Everybody's welcome!"
      {
        type: 'spy',
        id: 'tianas-bayou-s2',
        prompt: 'Find the sign that greets everyone in line. What does it say?',
        hint: '“Everybody’s welcome!” That is the heart of Tiana’s Foods and of her big party.',
      },
      // source: TI_BM. evidence: birdhouses are redesigned and "a faux radio show plays during the wait"
      {
        type: 'spy',
        id: 'tianas-bayou-s3',
        prompt: 'Spot a birdhouse in the trees, and listen for the radio show playing.',
        hint: 'The radio show is a pretend broadcast from Tiana’s world that sets the mood while you wait.',
      },
      // source: TI_AM. evidence: "a children's garden, birdhouses, and a vintage delivery vehicle"
      {
        type: 'spy',
        id: 'tianas-bayou-s4',
        prompt: 'Find the children’s garden. What is growing?',
        hint: 'Tiana’s Foods is a co-op where everybody pitches in, even the kids who tend the garden.',
      },
      // source: TI_BM. evidence: "A Tiana's Foods delivery truck is parked in a prime spot near the office entrance"
      {
        type: 'spy',
        id: 'tianas-bayou-s5',
        prompt: 'Find the old Tiana’s Foods delivery truck.',
        hint: 'Vintage trucks like this set the story in the 1920s, when the movie takes place.',
      },
      // source: TIANA, TI_AM. evidence: "a mural designed by Louisiana artist Malaika Favorite"
      {
        type: 'spy',
        id: 'tianas-bayou-s6',
        prompt: 'Find the mural on the yellow barn. Pick your favorite part.',
        hint: 'It was painted by Louisiana artist Malaika Favorite just for this ride.',
      },
      // source: TIANA. evidence: "a weathervane crafted by Louisiana blacksmiths Darryl Reeves and Karina Roca"
      {
        type: 'spy',
        id: 'tianas-bayou-s7',
        prompt: 'Look up high for the weathervane on the building.',
        hint: 'Louisiana blacksmiths Darryl Reeves and Karina Roca made it by hand.',
      },
      // source: TI_AM. evidence: headline "Princess Tiana throws Mardi Gras party for all of New Orleans"
      {
        type: 'spy',
        id: 'tianas-bayou-s8',
        prompt: 'In Tiana’s office, find the newspaper headline about her party.',
        hint: 'The New Orleans Business Journal says Tiana is throwing a Mardi Gras party for all of New Orleans!',
      },
      // source: TI_AM. evidence: "A cooking-class poster whose paper-like art style matches the "Almost There" sequence"
      {
        type: 'spy',
        id: 'tianas-bayou-s15',
        prompt: 'On the office bulletin board, find the cooking-class poster. Does its art look like cut paper?',
        hint: 'Its paper-like style matches “Almost There,” a dreamy song scene from the movie.',
      },
      // source: TI_AM. evidence: A letter signed "Eric G." is a tribute to Eric Goldberg, Louis's supervising animator
      {
        type: 'spy',
        id: 'tianas-bayou-s9',
        prompt: 'Find a letter signed “Eric G.”',
        hint: 'It’s a thank-you to Eric Goldberg, the Disney animator who brought Louis the alligator to life.',
      },
      // source: TI_AM. evidence: A poster for "Firefly Five Plus Lou" references the Firehouse Five Plus Two
      {
        type: 'spy',
        id: 'tianas-bayou-s10',
        prompt: 'Find the poster for a band called the “Firefly Five Plus Lou.”',
        hint: 'It’s a nod to the Firehouse Five Plus Two, a real band of Disney artists who played at Disneyland long ago.',
      },
      // source: TI_AM. evidence: Portraits and cooking awards honor Tiana's late father, James
      {
        type: 'spy',
        id: 'tianas-bayou-s11',
        prompt: 'In the family hallway, find a picture of Tiana’s dad, James.',
        hint: 'He dreamed of a restaurant with Tiana. His portraits and cooking awards show how proud she is of him.',
      },
      // source: TI_AM. evidence: A chalkboard message from Tiana reads "Celebration at my house, tonight!"
      {
        type: 'spy',
        id: 'tianas-bayou-s12',
        prompt: 'In the kitchen, find Tiana’s chalkboard message.',
        hint: '“Celebration at my house, tonight!” The beignets look fresh, like someone just stepped out.',
      },
      // source: TI_AM. evidence: A certificate gives Tiana's full name as Tiana Rogers
      {
        type: 'spy',
        id: 'tianas-bayou-s13',
        prompt: 'In the history hallway, find a certificate with Tiana’s full name on it.',
        hint: 'It says Tiana Rogers. The framed articles trace Tiana’s Foods all the way back to 1927.',
      },
      // source: TI_AM. evidence: messages such as "We are stronger together!" and "All are welcome!"
      {
        type: 'spy',
        id: 'tianas-bayou-s14',
        prompt: 'In the salt mine tunnel, find the safety video and the messages around it.',
        hint: '“We are stronger together!” Tiana’s Foods sits on a salt dome, which is why the ride is up so high.',
      },
      // evidence: Visitors are greeted with a sign reading "Everybody's welcome!"
      {
        type: 'photo',
        id: 'tianas-bayou-photo1',
        prompt: 'From the start of the line, snap the “Everybody’s welcome!” sign.',
        tip: 'Stand next to it with your family.',
        source: TI_AM,
      },
      // evidence: "A Tiana's Foods delivery truck is parked in a prime spot near the office entrance"
      {
        type: 'photo',
        id: 'tianas-bayou-photo2',
        prompt: 'From the line, photograph the old Tiana’s Foods delivery truck.',
        tip: 'Try to get the Tiana’s Foods name in the picture.',
        source: TI_BM,
      },
      // evidence: "a mural designed by Louisiana artist Malaika Favorite"
      {
        type: 'photo',
        id: 'tianas-bayou-photo3',
        prompt: 'From the line, snap the big mural on the Tiana’s Foods barn.',
        tip: 'Pick your favorite part and zoom in.',
        source: TI_AM,
      },
      // evidence: "a weathervane crafted by Louisiana blacksmiths Darryl Reeves and Karina Roca"
      {
        type: 'photo',
        id: 'tianas-bayou-photo4',
        prompt: 'From the line, tilt your camera up and snap the weathervane on the building.',
        tip: 'It was made by hand, so look for the fine details.',
        source: TIANA,
      },
      // evidence: "a children's garden, birdhouses, and a vintage delivery vehicle"
      {
        type: 'photo',
        id: 'tianas-bayou-photo5',
        prompt: 'From the line, photograph a birdhouse in the children’s garden.',
        tip: 'See if you can find a few different ones.',
        source: TI_AM,
      },
      // evidence: chalkboard message reading "Celebration at my house, tonight! Everybody's welcome!"
      {
        type: 'photo',
        id: 'tianas-bayou-photo6',
        prompt: 'From the line in Tiana’s kitchen, snap the chalkboard message and the plate of beignets.',
        tip: 'Look for the table with the fresh beignets.',
        source: TI_AM,
      },

      // ---- Trivia ----
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
        question: 'In the finale, Mama Odie keeps her snake Juju from stealing her what?',
        choices: ['Hat', 'Beignets', 'Gumbo', 'Glasses'],
        answer: 1,
        explain: 'Beignets! Those yummy New Orleans doughnuts.',
        source: TIANA,
      },
      // evidence: "The attraction is set a year after the events of The Princess and the Frog."
      {
        type: 'truefalse',
        id: 'tianas-bayou-x3',
        statement: 'The ride’s story takes place ten years after the movie.',
        answer: false,
        explain: 'Fiction! It’s set just one year later.',
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
        question: 'What is the top speed of your log on the big drop?',
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
      // evidence: "In total, there are 48 Audio-Animatronics figures in the attraction."
      {
        type: 'guess',
        id: 'tianas-bayou-r1',
        question: 'How many Audio-Animatronics figures are in the ride?',
        answer: 48,
        min: 5,
        max: 150,
        step: 1,
        unit: 'figures',
        tolerance: 6,
        explain: '48 figures, from Tiana to a whole band of bayou critters!',
        source: TIANA,
      },
      // evidence: "Tiana's Foods, built on a salt dome"
      {
        type: 'trivia',
        id: 'tianas-bayou-r2',
        question: 'In the story, what is Tiana’s Foods built on top of?',
        choices: ['A salt dome', 'A volcano', 'A pirate ship', 'A giant lily pad'],
        answer: 0,
        explain: 'A salt dome! That explains why the ride rises so high above the bayou.',
        source: TIANA,
      },
      // evidence: "On the day that guests visit, it is Carnival season"
      {
        type: 'trivia',
        id: 'tianas-bayou-r3',
        question: 'What season is it in New Orleans on the day you visit?',
        choices: ['Carnival season', 'Snow season', 'Hurricane season', 'Back-to-school season'],
        answer: 0,
        explain: 'Carnival season, the time for Mardi Gras parties!',
        source: TIANA,
      },
      // evidence: "The vehicle descends the 52-foot (16 m) drop at a 45-degree angle"
      {
        type: 'guess',
        id: 'tianas-bayou-r4',
        question: 'At what angle does your log plunge down the big drop?',
        answer: 45,
        min: 10,
        max: 90,
        step: 5,
        unit: 'degrees',
        tolerance: 5,
        explain: '45 degrees, down 52 feet. Hold on to your beignets!',
        source: TIANA,
      },
      // evidence: "Byhalia the beaver, Gritty the rabbit, Beau the opossum, Apollo the raccoon," "Rufus the turtle, and Timoléon the otter"
      {
        type: 'trivia',
        id: 'tianas-bayou-r5',
        question: 'In the critter band, what kind of animal is Timoléon?',
        choices: ['An otter', 'A frog', 'A pelican', 'A crab'],
        answer: 0,
        explain:
          'An otter! He joins Byhalia the beaver, Gritty the rabbit, Beau the opossum, Apollo the raccoon and Rufus the turtle.',
        source: TIANA,
      },
      // evidence: "Byhalia the beaver"
      {
        type: 'trivia',
        id: 'tianas-bayou-r6',
        question: 'Which critter band member is a beaver?',
        choices: ['Byhalia', 'Rufus', 'Apollo', 'Gritty'],
        answer: 0,
        explain: 'Byhalia the beaver. Rufus is a turtle, Apollo a raccoon and Gritty a rabbit.',
        source: TIANA,
      },
      // evidence: "The project was led by Imagineer Senior Creative Producer Charita Carter"
      {
        type: 'trivia',
        id: 'tianas-bayou-r7',
        question: 'Which Imagineer led the team that made Tiana’s Bayou Adventure?',
        choices: ['Charita Carter', 'Marc Davis', 'Herb Ryman', 'Roger Broggie'],
        answer: 0,
        explain: 'Charita Carter led the project as Senior Creative Producer.',
        source: TIANA,
      },
      // evidence: "consulted with cultural institutions, chefs, academics, musicians, and experienced Mardi Gras in New Orleans"
      {
        type: 'truefalse',
        id: 'tianas-bayou-r8',
        statement: 'The Imagineers went to New Orleans and talked with chefs and musicians while making this ride.',
        answer: true,
        explain: 'Fact! They even experienced Mardi Gras there to get every detail right.',
        source: TIANA,
      },
      // evidence: "Height restriction: 40 in (102 cm)"
      {
        type: 'guess',
        id: 'tianas-bayou-r9',
        question: 'How tall do you need to be to ride Tiana’s Bayou Adventure?',
        answer: 40,
        min: 30,
        max: 54,
        step: 1,
        unit: 'inches',
        tolerance: 1,
        explain: '40 inches tall.',
        source: TIANA,
      },
      // evidence: "After the short drop down the waterfall" / "Mama Odie then uses her magic to shrink the riders" / final lift, "Full drop and splashdown" / finale
      {
        type: 'order',
        id: 'tianas-bayou-r10',
        prompt: 'Put these ride moments in order.',
        items: [
          'A short drop down a waterfall',
          'Mama Odie shrinks you tiny',
          'The big 52-foot drop',
          'The party with Tiana and the band',
        ],
        explain: 'A little splash, a shrinking spell, the big drop, then the best party on the bayou!',
        source: TI_BM,
      },
      // evidence: "After walking through the offices of Tiana's Foods, guests board a log-shaped vehicle."
      {
        type: 'truefalse',
        id: 'tianas-bayou-r11',
        statement: 'Before boarding, you walk through the offices of Tiana’s Foods.',
        answer: true,
        explain: 'Fact! Tiana’s office, her kitchen and the history hallways are all part of the line.',
        source: TIANA,
      },
      // evidence: The lift frames the Tiana's Foods water tower
      {
        type: 'trivia',
        id: 'tianas-bayou-r12',
        question: 'Riding up the first lift, what tall Tiana’s Foods structure do you see?',
        choices: ['A water tower', 'A lighthouse', 'A windmill', 'A rocket'],
        answer: 0,
        explain: 'The Tiana’s Foods water tower stands tall over the bayou.',
        source: TI_BM,
      },
      // evidence: A "Shortcut to the Bayou" sign
      {
        type: 'trivia',
        id: 'tianas-bayou-r13',
        question: 'Which sign do you pass that looks like it might be a wrong turn?',
        choices: ['“Shortcut to the Bayou”', '“No Frogs Allowed”', '“Beignets This Way”', '“Gators Only”'],
        answer: 0,
        explain: '“Shortcut to the Bayou.” Don’t worry, Tiana knows the way!',
        source: TI_BM,
      },
      // evidence: Mondo plays congas as guests shrink
      {
        type: 'trivia',
        id: 'tianas-bayou-r14',
        question: 'Mondo the frog plays which instrument while you shrink?',
        choices: ['Congas', 'Tuba', 'Violin', 'Harp'],
        answer: 0,
        explain: 'Mondo plays the congas. Bum-bum-bum!',
        source: TI_BM,
      },
      // evidence: A sign announces the home of Tiana and Naveen, "Fleur du Bayou"
      {
        type: 'trivia',
        id: 'tianas-bayou-r15',
        question: 'What is the name of Tiana and Naveen’s home, where the finale party happens?',
        choices: ['Fleur du Bayou', 'Bayou Palace', 'Frog Manor', 'Gumbo Hall'],
        answer: 0,
        explain: 'Fleur du Bayou, home of Tiana and Naveen.',
        source: TI_BM,
      },
      // evidence: Charlotte La Bouff, Eudora, Lari, Louis, Tiana, Ralphie, and Naveen appear
      {
        type: 'truefalse',
        id: 'tianas-bayou-r16',
        statement: 'Tiana’s best friend Charlotte La Bouff is at the finale party.',
        answer: true,
        explain: 'Fact! Charlotte joins Tiana, Naveen, Ralphie, Louis and more.',
        source: TI_BM,
      },

      // ---- Play ----
      {
        type: 'challenge',
        id: 'tianas-bayou-x19',
        prompt: 'Be the critter band! Everyone picks a band member’s instrument and plays it with your voice.',
      },
      {
        type: 'challenge',
        id: 'tianas-bayou-x22',
        prompt: 'It’s Carnival season! Do a little Mardi Gras dance in place, like you’re at Tiana’s party.',
      },
      {
        type: 'challenge',
        id: 'tianas-bayou-r17',
        prompt: 'Mama Odie’s spell! Everyone shrink down tiny, then pop up big and cheer for the finale.',
      },
      {
        type: 'wyr',
        id: 'tianas-bayou-r18',
        a: 'Meet Mama Odie and Juju',
        b: 'Jam with the critter zydeco band',
      },
      {
        type: 'emoji',
        id: 'tianas-bayou-x27',
        emojis: '🐊 🌽 🔍',
        hint: 'He’s peeking out of the stalks looking for musicians.',
        choices: ['Louis', 'Tick-Tock', 'Ray', 'Naveen'],
        answer: 0,
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
      // ---- Look around Grizzly Hall, in walk order ----
      // source: CB_TP. evidence: "Each Frontierland building has a date, and Grizzly Hall's is 1898, shown at the peak of the building" (March 2025)
      {
        type: 'spy',
        id: 'country-bears-s17',
        prompt: 'Before you go in, look at the peak of the building for a year.',
        hint: 'It says 1898. That is the year Grizzly Hall “opened” in the bears’ story.',
      },
      // source: CB_NT. evidence: three bears, "Big Al is center, Zeke left, and Zeb right"
      {
        type: 'spy',
        id: 'country-bears-s1',
        prompt: 'Outside, find the carved wooden bears over the entrance. Who is in the middle?',
        hint: 'Big Al! Zeke is on the left and Zeb on the right, carved in their new show costumes.',
      },
      // source: CB_NT. evidence: "Don't hibernate on this one! Go!" (National Growl)
      {
        type: 'spy',
        id: 'country-bears-s2',
        prompt: 'Find the poster with reviews from critics. Read the funniest one out loud.',
        hint: 'Try “Don’t hibernate on this one! Go!” from the National Growl.',
      },
      // source: CB_TP, CB_IM. evidence: scratch marks on the floor "made by bear claws, naturally!" (March 2025); "Yes, the claw marks are still on the floor"
      {
        type: 'spy',
        id: 'country-bears-s18',
        prompt: 'Look down at the lobby floor for scratch marks.',
        hint: 'They are claw marks, made by bears, naturally!',
      },
      // source: CB_NT. evidence: oval portraits "Mostly holdovers by Imagineer Marc Davis"
      {
        type: 'spy',
        id: 'country-bears-s3',
        prompt: 'In the lobby, find an oval portrait of a bear with an instrument.',
        hint: 'Many were painted by Marc Davis, the Imagineer who dreamed up the bears in the first place.',
      },
      // source: CB_NT, CB_BM. evidence: Earnest's rehearsal fiddle in a lobby case; plaque noting "fireproofing proved necessary"
      {
        type: 'spy',
        id: 'country-bears-s5',
        prompt: 'Find Ernest’s burnt fiddle in a display case.',
        hint: 'He played so hot at rehearsal that “fireproofing proved necessary.”',
      },
      // source: CB_NT, CB_IM. evidence: case holds a Hungry Bear Restaurant napkin with Henry's handwritten notes and his lyric notebook; "Setlist development on a Hungry Bear Restaurant napkin"
      {
        type: 'spy',
        id: 'country-bears-s19',
        prompt: 'In the same case, find a napkin with a song list scribbled on it.',
        hint: 'Henry wrote his setlist on a napkin from the Hungry Bear Restaurant.',
      },
      // source: CB_NT, CB_IM. evidence: "A wooden metronome set to 88 BPM, provided by Gomer"; "Wooden metronome used in the recording studio (Bees/min)"
      {
        type: 'spy',
        id: 'country-bears-s20',
        prompt: 'Find the wooden metronome. What is it counting?',
        hint: 'Not beats per minute, but bees per minute! It was provided by Gomer.',
      },
      // source: CB_NT, CB_IM. evidence: vintage props case: "Ted's washboard, three jugs ... Fred's harmonica, Oscar's original teddy bear, and the top hat of Ursus H. Bear"
      {
        type: 'spy',
        id: 'country-bears-s21',
        prompt: 'Find a case of the bands’ early gear: a washboard, jugs and a top hat.',
        hint: 'The top hat belonged to Ursus H. Bear, who founded Grizzly Hall.',
      },
      // source: CB_NT, CB_IM. evidence: "The Daily Bee" newspaper, headline "Venue Promises a 'Wild and Wooly' Time," opening in "Octobear 1898"
      {
        type: 'spy',
        id: 'country-bears-s22',
        prompt: 'Find the old newspaper from opening day. What is the month called?',
        hint: 'Octobear! Another bear pun, and it says 1898 like the building.',
      },
      // source: CB_NT, CB_IM. evidence: "A red vest worn by Big Al on his farewell tour"; center patch "Big Al's 10th Farewell Tour" with an "11" added; "he'll never retire"
      {
        type: 'spy',
        id: 'country-bears-s23',
        prompt: 'Find Big Al’s red tour vest. Look closely at the center patch.',
        hint: 'It says 10th Farewell Tour, but somebody added an 11. He never retires!',
      },
      // source: CB_NT, CB_IM. evidence: "'Les Paw' guitar belonging to Romeo McGrowl, plus his gold belt buckle with an 'R'"
      {
        type: 'spy',
        id: 'country-bears-s24',
        prompt: 'Find Romeo McGrowl’s guitar. What is its pun name?',
        hint: 'It is a “Les Paw,” a pun on a famous guitar.',
      },
      // source: CB_NT, CB_BM, CB_IM. evidence: "Beary Poppins" poster in the "Awards & Memorabilia" case; Trixie's book "I Bearly Remember" on display
      {
        type: 'spy',
        id: 'country-bears-s14',
        prompt: 'Find the poster called “Beary Poppins.”',
        hint: 'It sits near Trixie’s book, “I Bearly Remember.” The bears love a good pun.',
      },
      // source: CB_NT. evidence: awards case: "A golden statue of Teddi Barra in her floral swing"
      {
        type: 'spy',
        id: 'country-bears-s25',
        prompt: 'In the awards case, find the golden statue of a bear on a swing.',
        hint: 'That is Teddi Barra, in her floral swing.',
      },
      // source: CB_IM. evidence: lobby cases hold "artifacts, magazines, awards, and…a book!"
      {
        type: 'spy',
        id: 'country-bears-s15',
        prompt: 'Find the bear magazines in a display case. Can you spot a bear pun in a title?',
        hint: 'The lobby cases hold artifacts, magazines, awards and even a book.',
      },
      // source: CB_TP, CB_NT. evidence: "Max, Melvin, and Buff are the three characters hanging on the wall" (March 2025); "Mounted moose, buffalo, and deer heads (Melvin, Buff, and Max)"
      {
        type: 'spy',
        id: 'country-bears-s16',
        prompt: 'Before the show, look at the wall for a moose, a buffalo and a deer.',
        hint: 'They are Melvin, Buff and Max. They banter with guests before the show!',
      },
      // source: CB_TP. evidence: Hidden Mickey "in the ornate frame of the bear portrait over the center stage" ("Take a close look at the ornate frame") (March 2025)
      {
        type: 'spy',
        id: 'country-bears-s26',
        prompt: 'In the theater, look at the ornate frame of the bear portrait over the center stage. Can you find a hidden Mickey?',
        hint: 'It is tucked into the frame. Look closely before the show starts!',
      },
      // evidence: three bears, "Big Al is center, Zeke left, and Zeb right"
      {
        type: 'photo',
        id: 'country-bears-photo1',
        prompt: 'From outside the doors, snap the carved wooden bears over the entrance.',
        tip: 'Big Al is in the middle.',
        source: CB_NT,
      },
      // evidence: "Don't hibernate on this one! Go!" (National Growl)
      {
        type: 'photo',
        id: 'country-bears-photo2',
        prompt: 'From the line, photograph the poster with funny critic reviews.',
        tip: 'Try to fit “Don’t hibernate on this one! Go!” in your picture.',
        source: CB_NT,
      },
      // evidence: Ernest's burnt rehearsal fiddle, plaque noting "fireproofing proved necessary"
      {
        type: 'photo',
        id: 'country-bears-photo3',
        prompt: 'From the lobby, snap Ernest’s burnt fiddle in its display case.',
        tip: 'Look for the label about fireproofing.',
        source: CB_NT,
      },

      // evidence: "A red vest worn by Big Al on his farewell tour" in the World Tour case
      {
        type: 'photo',
        id: 'country-bears-photo4',
        prompt: 'From the lobby, photograph Big Al’s red farewell tour vest in its case.',
        tip: 'Zoom in on the center patch with the added “11.”',
        source: CB_NT,
      },
      // evidence: "A golden statue of Teddi Barra in her floral swing"
      {
        type: 'photo',
        id: 'country-bears-photo5',
        prompt: 'From the lobby, snap the golden statue of Teddi Barra on her swing.',
        tip: 'It is in the awards case.',
        source: CB_NT,
      },
      // evidence: "'Les Paw' guitar belonging to Romeo McGrowl"
      {
        type: 'photo',
        id: 'country-bears-photo6',
        prompt: 'From the lobby, take a photo of Romeo McGrowl’s “Les Paw” guitar.',
        tip: 'Look in the world tour case.',
        source: CB_NT,
      },

      // ---- Trivia ----
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
      // evidence: "it was revealed that he would be renamed Romeo McGrowl"
      {
        type: 'trivia',
        id: 'country-bears-x6',
        question: 'In the new show, Liver Lips McGrowl has a new name. What is it?',
        choices: ['Romeo McGrowl', 'Elvis McGrowl', 'Rocky McGrowl', 'Buddy McGrowl'],
        answer: 0,
        explain: 'He’s now Romeo McGrowl, the romantic of the band.',
        source: BEARS,
      },
      // evidence: "the three trophy heads of Max, Buff and Melvin hung on the right side of the theater"
      {
        type: 'trivia',
        id: 'country-bears-x7',
        question: 'Three talking trophy heads hang on the wall. Which names are theirs?',
        choices: ['Max, Buff and Melvin', 'Huey, Dewey and Louie', 'Larry, Moe and Curly', 'Tom, Dick and Harry'],
        answer: 0,
        explain: 'Max the deer, Buff the buffalo and Melvin the moose.',
        source: BEARS,
      },
      // evidence: "The Bare Necessities" (The Jungle Book): Cast
      {
        type: 'trivia',
        id: 'country-bears-x8',
        question: 'The new show plays Disney songs country-style. Which bear-y song is one of them?',
        choices: ['“The Bare Necessities”', '“Let It Go”', '“Under the Sea”', '“Be Our Guest”'],
        answer: 0,
        explain: '“The Bare Necessities” from The Jungle Book, sung by the whole gang!',
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
      // evidence: "taps on the dishpan with "a real ol' country beat""
      {
        type: 'trivia',
        id: 'country-bears-x11',
        question: 'Zeke from the Five Bear Rugs plays a banjo and taps on what?',
        choices: ['A dishpan', 'A trash can', 'A cowbell', 'A teapot'],
        answer: 0,
        explain: 'Zeke taps a dishpan with “a real ol’ country beat.”',
        source: BEARS,
      },
      // evidence: "Try Everything" (Zootopia): Trixie with the Sun Bonnet Trio
      {
        type: 'trivia',
        id: 'country-bears-r1',
        question: 'Which song does Trixie sing with the Sun Bonnet Trio?',
        choices: ['“Try Everything”', '“Let It Go”', '“How Far I’ll Go”', '“Part of Your World”'],
        answer: 0,
        explain: '“Try Everything” from Zootopia, country-style!',
        source: BEARS,
      },
      // evidence: "Remember Me" (Coco): Big Al
      {
        type: 'trivia',
        id: 'country-bears-r2',
        question: 'Big Al sings a song from Coco. Which one?',
        choices: ['“Remember Me”', '“Un Poco Loco”', '“Hakuna Matata”', '“Kiss the Girl”'],
        answer: 0,
        explain: '“Remember Me,” in Big Al’s famous low, slow style.',
        source: BEARS,
      },
      // evidence: "Kiss the Girl" (The Little Mermaid): Romeo McGrowl
      {
        type: 'trivia',
        id: 'country-bears-r3',
        question: 'Romeo McGrowl sings which song from The Little Mermaid?',
        choices: ['“Kiss the Girl”', '“Under the Sea”', '“Poor Unfortunate Souls”', '“Part of Your World”'],
        answer: 0,
        explain: '“Kiss the Girl.” Very romantic, Romeo!',
        source: BEARS,
      },
      // evidence: "Fixer Upper" (Frozen): Terrence
      {
        type: 'trivia',
        id: 'country-bears-r4',
        question: 'Terrence sings a song from Frozen. Which one?',
        choices: ['“Fixer Upper”', '“Let It Go”', '“In Summer”', '“Into the Unknown”'],
        answer: 0,
        explain: '“Fixer Upper,” sung by the bear they call “the Shaker.”',
        source: BEARS,
      },
      // evidence: "Come Again" (from the original show): Henry, Sammy, Melvin, Max, and Buff
      {
        type: 'trivia',
        id: 'country-bears-r5',
        question: 'Which song from the original 1971 show still ends the new show?',
        choices: ['“Come Again”', '“Davy Crockett”', '“Old Slew Foot”', '“Pianjo”'],
        answer: 0,
        explain: '“Come Again,” a sweet tip of the hat to the classic show.',
        source: BEARS,
      },
      // evidence: song list: "Try Everything" (2), "Kiss the Girl" (3), "Fixer Upper" (6), "The Bare Necessities" (9)
      {
        type: 'order',
        id: 'country-bears-r6',
        prompt: 'Put these songs in the order the bears sing them.',
        items: ['“Try Everything”', '“Kiss the Girl”', '“Fixer Upper”', '“The Bare Necessities”'],
        explain: 'Trixie, then Romeo, then Terrence, and then almost the whole gang for “The Bare Necessities.”',
        source: BEARS,
      },
      // evidence: "Instead she descends from a hole in the ceiling on her swing, which is decorated with pink roses."
      {
        type: 'trivia',
        id: 'country-bears-r7',
        question: 'Teddi Barra’s swing is decorated with what?',
        choices: ['Pink roses', 'Honeycombs', 'Fish', 'Stars'],
        answer: 0,
        explain: 'Pink roses! What an entrance.',
        source: BEARS,
      },

      // ---- Play ----
      {
        type: 'challenge',
        id: 'country-bears-x18',
        prompt: 'Play air banjo like Zeke and tap a pretend dishpan with “a real ol’ country beat.”',
      },
      {
        type: 'wyr',
        id: 'country-bears-x21',
        a: 'Swing down from the ceiling like Teddi Barra',
        b: 'Hang on the wall and tell jokes like Max, Buff and Melvin',
      },
      {
        type: 'emoji',
        id: 'country-bears-x25',
        emojis: '🐻 🎩 🦝',
        hint: 'The host of the show, with his raccoon pal Sammy.',
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
        hint: 'A big bear with a blue bow.',
        choices: ['Trixie', 'Teddi Barra', 'Bunny', 'Beulah'],
        answer: 0,
      },
      // evidence: newspaper "The Daily Bee" announcing Grizzly Hall's opening in "Octobear 1898"
      {
        type: 'trivia',
        id: 'country-bears-y1',
        question: 'In the lobby’s old newspaper, in which pun-filled month did Grizzly Hall open?',
        choices: ['Octobear', 'Junebug', 'Marchmallow', 'Decembear'],
        answer: 0,
        explain: 'The Daily Bee says it opened in “Octobear 1898.”',
        source: CB_NT,
      },
      // evidence: center patch reads "Big Al's 10th Farewell Tour" with an "11" added
      {
        type: 'truefalse',
        id: 'country-bears-y2',
        statement: 'Big Al’s farewell tour vest in the lobby has an extra “11” added to its “10th” patch.',
        answer: true,
        explain: 'Fact! He keeps saying farewell, but he never retires.',
        source: CB_NT,
      },
      // evidence: "'Les Paw' guitar belonging to Romeo McGrowl"
      {
        type: 'trivia',
        id: 'country-bears-y3',
        question: 'What pun name is on Romeo McGrowl’s guitar in the lobby case?',
        choices: ['Les Paw', 'Fender Bender', 'Big Claw', 'Bear Strat'],
        answer: 0,
        explain: 'It is a “Les Paw,” a play on a famous guitar brand.',
        source: CB_NT,
      },
      // evidence: "I Bearly Remember: My Long Journey From the Foothills to the Footlights"
      {
        type: 'trivia',
        id: 'country-bears-y4',
        question: 'What is the title of Trixie’s book in the lobby?',
        choices: ['I Bearly Remember', 'Honey and Me', 'Bear Necessities', 'Grizzly Gossip'],
        answer: 0,
        explain: '“I Bearly Remember: My Long Journey From the Foothills to the Footlights.”',
        source: CB_IM,
      },
      // evidence: "Oscar's original teddy bear (modeled from Marc Davis sketches)"
      {
        type: 'trivia',
        id: 'country-bears-y5',
        question: 'Oscar’s original teddy bear in the lobby case is modeled from whose sketches?',
        choices: ['Marc Davis', 'Walt Disney', 'Xavier Atencio', 'Al Bertino'],
        answer: 0,
        explain: 'Marc Davis sketched the original bears.',
        source: CB_IM,
      },
    ],
  },

  'haunted-mansion': {
    facts: [
      // evidence: "Unlike its Disneyland counterpart, the stretching rooms are not elevators and instead have the ceilings rise."
      { text: 'In Florida, the Stretching Room isn’t an elevator. The ceiling rises up instead!', source: HM },
      // evidence: "The ride narration was performed by Paul Frees in the role of the Ghost Host."
      { text: 'Paul Frees is the voice of the Ghost Host who guides you through the Mansion.', source: HM },
      // evidence: "Davis and Coats, two of the Mansion's main designers"
      { text: 'Marc Davis and Claude Coats were two of the Mansion’s main designers.', source: HM },
      // evidence: "Little Leota appears above the vehicles as guests disembark"
      { text: 'Little Leota waves goodbye from above as you climb out of your Doom Buggy.', source: HM },
    ],
    quests: [
      // ---- Look around the queue, in walk order ----
      // source: HM_RG. evidence: "Board a Doom Buggy to tour the happy haunt of 999 ghouls and ghosts who are dying to meet you."
      {
        type: 'spy',
        id: 'haunted-mansion-s1',
        prompt: 'At the entrance, find the sign that invites you in. How many ghosts live here?',
        hint: '999 ghouls and ghosts “who are dying to meet you.” There’s always room for one more.',
      },
      // source: HM_RG. evidence: "A horse harness attached to a hearse gives the illusion of a ghost horse."
      {
        type: 'spy',
        id: 'haunted-mansion-s2',
        prompt: 'Find the hearse out front. What is pulling it?',
        hint: 'An empty harness. The horse must be a ghost!',
      },
      // source: HM_RG, HM. evidence: busts "each carry a rhyme with clues to a murder mystery" (Apr 2026); "a murder mystery for guests to solve featuring the sinister Dread Family"
      {
        type: 'spy',
        id: 'haunted-mansion-s4',
        prompt: 'Find the busts of the Dread Family and read their rhymes.',
        hint: 'Each poem hides a clue about how that family member met their end. Can your group solve the mystery?',
      },
      // source: HM_RG. evidence: "Our Patriarch Dear Departed Grandpa Marc"
      {
        type: 'spy',
        id: 'haunted-mansion-s6',
        prompt: 'Find the tombstone for “Dear Departed Grandpa Marc.”',
        hint: 'It honors Imagineer Marc Davis, who created most of the Mansion’s ghostly characters.',
      },
      // source: HM_RG. evidence: "A composer of note and renown here reposes, his melodies fade as he now decomposes."
      {
        type: 'spy',
        id: 'haunted-mansion-s9',
        prompt: 'Find the Composer’s crypt and read its poem.',
        hint: '“His melodies fade as he now decomposes.” Get it? A DE-composer!',
      },
      // source: HM. evidence: pipe organ from the fictional "Ravenscroft" company, named for vocalist Thurl Ravenscroft
      {
        type: 'spy',
        id: 'haunted-mansion-s10',
        prompt: 'Find the organ with the name “Ravenscroft” on it.',
        hint: 'It is named for Thurl Ravenscroft, a singer who lent his voice to the Mansion.',
      },
      // source: HM. evidence: "the Mariner's brine-filled sepulcher, whose ghost sings and sneezes from within"
      {
        type: 'spy',
        id: 'haunted-mansion-s11',
        prompt: 'Find the sea captain’s tomb. Listen closely. What sounds does he make?',
        hint: 'He sings and sneezes from inside his tomb!',
      },
      // source: HM. evidence: "a crypt for Prudence Pock the poetess, which features haunted moving books"
      {
        type: 'spy',
        id: 'haunted-mansion-s12',
        prompt: 'Find the crypt of Prudence Pock, the ghostly poetess. Watch her books.',
        hint: 'Her books move on their own. She’s still writing poems from the other side!',
      },
      // source: HM_RG. evidence: "Dear Sweet Leota, beloved by all in regions beyond now, but having a ball."
      {
        type: 'spy',
        id: 'haunted-mansion-s13',
        prompt: 'Just before you go inside, find Madame Leota’s tombstone. Keep watching her face.',
        hint: '“Dear Sweet Leota, beloved by all.” You’ll meet her again in the séance room, inside her crystal ball.',
      },
      // evidence: "Board a Doom Buggy to tour the happy haunt of 999 ghouls and ghosts who are dying to meet you."
      {
        type: 'photo',
        id: 'haunted-mansion-photo2',
        prompt: 'From the line, snap the entrance sign about the 999 happy haunts.',
        tip: 'Stand beside it for a family photo.',
        source: HM_RG,
      },
      // evidence: "A horse harness attached to a hearse gives the illusion of a ghost horse."
      {
        type: 'photo',
        id: 'haunted-mansion-photo3',
        prompt: 'From the line, photograph the hearse with the empty horse harness.',
        tip: 'Can you see where the ghost horse should be?',
        source: HM_RG,
      },
      // evidence: busts "each carry a rhyme with clues to a murder mystery"
      {
        type: 'photo',
        id: 'haunted-mansion-photo4',
        prompt: 'From the line, snap one of the Dread Family busts and its rhyme.',
        tip: 'The rhyme holds a clue, so zoom in to read it later.',
        source: HM_RG,
      },
      // evidence: "Our Patriarch Dear Departed Grandpa Marc"
      {
        type: 'photo',
        id: 'haunted-mansion-photo5',
        prompt: 'From the line, photograph the tombstone for “Dear Departed Grandpa Marc.”',
        tip: 'It honors Marc Davis, who helped design the Mansion.',
        source: HM_RG,
      },
      // evidence: "Dear Sweet Leota, beloved by all in regions beyond now, but having a ball."
      {
        type: 'photo',
        id: 'haunted-mansion-photo6',
        prompt: 'From the line near the door, snap Madame Leota’s tombstone.',
        tip: 'Watch her face for a moment before you snap.',
        source: HM_RG,
      },
      // evidence: "the Composer Crypt, which features musical instruments that play variations of"
      {
        type: 'photo',
        id: 'haunted-mansion-r1',
        prompt: 'From the line, strike a spooky pose next to the Composer’s crypt.',
        tip: 'It’s in the graveyard queue, with the other crypts.',
        source: HM,
      },

      // ---- Trivia ----
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
      // evidence: "Madame Leota, a blue-haired medium whose disembodied head appears within a levitating crystal ball"
      {
        type: 'trivia',
        id: 'haunted-mansion-x3',
        question: 'Whose head floats in a crystal ball in the séance room?',
        choices: ['Madame Leota', 'The Hatbox Ghost', 'Constance', 'The Ghost Host'],
        answer: 0,
        explain: 'Madame Leota calls the spirits with her spell.',
        source: HM,
      },
      // evidence: "a group of three ghosts thumbing for a ride"
      {
        type: 'trivia',
        id: 'haunted-mansion-x4',
        question: 'How many hitchhiking ghosts are waiting near the end of the ride?',
        choices: ['1', '3', '5', '999'],
        answer: 1,
        explain: 'Three hitchhiking ghosts. Watch your Doom Buggy!',
        source: HM,
      },
      // evidence: "Florida's bride character, Constance Hatchaway, gleefully recites twisted wedding vows"
      {
        type: 'trivia',
        id: 'haunted-mansion-x5',
        question: 'What is the name of the bride in the attic?',
        choices: ['Constance Hatchaway', 'Prudence Pock', 'Madame Leota', 'Emily Grim'],
        answer: 0,
        explain: 'Constance Hatchaway recites her twisted wedding vows in the attic.',
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
      // evidence: "The Mansion opened to all guests on August 12, 1969." / "Opening date: October 1, 1971" / "In March 2011, a new "interactive queue" debuted at the Walt Disney World location"
      {
        type: 'order',
        id: 'haunted-mansion-x10',
        prompt: 'Put these Mansion moments in order, oldest first.',
        items: [
          'Disneyland’s Mansion opens (1969)',
          'Florida’s Mansion opens (1971)',
          'Florida’s graveyard queue arrives (2011)',
          'The Hatbox Ghost moves in (2023)',
        ],
        explain: 'Disneyland in 1969, Florida in 1971, the graveyard queue in 2011, and the Hatbox Ghost in 2023.',
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
      // evidence: "Once they enter the music room, an invisible pianist plays a sinister version of"
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
      // evidence: "the Hatbox Ghost appears next to it from a blue door"
      {
        type: 'trivia',
        id: 'haunted-mansion-r2',
        question: 'Where does the Hatbox Ghost appear in the Florida Mansion?',
        choices: ['Next to the Endless Hallway', 'In the kitchen', 'On the roof', 'In the gift shop'],
        answer: 0,
        explain: 'He appears from a blue door by the Endless Hallway. Watch his head pop into his hatbox!',
        source: HM,
      },
      // evidence: Bride Constance "marries five times while her husbands mysteriously vanish"
      {
        type: 'guess',
        id: 'haunted-mansion-r3',
        question: 'In the attic, how many times has Constance the bride been married?',
        answer: 5,
        min: 1,
        max: 20,
        step: 1,
        unit: 'times',
        tolerance: 1,
        explain: 'Five! And each husband mysteriously vanished.',
        source: HM_AE,
      },
      // evidence: Her face belongs to Leota Toombs Thomas, and her voice to Eleanor Audley
      {
        type: 'trivia',
        id: 'haunted-mansion-r4',
        question: 'Madame Leota’s face belongs to Imagineer Leota Toombs. Who gave her voice?',
        choices: ['Eleanor Audley', 'Paul Frees', 'Thurl Ravenscroft', 'Mary Blair'],
        answer: 0,
        explain: 'Eleanor Audley. And Leota Toombs also plays Little Leota, who says goodbye at the end!',
        source: HM_AE,
      },
      // evidence: "Ravenscroft," honoring Thurl Ravenscroft, lead vocalist of the singing busts
      {
        type: 'trivia',
        id: 'haunted-mansion-r5',
        question: 'Who is the lead singer of the singing busts?',
        choices: ['Thurl Ravenscroft', 'Walt Disney', 'Paul Frees', 'Buddy Baker'],
        answer: 0,
        explain: 'Thurl Ravenscroft. Many people think that bust is Walt, but it’s Thurl!',
        source: HM_ITM,
      },
      // evidence: "Because each car held from one to three people"
      {
        type: 'trivia',
        id: 'haunted-mansion-r6',
        question: 'How many people can squeeze into one Doom Buggy?',
        choices: ['One to three', 'Six', 'Ten', 'Just one'],
        answer: 0,
        explain: 'One to three people. Snuggle up, it’s spooky in there!',
        source: HM,
      },

      // ---- Play ----
      {
        type: 'challenge',
        id: 'haunted-mansion-x18',
        prompt: 'Everyone do a friendly ghost “Boooo!” Then whisper the Ghost Host’s line: “Room for one more...”',
      },
      {
        type: 'challenge',
        id: 'haunted-mansion-x19',
        prompt: 'Be a singing bust! Stand very still and sing “Grim Grinning Ghosts” in your deepest voice.',
      },
      {
        type: 'challenge',
        id: 'haunted-mansion-x20',
        prompt: 'Give your best Ghost Host welcome speech, in a slow, mysterious voice.',
      },
      {
        type: 'challenge',
        id: 'haunted-mansion-r8',
        prompt:
          'Solve the Dread Family mystery together: each person picks a suspect and gives one clue from the rhymes.',
      },
      {
        type: 'wyr',
        id: 'haunted-mansion-x22',
        a: 'Dance at the ghost ballroom party',
        b: 'Sing with the busts in the graveyard',
      },
      {
        type: 'wyr',
        id: 'haunted-mansion-x25',
        a: 'Ride past the Endless Staircase',
        b: 'Peek into the séance room',
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
      // ---- Look around, in walk order ----
      // source: HOP_RG. evidence: "The brick facade was designed to resemble Independence Hall in Philadelphia."
      {
        type: 'spy',
        id: 'hall-of-presidents-s1',
        prompt: 'Before you go in, look at the brick building. Does it remind you of a famous hall?',
        hint: 'It was designed to look like Independence Hall in Philadelphia, where the Declaration of Independence was signed.',
      },
      // source: HOP_RG. evidence: poster reads "A Celebration of Liberty's Leaders"
      {
        type: 'spy',
        id: 'hall-of-presidents-s2',
        prompt: 'Find the attraction poster by the entrance. What does it celebrate?',
        hint: '“A Celebration of Liberty’s Leaders,” the show’s full name since 2008.',
      },
      // source: HOP_NT. evidence: a "circular rotunda" with "a skylight ceiling"
      {
        type: 'spy',
        id: 'hall-of-presidents-s3',
        prompt: 'In the round lobby, look up. What is in the ceiling?',
        hint: 'A skylight lights up the rotunda, which works like a little museum while you wait.',
      },
      // source: HOP_RG, HOP_NT. evidence: "The Great Seal of the United States is displayed on the museum carpet."
      {
        type: 'spy',
        id: 'hall-of-presidents-s4',
        prompt: 'Look down. Find the big golden seal in the carpet. What bird is on it?',
        hint: 'A bald eagle! It’s the Great Seal of the United States.',
      },
      // source: HOP_NT. evidence: portraits including James Monroe, Franklin D. Roosevelt, and Jimmy Carter
      {
        type: 'spy',
        id: 'hall-of-presidents-s5',
        prompt: 'Find a portrait of a president in the lobby. Can you name who it is?',
        hint: 'Portraits include James Monroe, Franklin D. Roosevelt and Jimmy Carter.',
      },
      // source: HOP_RG. evidence: "An honorary key to Disneyland given to Richard Nixon"
      {
        type: 'spy',
        id: 'hall-of-presidents-s6',
        prompt: 'Find a key to Disneyland in a display case. Which president did it belong to?',
        hint: 'Richard Nixon! He loved visiting Disney parks.',
      },
      // source: HOP_RG. evidence: "A fishing reel and box owned by Franklin D. Roosevelt."
      {
        type: 'spy',
        id: 'hall-of-presidents-s7',
        prompt: 'Find a fishing reel in the cases. Whose was it?',
        hint: 'It belonged to Franklin D. Roosevelt, who loved to go fishing.',
      },
      // source: HOP_RG. evidence: "A dress worn by Caroline Harrison"
      {
        type: 'spy',
        id: 'hall-of-presidents-s8',
        prompt: 'Find a dress worn by a First Lady.',
        hint: 'It belonged to Caroline Harrison, wife of President Benjamin Harrison.',
      },
      // source: HOP_NT. evidence: President John Kennedy with daughter Caroline and her pony, Macaroni
      {
        type: 'spy',
        id: 'hall-of-presidents-s9',
        prompt: 'Find the black-and-white photo of a president with a pony.',
        hint: 'That’s John F. Kennedy with his daughter Caroline and her pony, Macaroni, in 1962. It joined the lobby in 2025.',
      },
      // source: HOP_NT. evidence: "A Lincoln bust stands in front of a portrait within a white-railed display"
      {
        type: 'spy',
        id: 'hall-of-presidents-s10',
        prompt: 'Find the bust of Abraham Lincoln.',
        hint: 'It nods to Great Moments with Mr. Lincoln, the 1964 show that led to this one.',
      },
      // source: HOP_NT, HOP_RG. evidence: "A plaque has photos of Walt Disney, a quote, and a bust"
      {
        type: 'spy',
        id: 'hall-of-presidents-s11',
        prompt: 'Find the plaque about Walt Disney. Why did he want this show?',
        hint: 'Walt loved American history and dreamed of a show with every president on stage.',
      },
      // source: HOP_RG. evidence: "A blue curtain covers the stage before the show"
      {
        type: 'spy',
        id: 'hall-of-presidents-s12',
        prompt: 'In the theater, what color is the curtain covering the stage before the show?',
        hint: 'Blue! When it lifts, all the presidents are standing together.',
      },
      // evidence: "The brick facade was designed to resemble Independence Hall in Philadelphia."
      {
        type: 'photo',
        id: 'hall-of-presidents-photo1',
        prompt: 'From outside, snap the brick building that looks like Independence Hall.',
        tip: 'Stand back to fit the whole front in.',
        source: HOP_RG,
      },
      // evidence: "The Great Seal of the United States is displayed on the museum carpet."
      {
        type: 'photo',
        id: 'hall-of-presidents-photo2',
        prompt: 'From the lobby, take a photo looking down at the Great Seal in the carpet.',
        tip: 'Find the eagle.',
        source: HOP_RG,
      },
      // evidence: "An honorary key to Disneyland given to Richard Nixon"
      {
        type: 'photo',
        id: 'hall-of-presidents-photo3',
        prompt: 'From the lobby, snap the honorary key to Disneyland in its display case.',
        tip: 'Read the sign next to it to see who got the key.',
        source: HOP_RG,
      },
      // evidence: President John Kennedy with daughter Caroline and her pony, Macaroni
      {
        type: 'photo',
        id: 'hall-of-presidents-photo4',
        prompt: 'From the lobby, photograph the black-and-white picture of a president with a pony.',
        tip: 'The pony is named Macaroni.',
        source: HOP_NT,
      },
      // evidence: "A Lincoln bust stands in front of a portrait within a white-railed display"
      {
        type: 'photo',
        id: 'hall-of-presidents-photo5',
        prompt: 'From the lobby, snap the bust of Abraham Lincoln.',
        tip: 'Try to get his portrait behind him too.',
        source: HOP_NT,
      },
      // evidence: "a circular rotunda" with "a skylight ceiling"
      {
        type: 'photo',
        id: 'hall-of-presidents-photo6',
        prompt: 'From the middle of the round lobby, tilt your camera up and snap the skylight ceiling.',
        tip: 'The lobby is a circle, so the ceiling is too.',
        source: HOP_NT,
      },

      // ---- Trivia ----
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
        explain: 'About 25 minutes. A perfect cool-down break!',
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
      // evidence: "narrated by actor Lawrence Dobkin" / "Maya Angelou narrated the revised script" (1993) / "J. D. Hall replaced Angelou" (2001) / "Morgan Freeman replaced Hall as narrator for the 2009 revised show"
      {
        type: 'order',
        id: 'hall-of-presidents-x7',
        prompt: 'Put the show’s narrators in order, first to most recent.',
        items: ['Lawrence Dobkin', 'Maya Angelou', 'J. D. Hall', 'Morgan Freeman'],
        explain: 'Dobkin was first, then Maya Angelou in 1993, J. D. Hall in 2001 and Morgan Freeman in 2009.',
        source: HOP,
      },
      // evidence: "The attraction closed for refurbishment on January 20, 2025" / "reopened on June 29 of the same year."
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
      // evidence: "create 85 paintings" "each one done in the style of the time it was depicting"
      {
        type: 'guess',
        id: 'hall-of-presidents-r1',
        question: 'How many paintings did artists create for the show’s original film?',
        answer: 85,
        min: 5,
        max: 300,
        step: 5,
        unit: 'paintings',
        tolerance: 10,
        explain: '85 paintings, each in the art style of the time it showed.',
        source: HOP,
      },
      // evidence: "using a copy of a life mask of Lincoln made by Leonard Volk in Chicago in 1860"
      {
        type: 'trivia',
        id: 'hall-of-presidents-r3',
        question: 'To make Lincoln’s face so real, Imagineers used a copy of what?',
        choices: ['A life mask made in 1860', 'A Lincoln penny', 'A cartoon drawing', 'A wax statue'],
        answer: 0,
        explain: 'A life mask of Lincoln made by Leonard Volk in Chicago in 1860.',
        source: HOP,
      },
      // evidence: "Royal Dano's performance as Abraham Lincoln was restored"
      {
        type: 'trivia',
        id: 'hall-of-presidents-r4',
        question: 'Which actor’s voice was brought back for Abraham Lincoln?',
        choices: ['Royal Dano', 'Morgan Freeman', 'Paul Frees', 'Tom Hanks'],
        answer: 0,
        explain: 'Royal Dano, the same voice from Great Moments with Mr. Lincoln.',
        source: HOP,
      },
      // evidence: "The Obama version of the attraction opened on July 4, 2009"
      {
        type: 'trivia',
        id: 'hall-of-presidents-r5',
        question: 'The 2009 version of the show opened on which holiday?',
        choices: ['The Fourth of July', 'Halloween', 'Thanksgiving', 'New Year’s Day'],
        answer: 0,
        explain: 'July 4, 2009. Happy birthday, America!',
        source: HOP,
      },
      // evidence: "they respond with a nod, bow, or other sign of acknowledgment" / "the presidents seem to fidget, talk to each other, and look around"
      {
        type: 'truefalse',
        id: 'hall-of-presidents-r6',
        statement: 'During the roll call, the presidents stand perfectly frozen like statues.',
        answer: false,
        explain: 'Fiction! They nod, bow, fidget and even whisper to each other. Watch closely!',
        source: HOP,
      },
      // evidence: "Every president since Barack Obama has also provided their voice to recite the presidential oath of office"
      {
        type: 'truefalse',
        id: 'hall-of-presidents-r7',
        statement:
          'Every president since Barack Obama has recorded their own voice for the oath of office in the show.',
        answer: true,
        explain: 'Fact! Bill Clinton was the first to record a speech for his figure.',
        source: HOP,
      },
      // evidence: "were sculpted by Blaine Gibson"
      {
        type: 'trivia',
        id: 'hall-of-presidents-r8',
        question: 'Which Disney artist sculpted the presidents’ faces?',
        choices: ['Blaine Gibson', 'Marc Davis', 'Mary Blair', 'Tony Baxter'],
        answer: 0,
        explain: 'Blaine Gibson, one of Disney’s greatest sculptors.',
        source: HOP,
      },
      // evidence: "(numbering 36 at that time)"
      {
        type: 'guess',
        id: 'hall-of-presidents-r9',
        question: 'How many presidents were on stage when the show opened in 1971?',
        answer: 36,
        min: 10,
        max: 60,
        step: 1,
        unit: 'presidents',
        tolerance: 3,
        explain: '36 in 1971. Today all 45 people who have served as president are there.',
        source: HOP,
      },
      // evidence: "The Obama version of the attraction opened on July 4, 2009" / "it reopened on December 19, 2017" / "reopened on August 3, 2021" / "reopened on June 29 of the same year" (2025)
      {
        type: 'order',
        id: 'hall-of-presidents-r10',
        prompt: 'Put these show updates in order, oldest first.',
        items: [
          'Barack Obama joins (2009)',
          'Donald Trump joins (2017)',
          'Joe Biden joins (2021)',
          'Refreshed for Trump’s second term (2025)',
        ],
        explain: 'The show updates each time a new president takes office.',
        source: HOP,
      },

      // ---- Play ----
      {
        type: 'challenge',
        id: 'hall-of-presidents-x19',
        prompt:
          'Stand as still as an Audio-Animatronic president. Then do a tiny nod, like in the roll call. First to giggle is out!',
      },
      {
        type: 'wyr',
        id: 'hall-of-presidents-x22',
        a: 'Hear George Washington’s speech',
        b: 'Hear Abraham Lincoln’s speech',
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
        emojis: '🎩 🧔 🗣️',
        hint: 'He speaks in the show with a voice from 1964.',
        choices: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'John Adams'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'hall-of-presidents-x26',
        emojis: '1️⃣ 🇺🇸 🗣️',
        hint: 'The first president, and a speaker in the show since 2009.',
        choices: ['George Washington', 'Abraham Lincoln', 'James Madison', 'Teddy Roosevelt'],
        answer: 0,
      },
    ],
  },
  'main-street-vehicles': {
    facts: [
      // evidence: "one-way trips between the Town Square at the park's entrance and the Central Plaza at the park's center"
      { text: 'Each vehicle makes a one-way trip between Town Square and the Central Plaza by the castle.', source: MSV },
      // evidence: "Guests can ride a horse-drawn trolley, omnibus, jitney, or fire engine."
      { text: 'The vehicles are a horse-drawn trolley, an omnibus, a jitney and a fire engine.', source: MSV_DIS },
      // evidence: "around 1,900 pounds" empty / "around 4,000 pounds" with 18 adults
      { text: 'A horse-drawn streetcar weighs about 1,900 pounds empty and about 4,000 pounds with 18 adults on board.', source: MSV },
      // evidence: "housed nearby at the Tri-Circle-D Ranch" "located in Disney's Fort Wilderness Resort & Campground"
      { text: 'The trolley horses live at the Tri-Circle-D Ranch at Fort Wilderness.', source: MSV },
      // evidence: "During parade times, vehicles are not available."
      { text: 'The vehicles are not available during parade times.', source: MSV_DIS },
    ],
    quests: [
      // ---- Look around the stop ----
      // source: MSV_RG. evidence: "It is parked beside a sign reading "Omnibus to Cinderella Castle, One Way Only.""
      {
        type: 'spy',
        id: 'msv-r1',
        prompt: 'If the omnibus is parked nearby, find its sign. Where does it say the omnibus goes?',
        hint: 'The sign reads “Omnibus to Cinderella Castle, One Way Only.”',
      },
      // source: MSV_RG. evidence: "a pale yellow car and a bright fire-engine red car"
      {
        type: 'spy',
        id: 'msv-r2',
        prompt: 'Look for the jitneys. Can you spot a pale yellow one or a bright red one?',
        hint: 'Magic Kingdom has two jitneys, one pale yellow and one bright red.',
      },
      // source: MSV_RG. evidence: "Both jitneys stop between the Walt Disney World Railroad and the flagpole in Town Square"
      {
        type: 'spy',
        id: 'msv-r3',
        prompt: 'In Town Square, find the flagpole. The jitney stops between the train station and the flagpole.',
        hint: 'The driver waits there for riders.',
      },
      // source: MSV_RG. evidence: "The firehouse is inside the park, to the right of City Hall in Town Square."
      {
        type: 'spy',
        id: 'msv-r4',
        prompt: 'Find the firehouse, Engine Co. 71, to the right of City Hall.',
        hint: 'An antique fire engine sits inside when the firehouse is open.',
      },

      // ---- Photo spots ----
      // evidence: "a breezy drive down Main Street, U.S.A. in a charming turn-of-the-century vehicle"
      {
        type: 'photo',
        id: 'msv-photo1',
        prompt: 'From the waiting spot, take a photo of a vintage vehicle rolling down Main Street.',
        tip: 'Wait at the Town Square or Central Plaza pick-up point.',
        source: MSV_DIS,
      },
      // evidence: "It is parked beside a sign reading "Omnibus to Cinderella Castle, One Way Only.""
      {
        type: 'photo',
        id: 'msv-photo2',
        prompt: 'While you wait, take a photo of the omnibus and its sign, if it’s there.',
        tip: 'The omnibus is not always out, so it may take some luck.',
        source: MSV_RG,
      },

      // ---- Trivia ----
      // evidence: "Belgians, Clydesdales, and Percherons"
      {
        type: 'trivia',
        id: 'msv-x1',
        question: 'Which of these is a kind of draft horse that pulls the streetcars?',
        choices: ['Percheron', 'Shetland pony', 'Mustang', 'Arabian'],
        answer: 0,
        explain: 'The streetcar horses are draft breeds such as Belgians, Clydesdales and Percherons.',
        source: MSV,
      },
      // evidence: "The attraction "opened with the park on October 1, 1971,""
      {
        type: 'trivia',
        id: 'msv-x2',
        question: 'When did Main Street Vehicles open?',
        choices: ['October 1, 1971', 'July 17, 1955', 'January 15, 1975', 'October 1, 1982'],
        answer: 0,
        explain: 'They opened with Magic Kingdom on October 1, 1971.',
        source: MSV,
      },
      // evidence: "four streetcars (originally five)"
      {
        type: 'trivia',
        id: 'msv-x3',
        question: 'Where are the streetcars kept when they are not in use?',
        choices: ['A car barn', 'The castle moat', 'City Hall', 'The firehouse'],
        answer: 0,
        explain: 'They are stored in a car barn at the end of a spur line off the Town Square loop.',
        source: MSV,
      },
      // evidence: "counterclockwise directions around both the Town Square loop and Central Plaza loop"
      {
        type: 'trivia',
        id: 'msv-x4',
        question: 'Which way do the streetcars go around the Town Square and Central Plaza loops?',
        choices: ['Counterclockwise', 'Clockwise', 'Back and forth', 'Figure eight'],
        answer: 0,
        explain: 'At Magic Kingdom they travel counterclockwise around both loops.',
        source: MSV,
      },
      // evidence: "The reporter rode with Titan, a Percheron. A sign inside the trolley lists the horse's name and breed."
      {
        type: 'trivia',
        id: 'msv-x5',
        question: 'What does a sign inside the trolley tell you about the horse?',
        choices: ['Its name and breed', 'Its age', 'Its favorite snack', 'Its birthday'],
        answer: 0,
        explain: 'A sign inside the trolley lists the horse’s name and breed.',
        source: MSV_WDWNT,
      },

      // ---- True or false ----
      // evidence: "During parade times, vehicles are not available."
      {
        type: 'truefalse',
        id: 'msv-x6',
        statement: 'The Main Street vehicles keep running during parades.',
        answer: false,
        explain: 'Fiction! They are not available during parade times.',
        source: MSV_DIS,
      },
      // evidence: "The rides are free, with no extra or special ticket needed."
      {
        type: 'truefalse',
        id: 'msv-x7',
        statement: 'You need a special ticket to ride Main Street Vehicles.',
        answer: false,
        explain: 'Fiction! They are free, and no special ticket is needed.',
        source: MSV_AE,
      },

      // ---- Guess ----
      // evidence: "around 4,000 pounds (1,800 kg)" with a full load of 18 adults
      {
        type: 'guess',
        id: 'msv-x8',
        question: 'About how much does a horse-drawn streetcar weigh with 18 adults on board?',
        answer: 4000,
        min: 1000,
        max: 8000,
        step: 100,
        unit: 'pounds',
        tolerance: 500,
        explain: 'About 4,000 pounds. Empty, it weighs around 1,900.',
        source: MSV,
      },

      // ---- Ride games ----
      { type: 'wyr', id: 'msv-r31', a: 'Ride the horse-drawn trolley', b: 'Ride the fire engine' },
      { type: 'wyr', id: 'msv-r32', a: 'Ride up top on the omnibus', b: 'Ride the jitney' },
      {
        type: 'challenge',
        id: 'msv-r33',
        prompt: 'Make the sound of an old-fashioned car horn together as the jitney rolls up.',
      },
      {
        type: 'emoji',
        id: 'msv-x9',
        emojis: '🐴 🚃 🎩',
        hint: 'A horse-drawn ride down Main Street.',
        choices: ['Horse-drawn trolley', 'Space Mountain', 'Monorail', 'Peter Pan’s Flight'],
        answer: 0,
      },
    ],
  },
};
