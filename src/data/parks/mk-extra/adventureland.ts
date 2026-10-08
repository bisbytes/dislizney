import type { Fact, Quest } from '../../types';

const JC = 'https://en.wikipedia.org/wiki/Jungle_Cruise';
const JC_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/jungle-cruise/';
const JC_AE = 'https://allears.net/tp/mk/mk_jcr.htm';
const JC_AE25 = 'https://allears.net/?p=623254';
const JC_AED = 'https://allears.net/?p=256907';
const JC_DTB = 'https://www.disneytouristblog.com/jungle-cruise-reimagining-announced/';
const JC_CO =
  'https://www.clickorlando.com/theme-parks/2021/07/09/disney-shares-details-about-new-adventures-coming-to-jungle-cruise-attraction/';
const PI = 'https://en.wikipedia.org/wiki/Pirates_of_the_Caribbean_(attraction)';
const PI_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/pirates-of-the-caribbean/';
const PI_FAN = 'https://disneyparks.fandom.com/wiki/Pirates_of_the_Caribbean_(Magic_Kingdom)';
const PI_MP =
  'https://mouseplanet.com/the-vacation-kingdom-of-the-world-extending-the-magic-of-the-pirates-of-the-caribbean/4433/';
const PI_N4J =
  'https://www.news4jax.com/theme-parks/2020/06/19/dont-miss-these-4-hidden-treasures-the-next-time-youre-on-pirates-of-the-caribbean-at-walt-disney-world/';
const PI_TP = 'https://touringplans.com/blog/five-things-to-know-about-pirates-of-the-caribbean/';
const TIKI = "https://en.wikipedia.org/wiki/Walt_Disney's_Enchanted_Tiki_Room";
const TIKI_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/enchanted-tiki-room/';
const TIKI_WM = 'https://www.wdwmagic.com/attractions/the-enchanted-tiki-room.htm';
const TIKI_PS = 'https://www.parksavers.com/walt-disneys-enchanted-tiki-room-ride-review-disney-world/';
const SFT = 'https://en.wikipedia.org/wiki/Swiss_Family_Treehouse';
const SFT_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/swiss-family-treehouse/';
const SFT_CO = 'https://www.clickorlando.com/features/2021/08/16/swiss-family-treehouse-an-overlooked-icon/';
const SFT_DVC = 'https://blog.dvcrequest.com/swiss-family-treehouse-at-walt-disney-worlds-magic-kingdom/';
const MC = 'https://en.wikipedia.org/wiki/The_Magic_Carpets_of_Aladdin';
const MC_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/magic-carpets-of-aladdin/';
const MC_AE = 'https://allearsnet.com/tp/mk/aladdin.htm';
const MC_MW = 'https://themickeywiki.com/index.php/Magic_Carpets';
const MC_WM = 'https://www.wdwmagic.com/attractions/the-magic-carpets-of-aladdin.htm';

/**
 * Base quests in magic-kingdom.ts that are not about the ride itself (or are worded badly).
 * Fixed versions, where needed, live below with new ids.
 */
export const drop: string[] = [
  // Generic "tell any joke" challenge. Replaced by skipper-pun challenge jungle-cruise-x17.
  'jc-ch',
  // Photo prompts not worded "From the line…". Fixed as pirates-r-photo1 / pirates-r-photo2.
  'pirates-photo-1',
  'pirates-photo-2',
  // Generic pirate talk and parrot would-you-rather, not about this ride.
  'pi-ch',
  'pi-wyr',
  // Generic bird-sound game.
  'tiki-ch',
  // Photo prompt inside the rooms, not "From the line…". Fixed as swiss-family-treehouse-r-photo1.
  'swiss-family-treehouse-photo-1',
  // Generic "design a dream treehouse" imagination game.
  'sft-ch',
  // Photo prompt not worded "From the line…". Fixed as magic-carpets-r-photo1.
  'magic-carpets-photo-1',
  // Movie-only emoji riddle and generic wishes would-you-rather.
  'mc-3',
  'mc-wyr',
];

