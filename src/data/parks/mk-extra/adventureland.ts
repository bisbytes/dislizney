import type { Fact, Quest } from '../../types';

const JC = 'https://en.wikipedia.org/wiki/Jungle_Cruise';
const JC_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/jungle-cruise/';
const PI = 'https://en.wikipedia.org/wiki/Pirates_of_the_Caribbean_(attraction)';
const PI_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/pirates-of-the-caribbean/';
const TIKI = "https://en.wikipedia.org/wiki/Walt_Disney's_Enchanted_Tiki_Room";
const SFT = 'https://en.wikipedia.org/wiki/Swiss_Family_Treehouse';
const SFT_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/swiss-family-treehouse/';
const SFR = 'https://en.wikipedia.org/wiki/Swiss_Family_Robinson_(1960_film)';
const MC = 'https://en.wikipedia.org/wiki/The_Magic_Carpets_of_Aladdin';
const MC_DIS = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/magic-carpets-of-aladdin/';
const ALA = 'https://en.wikipedia.org/wiki/Aladdin_(1992_Disney_film)';

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
        question: 'Disney calls this boat trip a journey of how many miles?',
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
      // evidence: "overrun by curious gorillas"
      {
        type: 'truefalse',
        id: 'jungle-cruise-x4',
        statement: 'On the cruise you pass a camp that has been taken over by gorillas.',
        answer: true,
        explain: 'Fact! Curious gorillas have overrun the camp.',
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
      // evidence: "The boats now pass behind Schweitzer Falls (referred to as "the Backside of Water"..."
      {
        type: 'trivia',
        id: 'jungle-cruise-x6',
        question: 'When your boat goes behind Schweitzer Falls, what do skippers call it?',
        choices: ['The Wet Zone', 'The Backside of Water', 'Splash Alley', 'The Rain Room'],
        answer: 1,
        explain: 'It’s the famous “Backside of Water”!',
        source: JC,
      },
      // evidence: "a missing Jungle Cruise vessel and its helpless passengers"
      {
        type: 'trivia',
        id: 'jungle-cruise-x7',
        question: 'What are you searching for on your cruise?',
        choices: ['A lost treasure map', 'A missing Jungle Cruise boat', 'A runaway elephant', 'The skipper’s hat'],
        answer: 1,
        explain: 'You keep an eye out for a missing Jungle Cruise boat and its passengers.',
        source: JC_DIS,
      },
      // evidence: "1955" (Disneyland opening), "October 1, 1971", "Albert Awol was added in 1991", "The world premiere for Jungle Cruise was held at Disneyland on July 24, 2021."
      {
        type: 'order',
        id: 'jungle-cruise-x8',
        prompt: 'Put these Jungle Cruise moments in order, oldest first.',
        items: [
          'Jungle Cruise opens at Disneyland',
          'Jungle Cruise opens at Magic Kingdom',
          'Albert Awol joins the queue radio',
          'The Jungle Cruise movie premieres',
        ],
        explain: '1955, then 1971, then 1991, then the movie in 2021.',
        source: JC,
      },
      // evidence: "The world premiere for Jungle Cruise was held at Disneyland on July 24, 2021."
      {
        type: 'trivia',
        id: 'jungle-cruise-x9',
        question: 'What year did the Jungle Cruise movie come out?',
        choices: ['1971', '1999', '2011', '2021'],
        answer: 3,
        explain: 'The movie premiered in July 2021.',
        source: JC,
      },
      // evidence: "Big band music from the 1920s, 1930s and 1940s plays overhead."
      {
        type: 'truefalse',
        id: 'jungle-cruise-x10',
        statement: 'The music in the queue is big band music from the 1920s to 1940s.',
        answer: true,
        explain: 'Fact! Old-time big band tunes play overhead.',
        source: JC,
      },
      // evidence: "Watch for angry hippos, hungry lions and "sleeping" zebras"
      {
        type: 'truefalse',
        id: 'jungle-cruise-x11',
        statement: 'The hippos on the Jungle Cruise are sleepy and friendly.',
        answer: false,
        explain: 'Fiction! Watch out for angry hippos (and hungry lions)!',
        source: JC_DIS,
      },
      // evidence: "pinned insects, an old radio on top of a bookshelf, an old typewriter"
      {
        type: 'spy',
        id: 'jungle-cruise-x12',
        prompt: 'Spot an old radio or an old typewriter in the queue.',
        hint: 'Try looking up on top of a bookshelf.',
      },
      {
        type: 'spy',
        id: 'jungle-cruise-x13',
        prompt: 'Find something that looks like it was packed for a jungle expedition.',
        hint: 'Crates, maps and gear are all good finds.',
      },
      {
        type: 'spy',
        id: 'jungle-cruise-x14',
        prompt: 'Spy a boat out on the river. Can you read its name?',
      },
      {
        type: 'spy',
        id: 'jungle-cruise-x15',
        prompt: 'Find a plant with leaves bigger than your hand.',
      },
      {
        type: 'challenge',
        id: 'jungle-cruise-x16',
        prompt: 'Everyone do your best animal sound from the jungle. Can the group guess each animal?',
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
        prompt: 'Freeze like a “sleeping” zebra! Last one to move or giggle wins.',
      },
      {
        type: 'wyr',
        id: 'jungle-cruise-x20',
        a: 'Be the skipper telling the jokes',
        b: 'Be the passenger laughing at every joke',
      },
      {
        type: 'wyr',
        id: 'jungle-cruise-x21',
        a: 'Ride an elephant through the jungle',
        b: 'Ride a boat past the hippos',
      },
      {
        type: 'wyr',
        id: 'jungle-cruise-x22',
        a: 'Get splashed by the Backside of Water',
        b: 'Get squirted by a playful elephant',
      },
      {
        type: 'wyr',
        id: 'jungle-cruise-x23',
        a: 'Explore the Amazon',
        b: 'Explore the Nile',
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
      // evidence: "inspired by Castillo de San Felipe del Morro in Puerto Rico"
      {
        text: 'The ride’s fort is inspired by a real fort in Puerto Rico called Castillo San Felipe del Morro.',
        source: PI,
      },
      // evidence: "written by George Bruns (music) and Xavier Atencio (lyrics)"
      { text: 'The pirate song was written by George Bruns (music) and Xavier Atencio (words).', source: PI },
      // evidence: "Board a weathered barge for a treacherous voyage"
      { text: 'Your boat is a weathered barge sailing back in time to pirate days.', source: PI_DIS },
      // evidence: "The chess-playing skeleton gag was designed for the Magic Kingdom by Imagineer Marc Davis."
      {
        text: 'The chess-playing skeletons in the queue were dreamed up for Magic Kingdom by Imagineer Marc Davis.',
        source: PI,
      },
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
        source: PI,
      },
      // evidence: "attempting to lure a dog who has keys in his mouth"
      {
        type: 'trivia',
        id: 'pirates-x2',
        question: 'The prisoners in jail are trying to get something from a dog. What?',
        choices: ['A bone', 'A treasure map', 'The keys', 'A cookie'],
        answer: 2,
        explain: 'The dog has the jail keys in his mouth!',
        source: PI,
      },
      // evidence: "Be sure to keep a spry eye out for Captain Jack Sparrow"
      {
        type: 'trivia',
        id: 'pirates-x3',
        question: 'Which famous movie captain should you keep an eye out for on the ride?',
        choices: ['Captain Hook', 'Captain Jack Sparrow', 'Captain Nemo', 'Captain Smee'],
        answer: 1,
        explain: 'Look sharp for Captain Jack Sparrow!',
        source: PI_DIS,
      },
      // evidence: "a striking 12-gun galleon"
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
      // evidence: "to the 17th century, when rowdy rogues and ruthless rapscallions ransacked Caribbean seaport towns"
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
      // evidence: "attempting to lure a dog who has keys in his mouth" / scene list order on page
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
      // evidence: "Opening on March 18, 1967, the Disneyland version" / "The new Pirates of the Caribbean ride opened on December 15, 1973." / "In 2003, Disney released..."
      {
        type: 'order',
        id: 'pirates-x12',
        prompt: 'Put these in order, oldest first.',
        items: ['Pirates opens at Disneyland', 'Pirates opens at Magic Kingdom', 'The first Pirates movie comes out'],
        explain: '1967, then 1973, then the movie in 2003.',
        source: PI,
      },
      // evidence: "The queue winds through the fort, passing supplies and cannons"
      {
        type: 'spy',
        id: 'pirates-x13',
        prompt: 'Spot some pirate supplies in the fort. Barrels, crates or cannonballs all count!',
      },
      {
        type: 'spy',
        id: 'pirates-x14',
        prompt: 'Find something in line that looks like it belongs on a pirate ship.',
      },
      {
        type: 'spy',
        id: 'pirates-x15',
        prompt: 'Look for a key, a lock or a chain. Pirates love to lock up treasure!',
      },
      {
        type: 'spy',
        id: 'pirates-x16',
        prompt: 'Find a spot in the fort that would make a great pirate lookout.',
        hint: 'Think high windows and walls.',
      },
      {
        type: 'challenge',
        id: 'pirates-x17',
        prompt: 'Everyone give yourself a pirate name, like “Captain Sandy Socks.” Use it until the boat!',
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
        type: 'challenge',
        id: 'pirates-x20',
        prompt: 'Draw an invisible treasure map in the air. Can your group guess where X marks the spot?',
      },
      {
        type: 'wyr',
        id: 'pirates-x21',
        a: 'Find a chest full of gold coins',
        b: 'Find a map to a secret island',
      },
      {
        type: 'wyr',
        id: 'pirates-x22',
        a: 'Be the dog holding the keys',
        b: 'Be the prisoner trying to get them',
      },
      {
        type: 'wyr',
        id: 'pirates-x23',
        a: 'Have a parrot on your shoulder',
        b: 'Have a peg leg that plays music',
      },
      {
        type: 'wyr',
        id: 'pirates-x24',
        a: 'Defend the fort',
        b: 'Sail the pirate galleon',
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
        emojis: '🏴‍☠️ 🎩 🧭',
        hint: 'A captain whose compass doesn’t point north.',
        choices: ['Captain Hook', 'Jack Sparrow', 'Mr. Smee', 'Blackbeard'],
        answer: 1,
      },
    ],
  },
  'tiki-room': {
    facts: [
      // evidence: "a slightly edited version of Disneyland's original show"
      {
        text: 'Since August 2011, the show here has been a slightly edited version of Disneyland’s original.',
        source: TIKI,
      },
      // evidence: Under New Management "featured Iago from Aladdin and Zazu from The Lion King"
      { text: 'From 1998 to 2011, Iago from Aladdin and Zazu from The Lion King took over the show.', source: TIKI },
      // evidence: "Disneyland's Tiki Room was also the park's first fully air-conditioned building"
      {
        text: 'Back in 1963, Disneyland’s Tiki Room was that park’s first fully air-conditioned building.',
        source: TIKI,
      },
    ],
    quests: [
      // evidence: "was known as Tropical Serenade until 1998"
      {
        type: 'trivia',
        id: 'tiki-room-x1',
        question: 'What was this show called at Magic Kingdom when it first opened?',
        choices: ['Bird Island', 'Tropical Serenade', 'Tiki Town', 'Feathered Friends'],
        answer: 1,
        explain: 'It was called Tropical Serenade.',
        source: TIKI,
      },
      // evidence: "This version replaced the original and featured Iago from Aladdin"
      {
        type: 'trivia',
        id: 'tiki-room-x2',
        question: 'From 1998 to 2011, which bird from Aladdin starred in the show?',
        choices: ['Iago', 'Abu', 'Zazu', 'Rajah'],
        answer: 0,
        explain: 'Iago, Jafar’s loud parrot pal, was in “Under New Management.”',
        source: TIKI,
      },
      // evidence: "was the first to feature Audio-Animatronics technology"
      {
        type: 'truefalse',
        id: 'tiki-room-x3',
        statement: 'The first Tiki Room, at Disneyland, was the first attraction with Audio-Animatronics.',
        answer: true,
        explain: 'Fact! It was the very first to use Audio-Animatronics.',
        source: TIKI,
      },
      // evidence: "The finale is "Hawaiian War Chant," ... "the finale has every Audio-Animatronics figure performing a rousing version of" it"
      {
        type: 'trivia',
        id: 'tiki-room-x4',
        question: 'Which song is the big finale where everyone performs?',
        choices: ['Hawaiian War Chant', 'Under the Sea', 'Yo Ho', 'Hakuna Matata'],
        answer: 0,
        explain: 'The whole cast performs the “Hawaiian War Chant.”',
        source: TIKI,
      },
      // evidence: "Michael (Fulton Burley): white and green, with an Irish brogue"
      {
        type: 'trivia',
        id: 'tiki-room-x5',
        question: 'Which host bird talks with an Irish accent?',
        choices: ['José', 'Michael', 'Pierre', 'Fritz'],
        answer: 1,
        explain: 'Michael has an Irish brogue.',
        source: TIKI,
      },
      // evidence: "José (Wally Boag): red, white, and green, with a Mexican accent"
      {
        type: 'trivia',
        id: 'tiki-room-x6',
        question: 'José’s feathers are red, white and green. What accent does he have?',
        choices: ['French', 'German', 'Mexican', 'Irish'],
        answer: 2,
        explain: 'José has a Mexican accent.',
        source: TIKI,
      },
      // evidence: "Pierre (Ernie Newton): blue, white, and red, with a French accent"
      {
        type: 'truefalse',
        id: 'tiki-room-x7',
        statement: 'Pierre the bird speaks with a German accent.',
        answer: false,
        explain: 'Fiction! Pierre has a French accent. Fritz is the one with the German accent.',
        source: TIKI,
      },
      // evidence: "First opened on June 23, 1963" / "when that park opened in 1971" / "known as Tropical Serenade until 1998" / "reopened on August 15, 2011"
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
      // evidence: "Sherman Brothers (music & lyrics)"
      {
        type: 'truefalse',
        id: 'tiki-room-x9',
        statement: 'The Sherman Brothers wrote the music and words for the show.',
        answer: true,
        explain: 'Fact! The Sherman Brothers wrote the songs.',
        source: TIKI,
      },
      // evidence: ""Let's All Sing Like the Birdies Sing" are signature tunes"
      {
        type: 'trivia',
        id: 'tiki-room-x10',
        question: 'Finish this Tiki Room song title: “Let’s All Sing Like the ___ Sing.”',
        choices: ['Fishies', 'Birdies', 'Flowers', 'Tikis'],
        answer: 1,
        explain: '“Let’s All Sing Like the Birdies Sing” is one of the show’s signature songs.',
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
      {
        type: 'spy',
        id: 'tiki-room-x12',
        prompt: 'Find a carved tiki face. Is it smiling, frowning or surprised?',
      },
      {
        type: 'spy',
        id: 'tiki-room-x13',
        prompt: 'Spot a flower or plant that looks like it came from a tropical island.',
      },
      {
        type: 'spy',
        id: 'tiki-room-x14',
        prompt: 'Look for something with bird colors: bright red, green, blue or yellow.',
      },
      {
        type: 'spy',
        id: 'tiki-room-x15',
        prompt: 'Find something that looks like a drum or could make music.',
      },
      {
        type: 'challenge',
        id: 'tiki-room-x16',
        prompt: 'Whistle like a bird! Take turns and let the group rate each tweet.',
      },
      {
        type: 'challenge',
        id: 'tiki-room-x17',
        prompt: 'Be a tiki drummer: tap a beat on your knees and have everyone copy it.',
      },
      {
        type: 'challenge',
        id: 'tiki-room-x18',
        prompt: 'Make up a new host bird! Give it a name, a color and a silly catchphrase.',
      },
      {
        type: 'challenge',
        id: 'tiki-room-x19',
        prompt: 'Freeze like a tiki statue. The first one to laugh has to flap like a bird.',
      },
      {
        type: 'wyr',
        id: 'tiki-room-x20',
        a: 'Be a singing bird',
        b: 'Be a singing flower',
      },
      {
        type: 'wyr',
        id: 'tiki-room-x21',
        a: 'Have feathers in every color of the rainbow',
        b: 'Have a voice that can sing any song',
      },
      {
        type: 'wyr',
        id: 'tiki-room-x22',
        a: 'Host the Tiki show like José and friends',
        b: 'Be the tiki drummer in the back',
      },
      {
        type: 'wyr',
        id: 'tiki-room-x23',
        a: 'Talk to birds',
        b: 'Talk to flowers',
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
        emojis: '🦜 🧞 🐍',
        hint: 'A loud parrot whose boss is a sorcerer.',
        choices: ['Zazu', 'Iago', 'José', 'Polly'],
        answer: 1,
      },
    ],
  },
  'swiss-family-treehouse': {
    facts: [
      // evidence: "Discover open-air rooms brimming with a bevy of 19th-century articles salvaged from the wreck."
      {
        text: 'The open-air rooms are filled with 1800s-style things saved from the family’s shipwreck.',
        source: SFT_DIS,
      },
      // evidence: "Directed by: Ken Annakin"
      { text: 'The 1960 movie Swiss Family Robinson was directed by Ken Annakin.', source: SFR },
      // evidence: "Father, Fritz, and Ernst construct an elaborate tree house complete with a water wheel."
      {
        text: 'In the movie, Father, Fritz and Ernst build a fancy treehouse with a water wheel, just like this one.',
        source: SFR,
      },
      // evidence: "The version there was named "La Cabane des Robinson.""
      { text: 'Disneyland Paris has its own version called La Cabane des Robinson.', source: SFT },
    ],
    quests: [
      // evidence: "climb a total of 116 stairs"
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
      // evidence: "6 stories above Magic Kingdom park"
      {
        type: 'trivia',
        id: 'swiss-family-treehouse-x2',
        question: 'About how high up is the top of the Treehouse?',
        choices: ['2 stories', '6 stories', '20 stories', '50 stories'],
        answer: 1,
        explain: 'The top is 6 stories above Magic Kingdom.',
        source: SFT_DIS,
      },
      // evidence: "At the base of the tree, a large wooden wheel gathers water from a stream."
      {
        type: 'trivia',
        id: 'swiss-family-treehouse-x3',
        question: 'What gathers water from the stream at the bottom of the tree?',
        choices: ['A bucket on a rope', 'A large wooden wheel', 'An elephant’s trunk', 'A garden hose'],
        answer: 1,
        explain: 'A big wooden wheel scoops up water, and clever contraptions carry it up to the rooms.',
        source: SFT_DIS,
      },
      // evidence: "Swiss Family Robinson is a 1960 American adventure film"
      {
        type: 'trivia',
        id: 'swiss-family-treehouse-x4',
        question: 'What year did the movie Swiss Family Robinson come out?',
        choices: ['1937', '1960', '1985', '2005'],
        answer: 1,
        explain: 'It came out in 1960.',
        source: SFR,
      },
      // evidence: "Youngest son Francis collects various animals including a young Asian elephant, a monkey, and an ostrich."
      {
        type: 'trivia',
        id: 'swiss-family-treehouse-x5',
        question: 'In the movie, which animal does Francis NOT collect?',
        choices: ['A young elephant', 'A monkey', 'An ostrich', 'A penguin'],
        answer: 3,
        explain: 'Francis collects an elephant, a monkey and an ostrich. No penguins on this tropical island!',
        source: SFR,
      },
      // evidence: "shot in Tobago and Pinewood Studios outside London"
      {
        type: 'truefalse',
        id: 'swiss-family-treehouse-x6',
        statement: 'Swiss Family Robinson was partly filmed on the island of Tobago.',
        answer: true,
        explain: 'Fact! It was shot in Tobago and at a studio near London.',
        source: SFR,
      },
      // evidence: "the second feature film based on the 1812 novel The Swiss Family Robinson by Johann David Wyss"
      {
        type: 'guess',
        id: 'swiss-family-treehouse-x7',
        question: 'The movie is based on a book. What year did the book come out?',
        answer: 1812,
        min: 1700,
        max: 1960,
        step: 1,
        unit: '',
        tolerance: 20,
        explain: 'Johann David Wyss’s novel came out in 1812.',
        source: SFR,
      },
      // evidence: "Father, eldest son Fritz, and middle son Ernst"
      {
        type: 'trivia',
        id: 'swiss-family-treehouse-x8',
        question: 'What is the name of the oldest Robinson son?',
        choices: ['Fritz', 'Ernst', 'Francis', 'Felix'],
        answer: 0,
        explain: 'Fritz is the eldest, Ernst is in the middle, and Francis is the youngest.',
        source: SFR,
      },
      // evidence: "the brothers later learning that the "boy" is really a girl named Roberta."
      {
        type: 'truefalse',
        id: 'swiss-family-treehouse-x9',
        statement: 'In the movie, a “boy” the brothers meet turns out to be a girl named Roberta.',
        answer: true,
        explain: 'Fact! Roberta joins the family’s adventures.',
        source: SFR,
      },
      // evidence: "Pirates locate the ship, but Father scares them off by putting up a quarantine flag"
      {
        type: 'truefalse',
        id: 'swiss-family-treehouse-x10',
        statement: 'In the movie, Father scares off pirates with a giant fireworks show.',
        answer: false,
        explain: 'Fiction! He puts up a quarantine flag so the pirates think everyone is sick.',
        source: SFR,
      },
      // evidence: "Tokyo Disneyland also has a Swiss Family Treehouse which opened in 1993"
      {
        type: 'order',
        id: 'swiss-family-treehouse-x11',
        prompt: 'Put these in order, oldest first.',
        items: [
          'The Swiss Family Robinson book',
          'The Swiss Family Robinson movie',
          'Magic Kingdom’s Treehouse opens',
          'Tokyo Disneyland’s Treehouse opens',
        ],
        explain: '1812, 1960, 1971, then Tokyo in 1993.',
        source: SFT,
      },
      // evidence: "the Swiss Family Treehouse was one of the original attractions of Adventureland"
      {
        type: 'truefalse',
        id: 'swiss-family-treehouse-x12',
        statement: 'The Treehouse was one of Adventureland’s original attractions when Magic Kingdom opened.',
        answer: true,
        explain: 'Fact! It’s been here since 1971.',
        source: SFT,
      },
      // evidence: "Cross a bridge at the foot of a large leafy tree and climb handcrafted wooden stairs."
      {
        type: 'spy',
        id: 'swiss-family-treehouse-x13',
        prompt: 'Find the bridge at the foot of the tree. Can you spot the wooden stairs going up?',
      },
      // evidence: "At the base of the tree, a large wooden wheel gathers water from a stream."
      {
        type: 'spy',
        id: 'swiss-family-treehouse-x14',
        prompt: 'Spot the big wooden wheel scooping up water at the bottom of the tree.',
        hint: 'Listen for splashing!',
      },
      {
        type: 'spy',
        id: 'swiss-family-treehouse-x15',
        prompt: 'Find something the family could have made from rope or bamboo.',
      },
      {
        type: 'spy',
        id: 'swiss-family-treehouse-x16',
        prompt: 'From up high, look for a boat on the river below.',
      },
      {
        type: 'challenge',
        id: 'swiss-family-treehouse-x17',
        prompt: 'You’re shipwrecked! Everyone names one thing they’d rescue from the ship first.',
      },
      {
        type: 'challenge',
        id: 'swiss-family-treehouse-x18',
        prompt: 'Count the stairs together out loud as you climb. Whisper the even numbers!',
      },
      {
        type: 'challenge',
        id: 'swiss-family-treehouse-x19',
        prompt: 'Invent a contraption to get water to your bedroom. Explain it with only hand motions.',
      },
      {
        type: 'challenge',
        id: 'swiss-family-treehouse-x20',
        prompt: 'Act out an island animal race like in the movie. Who will you ride: an ostrich or an elephant?',
      },
      {
        type: 'wyr',
        id: 'swiss-family-treehouse-x21',
        a: 'Sleep in the highest room of the treehouse',
        b: 'Sleep on the beach under the stars',
      },
      {
        type: 'wyr',
        id: 'swiss-family-treehouse-x22',
        a: 'Have a pet elephant on the island',
        b: 'Have a pet ostrich on the island',
      },
      {
        type: 'wyr',
        id: 'swiss-family-treehouse-x23',
        a: 'Live on the island forever',
        b: 'Get rescued and sail home tomorrow',
      },
      {
        type: 'wyr',
        id: 'swiss-family-treehouse-x24',
        a: 'Build the treehouse',
        b: 'Decorate the treehouse',
      },
      {
        type: 'emoji',
        id: 'swiss-family-treehouse-x25',
        emojis: '🚢 💥 🏝️',
        hint: 'How the family ended up on the island.',
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
      // evidence: "The shops near this attraction are themed to Agrabah's marketplace from the film."
      { text: 'The shops near the ride are themed to Agrabah’s marketplace from Aladdin.', source: MC },
      // evidence: "take off into the air to the soothing sounds of Middle Eastern music"
      { text: 'Your carpet takes off to the sound of Middle Eastern music.', source: MC_DIS },
      // evidence: "Manufacturer: Zamperla"
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
      // evidence: "If you’re sitting in the back row, pressing a magic scarab will tip your flying carpet forward or backward."
      {
        type: 'trivia',
        id: 'magic-carpets-x2',
        question: 'What does the back-row rider press to tip the carpet?',
        choices: ['A magic lamp', 'A magic scarab', 'A ruby button', 'A camel’s nose'],
        answer: 1,
        explain: 'A magic scarab tips your carpet forward or backward.',
        source: MC_DIS,
      },
      // evidence: "the ride lasts about 90 seconds"
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
      // evidence: "Soar around a giant genie bottle and magic lamp"
      {
        type: 'trivia',
        id: 'magic-carpets-x4',
        question: 'What do the carpets fly around?',
        choices: ['A palace tower', 'A giant genie bottle and magic lamp', 'A huge camel', 'A fountain of jewels'],
        answer: 1,
        explain: 'You soar around a giant genie bottle and magic lamp.',
        source: MC_DIS,
      },
      // evidence: "Opening date: May 23, 2001"
      {
        type: 'trivia',
        id: 'magic-carpets-x5',
        question: 'What year did The Magic Carpets of Aladdin open?',
        choices: ['1971', '1992', '2001', '2015'],
        answer: 2,
        explain: 'It opened in May 2001.',
        source: MC,
      },
      // evidence: "Frank Welker as Abu, Aladdin's kleptomaniac pet monkey"
      {
        type: 'trivia',
        id: 'magic-carpets-x6',
        question: 'In Aladdin, what kind of animal is Abu?',
        choices: ['A parrot', 'A monkey', 'A tiger', 'A camel'],
        answer: 1,
        explain: 'Abu is Aladdin’s pet monkey (who loves grabbing shiny things).',
        source: ALA,
      },
      // evidence: "Welker also voices Jasmine's tiger, Rajah"
      {
        type: 'trivia',
        id: 'magic-carpets-x7',
        question: 'What is the name of Jasmine’s tiger?',
        choices: ['Rajah', 'Iago', 'Abu', 'Sultan'],
        answer: 0,
        explain: 'Rajah is Jasmine’s tiger.',
        source: ALA,
      },
      // evidence: "To woo Jasmine, Aladdin uses his first wish to become a prince."
      {
        type: 'trivia',
        id: 'magic-carpets-x8',
        question: 'What does Aladdin use his first wish for?',
        choices: ['A mountain of gold', 'To become a prince', 'To fly', 'A new pet'],
        answer: 1,
        explain: 'He wishes to become a prince to impress Jasmine.',
        source: ALA,
      },
      // evidence: "Aladdin instead decides to keep his promise, wishing the Genie free"
      {
        type: 'truefalse',
        id: 'magic-carpets-x9',
        statement: 'At the end of the movie, Aladdin uses a wish to set the Genie free.',
        answer: true,
        explain: 'Fact! He keeps his promise and wishes the Genie free.',
        source: ALA,
      },
      // evidence: "the location of the film was changed from Baghdad to the fictional Arabian city of Agrabah"
      {
        type: 'truefalse',
        id: 'magic-carpets-x10',
        statement: 'Agrabah, Aladdin’s home city, is a real place you can visit on a map.',
        answer: false,
        explain: 'Fiction! Agrabah is a make-believe city made up for the movie.',
        source: ALA,
      },
      // evidence: "Aladdin garnered two Academy Awards"
      {
        type: 'truefalse',
        id: 'magic-carpets-x11',
        statement: 'The movie Aladdin won two Academy Awards.',
        answer: true,
        explain: 'Fact! It won two Oscars, both for its music.',
        source: ALA,
      },
      // evidence: "Aladdin is a 1992 American animated musical" / "Opening date: May 23, 2001" / Paris version "opened March 16, 2002"
      {
        type: 'order',
        id: 'magic-carpets-x12',
        prompt: 'Put these in order, oldest first.',
        items: [
          'The movie Aladdin comes out',
          'The Magic Carpets of Aladdin opens here',
          'Flying Carpets Over Agrabah opens in Paris',
        ],
        explain: '1992, then 2001, then Paris in 2002.',
        source: MC,
      },
      // evidence: "Iago, Jafar's sardonic, hot-tempered red lory sidekick"
      {
        type: 'trivia',
        id: 'magic-carpets-x13',
        question: 'Iago is Jafar’s grumpy sidekick. What is he?',
        choices: ['A snake', 'A bird', 'A cat', 'A camel'],
        answer: 1,
        explain: 'Iago is a red lory, a kind of colorful parrot.',
        source: ALA,
      },
      {
        type: 'spy',
        id: 'magic-carpets-x14',
        prompt: 'Spot something gold and shiny that a genie might live in.',
      },
      {
        type: 'spy',
        id: 'magic-carpets-x15',
        prompt: 'Find a pattern that would look great on a flying carpet.',
      },
      {
        type: 'spy',
        id: 'magic-carpets-x16',
        prompt: 'Look for something that reminds you of a busy Agrabah marketplace.',
      },
      {
        type: 'spy',
        id: 'magic-carpets-x17',
        prompt: 'Watch the carpets fly. Can you spot one tipping forward or backward?',
      },
      {
        type: 'challenge',
        id: 'magic-carpets-x18',
        prompt: 'Everyone make three wishes, but no wishing for more wishes!',
      },
      {
        type: 'challenge',
        id: 'magic-carpets-x19',
        prompt: 'Be the carpet! The carpet can’t talk, so act out “I’m so excited!” with no words.',
      },
      {
        type: 'challenge',
        id: 'magic-carpets-x20',
        prompt: 'Do your biggest, silliest Genie entrance: “Ta-da!” Best poof wins.',
      },
      {
        type: 'challenge',
        id: 'magic-carpets-x21',
        prompt: 'Plan your flight: decide who works the lever up front and who presses the scarab in back.',
      },
      {
        type: 'wyr',
        id: 'magic-carpets-x22',
        a: 'Sit up front and control how high you fly',
        b: 'Sit in back and tip the carpet forward and backward',
      },
      {
        type: 'wyr',
        id: 'magic-carpets-x23',
        a: 'Have Abu as your pet',
        b: 'Have Rajah as your pet',
      },
      {
        type: 'wyr',
        id: 'magic-carpets-x24',
        a: 'Be a genie who grants wishes',
        b: 'Be a carpet who can fly anywhere',
      },
      {
        type: 'wyr',
        id: 'magic-carpets-x25',
        a: 'Live in the Sultan’s palace',
        b: 'Explore the Cave of Wonders',
      },
      {
        type: 'emoji',
        id: 'magic-carpets-x26',
        emojis: '🌍 ✨ 🌙 🎶',
        hint: 'A song Aladdin and Jasmine sing on a carpet ride.',
        choices: ['A Whole New World', 'Friend Like Me', 'Let It Go', 'Under the Sea'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'magic-carpets-x27',
        emojis: '👸 🐯 🏰',
        hint: 'A princess who lives in the palace with her tiger.',
        choices: ['Belle', 'Jasmine', 'Ariel', 'Mulan'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'magic-carpets-x28',
        emojis: '🐍 🧙‍♂️ 🦜',
        hint: 'A sneaky sorcerer with a parrot sidekick.',
        choices: ['Jafar', 'Hook', 'Scar', 'Hades'],
        answer: 0,
      },
    ],
  },
};
