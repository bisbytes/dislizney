var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.ts
import { DurableObject } from "cloudflare:workers";

// ../src/data/pools/magic-kingdom-park.ts
var MK = "https://en.wikipedia.org/wiki/Magic_Kingdom";
var magicKingdomParkQuests = [
  {
    type: "trivia",
    id: "mk-1",
    question: "What does \u201CUtilidor\u201D mean?",
    choices: ["Utility + corridor", "Ultra + door", "Underground + tunnel", "Useful + elevator"],
    answer: 0,
    explain: "Utilidors are hidden corridors where cast members move around the park out of sight.",
    source: MK
  },
  {
    type: "truefalse",
    id: "mk-2",
    statement: "The Utilidor tunnels are underground.",
    answer: false,
    explain: "Fiction! Florida\u2019s water table is too high, so the tunnels are at ground level and the park is built on top, like a second floor.",
    source: MK
  },
  {
    type: "guess",
    id: "mk-3",
    question: "How many acres is Magic Kingdom?",
    answer: 107,
    min: 10,
    max: 500,
    step: 5,
    unit: "acres",
    tolerance: 15,
    explain: "Magic Kingdom covers 107 acres.",
    source: MK
  },
  {
    type: "trivia",
    id: "mk-4",
    question: "Main Street, U.S.A. was inspired by which town where Walt Disney grew up?",
    choices: ["Chicago, Illinois", "Marceline, Missouri", "Orlando, Florida", "Kansas City, Kansas"],
    answer: 1,
    explain: "Walt\u2019s childhood hometown of Marceline, Missouri.",
    source: MK
  },
  {
    type: "trivia",
    id: "mk-5",
    question: "What do the names painted on Main Street\u2019s upstairs windows do?",
    choices: [
      "Advertise real shops",
      "Honor people connected to Disney",
      "Show hotel room numbers",
      "Spell a secret code"
    ],
    answer: 1,
    explain: "The pretend businesses honor people who helped make Disney magic.",
    source: MK
  },
  {
    type: "order",
    id: "mk-6",
    prompt: "Put these in order, oldest first.",
    items: [
      "Magic Kingdom opens (1971)",
      "Space Mountain opens (1975)",
      "Seven Dwarfs Mine Train opens (2014)",
      "TRON opens (2023)"
    ],
    explain: "1971, 1975, 2014 and 2023.",
    source: MK
  },
  {
    type: "truefalse",
    id: "mk-7",
    statement: "Magic Kingdom is the most visited theme park in the world.",
    answer: true,
    explain: "Fact! In 2024 it was the most visited theme park on Earth for the 18th year in a row.",
    source: MK
  },
  {
    type: "trivia",
    id: "mk-8",
    question: "How many themed lands does Magic Kingdom have?",
    choices: ["4", "6", "8", "10"],
    answer: 1,
    explain: "Six: Main Street, U.S.A., Adventureland, Frontierland, Liberty Square, Fantasyland and Tomorrowland.",
    source: MK
  },
  {
    type: "trivia",
    id: "mk-9",
    question: "What can you take across Seven Seas Lagoon to reach the park?",
    choices: ["A hot air balloon", "A ferry boat", "A zip line", "A submarine"],
    answer: 1,
    explain: "Ferries (and the monorail) carry guests from the Transportation and Ticket Center.",
    source: MK
  },
  {
    type: "trivia",
    id: "mk-10",
    question: "Which movie inspired Cinderella Castle?",
    choices: ["Sleeping Beauty (1959)", "Cinderella (1950)", "Tangled (2010)", "Enchanted (2007)"],
    answer: 1,
    explain: "The 1950 animated film Cinderella.",
    source: MK
  },
  {
    type: "guess",
    id: "mk-11",
    question: "In what year did Magic Kingdom open?",
    answer: 1971,
    min: 1950,
    max: 2e3,
    step: 1,
    unit: "",
    tolerance: 2,
    explain: "October 1, 1971.",
    source: MK
  }
];

// ../src/data/parks/magic-kingdom.ts
var WIKI = "https://en.wikipedia.org/wiki/";
var SRC = {
  railroad: WIKI + "Walt_Disney_World_Railroad",
  castle: WIKI + "Cinderella_Castle",
  jungle: WIKI + "Jungle_Cruise",
  pirates: WIKI + "Pirates_of_the_Caribbean_(attraction)",
  tiki: WIKI + "Walt_Disney's_Enchanted_Tiki_Room",
  thunder: WIKI + "Big_Thunder_Mountain_Railroad",
  tiana: WIKI + "Tiana's_Bayou_Adventure",
  mansion: WIKI + "The_Haunted_Mansion",
  peterpan: WIKI + "Peter_Pan's_Flight",
  smallworld: WIKI + "It's_a_Small_World",
  mine: WIKI + "Seven_Dwarfs_Mine_Train",
  mermaid: WIKI + "Under_the_Sea:_Journey_of_the_Little_Mermaid",
  dumbo: WIKI + "Dumbo_the_Flying_Elephant",
  teacups: WIKI + "Mad_Tea_Party",
  space: WIKI + "Space_Mountain_(Magic_Kingdom)",
  tron: WIKI + "Tron_Lightcycle_Power_Run",
  buzz: WIKI + "Buzz_Lightyear's_Space_Ranger_Spin",
  peoplemover: WIKI + "Tomorrowland_Transit_Authority_PeopleMover",
  treehouse: WIKI + "Swiss_Family_Treehouse",
  carpets: WIKI + "The_Magic_Carpets_of_Aladdin",
  bears: WIKI + "Country_Bear_Jamboree",
  presidents: WIKI + "The_Hall_of_Presidents",
  carrousel: WIKI + "Prince_Charming_Regal_Carrousel",
  philharmagic: WIKI + "Mickey's_PhilharMagic",
  pooh: WIKI + "The_Many_Adventures_of_Winnie_the_Pooh_(attraction)",
  belle: WIKI + "Enchanted_Tales_with_Belle",
  barnstormer: WIKI + "The_Barnstormer",
  orbiter: WIKI + "Astro_Orbiter",
  progress: WIKI + "Walt_Disney's_Carousel_of_Progress",
  laughfloor: WIKI + "Monsters,_Inc._Laugh_Floor"
};
var magicKingdom = {
  id: "magic-kingdom",
  name: "Magic Kingdom",
  emoji: "\u{1F3F0}",
  tagline: "Once upon a time, in a kingdom of lines...",
  center: { lat: 28.4177, lng: -81.5812 },
  queueTimesId: 6,
  parkQuests: magicKingdomParkQuests,
  lands: [
    {
      id: "main-street",
      name: "Main Street, U.S.A.",
      emoji: "\u{1F3A9}",
      intro: "Our story begins on a busy little street with a train whistle in the air and a castle waiting at the end of the road.",
      colors: { sky: "#FDE7D2", ground: "#C8102E", ink: "#4A1020", accent: "#F4B400" },
      attractions: [
        {
          id: "wdw-railroad",
          closure: {
            from: "2026-09-28",
            until: "2026-10-30",
            note: "Closed for refurbishment, back October 30, 2026.",
            source: "https://mickeyvisit.com/disney-world-closing-magic-kingdom-rides-refurbishment-august-31-2026/"
          },
          name: "Walt Disney World Railroad",
          emoji: "\u{1F682}",
          opened: "October 1, 1971",
          coords: { lat: 28.4164, lng: -81.5812 },
          wikiTitle: "Walt_Disney_World_Railroad",
          blurb: "All aboard! A real steam train circles the whole kingdom.",
          facts: [
            {
              text: "The four steam engines are named Walter E. Disney, Lilly Belle, Roger E. Broggie and Roy O. Disney.",
              source: SRC.railroad
            },
            {
              text: "The engines were built by Baldwin Locomotive Works in Philadelphia and found years later in a boneyard in M\xE9rida, Mexico.",
              source: SRC.railroad
            },
            {
              text: "At Frontierland Station, a telegraph taps out Walt Disney\u2019s 1955 Disneyland dedication speech in Morse code.",
              source: SRC.railroad
            }
          ],
          quests: [
            {
              type: "photo",
              id: "wdw-railroad-photo-1",
              prompt: "Find an old-timey arcade machine in the train station and snap a photo of it!",
              tip: "Look around the Main Street, U.S.A. Station waiting area.",
              source: SRC.railroad
            },
            {
              type: "photo",
              id: "wdw-railroad-photo-2",
              prompt: "Spot a shiny plaque about one of the steam trains and take a picture of it!",
              tip: "Look on the first floor of Main Street, U.S.A. Station.",
              source: SRC.railroad
            },
            {
              type: "trivia",
              id: "rr-1",
              question: "How many stations does the Walt Disney World Railroad stop at?",
              choices: ["2", "3", "5", "7"],
              answer: 1,
              explain: "Three: Main Street, U.S.A., Frontierland and Fantasyland.",
              source: SRC.railroad
            },
            {
              type: "trivia",
              id: "rr-2",
              question: "About how long is the railroad track?",
              choices: ["Half a mile", "1.5 miles", "5 miles", "10 miles"],
              answer: 1,
              explain: "The loop is about 1.5 miles (2.4 km) of track.",
              source: SRC.railroad
            },
            {
              type: "trivia",
              id: "rr-3",
              question: "Engineers in training get a funny nickname. What is it?",
              choices: ["Piglets", "Puppies", "Choo-choos", "Sprouts"],
              answer: 0,
              explain: "Trainees start as \u201Cpiglets,\u201D then \u201Cpigs,\u201D and after six months they become \u201Chogs.\u201D",
              source: SRC.railroad
            },
            {
              type: "spy",
              id: "rr-spy",
              prompt: "Spot a train engine and read its name out loud.",
              hint: "The name is painted on the side of the cab or tender."
            },
            {
              type: "challenge",
              id: "rr-ch",
              prompt: "Everyone do your best train whistle at the same time. Then shout \u201CAll aboard!\u201D together."
            },
            {
              type: "truefalse",
              id: "rr-4",
              statement: "The steam engines were built in Mexico.",
              answer: false,
              explain: "Fiction! They were built in Philadelphia, then found years later in M\xE9rida, Mexico.",
              source: SRC.railroad
            }
          ]
        },
        {
          id: "cinderella-castle",
          name: "Cinderella Castle",
          emoji: "\u{1F3F0}",
          opened: "July 1971 (completed)",
          coords: { lat: 28.4195, lng: -81.5812 },
          wikiTitle: "Cinderella_Castle",
          blurb: "The heart of the kingdom, with a few secrets tucked in its towers.",
          facts: [
            {
              text: "The castle is 189 feet tall when you count the depth of the moat.",
              source: SRC.castle
            },
            {
              text: "Inside the archway, the mosaic stepsisters are \u201Cred with anger\u201D and \u201Cgreen with envy.\u201D",
              source: SRC.castle
            },
            {
              text: "Tinker Bell \u201Cflies\u201D during fireworks on a zipline attached to tower 20.",
              source: SRC.castle
            }
          ],
          quests: [
            {
              type: "photo",
              id: "cinderella-castle-photo-1",
              prompt: "Find the sparkly glass mosaic of Cinderella\u2019s story and snap your favorite panel!",
              tip: "Look at the walls inside the castle\u2019s archway.",
              source: SRC.castle
            },
            {
              type: "trivia",
              id: "castle-1",
              question: "Cinderella Castle\u2019s towers are numbered 1 to 29. Which two numbers were cancelled?",
              choices: ["1 and 29", "7 and 11", "13 and 17", "20 and 21"],
              answer: 2,
              explain: "Towers 13 and 17 were cancelled before construction.",
              source: SRC.castle
            },
            {
              type: "trivia",
              id: "castle-2",
              question: "Can the castle\u2019s drawbridge be raised?",
              choices: ["Yes, every night", "Only on holidays", "No, it can\u2019t", "Only for Cinderella"],
              answer: 2,
              explain: "Unlike Sleeping Beauty Castle in California, this bridge cannot be raised.",
              source: SRC.castle
            },
            {
              type: "trivia",
              id: "castle-3",
              question: "At Cinderella\u2019s Royal Table, what are grown-ups called?",
              choices: ["Knights and dames", "Lords and ladies", "Kings and queens", "Mister and missus"],
              answer: 1,
              explain: "Kids are princes and princesses; adults are lords and ladies.",
              source: SRC.castle
            },
            {
              type: "spy",
              id: "castle-spy",
              prompt: "Find the mosaic stepsister who is \u201Cgreen with envy.\u201D",
              hint: "Look at the murals inside the castle archway."
            },
            {
              type: "wyr",
              id: "castle-wyr",
              a: "Live in the tallest tower of the castle",
              b: "Live in a cozy cottage in the woods"
            },
            {
              type: "guess",
              id: "castle-4",
              question: "How tall is Cinderella Castle, counting the moat?",
              answer: 189,
              min: 50,
              max: 400,
              step: 10,
              unit: "feet",
              tolerance: 15,
              explain: "189 feet tall when you include the depth of the moat.",
              source: SRC.castle
            },
            {
              type: "emoji",
              id: "castle-5",
              emojis: "\u{1F460} \u{1F383} \u{1F55B}",
              hint: "Be home by midnight!",
              choices: ["Snow White", "Cinderella", "Rapunzel", "Sleeping Beauty"],
              answer: 1
            }
          ]
        }
      ]
    },
    {
      id: "adventureland",
      name: "Adventureland",
      emoji: "\u{1F334}",
      intro: "Push through the palm fronds! Drums are beating, parrots are chattering, and somewhere, a pirate is singing.",
      colors: { sky: "#DDF3D6", ground: "#2E7D32", ink: "#14361A", accent: "#FF8F00" },
      attractions: [
        {
          id: "jungle-cruise",
          name: "Jungle Cruise",
          emoji: "\u{1F6F6}",
          opened: "October 1, 1971",
          coords: { lat: 28.41798, lng: -81.58344 },
          wikiTitle: "Jungle_Cruise",
          blurb: "Sail the rivers of the world with a skipper who loves a bad pun.",
          facts: [
            {
              text: "Boats here travel counter-clockwise, while boats at Tokyo Disneyland go clockwise.",
              source: SRC.jungle
            },
            {
              text: "The queue radio features Albert Awol, \u201Cthe voice of the jungle.\u201D",
              source: SRC.jungle
            }
          ],
          quests: [
            {
              type: "trivia",
              id: "jc-1",
              question: "Near the hippo pool you can spot part of a crashed airplane. Where did it come from?",
              choices: [
                "A real jungle expedition",
                "The Great Movie Ride\u2019s Casablanca scene",
                "A Disney cartoon studio",
                "Space Mountain"
              ],
              answer: 1,
              explain: "The Lockheed Electra Junior piece came from The Great Movie Ride at Hollywood Studios.",
              source: SRC.jungle
            },
            {
              type: "trivia",
              id: "jc-2",
              question: "Which way do Magic Kingdom\u2019s Jungle Cruise boats travel?",
              choices: ["Clockwise", "Counter-clockwise", "Straight line", "They spin in circles"],
              answer: 1,
              explain: "Counter-clockwise, the opposite of Tokyo Disneyland\u2019s boats.",
              source: SRC.jungle
            },
            {
              type: "challenge",
              id: "jc-ch",
              prompt: "Be the skipper! Everyone take a turn telling the cheesiest joke you know. Groans count as points."
            },
            {
              type: "spy",
              id: "jc-spy",
              prompt: "Find a crate, sign or map with a funny name on it in the queue."
            },
            {
              type: "truefalse",
              id: "jc-3",
              statement: "Jungle Cruise boats at Magic Kingdom travel clockwise.",
              answer: false,
              explain: "Fiction! They go counter-clockwise. Tokyo\u2019s boats go clockwise.",
              source: SRC.jungle
            }
          ]
        },
        {
          id: "pirates",
          name: "Pirates of the Caribbean",
          emoji: "\u{1F3F4}\u200D\u2620\uFE0F",
          opened: "December 15, 1973",
          coords: { lat: 28.41802, lng: -81.58422 },
          wikiTitle: "Pirates_of_the_Caribbean_(attraction)",
          blurb: "Yo ho! Float into a pirate-filled town by moonlight.",
          facts: [
            {
              text: "The ride lasts about 8 and a half minutes.",
              source: SRC.pirates
            },
            {
              text: "Boats drop 14 feet and pass under the Walt Disney World Railroad.",
              source: SRC.pirates
            },
            {
              text: "The Barker Bird parrot was moved outside the entrance in 1975.",
              source: SRC.pirates
            }
          ],
          quests: [
            {
              type: "photo",
              id: "pirates-photo-1",
              prompt: "Arrr! Sneak a photo of the two skeleton pirates playing chess. Who\u2019s winning?",
              tip: "Watch for them as the line winds through the fort.",
              source: SRC.pirates
            },
            {
              type: "photo",
              id: "pirates-photo-2",
              prompt: "Find a cannon in the fort and take a photo with your best pirate face!",
              source: SRC.pirates
            },
            {
              type: "trivia",
              id: "pi-1",
              question: "How many drops does the Magic Kingdom version of Pirates have?",
              choices: ["None", "One", "Two", "Five"],
              answer: 1,
              explain: "Just one: a 14-foot splash that dips under the railroad.",
              source: SRC.pirates
            },
            {
              type: "trivia",
              id: "pi-2",
              question: "What year did Pirates of the Caribbean open at Magic Kingdom?",
              choices: ["1955", "1971", "1973", "1999"],
              answer: 2,
              explain: "It opened on December 15, 1973, two years after the park.",
              source: SRC.pirates
            },
            {
              type: "challenge",
              id: "pi-ch",
              prompt: "Talk like a pirate for the next two minutes. Anyone who forgets has to say \u201CArrr!\u201D three times."
            },
            {
              type: "wyr",
              id: "pi-wyr",
              a: "Be the captain of a pirate ship",
              b: "Be the parrot who knows all the captain\u2019s secrets"
            },
            {
              type: "guess",
              id: "pi-3",
              question: "How many feet does the pirate boat drop?",
              answer: 14,
              min: 0,
              max: 60,
              step: 1,
              unit: "feet",
              tolerance: 3,
              explain: "A 14-foot drop, right under the railroad tracks.",
              source: SRC.pirates
            },
            {
              type: "emoji",
              id: "pi-4",
              emojis: "\u{1F3F4}\u200D\u2620\uFE0F \u{1F99C} \u{1F4B0} \u{1F30A}",
              hint: "Yo ho, yo ho!",
              choices: ["Peter Pan\u2019s Flight", "Pirates of the Caribbean", "Jungle Cruise", "Moana"],
              answer: 1
            }
          ]
        },
        {
          id: "tiki-room",
          name: "Walt Disney\u2019s Enchanted Tiki Room",
          emoji: "\u{1F99C}",
          opened: "October 1, 1971",
          coords: { lat: 28.41835, lng: -81.5839 },
          wikiTitle: "Walt_Disney's_Enchanted_Tiki_Room",
          blurb: "Where the birds sing words and the flowers croon.",
          facts: [
            {
              text: "The four host birds are Jos\xE9, Michael, Pierre and Fritz.",
              source: SRC.tiki
            },
            {
              text: "The show has over 150 talking, singing and dancing birds, flowers, tiki drummers and totem poles.",
              source: SRC.tiki
            }
          ],
          quests: [
            {
              type: "trivia",
              id: "tiki-1",
              question: "Which of these is NOT one of the four host birds?",
              choices: ["Jos\xE9", "Pierre", "Fritz", "Polly"],
              answer: 3,
              explain: "The hosts are Jos\xE9, Michael, Pierre and Fritz.",
              source: SRC.tiki
            },
            {
              type: "trivia",
              id: "tiki-2",
              question: "The host birds\u2019 feathers match something from their home countries. What?",
              choices: ["Their flags", "Their favorite fruit", "Their soccer teams", "Their money"],
              answer: 0,
              explain: "Their plumage matches the flags of the countries they come from.",
              source: SRC.tiki
            },
            {
              type: "challenge",
              id: "tiki-ch",
              prompt: "Everyone pick a bird sound. On \u201Cthree,\u201D make it at the same time and see who keeps a straight face."
            },
            {
              type: "truefalse",
              id: "tiki-3",
              statement: "More than 150 birds, flowers, drummers and totem poles perform in the show.",
              answer: true,
              explain: "Fact! It\u2019s a huge singing cast.",
              source: SRC.tiki
            }
          ]
        },
        {
          id: "swiss-family-treehouse",
          name: "Swiss Family Treehouse",
          emoji: "\u{1F333}",
          opened: "October 1, 1971",
          coords: { lat: 28.4186, lng: -81.5836 },
          coordsApprox: true,
          wikiTitle: "Swiss_Family_Treehouse",
          blurb: "Climb up into a shipwrecked family\u2019s treetop home.",
          facts: [
            {
              text: "The tree is made of steel, concrete and stucco. It stands 60 feet tall and 90 feet wide.",
              source: SRC.treehouse
            },
            {
              text: "Its pretend scientific name is Disneyodendron semperflorens grandis: a large, everblooming Disney tree.",
              source: SRC.treehouse
            }
          ],
          quests: [
            {
              type: "photo",
              id: "swiss-family-treehouse-photo-1",
              prompt: "Find something that looks rescued from a shipwreck and snap a photo of it!",
              tip: "Look in the rooms as you climb the stairs up the tree.",
              source: SRC.treehouse
            },
            {
              type: "trivia",
              id: "sft-1",
              question: "What is the Swiss Family tree made of?",
              choices: ["A real oak tree", "Steel, concrete and stucco", "Bamboo poles", "Plastic bricks"],
              answer: 1,
              explain: "It looks real, but it\u2019s built from steel, concrete and stucco.",
              source: SRC.treehouse
            },
            {
              type: "guess",
              id: "sft-2",
              question: "How tall is the Treehouse tree?",
              answer: 60,
              min: 10,
              max: 150,
              step: 5,
              unit: "feet",
              tolerance: 10,
              explain: "It\u2019s 60 feet tall and 90 feet wide.",
              source: SRC.treehouse
            },
            {
              type: "spy",
              id: "sft-spy",
              prompt: "Find something that looks like it was rescued from a shipwreck."
            },
            {
              type: "challenge",
              id: "sft-ch",
              prompt: "Design a dream treehouse together. Everyone adds one room or gadget."
            }
          ]
        },
        {
          id: "magic-carpets",
          name: "The Magic Carpets of Aladdin",
          emoji: "\u{1F9DE}",
          opened: "May 23, 2001",
          coords: { lat: 28.4181, lng: -81.5834 },
          coordsApprox: true,
          wikiTitle: "The_Magic_Carpets_of_Aladdin",
          blurb: "Fly a magic carpet around the Genie\u2019s lamp. Watch out for the camel!",
          facts: [
            {
              text: "A camel statue near the entrance squirts water at people walking by.",
              source: SRC.carpets
            },
            {
              text: "Riders in the front row control how high their carpet flies.",
              source: SRC.carpets
            }
          ],
          quests: [
            {
              type: "photo",
              id: "magic-carpets-photo-1",
              prompt: "Watch out for the spitting camel! Snap a photo of it, and try to stay dry!",
              tip: "It\u2019s right at the entrance.",
              source: SRC.carpets
            },
            {
              type: "trivia",
              id: "mc-1",
              question: "What squirts water at guests near the ride?",
              choices: ["A parrot", "A camel", "A genie lamp", "An elephant"],
              answer: 1,
              explain: "A camel statue spits water at people walking by.",
              source: SRC.carpets
            },
            {
              type: "truefalse",
              id: "mc-2",
              statement: "The front-row rider controls how high the carpet flies.",
              answer: true,
              explain: "True! It works a lot like Dumbo.",
              source: SRC.carpets
            },
            {
              type: "emoji",
              id: "mc-3",
              emojis: "\u{1F9DE} \u{1FA94} \u{1F412}",
              hint: "A movie with a street rat and a wish-granting friend.",
              choices: ["Aladdin", "Moana", "The Jungle Book", "Tarzan"],
              answer: 0
            },
            {
              type: "wyr",
              id: "mc-wyr",
              a: "Get three wishes",
              b: "Have your own flying carpet forever"
            }
          ]
        }
      ]
    },
    {
      id: "frontierland",
      name: "Frontierland",
      emoji: "\u{1F920}",
      intro: "Saddle up, partner. Red rock mountains rise over the river, and a runaway train is rattling through the hills.",
      colors: { sky: "#FBE3C4", ground: "#B5532A", ink: "#4A2210", accent: "#2A9D8F" },
      attractions: [
        {
          id: "big-thunder",
          name: "Big Thunder Mountain Railroad",
          emoji: "\u26F0\uFE0F",
          opened: "November 15, 1980",
          coords: { lat: 28.4205, lng: -81.5848 },
          wikiTitle: "Big_Thunder_Mountain_Railroad",
          blurb: "Hang on to your hats on the wildest ride in the wilderness.",
          facts: [
            {
              text: "The Florida mountain covers 2.5 acres, 25 percent bigger than the one at Disneyland.",
              source: SRC.thunder
            },
            {
              text: "Each train has 5 cars and carries 30 riders.",
              source: SRC.thunder
            }
          ],
          quests: [
            {
              type: "trivia",
              id: "bt-1",
              question: "How many riders fit on one Big Thunder train?",
              choices: ["10", "20", "30", "50"],
              answer: 2,
              explain: "5 cars, 3 rows each, 2 people per row: 30 riders.",
              source: SRC.thunder
            },
            {
              type: "trivia",
              id: "bt-2",
              question: "Florida\u2019s Big Thunder Mountain is how much bigger than Disneyland\u2019s?",
              choices: ["The same size", "10 percent", "25 percent", "Twice as big"],
              answer: 2,
              explain: "It covers 2.5 acres, about 25 percent larger.",
              source: SRC.thunder
            },
            {
              type: "spy",
              id: "bt-spy",
              prompt: "Spot a piece of old mining equipment in the queue."
            },
            {
              type: "challenge",
              id: "bt-ch",
              prompt: "Invent a name for a gold-mining town. Everyone adds one thing that town is famous for."
            },
            {
              type: "emoji",
              id: "bt-3",
              emojis: "\u{1F682} \u26F0\uFE0F \u26A1 \u{1F920}",
              hint: "The wildest ride in the wilderness.",
              choices: [
                "Big Thunder Mountain Railroad",
                "Space Mountain",
                "Seven Dwarfs Mine Train",
                "Walt Disney World Railroad"
              ],
              answer: 0
            }
          ]
        },
        {
          id: "tianas-bayou",
          closure: {
            from: "2026-11-02",
            note: "Closed for refurbishment from November 2, 2026. No reopening date yet.",
            source: "https://mickeyvisit.com/disney-world-closing-magic-kingdom-rides-refurbishment-august-31-2026/"
          },
          name: "Tiana\u2019s Bayou Adventure",
          emoji: "\u{1F438}",
          opened: "June 28, 2024",
          coords: { lat: 28.4197, lng: -81.5856 },
          coordsApprox: true,
          wikiTitle: "Tiana's_Bayou_Adventure",
          blurb: "Join Tiana for a musical log ride through the bayou to a big Mardi Gras party.",
          facts: [
            {
              text: "The ride has 48 Audio-Animatronics figures, including a band of animal musicians.",
              source: SRC.tiana
            },
            {
              text: "Mama Odie uses her magic to shrink riders to a tiny size.",
              source: SRC.tiana
            }
          ],
          quests: [
            {
              type: "photo",
              id: "tianas-bayou-photo-1",
              prompt: "Find the colorful mural in the line and snap a picture of your favorite part!",
              source: SRC.tiana
            },
            {
              type: "photo",
              id: "tianas-bayou-photo-2",
              prompt: "Look up high for the weathervane on the building and snap it!",
              tip: "Look at the outside of the building before you go in.",
              source: SRC.tiana
            },
            {
              type: "trivia",
              id: "ti-1",
              question: "Which ride did Tiana\u2019s Bayou Adventure replace?",
              choices: ["Big Thunder Mountain", "Splash Mountain", "Tom Sawyer Island", "Country Bear Jamboree"],
              answer: 1,
              explain: "It replaced Splash Mountain and opened in June 2024.",
              source: SRC.tiana
            },
            {
              type: "trivia",
              id: "ti-2",
              question: "In the finale, what does Prince Naveen play?",
              choices: ["Trumpet", "Drums", "Ukulele", "Piano"],
              answer: 2,
              explain: "Naveen plays ukulele while his little brother Ralphie plays drums.",
              source: SRC.tiana
            },
            {
              type: "trivia",
              id: "ti-3",
              question: "Which animal is NOT in the critter zydeco band?",
              choices: ["Beaver", "Otter", "Turtle", "Elephant"],
              answer: 3,
              explain: "The band has a beaver, rabbit, opossum, raccoon, turtle and otter.",
              source: SRC.tiana
            },
            {
              type: "wyr",
              id: "ti-wyr",
              a: "Be shrunk tiny for a whole day",
              b: "Be turned into a frog for an hour"
            },
            {
              type: "guess",
              id: "ti-4",
              question: "How tall is the big drop at the end of Tiana\u2019s Bayou Adventure?",
              answer: 52,
              min: 10,
              max: 120,
              step: 2,
              unit: "feet",
              tolerance: 6,
              explain: "About 52 feet. Splash!",
              source: SRC.tiana
            }
          ]
        },
        {
          id: "country-bears",
          name: "Country Bear Musical Jamboree",
          emoji: "\u{1F43B}",
          opened: "October 1, 1971",
          coords: { lat: 28.4194, lng: -81.5848 },
          coordsApprox: true,
          wikiTitle: "Country_Bear_Jamboree",
          blurb: "A whole band of singing bears puts on a toe-tapping show.",
          facts: [
            {
              text: "The show reopened as the Country Bear Musical Jamboree on July 17, 2024.",
              source: SRC.bears
            },
            {
              text: "Teddi Barra never walks on stage. She swings down from a hole in the ceiling!",
              source: SRC.bears
            }
          ],
          quests: [
            {
              type: "trivia",
              id: "cb-1",
              question: "Which bear hosts the show in a grey top hat?",
              choices: ["Henry", "Big Al", "Wendell", "Terrence"],
              answer: 0,
              explain: "Henry is the host and master of ceremonies.",
              source: SRC.bears
            },
            {
              type: "trivia",
              id: "cb-2",
              question: "How does Teddi Barra show up?",
              choices: [
                "Through a door",
                "She swings down from the ceiling",
                "Up through the floor",
                "From the audience"
              ],
              answer: 1,
              explain: "She swings down from a hole in the ceiling.",
              source: SRC.bears
            },
            {
              type: "truefalse",
              id: "cb-3",
              statement: "Sammy the raccoon peeks out from behind a speaker in the new show.",
              answer: true,
              explain: "True. He used to sit on Henry\u2019s hat.",
              source: SRC.bears
            },
            {
              type: "challenge",
              id: "cb-ch",
              prompt: "Write a country song about waiting in line. Everyone sings one line!"
            }
          ]
        }
      ]
    },
    {
      id: "liberty-square",
      name: "Liberty Square",
      emoji: "\u{1F514}",
      intro: "Step back to colonial days. Lanterns flicker, a bell hangs in the square, and up on the hill... is that mansion watching you?",
      colors: { sky: "#E3E8F4", ground: "#3B4F7A", ink: "#141E36", accent: "#9C2A2A" },
      attractions: [
        {
          id: "haunted-mansion",
          name: "Haunted Mansion",
          emoji: "\u{1F47B}",
          opened: "October 1, 1971",
          coords: { lat: 28.4204, lng: -81.583 },
          coordsApprox: true,
          wikiTitle: "The_Haunted_Mansion",
          blurb: "Grim grinning ghosts come out to socialize. Room for one more?",
          facts: [
            {
              text: "The Florida Mansion has extra scenes that California\u2019s doesn\u2019t, like a library and a music room.",
              source: SRC.mansion
            },
            {
              text: "The bat-eyed wallpaper in Florida glows in the dark.",
              source: SRC.mansion
            },
            {
              text: "The Hatbox Ghost joined the Florida Mansion on November 30, 2023.",
              source: SRC.mansion
            }
          ],
          quests: [
            {
              type: "photo",
              id: "haunted-mansion-photo-1",
              prompt: "Strike a spooky pose next to the Composer\u2019s crypt. Touch the instruments to make music!",
              tip: "It\u2019s in the interactive graveyard queue.",
              source: SRC.mansion
            },
            {
              type: "photo",
              id: "haunted-mansion-photo-2",
              prompt: "Find the sea captain\u2019s tomb (the ghost sneezes!) and snap a photo. Bless you!",
              tip: "It\u2019s in the interactive queue, with the other crypts.",
              source: SRC.mansion
            },
            {
              type: "trivia",
              id: "hm-1",
              question: "What are the Haunted Mansion ride vehicles called?",
              choices: ["Ghost Carts", "Doom Buggies", "Spook Mobiles", "Creepy Coaches"],
              answer: 1,
              explain: "You ride in Doom Buggies.",
              source: SRC.mansion
            },
            {
              type: "trivia",
              id: "hm-2",
              question: "The Ghost Host says the mansion has how many happy haunts?",
              choices: ["13", "99", "999", "1,000,000"],
              answer: 2,
              explain: "999 happy haunts, with room for a thousand!",
              source: SRC.mansion
            },
            {
              type: "trivia",
              id: "hm-3",
              question: "Which ghost was added to the Florida Mansion in 2023?",
              choices: ["The Hatbox Ghost", "Madame Leota", "The Bride", "The Hitchhiking Ghosts"],
              answer: 0,
              explain: "The Hatbox Ghost arrived on November 30, 2023.",
              source: SRC.mansion
            },
            {
              type: "spy",
              id: "hm-spy",
              prompt: "In the queue\u2019s Composer Crypt, find an instrument that plays music when you touch it."
            },
            {
              type: "challenge",
              id: "hm-ch",
              prompt: "Write a silly tombstone poem for someone in your group. Two lines, and it has to rhyme."
            },
            {
              type: "truefalse",
              id: "hm-4",
              statement: "The Florida Mansion has a library and a music room that California\u2019s doesn\u2019t.",
              answer: true,
              explain: "Fact! Florida\u2019s Mansion is a little longer and more elaborate.",
              source: SRC.mansion
            },
            {
              type: "emoji",
              id: "hm-5",
              emojis: "\u{1F47B} \u{1F3DA}\uFE0F 9\uFE0F\u20E39\uFE0F\u20E39\uFE0F\u20E3",
              hint: "Room for one more...",
              choices: ["Haunted Mansion", "Tower of Terror", "Ghostbusters", "Coco"],
              answer: 0
            }
          ]
        },
        {
          id: "hall-of-presidents",
          name: "The Hall of Presidents",
          emoji: "\u{1F1FA}\u{1F1F8}",
          opened: "October 1, 1971",
          coords: { lat: 28.4197, lng: -81.5826 },
          coordsApprox: true,
          wikiTitle: "The_Hall_of_Presidents",
          blurb: "Every president of the United States, together on one stage.",
          facts: [
            {
              text: "The figures of Abraham Lincoln and George Washington are some of the most lifelike Disney has ever built.",
              source: SRC.presidents
            },
            {
              text: "Bill Clinton was the first president to record his own speech for the show.",
              source: SRC.presidents
            }
          ],
          quests: [
            {
              type: "trivia",
              id: "hp-1",
              question: "How many people who served as president appear on stage?",
              choices: ["13", "25", "45", "50"],
              answer: 2,
              explain: "All 45 people who have served as president appear as Audio-Animatronics.",
              source: SRC.presidents
            },
            {
              type: "trivia",
              id: "hp-2",
              question: "Which president is seated on stage because he was so short?",
              choices: ["Abraham Lincoln", "James Madison", "George Washington", "Teddy Roosevelt"],
              answer: 1,
              explain: "James Madison is seated because of his small height.",
              source: SRC.presidents
            },
            {
              type: "challenge",
              id: "hp-ch",
              prompt: "If you were president for one day, what new rule would you make? Everyone shares one."
            }
          ]
        }
      ]
    },
    {
      id: "fantasyland",
      name: "Fantasyland",
      emoji: "\u{1F9DA}",
      intro: "Turn the page and the colors burst! Fairy tales come alive here: flying ships, singing dolls and a mine full of diamonds.",
      colors: { sky: "#F6E1F5", ground: "#8E44AD", ink: "#3A1450", accent: "#00A6D6" },
      attractions: [
        {
          id: "peter-pan",
          name: "Peter Pan\u2019s Flight",
          emoji: "\u{1F9DA}",
          opened: "October 3, 1971",
          coords: { lat: 28.42, lng: -81.5816 },
          wikiTitle: "Peter_Pan's_Flight",
          blurb: "Sprinkle on some pixie dust and fly over London to Never Land.",
          facts: [
            {
              text: "Here, Peter and Captain Hook duel on the ship\u2019s mainsail; at Disneyland they duel on the bowsprit.",
              source: SRC.peterpan
            },
            {
              text: "Since 2014 the queue takes you through the Darling family\u2019s house.",
              source: SRC.peterpan
            }
          ],
          quests: [
            {
              type: "photo",
              id: "peter-pan-photo-1",
              prompt: "Snap a photo inside the Darling family\u2019s house, then find the nursery where Wendy\u2019s story starts!",
              tip: "The indoor queue leads into the Darling home.",
              source: SRC.peterpan
            },
            {
              type: "photo",
              id: "peter-pan-photo-2",
              prompt: "Play with the magic murals in the hallway and take a picture of what happens!",
              tip: "They\u2019re in the corridor at the start of the indoor queue.",
              source: SRC.peterpan
            },
            {
              type: "trivia",
              id: "pp-1",
              question: "Peter Pan\u2019s Flight opened just after the park. How many days after?",
              choices: ["The same day", "2 days", "2 weeks", "2 years"],
              answer: 1,
              explain: "It opened October 3, 1971, two days after the park\u2019s grand opening.",
              source: SRC.peterpan
            },
            {
              type: "trivia",
              id: "pp-2",
              question: "Whose house does the queue take you through?",
              choices: ["Captain Hook\u2019s", "The Darlings\u2019", "Tinker Bell\u2019s", "The Lost Boys\u2019"],
              answer: 1,
              explain: "Since 2014 the queue winds through the Darling family home.",
              source: SRC.peterpan
            },
            {
              type: "spy",
              id: "pp-spy",
              prompt: "Find Peter Pan\u2019s shadow somewhere in the queue."
            },
            {
              type: "wyr",
              id: "pp-wyr",
              a: "Be able to fly whenever you want",
              b: "Never have to grow up"
            },
            {
              type: "truefalse",
              id: "pp-3",
              statement: "At Magic Kingdom, Peter and Hook duel on the ship\u2019s bowsprit.",
              answer: false,
              explain: "Fiction! Here they duel on the mainsail. The bowsprit duel is at Disneyland.",
              source: SRC.peterpan
            }
          ]
        },
        {
          id: "small-world",
          name: "\u201Cit\u2019s a small world\u201D",
          emoji: "\u{1F30D}",
          opened: "October 1, 1971",
          coords: { lat: 28.4208, lng: -81.582 },
          wikiTitle: "It's_a_Small_World",
          blurb: "A happy little boat ride around the whole world. Try not to hum along!",
          facts: [
            {
              text: "The song was written by the Sherman Brothers, Robert B. and Richard M. Sherman.",
              source: SRC.smallworld
            },
            {
              text: "There are over 600 costumed figures in the ride.",
              source: SRC.smallworld
            },
            {
              text: "The song plays roughly 1,200 times in a 16-hour day.",
              source: SRC.smallworld
            }
          ],
          quests: [
            {
              type: "photo",
              id: "small-world-photo-1",
              prompt: "Snap a photo of the super colorful building front. How many colors can you count?",
              source: SRC.smallworld
            },
            {
              type: "trivia",
              id: "sw-1",
              question: "Where did \u201Cit\u2019s a small world\u201D first premiere?",
              choices: ["Disneyland", "The 1964 New York World\u2019s Fair", "Tokyo", "A Disney movie"],
              answer: 1,
              explain: "It debuted at the 1964 New York World\u2019s Fair, then moved to Disneyland in 1966.",
              source: SRC.smallworld
            },
            {
              type: "trivia",
              id: "sw-2",
              question: "What was added to the song\u2019s finale in July 2025?",
              choices: ["A rap", "A new third verse", "A kazoo solo", "Fireworks"],
              answer: 1,
              explain: "A previously unreleased third verse was added to the finale.",
              source: SRC.smallworld
            },
            {
              type: "challenge",
              id: "sw-ch",
              prompt: "Say \u201Chello\u201D in as many languages as your group can think of. Can you get to 10?"
            },
            {
              type: "guess",
              id: "sw-3",
              question: "About how many times does the song play in a 16-hour day?",
              answer: 1200,
              min: 100,
              max: 3e3,
              step: 100,
              unit: "times",
              tolerance: 200,
              explain: "Roughly 1,200 times a day!",
              source: SRC.smallworld
            },
            {
              type: "order",
              id: "sw-4",
              prompt: "Put \u201Cit\u2019s a small world\u201D stops in order, oldest first.",
              items: ["1964 New York World\u2019s Fair", "Disneyland", "Magic Kingdom"],
              explain: "World\u2019s Fair in 1964, Disneyland in 1966, Magic Kingdom in 1971.",
              source: SRC.smallworld
            }
          ]
        },
        {
          id: "seven-dwarfs",
          name: "Seven Dwarfs Mine Train",
          emoji: "\u{1F48E}",
          opened: "May 28, 2014",
          coords: { lat: 28.42056, lng: -81.58 },
          wikiTitle: "Seven_Dwarfs_Mine_Train",
          blurb: "Heigh-ho! Race through the mine where the dwarfs dig up their diamonds.",
          facts: [
            {
              text: "The mine carts sway side to side, just like real mine carts.",
              source: SRC.mine
            },
            {
              text: "Some of the dwarf figures came from the old Snow White\u2019s Scary Adventures ride.",
              source: SRC.mine
            }
          ],
          quests: [
            {
              type: "photo",
              id: "seven-dwarfs-photo-1",
              prompt: "Spin a barrel full of gems and snap a photo of the sparkly pictures it makes!",
              source: SRC.mine
            },
            {
              type: "photo",
              id: "seven-dwarfs-photo-2",
              prompt: "Find the animal-shaped water taps at the gem washing station. Snap a photo of your favorite!",
              source: SRC.mine
            },
            {
              type: "trivia",
              id: "sd-1",
              question: "What is the Mine Train\u2019s top speed?",
              choices: ["14 mph", "34 mph", "54 mph", "74 mph"],
              answer: 1,
              explain: "It tops out at 34 mph (55 km/h).",
              source: SRC.mine
            },
            {
              type: "trivia",
              id: "sd-2",
              question: "The queue has 12 \u201Cmusical spigots.\u201D What are they carved to look like?",
              choices: ["Dwarfs", "Diamonds", "Woodland animals", "Apples"],
              answer: 2,
              explain: "Each wooden tap is a woodland animal and plays a different note.",
              source: SRC.mine
            },
            {
              type: "spy",
              id: "sd-spy",
              prompt: "Spin the gem barrels in the queue and try to make all seven dwarfs appear on the ceiling.",
              hint: "Get all of them and Snow White shows up in the middle!"
            },
            {
              type: "challenge",
              id: "sd-ch",
              prompt: "Name all seven dwarfs without looking anything up. Go!"
            },
            {
              type: "guess",
              id: "sd-3",
              question: "How fast does the Mine Train go at top speed?",
              answer: 34,
              min: 5,
              max: 80,
              step: 1,
              unit: "mph",
              tolerance: 4,
              explain: "34 mph (55 km/h).",
              source: SRC.mine
            },
            {
              type: "emoji",
              id: "sd-4",
              emojis: "\u26CF\uFE0F \u{1F48E} \u{1F34E} \u{1F3D4}\uFE0F",
              hint: "Heigh-ho, heigh-ho!",
              choices: ["Seven Dwarfs Mine Train", "Big Thunder Mountain", "Frozen", "Indiana Jones"],
              answer: 0
            }
          ]
        },
        {
          id: "little-mermaid",
          name: "Under the Sea: Journey of the Little Mermaid",
          emoji: "\u{1F9DC}\u200D\u2640\uFE0F",
          opened: "December 6, 2012",
          coords: { lat: 28.4212, lng: -81.5797 },
          coordsApprox: true,
          wikiTitle: "Under_the_Sea:_Journey_of_the_Little_Mermaid",
          blurb: "Climb into a clamshell and dive under the sea with Ariel.",
          facts: [
            {
              text: "The ride uses 105 clamshell-shaped vehicles.",
              source: SRC.mermaid
            },
            {
              text: "Sebastian conducts dozens of singing, dancing sea creatures in an underwater garden.",
              source: SRC.mermaid
            }
          ],
          quests: [
            {
              type: "photo",
              id: "little-mermaid-photo-1",
              prompt: "Strike a mermaid pose with Prince Eric\u2019s castle behind you!",
              tip: "Look up at the castle and cliffs before you enter.",
              source: SRC.mermaid
            },
            {
              type: "photo",
              id: "little-mermaid-photo-2",
              prompt: "Join Scuttle\u2019s scavenger hunt and snap a photo of the first thing you find!",
              source: SRC.mermaid
            },
            {
              type: "trivia",
              id: "lm-1",
              question: "What are the ride vehicles shaped like?",
              choices: ["Fish", "Seashells", "Clamshells", "Boats"],
              answer: 2,
              explain: "You ride in one of 105 colorful clamshells.",
              source: SRC.mermaid
            },
            {
              type: "trivia",
              id: "lm-2",
              question: "Which character runs the scavenger hunt in the queue?",
              choices: ["Flounder", "Scuttle", "Sebastian", "Ursula"],
              answer: 1,
              explain: "Scuttle the seagull leads the queue scavenger hunt.",
              source: SRC.mermaid
            },
            {
              type: "wyr",
              id: "lm-wyr",
              a: "Breathe underwater",
              b: "Talk to animals"
            },
            {
              type: "truefalse",
              id: "lm-3",
              statement: "The ride has 105 clamshell vehicles.",
              answer: true,
              explain: "Fact! 105 colorful clamshells.",
              source: SRC.mermaid
            }
          ]
        },
        {
          id: "dumbo",
          name: "Dumbo the Flying Elephant",
          emoji: "\u{1F418}",
          opened: "October 1, 1971",
          coords: { lat: 28.42036, lng: -81.581 },
          wikiTitle: "Dumbo_the_Flying_Elephant",
          blurb: "Take flight on a little elephant with very big ears.",
          facts: [
            {
              text: "Since 2012 there are two Dumbo rides side by side, spinning in opposite directions.",
              source: SRC.dumbo
            },
            {
              text: "Timothy Q. Mouse spins on top of the ride holding his magic feather.",
              source: SRC.dumbo
            }
          ],
          quests: [
            {
              type: "photo",
              id: "dumbo-photo-1",
              prompt: "Take an action photo in the fire rescue play area, just like Dumbo\u2019s big stunt!",
              tip: "The play area is inside the big top tent.",
              source: SRC.dumbo
            },
            {
              type: "trivia",
              id: "du-1",
              question: "Who spins on top of the Dumbo ride holding a magic feather?",
              choices: ["Jiminy Cricket", "Timothy Q. Mouse", "Mickey Mouse", "A crow"],
              answer: 1,
              explain: "Timothy Q. Mouse, Dumbo\u2019s best friend, has been up there since 2012.",
              source: SRC.dumbo
            },
            {
              type: "trivia",
              id: "du-2",
              question: "The two Dumbo rides spin...",
              choices: ["The same way", "In opposite directions", "Only backwards", "Upside down"],
              answer: 1,
              explain: "One spins clockwise and the other counterclockwise.",
              source: SRC.dumbo
            },
            {
              type: "challenge",
              id: "du-ch",
              prompt: "Flap your \u201Cears\u201D and pretend to take off. Who can hold the longest flight pose?"
            },
            {
              type: "truefalse",
              id: "du-3",
              statement: "Both Dumbo rides spin in the same direction.",
              answer: false,
              explain: "Fiction! One spins clockwise and the other counterclockwise.",
              source: SRC.dumbo
            }
          ]
        },
        {
          id: "mad-tea-party",
          name: "Mad Tea Party",
          emoji: "\u{1FAD6}",
          opened: "October 1, 1971",
          coords: { lat: 28.42, lng: -81.5798 },
          wikiTitle: "Mad_Tea_Party",
          blurb: "A very merry unbirthday spin in a giant teacup.",
          facts: [
            {
              text: "The ride opened without a roof. The roof and big teapot were added in 1973.",
              source: SRC.teacups
            },
            {
              text: "A Dormouse pops out of the big teapot in the middle.",
              source: SRC.teacups
            }
          ],
          quests: [
            {
              type: "photo",
              id: "mad-tea-party-photo-1",
              prompt: "From the line, spot the sleepy Dormouse popping out of the giant teapot and snap a photo!",
              tip: "Look at the middle of the ride while you wait.",
              source: SRC.teacups
            },
            {
              type: "trivia",
              id: "mt-1",
              question: "Which movie scene is the Mad Tea Party based on?",
              choices: ["The croquet game", "The unbirthday party", "The caterpillar", "The trial"],
              answer: 1,
              explain: "It\u2019s the Unbirthday Party from Alice in Wonderland.",
              source: SRC.teacups
            },
            {
              type: "trivia",
              id: "mt-2",
              question: "Who pops out of the big teapot?",
              choices: ["The Cheshire Cat", "The White Rabbit", "The Dormouse", "The Queen of Hearts"],
              answer: 2,
              explain: "The sleepy Dormouse pops his head out.",
              source: SRC.teacups
            },
            {
              type: "challenge",
              id: "mt-ch",
              prompt: "Wish someone in line a very merry unbirthday. Everyone sing it together!"
            },
            {
              type: "truefalse",
              id: "mt-3",
              statement: "You must be 40 inches tall to ride the Mad Tea Party.",
              answer: false,
              explain: "Fiction! There\u2019s no height requirement at all.",
              source: SRC.teacups
            }
          ]
        },
        {
          id: "carrousel",
          name: "Prince Charming Regal Carrousel",
          emoji: "\u{1F3A0}",
          opened: "October 1, 1971 (built 1918)",
          coords: { lat: 28.4202, lng: -81.5812 },
          coordsApprox: true,
          wikiTitle: "Prince_Charming_Regal_Carrousel",
          blurb: "Gallop around on a horse that\u2019s over 100 years old.",
          facts: [
            {
              text: "The carousel was finished in 1918 and first spun in Detroit, where it was called the Liberty Carousel.",
              source: SRC.carrousel
            },
            {
              text: "Roy Disney noticed it was off center from the castle, so it was moved 8 inches.",
              source: SRC.carrousel
            }
          ],
          quests: [
            {
              type: "photo",
              id: "carrousel-photo-1",
              prompt: "From the line, try to spot the one horse with a golden bow on its tail and snap it!",
              tip: "It\u2019s in the second row of horses. Watch as they go around.",
              source: SRC.carrousel
            },
            {
              type: "photo",
              id: "carrousel-photo-2",
              prompt: "From the line, look up and snap a photo of a painted Cinderella scene at the top of the carrousel!",
              source: SRC.carrousel
            },
            {
              type: "trivia",
              id: "pc-1",
              question: "Which city did the carousel live in before Disney?",
              choices: ["Paris", "Detroit", "London", "New York"],
              answer: 1,
              explain: "It was the Liberty Carousel in Detroit, Michigan.",
              source: SRC.carrousel
            },
            {
              type: "guess",
              id: "pc-2",
              question: "How many inches was the carousel moved to line up with the castle?",
              answer: 8,
              min: 0,
              max: 48,
              step: 1,
              unit: "inches",
              tolerance: 2,
              explain: "Just 8 inches! Roy Disney spotted it was off center.",
              source: SRC.carrousel
            },
            {
              type: "spy",
              id: "pc-spy",
              prompt: "Find the horse with a golden bow on its tail.",
              hint: "Look in the second row. Some people call it Cinderella\u2019s horse."
            },
            {
              type: "truefalse",
              id: "pc-3",
              statement: "The carousel is the oldest ride in Magic Kingdom.",
              answer: true,
              explain: "True. It\u2019s the oldest purpose-built amusement ride in the park.",
              source: SRC.carrousel
            }
          ]
        },
        {
          id: "philharmagic",
          name: "Mickey\u2019s PhilharMagic",
          emoji: "\u{1F3BA}",
          opened: "October 8, 2003",
          coords: { lat: 28.4204, lng: -81.5815 },
          coordsApprox: true,
          wikiTitle: "Mickey's_PhilharMagic",
          blurb: "Put on your 3D glasses. Donald borrowed Mickey\u2019s hat, and uh-oh...",
          facts: [
            {
              text: "The 3D screen is 150 feet wide.",
              source: SRC.philharmagic
            },
            {
              text: "Hidden smell cannons let you smell the food during \u201CBe Our Guest.\u201D",
              source: SRC.philharmagic
            }
          ],
          quests: [
            {
              type: "photo",
              id: "philharmagic-photo-1",
              prompt: "Find a funny old concert poster in the lobby and copy its pose for a photo!",
              tip: "Look at the walls in the theater lobby.",
              source: SRC.philharmagic
            },
            {
              type: "trivia",
              id: "ph-1",
              question: "Who causes all the trouble in the show?",
              choices: ["Goofy", "Donald Duck", "Pluto", "Chip"],
              answer: 1,
              explain: "Donald, of course!",
              source: SRC.philharmagic
            },
            {
              type: "guess",
              id: "ph-2",
              question: "How wide is the PhilharMagic screen?",
              answer: 150,
              min: 20,
              max: 300,
              step: 10,
              unit: "feet",
              tolerance: 20,
              explain: "It\u2019s 150 feet wide, built just for 3D.",
              source: SRC.philharmagic
            },
            {
              type: "truefalse",
              id: "ph-3",
              statement: "You might get a little wet during the show.",
              answer: true,
              explain: "True! When the brooms splash Donald, the audience gets sprayed too.",
              source: SRC.philharmagic
            },
            {
              type: "spy",
              id: "ph-spy",
              prompt: "After the show, find the hole in the wall where Donald crashed through.",
              hint: "Check the gift shop wall."
            }
          ]
        },
        {
          id: "winnie-the-pooh",
          name: "The Many Adventures of Winnie the Pooh",
          emoji: "\u{1F36F}",
          opened: "June 5, 1999",
          coords: { lat: 28.4199, lng: -81.5802 },
          wikiTitle: "The_Many_Adventures_of_Winnie_the_Pooh_(attraction)",
          blurb: "Hop in a honey pot for a blustery day in the Hundred Acre Wood.",
          facts: [
            {
              text: "The queue has a play area, so some of your group can play while others hold your place.",
              source: SRC.pooh
            },
            {
              text: "When Tigger bounces, your honey pot bounces with him.",
              source: SRC.pooh
            }
          ],
          quests: [
            {
              type: "photo",
              id: "winnie-the-pooh-photo-1",
              prompt: "Snap a photo under the carved wooden sign at the entrance. Say \u201Chunny\u201D!",
              tip: "You walk under it as you enter.",
              source: SRC.pooh
            },
            {
              type: "photo",
              id: "winnie-the-pooh-photo-2",
              prompt: "Take a photo playing a game in the Hundred Acre Wood queue!",
              source: SRC.pooh
            },
            {
              type: "trivia",
              id: "wp-1",
              question: "Which ride was here before Winnie the Pooh?",
              choices: [
                "Snow White\u2019s Scary Adventures",
                "Mr. Toad\u2019s Wild Ride",
                "20,000 Leagues Under the Sea",
                "The Skyway"
              ],
              answer: 1,
              explain: "Pooh replaced Mr. Toad\u2019s Wild Ride in 1999.",
              source: SRC.pooh
            },
            {
              type: "emoji",
              id: "wp-2",
              emojis: "\u{1F43B} \u{1F36F} \u{1F388}",
              hint: "He\u2019s a silly old bear.",
              choices: ["Baloo", "Winnie the Pooh", "Brother Bear", "Lotso"],
              answer: 1
            },
            {
              type: "challenge",
              id: "wp-ch",
              prompt: "Bounce like Tigger five times without stopping. Hoo-hoo-hoo-hoo!"
            },
            {
              type: "challenge",
              id: "wp-spy",
              prompt: "Pick secret jobs for the ride: one person looks for Tigger, one for Piglet, one for Eeyore. Phones away, eyes only, and report back after!"
            }
          ]
        },
        {
          id: "enchanted-tales-belle",
          name: "Enchanted Tales with Belle",
          emoji: "\u{1F339}",
          opened: "December 2012",
          coords: { lat: 28.4213, lng: -81.5805 },
          coordsApprox: true,
          wikiTitle: "Enchanted_Tales_with_Belle",
          blurb: "Step through a magic mirror and help Belle tell her story.",
          facts: [
            {
              text: "Lumi\xE8re tells the story together with Belle, and guests get to help.",
              source: SRC.belle
            },
            {
              text: "Madame Wardrobe can cast guests as objects in the story.",
              source: SRC.belle
            }
          ],
          quests: [
            {
              type: "photo",
              id: "enchanted-tales-belle-photo-1",
              prompt: "Snap a picture of the magic mirror in Maurice\u2019s workshop!",
              tip: "It\u2019s in Maurice\u2019s workshop, inside the cottage.",
              source: SRC.belle
            },
            {
              type: "trivia",
              id: "eb-1",
              question: "Whose cottage does the adventure start in?",
              choices: ["Gaston\u2019s", "Maurice\u2019s", "Mrs. Potts\u2019", "The Beast\u2019s"],
              answer: 1,
              explain: "You start in the cottage of Belle\u2019s father, Maurice.",
              source: SRC.belle
            },
            {
              type: "trivia",
              id: "eb-2",
              question: "What carries you to the Beast\u2019s castle?",
              choices: ["A magic mirror", "A carriage", "A rose", "A flying book"],
              answer: 0,
              explain: "A magic mirror, a gift from the Beast.",
              source: SRC.belle
            },
            {
              type: "wyr",
              id: "eb-wyr",
              a: "Be an enchanted teacup",
              b: "Be an enchanted candlestick"
            },
            {
              type: "challenge",
              id: "eb-ch",
              prompt: "Act out a scene from Beauty and the Beast with no words. Everyone else guesses!"
            }
          ]
        },
        {
          id: "barnstormer",
          name: "The Barnstormer",
          emoji: "\u2708\uFE0F",
          opened: "March 12, 2012 (current version)",
          coords: { lat: 28.4214, lng: -81.5786 },
          coordsApprox: true,
          wikiTitle: "The_Barnstormer",
          blurb: "Fly with the Great Goofini on a zippy little coaster.",
          facts: [
            {
              text: "You need to be at least 35 inches tall to ride.",
              source: SRC.barnstormer
            },
            {
              text: "Jumbled red letters on the back of the entrance sign spell \u201CWiseacre Farm,\u201D the ride\u2019s old name.",
              source: SRC.barnstormer
            }
          ],
          quests: [
            {
              type: "photo",
              id: "barnstormer-photo-1",
              prompt: "Find the jumbled red letters on the back of the entrance sign and snap them! Can you unscramble them?",
              tip: "Check the back of the entrance sign.",
              source: SRC.barnstormer
            },
            {
              type: "trivia",
              id: "bs-1",
              question: "Who is the daredevil \u201CGreat Goofini\u201D?",
              choices: ["Mickey", "Donald", "Goofy", "Pluto"],
              answer: 2,
              explain: "Goofy, the Great Goofini!",
              source: SRC.barnstormer
            },
            {
              type: "guess",
              id: "bs-2",
              question: "How tall do you need to be to ride the Barnstormer?",
              answer: 35,
              min: 20,
              max: 60,
              step: 1,
              unit: "inches",
              tolerance: 2,
              explain: "35 inches (89 cm).",
              source: SRC.barnstormer
            },
            {
              type: "spy",
              id: "bs-spy",
              prompt: "Find the jumbled red letters that spell the ride\u2019s old name.",
              hint: "Look on the back of the entrance sign."
            },
            {
              type: "challenge",
              id: "bs-ch",
              prompt: "Strike your best daredevil stunt pose. Hold it for 5 seconds!"
            }
          ]
        }
      ]
    },
    {
      id: "tomorrowland",
      name: "Tomorrowland",
      emoji: "\u{1F680}",
      intro: "Final chapter, space cadets! The future is bright, glowing and full of rockets. Buckle up.",
      colors: { sky: "#DCE6FF", ground: "#1B2A6B", ink: "#0B1233", accent: "#39FF88" },
      attractions: [
        {
          id: "space-mountain",
          name: "Space Mountain",
          emoji: "\u{1F30C}",
          opened: "January 15, 1975",
          coords: { lat: 28.41917, lng: -81.57722 },
          wikiTitle: "Space_Mountain_(Magic_Kingdom)",
          blurb: "Blast off on a roller coaster through the dark of outer space.",
          facts: [
            {
              text: "The cone that holds the ride is 300 feet across.",
              source: SRC.space
            },
            {
              text: "Riders sit one behind the other, six people per train.",
              source: SRC.space
            }
          ],
          quests: [
            {
              type: "photo",
              id: "space-mountain-photo-1",
              prompt: "Find the star map and take a photo of it, space cadet!",
              tip: "It\u2019s in the big room just after you enter the building.",
              source: SRC.space
            },
            {
              type: "trivia",
              id: "sm-1",
              question: "What is Space Mountain\u2019s top speed?",
              choices: ["7 mph", "27 mph", "57 mph", "107 mph"],
              answer: 1,
              explain: "About 27 mph. It feels much faster in the dark!",
              source: SRC.space
            },
            {
              type: "trivia",
              id: "sm-2",
              question: "When did Space Mountain open?",
              choices: ["1971", "1975", "1989", "2001"],
              answer: 1,
              explain: "It opened on January 15, 1975.",
              source: SRC.space
            },
            {
              type: "challenge",
              id: "sm-ch",
              prompt: "Mission control! Everyone count down from 10 together and blast off on zero."
            },
            {
              type: "wyr",
              id: "sm-wyr",
              a: "Take a trip to the Moon",
              b: "Take a trip to the bottom of the ocean"
            },
            {
              type: "guess",
              id: "sm-3",
              question: "What is Space Mountain\u2019s top speed?",
              answer: 27,
              min: 5,
              max: 100,
              step: 1,
              unit: "mph",
              tolerance: 4,
              explain: "About 27 mph, but it feels way faster in the dark.",
              source: SRC.space
            },
            {
              type: "order",
              id: "sm-4",
              prompt: "Put these Tomorrowland rides in order, oldest first.",
              items: ["Space Mountain (1975)", "Buzz Lightyear (1998)", "TRON (2023)"],
              explain: "Space Mountain opened in 1975, Buzz in 1998 and TRON in 2023.",
              source: SRC.tron
            }
          ]
        },
        {
          id: "tron",
          name: "TRON Lightcycle / Run",
          emoji: "\u{1F3CD}\uFE0F",
          opened: "April 4, 2023",
          coords: { lat: 28.4205, lng: -81.5767 },
          wikiTitle: "Tron_Lightcycle_Power_Run",
          blurb: "Hop on a lightcycle and launch into the Grid.",
          facts: [
            {
              text: "Lightcycles launch up to 59.3 mph (95.4 km/h).",
              source: SRC.tron
            },
            {
              text: "The whole ride lasts about one minute.",
              source: SRC.tron
            }
          ],
          quests: [
            {
              type: "photo",
              id: "tron-photo-1",
              prompt: "Snap a photo of the giant color-changing canopy. What color is it right now?",
              tip: "Look up at the canopy as you get close to the entrance.",
              source: SRC.tron
            },
            {
              type: "photo",
              id: "tron-photo-2",
              prompt: "Take a photo of the glowing blue circuit lines in the hallway!",
              tip: "In the corridor at the start of the line.",
              source: SRC.tron
            },
            {
              type: "trivia",
              id: "tr-1",
              question: "How tall do you need to be to ride TRON?",
              choices: ["3 feet", "4 feet", "5 feet", "Any height"],
              answer: 1,
              explain: "Riders must be at least 4 feet (122 cm) tall.",
              source: SRC.tron
            },
            {
              type: "trivia",
              id: "tr-2",
              question: "About how long does the TRON ride last?",
              choices: ["1 minute", "5 minutes", "10 minutes", "30 seconds"],
              answer: 0,
              explain: "About one minute of pure speed.",
              source: SRC.tron
            },
            {
              type: "spy",
              id: "tr-spy",
              prompt: "Find something glowing blue and something glowing orange."
            },
            {
              type: "guess",
              id: "tr-3",
              question: "How fast do the lightcycles launch?",
              answer: 59,
              min: 10,
              max: 120,
              step: 1,
              unit: "mph",
              tolerance: 5,
              explain: "59.3 mph (95.4 km/h)!",
              source: SRC.tron
            }
          ]
        },
        {
          id: "buzz-lightyear",
          name: "Buzz Lightyear\u2019s Space Ranger Spin",
          emoji: "\u{1F52B}",
          opened: "November 3, 1998",
          coords: { lat: 28.4183, lng: -81.5798 },
          wikiTitle: "Buzz_Lightyear's_Space_Ranger_Spin",
          blurb: "Blast targets and help Buzz stop the Evil Emperor Zurg.",
          facts: [
            {
              text: "The ride reopened on April 8, 2026 with new vehicles, handheld blasters and a new robot named Buddy.",
              source: SRC.buzz
            },
            {
              text: "The ride is scaled so you feel shrunk to the size of an action figure.",
              source: SRC.buzz
            }
          ],
          quests: [
            {
              type: "photo",
              id: "buzz-lightyear-photo-1",
              prompt: "Salute Buzz Lightyear and snap a photo of him during your mission briefing in the line!",
              tip: "He briefs recruits near the end of the queue.",
              source: SRC.buzz
            },
            {
              type: "photo",
              id: "buzz-lightyear-photo-2",
              prompt: "Find a picture of the Little Green Men and make your best \u201COoooh!\u201D face for a photo!",
              source: SRC.buzz
            },
            {
              type: "trivia",
              id: "bz-1",
              question: "Who is the villain Buzz is trying to stop?",
              choices: ["Sid", "Evil Emperor Zurg", "Stinky Pete", "Lotso"],
              answer: 1,
              explain: "The Evil Emperor Zurg, who always vows he\u2019ll be back.",
              source: SRC.buzz
            },
            {
              type: "trivia",
              id: "bz-2",
              question: "What new robot character was added in 2026?",
              choices: ["Buddy", "Sparky", "Wall-E", "Bolt"],
              answer: 0,
              explain: "A new robot named Buddy joined the mission.",
              source: SRC.buzz
            },
            {
              type: "challenge",
              id: "bz-ch",
              prompt: "Strike your best Space Ranger pose and say \u201CTo infinity and beyond!\u201D"
            },
            {
              type: "emoji",
              id: "bz-3",
              emojis: "\u{1F680} \u{1F468}\u200D\u{1F680} \u267E\uFE0F",
              hint: "To infinity and beyond!",
              choices: ["Buzz Lightyear", "WALL-E", "Lilo & Stitch", "The Incredibles"],
              answer: 0
            }
          ]
        },
        {
          id: "peoplemover",
          name: "Tomorrowland Transit Authority PeopleMover",
          emoji: "\u{1F69D}",
          opened: "July 1, 1975",
          coords: { lat: 28.4188, lng: -81.5792 },
          coordsApprox: true,
          wikiTitle: "Tomorrowland_Transit_Authority_PeopleMover",
          blurb: "A breezy tour above Tomorrowland, with a peek inside Space Mountain.",
          facts: [
            {
              text: "The PeopleMover is powered by linear induction motors built into the track, not into the trains.",
              source: SRC.peoplemover
            },
            {
              text: "When the work lights are on, you can see Space Mountain\u2019s coaster track up close.",
              source: SRC.peoplemover
            }
          ],
          quests: [
            {
              type: "photo",
              id: "peoplemover-photo-1",
              prompt: "From the line, before you step on, snap a photo of the moving ramp that carries you up to the trains. Then phones away and hold the handrail!",
              tip: "Right after the queue, before boarding.",
              source: SRC.peoplemover
            },
            {
              type: "trivia",
              id: "pm-1",
              question: "What was the PeopleMover called when it opened in 1975?",
              choices: ["The Skyway", "The WEDway PeopleMover", "The Monorail", "The Rocket Train"],
              answer: 1,
              explain: "It opened as the WEDway PeopleMover on July 1, 1975.",
              source: SRC.peoplemover
            },
            {
              type: "trivia",
              id: "pm-2",
              question: "Which ride can you peek inside from the PeopleMover?",
              choices: ["Haunted Mansion", "Space Mountain", "Pirates of the Caribbean", "Peter Pan\u2019s Flight"],
              answer: 1,
              explain: "The track passes through Space Mountain.",
              source: SRC.peoplemover
            },
            {
              type: "wyr",
              id: "pm-wyr",
              a: "Ride a train that floats on magnets",
              b: "Ride a car that drives itself"
            },
            {
              type: "truefalse",
              id: "pm-3",
              statement: "The PeopleMover\u2019s motors are built into the track.",
              answer: true,
              explain: "Fact! It uses linear induction motors in the track.",
              source: SRC.peoplemover
            }
          ]
        },
        {
          id: "astro-orbiter",
          name: "Astro Orbiter",
          emoji: "\u{1FA90}",
          opened: "November 28, 1974",
          coords: { lat: 28.4187, lng: -81.58 },
          coordsApprox: true,
          wikiTitle: "Astro_Orbiter",
          blurb: "Pilot your own rocket high above Tomorrowland.",
          facts: [
            {
              text: "It opened as Star Jets in 1974 and became Astro Orbiter in 1994.",
              source: SRC.orbiter
            },
            {
              text: "The rockets spin around 11 times every minute.",
              source: SRC.orbiter
            }
          ],
          quests: [
            {
              type: "photo",
              id: "astro-orbiter-photo-1",
              prompt: "While you wait, snap a photo of the planets as the rockets zoom between them!",
              source: SRC.orbiter
            },
            {
              type: "trivia",
              id: "ao-1",
              question: "What was Astro Orbiter called when it opened?",
              choices: ["Rocket Jets", "Star Jets", "Moon Cars", "Sky Rockets"],
              answer: 1,
              explain: "It was Star Jets from 1974 until 1994.",
              source: SRC.orbiter
            },
            {
              type: "guess",
              id: "ao-2",
              question: "How many rockets fly around Astro Orbiter?",
              answer: 12,
              min: 2,
              max: 30,
              step: 1,
              unit: "rockets",
              tolerance: 1,
              explain: "There are 12 rockets.",
              source: SRC.orbiter
            },
            {
              type: "truefalse",
              id: "ao-3",
              statement: "Riders control how high their rocket flies with a stick.",
              answer: true,
              explain: "True. Pull the stick to go up and down.",
              source: SRC.orbiter
            },
            {
              type: "wyr",
              id: "ao-wyr",
              a: "Visit every planet in our solar system",
              b: "Discover a brand-new planet nobody has seen"
            }
          ]
        },
        {
          id: "carousel-of-progress",
          closure: {
            from: "2026-07-06",
            note: "Closed for a big update, expected back in late spring 2027.",
            source: "https://blogmickey.com/2026/08/voice-actors-announced-for-new-carousel-of-progress-opening-late-spring-2027/"
          },
          name: "Walt Disney\u2019s Carousel of Progress",
          emoji: "\u{1F3E1}",
          opened: "January 15, 1975",
          coords: { lat: 28.41778, lng: -81.57889 },
          wikiTitle: "Walt_Disney's_Carousel_of_Progress",
          blurb: "Visit one family through 100 years of amazing inventions.",
          facts: [
            {
              text: "It holds the record as the longest-running stage show in American theater history.",
              source: SRC.progress
            },
            {
              text: "You stay in your seat while the whole theater turns to the next scene.",
              source: SRC.progress
            }
          ],
          quests: [
            {
              type: "trivia",
              id: "cp-1",
              question: "What is the family dog\u2019s name?",
              choices: ["Rover", "Pluto", "Buster", "Max"],
              answer: 0,
              explain: "The family dog is Rover.",
              source: SRC.progress
            },
            {
              type: "order",
              id: "cp-2",
              prompt: "Put the show\u2019s four scenes in order.",
              items: ["Turn of the century", "Roarin\u2019 Twenties", "Fabulous Forties", "21st-century Christmas"],
              explain: "The family moves from about 1900 all the way to a modern Christmas.",
              source: SRC.progress
            },
            {
              type: "truefalse",
              id: "cp-3",
              statement: "The show first opened at the 1964 New York World\u2019s Fair.",
              answer: true,
              explain: "True. It moved to Magic Kingdom in 1975.",
              source: SRC.progress
            },
            {
              type: "challenge",
              id: "cp-ch",
              prompt: "Invent a gadget for the future. Everyone explains what theirs does!"
            }
          ]
        },
        {
          id: "laugh-floor",
          name: "Monsters, Inc. Laugh Floor",
          emoji: "\u{1F602}",
          opened: "April 2, 2007",
          coords: { lat: 28.4182, lng: -81.5806 },
          coordsApprox: true,
          wikiTitle: "Monsters,_Inc._Laugh_Floor",
          blurb: "A monster comedy club where your laughs help power the city.",
          facts: [
            {
              text: "Mike Wazowski and Roz both make appearances in the show.",
              source: SRC.laughfloor
            },
            {
              text: "It replaced The Timekeeper, a 360-degree movie attraction.",
              source: SRC.laughfloor
            }
          ],
          quests: [
            {
              type: "trivia",
              id: "lf-1",
              question: "Which monster shows up at the Laugh Floor?",
              choices: ["Randall", "Mike Wazowski", "Boo", "Waternoose"],
              answer: 1,
              explain: "Mike Wazowski (and Roz!) make appearances.",
              source: SRC.laughfloor
            },
            {
              type: "emoji",
              id: "lf-2",
              emojis: "\u{1F441}\uFE0F \u{1F7E2} \u{1F6AA} \u{1F602}",
              hint: "A one-eyed monster and his big blue friend.",
              choices: ["Monsters, Inc.", "Inside Out", "Toy Story", "Up"],
              answer: 0
            },
            {
              type: "challenge",
              id: "lf-ch",
              prompt: "Knock-knock joke battle! Whoever gets the biggest laugh wins."
            }
          ]
        }
      ]
    }
  ]
};

// ../src/data/parks/mk-extra/adventureland.ts
var JC = "https://en.wikipedia.org/wiki/Jungle_Cruise";
var JC_DIS = "https://disneyworld.disney.go.com/attractions/magic-kingdom/jungle-cruise/";
var PI = "https://en.wikipedia.org/wiki/Pirates_of_the_Caribbean_(attraction)";
var PI_DIS = "https://disneyworld.disney.go.com/attractions/magic-kingdom/pirates-of-the-caribbean/";
var TIKI = "https://en.wikipedia.org/wiki/Walt_Disney's_Enchanted_Tiki_Room";
var SFT = "https://en.wikipedia.org/wiki/Swiss_Family_Treehouse";
var SFT_DIS = "https://disneyworld.disney.go.com/attractions/magic-kingdom/swiss-family-treehouse/";
var SFR = "https://en.wikipedia.org/wiki/Swiss_Family_Robinson_(1960_film)";
var MC = "https://en.wikipedia.org/wiki/The_Magic_Carpets_of_Aladdin";
var MC_DIS = "https://disneyworld.disney.go.com/attractions/magic-kingdom/magic-carpets-of-aladdin/";
var ALA = "https://en.wikipedia.org/wiki/Aladdin_(1992_Disney_film)";
var extra = {
  "jungle-cruise": {
    facts: [
      // evidence: "Also unlike Disneyland, the queue never extended to a second level."
      {
        text: "Unlike the Disneyland version, Magic Kingdom\u2019s Jungle Cruise line never went up to a second level.",
        source: JC
      },
      // evidence: "Albert Awol is a fictional Jungle Cruise boat captain and disc jockey for the Disney Broadcasting Company."
      { text: "Albert Awol, the voice on the queue radio, is a pretend boat captain and DJ.", source: JC },
      // evidence: "began running at the Jungle Cruise attractions at Disneyland Resort and the Magic Kingdom."
      { text: "Since 2013, the ride has gotten a special holiday makeover at Magic Kingdom.", source: JC },
      // evidence: "These scenes would then be replaced in both the Disneyland and Magic Kingdom versions of the ride."
      {
        text: "In 2021, Disney announced a big update that gave the ride new scenes at both Disneyland and Magic Kingdom.",
        source: JC
      }
    ],
    quests: [
      // evidence: "The first installation of the ride was featured at Disneyland for its grand opening in 1955."
      {
        type: "trivia",
        id: "jungle-cruise-x1",
        question: "Where was the very first Jungle Cruise?",
        choices: ["Disneyland in California", "Magic Kingdom in Florida", "Tokyo Disneyland", "Disneyland Paris"],
        answer: 0,
        explain: "It opened with Disneyland in 1955. Magic Kingdom\u2019s came in 1971.",
        source: JC
      },
      // evidence: "It's a 10-minute, 10,000-mile journey that you won't soon forget!"
      {
        type: "guess",
        id: "jungle-cruise-x2",
        question: "Disney calls this boat trip a journey of how many miles?",
        answer: 1e4,
        min: 0,
        max: 3e4,
        step: 500,
        unit: "miles",
        tolerance: 2e3,
        explain: "A 10,000-mile journey! (Your boat doesn\u2019t really go that far.)",
        source: JC_DIS
      },
      // evidence: "on the Amazon in South America" ... "along the Nile" ... "down the Mekong River"
      {
        type: "trivia",
        id: "jungle-cruise-x3",
        question: "Which river is NOT on the Jungle Cruise tour?",
        choices: ["The Amazon", "The Nile", "The Mekong", "The Mississippi"],
        answer: 3,
        explain: "You visit the Amazon, the Congo, the Nile and the Mekong, but not the Mississippi.",
        source: JC_DIS
      },
      // evidence: "overrun by curious gorillas"
      {
        type: "truefalse",
        id: "jungle-cruise-x4",
        statement: "On the cruise you pass a camp that has been taken over by gorillas.",
        answer: true,
        explain: "Fact! Curious gorillas have overrun the camp.",
        source: JC_DIS
      },
      // evidence: "Albert Awol was added in 1991 to the Jungle Cruise during a refurbishment."
      {
        type: "truefalse",
        id: "jungle-cruise-x5",
        statement: "Albert Awol has been on the queue radio since the ride opened in 1971.",
        answer: false,
        explain: "Fiction! Albert Awol was added in 1991, twenty years later.",
        source: JC
      },
      // evidence: "The boats now pass behind Schweitzer Falls (referred to as "the Backside of Water"..."
      {
        type: "trivia",
        id: "jungle-cruise-x6",
        question: "When your boat goes behind Schweitzer Falls, what do skippers call it?",
        choices: ["The Wet Zone", "The Backside of Water", "Splash Alley", "The Rain Room"],
        answer: 1,
        explain: "It\u2019s the famous \u201CBackside of Water\u201D!",
        source: JC
      },
      // evidence: "a missing Jungle Cruise vessel and its helpless passengers"
      {
        type: "trivia",
        id: "jungle-cruise-x7",
        question: "What are you searching for on your cruise?",
        choices: ["A lost treasure map", "A missing Jungle Cruise boat", "A runaway elephant", "The skipper\u2019s hat"],
        answer: 1,
        explain: "You keep an eye out for a missing Jungle Cruise boat and its passengers.",
        source: JC_DIS
      },
      // evidence: "1955" (Disneyland opening), "October 1, 1971", "Albert Awol was added in 1991", "The world premiere for Jungle Cruise was held at Disneyland on July 24, 2021."
      {
        type: "order",
        id: "jungle-cruise-x8",
        prompt: "Put these Jungle Cruise moments in order, oldest first.",
        items: [
          "Jungle Cruise opens at Disneyland",
          "Jungle Cruise opens at Magic Kingdom",
          "Albert Awol joins the queue radio",
          "The Jungle Cruise movie premieres"
        ],
        explain: "1955, then 1971, then 1991, then the movie in 2021.",
        source: JC
      },
      // evidence: "The world premiere for Jungle Cruise was held at Disneyland on July 24, 2021."
      {
        type: "trivia",
        id: "jungle-cruise-x9",
        question: "What year did the Jungle Cruise movie come out?",
        choices: ["1971", "1999", "2011", "2021"],
        answer: 3,
        explain: "The movie premiered in July 2021.",
        source: JC
      },
      // evidence: "Big band music from the 1920s, 1930s and 1940s plays overhead."
      {
        type: "truefalse",
        id: "jungle-cruise-x10",
        statement: "The music in the queue is big band music from the 1920s to 1940s.",
        answer: true,
        explain: "Fact! Old-time big band tunes play overhead.",
        source: JC
      },
      // evidence: "Watch for angry hippos, hungry lions and "sleeping" zebras"
      {
        type: "truefalse",
        id: "jungle-cruise-x11",
        statement: "The hippos on the Jungle Cruise are sleepy and friendly.",
        answer: false,
        explain: "Fiction! Watch out for angry hippos (and hungry lions)!",
        source: JC_DIS
      },
      // evidence: "pinned insects, an old radio on top of a bookshelf, an old typewriter"
      {
        type: "spy",
        id: "jungle-cruise-x12",
        prompt: "Spot an old radio or an old typewriter in the queue.",
        hint: "Try looking up on top of a bookshelf."
      },
      {
        type: "spy",
        id: "jungle-cruise-x13",
        prompt: "Find something that looks like it was packed for a jungle expedition.",
        hint: "Crates, maps and gear are all good finds."
      },
      {
        type: "spy",
        id: "jungle-cruise-x14",
        prompt: "Spy a boat out on the river. Can you read its name?"
      },
      {
        type: "spy",
        id: "jungle-cruise-x15",
        prompt: "Find a plant with leaves bigger than your hand."
      },
      {
        type: "challenge",
        id: "jungle-cruise-x16",
        prompt: "Everyone do your best animal sound from the jungle. Can the group guess each animal?"
      },
      {
        type: "challenge",
        id: "jungle-cruise-x17",
        prompt: "Make up a skipper pun about a hippo, a lion or an elephant. Biggest groan wins!"
      },
      {
        type: "challenge",
        id: "jungle-cruise-x18",
        prompt: "Be a radio DJ like Albert Awol! Announce the \u201Cjungle weather report\u201D in your best radio voice."
      },
      {
        type: "challenge",
        id: "jungle-cruise-x19",
        prompt: "Freeze like a \u201Csleeping\u201D zebra! Last one to move or giggle wins."
      },
      {
        type: "wyr",
        id: "jungle-cruise-x20",
        a: "Be the skipper telling the jokes",
        b: "Be the passenger laughing at every joke"
      },
      {
        type: "wyr",
        id: "jungle-cruise-x21",
        a: "Ride an elephant through the jungle",
        b: "Ride a boat past the hippos"
      },
      {
        type: "wyr",
        id: "jungle-cruise-x22",
        a: "Get splashed by the Backside of Water",
        b: "Get squirted by a playful elephant"
      },
      {
        type: "wyr",
        id: "jungle-cruise-x23",
        a: "Explore the Amazon",
        b: "Explore the Nile"
      },
      {
        type: "emoji",
        id: "jungle-cruise-x24",
        emojis: "\u{1F99B} \u{1F620} \u{1F30A}",
        hint: "A grumpy animal that loves the river.",
        choices: ["Angry hippos", "Sleepy zebras", "Happy elephants", "Silly monkeys"],
        answer: 0
      },
      {
        type: "emoji",
        id: "jungle-cruise-x25",
        emojis: "\u{1F519} \u{1F4A7}",
        hint: "The skipper\u2019s favorite \u201Cwonder of the world.\u201D",
        choices: ["Splash Mountain", "The Backside of Water", "Rain Forest", "Waterfall Lake"],
        answer: 1
      },
      {
        type: "emoji",
        id: "jungle-cruise-x26",
        emojis: "\u{1F98D} \u26FA",
        hint: "Somebody moved into the explorers\u2019 camp.",
        choices: ["Lions at the zoo", "Gorillas in the camp", "Bears in the woods", "Monkeys in a tree"],
        answer: 1
      }
    ]
  },
  pirates: {
    facts: [
      // evidence: "inspired by Castillo de San Felipe del Morro in Puerto Rico"
      {
        text: "The ride\u2019s fort is inspired by a real fort in Puerto Rico called Castillo San Felipe del Morro.",
        source: PI
      },
      // evidence: "written by George Bruns (music) and Xavier Atencio (lyrics)"
      { text: "The pirate song was written by George Bruns (music) and Xavier Atencio (words).", source: PI },
      // evidence: "Board a weathered barge for a treacherous voyage"
      { text: "Your boat is a weathered barge sailing back in time to pirate days.", source: PI_DIS },
      // evidence: "The chess-playing skeleton gag was designed for the Magic Kingdom by Imagineer Marc Davis."
      {
        text: "The chess-playing skeletons in the queue were dreamed up for Magic Kingdom by Imagineer Marc Davis.",
        source: PI
      }
    ],
    quests: [
      // evidence: "golden Spanish fort called Castillo Del Morro"
      {
        type: "trivia",
        id: "pirates-x1",
        question: "What is the name of the fort you walk through in line?",
        choices: ["Fort Wilderness", "Castillo del Morro", "Skull Rock", "Fort Sam Clemens"],
        answer: 1,
        explain: "It\u2019s Castillo del Morro, a golden Spanish fort.",
        source: PI
      },
      // evidence: "attempting to lure a dog who has keys in his mouth"
      {
        type: "trivia",
        id: "pirates-x2",
        question: "The prisoners in jail are trying to get something from a dog. What?",
        choices: ["A bone", "A treasure map", "The keys", "A cookie"],
        answer: 2,
        explain: "The dog has the jail keys in his mouth!",
        source: PI
      },
      // evidence: "Be sure to keep a spry eye out for Captain Jack Sparrow"
      {
        type: "trivia",
        id: "pirates-x3",
        question: "Which famous movie captain should you keep an eye out for on the ride?",
        choices: ["Captain Hook", "Captain Jack Sparrow", "Captain Nemo", "Captain Smee"],
        answer: 1,
        explain: "Look sharp for Captain Jack Sparrow!",
        source: PI_DIS
      },
      // evidence: "a striking 12-gun galleon"
      {
        type: "guess",
        id: "pirates-x4",
        question: "The pirate ship that battles the fort is a galleon with how many guns?",
        answer: 12,
        min: 0,
        max: 50,
        step: 1,
        unit: "guns",
        tolerance: 3,
        explain: "It\u2019s a 12-gun galleon. Boom!",
        source: PI_DIS
      },
      // evidence: "to the 17th century, when rowdy rogues and ruthless rapscallions ransacked Caribbean seaport towns"
      {
        type: "trivia",
        id: "pirates-x5",
        question: "What time in history does the ride take you to?",
        choices: ["The Stone Age", "The 17th century", "The 1950s", "The future"],
        answer: 1,
        explain: "Back to the 1600s, when pirates raided Caribbean seaport towns.",
        source: PI_DIS
      },
      // evidence: "the Disneyland version of Pirates of the Caribbean was the last ride that Walt Disney participated in designing"
      {
        type: "truefalse",
        id: "pirates-x6",
        statement: "Pirates of the Caribbean at Disneyland was the last ride Walt Disney helped design.",
        answer: true,
        explain: "Fact! The Disneyland version opened in 1967.",
        source: PI
      },
      // evidence: "In 2003, Disney released Pirates of the Caribbean: The Curse of the Black Pearl, a feature film inspired by the ride."
      {
        type: "truefalse",
        id: "pirates-x7",
        statement: "The Pirates of the Caribbean ride was based on the movies.",
        answer: false,
        explain: "Fiction! It\u2019s the other way around. The first movie (2003) was inspired by the ride.",
        source: PI
      },
      // evidence: "The ride gave rise to "A Pirate's Life for Me," written by George Bruns (music) and Xavier Atencio (lyrics)."
      {
        type: "truefalse",
        id: "pirates-x8",
        statement: "The song the pirates sing is called \u201CA Pirate\u2019s Life for Me.\u201D",
        answer: true,
        explain: "Fact! Yo ho, yo ho!",
        source: PI
      },
      // evidence: "attempting to lure a dog who has keys in his mouth" / scene list order on page
      {
        type: "order",
        id: "pirates-x9",
        prompt: "Put these ride scenes in the order you sail past them.",
        items: [
          "A pirate ship battles the fort",
          "A man gets dunked in a well",
          "Prisoners call to a dog with keys",
          "Jack Sparrow relaxes in the treasure room"
        ],
        explain: "Battle, well, jail, and Jack\u2019s treasure room at the very end.",
        source: PI
      },
      // evidence: "A talking skull on the wall delivers a brief safety warning"
      {
        type: "trivia",
        id: "pirates-x10",
        question: "Who gives you a safety warning before you sail?",
        choices: ["A parrot", "A talking skull", "Jack Sparrow", "A pirate dog"],
        answer: 1,
        explain: "A talking skull on the wall, and it flashes its eyes too!",
        source: PI
      },
      // evidence: "Sail past haunted Dead Man’s Cove"
      {
        type: "truefalse",
        id: "pirates-x11",
        statement: "Your boat sails past a spooky place called Dead Man\u2019s Cove.",
        answer: true,
        explain: "Fact! Dead Man\u2019s Cove is part of the voyage.",
        source: PI_DIS
      },
      // evidence: "Opening on March 18, 1967, the Disneyland version" / "The new Pirates of the Caribbean ride opened on December 15, 1973." / "In 2003, Disney released..."
      {
        type: "order",
        id: "pirates-x12",
        prompt: "Put these in order, oldest first.",
        items: ["Pirates opens at Disneyland", "Pirates opens at Magic Kingdom", "The first Pirates movie comes out"],
        explain: "1967, then 1973, then the movie in 2003.",
        source: PI
      },
      // evidence: "The queue winds through the fort, passing supplies and cannons"
      {
        type: "spy",
        id: "pirates-x13",
        prompt: "Spot some pirate supplies in the fort. Barrels, crates or cannonballs all count!"
      },
      {
        type: "spy",
        id: "pirates-x14",
        prompt: "Find something in line that looks like it belongs on a pirate ship."
      },
      {
        type: "spy",
        id: "pirates-x15",
        prompt: "Look for a key, a lock or a chain. Pirates love to lock up treasure!"
      },
      {
        type: "spy",
        id: "pirates-x16",
        prompt: "Find a spot in the fort that would make a great pirate lookout.",
        hint: "Think high windows and walls."
      },
      {
        type: "challenge",
        id: "pirates-x17",
        prompt: "Everyone give yourself a pirate name, like \u201CCaptain Sandy Socks.\u201D Use it until the boat!"
      },
      {
        type: "challenge",
        id: "pirates-x18",
        prompt: "Sing \u201CYo ho, yo ho!\u201D as a group, quietly like a whisper, then a tiny bit louder."
      },
      {
        type: "challenge",
        id: "pirates-x19",
        prompt: "Play the jail dog! One person holds pretend keys while everyone else tries to coax them over with only funny faces."
      },
      {
        type: "challenge",
        id: "pirates-x20",
        prompt: "Draw an invisible treasure map in the air. Can your group guess where X marks the spot?"
      },
      {
        type: "wyr",
        id: "pirates-x21",
        a: "Find a chest full of gold coins",
        b: "Find a map to a secret island"
      },
      {
        type: "wyr",
        id: "pirates-x22",
        a: "Be the dog holding the keys",
        b: "Be the prisoner trying to get them"
      },
      {
        type: "wyr",
        id: "pirates-x23",
        a: "Have a parrot on your shoulder",
        b: "Have a peg leg that plays music"
      },
      {
        type: "wyr",
        id: "pirates-x24",
        a: "Defend the fort",
        b: "Sail the pirate galleon"
      },
      {
        type: "emoji",
        id: "pirates-x25",
        emojis: "\u{1F415} \u{1F511} \u{1F512}",
        hint: "The prisoners really want what he has.",
        choices: ["A pirate parrot", "The jail dog", "A treasure chest", "A sleepy cat"],
        answer: 1
      },
      {
        type: "emoji",
        id: "pirates-x26",
        emojis: "\u{1F480} \u265F\uFE0F",
        hint: "A game that\u2019s been going on a very long time in the queue.",
        choices: ["Skeletons playing chess", "Pirates playing cards", "Ghosts playing tag", "Parrots playing checkers"],
        answer: 0
      },
      {
        type: "emoji",
        id: "pirates-x27",
        emojis: "\u{1F3F4}\u200D\u2620\uFE0F \u{1F3A9} \u{1F9ED}",
        hint: "A captain whose compass doesn\u2019t point north.",
        choices: ["Captain Hook", "Jack Sparrow", "Mr. Smee", "Blackbeard"],
        answer: 1
      }
    ]
  },
  "tiki-room": {
    facts: [
      // evidence: "a slightly edited version of Disneyland's original show"
      {
        text: "Since August 2011, the show here has been a slightly edited version of Disneyland\u2019s original.",
        source: TIKI
      },
      // evidence: Under New Management "featured Iago from Aladdin and Zazu from The Lion King"
      { text: "From 1998 to 2011, Iago from Aladdin and Zazu from The Lion King took over the show.", source: TIKI },
      // evidence: "Disneyland's Tiki Room was also the park's first fully air-conditioned building"
      {
        text: "Back in 1963, Disneyland\u2019s Tiki Room was that park\u2019s first fully air-conditioned building.",
        source: TIKI
      }
    ],
    quests: [
      // evidence: "was known as Tropical Serenade until 1998"
      {
        type: "trivia",
        id: "tiki-room-x1",
        question: "What was this show called at Magic Kingdom when it first opened?",
        choices: ["Bird Island", "Tropical Serenade", "Tiki Town", "Feathered Friends"],
        answer: 1,
        explain: "It was called Tropical Serenade.",
        source: TIKI
      },
      // evidence: "This version replaced the original and featured Iago from Aladdin"
      {
        type: "trivia",
        id: "tiki-room-x2",
        question: "From 1998 to 2011, which bird from Aladdin starred in the show?",
        choices: ["Iago", "Abu", "Zazu", "Rajah"],
        answer: 0,
        explain: "Iago, Jafar\u2019s loud parrot pal, was in \u201CUnder New Management.\u201D",
        source: TIKI
      },
      // evidence: "was the first to feature Audio-Animatronics technology"
      {
        type: "truefalse",
        id: "tiki-room-x3",
        statement: "The first Tiki Room, at Disneyland, was the first attraction with Audio-Animatronics.",
        answer: true,
        explain: "Fact! It was the very first to use Audio-Animatronics.",
        source: TIKI
      },
      // evidence: "The finale is "Hawaiian War Chant," ... "the finale has every Audio-Animatronics figure performing a rousing version of" it"
      {
        type: "trivia",
        id: "tiki-room-x4",
        question: "Which song is the big finale where everyone performs?",
        choices: ["Hawaiian War Chant", "Under the Sea", "Yo Ho", "Hakuna Matata"],
        answer: 0,
        explain: "The whole cast performs the \u201CHawaiian War Chant.\u201D",
        source: TIKI
      },
      // evidence: "Michael (Fulton Burley): white and green, with an Irish brogue"
      {
        type: "trivia",
        id: "tiki-room-x5",
        question: "Which host bird talks with an Irish accent?",
        choices: ["Jos\xE9", "Michael", "Pierre", "Fritz"],
        answer: 1,
        explain: "Michael has an Irish brogue.",
        source: TIKI
      },
      // evidence: "José (Wally Boag): red, white, and green, with a Mexican accent"
      {
        type: "trivia",
        id: "tiki-room-x6",
        question: "Jos\xE9\u2019s feathers are red, white and green. What accent does he have?",
        choices: ["French", "German", "Mexican", "Irish"],
        answer: 2,
        explain: "Jos\xE9 has a Mexican accent.",
        source: TIKI
      },
      // evidence: "Pierre (Ernie Newton): blue, white, and red, with a French accent"
      {
        type: "truefalse",
        id: "tiki-room-x7",
        statement: "Pierre the bird speaks with a German accent.",
        answer: false,
        explain: "Fiction! Pierre has a French accent. Fritz is the one with the German accent.",
        source: TIKI
      },
      // evidence: "First opened on June 23, 1963" / "when that park opened in 1971" / "known as Tropical Serenade until 1998" / "reopened on August 15, 2011"
      {
        type: "order",
        id: "tiki-room-x8",
        prompt: "Put these Tiki Room moments in order, oldest first.",
        items: [
          "The Tiki Room opens at Disneyland",
          "Tropical Serenade opens at Magic Kingdom",
          "Iago and Zazu take over the show",
          "The classic show comes back"
        ],
        explain: "1963, 1971, 1998, and back to the classic in 2011.",
        source: TIKI
      },
      // evidence: "Sherman Brothers (music & lyrics)"
      {
        type: "truefalse",
        id: "tiki-room-x9",
        statement: "The Sherman Brothers wrote the music and words for the show.",
        answer: true,
        explain: "Fact! The Sherman Brothers wrote the songs.",
        source: TIKI
      },
      // evidence: ""Let's All Sing Like the Birdies Sing" are signature tunes"
      {
        type: "trivia",
        id: "tiki-room-x10",
        question: "Finish this Tiki Room song title: \u201CLet\u2019s All Sing Like the ___ Sing.\u201D",
        choices: ["Fishies", "Birdies", "Flowers", "Tikis"],
        answer: 1,
        explain: "\u201CLet\u2019s All Sing Like the Birdies Sing\u201D is one of the show\u2019s signature songs.",
        source: TIKI
      },
      // evidence: "First opened on June 23, 1963, at the Disneyland Resort."
      {
        type: "guess",
        id: "tiki-room-x11",
        question: "What year did the very first Tiki Room open at Disneyland?",
        answer: 1963,
        min: 1950,
        max: 2e3,
        step: 1,
        unit: "",
        tolerance: 3,
        explain: "It opened in 1963, eight years before Magic Kingdom.",
        source: TIKI
      },
      {
        type: "spy",
        id: "tiki-room-x12",
        prompt: "Find a carved tiki face. Is it smiling, frowning or surprised?"
      },
      {
        type: "spy",
        id: "tiki-room-x13",
        prompt: "Spot a flower or plant that looks like it came from a tropical island."
      },
      {
        type: "spy",
        id: "tiki-room-x14",
        prompt: "Look for something with bird colors: bright red, green, blue or yellow."
      },
      {
        type: "spy",
        id: "tiki-room-x15",
        prompt: "Find something that looks like a drum or could make music."
      },
      {
        type: "challenge",
        id: "tiki-room-x16",
        prompt: "Whistle like a bird! Take turns and let the group rate each tweet."
      },
      {
        type: "challenge",
        id: "tiki-room-x17",
        prompt: "Be a tiki drummer: tap a beat on your knees and have everyone copy it."
      },
      {
        type: "challenge",
        id: "tiki-room-x18",
        prompt: "Make up a new host bird! Give it a name, a color and a silly catchphrase."
      },
      {
        type: "challenge",
        id: "tiki-room-x19",
        prompt: "Freeze like a tiki statue. The first one to laugh has to flap like a bird."
      },
      {
        type: "wyr",
        id: "tiki-room-x20",
        a: "Be a singing bird",
        b: "Be a singing flower"
      },
      {
        type: "wyr",
        id: "tiki-room-x21",
        a: "Have feathers in every color of the rainbow",
        b: "Have a voice that can sing any song"
      },
      {
        type: "wyr",
        id: "tiki-room-x22",
        a: "Host the Tiki show like Jos\xE9 and friends",
        b: "Be the tiki drummer in the back"
      },
      {
        type: "wyr",
        id: "tiki-room-x23",
        a: "Talk to birds",
        b: "Talk to flowers"
      },
      {
        type: "emoji",
        id: "tiki-room-x24",
        emojis: "\u{1F99C} \u{1F3A4} \u{1F33A}",
        hint: "Where the birds sing words and the flowers croon.",
        choices: ["The Enchanted Tiki Room", "Jungle Cruise", "Dumbo", "Country Bear Jamboree"],
        answer: 0
      },
      {
        type: "emoji",
        id: "tiki-room-x25",
        emojis: "\u{1F99C} \u{1F9DE} \u{1F40D}",
        hint: "A loud parrot whose boss is a sorcerer.",
        choices: ["Zazu", "Iago", "Jos\xE9", "Polly"],
        answer: 1
      }
    ]
  },
  "swiss-family-treehouse": {
    facts: [
      // evidence: "Discover open-air rooms brimming with a bevy of 19th-century articles salvaged from the wreck."
      {
        text: "The open-air rooms are filled with 1800s-style things saved from the family\u2019s shipwreck.",
        source: SFT_DIS
      },
      // evidence: "Directed by: Ken Annakin"
      { text: "The 1960 movie Swiss Family Robinson was directed by Ken Annakin.", source: SFR },
      // evidence: "Father, Fritz, and Ernst construct an elaborate tree house complete with a water wheel."
      {
        text: "In the movie, Father, Fritz and Ernst build a fancy treehouse with a water wheel, just like this one.",
        source: SFR
      },
      // evidence: "The version there was named "La Cabane des Robinson.""
      { text: "Disneyland Paris has its own version called La Cabane des Robinson.", source: SFT }
    ],
    quests: [
      // evidence: "climb a total of 116 stairs"
      {
        type: "guess",
        id: "swiss-family-treehouse-x1",
        question: "How many stairs do you climb in the Treehouse?",
        answer: 116,
        min: 20,
        max: 300,
        step: 2,
        unit: "stairs",
        tolerance: 15,
        explain: "A total of 116 stairs. Count them as you go!",
        source: SFT_DIS
      },
      // evidence: "6 stories above Magic Kingdom park"
      {
        type: "trivia",
        id: "swiss-family-treehouse-x2",
        question: "About how high up is the top of the Treehouse?",
        choices: ["2 stories", "6 stories", "20 stories", "50 stories"],
        answer: 1,
        explain: "The top is 6 stories above Magic Kingdom.",
        source: SFT_DIS
      },
      // evidence: "At the base of the tree, a large wooden wheel gathers water from a stream."
      {
        type: "trivia",
        id: "swiss-family-treehouse-x3",
        question: "What gathers water from the stream at the bottom of the tree?",
        choices: ["A bucket on a rope", "A large wooden wheel", "An elephant\u2019s trunk", "A garden hose"],
        answer: 1,
        explain: "A big wooden wheel scoops up water, and clever contraptions carry it up to the rooms.",
        source: SFT_DIS
      },
      // evidence: "Swiss Family Robinson is a 1960 American adventure film"
      {
        type: "trivia",
        id: "swiss-family-treehouse-x4",
        question: "What year did the movie Swiss Family Robinson come out?",
        choices: ["1937", "1960", "1985", "2005"],
        answer: 1,
        explain: "It came out in 1960.",
        source: SFR
      },
      // evidence: "Youngest son Francis collects various animals including a young Asian elephant, a monkey, and an ostrich."
      {
        type: "trivia",
        id: "swiss-family-treehouse-x5",
        question: "In the movie, which animal does Francis NOT collect?",
        choices: ["A young elephant", "A monkey", "An ostrich", "A penguin"],
        answer: 3,
        explain: "Francis collects an elephant, a monkey and an ostrich. No penguins on this tropical island!",
        source: SFR
      },
      // evidence: "shot in Tobago and Pinewood Studios outside London"
      {
        type: "truefalse",
        id: "swiss-family-treehouse-x6",
        statement: "Swiss Family Robinson was partly filmed on the island of Tobago.",
        answer: true,
        explain: "Fact! It was shot in Tobago and at a studio near London.",
        source: SFR
      },
      // evidence: "the second feature film based on the 1812 novel The Swiss Family Robinson by Johann David Wyss"
      {
        type: "guess",
        id: "swiss-family-treehouse-x7",
        question: "The movie is based on a book. What year did the book come out?",
        answer: 1812,
        min: 1700,
        max: 1960,
        step: 1,
        unit: "",
        tolerance: 20,
        explain: "Johann David Wyss\u2019s novel came out in 1812.",
        source: SFR
      },
      // evidence: "Father, eldest son Fritz, and middle son Ernst"
      {
        type: "trivia",
        id: "swiss-family-treehouse-x8",
        question: "What is the name of the oldest Robinson son?",
        choices: ["Fritz", "Ernst", "Francis", "Felix"],
        answer: 0,
        explain: "Fritz is the eldest, Ernst is in the middle, and Francis is the youngest.",
        source: SFR
      },
      // evidence: "the brothers later learning that the "boy" is really a girl named Roberta."
      {
        type: "truefalse",
        id: "swiss-family-treehouse-x9",
        statement: "In the movie, a \u201Cboy\u201D the brothers meet turns out to be a girl named Roberta.",
        answer: true,
        explain: "Fact! Roberta joins the family\u2019s adventures.",
        source: SFR
      },
      // evidence: "Pirates locate the ship, but Father scares them off by putting up a quarantine flag"
      {
        type: "truefalse",
        id: "swiss-family-treehouse-x10",
        statement: "In the movie, Father scares off pirates with a giant fireworks show.",
        answer: false,
        explain: "Fiction! He puts up a quarantine flag so the pirates think everyone is sick.",
        source: SFR
      },
      // evidence: "Tokyo Disneyland also has a Swiss Family Treehouse which opened in 1993"
      {
        type: "order",
        id: "swiss-family-treehouse-x11",
        prompt: "Put these in order, oldest first.",
        items: [
          "The Swiss Family Robinson book",
          "The Swiss Family Robinson movie",
          "Magic Kingdom\u2019s Treehouse opens",
          "Tokyo Disneyland\u2019s Treehouse opens"
        ],
        explain: "1812, 1960, 1971, then Tokyo in 1993.",
        source: SFT
      },
      // evidence: "the Swiss Family Treehouse was one of the original attractions of Adventureland"
      {
        type: "truefalse",
        id: "swiss-family-treehouse-x12",
        statement: "The Treehouse was one of Adventureland\u2019s original attractions when Magic Kingdom opened.",
        answer: true,
        explain: "Fact! It\u2019s been here since 1971.",
        source: SFT
      },
      // evidence: "Cross a bridge at the foot of a large leafy tree and climb handcrafted wooden stairs."
      {
        type: "spy",
        id: "swiss-family-treehouse-x13",
        prompt: "Find the bridge at the foot of the tree. Can you spot the wooden stairs going up?"
      },
      // evidence: "At the base of the tree, a large wooden wheel gathers water from a stream."
      {
        type: "spy",
        id: "swiss-family-treehouse-x14",
        prompt: "Spot the big wooden wheel scooping up water at the bottom of the tree.",
        hint: "Listen for splashing!"
      },
      {
        type: "spy",
        id: "swiss-family-treehouse-x15",
        prompt: "Find something the family could have made from rope or bamboo."
      },
      {
        type: "spy",
        id: "swiss-family-treehouse-x16",
        prompt: "From up high, look for a boat on the river below."
      },
      {
        type: "challenge",
        id: "swiss-family-treehouse-x17",
        prompt: "You\u2019re shipwrecked! Everyone names one thing they\u2019d rescue from the ship first."
      },
      {
        type: "challenge",
        id: "swiss-family-treehouse-x18",
        prompt: "Count the stairs together out loud as you climb. Whisper the even numbers!"
      },
      {
        type: "challenge",
        id: "swiss-family-treehouse-x19",
        prompt: "Invent a contraption to get water to your bedroom. Explain it with only hand motions."
      },
      {
        type: "challenge",
        id: "swiss-family-treehouse-x20",
        prompt: "Act out an island animal race like in the movie. Who will you ride: an ostrich or an elephant?"
      },
      {
        type: "wyr",
        id: "swiss-family-treehouse-x21",
        a: "Sleep in the highest room of the treehouse",
        b: "Sleep on the beach under the stars"
      },
      {
        type: "wyr",
        id: "swiss-family-treehouse-x22",
        a: "Have a pet elephant on the island",
        b: "Have a pet ostrich on the island"
      },
      {
        type: "wyr",
        id: "swiss-family-treehouse-x23",
        a: "Live on the island forever",
        b: "Get rescued and sail home tomorrow"
      },
      {
        type: "wyr",
        id: "swiss-family-treehouse-x24",
        a: "Build the treehouse",
        b: "Decorate the treehouse"
      },
      {
        type: "emoji",
        id: "swiss-family-treehouse-x25",
        emojis: "\u{1F6A2} \u{1F4A5} \u{1F3DD}\uFE0F",
        hint: "How the family ended up on the island.",
        choices: ["A shipwreck", "A hot air balloon", "A treasure hunt", "A swim race"],
        answer: 0
      },
      {
        type: "emoji",
        id: "swiss-family-treehouse-x26",
        emojis: "\u{1F333} \u{1F3E0} \u{1FA9C}",
        hint: "You\u2019re about to climb it!",
        choices: ["A castle", "A treehouse", "A lighthouse", "A cabin"],
        answer: 1
      }
    ]
  },
  "magic-carpets": {
    facts: [
      // evidence: "The shops near this attraction are themed to Agrabah's marketplace from the film."
      { text: "The shops near the ride are themed to Agrabah\u2019s marketplace from Aladdin.", source: MC },
      // evidence: "take off into the air to the soothing sounds of Middle Eastern music"
      { text: "Your carpet takes off to the sound of Middle Eastern music.", source: MC_DIS },
      // evidence: "Manufacturer: Zamperla"
      {
        text: "The ride was built by a ride company called Zamperla and designed by Walt Disney Imagineering.",
        source: MC
      }
    ],
    quests: [
      // evidence: "Climb aboard a colorful, 4-passenger flying “rug”"
      {
        type: "trivia",
        id: "magic-carpets-x1",
        question: "How many riders fit on one magic carpet?",
        choices: ["1", "2", "4", "10"],
        answer: 2,
        explain: "Each colorful flying rug holds 4 passengers.",
        source: MC_DIS
      },
      // evidence: "If you’re sitting in the back row, pressing a magic scarab will tip your flying carpet forward or backward."
      {
        type: "trivia",
        id: "magic-carpets-x2",
        question: "What does the back-row rider press to tip the carpet?",
        choices: ["A magic lamp", "A magic scarab", "A ruby button", "A camel\u2019s nose"],
        answer: 1,
        explain: "A magic scarab tips your carpet forward or backward.",
        source: MC_DIS
      },
      // evidence: "the ride lasts about 90 seconds"
      {
        type: "guess",
        id: "magic-carpets-x3",
        question: "About how many seconds does a carpet ride last?",
        answer: 90,
        min: 10,
        max: 300,
        step: 5,
        unit: "seconds",
        tolerance: 15,
        explain: "About 90 seconds, a minute and a half of flying!",
        source: MC
      },
      // evidence: "Soar around a giant genie bottle and magic lamp"
      {
        type: "trivia",
        id: "magic-carpets-x4",
        question: "What do the carpets fly around?",
        choices: ["A palace tower", "A giant genie bottle and magic lamp", "A huge camel", "A fountain of jewels"],
        answer: 1,
        explain: "You soar around a giant genie bottle and magic lamp.",
        source: MC_DIS
      },
      // evidence: "Opening date: May 23, 2001"
      {
        type: "trivia",
        id: "magic-carpets-x5",
        question: "What year did The Magic Carpets of Aladdin open?",
        choices: ["1971", "1992", "2001", "2015"],
        answer: 2,
        explain: "It opened in May 2001.",
        source: MC
      },
      // evidence: "Frank Welker as Abu, Aladdin's kleptomaniac pet monkey"
      {
        type: "trivia",
        id: "magic-carpets-x6",
        question: "In Aladdin, what kind of animal is Abu?",
        choices: ["A parrot", "A monkey", "A tiger", "A camel"],
        answer: 1,
        explain: "Abu is Aladdin\u2019s pet monkey (who loves grabbing shiny things).",
        source: ALA
      },
      // evidence: "Welker also voices Jasmine's tiger, Rajah"
      {
        type: "trivia",
        id: "magic-carpets-x7",
        question: "What is the name of Jasmine\u2019s tiger?",
        choices: ["Rajah", "Iago", "Abu", "Sultan"],
        answer: 0,
        explain: "Rajah is Jasmine\u2019s tiger.",
        source: ALA
      },
      // evidence: "To woo Jasmine, Aladdin uses his first wish to become a prince."
      {
        type: "trivia",
        id: "magic-carpets-x8",
        question: "What does Aladdin use his first wish for?",
        choices: ["A mountain of gold", "To become a prince", "To fly", "A new pet"],
        answer: 1,
        explain: "He wishes to become a prince to impress Jasmine.",
        source: ALA
      },
      // evidence: "Aladdin instead decides to keep his promise, wishing the Genie free"
      {
        type: "truefalse",
        id: "magic-carpets-x9",
        statement: "At the end of the movie, Aladdin uses a wish to set the Genie free.",
        answer: true,
        explain: "Fact! He keeps his promise and wishes the Genie free.",
        source: ALA
      },
      // evidence: "the location of the film was changed from Baghdad to the fictional Arabian city of Agrabah"
      {
        type: "truefalse",
        id: "magic-carpets-x10",
        statement: "Agrabah, Aladdin\u2019s home city, is a real place you can visit on a map.",
        answer: false,
        explain: "Fiction! Agrabah is a make-believe city made up for the movie.",
        source: ALA
      },
      // evidence: "Aladdin garnered two Academy Awards"
      {
        type: "truefalse",
        id: "magic-carpets-x11",
        statement: "The movie Aladdin won two Academy Awards.",
        answer: true,
        explain: "Fact! It won two Oscars, both for its music.",
        source: ALA
      },
      // evidence: "Aladdin is a 1992 American animated musical" / "Opening date: May 23, 2001" / Paris version "opened March 16, 2002"
      {
        type: "order",
        id: "magic-carpets-x12",
        prompt: "Put these in order, oldest first.",
        items: [
          "The movie Aladdin comes out",
          "The Magic Carpets of Aladdin opens here",
          "Flying Carpets Over Agrabah opens in Paris"
        ],
        explain: "1992, then 2001, then Paris in 2002.",
        source: MC
      },
      // evidence: "Iago, Jafar's sardonic, hot-tempered red lory sidekick"
      {
        type: "trivia",
        id: "magic-carpets-x13",
        question: "Iago is Jafar\u2019s grumpy sidekick. What is he?",
        choices: ["A snake", "A bird", "A cat", "A camel"],
        answer: 1,
        explain: "Iago is a red lory, a kind of colorful parrot.",
        source: ALA
      },
      {
        type: "spy",
        id: "magic-carpets-x14",
        prompt: "Spot something gold and shiny that a genie might live in."
      },
      {
        type: "spy",
        id: "magic-carpets-x15",
        prompt: "Find a pattern that would look great on a flying carpet."
      },
      {
        type: "spy",
        id: "magic-carpets-x16",
        prompt: "Look for something that reminds you of a busy Agrabah marketplace."
      },
      {
        type: "spy",
        id: "magic-carpets-x17",
        prompt: "Watch the carpets fly. Can you spot one tipping forward or backward?"
      },
      {
        type: "challenge",
        id: "magic-carpets-x18",
        prompt: "Everyone make three wishes, but no wishing for more wishes!"
      },
      {
        type: "challenge",
        id: "magic-carpets-x19",
        prompt: "Be the carpet! The carpet can\u2019t talk, so act out \u201CI\u2019m so excited!\u201D with no words."
      },
      {
        type: "challenge",
        id: "magic-carpets-x20",
        prompt: "Do your biggest, silliest Genie entrance: \u201CTa-da!\u201D Best poof wins."
      },
      {
        type: "challenge",
        id: "magic-carpets-x21",
        prompt: "Plan your flight: decide who works the lever up front and who presses the scarab in back."
      },
      {
        type: "wyr",
        id: "magic-carpets-x22",
        a: "Sit up front and control how high you fly",
        b: "Sit in back and tip the carpet forward and backward"
      },
      {
        type: "wyr",
        id: "magic-carpets-x23",
        a: "Have Abu as your pet",
        b: "Have Rajah as your pet"
      },
      {
        type: "wyr",
        id: "magic-carpets-x24",
        a: "Be a genie who grants wishes",
        b: "Be a carpet who can fly anywhere"
      },
      {
        type: "wyr",
        id: "magic-carpets-x25",
        a: "Live in the Sultan\u2019s palace",
        b: "Explore the Cave of Wonders"
      },
      {
        type: "emoji",
        id: "magic-carpets-x26",
        emojis: "\u{1F30D} \u2728 \u{1F319} \u{1F3B6}",
        hint: "A song Aladdin and Jasmine sing on a carpet ride.",
        choices: ["A Whole New World", "Friend Like Me", "Let It Go", "Under the Sea"],
        answer: 0
      },
      {
        type: "emoji",
        id: "magic-carpets-x27",
        emojis: "\u{1F478} \u{1F42F} \u{1F3F0}",
        hint: "A princess who lives in the palace with her tiger.",
        choices: ["Belle", "Jasmine", "Ariel", "Mulan"],
        answer: 1
      },
      {
        type: "emoji",
        id: "magic-carpets-x28",
        emojis: "\u{1F40D} \u{1F9D9}\u200D\u2642\uFE0F \u{1F99C}",
        hint: "A sneaky sorcerer with a parrot sidekick.",
        choices: ["Jafar", "Hook", "Scar", "Hades"],
        answer: 0
      }
    ]
  }
};

// ../src/data/parks/mk-extra/fantasyland-1.ts
var extra2 = {
  "peter-pan": {
    facts: [
      // evidence: "The earliest version of Peter Pan's Flight debuted at Disneyland on the park's opening day in July 1955."
      {
        text: "The very first Peter Pan\u2019s Flight opened at Disneyland on its opening day in July 1955.",
        source: "https://en.wikipedia.org/wiki/Peter_Pan%27s_Flight"
      },
      // evidence: "added scenes with Peter and made use of Audio-Animatronic figures."
      {
        text: "The Walt Disney World version added extra scenes with Peter and uses Audio-Animatronic figures.",
        source: "https://en.wikipedia.org/wiki/Peter_Pan%27s_Flight"
      },
      // evidence: "Five of the six Disney resort destinations feature it."
      {
        text: "Five of the six Disney resorts around the world have a Peter Pan\u2019s Flight.",
        source: "https://en.wikipedia.org/wiki/Peter_Pan%27s_Flight"
      },
      // evidence: "Peter Pan was released on February 5, 1953"
      {
        text: "The movie Peter Pan came out on February 5, 1953.",
        source: "https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)"
      }
    ],
    quests: [
      // evidence: "their elder sister Wendy" tells the Darling boys, "John and Michael," stories
      {
        type: "trivia",
        id: "peter-pan-x1",
        question: "In the movie, what are the names of Wendy\u2019s two little brothers?",
        choices: ["Fred and George", "John and Michael", "Tom and Jerry", "Huey and Dewey"],
        answer: 1,
        explain: "Wendy tells stories about Peter Pan to John and Michael.",
        source: "https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)"
      },
      // evidence: "led by Captain Hook and his first mate, Mr. Smee"
      {
        type: "trivia",
        id: "peter-pan-x2",
        question: "Who is Captain Hook\u2019s first mate?",
        choices: ["Mr. Smee", "Tick-Tock", "Nana", "Starkey the Parrot"],
        answer: 0,
        explain: "Mr. Smee is Captain Hook\u2019s first mate.",
        source: "https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)"
      },
      // evidence: "Based on J. M. Barrie's 1904 play"
      {
        type: "trivia",
        id: "peter-pan-x3",
        question: "The Peter Pan movie is based on a play by which writer?",
        choices: ["Lewis Carroll", "J. M. Barrie", "Hans Christian Andersen", "The Brothers Grimm"],
        answer: 1,
        explain: "It\u2019s based on J. M. Barrie\u2019s 1904 play.",
        source: "https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)"
      },
      // evidence: "\"You Can Fly!\" is one of the film's original songs."
      {
        type: "trivia",
        id: "peter-pan-x4",
        question: "Which song is from the Peter Pan movie?",
        choices: ["\u201CLet It Go\u201D", "\u201CYou Can Fly!\u201D", "\u201CHeigh-Ho\u201D", "\u201CUnder the Sea\u201D"],
        answer: 1,
        explain: "\u201CYou Can Fly!\u201D is one of the movie\u2019s songs.",
        source: "https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)"
      },
      // evidence: "The earliest version of Peter Pan's Flight debuted at Disneyland on the park's opening day in July 1955."
      {
        type: "guess",
        id: "peter-pan-x5",
        question: "In what year did the very first Peter Pan\u2019s Flight open at Disneyland?",
        answer: 1955,
        min: 1940,
        max: 2e3,
        step: 1,
        unit: "",
        tolerance: 3,
        explain: "It opened with Disneyland in July 1955.",
        source: "https://en.wikipedia.org/wiki/Peter_Pan%27s_Flight"
      },
      // evidence: "Five of the six Disney resort destinations feature it."
      {
        type: "guess",
        id: "peter-pan-x6",
        question: "How many of the six Disney resorts around the world have Peter Pan\u2019s Flight?",
        answer: 5,
        min: 1,
        max: 6,
        step: 1,
        unit: "resorts",
        tolerance: 0,
        explain: "Five of the six Disney resorts have it!",
        source: "https://en.wikipedia.org/wiki/Peter_Pan%27s_Flight"
      },
      // evidence: "his best friend, the hot-headed pixie Tinker Bell"
      {
        type: "truefalse",
        id: "peter-pan-x7",
        statement: "Tinker Bell is Peter Pan\u2019s best friend in the movie.",
        answer: true,
        explain: "Fact! The pixie Tinker Bell is Peter\u2019s best friend.",
        source: "https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)"
      },
      // evidence: "Peter Pan was released on February 5, 1953"
      {
        type: "truefalse",
        id: "peter-pan-x8",
        statement: "The Peter Pan movie came out after this ride opened in 1971.",
        answer: false,
        explain: "Fiction! The movie came out in 1953, long before 1971.",
        source: "https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)"
      },
      // evidence: (film page) "released on February 5, 1953"; (ride page) "debuted at Disneyland on the park's opening day in July 1955" / "opened two days after the park's grand opening on October 3, 1971"
      {
        type: "order",
        id: "peter-pan-x9",
        prompt: "Put these in order, oldest first.",
        items: ["Peter Pan movie comes out", "Ride opens at Disneyland", "Ride opens at Magic Kingdom"],
        explain: "Movie in 1953, Disneyland ride in 1955, Magic Kingdom ride in 1971.",
        source: "https://en.wikipedia.org/wiki/Peter_Pan%27s_Flight"
      },
      // evidence: "Peter is the leader of the Lost Boys of Never Land."
      {
        type: "trivia",
        id: "peter-pan-x10",
        question: "Peter Pan is the leader of which group?",
        choices: ["The Pirates", "The Lost Boys", "The Darlings", "The Mermaids"],
        answer: 1,
        explain: "Peter leads the Lost Boys of Never Land.",
        source: "https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)"
      },
      // evidence: queue is "the Darlings' house" (per source reference title)
      {
        type: "spy",
        id: "peter-pan-x11",
        prompt: "You\u2019re in the Darlings\u2019 house! Spot something that looks like it belongs in a children\u2019s bedroom.",
        hint: "Think toys, beds or storybooks."
      },
      {
        type: "spy",
        id: "peter-pan-x12",
        prompt: "Find something shaped like a star. Is it the second star to the right?"
      },
      {
        type: "spy",
        id: "peter-pan-x13",
        prompt: "Spot something that would look right on a pirate ship.",
        hint: "Ropes, anchors, flags or treasure!"
      },
      { type: "spy", id: "peter-pan-x14", prompt: "Look for something that could be a clock. Tick-tock, tick-tock!" },
      {
        type: "challenge",
        id: "peter-pan-x15",
        prompt: "Everyone do your best Captain Hook laugh. Who sounds the most villainous?"
      },
      {
        type: "challenge",
        id: "peter-pan-x16",
        prompt: "Crow like Peter Pan! Take turns giving your loudest (but friendly) rooster crow."
      },
      {
        type: "challenge",
        id: "peter-pan-x17",
        prompt: "Think a happy thought and strike your best flying pose. Hold it for 10 seconds!"
      },
      {
        type: "challenge",
        id: "peter-pan-x18",
        prompt: "Play \u201CTinker Bell says\u201D: one person is Tink and can only jingle and point. Everyone else guesses what she means!"
      },
      {
        type: "wyr",
        id: "peter-pan-x19",
        a: "Live with the Lost Boys in Never Land",
        b: "Sail with the pirates on the Jolly Roger"
      },
      { type: "wyr", id: "peter-pan-x20", a: "Have Tinker Bell as your best friend", b: "Have Nana as your nanny dog" },
      {
        type: "wyr",
        id: "peter-pan-x21",
        a: "Lose your shadow like Peter",
        b: "Lose your hand like Captain Hook (to a friendly crocodile)"
      },
      {
        type: "wyr",
        id: "peter-pan-x22",
        a: "Fly over London at night",
        b: "Swim with the mermaids in Mermaid Lagoon"
      },
      {
        type: "emoji",
        id: "peter-pan-x23",
        emojis: "\u{1F40A} \u23F0",
        hint: "He swallowed something that goes tick-tock.",
        choices: ["Tick-Tock the Crocodile", "Mr. Smee", "Nana", "Sebastian"],
        answer: 0
      },
      {
        type: "emoji",
        id: "peter-pan-x24",
        emojis: "\u{1F3F4}\u200D\u2620\uFE0F \u{1FA9D} \u{1F3A9}",
        hint: "He\u2019s scared of a ticking croc.",
        choices: ["Mr. Smee", "Captain Hook", "Peter Pan", "John Darling"],
        answer: 1
      },
      {
        type: "emoji",
        id: "peter-pan-x25",
        emojis: "\u{1F415} \u{1F476} \u{1F6CF}\uFE0F",
        hint: "She looks after the Darling children.",
        choices: ["Pluto", "Nana", "Max", "Lady"],
        answer: 1
      },
      {
        type: "emoji",
        id: "peter-pan-x26",
        emojis: "\u2728 \u{1F9DA} \u{1F514}",
        hint: "Sprinkle some pixie dust!",
        choices: ["Fairy Godmother", "Tinker Bell", "Blue Fairy", "Flora"],
        answer: 1
      }
    ]
  },
  "small-world": {
    facts: [
      // evidence: "Mary Blair was responsible for the attraction's whimsical design and color styling."
      {
        text: "Artist Mary Blair created the ride\u2019s whimsical design and bright colors.",
        source: "https://en.wikipedia.org/wiki/It%27s_a_Small_World"
      },
      // evidence: "Pepsi approached Disney with a plan for a tribute to UNICEF, the United Nations Children's Fund."
      {
        text: "The ride began as a tribute to UNICEF, the United Nations Children\u2019s Fund, at the 1964 World\u2019s Fair.",
        source: "https://en.wikipedia.org/wiki/It%27s_a_Small_World"
      },
      // evidence: "In 2021, for the park's 50th anniversary, its facade was repainted in bright colors."
      {
        text: "For Magic Kingdom\u2019s 50th anniversary in 2021, the ride\u2019s front was repainted in bright colors.",
        source: "https://en.wikipedia.org/wiki/It%27s_a_Small_World"
      },
      // evidence: "the song, at 48 seconds long, is played 1,200 times during a 16-hour operating day."
      {
        text: "The song is only 48 seconds long, which is why it repeats so many times.",
        source: "https://en.wikipedia.org/wiki/It%27s_a_Small_World"
      }
    ],
    quests: [
      // evidence: "According to Time, the Sherman Brothers' song \"It's a Small World\" is the most publicly performed song of all time."
      {
        type: "truefalse",
        id: "small-world-x1",
        statement: "\u201CIt\u2019s a Small World\u201D has been called the most publicly performed song of all time.",
        answer: true,
        explain: "Fact! Time magazine called it the most publicly performed song ever.",
        source: "https://en.wikipedia.org/wiki/It%27s_a_Small_World"
      },
      // evidence: "the song, at 48 seconds long"
      {
        type: "guess",
        id: "small-world-x2",
        question: "How many seconds long is one play of the song?",
        answer: 48,
        min: 10,
        max: 180,
        step: 1,
        unit: "seconds",
        tolerance: 8,
        explain: "Just 48 seconds, so it plays over and over!",
        source: "https://en.wikipedia.org/wiki/It%27s_a_Small_World"
      },
      // evidence: "the song had played nearly 50 million times worldwide on the attractions alone"
      {
        type: "guess",
        id: "small-world-x3",
        question: "By 2014, about how many MILLION times had the song played on the rides worldwide?",
        answer: 50,
        min: 1,
        max: 200,
        step: 1,
        unit: "million times",
        tolerance: 10,
        explain: "Nearly 50 million times!",
        source: "https://en.wikipedia.org/wiki/It%27s_a_Small_World"
      },
      // evidence: "Mary Blair was responsible for the attraction's whimsical design and color styling."
      {
        type: "trivia",
        id: "small-world-x4",
        question: "Which artist created the ride\u2019s colorful look?",
        choices: ["Mary Blair", "Mary Poppins", "Walt\u2019s mom", "Snow White"],
        answer: 0,
        explain: "Mary Blair gave the ride its whimsical design and colors.",
        source: "https://en.wikipedia.org/wiki/It%27s_a_Small_World"
      },
      // evidence: "Pepsi approached Disney with a plan for a tribute to UNICEF, the United Nations Children's Fund."
      {
        type: "trivia",
        id: "small-world-x5",
        question: "At the 1964 World\u2019s Fair, the ride was a tribute to which children\u2019s charity?",
        choices: ["The Red Cross", "UNICEF", "The Scouts", "The Zoo"],
        answer: 1,
        explain: "It honored UNICEF, the United Nations Children\u2019s Fund.",
        source: "https://en.wikipedia.org/wiki/It%27s_a_Small_World"
      },
      // evidence: "The ride was closed in May 2004 for refurbishment, which included a new entrance"
      {
        type: "trivia",
        id: "small-world-x6",
        question: "What did this ride get when it was refurbished in 2004?",
        choices: ["A roller coaster drop", "A new entrance", "A water slide", "Rocket boats"],
        answer: 1,
        explain: "The 2004 refurbishment included a new entrance.",
        source: "https://en.wikipedia.org/wiki/It%27s_a_Small_World"
      },
      // evidence: "The attraction lacks the elaborate facade present on the Disneyland version of the attraction, and it is also smaller in scale"
      {
        type: "truefalse",
        id: "small-world-x7",
        statement: "The Magic Kingdom ride is bigger than the Disneyland version.",
        answer: false,
        explain: "Fiction! The Magic Kingdom version is smaller in scale.",
        source: "https://en.wikipedia.org/wiki/It%27s_a_Small_World"
      },
      // evidence: "at the end of the ride, where figures from every nationality sang side-by-side."
      {
        type: "truefalse",
        id: "small-world-x8",
        statement: "At the end of the ride, dolls from all the different countries sing together.",
        answer: true,
        explain: "Fact! In the finale, figures from every nationality sing side by side.",
        source: "https://en.wikipedia.org/wiki/It%27s_a_Small_World"
      },
      // evidence: "In 2021, for the park's 50th anniversary, its facade was repainted in bright colors."
      {
        type: "guess",
        id: "small-world-x9",
        question: "For which Magic Kingdom anniversary was the ride\u2019s front repainted in bright colors?",
        answer: 50,
        min: 5,
        max: 100,
        step: 5,
        unit: "years",
        tolerance: 0,
        explain: "The 50th anniversary, in 2021.",
        source: "https://en.wikipedia.org/wiki/It%27s_a_Small_World"
      },
      // evidence: "The ride was closed in May 2004..." / "In 2021, for the park's 50th anniversary, its facade was repainted"
      {
        type: "order",
        id: "small-world-x10",
        prompt: "Put these Magic Kingdom ride moments in order, oldest first.",
        items: ["Ride opens", "New entrance added", "Front repainted for the 50th"],
        explain: "Opened 1971, new entrance in 2004, repainted in 2021.",
        source: "https://en.wikipedia.org/wiki/It%27s_a_Small_World"
      },
      {
        type: "spy",
        id: "small-world-x11",
        prompt: "Find something on the building that looks like it came from a toy box."
      },
      {
        type: "spy",
        id: "small-world-x12",
        prompt: "Spot every color of the rainbow somewhere around you. Red, orange, yellow, green, blue, purple!"
      },
      {
        type: "spy",
        id: "small-world-x13",
        prompt: "Find a shape on the ride\u2019s front that you could draw with one line: a circle, triangle or square."
      },
      {
        type: "spy",
        id: "small-world-x14",
        prompt: "Look for something that reminds you of a country you\u2019d love to visit.",
        hint: "Towers, flags, patterns or buildings all count."
      },
      {
        type: "challenge",
        id: "small-world-x15",
        prompt: "Hum the song without opening your mouth. First person to giggle loses!"
      },
      {
        type: "challenge",
        id: "small-world-x16",
        prompt: "Make up a new verse about your family to the \u201Csmall world\u201D tune."
      },
      {
        type: "challenge",
        id: "small-world-x17",
        prompt: "Take turns naming a country for each letter of the alphabet. How far can you get?"
      },
      {
        type: "challenge",
        id: "small-world-x18",
        prompt: "Freeze like a doll! When someone says \u201Csmall world,\u201D everyone holds a doll pose."
      },
      {
        type: "wyr",
        id: "small-world-x19",
        a: "Sail through every country on a little boat",
        b: "Fly over every country in a hot-air balloon"
      },
      {
        type: "wyr",
        id: "small-world-x20",
        a: "Be one of the singing dolls for a day",
        b: "Design a brand-new room for the ride"
      },
      {
        type: "wyr",
        id: "small-world-x21",
        a: "Speak every language in the world",
        b: "Play every instrument in the world"
      },
      {
        type: "wyr",
        id: "small-world-x22",
        a: "Have the song stuck in your head all day",
        b: "Have to sing it out loud once an hour"
      },
      {
        type: "emoji",
        id: "small-world-x23",
        emojis: "\u{1F30D} \u{1F90F} \u{1F3B6}",
        hint: "The song this ride is famous for.",
        choices: ["\u201CIt\u2019s a Small World\u201D", "\u201CUnder the Sea\u201D", "\u201CHeigh-Ho\u201D", "\u201CLet It Go\u201D"],
        answer: 0
      },
      {
        type: "emoji",
        id: "small-world-x24",
        emojis: "\u{1F6F6} \u{1F30E} \u{1F38E}",
        hint: "You\u2019re about to do this!",
        choices: ["A boat ride around the world", "A train to the mine", "A flight to Never Land", "A teacup spin"],
        answer: 0
      }
    ]
  },
  "seven-dwarfs": {
    facts: [
      // evidence: "Manufactured by Vekoma"
      {
        text: "The Mine Train roller coaster was built by the ride maker Vekoma.",
        source: "https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train"
      },
      // evidence: "Length: 2,000 ft (610 m)"
      {
        text: "The track is about 2,000 feet (610 meters) long.",
        source: "https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train"
      },
      // evidence: "There are 12 spigots each representing a note on the chromatic scale."
      {
        text: "Each of the 12 musical spigots in the queue plays a different note of the chromatic scale.",
        source: "https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train"
      },
      // evidence: "It is the first animated feature film produced in the United States and the first cel animated feature film."
      {
        text: "Snow White and the Seven Dwarfs (1937) was the first cel-animated feature film.",
        source: "https://en.wikipedia.org/wiki/Snow_White_and_the_Seven_Dwarfs_(1937_film)"
      }
    ],
    quests: [
      // evidence: "Drop: 39 ft (12 m)"
      {
        type: "guess",
        id: "seven-dwarfs-x1",
        question: "How many feet is the Mine Train\u2019s biggest drop?",
        answer: 39,
        min: 5,
        max: 150,
        step: 1,
        unit: "feet",
        tolerance: 6,
        explain: "The drop is 39 feet (12 m).",
        source: "https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train"
      },
      // evidence: "Duration: 2:50"
      {
        type: "trivia",
        id: "seven-dwarfs-x2",
        question: "About how long is the ride?",
        choices: ["30 seconds", "Under 3 minutes", "10 minutes", "Half an hour"],
        answer: 1,
        explain: "It lasts 2 minutes and 50 seconds.",
        source: "https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train"
      },
      // evidence: "Length: 2,000 ft (610 m)"
      {
        type: "guess",
        id: "seven-dwarfs-x3",
        question: "How many feet long is the track?",
        answer: 2e3,
        min: 200,
        max: 6e3,
        step: 100,
        unit: "feet",
        tolerance: 300,
        explain: "About 2,000 feet (610 m) of track!",
        source: "https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train"
      },
      // evidence: "replacing 20,000 Leagues Under the Sea: Submarine Voyage (1971-94)"
      {
        type: "trivia",
        id: "seven-dwarfs-x4",
        question: "Long ago, this spot was home to a ride with what kind of vehicle?",
        choices: ["Submarines", "Rocket ships", "Hot-air balloons", "Horses"],
        answer: 0,
        explain: "It replaced 20,000 Leagues Under the Sea: Submarine Voyage (1971\u201394).",
        source: "https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train"
      },
      // evidence: "both versions have a hut with Snow White dancing"
      {
        type: "truefalse",
        id: "seven-dwarfs-x5",
        statement: "At the end of the ride you pass a cottage where Snow White is dancing.",
        answer: true,
        explain: "Fact! Snow White dances in the dwarfs\u2019 cottage.",
        source: "https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train"
      },
      // evidence: "named Doc, Grumpy, Happy, Sleepy, Bashful, Sneezy, and Dopey"
      {
        type: "truefalse",
        id: "seven-dwarfs-x6",
        statement: "One of the seven dwarfs is named Grouchy.",
        answer: false,
        explain: "Fiction! It\u2019s Grumpy, along with Doc, Happy, Sleepy, Bashful, Sneezy and Dopey.",
        source: "https://en.wikipedia.org/wiki/Snow_White_and_the_Seven_Dwarfs_(1937_film)"
      },
      // evidence: "Disney received a full-size Oscar statuette and seven miniature ones"
      {
        type: "trivia",
        id: "seven-dwarfs-x7",
        question: "What special award did Walt Disney get for the Snow White movie?",
        choices: ["A golden apple", "One big Oscar and seven tiny ones", "Seven gold pickaxes", "A crystal crown"],
        answer: 1,
        explain: "He received a full-size Oscar plus seven miniature ones!",
        source: "https://en.wikipedia.org/wiki/Snow_White_and_the_Seven_Dwarfs_(1937_film)"
      },
      // evidence: "based on the 1812 German fairy tale \"Snow White\" by the Brothers Grimm"
      {
        type: "trivia",
        id: "seven-dwarfs-x8",
        question: "Who first wrote down the fairy tale of Snow White?",
        choices: ["The Brothers Grimm", "J. M. Barrie", "Lewis Carroll", "Dr. Seuss"],
        answer: 0,
        explain: "It\u2019s based on the Brothers Grimm\u2019s 1812 fairy tale.",
        source: "https://en.wikipedia.org/wiki/Snow_White_and_the_Seven_Dwarfs_(1937_film)"
      },
      // evidence: "creates a poisoned apple that will put whoever eats it into Sleeping Death."
      {
        type: "trivia",
        id: "seven-dwarfs-x9",
        question: "What tricky fruit does the Queen give Snow White?",
        choices: ["A banana", "A pear", "An apple", "A cherry"],
        answer: 2,
        explain: "A poisoned apple that puts her into a Sleeping Death.",
        source: "https://en.wikipedia.org/wiki/Snow_White_and_the_Seven_Dwarfs_(1937_film)"
      },
      // evidence: "Snow White and the Seven Dwarfs is a 1937 American animated musical" / "The Magic Kingdom version opened to the public on May 28, 2014"
      {
        type: "order",
        id: "seven-dwarfs-x10",
        prompt: "Put these in order, oldest first.",
        items: ["Brothers Grimm fairy tale", "Snow White movie", "Mine Train opens"],
        explain: "Fairy tale in 1812, movie in 1937, Mine Train in 2014.",
        source: "https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train"
      },
      // evidence: "Speed: 34 mph" ... "5 trains with 5 cars"
      {
        type: "guess",
        id: "seven-dwarfs-x11",
        question: "How many trains run on the Mine Train?",
        answer: 5,
        min: 1,
        max: 12,
        step: 1,
        unit: "trains",
        tolerance: 0,
        explain: "5 trains, each with 5 cars.",
        source: "https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train"
      },
      // evidence: "There are 12 spigots each representing a note on the chromatic scale."
      {
        type: "spy",
        id: "seven-dwarfs-x12",
        prompt: "Find the musical spigots and try to play a song. Can you play \u201CHeigh-Ho\u201D?",
        hint: "There are 12, each a different note."
      },
      { type: "spy", id: "seven-dwarfs-x13", prompt: "Spot something sparkly that looks like a gem or jewel." },
      { type: "spy", id: "seven-dwarfs-x14", prompt: "Find something made of wood that the dwarfs might have carved." },
      {
        type: "spy",
        id: "seven-dwarfs-x15",
        prompt: "Look for a tool a miner would use.",
        hint: "Pickaxes, buckets, lanterns or carts!"
      },
      {
        type: "challenge",
        id: "seven-dwarfs-x16",
        prompt: "March in place and sing \u201CHeigh-Ho\u201D like you\u2019re heading home from the mine."
      },
      {
        type: "challenge",
        id: "seven-dwarfs-x17",
        prompt: "Act out a dwarf and let the group guess which one. Try Sneezy or Sleepy!"
      },
      {
        type: "challenge",
        id: "seven-dwarfs-x18",
        prompt: "Whistle while you wait! Who can whistle a tune the longest?"
      },
      {
        type: "challenge",
        id: "seven-dwarfs-x19",
        prompt: "Be the Magic Mirror: say something kind about each person in your group."
      },
      { type: "wyr", id: "seven-dwarfs-x20", a: "Dig for diamonds with the dwarfs", b: "Cook dinner with Snow White" },
      {
        type: "wyr",
        id: "seven-dwarfs-x21",
        a: "Have a magic mirror that answers any question",
        b: "Have a pickaxe that always finds gems"
      },
      {
        type: "wyr",
        id: "seven-dwarfs-x22",
        a: "Be as cheerful as Happy all the time",
        b: "Be as cozy as Sleepy all the time"
      },
      { type: "wyr", id: "seven-dwarfs-x23", a: "Live in the dwarfs\u2019 cottage", b: "Live in the Queen\u2019s castle" },
      {
        type: "emoji",
        id: "seven-dwarfs-x24",
        emojis: "\u{1F634} \u{1F4A4} \u{1F6CF}\uFE0F",
        hint: "He can\u2019t keep his eyes open.",
        choices: ["Dopey", "Sleepy", "Doc", "Bashful"],
        answer: 1
      },
      {
        type: "emoji",
        id: "seven-dwarfs-x25",
        emojis: "\u{1FA9E} \u{1F9D9}\u200D\u2640\uFE0F \u{1F34E}",
        hint: "She asks \u201CWho\u2019s the fairest of them all?\u201D",
        choices: ["The Evil Queen", "Ursula", "The Queen of Hearts", "Maleficent"],
        answer: 0
      },
      {
        type: "emoji",
        id: "seven-dwarfs-x26",
        emojis: "\u{1F620} \u{1F4AA} \u{1F9D4}",
        hint: "He\u2019s not a fan of hugs at first.",
        choices: ["Happy", "Grumpy", "Sneezy", "Doc"],
        answer: 1
      }
    ]
  },
  "little-mermaid": {
    facts: [
      // evidence: "Guests board one of 105 Omnimover vehicles themed as large, colorful clamshells."
      {
        text: "The clamshells are an Omnimover ride system, a chain of vehicles that never stops moving.",
        source: "https://en.wikipedia.org/wiki/Under_the_Sea:_Journey_of_the_Little_Mermaid"
      },
      // evidence: "The Little Mermaid: Ariel's Undersea Adventure opened on June 3, 2011."
      {
        text: "A sister version of this ride opened at Disney California Adventure in 2011.",
        source: "https://en.wikipedia.org/wiki/Under_the_Sea:_Journey_of_the_Little_Mermaid"
      },
      // evidence: "Loosely based on the 1837 Danish fairy tale"
      {
        text: "The Little Mermaid movie is loosely based on an 1837 Danish fairy tale by Hans Christian Andersen.",
        source: "https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)"
      },
      // evidence: "It also marked the start of the era known as the Disney Renaissance."
      {
        text: "The Little Mermaid (1989) kicked off the era called the Disney Renaissance.",
        source: "https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)"
      }
    ],
    quests: [
      // evidence: "The Little Mermaid was released in theaters on November 17, 1989"
      {
        type: "guess",
        id: "little-mermaid-x1",
        question: "In what year did The Little Mermaid movie come out?",
        answer: 1989,
        min: 1950,
        max: 2020,
        step: 1,
        unit: "",
        tolerance: 3,
        explain: "It came out November 17, 1989.",
        source: "https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)"
      },
      // evidence: "Eric's excitable pet sheepdog"
      {
        type: "trivia",
        id: "little-mermaid-x2",
        question: "What kind of pet does Prince Eric have?",
        choices: ["A parrot", "A sheepdog", "A cat", "A horse"],
        answer: 1,
        explain: "Max is Eric\u2019s excitable sheepdog.",
        source: "https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)"
      },
      // evidence: "Ursula's symbiotic and insidious pet green moray eels"
      {
        type: "trivia",
        id: "little-mermaid-x3",
        question: "What kind of animals are Ursula\u2019s pets Flotsam and Jetsam?",
        choices: ["Sharks", "Eels", "Octopuses", "Jellyfish"],
        answer: 1,
        explain: "They\u2019re green moray eels.",
        source: "https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)"
      },
      // evidence: "a red Jamaican-accented Caribbean crab who serves as King Triton's advisor and court composer"
      {
        type: "trivia",
        id: "little-mermaid-x4",
        question: "What is Sebastian\u2019s job for King Triton?",
        choices: ["Chef", "Advisor and court composer", "Royal guard", "Mail carrier"],
        answer: 1,
        explain: "Sebastian is Triton\u2019s advisor and court composer.",
        source: "https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)"
      },
      // evidence: "for three days in exchange for Ariel's voice"
      {
        type: "guess",
        id: "little-mermaid-x5",
        question: "For how many days does Ursula make Ariel human?",
        answer: 3,
        min: 1,
        max: 10,
        step: 1,
        unit: "days",
        tolerance: 0,
        explain: "Three days, in exchange for Ariel\u2019s voice.",
        source: "https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)"
      },
      // evidence: "The film won two Academy Awards for Best Original Score and Best Original Song"
      {
        type: "truefalse",
        id: "little-mermaid-x6",
        statement: "\u201CUnder the Sea\u201D won an Academy Award for Best Original Song.",
        answer: true,
        explain: "Fact! The film won Oscars for Best Original Score and Best Original Song.",
        source: "https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)"
      },
      // evidence: "a dimwitted seagull who gives inaccurate information about humans"
      {
        type: "truefalse",
        id: "little-mermaid-x7",
        statement: "Scuttle the seagull is an expert who always gets human stuff right.",
        answer: false,
        explain: "Fiction! Scuttle gives silly, wrong information about humans.",
        source: "https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)"
      },
      // evidence: "The Little Mermaid: Ariel's Undersea Adventure opened on June 3, 2011." / "on December 6, 2012 at Magic Kingdom"
      {
        type: "order",
        id: "little-mermaid-x8",
        prompt: "Put these in order, oldest first.",
        items: ["The Little Mermaid movie", "California Adventure ride opens", "Magic Kingdom ride opens"],
        explain: "Movie in 1989, California ride in 2011, this ride in 2012.",
        source: "https://en.wikipedia.org/wiki/Under_the_Sea:_Journey_of_the_Little_Mermaid"
      },
      // evidence: songs "Part of Your World," "Under the Sea," "Poor, Unfortunate Souls," "Kiss the Girl"
      {
        type: "trivia",
        id: "little-mermaid-x9",
        question: "Which of these songs do you hear on this ride?",
        choices: ["\u201CKiss the Girl\u201D", "\u201CLet It Go\u201D", "\u201CYou Can Fly!\u201D", "\u201CHeigh-Ho\u201D"],
        answer: 0,
        explain: "The ride features \u201CKiss the Girl,\u201D plus \u201CUnder the Sea,\u201D \u201CPart of Your World\u201D and more.",
        source: "https://en.wikipedia.org/wiki/Under_the_Sea:_Journey_of_the_Little_Mermaid"
      },
      // evidence: "the underwater passage opens to reveal Ariel in her grotto."
      {
        type: "trivia",
        id: "little-mermaid-x10",
        question: "Where do you first see Ariel on the ride?",
        choices: ["On a ship", "In her grotto", "In a castle", "On the beach"],
        answer: 1,
        explain: "The passage opens to reveal Ariel in her grotto.",
        source: "https://en.wikipedia.org/wiki/Under_the_Sea:_Journey_of_the_Little_Mermaid"
      },
      // evidence: "featuring Prince Eric's castle and the surrounding cliffs"
      {
        type: "spy",
        id: "little-mermaid-x11",
        prompt: "Find Prince Eric\u2019s castle up on the cliffs. Can you spot a tower?"
      },
      {
        type: "spy",
        id: "little-mermaid-x12",
        prompt: "Spot something Scuttle might call a \u201Chuman treasure.\u201D",
        hint: "Old ship parts, ropes or anything shiny!"
      },
      { type: "spy", id: "little-mermaid-x13", prompt: "Look for something shaped like a seashell or a sea creature." },
      { type: "spy", id: "little-mermaid-x14", prompt: "Find something that looks like water or waves." },
      {
        type: "challenge",
        id: "little-mermaid-x15",
        prompt: "Swim like a mermaid in place! Everyone wiggle your \u201Ctail\u201D without moving your feet."
      },
      {
        type: "challenge",
        id: "little-mermaid-x16",
        prompt: "Be Scuttle: pick an everyday object and give it a silly new name and use."
      },
      {
        type: "challenge",
        id: "little-mermaid-x17",
        prompt: "Lose your voice like Ariel! Tell a story using only hand signals for one minute."
      },
      {
        type: "challenge",
        id: "little-mermaid-x18",
        prompt: "Sing \u201CUnder the Sea\u201D together, but in your best crab voice."
      },
      {
        type: "wyr",
        id: "little-mermaid-x19",
        a: "Have a fin like Ariel",
        b: "Have legs and live in Prince Eric\u2019s castle"
      },
      {
        type: "wyr",
        id: "little-mermaid-x20",
        a: "Have Flounder as your best friend",
        b: "Have Sebastian as your music teacher"
      },
      {
        type: "wyr",
        id: "little-mermaid-x21",
        a: "Collect treasures from shipwrecks",
        b: "Ride a seahorse through a coral reef"
      },
      {
        type: "wyr",
        id: "little-mermaid-x22",
        a: "Be a royal sea king or queen",
        b: "Be a seagull who flies anywhere"
      },
      {
        type: "emoji",
        id: "little-mermaid-x23",
        emojis: "\u{1F980} \u{1F3B5} \u{1F30A}",
        hint: "He conducts the band under the sea.",
        choices: ["Flounder", "Sebastian", "Scuttle", "Max"],
        answer: 1
      },
      {
        type: "emoji",
        id: "little-mermaid-x24",
        emojis: "\u{1F419} \u{1F9D9}\u200D\u2640\uFE0F \u{1F41A}",
        hint: "She takes Ariel\u2019s voice.",
        choices: ["Ursula", "The Evil Queen", "Maleficent", "Cruella"],
        answer: 0
      },
      {
        type: "emoji",
        id: "little-mermaid-x25",
        emojis: "\u{1F374} \u{1F487}\u200D\u2640\uFE0F",
        hint: "Scuttle\u2019s name for this is a \u201Cdinglehopper.\u201D",
        choices: ["A fork", "A spoon", "A pipe", "A comb"],
        answer: 0
      },
      {
        type: "emoji",
        id: "little-mermaid-x26",
        emojis: "\u{1F531} \u{1F451} \u{1F30A}",
        hint: "Ariel\u2019s dad.",
        choices: ["Prince Eric", "King Triton", "Neptune the Fish", "Grimsby"],
        answer: 1
      }
    ]
  },
  dumbo: {
    facts: [
      // evidence: "The original attraction opened at Disneyland on August 16, 1955."
      {
        text: "The first Dumbo ride opened at Disneyland on August 16, 1955.",
        source: "https://en.wikipedia.org/wiki/Dumbo_the_Flying_Elephant"
      },
      // evidence: "Inside guests receive ticket-themed pagers where they can wait until prompted."
      {
        text: "Inside the Big Top queue, families get circus-ticket pagers that buzz when it\u2019s time to ride.",
        source: "https://en.wikipedia.org/wiki/Dumbo_the_Flying_Elephant"
      },
      // evidence: "At 64 minutes, it is one of the studio's shortest animated features"
      {
        text: "The Dumbo movie is just 64 minutes long, one of Disney\u2019s shortest animated features.",
        source: "https://en.wikipedia.org/wiki/Dumbo_(1941_film)"
      },
      // evidence: "For their work on the score, Churchill and Wallace won the Academy Award for Best Original Score"
      {
        text: "Dumbo\u2019s music won the Academy Award for Best Original Score.",
        source: "https://en.wikipedia.org/wiki/Dumbo_(1941_film)"
      }
    ],
    quests: [
      // evidence: "Dumbo is a 1941 American animated musical comedy-drama fantasy film"
      {
        type: "guess",
        id: "dumbo-x1",
        question: "In what year did the Dumbo movie come out?",
        answer: 1941,
        min: 1920,
        max: 2e3,
        step: 1,
        unit: "",
        tolerance: 3,
        explain: "Dumbo came out in 1941.",
        source: "https://en.wikipedia.org/wiki/Dumbo_(1941_film)"
      },
      // evidence: "At 64 minutes, it is one of the studio's shortest animated features"
      {
        type: "guess",
        id: "dumbo-x2",
        question: "How many minutes long is the Dumbo movie?",
        answer: 64,
        min: 30,
        max: 150,
        step: 1,
        unit: "minutes",
        tolerance: 8,
        explain: "Only 64 minutes!",
        source: "https://en.wikipedia.org/wiki/Dumbo_(1941_film)"
      },
      // evidence: "the circus loads up its train, Casey Jr., and sets out on a new tour"
      {
        type: "trivia",
        id: "dumbo-x3",
        question: "What is the name of the circus train in Dumbo?",
        choices: ["Thomas", "Casey Jr.", "Little Toot", "Choo-Choo Charlie"],
        answer: 1,
        explain: "The circus travels on its train, Casey Jr.",
        source: "https://en.wikipedia.org/wiki/Dumbo_(1941_film)"
      },
      // evidence: "a flock of white storks delivers many babies to the animals"
      {
        type: "trivia",
        id: "dumbo-x4",
        question: "In the movie, what kind of bird delivers baby Dumbo?",
        choices: ["A pelican", "A stork", "An owl", "A crow"],
        answer: 1,
        explain: "White storks deliver the circus babies.",
        source: "https://en.wikipedia.org/wiki/Dumbo_(1941_film)"
      },
      // evidence: "Mrs. Jumbo, Dumbo's mother, who not only speaks just once in the film"
      {
        type: "trivia",
        id: "dumbo-x5",
        question: "What is the name of Dumbo\u2019s mom?",
        choices: ["Mrs. Jumbo", "Mrs. Potts", "Mama Ellie", "Mrs. Trunk"],
        answer: 0,
        explain: "Mrs. Jumbo is Dumbo\u2019s mother.",
        source: "https://en.wikipedia.org/wiki/Dumbo_(1941_film)"
      },
      // evidence: "Mrs. Jumbo, Dumbo's mother, who not only speaks just once in the film"
      {
        type: "truefalse",
        id: "dumbo-x6",
        statement: "Dumbo\u2019s mom talks a lot in the movie.",
        answer: false,
        explain: "Fiction! Mrs. Jumbo speaks just once in the whole film.",
        source: "https://en.wikipedia.org/wiki/Dumbo_(1941_film)"
      },
      // evidence: "The ride was later updated with the 16 vehicles and the new ride mechanism in 1993."
      {
        type: "guess",
        id: "dumbo-x7",
        question: "In 1993, the Magic Kingdom Dumbo ride got new vehicles. How many?",
        answer: 16,
        min: 2,
        max: 40,
        step: 1,
        unit: "Dumbos",
        tolerance: 2,
        explain: "It was updated with 16 vehicles in 1993.",
        source: "https://en.wikipedia.org/wiki/Dumbo_the_Flying_Elephant"
      },
      // evidence: "small children can play in the play area themed to Dumbo's fire rescue stunt scene."
      {
        type: "truefalse",
        id: "dumbo-x8",
        statement: "The queue has a play area themed to Dumbo\u2019s fire rescue stunt.",
        answer: true,
        explain: "Fact! Kids can play in an area themed to the fire rescue scene.",
        source: "https://en.wikipedia.org/wiki/Dumbo_the_Flying_Elephant"
      },
      // evidence: "The original attraction opened at Disneyland on August 16, 1955." / "Starting in 2012, Magic Kingdom's Timothy currently spins"
      {
        type: "order",
        id: "dumbo-x9",
        prompt: "Put these in order, oldest first.",
        items: [
          "Dumbo movie comes out",
          "First Dumbo ride opens at Disneyland",
          "Magic Kingdom gets 16 new Dumbos",
          "Timothy starts spinning on top"
        ],
        explain: "1941, 1955, 1993, then 2012.",
        source: "https://en.wikipedia.org/wiki/Dumbo_the_Flying_Elephant"
      },
      // evidence: "carrying what he thinks of as a magic feather"
      {
        type: "trivia",
        id: "dumbo-x10",
        question: "What does Dumbo hold because he thinks it helps him fly?",
        choices: ["A peanut", "A magic feather", "A balloon", "A wand"],
        answer: 1,
        explain: "He carries what he thinks is a magic feather.",
        source: "https://en.wikipedia.org/wiki/Dumbo_(1941_film)"
      },
      // evidence: "an indoor queue themed to the Bigtop"
      { type: "spy", id: "dumbo-x11", prompt: "You\u2019re at the circus! Find something with red and white stripes." },
      { type: "spy", id: "dumbo-x12", prompt: "Spot something that looks like a circus ticket or sign." },
      { type: "spy", id: "dumbo-x13", prompt: "Look for a feather, a peanut or a bird somewhere around you." },
      { type: "spy", id: "dumbo-x14", prompt: "Find an elephant! How many can you count from where you are?" },
      {
        type: "challenge",
        id: "dumbo-x15",
        prompt: "Be the ringmaster! Take turns announcing the next family member like a big circus act."
      },
      {
        type: "challenge",
        id: "dumbo-x16",
        prompt: "Pretend to be an elephant: swing your arm like a trunk and give your best trumpet!"
      },
      { type: "challenge", id: "dumbo-x17", prompt: "Chug like Casey Jr.! Make a train line and choo-choo in place." },
      {
        type: "challenge",
        id: "dumbo-x18",
        prompt: "Sing a lullaby softly like Mrs. Jumbo to the youngest person in your group."
      },
      { type: "wyr", id: "dumbo-x19", a: "Fly with giant ears like Dumbo", b: "Ride on Casey Jr. across the country" },
      { type: "wyr", id: "dumbo-x20", a: "Be a clown in the circus", b: "Be an acrobat on the trapeze" },
      {
        type: "wyr",
        id: "dumbo-x21",
        a: "Have Timothy Mouse ride in your hat",
        b: "Have a magic feather that gives you courage"
      },
      { type: "wyr", id: "dumbo-x22", a: "Eat circus peanuts all day", b: "Eat cotton candy all day" },
      {
        type: "emoji",
        id: "dumbo-x23",
        emojis: "\u{1F42D} \u{1F3A9} \u{1F3AA}",
        hint: "Dumbo\u2019s tiny best friend.",
        choices: ["Mickey Mouse", "Timothy Q. Mouse", "Jaq", "Remy"],
        answer: 1
      },
      {
        type: "emoji",
        id: "dumbo-x24",
        emojis: "\u{1F682} \u{1F3AA} \u{1F683}",
        hint: "He carries the whole circus.",
        choices: ["Casey Jr.", "Thomas", "The Polar Express", "Big Thunder"],
        answer: 0
      },
      {
        type: "emoji",
        id: "dumbo-x25",
        emojis: "\u{1F418} \u{1F442} \u2708\uFE0F",
        hint: "The star of this ride!",
        choices: ["Babar", "Dumbo", "Heffalump", "Elmer"],
        answer: 1
      }
    ]
  },
  "mad-tea-party": {
    facts: [
      // evidence: "Three small turntables, which rotate clockwise ... within one large turntable, rotating counter-clockwise"
      {
        text: "The teacups sit on three small turntables that spin clockwise, all riding on one big turntable that spins counterclockwise.",
        source: "https://en.wikipedia.org/wiki/Mad_Tea_Party"
      },
      // evidence: "It was updated in 1992 with a new color scheme, new music, and the colorful lanterns."
      {
        text: "In 1992 the ride got new colors, new music and its colorful lanterns.",
        source: "https://en.wikipedia.org/wiki/Mad_Tea_Party"
      },
      // evidence: "It was one of the opening day attractions operating at Disneyland on July 17, 1955."
      {
        text: "The first Mad Tea Party spun on Disneyland\u2019s opening day, July 17, 1955.",
        source: "https://en.wikipedia.org/wiki/Mad_Tea_Party"
      },
      // evidence: "based on Lewis Carroll's 1865 novel Alice's Adventures in Wonderland"
      {
        text: "Alice in Wonderland (1951) is based on Lewis Carroll\u2019s 1865 book and its sequel, Through the Looking-Glass.",
        source: "https://en.wikipedia.org/wiki/Alice_in_Wonderland_(1951_film)"
      }
    ],
    quests: [
      // evidence: "each holding six teacups"
      {
        type: "guess",
        id: "mad-tea-party-x1",
        question: "How many teacups sit on each small turntable?",
        answer: 6,
        min: 1,
        max: 20,
        step: 1,
        unit: "teacups",
        tolerance: 1,
        explain: "Each small turntable holds six teacups.",
        source: "https://en.wikipedia.org/wiki/Mad_Tea_Party"
      },
      // evidence: "Three small turntables" ... "within one large turntable"
      {
        type: "trivia",
        id: "mad-tea-party-x2",
        question: "How many small turntables are on the big turntable?",
        choices: ["One", "Two", "Three", "Ten"],
        answer: 2,
        explain: "Three small turntables sit on one large one.",
        source: "https://en.wikipedia.org/wiki/Mad_Tea_Party"
      },
      // evidence: "Three small turntables, which rotate clockwise ... one large turntable, rotating counter-clockwise"
      {
        type: "truefalse",
        id: "mad-tea-party-x3",
        statement: "The big turntable and the small turntables all spin the same direction.",
        answer: false,
        explain: "Fiction! The small ones spin clockwise and the big one spins counterclockwise.",
        source: "https://en.wikipedia.org/wiki/Mad_Tea_Party"
      },
      // evidence: "All five versions of the attraction are located in Fantasyland."
      {
        type: "truefalse",
        id: "mad-tea-party-x4",
        statement: "Every version of this teacup ride around the world is in Fantasyland.",
        answer: true,
        explain: "Fact! All five versions are in Fantasyland.",
        source: "https://en.wikipedia.org/wiki/Mad_Tea_Party"
      },
      // evidence: "plays a carousel version of the film's" Unbirthday Song
      {
        type: "trivia",
        id: "mad-tea-party-x5",
        question: "Which song plays as you spin?",
        choices: ["\u201CThe Unbirthday Song\u201D", "\u201CLet It Go\u201D", "\u201CHeigh-Ho\u201D", "\u201CBaby Mine\u201D"],
        answer: 0,
        explain: "A carousel-style version of \u201CThe Unbirthday Song\u201D plays.",
        source: "https://en.wikipedia.org/wiki/Mad_Tea_Party"
      },
      // evidence: "It was eventually added in 1973 (along with the central teapot) due to extreme weather conditions."
      {
        type: "trivia",
        id: "mad-tea-party-x6",
        question: "Why was a roof added to the ride in 1973?",
        choices: ["To hide the teapot", "Because of extreme weather", "For a fireworks show", "To keep birds away"],
        answer: 1,
        explain: "The roof was added because of extreme weather.",
        source: "https://en.wikipedia.org/wiki/Mad_Tea_Party"
      },
      // evidence: "It was eventually added in 1973" / "It was updated in 1992 with a new color scheme, new music, and the colorful lanterns."
      {
        type: "order",
        id: "mad-tea-party-x7",
        prompt: "Put these Magic Kingdom teacup moments in order, oldest first.",
        items: ["Ride opens with no roof", "Roof and teapot added", "New colors, music and lanterns"],
        explain: "Opened 1971, roof in 1973, makeover in 1992.",
        source: "https://en.wikipedia.org/wiki/Mad_Tea_Party"
      },
      // evidence: "invites Alice to a bizarre croquet match using flamingoes and hedgehogs as the equipment."
      {
        type: "trivia",
        id: "mad-tea-party-x8",
        question: "In the movie, what does the Queen of Hearts use as croquet mallets?",
        choices: ["Brooms", "Flamingos", "Teaspoons", "Umbrellas"],
        answer: 1,
        explain: "Flamingos for mallets and hedgehogs for balls!",
        source: "https://en.wikipedia.org/wiki/Alice_in_Wonderland_(1951_film)"
      },
      // evidence: "a mysterious, pink-and-purple-striped cat with a permanent grin."
      {
        type: "trivia",
        id: "mad-tea-party-x9",
        question: "What colors are the Cheshire Cat\u2019s stripes?",
        choices: ["Orange and black", "Pink and purple", "Blue and green", "Red and white"],
        answer: 1,
        explain: "He\u2019s pink and purple with a never-ending grin.",
        source: "https://en.wikipedia.org/wiki/Alice_in_Wonderland_(1951_film)"
      },
      // evidence: "two fat identical twin brothers dressed in schoolboy uniforms and wearing red propeller caps."
      {
        type: "truefalse",
        id: "mad-tea-party-x10",
        statement: "Tweedledee and Tweedledum wear red propeller caps.",
        answer: true,
        explain: "Fact! The twins wear red propeller caps.",
        source: "https://en.wikipedia.org/wiki/Alice_in_Wonderland_(1951_film)"
      },
      // evidence: "Alice in Wonderland is a 1951 American animated musical"
      {
        type: "guess",
        id: "mad-tea-party-x11",
        question: "In what year did Disney\u2019s Alice in Wonderland come out?",
        answer: 1951,
        min: 1920,
        max: 2e3,
        step: 1,
        unit: "",
        tolerance: 3,
        explain: "It came out in 1951.",
        source: "https://en.wikipedia.org/wiki/Alice_in_Wonderland_(1951_film)"
      },
      {
        type: "spy",
        id: "mad-tea-party-x12",
        prompt: "Pick the teacup you want to ride. What colors and patterns does it have?"
      },
      {
        type: "spy",
        id: "mad-tea-party-x13",
        prompt: "Find something round that could be a saucer, a clock or a cake."
      },
      { type: "spy", id: "mad-tea-party-x14", prompt: "Look for a hanging light that would fit at a fancy tea party." },
      {
        type: "spy",
        id: "mad-tea-party-x15",
        prompt: "Spot someone wearing a hat. Is it as silly as the Mad Hatter\u2019s?"
      },
      {
        type: "challenge",
        id: "mad-tea-party-x16",
        prompt: "Have a pretend tea party! Pour, sip and say \u201CClean cup, move down!\u201D"
      },
      {
        type: "challenge",
        id: "mad-tea-party-x17",
        prompt: "Grin like the Cheshire Cat. Who can hold the biggest smile the longest?"
      },
      {
        type: "challenge",
        id: "mad-tea-party-x18",
        prompt: "Be the White Rabbit: look at your \u201Cwatch\u201D and shout \u201CI\u2019m late!\u201D in your fastest voice."
      },
      {
        type: "challenge",
        id: "mad-tea-party-x19",
        prompt: "Everyone tell a riddle that has no answer, just like the Mad Hatter would."
      },
      {
        type: "wyr",
        id: "mad-tea-party-x20",
        a: "Spin super fast in your teacup",
        b: "Spin slow and wave at everyone"
      },
      {
        type: "wyr",
        id: "mad-tea-party-x21",
        a: "Have tea with the Mad Hatter",
        b: "Play croquet with the Queen of Hearts"
      },
      { type: "wyr", id: "mad-tea-party-x22", a: "Shrink as tiny as a mouse", b: "Grow as tall as a house" },
      {
        type: "wyr",
        id: "mad-tea-party-x23",
        a: "Celebrate an unbirthday every day",
        b: "Have one giant birthday once a year"
      },
      {
        type: "emoji",
        id: "mad-tea-party-x24",
        emojis: "\u{1F430} \u23F0 \u{1F3C3}",
        hint: "He\u2019s late for a very important date!",
        choices: ["The White Rabbit", "The March Hare", "Thumper", "Rabbit"],
        answer: 0
      },
      {
        type: "emoji",
        id: "mad-tea-party-x25",
        emojis: "\u{1F431} \u{1F601} \u{1F319}",
        hint: "His grin stays when the rest disappears.",
        choices: ["Figaro", "The Cheshire Cat", "Lucifer", "Dinah"],
        answer: 1
      },
      {
        type: "emoji",
        id: "mad-tea-party-x26",
        emojis: "\u{1F3A9} \u2615 \u{1F389}",
        hint: "He hosts the unbirthday party.",
        choices: ["The Mad Hatter", "Mr. Smee", "The Caterpillar", "Doc"],
        answer: 0
      }
    ]
  }
};

// ../src/data/parks/mk-extra/fantasyland-2.ts
var extra3 = {
  carrousel: {
    facts: [
      // evidence: "began construction of Carousel No. 46"
      {
        text: "The Philadelphia Toboggan Company built this carousel as its Carousel No. 46.",
        source: "https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel"
      },
      // evidence: "one of only two surviving five-abreast carousels built by PTC"
      {
        text: "It\u2019s one of only two five-across carousels from its builder that still exist. The other is the Riverview Carousel.",
        source: "https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel"
      },
      // evidence: "The number of horses was increased to 90, all painted white."
      {
        text: "When Disney fixed it up, every horse was painted white.",
        source: "https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel"
      },
      // evidence: "Similar carousels with Cinderella themes under different names"
      {
        text: "Tokyo Disneyland and Hong Kong Disneyland have Cinderella carousels too, with different names.",
        source: "https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel"
      }
    ],
    quests: [
      // evidence: "began construction of Carousel No. 46"
      {
        type: "trivia",
        id: "carrousel-x1",
        question: "Which company built this carousel long ago?",
        choices: ["Arrow Development", "Philadelphia Toboggan Company", "Detroit Toy Company", "Pixar"],
        answer: 1,
        explain: "The Philadelphia Toboggan Company started building it in 1917.",
        source: "https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel"
      },
      // evidence: "72 hand-carved maple wood horses placed five abreast"
      {
        type: "guess",
        id: "carrousel-x2",
        question: "How many hand-carved horses did the carousel have when it was first built?",
        answer: 72,
        min: 10,
        max: 150,
        step: 1,
        unit: "horses",
        tolerance: 8,
        explain: "It started with 72 hand-carved maple wood horses.",
        source: "https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel"
      },
      // evidence: "The Walt Disney Company purchased the carousel in 1967."
      {
        type: "guess",
        id: "carrousel-x3",
        question: "What year did Disney buy this carousel?",
        answer: 1967,
        min: 1920,
        max: 2e3,
        step: 1,
        unit: "",
        tolerance: 3,
        explain: "Disney bought it in 1967, a few years before Magic Kingdom opened.",
        source: "https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel"
      },
      // evidence: "Previously known as: Cinderella's Golden Carousel (1971–2010)"
      {
        type: "truefalse",
        id: "carrousel-x4",
        statement: "This ride used to be called Cinderella\u2019s Golden Carousel.",
        answer: true,
        explain: "True! That was its name from 1971 until 2010.",
        source: "https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel"
      },
      // evidence: "The carousel was later moved to Olympic Park" (in Irvington, for almost 40 years)
      {
        type: "truefalse",
        id: "carrousel-x5",
        statement: "Before Disney, the carousel spun for almost 40 years at a park in New Jersey.",
        answer: true,
        explain: "True! It spent almost 40 years at Olympic Park in Irvington, New Jersey.",
        source: "https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel"
      },
      // evidence: "The number of horses was increased to 90, all painted white."
      {
        type: "truefalse",
        id: "carrousel-x6",
        statement: "Disney painted all the horses bright purple.",
        answer: false,
        explain: "Nope! Disney painted all the horses white.",
        source: "https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel"
      },
      // evidence: "The carousel was later moved to Olympic Park" / "purchased the carousel in 1967"
      {
        type: "order",
        id: "carrousel-x7",
        prompt: "Put the carousel\u2019s journey in order, oldest first.",
        items: [
          "Built by the Philadelphia Toboggan Company",
          "Spins in Detroit",
          "Spins in Irvington, New Jersey",
          "Spins at Magic Kingdom"
        ],
        explain: "Built in 1917\u20131918, it went from Detroit to New Jersey, then to Magic Kingdom.",
        source: "https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel"
      },
      // evidence: "the carousel's name was changed from Cinderella's Golden Carousel" (on June 1, 2010)
      {
        type: "trivia",
        id: "carrousel-x8",
        question: "What year did it get the name Prince Charming Regal Carrousel?",
        choices: ["1971", "1999", "2010", "2020"],
        answer: 2,
        explain: "It was renamed on June 1, 2010.",
        source: "https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel"
      },
      // evidence: "a 60-foot (18 m) platform containing 72" hand-carved horses
      {
        type: "guess",
        id: "carrousel-x9",
        question: "How many feet across was the carousel\u2019s original platform?",
        answer: 60,
        min: 10,
        max: 150,
        step: 5,
        unit: "feet",
        tolerance: 10,
        explain: "The platform was 60 feet across. That\u2019s about as long as 4 cars!",
        source: "https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel"
      },
      // evidence: "She transforms a pumpkin into a carriage"
      {
        type: "trivia",
        id: "carrousel-x10",
        question: "In Cinderella, what does the Fairy Godmother turn into a carriage?",
        choices: ["A watermelon", "A pumpkin", "A teapot", "A shoe"],
        answer: 1,
        explain: "Bibbidi-bobbidi-boo! A pumpkin becomes Cinderella\u2019s carriage.",
        source: "https://en.wikipedia.org/wiki/Cinderella_(1950_film)"
      },
      // evidence: "two mice named Jaq and Gus"
      {
        type: "trivia",
        id: "carrousel-x11",
        question: "What are the names of Cinderella\u2019s two mouse friends?",
        choices: ["Chip and Dale", "Jaq and Gus", "Timon and Pumbaa", "Flit and Meeko"],
        answer: 1,
        explain: "Jaq and Gus are Cinderella\u2019s brave mouse pals.",
        source: "https://en.wikipedia.org/wiki/Cinderella_(1950_film)"
      },
      // evidence: "her stepmother's pet cat, Lucifer" / "her bloodhound Bruno into a footman"
      {
        type: "truefalse",
        id: "carrousel-x12",
        statement: "In Cinderella, the stepmother\u2019s cat is named Bruno.",
        answer: false,
        explain: "Nope! The cat is Lucifer. Bruno is Cinderella\u2019s dog.",
        source: "https://en.wikipedia.org/wiki/Cinderella_(1950_film)"
      },
      // evidence: "Cinderella was released to theatres on February 15, 1950."
      {
        type: "guess",
        id: "carrousel-x13",
        question: "What year did the movie Cinderella come out?",
        answer: 1950,
        min: 1920,
        max: 2e3,
        step: 1,
        unit: "",
        tolerance: 3,
        explain: "Cinderella came to theaters on February 15, 1950.",
        source: "https://en.wikipedia.org/wiki/Cinderella_(1950_film)"
      },
      {
        type: "spy",
        id: "carrousel-x14",
        prompt: "Spot something golden that looks fit for a royal ball.",
        hint: "Look at the poles and trim."
      },
      { type: "spy", id: "carrousel-x15", prompt: "Find a horse that you think looks the bravest. Why that one?" },
      {
        type: "spy",
        id: "carrousel-x16",
        prompt: "Spot something nearby that could belong to a princess.",
        hint: "Crowns, castles and sparkles count!"
      },
      {
        type: "spy",
        id: "carrousel-x17",
        prompt: "Count how many horses you can see that are mid-jump with their legs up."
      },
      {
        type: "challenge",
        id: "carrousel-x18",
        prompt: "Everyone gallop in place like a royal horse. Clip-clop, clip-clop!"
      },
      { type: "challenge", id: "carrousel-x19", prompt: "Take turns doing your fanciest royal bow or curtsy." },
      {
        type: "challenge",
        id: "carrousel-x20",
        prompt: "Make up a magic spell, Fairy Godmother style. What would it turn into what?"
      },
      {
        type: "challenge",
        id: "carrousel-x21",
        prompt: "Pretend the clock is striking midnight! Everyone count down the bongs from 12."
      },
      {
        type: "wyr",
        id: "carrousel-x22",
        a: "Ride a carousel horse that could really gallop",
        b: "Ride a pumpkin coach pulled by mice"
      },
      { type: "wyr", id: "carrousel-x23", a: "Wear glass slippers all day", b: "Wear a crown all day" },
      { type: "wyr", id: "carrousel-x24", a: "Have a Fairy Godmother", b: "Have two talking mouse friends" },
      { type: "wyr", id: "carrousel-x25", a: "Dance at the royal ball", b: "Name every horse on the carousel" },
      {
        type: "emoji",
        id: "carrousel-x26",
        emojis: "\u{1F460}\u2728\u{1F55B}",
        hint: "Left behind on the palace stairs.",
        choices: ["A crown", "The glass slipper", "A magic wand", "A pumpkin"],
        answer: 1
      },
      {
        type: "emoji",
        id: "carrousel-x27",
        emojis: "\u{1F383}\u27A1\uFE0F\u{1F434}\u{1F6DE}",
        hint: "A ride to the ball!",
        choices: ["The pumpkin coach", "A pie cart", "A hay wagon", "A carousel"],
        answer: 0
      },
      {
        type: "emoji",
        id: "carrousel-x28",
        emojis: "\u{1F42D}\u{1F42D}\u{1F9C0}",
        hint: "Cinderella\u2019s tiny helpers.",
        choices: ["Mickey and Minnie", "Jaq and Gus", "Chip and Dale", "Remy and Emile"],
        answer: 1
      },
      {
        type: "emoji",
        id: "carrousel-x29",
        emojis: "\u{1F9DA}\u200D\u2640\uFE0F\u{1FA84}\u2728",
        hint: "Bibbidi-bobbidi-boo!",
        choices: ["Tinker Bell", "The Fairy Godmother", "The Blue Fairy", "Flora"],
        answer: 1
      }
    ]
  },
  philharmagic: {
    facts: [
      // evidence: "Opening date: October 8, 2003."
      {
        text: "Mickey\u2019s PhilharMagic opened at Magic Kingdom on October 8, 2003.",
        source: "https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic"
      },
      // evidence: "Replaced: Legend of The Lion King"
      {
        text: "Before PhilharMagic, this theater held a stage show called Legend of the Lion King.",
        source: "https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic"
      },
      // evidence: "featuring 3D effects, scents, and water"
      {
        text: "The show mixes 3D movie magic with smells and splashes of water.",
        source: "https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic"
      }
    ],
    quests: [
      // evidence: "the Fantasyland Concert Hall (Orlando, Hong Kong, and Tokyo)"
      {
        type: "trivia",
        id: "philharmagic-x1",
        question: "What is the name of the theater where Mickey\u2019s orchestra plays?",
        choices: ["Fantasyland Concert Hall", "Mickey\u2019s Music Barn", "The Royal Opera House", "Toontown Theater"],
        answer: 0,
        explain: "You\u2019re waiting outside the Fantasyland Concert Hall!",
        source: "https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic"
      },
      // evidence: "Mickey's PhilharMagic is a 12-minute-long show."
      {
        type: "guess",
        id: "philharmagic-x2",
        question: "How many minutes long is the show?",
        answer: 12,
        min: 1,
        max: 40,
        step: 1,
        unit: "minutes",
        tolerance: 2,
        explain: "The show is 12 minutes of musical mayhem.",
        source: "https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic"
      },
      // evidence: "a new scene would be added to the film featuring" "Un Poco Loco" from Coco
      {
        type: "trivia",
        id: "philharmagic-x3",
        question: "Which song from Coco was added to the show?",
        choices: ["\u201CRemember Me\u201D", "\u201CUn Poco Loco\u201D", "\u201CLet It Go\u201D", "\u201CTry Everything\u201D"],
        answer: 1,
        explain: "\u201CUn Poco Loco\u201D from Coco joined the show.",
        source: "https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic"
      },
      // evidence: "the Magic Kingdom receiving the same update on November 12, 2021"
      {
        type: "guess",
        id: "philharmagic-x4",
        question: "What year did the Coco scene arrive at Magic Kingdom?",
        answer: 2021,
        min: 2003,
        max: 2026,
        step: 1,
        unit: "",
        tolerance: 1,
        explain: "The Coco scene arrived on November 12, 2021.",
        source: "https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic"
      },
      // evidence: A vortex carries him through Beauty and the Beast ("Be Our Guest"), ... The Little Mermaid ("Part of Your World"), The Lion King ("I Just Can't Wait to Be King") ... Aladdin ("A Whole New World")
      {
        type: "order",
        id: "philharmagic-x5",
        prompt: "Put these songs in the order Donald visits them in the show.",
        items: ["\u201CBe Our Guest\u201D", "\u201CPart of Your World\u201D", "\u201CI Just Can\u2019t Wait to Be King\u201D", "\u201CA Whole New World\u201D"],
        explain: "Donald goes from Beauty and the Beast to The Little Mermaid, The Lion King, and later Aladdin.",
        source: "https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic"
      },
      // evidence: "Don't forget the orchestra. And don't touch my hat!"
      {
        type: "truefalse",
        id: "philharmagic-x6",
        statement: "Mickey tells Donald not to touch his hat.",
        answer: true,
        explain: "True! Mickey says, \u201CDon\u2019t touch my hat!\u201D Guess what Donald does?",
        source: "https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic"
      },
      // evidence: "Mickey places his famous Sorcerer's hat on the podium."
      {
        type: "truefalse",
        id: "philharmagic-x7",
        statement: "The hat Donald borrows is Mickey\u2019s cowboy hat.",
        answer: false,
        explain: "Nope! It\u2019s Mickey\u2019s famous Sorcerer\u2019s hat.",
        source: "https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic"
      },
      // evidence: Peter Pan ("You Can Fly!")
      {
        type: "trivia",
        id: "philharmagic-x8",
        question: "In the show, \u201CYou Can Fly!\u201D comes from which movie?",
        choices: ["Dumbo", "Peter Pan", "Aladdin", "Up"],
        answer: 1,
        explain: "It\u2019s from Peter Pan. Donald gets a flying lesson!",
        source: "https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic"
      },
      // evidence: "Opening date: October 8, 2003."
      {
        type: "guess",
        id: "philharmagic-x9",
        question: "What year did Mickey\u2019s PhilharMagic open here?",
        answer: 2003,
        min: 1971,
        max: 2026,
        step: 1,
        unit: "",
        tolerance: 2,
        explain: "It opened on October 8, 2003.",
        source: "https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic"
      },
      // evidence: The Little Mermaid ("Part of Your World")
      {
        type: "trivia",
        id: "philharmagic-x10",
        question: "Which Little Mermaid song is in the show?",
        choices: ["\u201CPart of Your World\u201D", "\u201CUnder the Sea\u201D", "\u201CKiss the Girl\u201D", "\u201CPoor Unfortunate Souls\u201D"],
        answer: 0,
        explain: "Donald dives in for \u201CPart of Your World.\u201D",
        source: "https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic"
      },
      // evidence: "Replaced: Legend of The Lion King."
      {
        type: "truefalse",
        id: "philharmagic-x11",
        statement: "Before PhilharMagic, this theater had a Lion King stage show.",
        answer: true,
        explain: "True! Legend of the Lion King played here before.",
        source: "https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic"
      },
      {
        type: "spy",
        id: "philharmagic-x12",
        prompt: "Spot something shaped like a musical instrument.",
        hint: "Horns, drums, violins and harps all count!"
      },
      { type: "spy", id: "philharmagic-x13", prompt: "Find a musical note or a music symbol somewhere around you." },
      {
        type: "spy",
        id: "philharmagic-x14",
        prompt: "Look for something gold and fancy, like it belongs in a grand concert hall."
      },
      {
        type: "spy",
        id: "philharmagic-x15",
        prompt: "Spot a character from a Disney movie that you think could be in Mickey\u2019s orchestra."
      },
      {
        type: "challenge",
        id: "philharmagic-x16",
        prompt: "Be the conductor! One person waves their arms and everyone hums faster or slower to match."
      },
      {
        type: "challenge",
        id: "philharmagic-x17",
        prompt: "Everyone do your best grumpy Donald Duck voice. Who sounds the most like him?"
      },
      {
        type: "challenge",
        id: "philharmagic-x18",
        prompt: "Air band! Each person picks a pretend instrument and plays \u201CBe Our Guest\u201D together."
      },
      {
        type: "challenge",
        id: "philharmagic-x19",
        prompt: "Pretend you just put on a magic hat. What silly spell happens?"
      },
      {
        type: "wyr",
        id: "philharmagic-x20",
        a: "Play the drums in Mickey\u2019s orchestra",
        b: "Be the conductor waving the baton"
      },
      {
        type: "wyr",
        id: "philharmagic-x21",
        a: "Fly on a magic carpet with Donald",
        b: "Swim under the sea with Ariel"
      },
      {
        type: "wyr",
        id: "philharmagic-x22",
        a: "Wear Mickey\u2019s magic hat for one day",
        b: "Have Donald as your music teacher"
      },
      {
        type: "wyr",
        id: "philharmagic-x23",
        a: "Smell yummy food in the show",
        b: "Feel a splash of water in the show"
      },
      {
        type: "emoji",
        id: "philharmagic-x24",
        emojis: "\u{1F9D9}\u200D\u2642\uFE0F\u{1F3A9}\u2B50",
        hint: "Donald should NOT have touched it.",
        choices: ["A top hat", "The Sorcerer\u2019s hat", "A crown", "A chef hat"],
        answer: 1
      },
      {
        type: "emoji",
        id: "philharmagic-x25",
        emojis: "\u{1F986}\u{1F621}\u{1F3B6}",
        hint: "He causes all the musical trouble.",
        choices: ["Daffy", "Donald Duck", "Scrooge", "Daisy"],
        answer: 1
      },
      {
        type: "emoji",
        id: "philharmagic-x26",
        emojis: "\u{1F9DE}\u{1FA94}\u{1F319}",
        hint: "A whole new world!",
        choices: ["Aladdin", "Moana", "Mulan", "Frozen"],
        answer: 0
      }
    ]
  },
  "winnie-the-pooh": {
    facts: [
      // evidence: "Opening date: June 5, 1999"
      {
        text: "This ride opened at Magic Kingdom on June 5, 1999.",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)"
      },
      // evidence: "Cummings voiced Winnie the Pooh and Tigger in this version"
      {
        text: "On this ride, the same voice actor, Jim Cummings, plays both Pooh and Tigger.",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)"
      },
      // evidence: "statue in the Pet Cemetery outside the Haunted Mansion"
      {
        text: "A little Mr. Toad statue sits in the Pet Cemetery outside the Haunted Mansion, a wave to the ride that was here first.",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)"
      },
      // evidence: "Winnie the Pooh and the Honey Tree (1966), Winnie the Pooh and the Blustery Day (1968)"
      {
        text: "The Pooh movie this ride is based on is made of three shorter films joined together.",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh"
      }
    ],
    quests: [
      // evidence: "a rather curious picture of J. Thaddeus Toad himself"
      {
        type: "truefalse",
        id: "winnie-the-pooh-x1",
        statement: "Inside Owl\u2019s house on the ride, there\u2019s a picture of Mr. Toad.",
        answer: true,
        explain: "True! It\u2019s a secret wave to Mr. Toad\u2019s Wild Ride, which used to be here.",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)"
      },
      // evidence: "Pooh's floating is achieved with the Pepper's ghost illusion"
      {
        type: "trivia",
        id: "winnie-the-pooh-x2",
        question: "What old stage trick makes Pooh look like he\u2019s floating in his dream?",
        choices: ["Pepper\u2019s ghost", "Salt\u2019s shadow", "Invisible string", "A giant fan"],
        answer: 0,
        explain: "It\u2019s called Pepper\u2019s ghost. It uses glass and light to make things seem to float!",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)"
      },
      // evidence: "Duration: 3:15"
      {
        type: "guess",
        id: "winnie-the-pooh-x3",
        question: "About how many minutes does the ride last?",
        answer: 3,
        min: 1,
        max: 15,
        step: 1,
        unit: "minutes",
        tolerance: 0,
        explain: "The ride lasts about 3 minutes and 15 seconds.",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)"
      },
      // evidence: "Gopher squirts water out of his mouth."
      {
        type: "trivia",
        id: "winnie-the-pooh-x4",
        question: "Which character squirts water out of his mouth during the rainstorm?",
        choices: ["Rabbit", "Gopher", "Eeyore", "Owl"],
        answer: 1,
        explain: "Gopher squirts water. Watch out!",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)"
      },
      // evidence: "Opening date: June 5, 1999"
      {
        type: "guess",
        id: "winnie-the-pooh-x5",
        question: "What year did this Pooh ride open?",
        answer: 1999,
        min: 1971,
        max: 2026,
        step: 1,
        unit: "",
        tolerance: 2,
        explain: "It opened on June 5, 1999.",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)"
      },
      // evidence: "The character Gopher, which does not appear in the Milne stories, was created"
      {
        type: "truefalse",
        id: "winnie-the-pooh-x6",
        statement: "Gopher was in the original Winnie-the-Pooh books.",
        answer: false,
        explain: "Nope! Gopher isn\u2019t in A. A. Milne\u2019s stories. He was created for the movies.",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh"
      },
      // evidence: "based on characters appearing in the Winnie-the-Pooh stories by A. A. Milne and E. H. Shepard"
      {
        type: "trivia",
        id: "winnie-the-pooh-x7",
        question: "Who wrote the original Winnie-the-Pooh stories?",
        choices: ["Dr. Seuss", "A. A. Milne", "Beatrix Potter", "Roald Dahl"],
        answer: 1,
        explain: "A. A. Milne wrote them, and E. H. Shepard drew the pictures.",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh"
      },
      // evidence: "Winnie the Pooh and the Honey Tree (1966), Winnie the Pooh and the Blustery Day (1968)" / "Winnie the Pooh and Tigger Too (1974)"
      {
        type: "order",
        id: "winnie-the-pooh-x8",
        prompt: "Put these Pooh films in the order they came out.",
        items: [
          "Winnie the Pooh and the Honey Tree",
          "Winnie the Pooh and the Blustery Day",
          "Winnie the Pooh and Tigger Too"
        ],
        explain: "Honey Tree (1966), Blustery Day (1968), then Tigger Too (1974).",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh"
      },
      // evidence: "It was first released on a double bill with The Littlest Horse Thieves on March 11, 1977."
      {
        type: "guess",
        id: "winnie-the-pooh-x9",
        question: "What year did The Many Adventures of Winnie the Pooh movie come out?",
        answer: 1977,
        min: 1950,
        max: 2010,
        step: 1,
        unit: "",
        tolerance: 3,
        explain: "The movie came out on March 11, 1977.",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh"
      },
      // evidence: "the ride vehicles begin to bounce like Tigger" / "indicate the end of the heffalumps and woozles scene"
      {
        type: "order",
        id: "winnie-the-pooh-x10",
        prompt: "Put these ride scenes in order.",
        items: ["A blustery, windy day", "Bouncing with Tigger", "Heffalumps and woozles dream", "The big rainstorm"],
        explain: "Wind first, then Tigger, then Pooh\u2019s dream, then the rain!",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)"
      },
      // evidence: "Christopher Robin must leave behind the Hundred Acre Wood to start school."
      {
        type: "truefalse",
        id: "winnie-the-pooh-x11",
        statement: "At the end of the movie, Christopher Robin leaves the Hundred Acre Wood to start school.",
        answer: true,
        explain: "True! But Pooh will always be waiting for him.",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh"
      },
      // evidence: "Sterling Holloway" "as Winnie the Pooh"
      {
        type: "trivia",
        id: "winnie-the-pooh-x12",
        question: "Who voiced Pooh in the 1977 movie?",
        choices: ["Jim Cummings", "Sterling Holloway", "Walt Disney", "Paul Winchell"],
        answer: 1,
        explain: "Sterling Holloway was the movie voice of Pooh. Paul Winchell voiced Tigger.",
        source: "https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh"
      },
      {
        type: "spy",
        id: "winnie-the-pooh-x13",
        prompt: "Spot something that Pooh would think is full of hunny.",
        hint: "Pots, jars and beehives!"
      },
      { type: "spy", id: "winnie-the-pooh-x14", prompt: "Find something that could be blown away on a blustery day." },
      {
        type: "spy",
        id: "winnie-the-pooh-x15",
        prompt: "Look for a tree that could be someone\u2019s house in the Hundred Acre Wood."
      },
      { type: "spy", id: "winnie-the-pooh-x16", prompt: "Spot something orange and stripy like Tigger." },
      {
        type: "challenge",
        id: "winnie-the-pooh-x17",
        prompt: "Everyone say something gloomy in your best Eeyore voice. \u201CThanks for noticin\u2019 me.\u201D"
      },
      {
        type: "challenge",
        id: "winnie-the-pooh-x18",
        prompt: "Do Pooh\u2019s \u201CThink, think, think\u201D tap on your head while someone asks a riddle."
      },
      {
        type: "challenge",
        id: "winnie-the-pooh-x19",
        prompt: "Pretend a big wind is blowing! Everyone sway and hold onto your hats."
      },
      {
        type: "challenge",
        id: "winnie-the-pooh-x20",
        prompt: "Invent a brand new silly creature like a heffalump. What\u2019s it called and what does it do?"
      },
      {
        type: "wyr",
        id: "winnie-the-pooh-x21",
        a: "Bounce everywhere like Tigger",
        b: "Float with a balloon like Pooh"
      },
      {
        type: "wyr",
        id: "winnie-the-pooh-x22",
        a: "Live in a tree house like Owl",
        b: "Live in a cozy burrow like Rabbit"
      },
      {
        type: "wyr",
        id: "winnie-the-pooh-x23",
        a: "Eat only honey for a day",
        b: "Eat only carrots from Rabbit\u2019s garden for a day"
      },
      { type: "wyr", id: "winnie-the-pooh-x24", a: "Ride in a giant honey pot", b: "Ride on Tigger\u2019s back" },
      {
        type: "emoji",
        id: "winnie-the-pooh-x25",
        emojis: "\u{1F42F}\u{1F998}\u{1F300}",
        hint: "Bouncy, trouncy, flouncy, pouncy!",
        choices: ["Tigger", "Roo", "Rajah", "Shere Khan"],
        answer: 0
      },
      {
        type: "emoji",
        id: "winnie-the-pooh-x26",
        emojis: "\u{1FACF}\u{1F499}\u{1F380}",
        hint: "He keeps losing his tail.",
        choices: ["Eeyore", "Donkey", "Piglet", "Bullseye"],
        answer: 0
      },
      {
        type: "emoji",
        id: "winnie-the-pooh-x27",
        emojis: "\u{1F437}\u{1F9E3}\u{1F4A8}",
        hint: "Very small, and blown about by the wind.",
        choices: ["Pumbaa", "Piglet", "Hamm", "Porky"],
        answer: 1
      },
      {
        type: "emoji",
        id: "winnie-the-pooh-x28",
        emojis: "\u{1F4AF}\u{1F333}\u{1F333}",
        hint: "Where Pooh and friends live.",
        choices: ["Sherwood Forest", "The Hundred Acre Wood", "Pride Rock", "Neverland"],
        answer: 1
      }
    ]
  },
  "enchanted-tales-belle": {
    facts: [
      // evidence: "It serves as the replacement for the Storytime with Belle attraction"
      {
        text: "This show replaced an older one called Storytime with Belle.",
        source: "https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle"
      },
      // evidence: "Enchanted Tales with Belle opened in December 2012."
      {
        text: "Enchanted Tales with Belle opened in December 2012.",
        source: "https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle"
      },
      // evidence: "Enchanted Tales with Belle reopened on February 19, 2023"
      {
        text: "After a long break, the show reopened on February 19, 2023.",
        source: "https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle"
      }
    ],
    quests: [
      // evidence: "encounter a magic mirror (a gift from the Beast) in Maurice's workshop"
      {
        type: "trivia",
        id: "enchanted-tales-belle-x1",
        question: "Who gave the magic mirror in Maurice\u2019s workshop?",
        choices: ["Gaston", "The Beast", "Lumi\xE8re", "The Enchantress"],
        answer: 1,
        explain: "The magic mirror was a gift from the Beast.",
        source: "https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle"
      },
      // evidence: "located at the former site of Ariel's Grotto"
      {
        type: "truefalse",
        id: "enchanted-tales-belle-x2",
        statement: "Maurice\u2019s cottage stands where Ariel\u2019s Grotto used to be.",
        answer: true,
        explain: "True! Ariel\u2019s Grotto was here before.",
        source: "https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle"
      },
      // evidence: "meet an audio-animatronic Lumiere, who surprises a live Belle with guests"
      {
        type: "trivia",
        id: "enchanted-tales-belle-x3",
        question: "In the library, who surprises Belle with all the guests?",
        choices: ["Cogsworth", "Chip", "Lumi\xE8re", "Mrs. Potts"],
        answer: 2,
        explain: "Lumi\xE8re surprises Belle with you!",
        source: "https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle"
      },
      // evidence: "meet an audio-animatronic Madame Wardrobe who casts some guests as objects"
      {
        type: "truefalse",
        id: "enchanted-tales-belle-x4",
        statement: "Madame Wardrobe is played by a real actor in a costume.",
        answer: false,
        explain: "Nope! Madame Wardrobe is an audio-animatronic, a moving, talking figure.",
        source: "https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle"
      },
      // evidence: "Enchanted Tales with Belle opened in December 2012."
      {
        type: "guess",
        id: "enchanted-tales-belle-x5",
        question: "What year did Enchanted Tales with Belle open?",
        answer: 2012,
        min: 1990,
        max: 2026,
        step: 1,
        unit: "",
        tolerance: 2,
        explain: "It opened in December 2012.",
        source: "https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle"
      },
      // evidence: "encounter a magic mirror ... in Maurice's workshop" / "meet an audio-animatronic Madame Wardrobe" / "meet an audio-animatronic Lumiere"
      {
        type: "order",
        id: "enchanted-tales-belle-x6",
        prompt: "Put your adventure in order.",
        items: [
          "Enter Maurice\u2019s cottage",
          "Find the magic mirror in the workshop",
          "Meet Madame Wardrobe",
          "Tell the story with Lumi\xE8re and Belle"
        ],
        explain: "Cottage, mirror, Wardrobe, then the library with Belle!",
        source: "https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle"
      },
      // evidence: "Mrs. Potts's son, who has been transformed into a teacup"
      {
        type: "trivia",
        id: "enchanted-tales-belle-x7",
        question: "In Beauty and the Beast, what was Chip turned into?",
        choices: ["A spoon", "A teacup", "A clock", "A candle"],
        answer: 1,
        explain: "Chip is Mrs. Potts\u2019s son, turned into a teacup.",
        source: "https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)"
      },
      // evidence: "the first to receive a nomination for the Academy Award for Best Picture"
      {
        type: "truefalse",
        id: "enchanted-tales-belle-x8",
        statement: "Beauty and the Beast was the first animated movie nominated for Best Picture at the Oscars.",
        answer: true,
        explain: "True! It made history as the first animated Best Picture nominee.",
        source: "https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)"
      },
      // evidence: "before the final petal falls from his enchanted rose"
      {
        type: "trivia",
        id: "enchanted-tales-belle-x9",
        question: "What enchanted flower counts down the Beast\u2019s time?",
        choices: ["A tulip", "A daisy", "A rose", "A sunflower"],
        answer: 2,
        explain: "The spell must break before the last petal falls from the rose.",
        source: "https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)"
      },
      // evidence: "a hunter who vies for Belle's hand in marriage"
      {
        type: "trivia",
        id: "enchanted-tales-belle-x10",
        question: "What is Gaston\u2019s hobby in the movie?",
        choices: ["Baking", "Hunting", "Painting", "Gardening"],
        answer: 1,
        explain: "Gaston is a hunter who wants to marry Belle.",
        source: "https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)"
      },
      // evidence: "Beauty and the Beast is a 1991 American animated musical"
      {
        type: "guess",
        id: "enchanted-tales-belle-x11",
        question: "What year did the animated Beauty and the Beast come out?",
        answer: 1991,
        min: 1950,
        max: 2020,
        step: 1,
        unit: "",
        tolerance: 2,
        explain: "It came out in 1991.",
        source: "https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)"
      },
      // evidence: "the bookish daughter of eccentric inventor Maurice"
      {
        type: "truefalse",
        id: "enchanted-tales-belle-x12",
        statement: "Belle\u2019s father, Maurice, is a baker.",
        answer: false,
        explain: "Nope! Maurice is an inventor. That\u2019s why he has a workshop.",
        source: "https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)"
      },
      {
        type: "spy",
        id: "enchanted-tales-belle-x13",
        prompt: "Spot something that looks like one of Maurice\u2019s inventions.",
        hint: "Gears, wheels and gadgets!"
      },
      {
        type: "spy",
        id: "enchanted-tales-belle-x14",
        prompt: "Find a book, or something that Belle would love to read."
      },
      { type: "spy", id: "enchanted-tales-belle-x15", prompt: "Look for a rose or flower anywhere around you." },
      {
        type: "spy",
        id: "enchanted-tales-belle-x16",
        prompt: "Spot something that could come to life as an enchanted object, like a clock or candle."
      },
      {
        type: "challenge",
        id: "enchanted-tales-belle-x17",
        prompt: "Everyone strike a pose as an enchanted object. Others guess what you are!"
      },
      {
        type: "challenge",
        id: "enchanted-tales-belle-x18",
        prompt: "Say \u201CBe our guest!\u201D in your fanciest French Lumi\xE8re voice."
      },
      {
        type: "challenge",
        id: "enchanted-tales-belle-x19",
        prompt: "Tell the story of Beauty and the Beast together, one sentence each."
      },
      {
        type: "challenge",
        id: "enchanted-tales-belle-x20",
        prompt: "Tick-tock like Cogsworth! Everyone sway like a clock pendulum for 10 seconds."
      },
      {
        type: "wyr",
        id: "enchanted-tales-belle-x21",
        a: "Explore the Beast\u2019s giant library",
        b: "Tinker in Maurice\u2019s workshop"
      },
      {
        type: "wyr",
        id: "enchanted-tales-belle-x22",
        a: "Be cast as a wardrobe in the story",
        b: "Be cast as a talking clock"
      },
      {
        type: "wyr",
        id: "enchanted-tales-belle-x23",
        a: "Have a magic mirror that shows anywhere",
        b: "Have an enchanted rose that never wilts"
      },
      {
        type: "wyr",
        id: "enchanted-tales-belle-x24",
        a: "Dance in the ballroom with Belle",
        b: "Have dinner served by singing dishes"
      },
      {
        type: "emoji",
        id: "enchanted-tales-belle-x25",
        emojis: "\u{1F56F}\uFE0F\u{1F525}\u{1F1EB}\u{1F1F7}",
        hint: "A candlestick with a French accent.",
        choices: ["Cogsworth", "Lumi\xE8re", "Chip", "Gaston"],
        answer: 1
      },
      {
        type: "emoji",
        id: "enchanted-tales-belle-x26",
        emojis: "\u{1FAD6}\u{1F469}\u200D\u{1F373}\u{1F495}",
        hint: "Chip\u2019s mom.",
        choices: ["Mrs. Potts", "Madame Wardrobe", "Fairy Godmother", "Mrs. Incredible"],
        answer: 0
      },
      {
        type: "emoji",
        id: "enchanted-tales-belle-x27",
        emojis: "\u{1F37D}\uFE0F\u{1F3B6}\u{1F64B}",
        hint: "A dinner song: \u201C___ ___ ___!\u201D",
        choices: ["Be Our Guest", "Hakuna Matata", "Let It Go", "Under the Sea"],
        answer: 0
      }
    ]
  },
  barnstormer: {
    facts: [
      // evidence: "Manufacturer: Vekoma"
      {
        text: "The Barnstormer\u2019s coaster was made by a company called Vekoma.",
        source: "https://en.wikipedia.org/wiki/The_Barnstormer"
      },
      // evidence: "for a total of 16 riders per train"
      { text: "Each Barnstormer train carries 16 riders.", source: "https://en.wikipedia.org/wiki/The_Barnstormer" },
      // evidence: "named Grandma Duck's Petting Farm previously occupied the site"
      {
        text: "Long ago, a petting zoo called Grandma Duck\u2019s Petting Farm stood on this spot.",
        source: "https://en.wikipedia.org/wiki/The_Barnstormer"
      },
      // evidence: "former attractions at the now-defunct Opryland USA theme park"
      {
        text: "The Barnstormer shares its name with an old ride at a closed theme park called Opryland USA.",
        source: "https://en.wikipedia.org/wiki/The_Barnstormer"
      }
    ],
    quests: [
      // evidence: "Riders reach a top speed of 40.2 kilometers per hour (25.0 mph)"
      {
        type: "guess",
        id: "barnstormer-x1",
        question: "How fast does the Barnstormer go at top speed, in miles per hour?",
        answer: 25,
        min: 5,
        max: 80,
        step: 1,
        unit: "mph",
        tolerance: 4,
        explain: "It zooms up to 25 miles per hour!",
        source: "https://en.wikipedia.org/wiki/The_Barnstormer"
      },
      // evidence: "207 meters (679 ft) of twists, turns, and elevation changes follow"
      {
        type: "guess",
        id: "barnstormer-x2",
        question: "How many feet long is the Barnstormer\u2019s track?",
        answer: 679,
        min: 100,
        max: 2e3,
        step: 10,
        unit: "feet",
        tolerance: 100,
        explain: "The track is 679 feet of twists and turns.",
        source: "https://en.wikipedia.org/wiki/The_Barnstormer"
      },
      // evidence: "to a height of 9.1 meters (30 ft)"
      {
        type: "guess",
        id: "barnstormer-x3",
        question: "How many feet high does the lift hill climb?",
        answer: 30,
        min: 5,
        max: 150,
        step: 1,
        unit: "feet",
        tolerance: 5,
        explain: "The lift hill goes up 30 feet. That\u2019s about as tall as a 3-story building!",
        source: "https://en.wikipedia.org/wiki/The_Barnstormer"
      },
      // evidence: "Duration: 0:53"
      {
        type: "guess",
        id: "barnstormer-x4",
        question: "How many seconds does a Barnstormer ride last?",
        answer: 53,
        min: 10,
        max: 180,
        step: 1,
        unit: "seconds",
        tolerance: 8,
        explain: "The ride lasts about 53 seconds. Short and zippy!",
        source: "https://en.wikipedia.org/wiki/The_Barnstormer"
      },
      // evidence: "It opened in Mickey's Toontown Fair on October 1, 1996."
      {
        type: "truefalse",
        id: "barnstormer-x5",
        statement: "The first Barnstormer opened in 1996 in a land called Mickey\u2019s Toontown Fair.",
        answer: true,
        explain: "True! It opened in Mickey\u2019s Toontown Fair on October 1, 1996.",
        source: "https://en.wikipedia.org/wiki/The_Barnstormer"
      },
      // evidence: "Inversions: none"
      {
        type: "truefalse",
        id: "barnstormer-x6",
        statement: "The Barnstormer turns riders upside down.",
        answer: false,
        explain: "Nope! It has no upside-down loops at all.",
        source: "https://en.wikipedia.org/wiki/The_Barnstormer"
      },
      // evidence: "home to Minnie Moo, a holstein cow"
      {
        type: "trivia",
        id: "barnstormer-x7",
        question: "Minnie Moo lived at the old petting farm here. What kind of animal was she?",
        choices: ["A goat", "A cow", "A pig", "A duck"],
        answer: 1,
        explain: "Minnie Moo was a Holstein cow with a Hidden Mickey on her side!",
        source: "https://en.wikipedia.org/wiki/The_Barnstormer"
      },
      // evidence: "named Grandma Duck's Petting Farm previously occupied the site" / "It opened in Mickey's Toontown Fair on October 1, 1996." / "March 12, 2012 (relaunch)"
      {
        type: "order",
        id: "barnstormer-x8",
        prompt: "Put this spot\u2019s history in order, oldest first.",
        items: [
          "Grandma Duck\u2019s Petting Farm",
          "The Barnstormer at Goofy\u2019s Wiseacre Farm",
          "The Barnstormer featuring the Great Goofini"
        ],
        explain: "Petting farm first, then the farm coaster in 1996, then the Great Goofini in 2012.",
        source: "https://en.wikipedia.org/wiki/The_Barnstormer"
      },
      // evidence: "This early version of Goofy was named Dippy Dawg by Disney artist Frank Webb."
      {
        type: "trivia",
        id: "barnstormer-x9",
        question: "What was Goofy\u2019s very first name?",
        choices: ["Silly Pup", "Dippy Dawg", "Goofus", "Dopey Dog"],
        answer: 1,
        explain: "Early on, Goofy was called Dippy Dawg!",
        source: "https://en.wikipedia.org/wiki/Goofy"
      },
      // evidence: "The character first appeared in Mickey's Revue, released on May 25, 1932."
      {
        type: "guess",
        id: "barnstormer-x10",
        question: "What year did Goofy first appear in a cartoon?",
        answer: 1932,
        min: 1920,
        max: 1990,
        step: 1,
        unit: "",
        tolerance: 3,
        explain: "Goofy first showed up in Mickey\u2019s Revue in 1932.",
        source: "https://en.wikipedia.org/wiki/Goofy"
      },
      // evidence: "Goofy was portrayed as a single father with a son named Max"
      {
        type: "truefalse",
        id: "barnstormer-x11",
        statement: "Goofy has a son named Max.",
        answer: true,
        explain: "True! In the show Goof Troop, Goofy is a dad with a son named Max.",
        source: "https://en.wikipedia.org/wiki/Goofy"
      },
      // evidence: "located in the Storybook Circus section of the Magic Kingdom"
      {
        type: "trivia",
        id: "barnstormer-x12",
        question: "Which part of Fantasyland is the Barnstormer in?",
        choices: ["Storybook Circus", "Enchanted Forest", "Castle Courtyard", "Toontown"],
        answer: 0,
        explain: "It\u2019s in Storybook Circus. Look for the circus tents!",
        source: "https://en.wikipedia.org/wiki/The_Barnstormer"
      },
      {
        type: "spy",
        id: "barnstormer-x13",
        prompt: "Spot something that looks like it belongs in a circus.",
        hint: "Stripes, tents, flags and balloons!"
      },
      { type: "spy", id: "barnstormer-x14", prompt: "Find something shaped like an airplane or a propeller." },
      { type: "spy", id: "barnstormer-x15", prompt: "Look for a poster or sign that shows off a daredevil stunt." },
      { type: "spy", id: "barnstormer-x16", prompt: "Spot the color red three different times around you." },
      { type: "challenge", id: "barnstormer-x17", prompt: "Everyone do the Goofy holler: \u201CYaaa-hoo-hoo-hoo-hooey!\u201D" },
      {
        type: "challenge",
        id: "barnstormer-x18",
        prompt: "Be a ringmaster! Announce the next person in line like they\u2019re the star of the circus."
      },
      {
        type: "challenge",
        id: "barnstormer-x19",
        prompt: "Stretch your arms like airplane wings and do a slow pretend loop-de-loop."
      },
      {
        type: "challenge",
        id: "barnstormer-x20",
        prompt: "Say \u201CGawrsh!\u201D the Goofy way. Who has the best Goofy laugh?"
      },
      { type: "wyr", id: "barnstormer-x21", a: "Be a stunt pilot like the Great Goofini", b: "Be a circus ringmaster" },
      { type: "wyr", id: "barnstormer-x22", a: "Fly a plane made of a barn door", b: "Fly a plane made of a bathtub" },
      {
        type: "wyr",
        id: "barnstormer-x23",
        a: "Ride the Barnstormer in the front seat",
        b: "Ride it in the very back seat"
      },
      {
        type: "wyr",
        id: "barnstormer-x24",
        a: "Have Goofy as your flying teacher",
        b: "Have Donald as your flying teacher"
      },
      {
        type: "emoji",
        id: "barnstormer-x25",
        emojis: "\u{1F436}\u{1F3A9}\u{1F602}",
        hint: "He says \u201CGawrsh!\u201D",
        choices: ["Pluto", "Goofy", "Max", "Bolt"],
        answer: 1
      },
      {
        type: "emoji",
        id: "barnstormer-x26",
        emojis: "\u{1F3AA}\u{1F418}\u{1F388}",
        hint: "Where you are right now!",
        choices: ["Storybook Circus", "Adventureland", "Liberty Square", "Main Street"],
        answer: 0
      },
      {
        type: "emoji",
        id: "barnstormer-x27",
        emojis: "\u2708\uFE0F\u{1F938}\u200D\u2642\uFE0F\u2B50",
        hint: "Goofy\u2019s daredevil act.",
        choices: ["The Great Goofini", "The Flying Dumbo", "Captain Goof", "Sky Pup"],
        answer: 0
      }
    ]
  }
};

// ../src/data/parks/mk-extra/main-frontier-liberty.ts
var RR = "https://en.wikipedia.org/wiki/Walt_Disney_World_Railroad";
var CASTLE = "https://en.wikipedia.org/wiki/Cinderella_Castle";
var CINDY = "https://en.wikipedia.org/wiki/Cinderella_(1950_film)";
var BT = "https://en.wikipedia.org/wiki/Big_Thunder_Mountain_Railroad";
var TIANA = "https://en.wikipedia.org/wiki/Tiana%27s_Bayou_Adventure";
var PATF = "https://en.wikipedia.org/wiki/The_Princess_and_the_Frog";
var BEARS = "https://en.wikipedia.org/wiki/Country_Bear_Jamboree";
var HM = "https://en.wikipedia.org/wiki/The_Haunted_Mansion";
var HOP = "https://en.wikipedia.org/wiki/The_Hall_of_Presidents";
var extra4 = {
  "wdw-railroad": {
    facts: [
      // evidence: "pulls a set of five passenger cars with seating capacity for 75 passengers per car"
      { text: "Each engine pulls five passenger cars, with room for 375 riders per train.", source: RR },
      // evidence: "modeled after the former Victorian-style Saratoga Springs station in Saratoga Springs, New York"
      {
        text: "Main Street, U.S.A. Station was modeled after an old Victorian train station in Saratoga Springs, New York.",
        source: RR
      },
      // evidence: "This bridge was originally located in Wabasso, Florida."
      { text: "The train crosses a working swing bridge that first stood in Wabasso, Florida.", source: RR },
      // evidence: "where live alligators and deer are occasionally spotted"
      {
        text: "In the quiet northern part of the route, riders sometimes spot real alligators and deer!",
        source: RR
      }
    ],
    quests: [
      // evidence: "The speed limit of the WDWRR is 10 mph (16 km/h)."
      {
        type: "guess",
        id: "wdw-railroad-x1",
        question: "What is the speed limit for the Walt Disney World Railroad trains?",
        answer: 10,
        min: 1,
        max: 60,
        step: 1,
        unit: "mph",
        tolerance: 2,
        explain: "Just 10 mph. Nice and easy so everyone can enjoy the view!",
        source: RR
      },
      // evidence: "It takes about 20 minutes for each train to complete a round trip."
      {
        type: "trivia",
        id: "wdw-railroad-x2",
        question: "About how long does one full trip around the park take?",
        choices: ["5 minutes", "20 minutes", "1 hour", "2 hours"],
        answer: 1,
        explain: "About 20 minutes for a full round trip.",
        source: RR
      },
      // evidence: "seating capacity for 75 passengers per car"
      {
        type: "truefalse",
        id: "wdw-railroad-x3",
        statement: "Each passenger car on the train can seat 75 people.",
        answer: true,
        explain: "Fact! 75 per car, and five cars per train.",
        source: RR
      },
      // evidence: "for a total of 375 passengers per train"
      {
        type: "guess",
        id: "wdw-railroad-x4",
        question: "How many passengers can ride one whole train?",
        answer: 375,
        min: 50,
        max: 1e3,
        step: 25,
        unit: "riders",
        tolerance: 50,
        explain: "375 riders: five cars with 75 seats each.",
        source: RR
      },
      // evidence: No. 4 Roy O. Disney "February 1916"; No. 1 Walter E. Disney "May 1925"; No. 2 Lilly Belle "September 1928"
      {
        type: "order",
        id: "wdw-railroad-x5",
        prompt: "Put these steam engines in order from oldest to newest.",
        items: ["Roy O. Disney (1916)", "Walter E. Disney (1925)", "Lilly Belle (1928)"],
        explain: "Roy O. Disney was built in 1916, Walter E. Disney in 1925 and Lilly Belle in 1928.",
        source: RR
      },
      // evidence: "new diamond-shaped smokestacks and square-shaped headlamps"
      {
        type: "trivia",
        id: "wdw-railroad-x6",
        question: "What shape are the engines\u2019 smokestacks?",
        choices: ["Round", "Star-shaped", "Diamond-shaped", "Heart-shaped"],
        answer: 2,
        explain: "They got diamond-shaped smokestacks and square headlamps.",
        source: RR
      },
      // evidence: "where live alligators and deer are occasionally spotted"
      {
        type: "truefalse",
        id: "wdw-railroad-x7",
        statement: "Riders on the train sometimes spot real alligators.",
        answer: true,
        explain: "Fact! Live alligators and deer are sometimes spotted along the route.",
        source: RR
      },
      // evidence: "temporarily closed to accommodate construction of the TRON attraction in the Tomorrowland section"
      {
        type: "trivia",
        id: "wdw-railroad-x8",
        question: "In 2018 the railroad closed for a while so a new ride could be built. Which one?",
        choices: ["Space Mountain", "TRON Lightcycle / Run", "Big Thunder Mountain", "Peter Pan\u2019s Flight"],
        answer: 1,
        explain: "It closed for TRON construction and came back in 2022 with a new tunnel.",
        source: RR
      },
      // evidence: "a tunnel through the Tiana's Bayou Adventure attraction in which its finale can be viewed"
      {
        type: "trivia",
        id: "wdw-railroad-x9",
        question: "The train goes through a tunnel inside which ride, where you can peek at its finale?",
        choices: ["Haunted Mansion", "Tiana\u2019s Bayou Adventure", "it\u2019s a small world", "Jungle Cruise"],
        answer: 1,
        explain: "You can see the finale of Tiana\u2019s Bayou Adventure from the train!",
        source: RR
      },
      // evidence: "make the locomotives appear as if they were built in the 1880s"
      {
        type: "truefalse",
        id: "wdw-railroad-x10",
        statement: "The engines were fixed up to look like they were built in the 1950s.",
        answer: false,
        explain: "Fiction! They were made to look like trains from the 1880s.",
        source: RR
      },
      // evidence: "where the railroad's water tower is used to refill the tender if needed"
      {
        type: "trivia",
        id: "wdw-railroad-x11",
        question: "At which station is the water tower that refills the train?",
        choices: ["Main Street, U.S.A.", "Frontierland", "Fantasyland", "Tomorrowland"],
        answer: 2,
        explain: "The water tower is at Fantasyland Station.",
        source: RR
      },
      // evidence: "A 3-foot (914 mm) narrow-gauge railway"
      {
        type: "truefalse",
        id: "wdw-railroad-x12",
        statement: "The railroad is a narrow-gauge railway, with rails 3 feet apart.",
        answer: true,
        explain: "Fact! It\u2019s a 3-foot narrow-gauge railway.",
        source: RR
      },
      // evidence: "the trains are halted due to the parade route crossing over the WDWRR tracks"
      {
        type: "trivia",
        id: "wdw-railroad-x13",
        question: "Why do the trains sometimes stop and wait?",
        choices: ["To feed the ducks", "A parade crosses the tracks", "To wash the engine", "For a nap"],
        answer: 1,
        explain: "The parade route crosses the tracks, so trains pause during parades.",
        source: RR
      },
      // evidence: "modeled after the former Victorian-style Saratoga Springs station"
      {
        type: "spy",
        id: "wdw-railroad-x14",
        prompt: "Spot something on the station building that looks like it\u2019s from the old Victorian days.",
        hint: "Look at fancy trim, old lamps or decorations."
      },
      {
        type: "spy",
        id: "wdw-railroad-x15",
        prompt: "Find a clock or something that tells the time. Trains have to be on schedule!"
      },
      {
        type: "spy",
        id: "wdw-railroad-x16",
        prompt: "Spot puffs of steam or smoke from a train. Count how many you see!",
        hint: "Listen for the whistle first."
      },
      {
        type: "spy",
        id: "wdw-railroad-x17",
        prompt: "Find something round and something square nearby that could be part of a train."
      },
      {
        type: "challenge",
        id: "wdw-railroad-x18",
        prompt: "Make a human train! Everyone hold the shoulders of the person in front and chug in place."
      },
      {
        type: "challenge",
        id: "wdw-railroad-x19",
        prompt: "Be the train conductor: announce the next stop in your fanciest conductor voice."
      },
      {
        type: "challenge",
        id: "wdw-railroad-x20",
        prompt: "Say \u201Cchugga chugga\u201D slowly, then faster and faster, like a train speeding up. Then slow down to a stop!"
      },
      {
        type: "challenge",
        id: "wdw-railroad-x21",
        prompt: "Name your own steam engine after someone in your group. Everyone explain why!"
      },
      {
        type: "wyr",
        id: "wdw-railroad-x22",
        a: "Drive the steam engine",
        b: "Ring the train bell all day"
      },
      {
        type: "wyr",
        id: "wdw-railroad-x23",
        a: "Ride the train around the park forever",
        b: "Be the conductor who shouts \u201CAll aboard!\u201D"
      },
      {
        type: "wyr",
        id: "wdw-railroad-x24",
        a: "Have a train whistle for a voice",
        b: "Puff steam every time you laugh"
      },
      {
        type: "wyr",
        id: "wdw-railroad-x25",
        a: "Spot a real alligator from the train",
        b: "Spot a deer from the train"
      },
      {
        type: "emoji",
        id: "wdw-railroad-x26",
        emojis: "\u{1F682} \u{1F4A8} \u{1F514}",
        hint: "Chugga chugga, choo choo!",
        choices: ["Steam train", "Monorail", "Bus", "Boat"],
        answer: 0
      },
      {
        type: "emoji",
        id: "wdw-railroad-x27",
        emojis: "\u{1F39F}\uFE0F \u{1F9E2} \u{1F4E2}",
        hint: "This person shouts \u201CAll aboard!\u201D",
        choices: ["Pilot", "Conductor", "Captain", "Chef"],
        answer: 1
      },
      {
        type: "emoji",
        id: "wdw-railroad-x28",
        emojis: "\u{1F6E4}\uFE0F \u2B55 \u{1F3F0}",
        hint: "The train goes all the way around the park on this.",
        choices: ["A river", "A race track", "A loop of track", "A rainbow"],
        answer: 2
      }
    ]
  },
  "cinderella-castle": {
    facts: [
      // evidence: "no bricks were used in its construction"
      { text: "It looks like stone, but no bricks were used to build Cinderella Castle!", source: CASTLE },
      // evidence: "no gold is used on the exterior; all gold colors are anodized aluminum."
      { text: "The shiny gold on the outside isn\u2019t real gold. It\u2019s a special kind of aluminum.", source: CASTLE },
      // evidence: "There are three elevators inside the castle."
      { text: "There are three elevators hidden inside the castle.", source: CASTLE },
      // evidence: "The set-building trick of forced perspective makes the castle appear larger than it is."
      {
        text: "A movie-set trick called forced perspective makes the castle look even bigger than it really is.",
        source: CASTLE
      }
    ],
    quests: [
      // evidence: "Cinderella Castle was completed in July 1971, after about 18 months of construction."
      {
        type: "trivia",
        id: "cinderella-castle-x1",
        question: "About how long did it take to build Cinderella Castle?",
        choices: ["1 month", "18 months", "10 years", "50 years"],
        answer: 1,
        explain: "About 18 months. It was finished in July 1971.",
        source: CASTLE
      },
      // evidence: "Contrary to a popular legend, the castle cannot be taken apart or moved in any way in the event of a hurricane."
      {
        type: "truefalse",
        id: "cinderella-castle-x2",
        statement: "The castle can be taken apart and stored away when a hurricane is coming.",
        answer: false,
        explain: "Fiction! That\u2019s a popular legend. The castle can\u2019t be moved, but it\u2019s built to handle 125 mph winds.",
        source: CASTLE
      },
      // evidence: "There are a total of 27 towers on the castle"
      {
        type: "guess",
        id: "cinderella-castle-x3",
        question: "How many towers does Cinderella Castle have?",
        answer: 27,
        min: 1,
        max: 60,
        step: 1,
        unit: "towers",
        tolerance: 3,
        explain: "27 towers! Try counting the ones you can see.",
        source: CASTLE
      },
      // evidence: "the Týn Church in Prague, Czech Republic, built in the 14th century"
      {
        type: "trivia",
        id: "cinderella-castle-x4",
        question: "A very old church helped inspire the castle. Which city is it in?",
        choices: ["Paris", "Prague", "London", "Rome"],
        answer: 1,
        explain: "The T\xFDn Church in Prague, Czech Republic, was one inspiration. Neuschwanstein Castle in Germany was another.",
        source: CASTLE
      },
      // evidence: "contain just over 300,000 pieces of Italian glass"
      {
        type: "guess",
        id: "cinderella-castle-x5",
        question: "About how many pieces of glass are in the castle\u2019s mosaic murals?",
        answer: 3e5,
        min: 1e3,
        max: 1e6,
        step: 1e4,
        unit: "pieces",
        tolerance: 5e4,
        explain: "Just over 300,000 pieces of Italian glass!",
        source: CASTLE
      },
      // evidence: "a series of five mosaic murals tells the story of"
      {
        type: "trivia",
        id: "cinderella-castle-x6",
        question: "How many mosaic murals tell Cinderella\u2019s story inside the archway?",
        choices: ["2", "5", "10", "20"],
        answer: 1,
        explain: "Five mosaic murals tell the story.",
        source: CASTLE
      },
      // evidence: "Cinderella Castle is more than 100 feet (30 m) taller than Sleeping Beauty Castle at Disneyland"
      {
        type: "truefalse",
        id: "cinderella-castle-x7",
        statement: "Cinderella Castle is more than 100 feet taller than Sleeping Beauty Castle at Disneyland.",
        answer: true,
        explain: "Fact! It\u2019s much taller than the California castle.",
        source: CASTLE
      },
      // evidence: "The murals took 22 months to complete"
      {
        type: "guess",
        id: "cinderella-castle-x8",
        question: "How many months did it take to make the mosaic murals?",
        answer: 22,
        min: 1,
        max: 60,
        step: 1,
        unit: "months",
        tolerance: 3,
        explain: "22 months! Even longer than building the castle itself.",
        source: CASTLE
      },
      // evidence: "26 glowing candles"
      {
        type: "trivia",
        id: "cinderella-castle-x9",
        question: "For Walt Disney World\u2019s 25th anniversary, the castle became a giant birthday cake. How many candles did it have?",
        choices: ["10", "25", "26", "100"],
        answer: 2,
        explain: "26 glowing candles, and more than 400 gallons of pink paint!",
        source: CASTLE
      },
      // evidence: "two mice named Jaq and Gus"
      {
        type: "trivia",
        id: "cinderella-castle-x10",
        question: "In the movie Cinderella, what are the names of her two mouse friends?",
        choices: ["Chip and Dale", "Jaq and Gus", "Timon and Pumbaa", "Mickey and Minnie"],
        answer: 1,
        explain: "Jaq and Gus help Cinderella all through the movie.",
        source: CINDY
      },
      // evidence: "Lucifer, Lady Tremaine's cat who messes up Cinderella's work"
      {
        type: "trivia",
        id: "cinderella-castle-x11",
        question: "What kind of animal is Lucifer?",
        choices: ["A dog", "A cat", "A horse", "A bird"],
        answer: 1,
        explain: "Lucifer is Lady Tremaine\u2019s grumpy cat.",
        source: CINDY
      },
      // evidence: "She transforms a pumpkin into a carriage" / "losing one of her glass slippers on the staircase" / "Jaq and Gus steal the key back" / "which the Grand Duke places on her foot"
      {
        type: "order",
        id: "cinderella-castle-x12",
        prompt: "Put these Cinderella moments in story order.",
        items: [
          "A pumpkin becomes a carriage",
          "Cinderella loses a glass slipper",
          "Jaq and Gus bring her the key",
          "The Grand Duke puts the slipper on her foot"
        ],
        explain: "Magic, the ball, a lost slipper, a rescue by the mice, and a perfect fit!",
        source: CINDY
      },
      // evidence: "her bloodhound Bruno into a footman"
      {
        type: "truefalse",
        id: "cinderella-castle-x13",
        statement: "The Fairy Godmother turns Bruno the dog into a footman.",
        answer: true,
        explain: "Fact! Bruno the bloodhound becomes a footman for the night.",
        source: CINDY
      },
      // evidence: "Drizella and Anastasia Tremaine, Lady Tremaine's spoiled and awkward daughters"
      {
        type: "trivia",
        id: "cinderella-castle-x14",
        question: "What are the stepsisters\u2019 names?",
        choices: ["Elsa and Anna", "Drizella and Anastasia", "Flora and Fauna", "Belle and Ariel"],
        answer: 1,
        explain: "Drizella and Anastasia are Lady Tremaine\u2019s daughters.",
        source: CINDY
      },
      {
        type: "spy",
        id: "cinderella-castle-x15",
        prompt: "Count how many towers you can see from where you are standing.",
        hint: "There are 27 in all, but you won\u2019t see every one at once!"
      },
      {
        type: "spy",
        id: "cinderella-castle-x16",
        prompt: "Spot something gold or shiny on the castle."
      },
      {
        type: "spy",
        id: "cinderella-castle-x17",
        prompt: "Find something nearby that\u2019s blue, like Cinderella\u2019s ball gown."
      },
      {
        type: "spy",
        id: "cinderella-castle-x18",
        prompt: "Find a window high up on the castle. Who do you think lives there?"
      },
      {
        type: "challenge",
        id: "cinderella-castle-x19",
        prompt: "Everyone sing \u201CBibbidi-Bobbidi-Boo\u201D together and wave a pretend magic wand."
      },
      {
        type: "challenge",
        id: "cinderella-castle-x20",
        prompt: "Count down to midnight like the castle clock: 12 bongs, then everyone freeze!"
      },
      {
        type: "challenge",
        id: "cinderella-castle-x21",
        prompt: "Take turns doing your best royal bow or curtsy. Everyone else cheers like a royal crowd."
      },
      {
        type: "challenge",
        id: "cinderella-castle-x22",
        prompt: "Be Jaq and Gus! Everyone speak in a squeaky mouse voice for one minute."
      },
      {
        type: "wyr",
        id: "cinderella-castle-x23",
        a: "Ride in a pumpkin carriage",
        b: "Wear glass slippers all day"
      },
      {
        type: "wyr",
        id: "cinderella-castle-x24",
        a: "Have a Fairy Godmother",
        b: "Have mouse friends who help with chores"
      },
      {
        type: "wyr",
        id: "cinderella-castle-x25",
        a: "Dance at the royal ball",
        b: "Eat a feast in the castle"
      },
      {
        type: "wyr",
        id: "cinderella-castle-x26",
        a: "Have your magic end at midnight",
        b: "Have your magic last only one hour, any time you pick"
      },
      {
        type: "emoji",
        id: "cinderella-castle-x27",
        emojis: "\u{1F42D} \u{1F42D} \u{1F9C0}",
        hint: "Cinderella\u2019s tiny best friends.",
        choices: ["Jaq and Gus", "Chip and Dale", "Remy and Emile", "Timon and Pumbaa"],
        answer: 0
      },
      {
        type: "emoji",
        id: "cinderella-castle-x28",
        emojis: "\u{1F9DA} \u{1FA84} \u2728",
        hint: "Bibbidi-Bobbidi-Boo!",
        choices: ["Tinker Bell", "Fairy Godmother", "Blue Fairy", "Merlin"],
        answer: 1
      },
      {
        type: "emoji",
        id: "cinderella-castle-x29",
        emojis: "\u{1F408}\u200D\u2B1B \u{1F63C}",
        hint: "A sneaky cat who chases the mice.",
        choices: ["Figaro", "Lucifer", "Cheshire Cat", "Dinah"],
        answer: 1
      }
    ]
  },
  "big-thunder": {
    facts: [
      // evidence: "led by Imagineer Tony Baxter"
      { text: "Imagineer Tony Baxter led the team that created Big Thunder Mountain Railroad.", source: BT },
      // evidence: "the rockwork designs are based on the rising buttes"
      {
        text: "In Florida, the rocks are based on the tall buttes of Arizona and Monument Valley, Utah.",
        source: BT
      },
      // evidence: "The track layout of the Magic Kingdom's version is nearly an identical mirrored layout of the Disneyland attraction."
      { text: "Florida\u2019s track is almost a mirror image of the Disneyland version\u2019s track.", source: BT },
      // evidence: "includes a refreshed Rainbow Caverns, new audio-animatronics and gold props"
      {
        text: "A big makeover added a refreshed Rainbow Caverns, new Audio-Animatronics and gold props.",
        source: BT
      }
    ],
    quests: [
      // evidence: "Tumbleweed in Magic Kingdom"
      {
        type: "trivia",
        id: "big-thunder-x1",
        question: "What is the name of the mining town in Florida\u2019s Big Thunder Mountain?",
        choices: ["Rainbow Ridge", "Tumbleweed", "Thunder Mesa", "Dusty Gulch"],
        answer: 1,
        explain: "Tumbleweed! Disneyland\u2019s town is Rainbow Ridge, and Paris has Thunder Mesa.",
        source: BT
      },
      // evidence: "or a flash flood (Magic Kingdom)"
      {
        type: "trivia",
        id: "big-thunder-x2",
        question: "What happened to the town of Tumbleweed?",
        choices: ["A snowstorm", "A flash flood", "A volcano", "A tornado"],
        answer: 1,
        explain: "Your train rolls through the flooded town of Tumbleweed.",
        source: BT
      },
      // evidence: "Opening date: November 15, 1980"
      {
        type: "guess",
        id: "big-thunder-x3",
        question: "In what year did Big Thunder Mountain open at Magic Kingdom?",
        answer: 1980,
        min: 1950,
        max: 2020,
        step: 1,
        unit: "",
        tolerance: 3,
        explain: "It opened on November 15, 1980.",
        source: BT
      },
      // evidence: "climb the third lift hill"
      {
        type: "trivia",
        id: "big-thunder-x4",
        question: "How many lift hills does your train climb?",
        choices: ["1", "2", "3", "10"],
        answer: 2,
        explain: "Three lift hills. Clickety-clack!",
        source: BT
      },
      // evidence: "through the ribcage of a" [T. rex skeleton]
      {
        type: "truefalse",
        id: "big-thunder-x5",
        statement: "The train passes right through the ribcage of a dinosaur skeleton.",
        answer: true,
        explain: "Fact! Watch for the giant dinosaur bones.",
        source: BT
      },
      // evidence: "through a cavern lit up by several rainbow colored pools of water"
      {
        type: "truefalse",
        id: "big-thunder-x6",
        statement: "On the first lift hill, the train climbs through a cave with rainbow-colored pools.",
        answer: true,
        explain: "Fact! It\u2019s called Rainbow Caverns.",
        source: BT
      },
      // evidence: the pools turn red as trains crest the first lift, "accompanied by a low rumble"
      {
        type: "trivia",
        id: "big-thunder-x7",
        question: "At the top of the first lift, the rainbow pools change to what color?",
        choices: ["Green", "Red", "Purple", "Gold"],
        answer: 1,
        explain: "They turn red, with a low rumble. Uh oh!",
        source: BT
      },
      // evidence: "It first opened at Disneyland in 1979" / "November 15, 1980" / "In January 2025 ... temporarily closed" / "on May 3, 2026"
      {
        type: "order",
        id: "big-thunder-x8",
        prompt: "Put these Big Thunder moments in order, oldest first.",
        items: [
          "First version opens at Disneyland (1979)",
          "Magic Kingdom version opens (1980)",
          "Closes for a big makeover (2025)",
          "Reopens with new effects (2026)"
        ],
        explain: "Disneyland got it first in 1979, Florida in 1980, and Florida\u2019s got a big refresh in 2025 to 2026.",
        source: BT
      },
      // evidence: "several veins of gold that illuminate the tunnel"
      {
        type: "trivia",
        id: "big-thunder-x9",
        question: "On the third lift hill, what glows in the tunnel?",
        choices: ["Diamonds", "Veins of gold", "Glow worms", "Lanterns"],
        answer: 1,
        explain: "Veins of gold light up the tunnel. Gold rush!",
        source: BT
      },
      // evidence: "The concept came from Baxter's work on fellow Imagineer Marc Davis's concept for the Western River Expedition"
      {
        type: "trivia",
        id: "big-thunder-x10",
        question: "Big Thunder\u2019s idea grew out of plans for which never-built ride?",
        choices: ["Western River Expedition", "Space Pirates", "Dino Land", "Gold Coast Express"],
        answer: 0,
        explain: "It came from Marc Davis\u2019s idea for the Western River Expedition.",
        source: BT
      },
      {
        type: "spy",
        id: "big-thunder-x11",
        prompt: "Spot something in line that a gold miner might use.",
        hint: "Think picks, shovels, carts or lanterns."
      },
      {
        type: "spy",
        id: "big-thunder-x12",
        prompt: "Find a red rock that looks like an animal or a face."
      },
      {
        type: "spy",
        id: "big-thunder-x13",
        prompt: "Spot a wooden barrel, crate or box. What do you think is inside?"
      },
      {
        type: "spy",
        id: "big-thunder-x14",
        prompt: "Listen and look for a runaway train zooming by. Wave if you see one!"
      },
      {
        type: "challenge",
        id: "big-thunder-x15",
        prompt: "Everyone do your best \u201CYee-haw!\u201D Who has the loudest cowboy call?"
      },
      {
        type: "challenge",
        id: "big-thunder-x16",
        prompt: "Pretend to pan for gold. Shake your pan, then shout \u201CEureka!\u201D when you find a nugget."
      },
      {
        type: "challenge",
        id: "big-thunder-x17",
        prompt: "Do the train sounds for the lift hill: click, click, click, then everyone go \u201CWhoooosh!\u201D"
      },
      {
        type: "challenge",
        id: "big-thunder-x18",
        prompt: "Lean left, then right, then hold on to your hat, like you\u2019re on the wildest ride in the wilderness!"
      },
      {
        type: "wyr",
        id: "big-thunder-x19",
        a: "Find a giant gold nugget",
        b: "Find a real dinosaur bone"
      },
      {
        type: "wyr",
        id: "big-thunder-x20",
        a: "Live in a mining town in the Old West",
        b: "Drive a runaway mine train"
      },
      {
        type: "wyr",
        id: "big-thunder-x21",
        a: "Ride a horse through the desert",
        b: "Ride a train through a mountain"
      },
      {
        type: "wyr",
        id: "big-thunder-x22",
        a: "Sit in the very front of the train",
        b: "Sit in the very back of the train"
      },
      {
        type: "emoji",
        id: "big-thunder-x23",
        emojis: "\u26CF\uFE0F \u{1FA99} \u2728",
        hint: "Miners dug for this shiny treasure.",
        choices: ["Gold", "Candy", "Pizza", "Seashells"],
        answer: 0
      },
      {
        type: "emoji",
        id: "big-thunder-x24",
        emojis: "\u{1F308} \u{1F573}\uFE0F \u{1F4A7}",
        hint: "A colorful cave on the first lift hill.",
        choices: ["Rainbow Caverns", "Skull Rock", "Cave of Wonders", "Splash Pool"],
        answer: 0
      },
      {
        type: "emoji",
        id: "big-thunder-x25",
        emojis: "\u{1F996} \u{1F9B4}",
        hint: "You ride right through its ribs!",
        choices: ["A dinosaur skeleton", "A whale", "A dragon", "A snowman"],
        answer: 0
      }
    ]
  },
  "tianas-bayou": {
    facts: [
      // evidence: "The attraction is set a year after the events of The Princess and the Frog."
      { text: "The ride\u2019s story happens one year after the movie The Princess and the Frog.", source: TIANA },
      // evidence: "employee-owned food cooperative called Tiana's Foods"
      { text: "Tiana now runs Tiana\u2019s Foods, a food company owned by the people who work there.", source: TIANA },
      // evidence: "the original song written for the attraction, was made available on streaming music platforms on May 31, 2024."
      { text: "The ride has its own brand-new song, \u201CSpecial Spice.\u201D", source: TIANA },
      // evidence: "At Magic Kingdom, passengers are seated side-by-side"
      { text: "At Magic Kingdom, riders sit side-by-side in the log.", source: TIANA }
    ],
    quests: [
      // evidence: "her celebration is missing a band and she needs the guests' help to find one"
      {
        type: "trivia",
        id: "tianas-bayou-x1",
        question: "What is Tiana\u2019s big party missing?",
        choices: ["A cake", "A band", "Balloons", "A dance floor"],
        answer: 1,
        explain: "It needs a band, and you help find one in the bayou!",
        source: TIANA
      },
      // evidence: "keeps Juju from trying to steal her beignets"
      {
        type: "trivia",
        id: "tianas-bayou-x2",
        question: "Mama Odie\u2019s snake Juju tries to steal her what?",
        choices: ["Hat", "Beignets", "Gumbo", "Glasses"],
        answer: 1,
        explain: "Beignets! Those yummy New Orleans doughnuts.",
        source: TIANA
      },
      // evidence: "The attraction is set a year after the events of The Princess and the Frog."
      {
        type: "truefalse",
        id: "tianas-bayou-x3",
        statement: "The ride takes place ten years after the movie.",
        answer: false,
        explain: "Fiction! It\u2019s set just one year after the movie.",
        source: TIANA
      },
      // evidence: "the original song written for the attraction"
      {
        type: "trivia",
        id: "tianas-bayou-x4",
        question: "What is the name of the new song written for this ride?",
        choices: ["\u201CAlmost There\u201D", "\u201CSpecial Spice\u201D", "\u201CZip-a-Dee-Doo-Dah\u201D", "\u201CGumbo Groove\u201D"],
        answer: 1,
        explain: "\u201CSpecial Spice\u201D was written just for Tiana\u2019s Bayou Adventure.",
        source: TIANA
      },
      // evidence: "reaching a maximum speed of 40 mph"
      {
        type: "guess",
        id: "tianas-bayou-x5",
        question: "What is the top speed of your log on the ride?",
        answer: 40,
        min: 5,
        max: 100,
        step: 5,
        unit: "mph",
        tolerance: 5,
        explain: "Up to 40 mph. Whoosh!",
        source: TIANA
      },
      // evidence: "Louis can be seen in some stalks searching for musicians"
      {
        type: "truefalse",
        id: "tianas-bayou-x6",
        statement: "On the ride, Louis the alligator helps search for musicians.",
        answer: true,
        explain: "Fact! Look for Louis peeking out of the stalks.",
        source: TIANA
      },
      // evidence: Louis "dream is to play his trumpet in a jazz band"
      {
        type: "trivia",
        id: "tianas-bayou-x7",
        question: "In the movie, what instrument does Louis the alligator dream of playing in a jazz band?",
        choices: ["Drums", "Trumpet", "Violin", "Tuba"],
        answer: 1,
        explain: "Louis loves his trumpet!",
        source: PATF
      },
      // evidence: Ray's love is "an Evening Star in the sky" named Evangeline
      {
        type: "trivia",
        id: "tianas-bayou-x8",
        question: "Ray the firefly is in love with Evangeline. What is she really?",
        choices: ["A firefly", "A star in the sky", "A frog", "A flower"],
        answer: 1,
        explain: "Evangeline is the Evening Star.",
        source: PATF
      },
      // evidence: "Set in New Orleans during the 1920s."
      {
        type: "trivia",
        id: "tianas-bayou-x9",
        question: "Which city is The Princess and the Frog set in?",
        choices: ["Paris", "New Orleans", "New York", "Chicago"],
        answer: 1,
        explain: "New Orleans, in the 1920s.",
        source: PATF
      },
      // evidence: She "dreams of opening her own restaurant."
      {
        type: "trivia",
        id: "tianas-bayou-x10",
        question: "What is Tiana\u2019s big dream in the movie?",
        choices: ["Becoming a singer", "Opening her own restaurant", "Sailing the world", "Becoming a queen"],
        answer: 1,
        explain: "She works hard to open her own restaurant.",
        source: PATF
      },
      // evidence: "blind, 197-year-old voodoo priestess"
      {
        type: "guess",
        id: "tianas-bayou-x11",
        question: "In the movie, how old is Mama Odie?",
        answer: 197,
        min: 50,
        max: 500,
        step: 1,
        unit: "years",
        tolerance: 15,
        explain: "Mama Odie is 197 years old!",
        source: PATF
      },
      // evidence: Tiana "became the first African American Disney princess."
      {
        type: "truefalse",
        id: "tianas-bayou-x12",
        statement: "Tiana was the first African American Disney princess.",
        answer: true,
        explain: "Fact! The movie came out in 2009.",
        source: PATF
      },
      // evidence: "Dig a Little Deeper" (a song for Mama Odie)
      {
        type: "trivia",
        id: "tianas-bayou-x13",
        question: "Which song does Mama Odie sing in the movie?",
        choices: ["\u201CAlmost There\u201D", "\u201CDig a Little Deeper\u201D", "\u201CLet It Go\u201D", "\u201CUnder the Sea\u201D"],
        answer: 1,
        explain: "\u201CDig a Little Deeper.\u201D Tiana sings \u201CAlmost There.\u201D",
        source: PATF
      },
      // evidence: "Disney announced that the new ride would be called Tiana's Bayou Adventure" (July 2022) / "would close on January 23, 2023" / "opened on June 28, 2024 at Magic Kingdom"
      {
        type: "order",
        id: "tianas-bayou-x14",
        prompt: "Put these in order, first to last.",
        items: [
          "The ride\u2019s name is announced (2022)",
          "Splash Mountain closes (2023)",
          "Tiana\u2019s Bayou Adventure opens (2024)"
        ],
        explain: "Named in July 2022, Splash Mountain closed in January 2023, and Tiana\u2019s opened June 28, 2024.",
        source: TIANA
      },
      {
        type: "spy",
        id: "tianas-bayou-x15",
        prompt: "Spot something in line that looks like it belongs in Tiana\u2019s kitchen.",
        hint: "Pots, spices, jars or food boxes!"
      },
      {
        type: "spy",
        id: "tianas-bayou-x16",
        prompt: "Find something green, like a frog or a lily pad."
      },
      {
        type: "spy",
        id: "tianas-bayou-x17",
        prompt: "Look for a musical instrument, or a picture of one. The party needs a band!"
      },
      {
        type: "spy",
        id: "tianas-bayou-x18",
        prompt: "Spot something that glows or twinkles, like Ray the firefly."
      },
      {
        type: "challenge",
        id: "tianas-bayou-x19",
        prompt: "Form a pretend jazz band! Everyone picks an instrument and plays it with your voice."
      },
      {
        type: "challenge",
        id: "tianas-bayou-x20",
        prompt: "Everyone croak like a frog. Then try to croak a song everyone knows!"
      },
      {
        type: "challenge",
        id: "tianas-bayou-x21",
        prompt: "Invent a new gumbo recipe. Each person adds one silly ingredient."
      },
      {
        type: "challenge",
        id: "tianas-bayou-x22",
        prompt: "Do a little Mardi Gras parade dance in place. Wave your hands like you\u2019re catching beads!"
      },
      {
        type: "wyr",
        id: "tianas-bayou-x23",
        a: "Play trumpet with Louis",
        b: "Glow like Ray the firefly"
      },
      {
        type: "wyr",
        id: "tianas-bayou-x24",
        a: "Eat a plate of beignets",
        b: "Eat a big bowl of gumbo"
      },
      {
        type: "wyr",
        id: "tianas-bayou-x25",
        a: "Have a pet snake like Juju",
        b: "Have a pet alligator like Louis"
      },
      {
        type: "wyr",
        id: "tianas-bayou-x26",
        a: "Own your own restaurant like Tiana",
        b: "Lead a band at a big party"
      },
      {
        type: "emoji",
        id: "tianas-bayou-x27",
        emojis: "\u{1F40A} \u{1F3BA}",
        hint: "He dreams of playing jazz.",
        choices: ["Louis", "Tick-Tock", "Ray", "Naveen"],
        answer: 0
      },
      {
        type: "emoji",
        id: "tianas-bayou-x28",
        emojis: "\u{1FAB2} \u2728 \u2B50",
        hint: "A firefly in love with a star.",
        choices: ["Ray", "Jiminy Cricket", "Flik", "Heimlich"],
        answer: 0
      },
      {
        type: "emoji",
        id: "tianas-bayou-x29",
        emojis: "\u{1F478} \u{1F438} \u{1F48B}",
        hint: "A movie set in New Orleans.",
        choices: ["The Little Mermaid", "The Princess and the Frog", "Frozen", "Moana"],
        answer: 1
      }
    ]
  },
  "country-bears": {
    facts: [
      // evidence: "originally intended by Walt Disney to be placed at Disney's Mineral King Ski Resort"
      {
        text: "Walt Disney first planned the bear show for Mineral King, a ski resort in California that was never built.",
        source: BEARS
      },
      // evidence: "who founded Grizzly Hall, the venue the bears perform at in Florida"
      { text: "The bears perform in Grizzly Hall, founded by Henry\u2019s grandfather, Ursus H. Bear.", source: BEARS },
      // evidence: "Audio-animatronics: 24 (Magic Kingdom)"
      { text: "The Magic Kingdom show has 24 Audio-Animatronics figures.", source: BEARS },
      // evidence: "The project was assigned to imagineer Marc Davis."
      { text: "Imagineer Marc Davis designed the bears, with help from Al Bertino.", source: BEARS }
    ],
    quests: [
      // evidence: "Gomer is a bear who never sings but instead plays his piano"
      {
        type: "trivia",
        id: "country-bears-x1",
        question: "Which bear never sings, but plays the piano?",
        choices: ["Gomer", "Henry", "Wendell", "Big Al"],
        answer: 0,
        explain: "Gomer plays a piano with a honeycomb on top.",
        source: BEARS
      },
      // evidence: "Wendell is a hyperactive golden brown bear who plays the mandolin."
      {
        type: "trivia",
        id: "country-bears-x2",
        question: "What instrument does Wendell play?",
        choices: ["Drums", "Mandolin", "Tuba", "Harmonica"],
        answer: 1,
        explain: "Wendell plays the mandolin.",
        source: BEARS
      },
      // evidence: "Trixie is a very large brown bear who wears a blue bow on her head"
      {
        type: "trivia",
        id: "country-bears-x3",
        question: "What does Trixie wear on her head?",
        choices: ["A cowboy hat", "A blue bow", "A crown", "Flowers"],
        answer: 1,
        explain: "Trixie wears a big blue bow.",
        source: BEARS
      },
      // evidence: "Ernest always takes his entire 17-trunk wardrobe everywhere he goes."
      {
        type: "guess",
        id: "country-bears-x4",
        question: "Ernest the Dude brings his whole wardrobe everywhere. How many trunks is that?",
        answer: 17,
        min: 1,
        max: 50,
        step: 1,
        unit: "trunks",
        tolerance: 2,
        explain: "17 trunks of fancy clothes!",
        source: BEARS
      },
      // evidence: "Because she and her sisters are triplets, they all have brown fur"
      {
        type: "truefalse",
        id: "country-bears-x5",
        statement: "Bunny, Bubbles and Beulah, the Sun Bonnets, are triplets.",
        answer: true,
        explain: "Fact! The three sisters are triplets.",
        source: BEARS
      },
      // evidence: "Romeo McGrowl, formerly Liver Lips McGrowl"
      {
        type: "trivia",
        id: "country-bears-x6",
        question: "In the new show, Liver Lips McGrowl has a new name. What is it?",
        choices: ["Romeo McGrowl", "Elvis McGrowl", "Rocky McGrowl", "Buddy McGrowl"],
        answer: 0,
        explain: "He\u2019s now Romeo McGrowl, and he plays guitar.",
        source: BEARS
      },
      // evidence: "the three trophy heads of Max, Buff and Melvin hung on the right side of the theater"
      {
        type: "trivia",
        id: "country-bears-x7",
        question: "Three talking trophy heads hang on the wall. Which names are theirs?",
        choices: ["Max, Buff and Melvin", "Huey, Dewey and Louie", "Larry, Moe and Curly", "Tom, Dick and Harry"],
        answer: 0,
        explain: "Max, Buff and Melvin hang on the right side of the theater.",
        source: BEARS
      },
      // evidence: classic Disney songs in country styles, including "The Bare Necessities"
      {
        type: "trivia",
        id: "country-bears-x8",
        question: "The new show plays Disney songs country-style. Which bear-y song is one of them?",
        choices: ["\u201CThe Bare Necessities\u201D", "\u201CLet It Go\u201D", "\u201CUnder the Sea\u201D", "\u201CBe Our Guest\u201D"],
        answer: 0,
        explain: "\u201CThe Bare Necessities\u201D from The Jungle Book, played country-style!",
        source: BEARS
      },
      // evidence: "On October 1, 1971, The Country Bear Jamboree opened" / "On September 9, 2023, it was announced" / "January 27, 2024 (Original)" / "It officially opened on July 17, 2024."
      {
        type: "order",
        id: "country-bears-x9",
        prompt: "Put these bear moments in order, oldest first.",
        items: [
          "The original show opens (1971)",
          "A new version is announced (2023)",
          "The original show closes (January 2024)",
          "The Musical Jamboree opens (July 2024)"
        ],
        explain: "The bears played from 1971 to 2024, then came back with a new show that July.",
        source: BEARS
      },
      // evidence: "Gomer is a bear who never sings"
      {
        type: "truefalse",
        id: "country-bears-x10",
        statement: "Gomer sings the loudest of all the bears.",
        answer: false,
        explain: "Fiction! Gomer never sings. He just plays piano.",
        source: BEARS
      },
      // evidence: "plays a banjo and taps on the dishpan"
      {
        type: "trivia",
        id: "country-bears-x11",
        question: "Zeke from the Five Bear Rugs plays a banjo and taps on what?",
        choices: ["A dishpan", "A trash can", "A cowbell", "A teapot"],
        answer: 0,
        explain: "Zeke plays banjo and taps on a dishpan.",
        source: BEARS
      },
      // evidence: "originally intended by Walt Disney to be placed at Disney's Mineral King Ski Resort"
      {
        type: "truefalse",
        id: "country-bears-x12",
        statement: "The bears were first planned for a ski resort.",
        answer: true,
        explain: "Fact! Walt Disney planned them for Mineral King, a ski resort that was never built.",
        source: BEARS
      },
      {
        type: "spy",
        id: "country-bears-x13",
        prompt: "Spot something that looks like it came from an old country music hall.",
        hint: "Think instruments, old posters or wooden signs."
      },
      {
        type: "spy",
        id: "country-bears-x14",
        prompt: "Find something shaped like, or made to look like, a bear."
      },
      {
        type: "spy",
        id: "country-bears-x15",
        prompt: "Look for something made of wood. Bears love the woods!"
      },
      {
        type: "spy",
        id: "country-bears-x16",
        prompt: "Spot something sweet a bear would love, like honey or a beehive picture."
      },
      {
        type: "challenge",
        id: "country-bears-x17",
        prompt: "Everyone give a big bear growl, then a tiny cub growl!"
      },
      {
        type: "challenge",
        id: "country-bears-x18",
        prompt: "Play \u201Cair banjo\u201D together and hum a country tune for 10 seconds."
      },
      {
        type: "challenge",
        id: "country-bears-x19",
        prompt: "Give everyone in your group a Country Bear stage name, like \u201CJumpin\u2019 Jo.\u201D"
      },
      {
        type: "challenge",
        id: "country-bears-x20",
        prompt: "Clap and stomp a rhythm together. Can you keep the beat for 20 seconds?"
      },
      {
        type: "wyr",
        id: "country-bears-x21",
        a: "Swing down from the ceiling like Teddi Barra",
        b: "Hang on the wall and tell jokes like Max, Buff and Melvin"
      },
      {
        type: "wyr",
        id: "country-bears-x22",
        a: "Play piano like Gomer",
        b: "Play mandolin like Wendell"
      },
      {
        type: "wyr",
        id: "country-bears-x23",
        a: "Bring 17 trunks of clothes on every trip",
        b: "Wear the same outfit every day"
      },
      {
        type: "wyr",
        id: "country-bears-x24",
        a: "Sing in a bear band",
        b: "Dance in the front row"
      },
      {
        type: "emoji",
        id: "country-bears-x25",
        emojis: "\u{1F43B} \u{1F3B8} \u{1F3A9}",
        hint: "The host of the show.",
        choices: ["Henry", "Baloo", "Winnie the Pooh", "Little John"],
        answer: 0
      },
      {
        type: "emoji",
        id: "country-bears-x26",
        emojis: "\u{1F43B} \u{1F3B9} \u{1F36F}",
        hint: "He never sings a note.",
        choices: ["Gomer", "Big Al", "Wendell", "Zeke"],
        answer: 0
      },
      {
        type: "emoji",
        id: "country-bears-x27",
        emojis: "\u{1F43B} \u{1F380} \u{1F499}",
        hint: "A big bear with a bow.",
        choices: ["Trixie", "Teddi Barra", "Bunny", "Beulah"],
        answer: 0
      }
    ]
  },
  "haunted-mansion": {
    facts: [
      // evidence: "Unlike its Disneyland counterpart, the stretching rooms are not elevators and instead have the ceilings rise."
      { text: "In Florida, the Stretching Room isn\u2019t an elevator. The ceiling rises up instead!", source: HM },
      // evidence: "Paul Frees recorded additional voice-overs, including dialogue the \"Ghost Host\""
      { text: "Paul Frees is the voice of the Ghost Host who guides you through the Mansion.", source: HM },
      // evidence: "Davis and Coats, two of the Mansion's main designers"
      { text: "Marc Davis and Claude Coats were two of the Mansion\u2019s main designers.", source: HM },
      // evidence: "Little Leota appears above the vehicles as guests disembark"
      { text: "Little Leota waves goodbye from above as you climb out of your Doom Buggy.", source: HM }
    ],
    quests: [
      // evidence: "the stretching rooms are not elevators and instead have the ceilings rise"
      {
        type: "truefalse",
        id: "haunted-mansion-x1",
        statement: "Florida\u2019s Stretching Room is secretly an elevator.",
        answer: false,
        explain: "Fiction! That\u2019s Disneyland\u2019s. In Florida the ceiling rises.",
        source: HM
      },
      // evidence: "the guests go through the library where busts of ghost writers stare and follow them"
      {
        type: "trivia",
        id: "haunted-mansion-x2",
        question: "In the library, whose statue busts seem to follow you with their eyes?",
        choices: ["Ghost writers", "Ghost kings", "Ghost pirates", "Ghost chefs"],
        answer: 0,
        explain: "Busts of ghost writers watch you go by. Get it? Ghost writers!",
        source: HM
      },
      // evidence: "Madame Leota is seen floating and reciting her spell as instruments play"
      {
        type: "trivia",
        id: "haunted-mansion-x3",
        question: "Who floats in the s\xE9ance room reciting a spell while instruments play?",
        choices: ["Madame Leota", "The Hatbox Ghost", "Constance", "The Ghost Host"],
        answer: 0,
        explain: "Madame Leota calls the spirits with her spell.",
        source: HM
      },
      // evidence: "the vehicles pass a group of three ghosts"
      {
        type: "trivia",
        id: "haunted-mansion-x4",
        question: "How many hitchhiking ghosts are waiting near the end of the ride?",
        choices: ["1", "3", "5", "999"],
        answer: 1,
        explain: "Three hitchhiking ghosts. Watch your Doom Buggy!",
        source: HM
      },
      // evidence: "gleefully recites twisted wedding vows" (Constance Hatchaway)
      {
        type: "trivia",
        id: "haunted-mansion-x5",
        question: "What is the name of the bride in the attic?",
        choices: ["Constance Hatchaway", "Prudence Pock", "Madame Leota", "Emily Grim"],
        answer: 0,
        explain: "Constance Hatchaway recites her wedding vows in the attic.",
        source: HM
      },
      // evidence: "a murder mystery for guests to solve featuring the sinister Dread Family"
      {
        type: "trivia",
        id: "haunted-mansion-x6",
        question: "Which ghostly family is part of a mystery in the queue?",
        choices: ["The Dread Family", "The Gloom Family", "The Spooks", "The Addams Family"],
        answer: 0,
        explain: "The Dread Family has a mystery for guests to solve.",
        source: HM
      },
      // evidence: "a crypt for Prudence Pock the poetess"
      {
        type: "trivia",
        id: "haunted-mansion-x7",
        question: "In the queue, Prudence Pock has a crypt. What was her job?",
        choices: ["Poetess", "Pirate", "Baker", "Painter"],
        answer: 0,
        explain: "Prudence Pock was a poetess, a writer of poems.",
        source: HM
      },
      // evidence: "Throughout the scene, a quintet of busts sing"
      {
        type: "guess",
        id: "haunted-mansion-x8",
        question: "How many singing busts perform in the graveyard scene?",
        answer: 5,
        min: 1,
        max: 20,
        step: 1,
        unit: "busts",
        tolerance: 1,
        explain: "A quintet: five singing busts!",
        source: HM
      },
      // evidence: "was composed by Buddy Baker with lyrics by Atencio"
      {
        type: "truefalse",
        id: "haunted-mansion-x9",
        statement: "The Mansion\u2019s theme song was composed by Buddy Baker, with words by X Atencio.",
        answer: true,
        explain: "Fact! Buddy Baker wrote the music and X Atencio wrote the lyrics.",
        source: HM
      },
      // evidence: "The Mansion opened to all guests on August 12, 1969." / "Opening date: October 1, 1971" / "a new \"interactive queue\" debuted at the Walt Disney World location" (2011)
      {
        type: "order",
        id: "haunted-mansion-x10",
        prompt: "Put these Mansion moments in order, oldest first.",
        items: [
          "Disneyland\u2019s Mansion opens (1969)",
          "Florida\u2019s Mansion opens (1971)",
          "Florida\u2019s interactive queue arrives (2011)"
        ],
        explain: "Disneyland in 1969, Florida in 1971, and the interactive queue in 2011.",
        source: HM
      },
      // evidence: "This Ballroom Scene is the most famous and elaborate use of the" [Pepper's ghost illusion]
      {
        type: "trivia",
        id: "haunted-mansion-x11",
        question: "The see-through dancing ghosts in the ballroom use a famous old trick. What is it called?",
        choices: ["Pepper\u2019s ghost", "Salt\u2019s spirit", "Mirror magic", "Ghost glue"],
        answer: 0,
        explain: "It\u2019s called Pepper\u2019s ghost, a trick with glass and light.",
        source: HM
      },
      // evidence: "an invisible pianist plays a sinister version of"
      {
        type: "trivia",
        id: "haunted-mansion-x12",
        question: "Who plays the piano in the music room?",
        choices: ["An invisible pianist", "A skeleton", "A cat", "Madame Leota"],
        answer: 0,
        explain: "An invisible pianist plays a spooky version of the theme song.",
        source: HM
      },
      // evidence: "where footprints can be seen and candelabras are blown out occasionally by unseen ghosts"
      {
        type: "truefalse",
        id: "haunted-mansion-x13",
        statement: "On the Endless Staircase, you can see ghostly footprints.",
        answer: true,
        explain: "Fact! Footprints appear and unseen ghosts blow out candles.",
        source: HM
      },
      // evidence: "a crypt for Prudence Pock the poetess"
      {
        type: "spy",
        id: "haunted-mansion-x14",
        prompt: "Find the crypt of Prudence Pock, the ghostly poetess.",
        hint: "It\u2019s in the interactive queue with the other crypts."
      },
      // evidence: "a murder mystery for guests to solve featuring the sinister Dread Family"
      {
        type: "spy",
        id: "haunted-mansion-x15",
        prompt: "Look for a clue about the Dread Family in the line.",
        hint: "Read the names and words carved nearby."
      },
      {
        type: "spy",
        id: "haunted-mansion-x16",
        prompt: "Find a tombstone with a funny name or silly poem. Read it out loud!"
      },
      {
        type: "spy",
        id: "haunted-mansion-x17",
        prompt: "Spot something with bats on it. How many bats can you count?"
      },
      {
        type: "challenge",
        id: "haunted-mansion-x18",
        prompt: "Everyone do a friendly ghost \u201CBoooo!\u201D Then whisper \u201CRoom for one more...\u201D"
      },
      {
        type: "challenge",
        id: "haunted-mansion-x19",
        prompt: "Be a singing bust! Stand very still and sing one line of any song in your deepest voice."
      },
      {
        type: "challenge",
        id: "haunted-mansion-x20",
        prompt: "Make your best Ghost Host welcome speech, in a slow, mysterious voice."
      },
      {
        type: "challenge",
        id: "haunted-mansion-x21",
        prompt: "Pretend you\u2019re a hitchhiking ghost and do your best thumbs-up pose!"
      },
      {
        type: "wyr",
        id: "haunted-mansion-x22",
        a: "Dance at the ghost ballroom party",
        b: "Sing with the busts in the graveyard"
      },
      {
        type: "wyr",
        id: "haunted-mansion-x23",
        a: "Have a ghost follow you home",
        b: "Have a portrait that changes every time you look"
      },
      {
        type: "wyr",
        id: "haunted-mansion-x24",
        a: "Be able to walk through walls",
        b: "Be able to float in the air"
      },
      {
        type: "wyr",
        id: "haunted-mansion-x25",
        a: "Ride in a Doom Buggy",
        b: "Climb the Endless Staircase"
      },
      {
        type: "emoji",
        id: "haunted-mansion-x26",
        emojis: "\u{1F52E} \u{1F469} \u{1F5E3}\uFE0F",
        hint: "A head inside a crystal ball.",
        choices: ["Madame Leota", "Mama Odie", "The Evil Queen", "Ursula"],
        answer: 0
      },
      {
        type: "emoji",
        id: "haunted-mansion-x27",
        emojis: "\u{1F47B} \u{1F47B} \u{1F47B} \u{1F44D}",
        hint: "They want a ride home with you!",
        choices: ["Hitchhiking Ghosts", "Singing Busts", "Ghost Host", "Dread Family"],
        answer: 0
      },
      {
        type: "emoji",
        id: "haunted-mansion-x28",
        emojis: "\u{1F470} \u{1F48D} \u{1F56F}\uFE0F",
        hint: "She\u2019s waiting in the attic.",
        choices: ["The bride, Constance", "Cinderella", "Belle", "Madame Leota"],
        answer: 0
      }
    ]
  },
  "hall-of-presidents": {
    facts: [
      // evidence: "Morgan Freeman replaced Hall as narrator for the 2009 revised show"
      { text: "Actor Morgan Freeman became the show\u2019s narrator in 2009.", source: HOP },
      // evidence: "The show opened as Great Moments with Mr. Lincoln at the world's fair in 1964"
      {
        text: "The idea first appeared as a Lincoln show called Great Moments with Mr. Lincoln at the 1964 world\u2019s fair.",
        source: HOP
      },
      // evidence: "Originally conceived by Walt Disney as an attraction for Disneyland Park in California"
      { text: "Walt Disney first dreamed up the show for Disneyland in California.", source: HOP }
    ],
    quests: [
      // evidence: "Audience capacity: 700 per show"
      {
        type: "guess",
        id: "hall-of-presidents-x1",
        question: "How many people can watch each show?",
        answer: 700,
        min: 50,
        max: 2e3,
        step: 50,
        unit: "people",
        tolerance: 100,
        explain: "700 people per show!",
        source: HOP
      },
      // evidence: "Duration: 25 minutes"
      {
        type: "guess",
        id: "hall-of-presidents-x2",
        question: "How many minutes long is the show?",
        answer: 25,
        min: 5,
        max: 90,
        step: 1,
        unit: "minutes",
        tolerance: 4,
        explain: "About 25 minutes.",
        source: HOP
      },
      // evidence: "the film portion began at the Constitutional Convention in 1787"
      {
        type: "trivia",
        id: "hall-of-presidents-x3",
        question: "The original show\u2019s film began at which famous meeting?",
        choices: [
          "The Constitutional Convention",
          "The first Thanksgiving",
          "The Moon landing",
          "The Boston Tea Party"
        ],
        answer: 0,
        explain: "It started at the Constitutional Convention in 1787.",
        source: HOP
      },
      // evidence: "George Washington was added as a third speaking president."
      {
        type: "trivia",
        id: "hall-of-presidents-x4",
        question: "In 2009, which president was added as a third speaking president?",
        choices: ["George Washington", "Thomas Jefferson", "John Adams", "Teddy Roosevelt"],
        answer: 0,
        explain: "George Washington joined Lincoln and the current president as a speaker.",
        source: HOP
      },
      // evidence: "All versions of the attraction begin with a film presentation, followed by a lifting of a curtain"
      {
        type: "truefalse",
        id: "hall-of-presidents-x5",
        statement: "The show starts with a film, then a curtain lifts to reveal the presidents.",
        answer: true,
        explain: "Fact! Every version has worked this way.",
        source: HOP
      },
      // evidence: "it would have been a representation of Colonial Boston on the eve of the American Revolution"
      {
        type: "trivia",
        id: "hall-of-presidents-x6",
        question: "Walt once planned a \u201CLiberty Street\u201D for Disneyland. Which colonial city would it have looked like?",
        choices: ["Boston", "Miami", "Los Angeles", "Denver"],
        answer: 0,
        explain: "It would have looked like colonial Boston just before the American Revolution.",
        source: HOP
      },
      // evidence: "narrated by actor Lawrence Dobkin" / "Maya Angelou narrated the revised script" (1993) / "J. D. Hall replaced Angelou" (2001) / "Morgan Freeman replaced Hall as narrator for the 2009 revised show"
      {
        type: "order",
        id: "hall-of-presidents-x7",
        prompt: "Put the show\u2019s narrators in order, first to most recent.",
        items: ["Lawrence Dobkin", "Maya Angelou", "J. D. Hall", "Morgan Freeman"],
        explain: "Dobkin was first, then Maya Angelou in 1993, J. D. Hall in 2001 and Morgan Freeman in 2009.",
        source: HOP
      },
      // evidence: "The attraction closed for refurbishment on January 20, 2025" / "reopened on June 29 of the same year"
      {
        type: "truefalse",
        id: "hall-of-presidents-x8",
        statement: "The Hall of Presidents closed for a refresh in 2025 and reopened the same year.",
        answer: true,
        explain: "Fact! It closed in January 2025 and reopened on June 29, 2025.",
        source: HOP
      },
      // evidence: "Nowhere in the world is presented a government of so much liberty and equality."
      {
        type: "trivia",
        id: "hall-of-presidents-x9",
        question: "Lincoln says: \u201CNowhere in the world is presented a government of so much liberty and ___.\u201D",
        choices: ["equality", "pizza", "sunshine", "music"],
        answer: 0,
        explain: "\u201C...so much liberty and equality.\u201D",
        source: HOP
      },
      // evidence: "The Hall of Presidents opened with the Magic Kingdom on October 1, 1971"
      {
        type: "truefalse",
        id: "hall-of-presidents-x10",
        statement: "The Hall of Presidents opened many years after Magic Kingdom did.",
        answer: false,
        explain: "Fiction! It opened on the park\u2019s very first day, October 1, 1971.",
        source: HOP
      },
      // evidence: "the film portion began at the Constitutional Convention in 1787"
      {
        type: "guess",
        id: "hall-of-presidents-x11",
        question: "In what year was the Constitutional Convention, where the original film began?",
        answer: 1787,
        min: 1600,
        max: 1900,
        step: 1,
        unit: "",
        tolerance: 10,
        explain: "1787, when the U.S. Constitution was written.",
        source: HOP
      },
      // evidence: "the attraction was renamed The Hall of Presidents: A Celebration of Liberty’s Leaders"
      {
        type: "trivia",
        id: "hall-of-presidents-x12",
        question: "In 2008 the show got a longer name: The Hall of Presidents: A Celebration of ___.",
        choices: ["Liberty\u2019s Leaders", "Famous Faces", "American Heroes", "Big Speeches"],
        answer: 0,
        explain: "A Celebration of Liberty\u2019s Leaders.",
        source: HOP
      },
      {
        type: "spy",
        id: "hall-of-presidents-x13",
        prompt: "Spot something red, white and blue nearby."
      },
      {
        type: "spy",
        id: "hall-of-presidents-x14",
        prompt: "Find an eagle, a star or a flag design. How many stars can you count?"
      },
      {
        type: "spy",
        id: "hall-of-presidents-x15",
        prompt: "Look for something that looks like it came from colonial times, like a lantern or old sign."
      },
      {
        type: "spy",
        id: "hall-of-presidents-x16",
        prompt: "Find a picture or name of a president anywhere around you."
      },
      {
        type: "challenge",
        id: "hall-of-presidents-x17",
        prompt: "Give a 10-second speech about the best snack in the park. Everyone claps at the end!"
      },
      {
        type: "challenge",
        id: "hall-of-presidents-x18",
        prompt: "Hold a pretend vote: what should your group do next? Everyone raises a hand for their pick."
      },
      {
        type: "challenge",
        id: "hall-of-presidents-x19",
        prompt: "Stand as still as an Audio-Animatronic figure. First one to giggle is out!"
      },
      {
        type: "challenge",
        id: "hall-of-presidents-x20",
        prompt: "Name as many presidents as your group can together. Can you get to 10?"
      },
      {
        type: "wyr",
        id: "hall-of-presidents-x21",
        a: "Give a speech on the big stage",
        b: "Be one of the presidents standing on stage"
      },
      {
        type: "wyr",
        id: "hall-of-presidents-x22",
        a: "Meet George Washington",
        b: "Meet Abraham Lincoln"
      },
      {
        type: "wyr",
        id: "hall-of-presidents-x23",
        a: "Write a new law about recess",
        b: "Write a new law about dessert"
      },
      {
        type: "wyr",
        id: "hall-of-presidents-x24",
        a: "Be the narrator of the show",
        b: "Run the curtain that reveals the presidents"
      },
      {
        type: "emoji",
        id: "hall-of-presidents-x25",
        emojis: "\u{1F3A9} \u{1F9D4} \u{1F1FA}\u{1F1F8}",
        hint: "A tall president famous for his top hat.",
        choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        answer: 0
      },
      {
        type: "emoji",
        id: "hall-of-presidents-x26",
        emojis: "1\uFE0F\u20E3 \u{1F1FA}\u{1F1F8} \u{1F3DB}\uFE0F",
        hint: "The very first president.",
        choices: ["George Washington", "Abraham Lincoln", "James Madison", "Teddy Roosevelt"],
        answer: 0
      }
    ]
  }
};

// ../src/data/parks/mk-extra/tomorrowland.ts
var WIKI2 = "https://en.wikipedia.org/wiki/";
var SM = WIKI2 + "Space_Mountain_(Magic_Kingdom)";
var TRON = WIKI2 + "Tron_Lightcycle_Power_Run";
var TRON_FILM = WIKI2 + "Tron:_Legacy";
var BUZZ = WIKI2 + "Buzz_Lightyear's_Space_Ranger_Spin";
var TOY_STORY = WIKI2 + "Toy_Story";
var PM = WIKI2 + "Tomorrowland_Transit_Authority_PeopleMover";
var AO = WIKI2 + "Astro_Orbiter";
var COP = WIKI2 + "Walt_Disney's_Carousel_of_Progress";
var LF = WIKI2 + "Monsters,_Inc._Laugh_Floor";
var LF_DISNEY = "https://disneyworld.disney.go.com/attractions/magic-kingdom/monsters-inc-laugh-floor/";
var MONSTERS = WIKI2 + "Monsters,_Inc.";
var extra5 = {
  "space-mountain": {
    facts: [
      // evidence: "30 trains with 2 cars"
      { text: "Space Mountain has 30 trains, and each one has two rocket-shaped cars.", source: SM },
      // evidence: "one of the first computer operated roller coasters"
      { text: "Space Mountain was one of the first roller coasters run by computers.", source: SM },
      // evidence: "passing through a red and orange swirling wormhole"
      { text: "Near the end of the ride, you zoom through a red and orange swirling wormhole.", source: SM },
      // evidence: "identical mirror images of one another"
      { text: "Space Mountain has two tracks that are mirror images of each other.", source: SM }
    ],
    quests: [
      // evidence: "Alpha (left) and Omega (right)"
      {
        type: "trivia",
        id: "space-mountain-x1",
        question: "What are the names of Space Mountain\u2019s two tracks?",
        choices: ["Red and Blue", "Alpha and Omega", "Sun and Moon", "Rocket and Comet"],
        answer: 1,
        explain: "The line splits into Alpha (left) and Omega (right).",
        source: SM
      },
      // evidence: "Height restriction: 44 in (112 cm)"
      {
        type: "guess",
        id: "space-mountain-x2",
        question: "How many inches tall do you need to be to ride Space Mountain?",
        answer: 44,
        min: 30,
        max: 60,
        step: 1,
        unit: "inches",
        tolerance: 2,
        explain: "Riders need to be at least 44 inches (112 cm) tall.",
        source: SM
      },
      // evidence: "the coaster tracks' steepest drop of 39 degrees"
      {
        type: "guess",
        id: "space-mountain-x3",
        question: "How steep is Space Mountain\u2019s steepest drop, in degrees?",
        answer: 39,
        min: 10,
        max: 90,
        step: 1,
        unit: "degrees",
        tolerance: 5,
        explain: "The steepest drop is 39 degrees, in total darkness!",
        source: SM
      },
      // evidence: "Inversions: 0 / 0"
      {
        type: "truefalse",
        id: "space-mountain-x4",
        statement: "Space Mountain flips you upside down.",
        answer: false,
        explain: "Fiction! Space Mountain has zero upside-down loops.",
        source: SM
      },
      // evidence: "Originally called "Space Voyage""
      {
        type: "trivia",
        id: "space-mountain-x5",
        question: "What was the idea for Space Mountain first called?",
        choices: ["Space Voyage", "Star Race", "Moon Coaster", "Galaxy Jet"],
        answer: 0,
        explain: "The early idea was called \u201CSpace Voyage.\u201D",
        source: SM
      },
      // evidence: "the oldest operating roller coaster in the state of Florida"
      {
        type: "truefalse",
        id: "space-mountain-x6",
        statement: "Space Mountain is the oldest roller coaster still running in Florida.",
        answer: true,
        explain: "Fact! It\u2019s the oldest operating coaster in the whole state.",
        source: SM
      },
      // evidence: "Visitors board the trains in the Starport: Seven Five"
      {
        type: "trivia",
        id: "space-mountain-x7",
        question: "What is the boarding station inside Space Mountain called?",
        choices: ["Moonbase One", "Starport: Seven Five", "Rocket Dock 9", "Launch Pad Z"],
        answer: 1,
        explain: "You board your rocket at Starport: Seven Five.",
        source: SM
      },
      // evidence: "a tunnel, called the "star corridor", under the Walt Disney World Railroad tracks"
      {
        type: "trivia",
        id: "space-mountain-x8",
        question: "The line goes through a tunnel underneath what?",
        choices: ["A lake", "The Walt Disney World Railroad tracks", "Cinderella Castle", "The monorail"],
        answer: 1,
        explain: "The star tunnel runs under the Walt Disney World Railroad tracks.",
        source: SM
      },
      // evidence: "Length: 3,196 ft (974.1 m) / 3,186 ft (971.1 m)"
      {
        type: "guess",
        id: "space-mountain-x9",
        question: "About how many feet long is the Alpha track?",
        answer: 3196,
        min: 500,
        max: 6e3,
        step: 50,
        unit: "feet",
        tolerance: 300,
        explain: "Alpha is 3,196 feet long and Omega is 3,186 feet.",
        source: SM
      },
      // evidence: "From 1975 to 1989, the train cars featured two rows instead of three" / "The newer trains introduced the use of lap bars" / "April 19 to November 21, 2009"
      {
        type: "order",
        id: "space-mountain-x10",
        prompt: "Put these Space Mountain moments in order, oldest first.",
        items: ["Space Mountain opens (1975)", "New trains with lap bars (1989)", "Big makeover (2009)"],
        explain: "It opened in 1975, got new trains in 1989 and a big refurbishment in 2009.",
        source: SM
      },
      // evidence: "repainted in a blue and gray color scheme"
      {
        type: "trivia",
        id: "space-mountain-x11",
        question: "The trains were white at first. What colors were they painted in 2009?",
        choices: ["Red and gold", "Blue and gray", "Green and black", "Pink and purple"],
        answer: 1,
        explain: "The 2009 refurbishment repainted them blue and gray.",
        source: SM
      },
      // evidence: "opened in 1959" (the Matterhorn Bobsleds, which Space Mountain descends from)
      {
        type: "trivia",
        id: "space-mountain-x12",
        question: "Which older Disneyland coaster is Space Mountain\u2019s \u201Cancestor\u201D?",
        choices: ["Big Thunder Mountain", "Matterhorn Bobsleds", "Splash Mountain", "Gadget\u2019s Go Coaster"],
        answer: 1,
        explain: "Space Mountain descends from the Matterhorn Bobsleds, which opened in 1959.",
        source: SM
      },
      // evidence: "a large room filled with small, silver, ball-pit like balls"
      {
        type: "spy",
        id: "space-mountain-x13",
        prompt: "Find the room filled with lots of little silver balls. What do they look like to you?",
        hint: "It\u2019s near the start of the line."
      },
      // evidence: "passes by "space windows" in the walls"
      {
        type: "spy",
        id: "space-mountain-x14",
        prompt: "Spot a \u201Cspace window\u201D in the wall. What can you see out there?",
        hint: "Look along the walls as the line climbs."
      },
      {
        type: "spy",
        id: "space-mountain-x15",
        prompt: "Find something that looks like it belongs on a real spaceship."
      },
      {
        type: "spy",
        id: "space-mountain-x16",
        prompt: "Count how many glowing lights or \u201Cstars\u201D you can find in one look."
      },
      {
        type: "challenge",
        id: "space-mountain-x17",
        prompt: "Moonwalk time! Everyone take three slow, floaty astronaut steps in place."
      },
      {
        type: "challenge",
        id: "space-mountain-x18",
        prompt: "Be mission control: take turns saying a robot-voice safety announcement."
      },
      {
        type: "challenge",
        id: "space-mountain-x19",
        prompt: "Name a planet for every letter you can: M for Mars, J for Jupiter\u2026 go!"
      },
      {
        type: "challenge",
        id: "space-mountain-x20",
        prompt: "Invent a name for your rocket and tell everyone what it can do."
      },
      {
        type: "wyr",
        id: "space-mountain-x21",
        a: "Ride a rocket through a meteor shower",
        b: "Ride a rocket around Saturn\u2019s rings"
      },
      { type: "wyr", id: "space-mountain-x22", a: "Have a pet alien", b: "Have a pet robot" },
      { type: "wyr", id: "space-mountain-x23", a: "Ride in total darkness", b: "Ride surrounded by sparkling stars" },
      { type: "wyr", id: "space-mountain-x24", a: "Live on a space station", b: "Live on the Moon" },
      {
        type: "emoji",
        id: "space-mountain-x25",
        emojis: "\u{1F680} \u26F0\uFE0F",
        hint: "You\u2019re in line for it!",
        choices: ["Big Thunder Mountain", "Space Mountain", "Rocket Jets", "Moon Hill"],
        answer: 1
      },
      {
        type: "emoji",
        id: "space-mountain-x26",
        emojis: "\u2B50 \u{1F30C} \u{1F573}\uFE0F",
        hint: "Stars, a galaxy and a hole\u2026 that swirls at the end of the ride.",
        choices: ["Black ice", "Wormhole", "Volcano", "Tunnel of love"],
        answer: 1
      },
      {
        type: "emoji",
        id: "space-mountain-x27",
        emojis: "\u{1F468}\u200D\u{1F680} \u{1F315} \u{1F6B6}",
        hint: "A floaty way to walk.",
        choices: ["Moonwalk", "Sleepwalk", "Boardwalk", "Crosswalk"],
        answer: 0
      }
    ]
  },
  tron: {
    facts: [
      // evidence: "7 trains with 7 cars"
      { text: "TRON has 7 trains, and each train has 7 lightcycle cars.", source: TRON },
      // evidence: "takes riders inside and outside the attraction's building"
      { text: "The track zooms both inside and outside the building.", source: TRON },
      // evidence: "Capacity: 1,680 riders per hour"
      { text: "About 1,680 riders can race on TRON every hour.", source: TRON },
      // evidence: "the lightcycles featured in the Tron franchise," primarily from "Tron: Legacy (2010)"
      { text: "The lightcycles are mostly inspired by the movie Tron: Legacy (2010).", source: TRON }
    ],
    quests: [
      // evidence: "Team Blue, the team guests join"
      {
        type: "trivia",
        id: "tron-x1",
        question: "Which team do riders join on TRON?",
        choices: ["Team Red", "Team Yellow", "Team Blue", "Team Orange"],
        answer: 2,
        explain: "You race for Team Blue!",
        source: TRON
      },
      // evidence: "capture eight 'Energy Gates'"
      {
        type: "guess",
        id: "tron-x2",
        question: "How many Energy Gates does Team Blue need to capture?",
        answer: 8,
        min: 1,
        max: 20,
        step: 1,
        unit: "gates",
        tolerance: 1,
        explain: "Team Blue races to capture eight Energy Gates.",
        source: TRON
      },
      // evidence: "riders 2 across in a single row for a total of 14 riders per train"
      {
        type: "guess",
        id: "tron-x3",
        question: "How many riders fit on one TRON train?",
        answer: 14,
        min: 2,
        max: 40,
        step: 1,
        unit: "riders",
        tolerance: 2,
        explain: "14 riders: 2 across in each of the 7 cars.",
        source: TRON
      },
      // evidence: "Height: 78.1 ft (23.8 m)"
      {
        type: "guess",
        id: "tron-x4",
        question: "About how many feet tall does the TRON track get?",
        answer: 78,
        min: 10,
        max: 200,
        step: 1,
        unit: "feet",
        tolerance: 8,
        explain: "The coaster reaches 78.1 feet (23.8 m).",
        source: TRON
      },
      // evidence: "lean forward and grip a set of handlebars"
      {
        type: "trivia",
        id: "tron-x5",
        question: "How do you sit on a lightcycle?",
        choices: ["Lying down flat", "Leaning forward gripping handlebars", "Standing up", "Sitting backwards"],
        answer: 1,
        explain: "Riders lean forward and grip handlebars, like on a motorbike.",
        source: TRON
      },
      // evidence: "Inversions: 0"
      {
        type: "truefalse",
        id: "tron-x6",
        statement: "TRON Lightcycle / Run turns you upside down.",
        answer: false,
        explain: "Fiction! It has zero inversions, just lots of speed.",
        source: TRON
      },
      // evidence: "Opening date: June 16, 2016" (Shanghai Disneyland)
      {
        type: "truefalse",
        id: "tron-x7",
        statement: "The very first TRON coaster opened at Shanghai Disneyland.",
        answer: true,
        explain: "Fact! Shanghai\u2019s version opened on June 16, 2016.",
        source: TRON
      },
      // evidence: "Initiate in 3, 2, 1!"
      {
        type: "trivia",
        id: "tron-x8",
        question: "What do you hear right before the launch?",
        choices: ["\u201CReady, set, go!\u201D", "\u201CInitiate in 3, 2, 1!\u201D", "\u201CBlast off!\u201D", "\u201CHold on tight!\u201D"],
        answer: 1,
        explain: "The countdown is \u201CInitiate in 3, 2, 1!\u201D",
        source: TRON
      },
      // evidence: "composed the film's musical score"
      {
        type: "trivia",
        id: "tron-x9",
        question: "Which music duo made the score for Tron: Legacy?",
        choices: ["Daft Punk", "The Beatles", "Imagine Dragons", "Coldplay"],
        answer: 0,
        explain: "Daft Punk composed the Tron: Legacy music, mixing orchestra and electronic sounds.",
        source: TRON_FILM
      },
      // evidence: "Flynn's "identity disc" is the master key to the Grid"
      {
        type: "trivia",
        id: "tron-x10",
        question: "In Tron: Legacy, what is the master key to the Grid?",
        choices: ["A golden key", "Flynn\u2019s identity disc", "A lightcycle", "A secret password"],
        answer: 1,
        explain: "Kevin Flynn\u2019s identity disc is the master key to the Grid.",
        source: TRON_FILM
      },
      // evidence: "Samuel "Sam" Flynn, Kevin‘s son"
      {
        type: "trivia",
        id: "tron-x11",
        question: "In Tron: Legacy, what is Kevin Flynn\u2019s son called?",
        choices: ["Sam", "Clu", "Alan", "Max"],
        answer: 0,
        explain: "Sam Flynn goes into the Grid to find his dad.",
        source: TRON_FILM
      },
      // evidence: "a sequel to Tron (1982)" / "A sequel, Tron: Ares, was released in 2025."
      {
        type: "order",
        id: "tron-x12",
        prompt: "Put the Tron movies in order, oldest first.",
        items: ["Tron (1982)", "Tron: Legacy (2010)", "Tron: Ares (2025)"],
        explain: "Tron came out in 1982, Tron: Legacy in 2010 and Tron: Ares in 2025.",
        source: TRON_FILM
      },
      // evidence: "Team Red, Team Yellow, Team Orange," and "Team Blue"
      {
        type: "spy",
        id: "tron-x13",
        prompt: "In the team room, find the colors of the other racing teams. How many can you spot?",
        hint: "Red, yellow, orange\u2026 and your team, blue!"
      },
      // evidence: "all loose items must be stowed in the lockers"
      {
        type: "spy",
        id: "tron-x14",
        prompt: "Spot a screen telling riders where loose items go.",
        hint: "Look at the monitors near the lockers."
      },
      {
        type: "spy",
        id: "tron-x15",
        prompt: "Find a shape or pattern that looks like a computer circuit."
      },
      {
        type: "spy",
        id: "tron-x16",
        prompt: "Find something that looks like it came from inside a video game."
      },
      {
        type: "challenge",
        id: "tron-x17",
        prompt: "Hold your \u201Chandlebars\u201D and lean forward. Everyone make your best lightcycle zoom sound!"
      },
      {
        type: "challenge",
        id: "tron-x18",
        prompt: "Talk like a computer program for one minute. Beep boop, user!"
      },
      {
        type: "challenge",
        id: "tron-x19",
        prompt: "Make up a Team Blue cheer and say it together."
      },
      {
        type: "challenge",
        id: "tron-x20",
        prompt: "Freeze like a glitching video game character until someone says \u201Creboot!\u201D"
      },
      { type: "wyr", id: "tron-x21", a: "Race a lightcycle", b: "Fly a light jet" },
      { type: "wyr", id: "tron-x22", a: "Glow bright blue", b: "Glow bright orange" },
      { type: "wyr", id: "tron-x23", a: "Live inside a video game", b: "Have a video game character live with you" },
      {
        type: "wyr",
        id: "tron-x24",
        a: "Ride your lightcycle on the Grid",
        b: "Ride your lightcycle through Magic Kingdom"
      },
      {
        type: "emoji",
        id: "tron-x25",
        emojis: "\u{1F4A1} \u{1F3CD}\uFE0F",
        hint: "A glowing motorbike from the Grid.",
        choices: ["Lightcycle", "Moped", "Scooter", "Hoverboard"],
        answer: 0
      },
      {
        type: "emoji",
        id: "tron-x26",
        emojis: "\u{1F4BB} \u{1F310} \u{1F537}",
        hint: "The digital world inside the computer.",
        choices: ["The Cloud", "The Grid", "The Web", "The Matrix"],
        answer: 1
      },
      {
        type: "emoji",
        id: "tron-x27",
        emojis: "\u{1F535} \u{1F465} \u{1F3C1}",
        hint: "The team you race for.",
        choices: ["Team Red", "Team Blue", "Team Green", "Team Gold"],
        answer: 1
      }
    ]
  },
  "buzz-lightyear": {
    facts: [
      // evidence: "combines a carnival game and a third-generation Omnimover system."
      { text: "The ride mixes a carnival game with an Omnimover ride system.", source: BUZZ },
      // evidence: "which runs through the south show building"
      { text: "The PeopleMover passes through the same building as this ride.", source: BUZZ },
      // evidence: "Zurg is shooting at Buzz Lightyear."
      { text: "Since the 2026 update, Zurg shoots at Buzz instead of at riders.", source: BUZZ },
      // evidence: "The film's signature song "You've Got a Friend in Me", was written in one day."
      { text: "The Toy Story song \u201CYou\u2019ve Got a Friend in Me\u201D was written in one day.", source: TOY_STORY }
    ],
    quests: [
      // evidence: "Replaced: Delta Dreamflight"
      {
        type: "trivia",
        id: "buzz-lightyear-x1",
        question: "Which ride was here before Buzz Lightyear\u2019s Space Ranger Spin?",
        choices: ["Delta Dreamflight", "Mr. Toad\u2019s Wild Ride", "Captain EO", "Horizons"],
        answer: 0,
        explain: "Buzz replaced Delta Dreamflight when it opened in 1998.",
        source: BUZZ
      },
      // evidence: "originally constructed in 1972 for If You Had Wings"
      {
        type: "truefalse",
        id: "buzz-lightyear-x2",
        statement: "The track and ride system were first built for a different ride in 1972.",
        answer: true,
        explain: "Fact! It was built in 1972 for If You Had Wings.",
        source: BUZZ
      },
      // evidence: "to steal the batteries (known as "crystallic fusion cells")."
      {
        type: "trivia",
        id: "buzz-lightyear-x3",
        question: "What is Zurg trying to steal?",
        choices: ["Buzz\u2019s wings", "Batteries called crystallic fusion cells", "Woody\u2019s hat", "The claw"],
        answer: 1,
        explain: "Zurg wants the batteries, called crystallic fusion cells.",
        source: BUZZ
      },
      // evidence: "Participants are "Star Command" raw recruits sent to defeat Zurg."
      {
        type: "trivia",
        id: "buzz-lightyear-x4",
        question: "Who are you on this ride?",
        choices: ["Pizza Planet cooks", "Star Command recruits", "Zurg\u2019s robots", "Toys in Andy\u2019s room"],
        answer: 1,
        explain: "You\u2019re brand-new Star Command recruits sent to defeat Zurg!",
        source: BUZZ
      },
      // evidence: "Mattel originally sponsored the Magic Kingdom attraction from its opening to 1999."
      {
        type: "trivia",
        id: "buzz-lightyear-x5",
        question: "Which toy company first sponsored this ride?",
        choices: ["Lego", "Hasbro", "Mattel", "Fisher-Price"],
        answer: 2,
        explain: "Mattel sponsored it from opening day until 1999.",
        source: BUZZ
      },
      // evidence: "they are now handheld like the other versions"
      {
        type: "truefalse",
        id: "buzz-lightyear-x6",
        statement: "Since 2026, you can pick up and hold your blaster.",
        answer: true,
        explain: "Fact! The blasters were stuck in place before, and now they\u2019re handheld.",
        source: BUZZ
      },
      // evidence: "The first entirely computer-animated feature film"
      {
        type: "truefalse",
        id: "buzz-lightyear-x7",
        statement: "Toy Story was the first movie made entirely with computer animation.",
        answer: true,
        explain: "Fact! It was the first entirely computer-animated feature film.",
        source: TOY_STORY
      },
      // evidence: "Tim Allen as Buzz Lightyear, a Space Ranger action figure"
      {
        type: "trivia",
        id: "buzz-lightyear-x8",
        question: "Who voices Buzz Lightyear in Toy Story?",
        choices: ["Tom Hanks", "Tim Allen", "Billy Crystal", "John Goodman"],
        answer: 1,
        explain: "Tim Allen voices Buzz. Tom Hanks voices Woody!",
        source: TOY_STORY
      },
      // evidence: "At Pizza Planet, Buzz mistakes a claw machine arcade game for a rocket"
      {
        type: "trivia",
        id: "buzz-lightyear-x9",
        question: "In Toy Story, where does Buzz think a claw machine is a rocket?",
        choices: ["Pizza Planet", "Al\u2019s Toy Barn", "Sid\u2019s house", "Andy\u2019s room"],
        answer: 0,
        explain: "At Pizza Planet, Buzz mistakes the claw machine for a rocket.",
        source: TOY_STORY
      },
      // evidence: "the addition of the three-eyed squeaky toy aliens"
      {
        type: "guess",
        id: "buzz-lightyear-x10",
        question: "How many eyes does each Little Green Man alien have?",
        answer: 3,
        min: 1,
        max: 10,
        step: 1,
        unit: "eyes",
        tolerance: 0,
        explain: "They\u2019re three-eyed squeaky toy aliens. Ooooh!",
        source: TOY_STORY
      },
      // evidence: "John Morris as Andy Davis, the six-year-old boy who owns all the toys"
      {
        type: "guess",
        id: "buzz-lightyear-x11",
        question: "How old is Andy in the first Toy Story?",
        answer: 6,
        min: 1,
        max: 15,
        step: 1,
        unit: "years",
        tolerance: 1,
        explain: "Andy is six years old.",
        source: TOY_STORY
      },
      // evidence: "Sid Phillips, Andy's mischievous next-door neighbor who destroys toys for fun"
      {
        type: "trivia",
        id: "buzz-lightyear-x12",
        question: "Who is Andy\u2019s next-door neighbor who is mean to toys?",
        choices: ["Sid", "Al", "Bonnie", "Molly"],
        answer: 0,
        explain: "Sid Phillips lives next door and breaks toys for fun.",
        source: TOY_STORY
      },
      // evidence: "Toy Story is a 1995 American animated adventure comedy film" / "first opened at Magic Kingdom on November 3, 1998."
      {
        type: "order",
        id: "buzz-lightyear-x13",
        prompt: "Put these in order, oldest first.",
        items: ["Toy Story comes out (1995)", "This ride opens (1998)", "Ride reopens with handheld blasters (2026)"],
        explain: "Toy Story came out in 1995, the ride opened in 1998 and got its big update in 2026.",
        source: BUZZ
      },
      {
        type: "spy",
        id: "buzz-lightyear-x14",
        prompt: "Find something that looks like it belongs in a toy box."
      },
      {
        type: "spy",
        id: "buzz-lightyear-x15",
        prompt: "Spot something green. Bonus points if it looks like an alien!"
      },
      {
        type: "spy",
        id: "buzz-lightyear-x16",
        prompt: "Find a planet, a star or a rocket somewhere in the line."
      },
      {
        type: "spy",
        id: "buzz-lightyear-x17",
        prompt: "Find a shape that could be a target: a circle, square, diamond or triangle."
      },
      {
        type: "challenge",
        id: "buzz-lightyear-x18",
        prompt: "Little Green Men moment: everyone look up and say \u201CThe claaaaw!\u201D together."
      },
      {
        type: "challenge",
        id: "buzz-lightyear-x19",
        prompt: "Do your best Zurg villain laugh. Who sounds the most evil?"
      },
      {
        type: "challenge",
        id: "buzz-lightyear-x20",
        prompt: "Space Ranger training: practice aiming with finger blasters at an imaginary target."
      },
      {
        type: "challenge",
        id: "buzz-lightyear-x21",
        prompt: "Pretend to be a toy: freeze whenever someone says \u201CAndy\u2019s coming!\u201D"
      },
      { type: "wyr", id: "buzz-lightyear-x22", a: "Have Buzz\u2019s wings", b: "Have Buzz\u2019s laser" },
      { type: "wyr", id: "buzz-lightyear-x23", a: "Be a toy for a day", b: "Have your toys come alive for a day" },
      { type: "wyr", id: "buzz-lightyear-x24", a: "Be a Little Green Man", b: "Be a Space Ranger" },
      { type: "wyr", id: "buzz-lightyear-x25", a: "Visit Pizza Planet", b: "Visit Star Command" },
      {
        type: "emoji",
        id: "buzz-lightyear-x26",
        emojis: "\u{1F47D} \u{1F47D} \u{1F47D} \u{1F9F8}",
        hint: "Three-eyed squeaky friends.",
        choices: ["Little Green Men", "Minions", "Martians", "Smurfs"],
        answer: 0
      },
      {
        type: "emoji",
        id: "buzz-lightyear-x27",
        emojis: "\u{1F920} \u{1F9F8} \u2B50",
        hint: "A cowboy doll and Andy\u2019s favorite toy.",
        choices: ["Jessie", "Woody", "Bullseye", "Rex"],
        answer: 1
      },
      {
        type: "emoji",
        id: "buzz-lightyear-x28",
        emojis: "\u{1F355} \u{1FA90}",
        hint: "Where Buzz finds the claw machine.",
        choices: ["Pizza Planet", "Pizza Moon", "Space Pizza", "Planet Pepperoni"],
        answer: 0
      }
    ]
  },
  peoplemover: {
    facts: [
      // evidence: "The Edison Electric Institute was the original institutional patron of the attraction"
      { text: "The Edison Electric Institute was the PeopleMover\u2019s first sponsor.", source: PM },
      // evidence: "built as open-air cars that traveled under a permanent roof over the guideway"
      { text: "The cars are open-air and ride under a roof that covers the track.", source: PM },
      // evidence: "new multicolored LED lighting that moves in time with the music being played in Tomorrowland"
      { text: "Colorful LED lights on the track move in time with Tomorrowland\u2019s music.", source: PM },
      // evidence: "the Blue Line, the Red Line, and the Green Line"
      {
        text: "From 1994 to 2009, the story said the PeopleMover was the Blue Line, with Red and Green Lines too.",
        source: PM
      }
    ],
    quests: [
      // evidence: "WED for Walter Elias Disney"
      {
        type: "trivia",
        id: "peoplemover-x1",
        question: "The PeopleMover was first called the WEDway. What does WED stand for?",
        choices: ["Walter Elias Disney", "World Electric Drive", "Wheels Every Day", "Wonderful Exciting Distance"],
        answer: 0,
        explain: "WED stands for Walter Elias Disney, Walt\u2019s full name.",
        source: PM
      },
      // evidence: "which resides in the center of Rocket Tower Plaza and beneath the Astro Orbiter"
      {
        type: "trivia",
        id: "peoplemover-x2",
        question: "Which ride sits right on top of the PeopleMover station?",
        choices: ["Space Mountain", "Astro Orbiter", "TRON", "Dumbo"],
        answer: 1,
        explain: "The station is beneath the Astro Orbiter in Rocket Tower Plaza.",
        source: PM
      },
      // evidence: "designed to remain at the same elevation from start to finish"
      {
        type: "truefalse",
        id: "peoplemover-x3",
        statement: "The PeopleMover track goes up and down hills like a roller coaster.",
        answer: false,
        explain: "Fiction! The track stays at the same height from start to finish.",
        source: PM
      },
      // evidence: "which matches the speed of the PeopleMover trains"
      {
        type: "truefalse",
        id: "peoplemover-x4",
        statement: "You board from a moving platform that goes the same speed as the trains.",
        answer: true,
        explain: "Fact! The platform matches the trains\u2019 speed so you can step right on.",
        source: PM
      },
      // evidence: "get a view down into Buzz Lightyear's Space Ranger Spin"
      {
        type: "trivia",
        id: "peoplemover-x5",
        question: "Besides Space Mountain, which ride can you look down into?",
        choices: ["Buzz Lightyear\u2019s Space Ranger Spin", "Haunted Mansion", "Peter Pan\u2019s Flight", "Jungle Cruise"],
        answer: 0,
        explain: "You get a view down into Buzz Lightyear\u2019s Space Ranger Spin.",
        source: PM
      },
      // evidence: "the narration was updated to feature an entirely new narration by ORAC-5"
      {
        type: "trivia",
        id: "peoplemover-x6",
        question: "Who is the PeopleMover\u2019s narrator since 2022?",
        choices: ["Buzz Lightyear", "ORAC-5", "Mickey Mouse", "Tom Morrow"],
        answer: 1,
        explain: "A computer voice named ORAC-5 tells you about the trip.",
        source: PM
      },
      // evidence: "the PeopleMover does not have to stop during Space Mountain breakdowns"
      {
        type: "truefalse",
        id: "peoplemover-x7",
        statement: "If Space Mountain stops, the PeopleMover has to stop too.",
        answer: false,
        explain: "Fiction! They run on separate systems, so the PeopleMover keeps going.",
        source: PM
      },
      // evidence: "a female voice paging for Mr. Tom Morrow"
      {
        type: "trivia",
        id: "peoplemover-x8",
        question: "Whose name do you hear being called over the speakers?",
        choices: ["Mr. Tom Morrow", "Mr. Space Man", "Dr. Future", "Captain Comet"],
        answer: 0,
        explain: "A voice pages \u201CMr. Tom Morrow.\u201D Say it fast: Tomorrow!",
        source: PM
      },
      // evidence: "passes a large diorama containing a portion of the Progress City"
      {
        type: "trivia",
        id: "peoplemover-x9",
        question: "What model city do you pass on the ride?",
        choices: ["Toontown", "Progress City", "Monstropolis", "Radiator Springs"],
        answer: 1,
        explain: "You pass a big model of part of Progress City, Walt\u2019s city of the future.",
        source: PM
      },
      // evidence: "at the New York World's Fair of 1964-1965"
      {
        type: "guess",
        id: "peoplemover-x10",
        question: "The Progress City model was first shown at a World\u2019s Fair. In what year did that fair start?",
        answer: 1964,
        min: 1900,
        max: 2e3,
        step: 1,
        unit: "",
        tolerance: 3,
        explain: "It was at the 1964\u20131965 New York World\u2019s Fair.",
        source: PM
      },
      // evidence: "the attraction's name changed from the Wedway PeopleMover to Tomorrowland Transit Authority" / "Tomorrowland Transit Authority PeopleMover (October 2, 2009 – present"
      {
        type: "order",
        id: "peoplemover-x11",
        prompt: "Put the PeopleMover\u2019s names in order, oldest first.",
        items: ["WEDway PeopleMover", "Tomorrowland Transit Authority", "Tomorrowland Transit Authority PeopleMover"],
        explain: "WEDway in 1975, Tomorrowland Transit Authority in 1994, and its current name since 2009.",
        source: PM
      },
      // evidence: "the system did not utilize the rotating Goodyear tires"
      {
        type: "truefalse",
        id: "peoplemover-x12",
        statement: "Spinning rubber tires push the Magic Kingdom PeopleMover along.",
        answer: false,
        explain: "Fiction! It uses linear induction motors instead of rotating tires.",
        source: PM
      },
      // evidence: "the ride crosses the Walt Disney World Railroad tracks"
      {
        type: "trivia",
        id: "peoplemover-x13",
        question: "What other train\u2019s tracks does the PeopleMover cross over?",
        choices: [
          "The Monorail",
          "The Walt Disney World Railroad",
          "Big Thunder Mountain",
          "The Seven Dwarfs Mine Train"
        ],
        answer: 1,
        explain: "It crosses the Walt Disney World Railroad tracks on the way to Space Mountain.",
        source: PM
      },
      {
        type: "spy",
        id: "peoplemover-x14",
        prompt: "Look up! Spot a PeopleMover train gliding by. Wave to the riders!"
      },
      {
        type: "spy",
        id: "peoplemover-x15",
        prompt: "Find something that looks like it belongs in a city of the future."
      },
      {
        type: "spy",
        id: "peoplemover-x16",
        prompt: "From up high, how many other rides can you spot?",
        hint: "Look for rockets, mountains and castles."
      },
      {
        type: "spy",
        id: "peoplemover-x17",
        prompt: "Find something that moves without anyone pushing it."
      },
      {
        type: "challenge",
        id: "peoplemover-x18",
        prompt: "Be the tour guide! Take turns announcing \u201COn your left\u2026\u201D and naming something you see."
      },
      {
        type: "challenge",
        id: "peoplemover-x19",
        prompt: "Say \u201CPaging Mr. Tom Morrow\u201D in your fanciest announcer voice."
      },
      {
        type: "challenge",
        id: "peoplemover-x20",
        prompt: "Design the city of the future: everyone adds one invention to it."
      },
      {
        type: "challenge",
        id: "peoplemover-x21",
        prompt: "Make the smooth, quiet PeopleMover sound. Who can do the longest \u201Cwhoosh\u201D?"
      },
      {
        type: "wyr",
        id: "peoplemover-x22",
        a: "Ride the PeopleMover forever",
        b: "Ride the PeopleMover super fast just once"
      },
      {
        type: "wyr",
        id: "peoplemover-x23",
        a: "Ride a moving sidewalk to school",
        b: "Ride a train to school every day"
      },
      { type: "wyr", id: "peoplemover-x24", a: "Live in Progress City", b: "Live on top of Space Mountain" },
      { type: "wyr", id: "peoplemover-x25", a: "Be the PeopleMover\u2019s narrator", b: "Be the PeopleMover\u2019s driver" },
      {
        type: "emoji",
        id: "peoplemover-x26",
        emojis: "\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1} \u27A1\uFE0F \u{1F69D}",
        hint: "It\u2019s what this ride does!",
        choices: ["Monorail", "PeopleMover", "Skyway", "Railroad"],
        answer: 1
      },
      {
        type: "emoji",
        id: "peoplemover-x27",
        emojis: "\u{1F52E} \u{1F3D9}\uFE0F",
        hint: "The city model you pass, built for a bright future.",
        choices: ["Progress City", "Emerald City", "Atlantis", "Monstropolis"],
        answer: 0
      }
    ]
  },
  "astro-orbiter": {
    facts: [
      // evidence: "averages 1.2 million miles a year"
      { text: "The rockets travel about 1.2 million miles every year!", source: AO },
      // evidence: "until 1974, three years after the park's opening"
      { text: "The ride arrived in 1974, three years after Magic Kingdom opened.", source: AO },
      // evidence: "appear as if the rockets were weaving between the planets"
      { text: "Planets on the tower make it look like the rockets weave between them.", source: AO }
    ],
    quests: [
      // evidence: "circled round and round, 60 feet above the ground"
      {
        type: "guess",
        id: "astro-orbiter-x1",
        question: "About how many feet above the ground do the rockets circle?",
        answer: 60,
        min: 10,
        max: 200,
        step: 5,
        unit: "feet",
        tolerance: 10,
        explain: "The rockets circle about 60 feet up. That\u2019s high!",
        source: AO
      },
      // evidence: "attached to the central axis by a 20-foot arm"
      {
        type: "guess",
        id: "astro-orbiter-x2",
        question: "How many feet long is the arm holding each rocket?",
        answer: 20,
        min: 5,
        max: 60,
        step: 1,
        unit: "feet",
        tolerance: 3,
        explain: "Each rocket is held by a 20-foot arm.",
        source: AO
      },
      // evidence: "a large Saturn V rocket as the centerpiece"
      {
        type: "trivia",
        id: "astro-orbiter-x3",
        question: "Back when it was Star Jets, what stood in the middle?",
        choices: ["A giant Saturn V rocket", "A big Moon", "A robot", "A flying saucer"],
        answer: 0,
        explain: "A large Saturn V rocket was the centerpiece.",
        source: AO
      },
      // evidence: "a highly stylized iron-work tower in lieu of the center rocket"
      {
        type: "truefalse",
        id: "astro-orbiter-x4",
        statement: "Today there is a big rocket in the middle of Astro Orbiter.",
        answer: false,
        explain: "Fiction! Since 1994 there\u2019s an ironwork tower with planets instead.",
        source: AO
      },
      // evidence: "The vehicles held up to two passengers"
      {
        type: "truefalse",
        id: "astro-orbiter-x5",
        statement: "Each rocket holds up to two riders.",
        answer: true,
        explain: "Fact! Up to two space travelers per rocket.",
        source: AO
      },
      // evidence: "on top of the PeopleMover platform"
      {
        type: "trivia",
        id: "astro-orbiter-x6",
        question: "Astro Orbiter sits on top of which ride\u2019s platform?",
        choices: ["The PeopleMover", "Space Mountain", "TRON", "The Railroad"],
        answer: 0,
        explain: "It sits on top of the PeopleMover platform.",
        source: AO
      },
      // evidence: "League of Planets Astro Orbiter"
      {
        type: "trivia",
        id: "astro-orbiter-x7",
        question: "The old PeopleMover narration called it the \u201CLeague of ___ Astro Orbiter.\u201D Fill it in!",
        choices: ["Stars", "Planets", "Rockets", "Heroes"],
        answer: 1,
        explain: "From 1994 to 2009 it was called the League of Planets Astro Orbiter.",
        source: AO
      },
      // evidence: "Duration: 1:30"
      {
        type: "guess",
        id: "astro-orbiter-x8",
        question: "About how many seconds does a ride last?",
        answer: 90,
        min: 20,
        max: 300,
        step: 5,
        unit: "seconds",
        tolerance: 15,
        explain: "A flight lasts about 1 minute 30 seconds.",
        source: AO
      },
      // evidence: "In 1956, the first rocket-spinner attraction opened at Disneyland" / "until 1974" / "April 30, 1994"
      {
        type: "order",
        id: "astro-orbiter-x9",
        prompt: "Put these rocket rides in order, oldest first.",
        items: ["Disneyland\u2019s Astro Jets (1956)", "Magic Kingdom\u2019s Star Jets (1974)", "Astro Orbiter (1994)"],
        explain: "The first rocket-spinner opened at Disneyland in 1956, Star Jets in 1974, and Astro Orbiter in 1994.",
        source: AO
      },
      // evidence: "controlling their ascent and descent with a metal control stick"
      {
        type: "trivia",
        id: "astro-orbiter-x10",
        question: "What do riders use to make the rocket go up and down?",
        choices: ["A button", "A metal control stick", "A steering wheel", "A foot pedal"],
        answer: 1,
        explain: "Riders use a metal control stick to climb and dive.",
        source: AO
      },
      {
        type: "spy",
        id: "astro-orbiter-x11",
        prompt: "Look up at the planets. Which one is your favorite color?"
      },
      {
        type: "spy",
        id: "astro-orbiter-x12",
        prompt: "Watch the rockets. Find one flying high and one flying low."
      },
      {
        type: "spy",
        id: "astro-orbiter-x13",
        prompt: "Find a planet with rings around it.",
        hint: "Think Saturn!"
      },
      {
        type: "spy",
        id: "astro-orbiter-x14",
        prompt: "Spot something shiny that would look great on a spaceship."
      },
      {
        type: "challenge",
        id: "astro-orbiter-x15",
        prompt: "Be a rocket: arms out, and everyone slowly \u201Cfly\u201D up and down together."
      },
      {
        type: "challenge",
        id: "astro-orbiter-x16",
        prompt: "Name all the planets you can before the next rocket passes!"
      },
      {
        type: "challenge",
        id: "astro-orbiter-x17",
        prompt: "Pilot check! Take turns doing a cool pilot salute and saying your space name."
      },
      {
        type: "challenge",
        id: "astro-orbiter-x18",
        prompt: "Make up a new planet and describe who lives there."
      },
      { type: "wyr", id: "astro-orbiter-x19", a: "Fly your rocket as high as it goes", b: "Fly your rocket super low" },
      { type: "wyr", id: "astro-orbiter-x20", a: "Be the pilot", b: "Be the passenger" },
      { type: "wyr", id: "astro-orbiter-x21", a: "Ride a rocket around Jupiter", b: "Ride a rocket around the Sun" },
      { type: "wyr", id: "astro-orbiter-x22", a: "Have a rocket for a car", b: "Have a jetpack for a backpack" },
      {
        type: "emoji",
        id: "astro-orbiter-x23",
        emojis: "\u{1FA90} \u{1F48D}",
        hint: "A planet famous for its rings.",
        choices: ["Mars", "Saturn", "Earth", "Mercury"],
        answer: 1
      },
      {
        type: "emoji",
        id: "astro-orbiter-x24",
        emojis: "\u2B50 \u2708\uFE0F",
        hint: "Astro Orbiter\u2019s very first name.",
        choices: ["Star Jets", "Sky Planes", "Moon Wings", "Star Wars"],
        answer: 0
      },
      {
        type: "emoji",
        id: "astro-orbiter-x25",
        emojis: "\u{1F680} \u{1F504} \u{1FA90}",
        hint: "Rockets going round and round.",
        choices: ["Astro Orbiter", "Space Mountain", "Mad Tea Party", "Dumbo"],
        answer: 0
      }
    ]
  },
  "carousel-of-progress": {
    facts: [
      // evidence: "the ride would close on July 6, 2026 to install the update" / "expected to reopen in late Spring 2027."
      {
        text: "The show was set to close on July 6, 2026 for an update, and is expected back in late spring 2027.",
        source: COP
      },
      // evidence: "The Imagineers, led by Disney engineers Roger E. Broggie and Bob Gurr, also devised a 'carousel theater'"
      { text: "Imagineers Roger E. Broggie and Bob Gurr came up with the spinning \u201Ccarousel theater.\u201D", source: COP },
      // evidence: "the oldest attraction at Walt Disney World to have been worked on by Walt Disney."
      { text: "It is the oldest Walt Disney World attraction that Walt Disney himself worked on.", source: COP },
      // evidence: "two brothers in North Carolina are working on a "flying contraption""
      {
        text: "In the first scene, the family hears about two brothers in North Carolina building a \u201Cflying contraption.\u201D",
        source: COP
      }
    ],
    quests: [
      // evidence: "the theme song "There's a Great Big Beautiful Tomorrow" by the Sherman Brothers."
      {
        type: "trivia",
        id: "carousel-of-progress-x1",
        question: "What is the Carousel of Progress theme song?",
        choices: [
          "\u201CIt\u2019s a Small World\u201D",
          "\u201CThere\u2019s a Great Big Beautiful Tomorrow\u201D",
          "\u201CWhen You Wish Upon a Star\u201D",
          "\u201CYo Ho\u201D"
        ],
        answer: 1,
        explain: "\u201CThere\u2019s a Great Big Beautiful Tomorrow,\u201D by the Sherman Brothers.",
        source: COP
      },
      // evidence: "the theme song "There's a Great Big Beautiful Tomorrow" by the Sherman Brothers."
      {
        type: "trivia",
        id: "carousel-of-progress-x2",
        question: "Who wrote the show\u2019s famous theme song?",
        choices: ["The Sherman Brothers", "The Wright Brothers", "The Jonas Brothers", "The Mario Brothers"],
        answer: 0,
        explain: "The Sherman Brothers wrote it. They wrote lots of Disney songs!",
        source: COP
      },
      // evidence: "The first act is set on Valentine's Day" / "on Independence Day." / "set on Halloween" / "during Christmas in the 21st century"
      {
        type: "order",
        id: "carousel-of-progress-x3",
        prompt: "Each scene happens on a holiday. Put them in show order.",
        items: ["Valentine\u2019s Day", "Independence Day", "Halloween", "Christmas"],
        explain: "Valentine\u2019s Day, then Independence Day, then Halloween, and finally Christmas.",
        source: COP
      },
      // evidence: "Uncle Orville, who is shown sitting in a bathtub on the left side of the stage."
      {
        type: "trivia",
        id: "carousel-of-progress-x4",
        question: "Which family member is sitting in a bathtub?",
        choices: ["Grandpa", "Uncle Orville", "Jimmy", "Rover"],
        answer: 1,
        explain: "Uncle Orville relaxes in the tub in the 1920s scene.",
        source: COP
      },
      // evidence: "the prime feature of the General Electric (GE) Pavilion for the 1964 New York World's Fair"
      {
        type: "trivia",
        id: "carousel-of-progress-x5",
        question: "Which company\u2019s pavilion first had this show at the World\u2019s Fair?",
        choices: ["General Electric", "Ford", "Coca-Cola", "Kodak"],
        answer: 0,
        explain: "It was the main feature of the General Electric (GE) Pavilion.",
        source: COP
      },
      // evidence: "Duration: 21:00"
      {
        type: "guess",
        id: "carousel-of-progress-x6",
        question: "About how many minutes long is the show?",
        answer: 21,
        min: 5,
        max: 60,
        step: 1,
        unit: "minutes",
        tolerance: 3,
        explain: "The show runs about 21 minutes.",
        source: COP
      },
      // evidence: "Audience capacity: 240 per show"
      {
        type: "guess",
        id: "carousel-of-progress-x7",
        question: "How many people can watch each show?",
        answer: 240,
        min: 20,
        max: 1e3,
        step: 10,
        unit: "people",
        tolerance: 40,
        explain: "Each show seats 240 people.",
        source: COP
      },
      // evidence: "a design of a blueprint of the six carousel theaters surrounding the six fixed stages"
      {
        type: "guess",
        id: "carousel-of-progress-x8",
        question: "How many carousel theaters spin around the stages?",
        answer: 6,
        min: 1,
        max: 12,
        step: 1,
        unit: "theaters",
        tolerance: 0,
        explain: "Six carousel theaters surround six fixed stages.",
        source: COP
      },
      // evidence: "The theater also now rotated counterclockwise, rather than clockwise like the two former theater systems."
      {
        type: "truefalse",
        id: "carousel-of-progress-x9",
        statement: "The Magic Kingdom theater spins clockwise.",
        answer: false,
        explain: "Fiction! It turns counterclockwise. The older theaters went clockwise.",
        source: COP
      },
      // evidence: "The father of the family, John" / "his wife, Sarah"
      {
        type: "trivia",
        id: "carousel-of-progress-x10",
        question: "What are the mom and dad\u2019s names?",
        choices: ["John and Sarah", "Walt and Lilly", "Bob and Helen", "George and Jane"],
        answer: 0,
        explain: "The dad is John and the mom is Sarah.",
        source: COP
      },
      // evidence: "a refrigerator that holds more quantity of food and ice cubes" / "they now have television, when it works"
      {
        type: "trivia",
        id: "carousel-of-progress-x11",
        question: "Which new gadget does the family have in the 1940s scene?",
        choices: ["A smartphone", "A television", "A robot vacuum", "A video game console"],
        answer: 1,
        explain: "They have a television, when it works! And a bigger refrigerator.",
        source: COP
      },
      // evidence: "So the Sherman Brothers created a new song" ("The Best Time Of Your Life", 1975)
      {
        type: "truefalse",
        id: "carousel-of-progress-x12",
        statement: "For a while, the show used a different theme song.",
        answer: true,
        explain: "Fact! In 1975 the Sherman Brothers wrote \u201CThe Best Time of Your Life\u201D for it.",
        source: COP
      },
      {
        type: "spy",
        id: "carousel-of-progress-x13",
        prompt: "Find something that looks old-fashioned and something that looks futuristic."
      },
      {
        type: "spy",
        id: "carousel-of-progress-x14",
        prompt: "Spot anything that uses electricity. How many can you count?"
      },
      {
        type: "spy",
        id: "carousel-of-progress-x15",
        prompt: "Find something round that turns, just like this theater does."
      },
      {
        type: "spy",
        id: "carousel-of-progress-x16",
        prompt: "Look for something your grandparents might have used when they were kids."
      },
      {
        type: "challenge",
        id: "carousel-of-progress-x17",
        prompt: "Sing \u201CThere\u2019s a great big beautiful tomorrow\u2026\u201D together. Hum if you don\u2019t know the words!"
      },
      {
        type: "challenge",
        id: "carousel-of-progress-x18",
        prompt: "Act out life before electricity: everyone mime washing clothes by hand!"
      },
      {
        type: "challenge",
        id: "carousel-of-progress-x19",
        prompt: "Do your best Rover the dog impression. Woof!"
      },
      {
        type: "challenge",
        id: "carousel-of-progress-x20",
        prompt: "Imagine a fifth scene in the future. What holiday is it, and what gadgets are there?"
      },
      { type: "wyr", id: "carousel-of-progress-x21", a: "Live in the 1920s", b: "Live 100 years in the future" },
      {
        type: "wyr",
        id: "carousel-of-progress-x22",
        a: "Have a robot that cooks",
        b: "Have a robot that cleans your room"
      },
      {
        type: "wyr",
        id: "carousel-of-progress-x23",
        a: "Celebrate Halloween with the family",
        b: "Celebrate Christmas with the family"
      },
      { type: "wyr", id: "carousel-of-progress-x24", a: "Never have TV again", b: "Never have a refrigerator again" },
      {
        type: "emoji",
        id: "carousel-of-progress-x25",
        emojis: "\u{1F415} \u{1F9B4}",
        hint: "The family\u2019s loyal pet.",
        choices: ["Pluto", "Rover", "Max", "Buster"],
        answer: 1
      },
      {
        type: "emoji",
        id: "carousel-of-progress-x26",
        emojis: "\u{1F6C1} \u{1F468}",
        hint: "He\u2019s taking a bath in the 1920s.",
        choices: ["Uncle Orville", "Grandpa", "John", "Jimmy"],
        answer: 0
      },
      {
        type: "emoji",
        id: "carousel-of-progress-x27",
        emojis: "\u{1F3A0} \u27A1\uFE0F \u{1F52E}",
        hint: "A spinning show all about the future.",
        choices: ["Carousel of Progress", "Prince Charming Regal Carrousel", "Mad Tea Party", "Astro Orbiter"],
        answer: 0
      }
    ]
  },
  "laugh-floor": {
    facts: [
      // evidence: "Step inside the only laugh factory in Monstropolis"
      { text: "The Laugh Floor is called \u201Cthe only laugh factory in Monstropolis.\u201D", source: LF_DISNEY },
      // evidence: "Inspired by the Disney and Pixar animated films Monsters, Inc. and Monsters University"
      { text: "The show is inspired by both Monsters, Inc. and Monsters University.", source: LF_DISNEY },
      // evidence: "with student Art promoting the Monsters University School of Laughter"
      {
        text: "In the pre-show, Art from Monsters University promotes the Monsters University School of Laughter.",
        source: LF
      }
    ],
    quests: [
      // evidence: "hosted by Monster of Ceremonies Mike Wazowski"
      {
        type: "trivia",
        id: "laugh-floor-x1",
        question: "Who is the \u201CMonster of Ceremonies\u201D who hosts the show?",
        choices: ["Sulley", "Mike Wazowski", "Randall", "Celia"],
        answer: 1,
        explain: "Mike Wazowski is the Monster of Ceremonies!",
        source: LF_DISNEY
      },
      // evidence: "Text your favorite joke before the lights go down and it could be used in the show!"
      {
        type: "truefalse",
        id: "laugh-floor-x2",
        statement: "A joke sent in by the audience could be used in the show.",
        answer: true,
        explain: "Fact! Jokes sent in before the lights go down could be used in the show.",
        source: LF_DISNEY
      },
      // evidence: "The attraction opened on April 2, 2007"
      {
        type: "guess",
        id: "laugh-floor-x3",
        question: "In what year did the Laugh Floor open?",
        answer: 2007,
        min: 1971,
        max: 2025,
        step: 1,
        unit: "",
        tolerance: 2,
        explain: "It opened on April 2, 2007.",
        source: LF
      },
      // evidence: "the city of Monstropolis harnesses the screams of human children for energy"
      {
        type: "trivia",
        id: "laugh-floor-x4",
        question: "In Monsters, Inc., what is the monster city called?",
        choices: ["Monstropolis", "Scaretown", "Boo City", "Monster Falls"],
        answer: 0,
        explain: "The city is Monstropolis.",
        source: MONSTERS
      },
      // evidence: "the city of Monstropolis harnesses the screams of human children for energy"
      {
        type: "truefalse",
        id: "laugh-floor-x5",
        statement: "At the start of Monsters, Inc., the city is powered by kids\u2019 laughs.",
        answer: false,
        explain: "Fiction! At first, Monstropolis runs on kids\u2019 screams. Laughs come later!",
        source: MONSTERS
      },
      // evidence: "since laughter is ten times more powerful"
      {
        type: "guess",
        id: "laugh-floor-x6",
        question: "In the movie, how many times more powerful is laughter than screams?",
        answer: 10,
        min: 1,
        max: 100,
        step: 1,
        unit: "times",
        tolerance: 1,
        explain: "Laughter is ten times more powerful. That\u2019s why the monsters want your laughs!",
        source: MONSTERS
      },
      // evidence: "John Goodman as James P. "Sulley" Sullivan" / "Billy Crystal as Mike Wazowski"
      {
        type: "trivia",
        id: "laugh-floor-x7",
        question: "Who voices Mike Wazowski in Monsters, Inc.?",
        choices: ["Billy Crystal", "John Goodman", "Tim Allen", "Tom Hanks"],
        answer: 0,
        explain: "Billy Crystal is Mike. John Goodman is Sulley!",
        source: MONSTERS
      },
      // evidence: "James P. "Sulley" Sullivan"
      {
        type: "trivia",
        id: "laugh-floor-x8",
        question: "What is Sulley\u2019s full name?",
        choices: ["Sully Monster", "James P. Sullivan", "Henry J. Sullivan", "Mike Sullivan"],
        answer: 1,
        explain: "His full name is James P. \u201CSulley\u201D Sullivan.",
        source: MONSTERS
      },
      // evidence: "a chameleon-like ability to change his skin color"
      {
        type: "trivia",
        id: "laugh-floor-x9",
        question: "What sneaky trick can Randall do?",
        choices: ["Fly", "Change his skin color to blend in", "Breathe fire", "Shrink"],
        answer: 1,
        explain: "Randall can change his skin color like a chameleon.",
        source: MONSTERS
      },
      // evidence: "won the Academy Award for Best Original Song" ("If I Didn't Have You")
      {
        type: "trivia",
        id: "laugh-floor-x10",
        question: "Which Monsters, Inc. song won an Oscar?",
        choices: ["\u201CIf I Didn\u2019t Have You\u201D", "\u201CYou\u2019ve Got a Friend in Me\u201D", "\u201CLet It Go\u201D", "\u201CRemember Me\u201D"],
        answer: 0,
        explain: "\u201CIf I Didn\u2019t Have You\u201D won Best Original Song.",
        source: MONSTERS
      },
      // evidence: "a 2001 American animated" / "The attraction opened on April 2, 2007" / "was released on June 21, 2013"
      {
        type: "order",
        id: "laugh-floor-x11",
        prompt: "Put these in order, oldest first.",
        items: ["Monsters, Inc. comes out (2001)", "Laugh Floor opens (2007)", "Monsters University comes out (2013)"],
        explain: "The movie came out in 2001, the Laugh Floor opened in 2007 and Monsters University in 2013.",
        source: MONSTERS
      },
      // evidence: "Jennifer Tilly as Celia Mae"
      {
        type: "trivia",
        id: "laugh-floor-x12",
        question: "Which of these is a character played by Jennifer Tilly in Monsters, Inc.?",
        choices: ["Roz", "Celia", "Boo", "Fungus"],
        answer: 1,
        explain: "Celia Mae is played by Jennifer Tilly.",
        source: MONSTERS
      },
      {
        type: "spy",
        id: "laugh-floor-x13",
        prompt: "Find something with only one eye, just like Mike."
      },
      {
        type: "spy",
        id: "laugh-floor-x14",
        prompt: "Spot something that looks like a door to a kid\u2019s bedroom."
      },
      {
        type: "spy",
        id: "laugh-floor-x15",
        prompt: "Find something big, blue and fuzzy-looking, like Sulley."
      },
      {
        type: "spy",
        id: "laugh-floor-x16",
        prompt: "Find something that would make a monster laugh."
      },
      {
        type: "challenge",
        id: "laugh-floor-x17",
        prompt: "Laughing contest: everyone try NOT to laugh while one person makes silly faces."
      },
      {
        type: "challenge",
        id: "laugh-floor-x18",
        prompt: "Do your best friendly monster roar, then turn it into a giggle."
      },
      {
        type: "challenge",
        id: "laugh-floor-x19",
        prompt: "Make up a monster joke to send to Mike. Practice it on your group!"
      },
      {
        type: "challenge",
        id: "laugh-floor-x20",
        prompt: "Everyone say \u201CHi, I\u2019m Mike Wazowski!\u201D in your best Mike voice."
      },
      { type: "wyr", id: "laugh-floor-x21", a: "Have one big eye like Mike", b: "Have blue fur like Sulley" },
      { type: "wyr", id: "laugh-floor-x22", a: "Be a comedian monster", b: "Be the audience that laughs" },
      { type: "wyr", id: "laugh-floor-x23", a: "Have a door to anywhere", b: "Have Randall\u2019s color-changing skin" },
      { type: "wyr", id: "laugh-floor-x24", a: "Tell jokes to a monster", b: "Hear jokes from a monster" },
      {
        type: "emoji",
        id: "laugh-floor-x25",
        emojis: "\u{1F467} \u{1F6AA} \u{1F49C}",
        hint: "The little girl who comes through the closet door.",
        choices: ["Boo", "Roz", "Celia", "Andy"],
        answer: 0
      },
      {
        type: "emoji",
        id: "laugh-floor-x26",
        emojis: "\u{1F98E} \u{1F3A8}",
        hint: "A sneaky monster who changes colors.",
        choices: ["Randall", "Mike", "Sulley", "Fungus"],
        answer: 0
      },
      {
        type: "emoji",
        id: "laugh-floor-x27",
        emojis: "\u{1F602} \u26A1",
        hint: "What the Laugh Floor monsters want from you!",
        choices: ["Laughter", "Screams", "Batteries", "Sunshine"],
        answer: 0
      }
    ]
  }
};

// ../src/data/parks/mk-extra/index.ts
var extras = { ...extra4, ...extra, ...extra2, ...extra3, ...extra5 };
function withExtras(park) {
  return {
    ...park,
    lands: park.lands.map((land) => ({
      ...land,
      attractions: land.attractions.map((a) => {
        const more = extras[a.id];
        return more ? { ...a, facts: [...a.facts, ...more.facts], quests: [...a.quests, ...more.quests] } : a;
      })
    }))
  };
}
__name(withExtras, "withExtras");

// ../src/data/parks/index.ts
var comingSoon = /* @__PURE__ */ __name((id, name, emoji, tagline, lat, lng) => ({
  id,
  name,
  emoji,
  tagline,
  comingSoon: true,
  center: { lat, lng },
  lands: []
}), "comingSoon");
var parks = [
  withExtras(magicKingdom),
  comingSoon("epcot", "EPCOT", "\u{1F310}", "A future chapter: around the world and beyond.", 28.3747, -81.5494),
  comingSoon(
    "hollywood-studios",
    "Hollywood Studios",
    "\u{1F3AC}",
    "A future chapter: lights, camera, adventure.",
    28.3575,
    -81.5582
  ),
  comingSoon("animal-kingdom", "Animal Kingdom", "\u{1F333}", "A future chapter: into the wild.", 28.3553, -81.5901)
];
function getPark(id) {
  return parks.find((p) => p.id === id);
}
__name(getPark, "getPark");
function allAttractions() {
  return parks.flatMap(
    (park) => park.lands.flatMap((land) => land.attractions.map((attraction) => ({ park, land, attraction })))
  );
}
__name(allAttractions, "allAttractions");
function getAttraction(id) {
  return allAttractions().find((r) => r.attraction.id === id);
}
__name(getAttraction, "getAttraction");

// ../src/lib/board-names.ts
var BOARD_ADJECTIVES = [
  "Brave",
  "Sparkly",
  "Jolly",
  "Zippy",
  "Daring",
  "Dreamy",
  "Lucky",
  "Merry",
  "Mighty",
  "Nifty",
  "Plucky",
  "Quick",
  "Royal",
  "Sunny",
  "Swift",
  "Wild",
  "Giggly",
  "Bouncy",
  "Cosmic",
  "Curious",
  "Dazzling",
  "Fearless",
  "Golden",
  "Happy",
  "Jazzy",
  "Magic",
  "Peppy",
  "Starry",
  "Spooky",
  "Twinkly",
  "Witty",
  "Zany"
];
var BOARD_NOUNS = [
  "Tiki",
  "Comet",
  "Pirate",
  "Teacup",
  "Rocket",
  "Dragon",
  "Lantern",
  "Pixie",
  "Parrot",
  "Firefly",
  "Mermaid",
  "Castle",
  "Carousel",
  "Elephant",
  "Explorer",
  "Ghost",
  "Hippo",
  "Jaguar",
  "Knight",
  "Lion",
  "Meteor",
  "Owl",
  "Panda",
  "Penguin",
  "Planet",
  "Puffin",
  "Robot",
  "Seahorse",
  "Starfish",
  "Tiger",
  "Turtle",
  "Unicorn"
];
var BOARD_EMOJIS = ["\u{1F981}", "\u{1F42D}", "\u{1F9DA}", "\u{1F3F4}\u200D\u2620\uFE0F", "\u{1F680}", "\u{1F451}", "\u{1F409}", "\u{1F984}", "\u{1F422}", "\u{1F31F}", "\u{1F388}", "\u{1F366}"];
var MAX_RIDE_SCORE = 60;
function isBoardName(name) {
  if (typeof name !== "string") return false;
  const m = /^([A-Z][a-z]+) ([A-Z][a-z]+) ([1-9]\d)$/.exec(name);
  return !!m && BOARD_ADJECTIVES.includes(m[1]) && BOARD_NOUNS.includes(m[2]);
}
__name(isBoardName, "isBoardName");
var PARK_TZ = "America/New_York";
function parkClock(now) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: PARK_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  }).formatToParts(now);
  const get = /* @__PURE__ */ __name((t) => Number(parts.find((p) => p.type === t)?.value), "get");
  return { y: get("year"), m: get("month"), d: get("day"), h: get("hour"), min: get("minute"), s: get("second") };
}
__name(parkClock, "parkClock");
function parkDay(now = /* @__PURE__ */ new Date()) {
  const t = parkClock(new Date(now.getTime() - 3 * 36e5));
  return `${t.y}-${String(t.m).padStart(2, "0")}-${String(t.d).padStart(2, "0")}`;
}
__name(parkDay, "parkDay");
function secondsUntilReset(now = /* @__PURE__ */ new Date()) {
  const t = parkClock(now);
  const sinceThree = ((t.h - 3 + 24) % 24 * 60 + t.min) * 60 + t.s;
  return Math.max(60, 24 * 3600 - sinceThree);
}
__name(secondsUntilReset, "secondsUntilReset");

// src/index.ts
var headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "no-store"
};
var json = /* @__PURE__ */ __name((body, status = 200) => Response.json(body, { status, headers }), "json");
var src_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });
    if (url.pathname !== "/api/board") return json({ error: "Not found" }, 404);
    if (request.method === "GET") {
      const park = url.searchParams.get("park") ?? "";
      if (!getPark(park)) return json({ error: "Unknown park" }, 400);
      const { rows, players } = await env.BOARD.get(env.BOARD.idFromName(park)).top(50);
      return json({ park, day: parkDay(), players, rows, resetsInSeconds: secondsUntilReset() });
    }
    if (request.method === "POST") {
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: "Bad request" }, 400);
      }
      const ref = typeof body.ride === "string" ? getAttraction(body.ride) : void 0;
      if (!ref) return json({ error: "Unknown ride" }, 400);
      if (typeof body.shareId !== "string" || !/^[a-z0-9]{6,32}$/.test(body.shareId)) {
        return json({ error: "Bad request" }, 400);
      }
      if (!Array.isArray(body.entries) || body.entries.length < 1 || body.entries.length > 8) {
        return json({ error: "Bad request" }, 400);
      }
      const entries = [];
      for (const e of body.entries) {
        const score = e?.score;
        if (!isBoardName(e?.name) || typeof e.emoji !== "string" || !BOARD_EMOJIS.includes(e.emoji) || typeof score !== "number" || !Number.isInteger(score) || score < 0 || score > MAX_RIDE_SCORE) {
          return json({ error: "Bad entry" }, 400);
        }
        entries.push({ name: e.name, emoji: e.emoji, score });
      }
      const added = await env.BOARD.get(env.BOARD.idFromName(ref.park.id)).add(body.shareId, entries);
      return json({ ok: true, added, day: parkDay() });
    }
    return json({ error: "Method not allowed" }, 405);
  }
};
var ParkBoard = class extends DurableObject {
  static {
    __name(this, "ParkBoard");
  }
  /** Wipes yesterday's board if the 3am alarm hasn't run yet, and makes sure tonight's is set. */
  async today() {
    const day = parkDay();
    if (await this.ctx.storage.get("day") !== day) {
      await this.ctx.storage.deleteAll();
      await this.ctx.storage.put("day", day);
    }
    if (!await this.ctx.storage.getAlarm()) {
      await this.ctx.storage.setAlarm(Date.now() + secondsUntilReset() * 1e3);
    }
  }
  async alarm() {
    await this.ctx.storage.deleteAll();
  }
  async add(shareId, entries) {
    await this.today();
    if (await this.ctx.storage.get(`shared:${shareId}`)) return false;
    await this.ctx.storage.put(`shared:${shareId}`, 1);
    for (const e of entries) {
      const key = `row:${e.emoji} ${e.name}`;
      const row = await this.ctx.storage.get(key) ?? { name: e.name, emoji: e.emoji, score: 0, rides: 0 };
      await this.ctx.storage.put(key, { ...row, score: row.score + e.score, rides: row.rides + 1 });
    }
    return true;
  }
  async top(limit) {
    await this.today();
    const rows = [...(await this.ctx.storage.list({ prefix: "row:" })).values()].sort((a, b) => b.score - a.score);
    return { rows: rows.slice(0, limit), players: rows.length };
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    const body = JSON.stringify(error);
    const headers2 = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers2["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers: headers2 });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-GdVb0J/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-GdVb0J/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  ParkBoard,
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