/** Extra ride-specific content for Adventureland. Every sourced item was checked against its source page. */
export const extra: Record<string, { facts: Fact[]; quests: Quest[] }> = {
  'jungle-cruise': {
    facts: [
      // evidence: "Also unlike Disneyland, the queue never extended to a second level."
      {
        text: 'Unlike the Disneyland version, Magic Kingdom’s Jungle Cruise line never went up to a second level.',
        source: JC,
      },
      // evidence: "Albert Awol is a fictional Jungle Cruise boat captain and disc jockey for the Disney Broadcasting Company."
      { text: 'Albert Awol, the voice on the queue radio, is a pretend boat captain and DJ.', source: JC },
      // evidence: "began running at the Jungle Cruise attractions at Disneyland Resort and the Magic Kingdom."
      { text: 'Since 2013, the ride has gotten a special holiday makeover at Magic Kingdom.', source: JC },
      // evidence: "These scenes would then be replaced in both the Disneyland and Magic Kingdom versions of the ride."
      {
        text: 'In 2021, Disney announced a big update that gave the ride new scenes at both Disneyland and Magic Kingdom.',
        source: JC,
      },
      // evidence: "Alberta Falls, granddaughter of world-renowned Dr. Albert Falls"
      {
        text: 'The story says the Jungle Navigation Company is run by Alberta Falls, granddaughter of Dr. Albert Falls.',
        source: JC_DTB,
      },
    ],
    quests: [
      // evidence: "The first installation of the ride was featured at Disneyland for its grand opening in 1955."
      {
        type: 'trivia',
        id: 'jungle-cruise-x1',
        question: 'Where was the very first Jungle Cruise?',
        choices: ['Disneyland in California', 'Magic Kingdom in Florida', 'Tokyo Disneyland', 'Disneyland Paris'],
        answer: 0,
        explain: 'It opened with Disneyland in 1955. Magic Kingdom’s came in 1971.',
        source: JC,
      },
      // evidence: "It's a 10-minute, 10,000-mile journey that you won't soon forget!"
      {
        type: 'guess',
        id: 'jungle-cruise-x2',
        question: 'Skippers call this boat trip a journey of how many miles?',
        answer: 10000,
        min: 0,
        max: 30000,
        step: 500,
        unit: 'miles',
        tolerance: 2000,
        explain: 'A 10,000-mile journey! (Your boat doesn’t really go that far.)',
        source: JC_DIS,
      },
      // evidence: "on the Amazon in South America" ... "along the Nile" ... "down the Mekong River"
      {
        type: 'trivia',
        id: 'jungle-cruise-x3',
        question: 'Which river is NOT on the Jungle Cruise tour?',
        choices: ['The Amazon', 'The Nile', 'The Mekong', 'The Mississippi'],
        answer: 3,
        explain: 'You visit the Amazon, the Congo, the Nile and the Mekong, but not the Mississippi.',
        source: JC_DIS,
      },
      // evidence: "Glimpse an abandoned camp overrun by curious gorillas on the shores of the African Congo"
      {
        type: 'truefalse',
        id: 'jungle-cruise-x4',
        statement: 'On the cruise you pass a camp that has been taken over by gorillas.',
        answer: true,
        explain: 'Fact! Curious gorillas have overrun the camp on the Congo.',
        source: JC_DIS,
      },
      // evidence: "Albert Awol was added in 1991 to the Jungle Cruise during a refurbishment."
      {
        type: 'truefalse',
        id: 'jungle-cruise-x5',
        statement: 'Albert Awol has been on the queue radio since the ride opened in 1971.',
        answer: false,
        explain: 'Fiction! Albert Awol was added in 1991, twenty years later.',
        source: JC,
      },
      // evidence: "the Backside of Water"
      {
        type: 'trivia',
        id: 'jungle-cruise-x6',
        question: 'When your boat goes behind Schweitzer Falls, what do skippers call it?',
        choices: ['The Wet Zone', 'The Backside of Water', 'Splash Alley', 'The Rain Room'],
        answer: 1,
        explain: 'It’s the famous “Backside of Water”!',
        source: JC,
      },
      // evidence: "be on the lookout for a missing Jungle Cruise vessel and its helpless passengers"
      {
        type: 'trivia',
        id: 'jungle-cruise-x7',
        question: 'What are you searching for on your cruise?',
        choices: ['A lost treasure map', 'A missing Jungle Cruise boat', 'A runaway elephant', 'The skipper’s hat'],
        answer: 1,
        explain: 'You keep an eye out for a missing Jungle Cruise boat and its helpless passengers.',
        source: JC_DIS,
      },
      // evidence: "1955" (Disneyland opening), "October 1, 1971", "Albert Awol was added in 1991", "In January 2021, Disney announced one of the most major refurbishments of the attraction."
      {
        type: 'order',
        id: 'jungle-cruise-x8',
        prompt: 'Put these Jungle Cruise moments in order, oldest first.',
        items: [
          'Jungle Cruise opens at Disneyland',
          'Jungle Cruise opens at Magic Kingdom',
          'Albert Awol joins the queue radio',
          'The big update with new scenes is announced',
        ],
        explain: '1955, then 1971, then 1991, then the big update in 2021.',
        source: JC,
      },
      // evidence: "Big band music from the 1920s, 1930s and 1940s plays overhead"
      {
        type: 'truefalse',
        id: 'jungle-cruise-x10',
        statement: 'The music in the queue is big band music from the 1920s to 1940s.',
        answer: true,
        explain: 'Fact! Old-time big band tunes play overhead, just right for a 1930s river outpost.',
        source: JC,
      },
      // evidence: "Watch for angry hippos, hungry lions and “sleeping” zebras along the Nile"
      {
        type: 'truefalse',
        id: 'jungle-cruise-x11',
        statement: 'The hippos on the Jungle Cruise are sleepy and friendly.',
        answer: false,
        explain: 'Fiction! Watch out for angry hippos (and hungry lions)!',
        source: JC_DIS,
      },
      // evidence: "You board canopied launches patterned after the boat in the movie The African Queen"
      {
        type: 'trivia',
        id: 'jungle-cruise-r1',
        question: 'The Jungle Cruise boats were patterned after the boat in which old movie?',
        choices: ['The African Queen', 'Titanic', 'Moby Dick', 'Treasure Island'],
        answer: 0,
        explain: 'Imagineer Harper Goff based the boats on the steamer from The African Queen (1951).',
        source: JC_AE,
      },
      // evidence: "The Jungle Cruise boats are 27 feet long, and reach a top speed of 3.2 feet per second"
      {
        type: 'guess',
        id: 'jungle-cruise-r2',
        question: 'How long is one Jungle Cruise boat, in feet?',
        answer: 27,
        min: 5,
        max: 80,
        step: 1,
        unit: 'feet',
        tolerance: 5,
        explain: 'Each boat is 27 feet long. Slow and steady: top speed is just 3.2 feet per second!',
        source: JC_AE,
      },
      // evidence: "using a 4-cylinder Chevrolet engine"
      {
        type: 'truefalse',
        id: 'jungle-cruise-r3',
        statement: 'Jungle Cruise boats are pushed along by a car engine.',
        answer: true,
        explain: 'Fact! Each boat uses a 4-cylinder Chevrolet engine.',
        source: JC_AE,
      },
      // evidence: "Capacity: 1,800 riders per hour"
      {
        type: 'guess',
        id: 'jungle-cruise-r4',
        question: 'About how many explorers can the Jungle Cruise carry in one hour?',
        answer: 1800,
        min: 100,
        max: 5000,
        step: 100,
        unit: 'riders',
        tolerance: 300,
        explain: 'About 1,800 riders every hour set off down the river.',
        source: JC,
      },
      // evidence: "The first version of the Jungle Cruise was very serious, based on Walt Disney’s True Life Adventure series."
      {
        type: 'truefalse',
        id: 'jungle-cruise-r5',
        statement: 'The very first Jungle Cruise was a serious nature trip with no jokes.',
        answer: true,
        explain: 'Fact! It was based on Walt’s True-Life Adventure films. The skippers’ jokes came a few years later.',
        source: JC_AE,
      },
      // evidence: "Alberta Falls, granddaughter of world-renowned Dr. Albert Falls"
      {
        type: 'trivia',
        id: 'jungle-cruise-r6',
        question: 'Alberta Falls runs the Jungle Navigation Company. Who was her famous grandfather?',
        choices: ['Dr. Albert Falls', 'Trader Sam', 'Albert Awol', 'Captain Nemo'],
        answer: 0,
        explain: 'Dr. Albert Falls. That’s why skippers love to brag about Schweitzer Falls!',
        source: JC_DTB,
      },
      // evidence: "Trader Sam has opportunistically "reimagined" lost & found as a gift shop"
      {
        type: 'trivia',
        id: 'jungle-cruise-r7',
        question: 'Near the end of the cruise, what did Trader Sam turn the Lost and Found into?',
        choices: ['A gift shop', 'A bakery', 'A hippo hotel', 'A barber shop'],
        answer: 0,
        explain: 'He “reimagined” all those lost things into his own gift shop!',
        source: JC_DTB,
      },
      // evidence: "The ruined tent belongs to R.V. Laust, a pun on "Are we lost?""
      {
        type: 'trivia',
        id: 'jungle-cruise-r8',
        question:
          'The gorillas’ camp tent belongs to an explorer named R.V. Laust. Say it fast. What does it sound like?',
        choices: ['Are we lost?', 'Are we there yet?', 'Arrive last', 'Robber’s nest'],
        answer: 0,
        explain: '“R.V. Laust” sounds like “Are we lost?” A classic skipper pun.',
        source: JC_AE25,
      },
      // evidence: "He's the skipper who sinks the Kwango Kate in the hippo pool." / "Sinking boat and floating props added around the hippo pool."
      {
        type: 'trivia',
        id: 'jungle-cruise-r9',
        question: 'A sinking boat sits in the hippo pool. What is its name?',
        choices: ['The Kwango Kate', 'The Amazon Annie', 'The Nile Nellie', 'The Hippo Hilda'],
        answer: 0,
        explain: 'The Kwango Kate! The story says it was sunk by a skipper named Felix Pechman XIII.',
        source: JC_AE25,
      },
      // evidence: "The Walt Disney World Jungle Cruise is set as a depression-era British outpost on the Amazon River."
      {
        type: 'trivia',
        id: 'jungle-cruise-r10',
        question: 'The queue you’re standing in is set up to look like what?',
        choices: ['A 1930s outpost on the Amazon River', 'A pirate fort', 'A circus tent', 'A space station'],
        answer: 0,
        explain: 'You’re in a 1930s outpost on the Amazon where jungle trips are booked.',
        source: JC,
      },
      // evidence: "Near the Hippo Pool, a piece of a downed airplane can be seen along the shoreline." / "Only the back half appears."
      {
        type: 'truefalse',
        id: 'jungle-cruise-r11',
        statement: 'The crashed airplane near the hippo pool is only the back half of a plane.',
        answer: true,
        explain: 'Fact! The front half was once in The Great Movie Ride’s Casablanca scene.',
        source: JC_AED,
      },
      // ----- Look around the queue, in walking order -----
      // source: JC_AE25. evidence: "They reference the S.S. Columbia, Harambe, Bakersfield (Marc Davis's birthplace)"
      {
        type: 'spy',
        id: 'jungle-cruise-r-spy1',
        prompt: 'Spot the flags hanging around the outpost.',
        hint: 'They’re secret shout-outs: one nods to Bakersfield, hometown of Imagineer Marc Davis, who made this ride funny.',
      },
      // source: JC. evidence: "Albert's broadcast is projected not just over the Jungle Cruise queuing area, but over Adventureland as a whole."
      {
        type: 'spy',
        id: 'jungle-cruise-r-spy2',
        prompt: 'Listen! Can you hear Albert Awol on the radio?',
        hint: 'The “Voice of the Jungle” joined in 1991. His show plays over all of Adventureland, not just this line.',
      },
      // source: JC_AE25. evidence: "Skipper Shaun's telegram on the office desk says he plans to pitch a movie idea in Hollywood."
      {
        type: 'spy',
        id: 'jungle-cruise-r-spy3',
        prompt: 'Peek into the office. Find the telegram on the desk.',
        hint: 'It’s from Skipper Shaun, who is off to Hollywood to pitch his big movie idea.',
      },
      // source: JC_AE25. evidence: "Shaun won first place for "A Bigger Bote," a Jaws nod."
      {
        type: 'spy',
        id: 'jungle-cruise-r-spy4',
        prompt: 'Find the trophy case. What did Skipper Shaun win first place for?',
        hint: '“A Bigger Bote”! Bob Mattey, who built Jungle Cruise animals, also built the Jaws shark.',
      },
      // source: JC_AE25. evidence: "Felix Pechman XIII's application has puns"
      {
        type: 'spy',
        id: 'jungle-cruise-r-spy5',
        prompt: 'Look for a job application full of puns.',
        hint: 'It belongs to Felix Pechman XIII, the skipper who sank the Kwango Kate in the hippo pool.',
      },
      // source: JC_AE25. evidence: "The number refers to 1955 (Disneyland) and 1971 (Magic Kingdom), the opening years."
      {
        type: 'spy',
        id: 'jungle-cruise-r-spy6',
        prompt: 'Find “Banana Troop 5571.” What could that number mean?',
        hint: '55 and 71: the years the Jungle Cruise opened at Disneyland and Magic Kingdom.',
      },
      // source: JC_AE25. evidence: "A sign shows Skipper Winston's joke, a likely tribute to Winston Hibler"
      {
        type: 'spy',
        id: 'jungle-cruise-r-spy7',
        prompt: 'Look for the sign with the skippers’ first-ever joke. Does it make you groan?',
        hint: 'It’s credited to Skipper Winston, a nod to Winston Hibler, who worked on Walt’s True-Life Adventure films.',
      },
      // source: JC_AE25. evidence: "Col. Brody's trip to "Placid Palms" links to the Typhoon Lagoon storyline."
      {
        type: 'spy',
        id: 'jungle-cruise-r-spy8',
        prompt: 'Find the Crew Shift board. Who is off on a trip?',
        hint: 'Col. Brody went to “Placid Palms,” a wink to the story of Typhoon Lagoon water park.',
      },
      // source: JC_AE25. evidence: "One side is labeled "First Aid," the other "Last Aid.""
      {
        type: 'spy',
        id: 'jungle-cruise-r-spy9',
        prompt: 'Spot the cabinet with two very different labels.',
        hint: 'One side says “First Aid.” The other side says “Last Aid.” Gulp!',
      },
      // source: JC_AE. evidence: "There’s also a Menu Board that’s good for a laugh!"
      {
        type: 'spy',
        id: 'jungle-cruise-r-spy10',
        prompt: 'Read the menu board near the boats. What does everything taste like?',
        hint: 'Chicken! And on Fridays? Real chicken. The Skipper Canteen restaurant tells the same joke.',
      },
      // source: JC_AE25. evidence: "A rock near the boarding area references Casablanca."
      {
        type: 'spy',
        id: 'jungle-cruise-r-spy11',
        prompt: 'Near the boarding area, look for a rock with a movie joke.',
        hint: 'It’s a nod to Casablanca. Funny, the crashed plane on the river came from a Casablanca scene too!',
      },
      // source: JC_AE. evidence: "whimsical names like “Bomokandi Bertha”, “Irrawaddy Irma,” and “Amazon Annie.”"
      {
        type: 'spy',
        id: 'jungle-cruise-r-spy12',
        prompt: 'Read the name on a boat at the dock. Is it named after a river?',
        hint: 'Boats have names like Bomokandi Bertha, Irrawaddy Irma and Amazon Annie.',
      },
      // source: JC_AED. evidence: "The sign lists missing people and boats. The author's favorites are "Ilene Dover" and "Ann Fellen.""
      {
        type: 'spy',
        id: 'jungle-cruise-r-spy13',
        prompt: 'Find the board of missing people. Read a name out loud, fast.',
        hint: 'Try “Ilene Dover” or “Ann Fellen.” Say them quickly and you’ll hear the joke!',
      },
      // evidence: "there’s a chalkboard with a list of missing boats and persons"
      {
        type: 'photo',
        id: 'jungle-cruise-r-photo1',
        prompt: 'From the line, snap the missing persons board and your best “Are we lost?” face.',
        tip: 'It’s a chalkboard in the queue.',
        source: JC_AE,
      },
      // evidence: "whimsical names like “Bomokandi Bertha”, “Irrawaddy Irma,” and “Amazon Annie.”"
      {
        type: 'photo',
        id: 'jungle-cruise-r-photo2',
        prompt: 'From the line, take a photo of a boat at the dock so you can read its funny name later.',
        tip: 'Wait for one to pull in near the loading area.',
        source: JC_AE,
      },
      {
        type: 'challenge',
        id: 'jungle-cruise-x17',
        prompt: 'Make up a skipper pun about a hippo, a lion or an elephant. Biggest groan wins!',
      },
      {
        type: 'challenge',
        id: 'jungle-cruise-x18',
        prompt: 'Be a radio DJ like Albert Awol! Announce the “jungle weather report” in your best radio voice.',
      },
      {
        type: 'challenge',
        id: 'jungle-cruise-x19',
        prompt: 'Freeze like one of the river’s “sleeping” zebras! Last one to move or giggle wins.',
      },
      {
        type: 'wyr',
        id: 'jungle-cruise-x20',
        a: 'Be the skipper telling the jokes',
        b: 'Be the passenger laughing at every joke',
      },
      {
        type: 'wyr',
        id: 'jungle-cruise-x23',
        a: 'Cruise the Amazon part of the river',
        b: 'Cruise the Nile part of the river',
      },
      {
        type: 'emoji',
        id: 'jungle-cruise-x24',
        emojis: '🦛 😠 🌊',
        hint: 'A grumpy animal that loves the river.',
        choices: ['Angry hippos', 'Sleepy zebras', 'Happy elephants', 'Silly monkeys'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'jungle-cruise-x25',
        emojis: '🔙 💧',
        hint: 'The skipper’s favorite “wonder of the world.”',
        choices: ['Splash Mountain', 'The Backside of Water', 'Rain Forest', 'Waterfall Lake'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'jungle-cruise-x26',
        emojis: '🦍 ⛺',
        hint: 'Somebody moved into the explorers’ camp.',
        choices: ['Lions at the zoo', 'Gorillas in the camp', 'Bears in the woods', 'Monkeys in a tree'],
        answer: 1,
      },
    ],
  },
  pirates: {
    facts: [
      // evidence: "inspired by Castillo de San Felipe del Morro in San Juan, Puerto Rico"
      {
        text: 'The ride’s fort is inspired by a real fort in Puerto Rico called Castillo San Felipe del Morro.',
        source: PI_FAN,
      },
      // evidence: "written by George Bruns (music) and Xavier Atencio (lyrics)"
      { text: 'The pirate song was written by George Bruns (music) and Xavier Atencio (words).', source: PI },
      // evidence: "The chess-playing skeleton gag was designed for the Magic Kingdom by Imagineer Marc Davis."
      {
        text: 'The chess-playing skeletons in the queue were dreamed up for Magic Kingdom by Imagineer Marc Davis.',
        source: PI,
      },
      // evidence: "The indoor queue can hold 45 minutes' worth of guests."
      { text: 'The indoor queue inside the fort can hold about 45 minutes’ worth of guests.', source: PI_TP },
    ],
    quests: [
      // evidence: "golden Spanish fort called Castillo Del Morro"
      {
        type: 'trivia',
        id: 'pirates-x1',
        question: 'What is the name of the fort you walk through in line?',
        choices: ['Fort Wilderness', 'Castillo del Morro', 'Skull Rock', 'Fort Sam Clemens'],
        answer: 1,
        explain: 'It’s Castillo del Morro, a golden Spanish fort.',
        source: PI_FAN,
      },
      // evidence: "Prisoners try to lure a dog holding the jail key."
      {
        type: 'trivia',
        id: 'pirates-x2',
        question: 'The prisoners in jail are trying to get something from a dog. What?',
        choices: ['A bone', 'A treasure map', 'The keys', 'A cookie'],
        answer: 2,
        explain: 'The dog has the jail keys in his mouth!',
        source: PI,
      },
      // evidence: "watch for Captain Jack Sparrow"
      {
        type: 'trivia',
        id: 'pirates-x3',
        question: 'Which famous captain should you keep an eye out for on the ride?',
        choices: ['Captain Hook', 'Captain Jack Sparrow', 'Captain Nemo', 'Captain Smee'],
        answer: 1,
        explain: 'Look sharp for Captain Jack Sparrow! He pops up all over town.',
        source: PI_DIS,
      },
      // evidence: "a 12-gun galleon"
      {
        type: 'guess',
        id: 'pirates-x4',
        question: 'The pirate ship that battles the fort is a galleon with how many guns?',
        answer: 12,
        min: 0,
        max: 50,
        step: 1,
        unit: 'guns',
        tolerance: 3,
        explain: 'It’s a 12-gun galleon. Boom!',
        source: PI_DIS,
      },
      // evidence: "the 17th century, when pirates raided Caribbean seaport towns"
      {
        type: 'trivia',
        id: 'pirates-x5',
        question: 'What time in history does the ride take you to?',
        choices: ['The Stone Age', 'The 17th century', 'The 1950s', 'The future'],
        answer: 1,
        explain: 'Back to the 1600s, when pirates raided Caribbean seaport towns.',
        source: PI_DIS,
      },
      // evidence: "the Disneyland version of Pirates of the Caribbean was the last ride that Walt Disney participated in designing"
      {
        type: 'truefalse',
        id: 'pirates-x6',
        statement: 'Pirates of the Caribbean at Disneyland was the last ride Walt Disney helped design.',
        answer: true,
        explain: 'Fact! The Disneyland version opened in 1967.',
        source: PI,
      },
      // evidence: "In 2003, Disney released Pirates of the Caribbean: The Curse of the Black Pearl, a feature film inspired by the ride."
      {
        type: 'truefalse',
        id: 'pirates-x7',
        statement: 'The Pirates of the Caribbean ride was based on the movies.',
        answer: false,
        explain: 'Fiction! It’s the other way around. The first movie (2003) was inspired by the ride.',
        source: PI,
      },
      // evidence: "The ride gave rise to "A Pirate's Life for Me," written by George Bruns (music) and Xavier Atencio (lyrics)."
      {
        type: 'truefalse',
        id: 'pirates-x8',
        statement: 'The song the pirates sing is called “A Pirate’s Life for Me.”',
        answer: true,
        explain: 'Fact! Yo ho, yo ho!',
        source: PI,
      },
      // evidence: ride sequence on page: battle, well dunking, jail dog, treasure room
      {
        type: 'order',
        id: 'pirates-x9',
        prompt: 'Put these ride scenes in the order you sail past them.',
        items: [
          'A pirate ship battles the fort',
          'A man gets dunked in a well',
          'Prisoners call to a dog with keys',
          'Jack Sparrow relaxes in the treasure room',
        ],
        explain: 'Battle, well, jail, and Jack’s treasure room at the very end.',
        source: PI,
      },
      // evidence: "A talking skull on the wall delivers a brief safety warning"
      {
        type: 'trivia',
        id: 'pirates-x10',
        question: 'Who gives you a safety warning before you sail?',
        choices: ['A parrot', 'A talking skull', 'Jack Sparrow', 'A pirate dog'],
        answer: 1,
        explain: 'A talking skull on the wall, and it flashes its eyes too!',
        source: PI,
      },
      // evidence: "Sail past haunted Dead Man’s Cove"
      {
        type: 'truefalse',
        id: 'pirates-x11',
        statement: 'Your boat sails past a spooky place called Dead Man’s Cove.',
        answer: true,
        explain: 'Fact! Dead Man’s Cove is part of the voyage.',
        source: PI_DIS,
      },
      // evidence: "Opening on March 18, 1967" / "The new Pirates of the Caribbean ride opened on December 15, 1973." / 2006 refurbishment added Jack Sparrow / "The Magic Kingdom version received the new auction scene in March." (2018)
      {
        type: 'order',
        id: 'pirates-x12',
        prompt: 'Put these in order, oldest first.',
        items: [
          'Pirates opens at Disneyland',
          'Pirates opens at Magic Kingdom',
          'Jack Sparrow joins the ride',
          'The auction scene gets a makeover',
        ],
        explain: '1967, then 1973, then Jack in 2006, then the new auction in 2018.',
        source: PI,
      },
      // evidence: "it was thought a Caribbean-themed ride would not hold the same mystique as it did in California."
      {
        type: 'trivia',
        id: 'pirates-r1',
        question: 'Why didn’t Magic Kingdom have Pirates when the park opened in 1971?',
        choices: [
          'Florida is so close to the Caribbean that it didn’t seem special',
          'The boats were too big',
          'Walt didn’t like pirates',
          'It was too scary',
        ],
        answer: 0,
        explain:
          'Imagineers thought a Caribbean ride wouldn’t feel as magical so close to the real Caribbean. Guests asked for it anyway!',
        source: PI,
      },
      // evidence: "announced a Florida version of Pirates of the Caribbean instead of the Western River Expedition"
      {
        type: 'truefalse',
        id: 'pirates-r2',
        statement: 'A cowboy ride called Western River Expedition was planned instead of Pirates, but never built.',
        answer: true,
        explain: 'Fact! Guests kept asking where the pirates were, so Disney built Pirates instead.',
        source: PI,
      },
      // evidence: "opened as part of the Caribbean Plaza addition to Adventureland on December 15, 1973"
      {
        type: 'trivia',
        id: 'pirates-r3',
        question: 'Pirates opened as part of a new corner of Adventureland. What was it called?',
        choices: ['Caribbean Plaza', 'Agrabah Bazaar', 'Pirate Point', 'Treasure Town'],
        answer: 0,
        explain: 'Caribbean Plaza, added in 1973.',
        source: PI_FAN,
      },
      // evidence: "Vehicles: 50 boats"
      {
        type: 'guess',
        id: 'pirates-r4',
        question: 'How many boats sail through Pirates of the Caribbean?',
        answer: 50,
        min: 5,
        max: 150,
        step: 1,
        unit: 'boats',
        tolerance: 8,
        explain: '50 boats, each holding about 23 or 24 pirates-in-training.',
        source: PI,
      },
      // evidence: "Marc Davis carefully arranged the pieces so that any move will result in a never-ending game."
      {
        type: 'trivia',
        id: 'pirates-r5',
        question: 'Which Imagineer set up the skeletons’ chess game in the queue?',
        choices: ['Marc Davis', 'Walt Disney', 'Harper Goff', 'Buddy Baker'],
        answer: 0,
        explain: 'Marc Davis arranged the pieces so the game never ends.',
        source: PI_FAN,
      },
      // evidence: "2017: The talking skull was reinstated at the Magic Kingdom."
      {
        type: 'truefalse',
        id: 'pirates-r6',
        statement: 'The talking skull was brought back to Magic Kingdom’s ride in 2017.',
        answer: true,
        explain: 'Fact! The skull returned in 2017 to warn pirates like you.',
        source: PI,
      },
      // evidence: "Barbossa (Geoffrey Rush) replaced the pirate captain in the battle room"
      {
        type: 'trivia',
        id: 'pirates-r7',
        question: 'Since 2006, which captain commands the pirate ship in the big battle?',
        choices: ['Captain Barbossa', 'Captain Hook', 'Captain Jack Sparrow', 'Davy Jones'],
        answer: 0,
        explain: 'Captain Barbossa took over the ship in the 2006 update.',
        source: PI,
      },
      // evidence: "The water glows orange because the cannonballs are still hot when they plop into the water."
      {
        type: 'trivia',
        id: 'pirates-r8',
        question: 'During the cannon battle, why do some splashes glow orange?',
        choices: [
          'The cannonballs are still hot',
          'There are fish under the water',
          'The moon is orange',
          'Someone spilled juice',
        ],
        answer: 0,
        explain: 'Imagineers made the splashes glow because a fired cannonball would still be hot!',
        source: PI_N4J,
      },
      // evidence: "The women are no longer auctioned. The redhead is now a pirate helping the auctioneer sell loot"
      {
        type: 'truefalse',
        id: 'pirates-r9',
        statement: 'In the auction scene today, the famous redhead is a pirate helping sell the loot.',
        answer: true,
        explain: 'Fact! Since 2018 she’s joined the pirate crew.',
        source: PI,
      },
      // ----- Look around the queue, in walking order -----
      // source: PI_FAN. evidence: "guarded by the Caribbean watchtower Torre del Sol"
      {
        type: 'spy',
        id: 'pirates-r-spy1',
        prompt: 'Before you go in, look up for the fort’s tall watchtower.',
        hint: 'It’s the Torre del Sol, the “Tower of the Sun,” keeping watch over the fort.',
      },
      // source: PI_MP. evidence: "the Magic Kingdom's fort reflects the original's bastion design and sentry boxes"
      {
        type: 'spy',
        id: 'pirates-r-spy2',
        prompt: 'Find a little lookout box on the corner of the fort walls.',
        hint: 'Real Spanish forts had sentry boxes like these. Imagineers copied the fort in San Juan, Puerto Rico.',
      },
      // source: PI_MP. evidence: "A large drawbridge, the only way in or out of the Castillo, is found at the entry to the attraction"
      {
        type: 'spy',
        id: 'pirates-r-spy3',
        prompt: 'Spot the drawbridge at the entrance.',
        hint: 'In a real fort it was the only way in or out. Here it splits guests into two lines.',
      },
      // source: PI. evidence: "There are two queues designed to evoke a different atmosphere"
      {
        type: 'spy',
        id: 'pirates-r-spy4',
        prompt: 'Which side of the fort are you on: the soldiers’ side or the pirates’ side?',
        hint: 'The left line feels like the soldiers’ fort. The right line feels like pirates took over. They meet at Pirate’s Cove.',
      },
      // source: PI_MP. evidence: "The heavy chains, incredibly thick doors, and the dark, damp feeling of this area are very convincing."
      {
        type: 'spy',
        id: 'pirates-r-spy5',
        prompt: 'Find a heavy chain or a super thick door.',
        hint: 'Modern buildings don’t need walls this thick. Imagineers built them anyway to feel like a real old fort.',
      },
      // source: PI_MP. evidence: "Several of these rooms feature windows with thick, black bars stretching across their windows"
      {
        type: 'spy',
        id: 'pirates-r-spy6',
        prompt: 'Peek at a window with thick black bars. Who might have been locked in there?',
        hint: 'These rooms copy the guardrooms of real forts.',
      },
      // source: PI_MP. evidence: "the piles of cannonballs, batteries of cannons, and kegs filled with gunpowder"
      {
        type: 'spy',
        id: 'pirates-r-spy7',
        prompt: 'Count a pile of cannonballs. How many can you see?',
        hint: 'Real forts stored cannonballs and gunpowder in rooms just like these.',
      },
      // source: PI. evidence: "The queue winds through the fort, passing supplies and cannons"
      {
        type: 'spy',
        id: 'pirates-r-spy8',
        prompt: 'Find a cannon guarding the fort.',
        hint: 'This fort is ready for the pirate battle you’ll sail through later.',
      },
      // source: PI_MP. evidence: "kegs filled with gunpowder"
      {
        type: 'spy',
        id: 'pirates-r-spy9',
        prompt: 'Spot a keg that might be full of gunpowder.',
        hint: 'Kegs like these held the gunpowder that fired the fort’s cannons. Ka-boom!',
      },
      // source: PI_FAN. evidence: "The pieces were accidentally moved during a minor refurbishment."
      {
        type: 'spy',
        id: 'pirates-r-spy10',
        prompt: 'Find the two skeletons playing chess in a cell. Who do you think is winning?',
        hint: 'Nobody! Marc Davis set the board so the game never ends. Once the pieces got moved, and they were fixed using his old sketches.',
      },
      // source: PI. evidence: "a pirate ship is visible in the distance from the loading area"
      {
        type: 'spy',
        id: 'pirates-r-spy11',
        prompt: 'At the boats, look out across the bay for a pirate ship in the distance.',
        hint: 'You’re in Pirate’s Cove. Boats leave from here through tunnels out to the bay.',
      },
      // source: PI. evidence: "The loading area was built with two channels, but since fall 1991 only one has been used."
      {
        type: 'spy',
        id: 'pirates-r-spy12',
        prompt: 'Can you spot a second boat channel at the loading area?',
        hint: 'It was built with two channels to load more boats. Only one has been used since 1991.',
      },
      // evidence: "a pair of pirate skeletons sit at a chessboard"
      {
        type: 'photo',
        id: 'pirates-r-photo1',
        prompt: 'From the line, snap a photo of the skeleton pirates playing chess. Arrr!',
        tip: 'They’re in a cell as the line winds through the fort.',
        source: PI,
      },
      // evidence: "passing supplies and cannons"
      {
        type: 'photo',
        id: 'pirates-r-photo2',
        prompt: 'From the line, take a photo with a fort cannon behind you and your best pirate face!',
        source: PI,
      },
      {
        type: 'challenge',
        id: 'pirates-x18',
        prompt: 'Sing “Yo ho, yo ho!” as a group, quietly like a whisper, then a tiny bit louder.',
      },
      {
        type: 'challenge',
        id: 'pirates-x19',
        prompt:
          'Play the jail dog! One person holds pretend keys while everyone else tries to coax them over with only funny faces.',
      },
      {
        type: 'wyr',
        id: 'pirates-x22',
        a: 'Be the dog holding the keys',
        b: 'Be the prisoner trying to get them',
      },
      {
        type: 'wyr',
        id: 'pirates-x24',
        a: 'Defend the fort',
        b: 'Sail Barbossa’s galleon',
      },
      // evidence: "Guests in the very first row have been known to get sprinkled a tiny bit as the boat goes over the drop."
      {
        type: 'wyr',
        id: 'pirates-r-wyr1',
        a: 'Sit in the very front row (you might get sprinkled on the drop)',
        b: 'Sit in the back row and stay dry',
      },
      {
        type: 'wyr',
        id: 'pirates-r-wyr2',
        a: 'Wait in line on the soldiers’ side of the fort',
        b: 'Wait in line on the pirates’ side of the fort',
      },
      {
        type: 'emoji',
        id: 'pirates-x25',
        emojis: '🐕 🔑 🔒',
        hint: 'The prisoners really want what he has.',
        choices: ['A pirate parrot', 'The jail dog', 'A treasure chest', 'A sleepy cat'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'pirates-x26',
        emojis: '💀 ♟️',
        hint: 'A game that’s been going on a very long time in the queue.',
        choices: ['Skeletons playing chess', 'Pirates playing cards', 'Ghosts playing tag', 'Parrots playing checkers'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'pirates-x27',
        emojis: '🏴‍☠️ 🎩 💰',
        hint: 'He hides all over town and ends up in the treasure room.',
        choices: ['Captain Hook', 'Jack Sparrow', 'Mr. Smee', 'Blackbeard'],
        answer: 1,
      },
    ],
  },
  'tiki-room': {
    facts: [
      // evidence: "reopened on August 15, 2011, as Walt Disney's Enchanted Tiki Room," which was a slightly edited version of Disneyland's show
      {
        text: 'Since August 2011, the show here has been a slightly edited version of Disneyland’s original.',
        source: TIKI,
      },
      // evidence: Under New Management "featured Iago from Aladdin and Zazu from The Lion King"
      { text: 'From 1998 to 2011, Iago and Zazu took over this show as “Under New Management.”', source: TIKI },
      // evidence: "Disneyland's Tiki Room was also the park's first fully air-conditioned building"
      {
        text: 'Back in 1963, Disneyland’s Tiki Room was that park’s first fully air-conditioned building.',
        source: TIKI,
      },
      // evidence: "The attraction opened at Walt Disney World as Tropical Serenade at the Sunshine Pavilion on October 1, 1971."
      { text: 'The Magic Kingdom building is called the Sunshine Pavilion.', source: TIKI_WM },
    ],
    quests: [
      // evidence: "A virtually identical copy of the show, called Tropical Serenade"
      {
        type: 'trivia',
        id: 'tiki-room-x1',
        question: 'What was this show called at Magic Kingdom when it first opened?',
        choices: ['Bird Island', 'Tropical Serenade', 'Tiki Town', 'Feathered Friends'],
        answer: 1,
        explain: 'It was called Tropical Serenade.',
        source: TIKI,
      },
      // evidence: "It was replaced in 1998 by Under New Management, which featured Iago and Zazu."
      {
        type: 'trivia',
        id: 'tiki-room-x2',
        question: 'From 1998 to 2011, which loud parrot took over this show?',
        choices: ['Iago', 'Abu', 'José', 'Rajah'],
        answer: 0,
        explain: 'Iago starred in “Under New Management” until the classic show came back.',
        source: TIKI,
      },
      // evidence: "The Tiki Room was the first attraction to use Audio-Animatronics"
      {
        type: 'truefalse',
        id: 'tiki-room-x3',
        statement: 'The first Tiki Room, at Disneyland, was the first attraction with Audio-Animatronics.',
        answer: true,
        explain: 'Fact! It was the very first to use Audio-Animatronics.',
        source: TIKI,
      },
      // evidence: "Hawaiian War Chant" (finale, with all figures performing)
      {
        type: 'trivia',
        id: 'tiki-room-x4',
        question: 'Which song is the big finale where everyone performs?',
        choices: ['Hawaiian War Chant', 'Under the Sea', 'Yo Ho', 'Hakuna Matata'],
        answer: 0,
        explain: 'The whole cast performs the “Hawaiian War Chant.”',
        source: TIKI,
      },
      // evidence: "Michael" is white and green with an Irish brogue voiced by Fulton Burley
      {
        type: 'trivia',
        id: 'tiki-room-x5',
        question: 'Which host bird talks with an Irish accent?',
        choices: ['José', 'Michael', 'Pierre', 'Fritz'],
        answer: 1,
        explain: 'Michael has an Irish brogue.',
        source: TIKI,
      },
      // evidence: "José" is red, white, and green and speaks with a Mexican accent voiced by Wally Boag
      {
        type: 'trivia',
        id: 'tiki-room-x6',
        question: 'José’s feathers are red, white and green. What accent does he have?',
        choices: ['French', 'German', 'Mexican', 'Irish'],
        answer: 2,
        explain: 'José has a Mexican accent, voiced by Wally Boag.',
        source: TIKI,
      },
      // evidence: "Pierre" is blue, white, and red and has a French accent
      {
        type: 'truefalse',
        id: 'tiki-room-x7',
        statement: 'Pierre the bird speaks with a German accent.',
        answer: false,
        explain: 'Fiction! Pierre has a French accent. Fritz is the one with the German accent.',
        source: TIKI,
      },
      // evidence: "First opened on June 23, 1963" / "Opened as Tropical Serenade on October 1, 1971" / replaced in 1998 / "reopened on August 15, 2011"
      {
        type: 'order',
        id: 'tiki-room-x8',
        prompt: 'Put these Tiki Room moments in order, oldest first.',
        items: [
          'The Tiki Room opens at Disneyland',
          'Tropical Serenade opens at Magic Kingdom',
          'Iago and Zazu take over the show',
          'The classic show comes back',
        ],
        explain: '1963, 1971, 1998, and back to the classic in 2011.',
        source: TIKI,
      },
      // evidence: "Music: Sherman Brothers (music and lyrics)"
      {
        type: 'truefalse',
        id: 'tiki-room-x9',
        statement: 'The Sherman Brothers wrote the music and words for the show.',
        answer: true,
        explain: 'Fact! The Sherman Brothers wrote the songs.',
        source: TIKI,
      },
      // evidence: "Let's All Sing Like the Birdies Sing," followed by an audience sing-along and whistle-along
      {
        type: 'trivia',
        id: 'tiki-room-x10',
        question: 'Finish this Tiki Room song title: “Let’s All Sing Like the ___ Sing.”',
        choices: ['Fishies', 'Birdies', 'Flowers', 'Tikis'],
        answer: 1,
        explain: '“Let’s All Sing Like the Birdies Sing,” and then the audience gets to whistle along!',
        source: TIKI,
      },
      // evidence: "First opened on June 23, 1963, at the Disneyland Resort."
      {
        type: 'guess',
        id: 'tiki-room-x11',
        question: 'What year did the very first Tiki Room open at Disneyland?',
        answer: 1963,
        min: 1950,
        max: 2000,
        step: 1,
        unit: '',
        tolerance: 3,
        explain: 'It opened in 1963, eight years before Magic Kingdom.',
        source: TIKI,
      },
      // evidence: "Fritz: red, black, and white, with a German accent provided by Thurl Ravenscroft"
      {
        type: 'truefalse',
        id: 'tiki-room-r1',
        statement: 'Fritz, the bird with the German accent, is voiced by Thurl Ravenscroft.',
        answer: true,
        explain: 'Fact! Thurl Ravenscroft’s famous deep voice brings Fritz to life.',
        source: TIKI,
      },
      // evidence: "a small fire broke out in the attraction's attic, severely damaging the Iago audio-animatronic figure"
      {
        type: 'truefalse',
        id: 'tiki-room-r2',
        statement:
          'In January 2011 a small fire in the attic damaged the Iago figure, and soon the classic show returned.',
        answer: true,
        explain: 'Fact! After the fire, Imagineers brought back the original birds that August.',
        source: TIKI,
      },
      // evidence: "The show was originally going to be a restaurant featuring Audio-Animatronics birds"
      {
        type: 'trivia',
        id: 'tiki-room-r3',
        question: 'Walt’s first idea for the Tiki Room was something different. What?',
        choices: ['A restaurant with singing birds', 'A roller coaster', 'A pet shop', 'A bird zoo'],
        answer: 0,
        explain: 'It was going to be a restaurant where Audio-Animatronics birds entertained diners!',
        source: TIKI,
      },
      // ----- Look around the queue and theater, in walking order -----
      // source: TIKI_WM. evidence: "The Sunshine Pavilion, featuring a show variously known as “Tropical Serenade”"
      {
        type: 'spy',
        id: 'tiki-room-r-spy1',
        prompt: 'Look at the building you’re about to enter. Does it feel sunny?',
        hint: 'It’s called the Sunshine Pavilion, home of this show since October 1, 1971.',
      },
      // source: TIKI_PS. evidence: "the covered, open-air queue area adorned with tropical foliage and tiki statues"
      {
        type: 'spy',
        id: 'tiki-room-r-spy2',
        prompt: 'Find a tiki statue in the waiting area. What face is it making?',
        hint: 'The waiting area is decorated like a South Seas island garden, with tiki statues watching over you.',
      },
      // source: TIKI_PS. evidence: "the covered, open-air queue area adorned with tropical foliage"
      {
        type: 'spy',
        id: 'tiki-room-r-spy3',
        prompt: 'Spot the tropical plants around the waiting area. Which has the biggest leaves?',
        hint: 'The plants help the Sunshine Pavilion feel like a Polynesian hideaway.',
      },
      // source: TIKI_WM / TIKI_PS: both list a two-bird queue show
      {
        type: 'spy',
        id: 'tiki-room-r-spy4',
        prompt: 'Watch for the two talking birds in the pre-show. What are they joking about?',
        hint: 'They’re Audio-Animatronics too, warming you up for the big show inside.',
      },
      // source: TIKI_DIS. evidence: "this theater-in-the-round show"
      {
        type: 'spy',
        id: 'tiki-room-r-spy5',
        prompt: 'Inside, notice how the seats are arranged. Where is the stage?',
        hint: 'It’s a theater-in-the-round: the show happens all around you, so look everywhere!',
      },
      // source: TIKI. evidence: "The central fountain was originally planned as a coffee station."
      {
        type: 'spy',
        id: 'tiki-room-r-spy6',
        prompt: 'Find the fountain in the middle of the room.',
        hint: 'When the first Tiki Room was planned as a restaurant, the middle fountain was going to be a coffee station!',
      },
      // source: TIKI (host birds José, Michael, Pierre, Fritz)
      {
        type: 'spy',
        id: 'tiki-room-r-spy7',
        prompt: 'Spot the four host birds on their perches before they wake up.',
        hint: 'José, Michael, Pierre and Fritz. Their feathers match the flags of their home countries.',
      },
      // source: TIKI_WM. evidence: "83 birds including large and small toucans, macaws, birds of paradise"
      {
        type: 'spy',
        id: 'tiki-room-r-spy8',
        prompt: 'Find a toucan with a big colorful beak among the birds.',
        hint: 'The flock includes toucans, macaws and birds of paradise, all waiting to sing.',
      },
      // source: TIKI. evidence: "4 totem poles"
      {
        type: 'spy',
        id: 'tiki-room-r-spy9',
        prompt: 'Find a totem pole with faces carved on it.',
        hint: 'Keep watching: the faces on the poles sing in the show!',
      },
      // source: TIKI. evidence: "12 tiki drummers"
      {
        type: 'spy',
        id: 'tiki-room-r-spy10',
        prompt: 'Spot a tiki drummer waiting to play.',
        hint: 'There are 12 tiki drummers. Listen for them when the gods get going!',
      },
      // source: TIKI. evidence: "54 singing orchids"
      {
        type: 'spy',
        id: 'tiki-room-r-spy11',
        prompt: 'Find the flowers hanging around the room. Do they look like they could sing?',
        hint: 'They can! Dozens of singing orchids join in the songs.',
      },
      // evidence: "the covered, open-air queue area adorned with tropical foliage and tiki statues"
      {
        type: 'photo',
        id: 'tiki-room-r-photo1',
        prompt: 'From the line, take a group photo with a tiki statue in the background. Everyone copy its face!',
        tip: 'Look around the covered waiting area.',
        source: TIKI_PS,
      },
      {
        type: 'challenge',
        id: 'tiki-room-x16',
        prompt: 'Warm up for the show’s whistle-along! Take turns whistling like a Tiki Room bird.',
      },
      {
        type: 'challenge',
        id: 'tiki-room-x17',
        prompt: 'Be a tiki drummer: tap a beat on your knees and have everyone copy it.',
      },
      {
        type: 'wyr',
        id: 'tiki-room-x20',
        a: 'Be one of the singing birds',
        b: 'Be one of the singing flowers',
      },
      {
        type: 'wyr',
        id: 'tiki-room-x22',
        a: 'Host the Tiki show like José and friends',
        b: 'Be a tiki drummer in the back',
      },
      {
        type: 'emoji',
        id: 'tiki-room-x24',
        emojis: '🦜 🎤 🌺',
        hint: 'Where the birds sing words and the flowers croon.',
        choices: ['The Enchanted Tiki Room', 'Jungle Cruise', 'Dumbo', 'Country Bear Jamboree'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'tiki-room-x25',
        emojis: '🦜 😤 📋',
        hint: 'He took over this show from 1998 to 2011.',
        choices: ['Zazu', 'Iago', 'José', 'Polly'],
        answer: 1,
      },
    ],
  },
  'swiss-family-treehouse': {
    facts: [
      // evidence: open-air rooms filled with 19th-century items salvaged from the wreck
      {
        text: 'The open-air rooms are filled with 1800s-style things saved from the family’s shipwreck.',
        source: SFT_DIS,
      },
      // evidence: "The version there was named "La Cabane des Robinson.""
      { text: 'Disneyland Paris has its own version called La Cabane des Robinson.', source: SFT },
      // evidence: "a tune entitled 'Swisskapolka,' written by Disney Legend Buddy Baker"
      { text: 'The family’s organ plays “Swisskapolka,” written by Disney Legend Buddy Baker.', source: SFT_DVC },
    ],
    quests: [
      // evidence: "you must be able to climb a total of 116 stairs"
      {
        type: 'guess',
        id: 'swiss-family-treehouse-x1',
        question: 'How many stairs do you climb in the Treehouse?',
        answer: 116,
        min: 20,
        max: 300,
        step: 2,
        unit: 'stairs',
        tolerance: 15,
        explain: 'A total of 116 stairs. Count them as you go!',
        source: SFT_DIS,
      },
      // evidence: "116 stairs to reach the top (6 stories)"
      {
        type: 'trivia',
        id: 'swiss-family-treehouse-x2',
        question: 'About how high up is the top of the Treehouse?',
        choices: ['2 stories', '6 stories', '20 stories', '50 stories'],
        answer: 1,
        explain: 'The top is 6 stories above Magic Kingdom.',
        source: SFT_DIS,
      },
      // evidence: "A large water wheel and related contraptions carry water up to the rooms."
      {
        type: 'trivia',
        id: 'swiss-family-treehouse-x3',
        question: 'What gathers water from the stream at the bottom of the tree?',
        choices: ['A bucket on a rope', 'A large wooden wheel', 'An elephant’s trunk', 'A garden hose'],
        answer: 1,
        explain: 'A big wooden wheel scoops up water, and clever contraptions carry it up to the rooms.',
        source: SFT_DIS,
      },
      // evidence: "The original opened November 18, 1962" / "October 1, 1971" / Paris "opened in 1992" / "Tokyo Disneyland also has a Swiss Family Treehouse which opened in 1993"
      {
        type: 'order',
        id: 'swiss-family-treehouse-x11',
        prompt: 'Put these treehouse openings in order, oldest first.',
        items: [
          'Disneyland’s Treehouse',
          'Magic Kingdom’s Treehouse',
          'Disneyland Paris’s treehouse',
          'Tokyo Disneyland’s Treehouse',
        ],
        explain: '1962, 1971, Paris in 1992, then Tokyo in 1993.',
        source: SFT,
      },
      // evidence: "the Swiss Family Treehouse was one of the original attractions of Adventureland"
      {
        type: 'truefalse',
        id: 'swiss-family-treehouse-x12',
        statement: 'The Treehouse was one of Adventureland’s original attractions when Magic Kingdom opened.',
        answer: true,
        explain: 'Fact! It’s been here since October 1, 1971.',
        source: SFT,
      },
      // evidence: "The tree weighs about 200 tons"
      {
        type: 'guess',
        id: 'swiss-family-treehouse-r1',
        question: 'About how many tons does this giant tree weigh?',
        answer: 200,
        min: 10,
        max: 1000,
        step: 10,
        unit: 'tons',
        tolerance: 40,
        explain: 'About 200 tons of steel, plaster and stucco!',
        source: SFT_CO,
      },
      // evidence: "concrete roots reaching 42 feet into the ground"
      {
        type: 'guess',
        id: 'swiss-family-treehouse-r2',
        question: 'The tree’s concrete roots reach how many feet underground?',
        answer: 42,
        min: 0,
        max: 150,
        step: 1,
        unit: 'feet',
        tolerance: 8,
        explain:
          '42 feet down, about as deep as a 4-story building is tall. It was built to stand up to Florida hurricanes.',
        source: SFT_CO,
      },
      // evidence: "The only part of the tree that is real is the Spanish moss that is draped over the branches."
      {
        type: 'truefalse',
        id: 'swiss-family-treehouse-r3',
        statement: 'The Spanish moss hanging on the branches is the only real plant part of the tree.',
        answer: true,
        explain: 'Fact! Trunk, leaves and roots are all made by Imagineers. The moss is real.',
        source: SFT_DVC,
      },
      // evidence: "The tree is actually classified as a building."
      {
        type: 'truefalse',
        id: 'swiss-family-treehouse-r4',
        statement: 'Officially, this tree counts as a building.',
        answer: true,
        explain: 'Fact! It’s classified as a building, not a plant.',
        source: SFT_DVC,
      },
      // evidence: "it was the only treehouse in the world with its own fire sprinkler system"
      {
        type: 'truefalse',
        id: 'swiss-family-treehouse-r5',
        statement: 'This treehouse has its own fire sprinkler system.',
        answer: true,
        explain: 'Fact! A building safety director called it the only treehouse in the world with one.',
        source: SFT_CO,
      },
      // evidence: "a tune entitled 'Swisskapolka,' written by Disney Legend Buddy Baker"
      {
        type: 'trivia',
        id: 'swiss-family-treehouse-r6',
        question: 'The family’s organ plays a song. What is it called?',
        choices: ['Swisskapolka', 'Treetop Tango', 'Robinson Rock', 'Shipwreck Shuffle'],
        answer: 0,
        explain: '“Swisskapolka,” by Disney Legend Buddy Baker.',
        source: SFT_DVC,
      },
      // evidence: "It closed March 8, 1999, and reopened that June as Tarzan's Treehouse."
      {
        type: 'trivia',
        id: 'swiss-family-treehouse-r7',
        question: 'In 1999, Disneyland’s Swiss Family Treehouse became whose treehouse?',
        choices: ['Tarzan’s', 'Peter Pan’s', 'Robin Hood’s', 'Winnie the Pooh’s'],
        answer: 0,
        explain: 'It became Tarzan’s Treehouse, and in 2023 the Adventureland Treehouse. Ours stayed Swiss!',
        source: SFT,
      },
      // evidence: "All trace back to a real tree in Tobago featured in the 1960 film Swiss Family Robinson."
      {
        type: 'truefalse',
        id: 'swiss-family-treehouse-r8',
        statement: 'This treehouse traces back to a real tree on the island of Tobago.',
        answer: true,
        explain: 'Fact! A real tree in Tobago starred in the 1960 film that inspired this attraction.',
        source: SFT_CO,
      },
      // ----- Look around as you climb, in walking order -----
      // source: SFT_DIS. evidence: "Visitors cross a bridge, climb handmade wooden stairs"
      {
        type: 'spy',
        id: 'swiss-family-treehouse-x13',
        prompt: 'Find the bridge at the foot of the tree. Can you spot the wooden stairs going up?',
        hint: 'The stairs look handmade, like the family built them with tools saved from their ship.',
      },
      // source: SFT_DIS. evidence: "A large water wheel and related contraptions carry water up to the rooms."
      {
        type: 'spy',
        id: 'swiss-family-treehouse-x14',
        prompt: 'Spot the big wooden wheel scooping up water at the bottom of the tree.',
        hint: 'Listen for splashing! This wheel is how the family got water all the way up to their rooms.',
      },
      // source: SFT_CO. evidence: "concrete roots reaching 42 feet into the ground"
      {
        type: 'spy',
        id: 'swiss-family-treehouse-r-spy1',
        prompt: 'Look at the giant roots at the bottom of the tree.',
        hint: 'They look like wood, but they’re concrete, and they go 42 feet underground to hold the tree steady.',
      },
      // source: SFT_DVC. evidence: "a really cool water pulley system that moves water from the ground up to all the rooms"
      {
        type: 'spy',
        id: 'swiss-family-treehouse-r-spy2',
        prompt: 'Follow the water! Find where the pulleys carry it up the tree.',
        hint: 'The family rigged a pulley system so every room gets water. Clever shipwreck engineering!',
      },
      // source: SFT_DVC. evidence: "The only part of the tree that is real is the Spanish moss"
      {
        type: 'spy',
        id: 'swiss-family-treehouse-r-spy3',
        prompt: 'Find the gray, stringy Spanish moss hanging from the branches.',
        hint: 'It’s the only real plant on the whole tree!',
      },
      // source: SFT_DVC. evidence: "plaques describing the family's life in journal form"
      {
        type: 'spy',
        id: 'swiss-family-treehouse-r-spy4',
        prompt: 'Look for a sign that reads like a family journal.',
        hint: 'The plaques tell the Robinsons’ story as if they wrote it themselves.',
      },
      // source: SFT_DVC. evidence: "bedrooms with real beds, a kitchen, a living room"
      {
        type: 'spy',
        id: 'swiss-family-treehouse-r-spy5',
        prompt: 'Find the kitchen. What would the family cook up here?',
        hint: 'Everything in it was salvaged from the shipwreck and carried up the tree.',
      },
      // source: SFT_DVC. evidence: "There is even an organ that was rescued from the ship"
      {
        type: 'spy',
        id: 'swiss-family-treehouse-r-spy6',
        prompt: 'Listen for organ music. Can you find the organ?',
        hint: 'The family rescued it from their ship. It plays “Swisskapolka” by Buddy Baker.',
      },
      // source: SFT_DVC. evidence: "bedrooms with real beds"
      {
        type: 'spy',
        id: 'swiss-family-treehouse-r-spy7',
        prompt: 'Peek into a bedroom. Which bed would you pick?',
        hint: 'They’re real beds, set up just like the family slept here.',
      },
      // source: SFT_DVC. evidence: "a storage room, a study, and a library"
      {
        type: 'spy',
        id: 'swiss-family-treehouse-r-spy8',
        prompt: 'Find the library or study. What books did the family save?',
        hint: 'Even on a deserted island, the Robinsons kept reading and learning.',
      },
      // source: SFT_DIS. evidence: "especially the Jungle Cruise river"
      {
        type: 'spy',
        id: 'swiss-family-treehouse-x16',
        prompt: 'From up high, look down for a Jungle Cruise boat on the river.',
        hint: 'The top gives you views all around Adventureland, especially over the Jungle Cruise river.',
      },
      // source: SFT_DVC. evidence: "Views from the top include Cinderella Castle and Space Mountain"
      {
        type: 'spy',
        id: 'swiss-family-treehouse-r-spy9',
        prompt: 'At the top, can you spot Cinderella Castle or Space Mountain?',
        hint: 'You’re about 6 stories up, high enough to see across the park.',
      },
      // evidence: "stretching 60 feet (18 m) tall and 90 feet (27 m) wide."
      {
        type: 'photo',
        id: 'swiss-family-treehouse-r-photo1',
        prompt: 'From the line at the bottom, snap a photo looking up at the giant tree.',
        tip: 'Try to fit all 60 feet in your picture!',
        source: SFT,
      },
      // evidence: "A large water wheel and related contraptions carry water up to the rooms."
      {
        type: 'photo',
        id: 'swiss-family-treehouse-r-photo2',
        prompt: 'From the line, take a photo of the water wheel in action.',
        tip: 'It’s at the base of the tree.',
        source: SFT_DIS,
      },
      {
        type: 'challenge',
        id: 'swiss-family-treehouse-x18',
        prompt: 'Count the 116 stairs together as you climb. Whisper the even numbers!',
      },
      {
        type: 'challenge',
        id: 'swiss-family-treehouse-x19',
        prompt:
          'Act out the water wheel: one person scoops, then everyone passes the pretend water up, up, up the tree.',
      },
      {
        type: 'wyr',
        id: 'swiss-family-treehouse-x21',
        a: 'Sleep in the top room of the treehouse',
        b: 'Sleep in a lower room, close to the water wheel',
      },
      {
        type: 'emoji',
        id: 'swiss-family-treehouse-x25',
        emojis: '🚢 💥 🏝️',
        hint: 'How the family ended up living in this tree.',
        choices: ['A shipwreck', 'A hot air balloon', 'A treasure hunt', 'A swim race'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'swiss-family-treehouse-x26',
        emojis: '🌳 🏠 🪜',
        hint: 'You’re about to climb it!',
        choices: ['A castle', 'A treehouse', 'A lighthouse', 'A cabin'],
        answer: 1,
      },
    ],
  },
  'magic-carpets': {
    facts: [
      // evidence: "the shops near this attraction are themed to Agrabah's marketplace from the film."
      { text: 'The shops around the ride are themed to Agrabah’s marketplace.', source: MC },
      // evidence: followed by music in a Middle Eastern style
      { text: 'Your carpet takes off to the sound of Middle Eastern music.', source: MC_DIS },
      // evidence: "Manufacturer: Zamperla" / "Designer: Walt Disney Imagineering"
      {
        text: 'The ride was built by a ride company called Zamperla and designed by Walt Disney Imagineering.',
        source: MC,
      },
    ],
    quests: [
      // evidence: "Climb aboard a colorful, 4-passenger flying “rug”"
      {
        type: 'trivia',
        id: 'magic-carpets-x1',
        question: 'How many riders fit on one magic carpet?',
        choices: ['1', '2', '4', '10'],
        answer: 2,
        explain: 'Each colorful flying rug holds 4 passengers.',
        source: MC_DIS,
      },
      // evidence: Back-row riders can tip the carpet forward or backward with a magic scarab.
      {
        type: 'trivia',
        id: 'magic-carpets-x2',
        question: 'What does the back-row rider use to tip the carpet?',
        choices: ['A magic lamp', 'A magic scarab', 'A ruby button', 'A camel’s nose'],
        answer: 1,
        explain: 'A magic scarab tips your carpet forward or backward.',
        source: MC_DIS,
      },
      // evidence: "the ride lasts about 90 seconds."
      {
        type: 'guess',
        id: 'magic-carpets-x3',
        question: 'About how many seconds does a carpet ride last?',
        answer: 90,
        min: 10,
        max: 300,
        step: 5,
        unit: 'seconds',
        tolerance: 15,
        explain: 'About 90 seconds, a minute and a half of flying!',
        source: MC,
      },
      // evidence: The ride soars around a giant genie bottle and magic lamp
      {
        type: 'trivia',
        id: 'magic-carpets-x4',
        question: 'What do the carpets fly around?',
        choices: ['A palace tower', 'A giant genie bottle and magic lamp', 'A huge camel', 'A fountain of jewels'],
        answer: 1,
        explain: 'You soar around a giant genie bottle and magic lamp.',
        source: MC_DIS,
      },
      // evidence: "Adventureland, opened May 23, 2001."
      {
        type: 'trivia',
        id: 'magic-carpets-x5',
        question: 'What year did The Magic Carpets of Aladdin open?',
        choices: ['1971', '1992', '2001', '2015'],
        answer: 2,
        explain: 'It opened in May 2001.',
        source: MC,
      },
      // evidence: Magic Kingdom "opened May 23, 2001" / Paris "Opened March 16, 2002." / Tokyo DisneySea "opened July 18, 2011."
      {
        type: 'order',
        id: 'magic-carpets-x12',
        prompt: 'Put these Magic Carpets openings in order, oldest first.',
        items: ['Magic Kingdom, Florida', 'Disneyland Paris', 'Tokyo DisneySea'],
        explain: 'Here in 2001, Paris in 2002, then Tokyo DisneySea in 2011.',
        source: MC,
      },
      // evidence: "16 carpets, each seating 4."
      {
        type: 'guess',
        id: 'magic-carpets-r1',
        question: 'How many magic carpets fly around the lamp?',
        answer: 16,
        min: 2,
        max: 50,
        step: 1,
        unit: 'carpets',
        tolerance: 3,
        explain: '16 carpets! Count them while you wait.',
        source: MC_WM,
      },
      // evidence: "Capacity: 16 vehicles with 4 guests per vehicle"
      {
        type: 'guess',
        id: 'magic-carpets-r2',
        question: 'If every carpet is full, how many riders are flying at once?',
        answer: 64,
        min: 4,
        max: 200,
        step: 4,
        unit: 'riders',
        tolerance: 8,
        explain: '16 carpets times 4 riders = 64 flyers!',
        source: MC_WM,
      },
      // evidence: "Imagineer Jim Shull proposed a new Aladdin-themed hub-and-spoke ride in Adventureland"
      {
        type: 'trivia',
        id: 'magic-carpets-r3',
        question: 'Which Imagineer came up with the idea for this ride?',
        choices: ['Jim Shull', 'Marc Davis', 'Harper Goff', 'Buddy Baker'],
        answer: 0,
        explain: 'Imagineer Jim Shull proposed it and his team designed the carpets.',
        source: MC_MW,
      },
      // evidence: "Magic Kingdom also wanted to ease demand for Dumbo the Flying Elephant"
      {
        type: 'truefalse',
        id: 'magic-carpets-r4',
        statement: 'One reason this ride was built was to shorten the lines at Dumbo.',
        answer: true,
        explain: 'Fact! Dumbo was so popular that Magic Kingdom wanted another flying ride.',
        source: MC_MW,
      },
      // evidence: "Shull's team made the vehicles seat four instead of Dumbo's two."
      {
        type: 'trivia',
        id: 'magic-carpets-r5',
        question: 'A Dumbo seats 2 riders. How many does a magic carpet seat?',
        choices: ['1', '2', '4', '8'],
        answer: 2,
        explain: 'Four! Imagineers doubled it and added a second control for the back row.',
        source: MC_MW,
      },
      // evidence: "Zamperla, an Italian manufacturer, built the central mechanism."
      {
        type: 'trivia',
        id: 'magic-carpets-r6',
        question: 'The ride’s spinning center was built by Zamperla. Which country is that company from?',
        choices: ['Italy', 'Japan', 'Brazil', 'Canada'],
        answer: 0,
        explain: 'Zamperla is an Italian ride maker.',
        source: MC_MW,
      },
      // evidence: "Shull based the central pole's wrap on a jar he saw in EPCOT's Morocco pavilion."
      {
        type: 'trivia',
        id: 'magic-carpets-r7',
        question: 'The pattern on the ride’s center pole was inspired by a jar from where?',
        choices: ['EPCOT’s Morocco pavilion', 'A museum in Paris', 'A Jungle Cruise crate', 'Cinderella Castle'],
        answer: 0,
        explain: 'Jim Shull spotted the jar in EPCOT’s Morocco pavilion.',
        source: MC_MW,
      },
      // evidence: "The golden lamp would serve as a weenie for the attraction, drawing guests further into Adventureland."
      {
        type: 'trivia',
        id: 'magic-carpets-r8',
        question: 'Why did Imagineers put a big golden lamp on top of the ride?',
        choices: [
          'To draw guests deeper into Adventureland',
          'To light up the park at night',
          'To scare birds away',
          'To tell time',
        ],
        answer: 0,
        explain: 'Imagineers call it a “weenie”: a shiny landmark that pulls you toward it.',
        source: MC_MW,
      },
      // evidence: The camels originally appeared in the "Aladdin's Royal Caravan" parade at Disney-MGM Studios
      {
        type: 'trivia',
        id: 'magic-carpets-r9',
        question: 'Where did the spitting camels come from?',
        choices: ['A parade', 'A real zoo', 'The Jungle Cruise', 'A water park slide'],
        answer: 0,
        explain:
          'They marched in the “Aladdin’s Royal Caravan” parade at Disney-MGM Studios before moving here in 2001.',
        source: MC_MW,
      },
      // evidence: "One camel spits water onto guests as they ride on the carpets" / "the other one faces away from the attraction and squirts nearby pedestrians"
      {
        type: 'truefalse',
        id: 'magic-carpets-r10',
        statement: 'There are two spitting camels: one aims at riders and one aims at people walking by.',
        answer: true,
        explain: 'Fact! Nobody is totally safe from a camel splash.',
        source: MC_MW,
      },
      // evidence: "Fly at mid-level to get hit by the spitting camel."
      {
        type: 'trivia',
        id: 'magic-carpets-r11',
        question: 'Want the camel to spit on you? How high should you fly?',
        choices: ['All the way up', 'In the middle', 'All the way down', 'It never hits riders'],
        answer: 1,
        explain: 'Fly at mid-level to get splashed!',
        source: MC_MW,
      },
      // evidence: "the Genie bottle at the center of the attraction was found when the well that once stood in Adventureland's center was dug up"
      {
        type: 'trivia',
        id: 'magic-carpets-r12',
        question: 'In the ride’s story, where was the Genie bottle found?',
        choices: [
          'In an old well in Adventureland',
          'In the Jungle Cruise river',
          'Up the Swiss Family Treehouse',
          'In a pirate chest',
        ],
        answer: 0,
        explain: 'The story says it was dug up from the old well in the middle of Adventureland!',
        source: MC_MW,
      },
      // evidence: "It is the first permanent Aladdin-themed attraction at Walt Disney World Resort."
      {
        type: 'truefalse',
        id: 'magic-carpets-r13',
        statement: 'This was the first permanent Aladdin attraction at Walt Disney World.',
        answer: true,
        explain: 'Fact! It opened in 2001 as the first one.',
        source: MC_AE,
      },
      // evidence: "The page says the ride opened May 23, 2001, in the new Agrabah Bazaar."
      {
        type: 'trivia',
        id: 'magic-carpets-r14',
        question: 'The ride opened with a new marketplace area of Adventureland. What is it called?',
        choices: ['Agrabah Bazaar', 'Caribbean Plaza', 'Sunshine Pavilion', 'Treasure Market'],
        answer: 0,
        explain: 'Agrabah Bazaar brought an Arabian theme to Adventureland.',
        source: MC_MW,
      },
      // evidence: "The carpets were modeled on the film's magic carpet, inspired by "A Whole New World," and a full-sized model was built for testing."
      {
        type: 'truefalse',
        id: 'magic-carpets-r15',
        statement: 'Imagineers built a full-size practice carpet to test before the ride was made.',
        answer: true,
        explain: 'Fact! They tested a full-sized model carpet first.',
        source: MC_MW,
      },
      // evidence: "Height requirement: Any Height"
      {
        type: 'truefalse',
        id: 'magic-carpets-r16',
        statement: 'You have to be a certain height to fly a magic carpet.',
        answer: false,
        explain: 'Fiction! There’s no height requirement. Everyone can fly.',
        source: MC_DIS,
      },
      // evidence: "Attraction type: aerial carousel"
      {
        type: 'trivia',
        id: 'magic-carpets-r17',
        question: 'What kind of ride is The Magic Carpets of Aladdin?',
        choices: ['An aerial carousel', 'A roller coaster', 'A boat ride', 'A walk-through'],
        answer: 0,
        explain: 'It’s an aerial carousel, like a merry-go-round that flies.',
        source: MC,
      },
      // ----- Look around the queue, in walking order -----
      // source: MC_MW. evidence: "the other one faces away from the attraction and squirts nearby pedestrians"
      {
        type: 'spy',
        id: 'magic-carpets-r-spy1',
        prompt: 'Near the entrance, find the camel facing the walkway. Stay dry!',
        hint: 'This camel used to march in a parade at Disney-MGM Studios. Now it squirts people walking by.',
      },
      // source: MC_MW. evidence: "One camel spits water onto guests as they ride on the carpets"
      {
        type: 'spy',
        id: 'magic-carpets-r-spy2',
        prompt: 'Find the second camel, the one aimed at the carpets.',
        hint: 'Watch which carpets get splashed. Hint: the ones flying in the middle!',
      },
      // source: MC_AE. evidence: "Gems are set into the pavement along the queue and boarding area."
      {
        type: 'spy',
        id: 'magic-carpets-r-spy3',
        prompt: 'Look down! Find a jewel set into the ground.',
        hint: 'Gems sparkle in the pavement all along the line, like treasure from the Cave of Wonders.',
      },
      // source: MC. evidence: "the shops near this attraction are themed to Agrabah's marketplace from the film."
      {
        type: 'spy',
        id: 'magic-carpets-x16',
        prompt: 'Look around at the shops. Do they look like a busy Agrabah marketplace?',
        hint: 'They’re themed to Agrabah’s market, part of the Agrabah Bazaar that opened with this ride.',
      },
      // source: MC_MW. evidence: "Shull based the central pole's wrap on a jar he saw in EPCOT's Morocco pavilion."
      {
        type: 'spy',
        id: 'magic-carpets-r-spy4',
        prompt: 'Study the pattern on the ride’s center pole.',
        hint: 'Imagineer Jim Shull based it on a jar he saw at EPCOT’s Morocco pavilion.',
      },
      // source: MC_MW. evidence: "a large Genie lamp was installed atop the ride's central pole"
      {
        type: 'spy',
        id: 'magic-carpets-x14',
        prompt: 'Spot the giant golden Genie lamp on top of the ride.',
        hint: 'Imagineers put it there so it would shine and pull guests deeper into Adventureland.',
      },
      // source: MC_MW. evidence: "the Genie bottle that serves as the centerpiece of the attraction was discovered"
      {
        type: 'spy',
        id: 'magic-carpets-r-spy5',
        prompt: 'Find the big Genie bottle in the center of the ride.',
        hint: 'The story says it was dug up from an old well that once stood in the middle of Adventureland.',
      },
      // source: MC_DIS. evidence: "Climb aboard a colorful, 4-passenger flying “rug”"
      {
        type: 'spy',
        id: 'magic-carpets-x15',
        prompt: 'Look at the carpets flying by. Which colors and patterns would you pick?',
        hint: 'The carpets were modeled on the movie’s magic carpet. Each one seats 4.',
      },
      // source: MC_DIS. evidence: front-row riders can raise or lower the carpet with an onboard lever
      {
        type: 'spy',
        id: 'magic-carpets-r-spy6',
        prompt: 'Watch a front-row rider. Can you see them working the lever?',
        hint: 'The front lever makes the carpet fly higher or lower, just like on Dumbo.',
      },
      // source: MC_DIS. evidence: Back-row riders can tip the carpet forward or backward with a magic scarab.
      {
        type: 'spy',
        id: 'magic-carpets-x17',
        prompt: 'Watch the carpets fly. Can you spot one tipping forward or backward?',
        hint: 'That’s the back-row rider using the magic scarab!',
      },
      // source: MC_MW. evidence: "while music from the movie plays"
      {
        type: 'spy',
        id: 'magic-carpets-r-spy7',
        prompt: 'Listen to the music playing around the ride. Do you know the tune?',
        hint: 'Music from Aladdin plays while the carpets fly.',
      },
      // source: MC_AE. evidence: "Located in Adventureland, across from Swiss Family Treehouse and beside The Enchanted Tiki Room"
      {
        type: 'spy',
        id: 'magic-carpets-r-spy8',
        prompt: 'Find your neighbors: can you see the Swiss Family Treehouse or the Tiki Room from the line?',
        hint: 'The carpets fly right between them, in the heart of Adventureland.',
      },
      // evidence: "At the entrance, a camel statue squirts guests as they walk by."
      {
        type: 'photo',
        id: 'magic-carpets-r-photo1',
        prompt: 'From the line, snap a photo of the spitting camel, and try to stay dry!',
        tip: 'It’s right at the entrance.',
        source: MC,
      },
      // evidence: "a large Genie lamp was installed atop the ride's central pole"
      {
        type: 'photo',
        id: 'magic-carpets-r-photo2',
        prompt: 'From the line, take a photo of the golden Genie lamp with carpets flying around it.',
        source: MC_MW,
      },
      {
        type: 'challenge',
        id: 'magic-carpets-x21',
        prompt: 'Plan your flight: decide who works the lever up front and who presses the scarab in back.',
      },
      {
        type: 'challenge',
        id: 'magic-carpets-r-ch1',
        prompt: 'Every time the camel spits, the whole group says “Ptooey!” Who notices first?',
      },
      {
        type: 'wyr',
        id: 'magic-carpets-x22',
        a: 'Sit up front and control how high you fly',
        b: 'Sit in back and tip the carpet forward and backward',
      },
      {
        type: 'wyr',
        id: 'magic-carpets-r-wyr1',
        a: 'Fly at mid-level and risk a camel splash',
        b: 'Fly all the way up and stay dry',
      },
      {
        type: 'emoji',
        id: 'magic-carpets-r-emoji1',
        emojis: '🐪 💦 😱',
        hint: 'Watch out at the entrance!',
        choices: ['The spitting camel', 'A water fountain', 'A splash pad', 'A rain cloud'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'magic-carpets-r-emoji2',
        emojis: '🪔 ✨ ⬆️',
        hint: 'It shines on top of the ride.',
        choices: ['The golden Genie lamp', 'A lighthouse', 'A torch', 'A candle'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'magic-carpets-r-emoji3',
        emojis: '🪲 ↕️ 🧶',
        hint: 'What the back-row rider presses.',
        choices: ['The magic scarab', 'A ladybug button', 'A rug brush', 'A seat belt'],
        answer: 0,
      },
    ],
  },
};
