import type { Fact, Quest } from '../../types';

/**
 * Base quest ids (from magic-kingdom.ts) that are off-ride or badly worded for
 * these rides. Fixed versions, where needed, live below with new ids.
 */
export const drop: string[] = [
  // Photo prompts not worded "From the line…"; fixed versions below.
  'philharmagic-photo-1',
  'winnie-the-pooh-photo-1',
  'winnie-the-pooh-photo-2',
  'enchanted-tales-belle-photo-1',
  'barnstormer-photo-1',
  // Not about the show itself (no one is cast as a candlestick; generic movie charades).
  'eb-wyr',
  'eb-ch',
  // Generic pose, replaced by a challenge tied to the stunt plane.
  'bs-ch',
];

const CARROUSEL_WIKI = 'https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel';
const CARROUSEL_WDWMAGIC = 'https://www.wdwmagic.com/Attractions/Prince-Charming-Regal-Carrousel.htm';
const CARROUSEL_WDWNT = 'https://wdwnt.com/prince-charming-regal-carrousel/';
const CARROUSEL_DISNEY = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/prince-charming-regal-carrousel/';

const PHIL_WIKI = 'https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic';
const PHIL_TP = 'https://touringplans.com/blog/five-things-to-know-about-mickeys-philharmagic/';
const PHIL_MARQUEE = 'https://wdwnt.com/2021/11/photos-mickeys-philharmagic-marquee-completed-at-magic-kingdom/';
const PHIL_DISNEY = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/mickeys-philharmagic/';

const POOH_WIKI = 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)';
const POOH_TP =
  'https://touringplans.com/blog/2020/07/26/everything-you-need-to-know-about-the-many-adventures-of-winnie-the-pooh';
const POOH_MW = 'https://themickeywiki.com/index.php/The_Many_Adventures_of_Winnie_the_Pooh';
const POOH_DISNEY = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/many-adventures-of-winnie-the-pooh/';
const POOH_WDWMAGIC = 'https://www.wdwmagic.com/attractions/the-many-adventures-of-winnie-the-pooh.htm';

const BELLE_TP = 'https://touringplans.com/blog/five-things-to-know-about-enchanted-tales-with-belle';
const BELLE_WDWNT = 'https://wdwnt.com/2023/02/enchanted-tales-with-belle-reopens-magic-kingdom/';
const BELLE_ALLEARS = 'https://allears.net/?p=11533';
const BELLE_DISNEY = 'https://disneyworld.disney.go.com/attractions/magic-kingdom/enchanted-tales-with-belle/';
const BELLE_WIKI = 'https://en.wikipedia.org/wiki/Be_Our_Guest_Restaurant';

const BARN_WIKI = 'https://en.wikipedia.org/wiki/The_Barnstormer';
const BARN_TP = 'https://touringplans.com/blog/five-things-to-know-about-the-barnstormer-starring-the-great-goofini/';
const BARN_PREP = 'https://wdwprepschool.com/disney-world-parks/magic-kingdom/attractions/barnstormer';
const BARN_ITM =
  'https://insidethemagic.net/2012/03/detailed-storybook-circus-debut-builds-excitement-for-new-fantasyland-as-first-phase-opens-at-walt-disney-world/';
const BARN_TMFL = 'https://www.themouseforless.com/walt-disney-world/parks/magic-kingdom/barnstormer/';
const BARN_ALLEARS = 'https://allearsnet.com/tp/mk/barnstormer-featuring-great-goofini.htm';
const BARN_WDWNT = 'https://wdwnt.com/the-barnstormer/';

/** Extra ride-specific content for Fantasyland (Castle Courtyard, Enchanted Forest, Storybook Circus). Every sourced item was checked against its source page. */
export const extra: Record<string, { facts: Fact[]; quests: Quest[] }> = {
  carrousel: {
    facts: [
      // evidence: "began construction of Carousel No. 46"
      {
        text: 'The Philadelphia Toboggan Company built this carousel as its Carousel No. 46.',
        source: CARROUSEL_WIKI,
      },
      // evidence: "one of only two surviving five-abreast carousels built by PTC"
      {
        text: 'It’s one of only two five-across carousels from its builder that still exist. The other is the Riverview Carousel.',
        source: CARROUSEL_WIKI,
      },
      // evidence: "The number of horses was increased to 90, all painted white."
      {
        text: 'When Disney fixed it up, every horse was painted white.',
        source: CARROUSEL_WIKI,
      },
      // evidence: "Similar carousels with Cinderella themes under different names"
      {
        text: 'Tokyo Disneyland and Hong Kong Disneyland have Cinderella carousels too, with different names.',
        source: CARROUSEL_WIKI,
      },
      // evidence: "had time to practice for jousting tournaments"
      {
        text: 'The story goes that Prince Charming built carved wooden horses so he could practice for jousting tournaments.',
        source: CARROUSEL_WDWNT,
      },
    ],
    quests: [
      // evidence: "The double-R is on purpose."
      {
        type: 'photo',
        id: 'carrousel-r-photo1',
        prompt: 'From the line, snap the ride’s name sign. Can you fit both R’s in “Carrousel” in the photo?',
        tip: 'The double R is on purpose.',
        source: CARROUSEL_WDWNT,
      },
      // evidence: "placed directly behind Cinderella Castle in the castle courtyard"
      {
        type: 'photo',
        id: 'carrousel-r-photo2',
        prompt: 'From the line, take a photo of the carrousel with Cinderella Castle rising behind it.',
        tip: 'Stand back a little so you can fit the whole castle in.',
        source: CARROUSEL_WDWNT,
      },
      // evidence: "adorned with golden helmets and shields"
      {
        type: 'photo',
        id: 'carrousel-r-photo3',
        prompt: 'From the line, photograph a horse wearing a golden helmet or carrying a shield as it spins by.',
        tip: 'Wait for the carrousel to slow down at the end of a ride.',
        source: CARROUSEL_WDWNT,
      },
      // evidence: "flower garlands, feathers and other festoons"
      {
        type: 'photo',
        id: 'carrousel-r-photo4',
        prompt: 'From the line, photograph a horse decorated with flower garlands or feathers.',
        source: CARROUSEL_WDWNT,
      },
      // evidence: "Hand-painted scenes from Cinderella can be seen on the top."
      {
        type: 'photo',
        id: 'carrousel-r-photo5',
        prompt: 'From the line, aim your camera up and photograph one of the hand-painted Cinderella scenes.',
        tip: 'The scenes run around the top of the carrousel.',
        source: CARROUSEL_WIKI,
      },
      // evidence: "all painted white with 23-karat gold leaf, silver, and bronze details"
      {
        type: 'photo',
        id: 'carrousel-r-photo6',
        prompt: 'From the line, take a close-up of a white horse with its shiny gold trim.',
        source: CARROUSEL_WIKI,
      },
      // evidence: "began construction of Carousel No. 46"
      {
        type: 'trivia',
        id: 'carrousel-x1',
        question: 'Which company built this carousel long ago?',
        choices: ['Arrow Development', 'Philadelphia Toboggan Company', 'Detroit Toy Company', 'Pixar'],
        answer: 1,
        explain: 'The Philadelphia Toboggan Company built it over 100 years ago.',
        source: CARROUSEL_WIKI,
      },
      // evidence: "72 hand-carved maple wood horses placed five abreast"
      {
        type: 'guess',
        id: 'carrousel-x2',
        question: 'How many hand-carved horses did the carousel have when it was first built?',
        answer: 72,
        min: 10,
        max: 150,
        step: 1,
        unit: 'horses',
        tolerance: 8,
        explain: 'It started with 72 hand-carved maple wood horses.',
        source: CARROUSEL_WIKI,
      },
      // evidence: "The Walt Disney Company purchased the carousel in 1967."
      {
        type: 'guess',
        id: 'carrousel-x3',
        question: 'What year did Disney buy this carousel?',
        answer: 1967,
        min: 1920,
        max: 2000,
        step: 1,
        unit: '',
        tolerance: 3,
        explain: 'Disney bought it in 1967, a few years before Magic Kingdom opened.',
        source: CARROUSEL_WIKI,
      },
      // evidence: "Previously known as: Cinderella's Golden Carousel (1971–2010)"
      {
        type: 'truefalse',
        id: 'carrousel-x4',
        statement: 'This ride used to be called Cinderella’s Golden Carousel.',
        answer: true,
        explain: 'True! That was its name from 1971 until 2010.',
        source: CARROUSEL_WIKI,
      },
      // evidence: "The carousel was later moved to Olympic Park in Irvington, New Jersey, where it operated for almost 40 years."
      {
        type: 'truefalse',
        id: 'carrousel-x5',
        statement: 'Before Disney, the carousel spun for almost 40 years at a park in New Jersey.',
        answer: true,
        explain: 'True! It spent almost 40 years at Olympic Park in Irvington, New Jersey.',
        source: CARROUSEL_WIKI,
      },
      // evidence: "The number of horses was increased to 90, all painted white."
      {
        type: 'truefalse',
        id: 'carrousel-x6',
        statement: 'Disney painted all the horses bright purple.',
        answer: false,
        explain: 'Nope! Disney painted all the horses white, with shiny gold trim.',
        source: CARROUSEL_WIKI,
      },
      // evidence: "The carousel was later moved to Olympic Park" / "purchased the carousel in 1967"
      {
        type: 'order',
        id: 'carrousel-x7',
        prompt: 'Put the carousel’s journey in order, oldest first.',
        items: [
          'Built by the Philadelphia Toboggan Company',
          'Spins in Detroit',
          'Spins in Irvington, New Jersey',
          'Spins at Magic Kingdom',
        ],
        explain: 'Built around 1917 and 1918, it went from Detroit to New Jersey, then to Magic Kingdom.',
        source: CARROUSEL_WIKI,
      },
      // evidence: "On June 1 that same year, the carousel's name was changed"
      {
        type: 'trivia',
        id: 'carrousel-x8',
        question: 'What year did it get the name Prince Charming Regal Carrousel?',
        choices: ['1971', '1999', '2010', '2020'],
        answer: 2,
        explain: 'It was renamed on June 1, 2010.',
        source: CARROUSEL_WIKI,
      },
      // evidence: "Climb aboard one of 90 wood-carved ornate horses"
      {
        type: 'guess',
        id: 'carrousel-r1',
        question: 'How many carved horses can you ride on today?',
        answer: 90,
        min: 20,
        max: 200,
        step: 1,
        unit: 'horses',
        tolerance: 10,
        explain: 'There are 90 wood-carved horses, and no two are exactly alike.',
        source: CARROUSEL_DISNEY,
      },
      // evidence: "Ride time: 2 minutes"
      {
        type: 'trivia',
        id: 'carrousel-r2',
        question: 'About how long does one spin on the carrousel last?',
        choices: ['30 seconds', '2 minutes', '10 minutes', '20 minutes'],
        answer: 1,
        explain: 'Each ride lasts about 2 minutes. Pick your horse wisely!',
        source: CARROUSEL_WDWMAGIC,
      },
      // evidence: "18 scenes from Cinderella were hand painted"
      {
        type: 'guess',
        id: 'carrousel-r3',
        question: 'How many hand-painted Cinderella scenes run around the top of the carrousel?',
        answer: 18,
        min: 2,
        max: 60,
        step: 1,
        unit: 'scenes',
        tolerance: 3,
        explain: '18 scenes from Cinderella were painted by hand. Can you spot the pumpkin coach?',
        source: CARROUSEL_WDWMAGIC,
      },
      // evidence: "a knight rides his horse full speed, lance in hand, toward a small ring"
      {
        type: 'trivia',
        id: 'carrousel-r4',
        question: 'In the carrousel’s story, what game did Prince Charming practice on his carved horses?',
        choices: ['Horse racing', 'Ring-spearing with a lance', 'Polo', 'Hide-and-seek'],
        answer: 1,
        explain: 'He practiced ring-spearing: riding full speed, lance in hand, toward a small ring.',
        source: CARROUSEL_WDWMAGIC,
      },
      // evidence: "generally came to be called 'carrousel'"
      {
        type: 'truefalse',
        id: 'carrousel-r5',
        statement: 'In the ride’s story, the word “carrousel” comes from Prince Charming’s ring-spearing game.',
        answer: true,
        explain: 'True! That knightly game came to be called “carrousel.” The double R is on purpose.',
        source: CARROUSEL_WDWMAGIC,
      },
      // evidence: "Over 2000 individual light bulbs decorate the carousel"
      {
        type: 'guess',
        id: 'carrousel-r6',
        question: 'About how many light bulbs twinkle on the carrousel?',
        answer: 2000,
        min: 100,
        max: 10000,
        step: 100,
        unit: 'bulbs',
        tolerance: 500,
        explain: 'Over 2,000 light bulbs! It really glows at night.',
        source: CARROUSEL_WDWMAGIC,
      },
      // evidence: "5 different sizes, with the largest on the outside"
      {
        type: 'trivia',
        id: 'carrousel-r7',
        question: 'Where are the biggest horses on the carrousel?',
        choices: ['On the outside edge', 'In the very middle', 'Up on the roof', 'They’re all the same size'],
        answer: 0,
        explain: 'The horses come in 5 sizes, with the largest on the outside.',
        source: CARROUSEL_WDWMAGIC,
      },
      // Look around: from the line, in the order you see things as you walk up.
      // evidence: "The double-R is on purpose."
      // source: https://wdwnt.com/prince-charming-regal-carrousel/
      {
        type: 'spy',
        id: 'carrousel-s1',
        prompt: 'Find the ride’s name sign and count the R’s in “Carrousel.”',
        hint: 'Two R’s, on purpose! It’s a royal spelling, picked when the ride got its new name in 2010.',
      },
      // evidence: "it was moved 8 inches (20 cm) so it would be centered"
      // source: https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel
      {
        type: 'spy',
        id: 'carrousel-s2',
        prompt: 'Look back at Cinderella Castle. Is the carrousel lined up with it?',
        hint: 'Roy Disney spotted it was off center, so the whole carrousel was moved 8 inches to line up with the castle.',
      },
      // evidence: "placed five abreast"
      // source: https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel
      {
        type: 'spy',
        id: 'carrousel-s3',
        prompt: 'Count how many horses stand side by side in one row.',
        hint: 'Five across! Only two five-across carousels from its builder still survive, and this is one.',
      },
      // evidence: "5 different sizes, with the largest on the outside"
      // source: https://www.wdwmagic.com/Attractions/Prince-Charming-Regal-Carrousel.htm
      {
        type: 'spy',
        id: 'carrousel-s4',
        prompt: 'Compare a horse on the outside edge with one near the middle. Which is bigger?',
        hint: 'The horses come in 5 sizes, and the biggest gallop around the outside.',
      },
      // evidence: "individually numbered on the bridal"
      // source: https://www.wdwmagic.com/Attractions/Prince-Charming-Regal-Carrousel.htm
      {
        type: 'spy',
        id: 'carrousel-s5',
        prompt: 'As the horses slow down, look for a number on a horse’s bridle.',
        hint: 'Every horse is one of a kind and has its own number on its bridle.',
      },
      // evidence: "adorned with golden helmets and shields"
      // source: https://wdwnt.com/prince-charming-regal-carrousel/
      {
        type: 'spy',
        id: 'carrousel-s6',
        prompt: 'Spot a horse wearing a golden helmet or carrying a shield.',
        hint: 'In the ride’s story, these steeds are dressed for Prince Charming’s royal tournaments.',
      },
      // evidence: "flower garlands, feathers" (decorations on the steeds)
      // source: https://wdwnt.com/prince-charming-regal-carrousel/
      {
        type: 'spy',
        id: 'carrousel-s7',
        prompt: 'Find a horse decorated with flowers or feathers.',
        hint: 'The castle carrousel’s horses are the fancy ones, with garlands, feathers and gold.',
      },
      // evidence: "all painted white with 23-karat gold leaf, silver, and bronze details"
      // source: https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel
      {
        type: 'spy',
        id: 'carrousel-s8',
        prompt: 'Find something gold, something silver and something bronze on the horses.',
        hint: 'The white horses are trimmed with real 23-karat gold leaf, plus silver and bronze.',
      },
      // evidence: "or one intricately carved chariot"
      // source: https://disneyworld.disney.go.com/attractions/magic-kingdom/prince-charming-regal-carrousel/
      {
        type: 'spy',
        id: 'carrousel-s9',
        prompt: 'Find the carved chariot as it spins past.',
        hint: 'It was added in 1997, and three horses were taken out to make room for it.',
      },
      // evidence: "Hand-painted scenes from Cinderella can be seen on the top."
      // source: https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel
      {
        type: 'spy',
        id: 'carrousel-s10',
        prompt: 'Look up at the painted scenes. Can you find the glass slipper?',
        hint: 'The scenes around the top tell Cinderella’s story, painted by hand.',
      },
      // evidence: "organ-based instrumental versions of Disney songs play during each two-minute ride period"
      // source: https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel
      {
        type: 'spy',
        id: 'carrousel-s11',
        prompt: 'Listen to the music. Can you name the Disney song playing?',
        hint: 'The carrousel plays organ versions of Disney songs during every ride.',
      },
      // evidence: "Ride atop a regal steed and gallop through a whirling backdrop"
      {
        type: 'challenge',
        id: 'carrousel-x18',
        prompt: 'Pick the horse you’ll ride and gallop in place like it. Clip-clop, clip-clop!',
      },
      {
        type: 'wyr',
        id: 'carrousel-x22',
        a: 'Ride a big horse on the outside edge',
        b: 'Ride in the carved chariot',
      },
      {
        type: 'emoji',
        id: 'carrousel-x26',
        emojis: '🐴🎀✨',
        hint: 'One special horse in the second row wears this on its tail.',
        choices: ['A crown', 'A golden bow', 'A bell', 'A saddle'],
        answer: 1,
      },
    ],
  },

  philharmagic: {
    facts: [
      // evidence: "Opening date: October 8, 2003."
      {
        text: 'Mickey’s PhilharMagic opened at Magic Kingdom on October 8, 2003.',
        source: PHIL_WIKI,
      },
      // evidence: "home to the stage presentation Legend of The Lion King"
      {
        text: 'Before PhilharMagic, this theater held a stage show called Legend of the Lion King.',
        source: PHIL_WIKI,
      },
      // evidence: "featuring 3D effects, scents, and water"
      {
        text: 'The show mixes 3D movie magic with smells and splashes of water.',
        source: PHIL_WIKI,
      },
      // evidence: "It was the first time Mickey appeared in 3D"
      {
        text: 'This show was the first time Mickey appeared in 3D, and the first time he was drawn fully by computer.',
        source: PHIL_TP,
      },
    ],
    quests: [
      // fixed version of philharmagic-photo-1
      // evidence: "posters advertising the Concert Hall's past productions and performers"
      {
        type: 'photo',
        id: 'philharmagic-photo-2',
        prompt: 'From the line, pick a funny concert poster and copy the star’s pose for a photo!',
        tip: 'The posters hang along the queue on the way to the lobby.',
        source: PHIL_WIKI,
      },
      // evidence: "with the background now blue and the trim gold" / "A concert with character"
      {
        type: 'photo',
        id: 'philharmagic-r-photo3',
        prompt: 'From the line, photograph the blue and gold marquee. Get the ribbon that says “A concert with character” in the shot.',
        tip: 'The marquee got its blue and gold colors in 2021.',
        source: PHIL_MARQUEE,
      },
      // evidence: "a ribbon sign was added to the front paying homage to Mickey Mouse Revue"
      {
        type: 'photo',
        id: 'philharmagic-r-photo4',
        prompt: 'From the line, find the ribbon sign out front that honors Mickey Mouse Revue and photograph it.',
        tip: 'That older show played in this very theater when the park opened.',
        source: PHIL_MARQUEE,
      },
      // evidence: posters include "Hades from Hercules"
      {
        type: 'photo',
        id: 'philharmagic-r-photo5',
        prompt: 'From the line, photograph the concert poster starring Hades.',
        tip: 'The posters hang along the switchbacks inside.',
        source: PHIL_WIKI,
      },
      // evidence: posters include Ariel and her sisters
      {
        type: 'photo',
        id: 'philharmagic-r-photo6',
        prompt: 'From the line, photograph the poster with Ariel and her sisters.',
        source: PHIL_WIKI,
      },
      // evidence: "a gold and blue holding room, where you'll get your special 3D 'opera glasses'"
      {
        type: 'photo',
        id: 'philharmagic-r-photo7',
        prompt: 'In the gold and blue holding room, take a photo of your family wearing the 3D opera glasses before the show starts.',
        tip: 'Do it in the room, before you head into the theater.',
        source: PHIL_TP,
      },
      // evidence: "PhilharMagic Orchestra at the Fantasyland Concert Hall"
      {
        type: 'trivia',
        id: 'philharmagic-x1',
        question: 'What is the name of the theater where Mickey’s orchestra plays?',
        choices: ['Fantasyland Concert Hall', 'Mickey’s Music Barn', 'The Royal Opera House', 'Toontown Theater'],
        answer: 0,
        explain: 'You’re waiting outside the Fantasyland Concert Hall!',
        source: PHIL_WIKI,
      },
      // evidence: "12-minute-long show"
      {
        type: 'guess',
        id: 'philharmagic-x2',
        question: 'How many minutes long is the show?',
        answer: 12,
        min: 1,
        max: 40,
        step: 1,
        unit: 'minutes',
        tolerance: 2,
        explain: 'The show is 12 minutes of musical mayhem.',
        source: PHIL_WIKI,
      },
      // evidence: "Miguel is singing" "Un Poco Loco"
      {
        type: 'trivia',
        id: 'philharmagic-x3',
        question: 'Which song from Coco was added to the show?',
        choices: ['“Remember Me”', '“Un Poco Loco”', '“Let It Go”', '“Try Everything”'],
        answer: 1,
        explain: 'Miguel sings “Un Poco Loco” in the newest scene.',
        source: PHIL_WIKI,
      },
      // evidence: "the Magic Kingdom receiving the same update on November 12, 2021"
      {
        type: 'guess',
        id: 'philharmagic-x4',
        question: 'What year did the Coco scene arrive at Magic Kingdom?',
        answer: 2021,
        min: 2003,
        max: 2026,
        step: 1,
        unit: '',
        tolerance: 1,
        explain: 'The Coco scene arrived on November 12, 2021, for Walt Disney World’s 50th birthday.',
        source: PHIL_WIKI,
      },
      // evidence: plot order: "Be Our Guest" ... "Part of Your World" ... "I Just Can't Wait to Be King" ... "A Whole New World"
      {
        type: 'order',
        id: 'philharmagic-x5',
        prompt: 'Put these songs in the order Donald visits them in the show.',
        items: ['“Be Our Guest”', '“Part of Your World”', '“I Just Can’t Wait to Be King”', '“A Whole New World”'],
        explain: 'Donald goes from Beauty and the Beast to The Little Mermaid, The Lion King, and later Aladdin.',
        source: PHIL_WIKI,
      },
      // evidence: "Don't forget the orchestra. And don't touch my hat!"
      {
        type: 'truefalse',
        id: 'philharmagic-x6',
        statement: 'Mickey tells Donald not to touch his hat.',
        answer: true,
        explain: 'True! Mickey says, “Don’t touch my hat!” Guess what Donald does?',
        source: PHIL_WIKI,
      },
      // evidence: "places his Sorcerer's hat on the podium"
      {
        type: 'truefalse',
        id: 'philharmagic-x7',
        statement: 'The hat Donald borrows is Mickey’s cowboy hat.',
        answer: false,
        explain: 'Nope! It’s Mickey’s famous Sorcerer’s hat.',
        source: PHIL_WIKI,
      },
      // evidence: "the chorus sings" "You Can Fly"
      {
        type: 'trivia',
        id: 'philharmagic-x8',
        question: 'In the show, “You Can Fly!” comes from which movie?',
        choices: ['Dumbo', 'Peter Pan', 'Aladdin', 'Up'],
        answer: 1,
        explain: 'It’s from Peter Pan. Peter and Tinker Bell sprinkle pixie dust on Donald!',
        source: PHIL_WIKI,
      },
      // evidence: "directed by George Scribner"
      {
        type: 'trivia',
        id: 'philharmagic-r1',
        question: 'Who directed Mickey’s PhilharMagic?',
        choices: ['George Scribner', 'Walt Disney', 'John Lasseter', 'Glen Keane'],
        answer: 0,
        explain: 'George Scribner directed it. He also directed Oliver & Company.',
        source: PHIL_WIKI,
      },
      // evidence: "re-animated Ariel from The Little Mermaid in 3D"
      {
        type: 'truefalse',
        id: 'philharmagic-r2',
        statement: 'Glen Keane, who first drew Ariel, re-animated her in 3D for this show.',
        answer: true,
        explain: 'True! Many of the original animators helped bring their characters into 3D.',
        source: PHIL_WIKI,
      },
      // evidence: Mickey Mouse Revue (1971–1980), then Magic Journeys, then Legend of the Lion King, then PhilharMagic (2003)
      {
        type: 'order',
        id: 'philharmagic-r3',
        prompt: 'Put the shows in this theater in order, oldest first.',
        items: ['Mickey Mouse Revue', 'Magic Journeys', 'Legend of the Lion King', 'Mickey’s PhilharMagic'],
        explain: 'Mickey Mouse Revue opened with the park in 1971. PhilharMagic arrived in 2003.',
        source: PHIL_TP,
      },
      // evidence: Imagineers first wanted Tinker Bell as the star, but Michael Eisner chose Donald
      {
        type: 'trivia',
        id: 'philharmagic-r4',
        question: 'Imagineers first wanted a different star for this show. Who?',
        choices: ['Tinker Bell', 'Goofy', 'Pluto', 'Stitch'],
        answer: 0,
        explain: 'Tinker Bell! But Donald was picked for his funny, grumpy side.',
        source: PHIL_TP,
      },
      // evidence: "the hat gets knocked off of Donald's head by Iago"
      {
        type: 'trivia',
        id: 'philharmagic-r5',
        question: 'In the Aladdin scene, who knocks the hat off Donald’s head?',
        choices: ['Abu', 'Iago', 'Genie', 'Rajah'],
        answer: 1,
        explain: 'Iago the parrot swipes it. Uh-oh!',
        source: PHIL_WIKI,
      },
      // evidence: "the tuba launches Donald across the theater and into its back wall"
      {
        type: 'trivia',
        id: 'philharmagic-r6',
        question: 'At the end, which instrument launches Donald into the back wall?',
        choices: ['A tuba', 'A drum', 'A piano', 'A violin'],
        answer: 0,
        explain: 'A tuba! Listen for the crash behind you.',
        source: PHIL_WIKI,
      },
      // evidence: At the finale of "Be Our Guest," champagne corks pop toward the audience
      {
        type: 'truefalse',
        id: 'philharmagic-r7',
        statement: 'During “Be Our Guest,” corks seem to pop right out toward the audience.',
        answer: true,
        explain: 'True! Puffs of air make it feel real, so don’t be surprised.',
        source: PHIL_TP,
      },
      // Look around: queue and lobby, in walk order.
      // evidence: "with the background now blue and the trim gold" / "A concert with character"
      // source: https://wdwnt.com/2021/11/photos-mickeys-philharmagic-marquee-completed-at-magic-kingdom/
      {
        type: 'spy',
        id: 'philharmagic-s1',
        prompt: 'Find the marquee and read the words on the ribbon under the show’s name.',
        hint: 'It says “A concert with character.” The marquee got new blue and gold colors in 2021.',
      },
      // evidence: "a ribbon sign was added to the front paying homage to Mickey Mouse Revue"
      // source: https://wdwnt.com/2021/11/photos-mickeys-philharmagic-marquee-completed-at-magic-kingdom/
      {
        type: 'spy',
        id: 'philharmagic-s2',
        prompt: 'Look for a ribbon sign out front that remembers an older show.',
        hint: 'It honors Mickey Mouse Revue, which played in this very theater when the park opened in 1971.',
      },
      // evidence: "The Kingdom's most magical musical revue" / includes Miguel in the list of characters
      // source: https://wdwnt.com/2021/11/photos-mickeys-philharmagic-marquee-completed-at-magic-kingdom/
      {
        type: 'spy',
        id: 'philharmagic-s3',
        prompt: 'Find the sign that calls this “The Kingdom’s most magical musical revue.” Who’s on the guest list?',
        hint: 'Look for Miguel’s name. He was added to the list when the Coco scene arrived.',
      },
      // evidence: "pun-filled posters" of characters who have "performed" in the theater
      // source: https://touringplans.com/blog/five-things-to-know-about-mickeys-philharmagic/
      {
        type: 'spy',
        id: 'philharmagic-s4',
        prompt: 'Read a concert poster out loud. Can you find the pun?',
        hint: 'The posters pretend these stars once performed at the Concert Hall, and they’re full of jokes.',
      },
      // evidence: posters include "Hades from Hercules"
      // source: https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic
      {
        type: 'spy',
        id: 'philharmagic-s5',
        prompt: 'Find the poster starring Hades. Is his hair on fire?',
        hint: 'Even the god of the underworld gets a turn on the Concert Hall stage.',
      },
      // evidence: posters include Ariel and her sisters
      // source: https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic
      {
        type: 'spy',
        id: 'philharmagic-s6',
        prompt: 'Find Ariel and her sisters on a poster. How many sisters can you count?',
        hint: 'Ariel’s singing family gets its own concert poster in the queue.',
      },
      // evidence: posters include Genie, Willie the Whale, The Three Caballeros
      // source: https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic
      {
        type: 'spy',
        id: 'philharmagic-s7',
        prompt: 'Spot the posters for Genie, Willie the Whale or the Three Caballeros.',
        hint: 'Willie the Whale is an opera-singing whale from an old Disney cartoon. Donald is one of the Three Caballeros!',
      },
      // evidence: posters include Héctor and Miguel, Wheezy, The Big Bad Wolf, and The Three Little Pigs
      // source: https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic
      {
        type: 'spy',
        id: 'philharmagic-s8',
        prompt: 'Find a poster for Wheezy the penguin, Héctor and Miguel, or the Big Bad Wolf and the Three Little Pigs.',
        hint: 'Wheezy is the squeaky penguin from Toy Story 2. He sings too!',
      },
      // evidence: You end up in a gold and blue holding room ... receive special 3D "opera glasses"
      // source: https://touringplans.com/blog/five-things-to-know-about-mickeys-philharmagic/
      {
        type: 'spy',
        id: 'philharmagic-s9',
        prompt: 'In the gold and blue lobby, grab your 3D glasses. What does the show call them?',
        hint: '“Opera glasses”! Fancy concert halls have opera glasses, and this one’s are 3D.',
      },
      // evidence: "Goofy, the Concert Hall's stage manager, admits the guests into the main theater"
      // source: https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic
      {
        type: 'spy',
        id: 'philharmagic-s10',
        prompt: 'Listen in the lobby. Whose goofy voice lets you into the theater?',
        hint: 'Goofy is the Concert Hall’s stage manager. Gawrsh!',
      },
      // evidence: Minnie tells guests to put on their "opera glasses," then discovers Donald is missing
      // source: https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic
      {
        type: 'spy',
        id: 'philharmagic-s11',
        prompt: 'Listen for Minnie’s announcement. Who has gone missing?',
        hint: 'Donald! That’s the first clue that trouble is coming.',
      },
      // evidence: "150' long and 24' high and wraps around the stage"
      // source: https://touringplans.com/blog/five-things-to-know-about-mickeys-philharmagic/
      {
        type: 'spy',
        id: 'philharmagic-s12',
        prompt: 'Inside the theater, look left and right. Where does the screen end?',
        hint: 'It wraps around the stage, 150 feet long and 24 feet high.',
      },
      // evidence: "The musical notes, dots, and stars on the sign are all gold."
      // source: https://wdwnt.com/2021/11/photos-mickeys-philharmagic-marquee-completed-at-magic-kingdom/
      {
        type: 'spy',
        id: 'philharmagic-s13',
        prompt: 'Look at the marquee. Can you spot gold musical notes and stars?',
        hint: 'The notes, dots and stars on the sign are all gold. They match the gold trim.',
      },
      // evidence: Mickey is the conductor
      {
        type: 'challenge',
        id: 'philharmagic-x16',
        prompt: 'Be Mickey the conductor! One person waves a pretend baton and everyone hums faster or slower to match.',
      },
      {
        type: 'wyr',
        id: 'philharmagic-x23',
        a: 'Smell the yummy food during “Be Our Guest”',
        b: 'Feel the splash when the brooms show up',
      },
      {
        type: 'emoji',
        id: 'philharmagic-x24',
        emojis: '🧙‍♂️🎩⭐',
        hint: 'Donald should NOT have touched it.',
        choices: ['A top hat', 'The Sorcerer’s hat', 'A crown', 'A chef hat'],
        answer: 1,
      },
    ],
  },

  'winnie-the-pooh': {
    facts: [
      // evidence: "Opening date: June 5, 1999"
      {
        text: 'This ride opened at Magic Kingdom on June 5, 1999.',
        source: POOH_WIKI,
      },
      // evidence: "a Mr. Toad statue in the Pet Cemetery outside the Haunted Mansion in Liberty Square"
      {
        text: 'A little Mr. Toad statue sits in the Pet Cemetery outside the Haunted Mansion, a wave to the ride that was here first.',
        source: POOH_WIKI,
      },
      // evidence: the queue includes "a playground with children's games"
      {
        text: 'The interactive queue was added in 2010 and was made to look like the Hundred Acre Wood.',
        source: POOH_WIKI,
      },
      // evidence: "A small submarine carving is on a rafter in Pooh's House"
      {
        text: 'A tiny submarine is carved on a rafter in Pooh’s house, a nod to 20,000 Leagues Under the Sea, which used to be nearby.',
        source: POOH_MW,
      },
    ],
    quests: [
      // fixed versions of winnie-the-pooh-photo-1 and -photo-2
      // evidence: "Raymond Kinman, a woodcarver, carved the entrance sign that guests walk under."
      {
        type: 'photo',
        id: 'winnie-the-pooh-photo-3',
        prompt: 'From the line, snap a photo of the carved wooden sign at the entrance. Say “hunny”!',
        tip: 'You walk right under it as you enter.',
        source: POOH_WIKI,
      },
      // evidence: "Explore Rabbit's Garden, paint with honey and visit Eeyore's home."
      {
        type: 'photo',
        id: 'winnie-the-pooh-photo-4',
        prompt: 'From the line, take a photo of your crew painting with honey or drumming in Rabbit’s garden!',
        source: POOH_DISNEY,
      },
      // evidence: "above the door is the sign reading, 'Mr. Sanderz'" (next to the giant tree that's Pooh's home)
      {
        type: 'photo',
        id: 'winnie-the-pooh-r-photo5',
        prompt: 'From the line, photograph Pooh’s giant tree house with the “Mr. Sanderz” sign over the door.',
        tip: 'It’s right by the queue entrance.',
        source: POOH_TP,
      },
      // evidence: "spin sunflowers, beat out a tune on pumpkin and watermelon drums"
      {
        type: 'photo',
        id: 'winnie-the-pooh-r-photo6',
        prompt: 'From the line, photograph the giant sunflowers or the pumpkin and watermelon drums in Rabbit’s garden.',
        source: POOH_TP,
      },
      // evidence: a series of "hives" with "bees" that you can move from one to the next
      {
        type: 'photo',
        id: 'winnie-the-pooh-r-photo7',
        prompt: 'From the line, take a photo of the beehives and the bees buzzing between them.',
        source: POOH_TP,
      },
      // evidence: "the switchbacks are lined with Winnie the Pooh book pages"
      {
        type: 'photo',
        id: 'winnie-the-pooh-r-photo8',
        prompt: 'From the line, photograph one of the big storybook pages along the switchbacks.',
        tip: 'Read the page out loud first!',
        source: POOH_TP,
      },
      // evidence: "including a rather curious picture of J. Thaddeus Toad himself handing a deed over to Owl"
      {
        type: 'truefalse',
        id: 'winnie-the-pooh-x1',
        statement: 'Inside Owl’s house on the ride, there’s a picture of Mr. Toad.',
        answer: true,
        explain: 'True! He’s handing Owl a deed, a secret wave to Mr. Toad’s Wild Ride, which used to be here.',
        source: POOH_WIKI,
      },
      // evidence: "Pooh's floating is achieved with the Pepper's ghost illusion"
      {
        type: 'trivia',
        id: 'winnie-the-pooh-x2',
        question: 'What old stage trick makes Pooh look like he’s floating in his dream?',
        choices: ['Pepper’s ghost', 'Salt’s shadow', 'Invisible string', 'A giant fan'],
        answer: 0,
        explain: 'It’s called Pepper’s ghost. It uses glass and light to make things seem to float!',
        source: POOH_WIKI,
      },
      // evidence: "Duration: 3:15"
      {
        type: 'guess',
        id: 'winnie-the-pooh-x3',
        question: 'About how many minutes does the ride last?',
        answer: 3,
        min: 1,
        max: 15,
        step: 1,
        unit: 'minutes',
        tolerance: 0,
        explain: 'The ride lasts about 3 minutes and 15 seconds.',
        source: POOH_WIKI,
      },
      // evidence: "Gopher squirts water out of his mouth."
      {
        type: 'trivia',
        id: 'winnie-the-pooh-x4',
        question: 'Which character squirts water out of his mouth during the rainstorm?',
        choices: ['Rabbit', 'Gopher', 'Eeyore', 'Owl'],
        answer: 1,
        explain: 'Gopher squirts water. Watch out!',
        source: POOH_WIKI,
      },
      // evidence: "Opening date: June 5, 1999"
      {
        type: 'guess',
        id: 'winnie-the-pooh-x5',
        question: 'What year did this Pooh ride open?',
        answer: 1999,
        min: 1971,
        max: 2026,
        step: 1,
        unit: '',
        tolerance: 2,
        explain: 'It opened on June 5, 1999.',
        source: POOH_WIKI,
      },
      // evidence: "The vehicles arrive in the Hundred Acre Wood during a rather blustery day" / "the ride vehicles begin to bounce like Tigger" / heffalumps and woozles / rain
      {
        type: 'order',
        id: 'winnie-the-pooh-x10',
        prompt: 'Put these ride scenes in order.',
        items: ['A blustery, windy day', 'Bouncing with Tigger', 'Heffalumps and woozles dream', 'The big rainstorm'],
        explain: 'Wind first, then Tigger, then Pooh’s dream, then the rain!',
        source: POOH_WIKI,
      },
      // evidence: "Travel through Hundred-Acre Wood in an oversized Hunny Pot"
      {
        type: 'trivia',
        id: 'winnie-the-pooh-r1',
        question: 'What do you ride in on this attraction?',
        choices: ['A balloon', 'A giant hunny pot', 'A wooden boat', 'Tigger’s tail'],
        answer: 1,
        explain: 'An oversized Hunny Pot! Pooh would approve.',
        source: POOH_DISNEY,
      },
      // evidence: Mr. Toad's Wild Ride "closed on September 7, 1998"
      {
        type: 'truefalse',
        id: 'winnie-the-pooh-r2',
        statement: 'Mr. Toad’s Wild Ride closed in 1998 to make room for this ride.',
        answer: true,
        explain: 'True! Mr. Toad closed in September 1998, and Pooh moved into the same building.',
        source: POOH_MW,
      },
      // evidence: "Raymond Kinman, a woodcarver, carved the entrance sign that guests walk under."
      {
        type: 'trivia',
        id: 'winnie-the-pooh-r3',
        question: 'How was the big entrance sign made?',
        choices: ['Printed by a computer', 'Carved by an Imagineer who is a woodcarver', 'Found in a real forest', 'Made of honey'],
        answer: 1,
        explain: 'Imagineer Raymond Kinman, a woodcarver, carved it.',
        source: POOH_WIKI,
      },
      // evidence: "Added a new interactive queue on November 23, 2010."
      {
        type: 'guess',
        id: 'winnie-the-pooh-r4',
        question: 'What year did the play-filled interactive queue open?',
        answer: 2010,
        min: 1999,
        max: 2026,
        step: 1,
        unit: '',
        tolerance: 1,
        explain: 'It opened in November 2010.',
        source: POOH_MW,
      },
      // evidence: "A small submarine carving is on a rafter in Pooh's House, a nod to the closed 20,000 Leagues Under the Sea."
      {
        type: 'trivia',
        id: 'winnie-the-pooh-r5',
        question: 'What tiny carving hides on a rafter in Pooh’s house on the ride?',
        choices: ['A rocket', 'A submarine', 'A pirate ship', 'A castle'],
        answer: 1,
        explain: 'A submarine, for 20,000 Leagues Under the Sea, an old ride that used to be nearby.',
        source: POOH_MW,
      },
      // evidence: "The large Pooh tree was moved from the closed Pooh's Playful Spot to the queue entrance."
      {
        type: 'truefalse',
        id: 'winnie-the-pooh-r6',
        statement: 'The big Pooh tree at the queue entrance used to stand in an old play area nearby.',
        answer: true,
        explain: 'True! It came from Pooh’s Playful Spot when the new queue opened.',
        source: POOH_MW,
      },
      // evidence: "The Wonderful Thing About Tiggers" plays in the bounce room.
      {
        type: 'trivia',
        id: 'winnie-the-pooh-r7',
        question: 'Which song plays while your hunny pot bounces with Tigger?',
        choices: ['“The Wonderful Thing About Tiggers”', '“Hakuna Matata”', '“Heigh-Ho”', '“Zip-a-Dee-Doo-Dah”'],
        answer: 0,
        explain: 'The wonderful thing about Tiggers is Tiggers are wonderful things!',
        source: POOH_MW,
      },
      // evidence: "Saving Piglet from rising water in a 'Floody Place'"
      {
        type: 'trivia',
        id: 'winnie-the-pooh-r8',
        question: 'In the flood scene, which friend needs saving from the rising water?',
        choices: ['Piglet', 'Owl', 'Rabbit', 'Kanga'],
        answer: 0,
        explain: 'Little Piglet! His friends rescue him in the Floody Place.',
        source: POOH_WDWMAGIC,
      },
      // evidence: The ride closes on a final book page reading "The End."
      {
        type: 'trivia',
        id: 'winnie-the-pooh-r9',
        question: 'What do you see at the very end of the ride?',
        choices: ['A giant clock', 'A storybook page that says “The End”', 'A rainbow slide', 'Mr. Toad’s car'],
        answer: 1,
        explain: 'A book page that says “The End,” just like closing a storybook.',
        source: POOH_TP,
      },
      // evidence: a sign reading "Mr. Sanderz" above the door
      {
        type: 'trivia',
        id: 'winnie-the-pooh-r10',
        question: 'What name is on the sign above Pooh’s door at the queue entrance?',
        choices: ['Mr. Honey', 'Mr. Sanderz', 'Mr. Bear', 'Mr. Robin'],
        answer: 1,
        explain: 'Mr. Sanderz! Look for it above the door of the big tree.',
        source: POOH_TP,
      },
      // evidence: "giant Woozles with jack-in-the-box necks move in front of the guests"
      {
        type: 'trivia',
        id: 'winnie-the-pooh-r11',
        question: 'In Pooh’s dream, what kind of necks do the giant Woozles have?',
        choices: ['Giraffe necks', 'Jack-in-the-box necks', 'Snake necks', 'No necks at all'],
        answer: 1,
        explain: 'Jack-in-the-box necks, so they spring up and down!',
        source: POOH_WIKI,
      },
      // evidence: a floor picture shows Moley and Pooh together
      {
        type: 'truefalse',
        id: 'winnie-the-pooh-r12',
        statement: 'Owl’s house on the ride also has a picture of Pooh with Moley from Mr. Toad’s ride.',
        answer: true,
        explain: 'True! It’s one more wave to Mr. Toad’s Wild Ride.',
        source: POOH_MW,
      },
      // evidence: Kanga tries to hold onto Roo, who is flying a scarf as a kite
      {
        type: 'trivia',
        id: 'winnie-the-pooh-r13',
        question: 'On the blustery day, what is Roo flying like a kite?',
        choices: ['A scarf', 'A leaf', 'A balloon', 'A sock'],
        answer: 0,
        explain: 'A scarf! And Kanga holds on tight.',
        source: POOH_MW,
      },
      // evidence: "Piglet holding onto a broom while being spun around"
      {
        type: 'trivia',
        id: 'winnie-the-pooh-r14',
        question: 'What is Piglet holding onto as the wind spins him around?',
        choices: ['A broom', 'An umbrella', 'A kite', 'A honey pot'],
        answer: 0,
        explain: 'A broom! Hang on, Piglet!',
        source: POOH_WIKI,
      },
      // evidence: Magic Kingdom June 5, 1999; Disneyland April 11, 2003; Hong Kong September 12, 2005; Shanghai June 16, 2016
      {
        type: 'order',
        id: 'winnie-the-pooh-r15',
        prompt: 'Put these versions of this Pooh ride in the order they opened.',
        items: ['Magic Kingdom', 'Disneyland', 'Hong Kong Disneyland', 'Shanghai Disneyland'],
        explain: 'Magic Kingdom was first in 1999, then Disneyland (2003), Hong Kong (2005) and Shanghai (2016).',
        source: POOH_WIKI,
      },
      // Look around: queue, in walk order.
      // evidence: "Raymond Kinman, a woodcarver, carved the entrance sign that guests walk under."
      // source: https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)
      {
        type: 'spy',
        id: 'winnie-the-pooh-s1',
        prompt: 'Look up at the carved wooden entrance sign. Find a character carved into it.',
        hint: 'Imagineer Raymond Kinman, a woodcarver, carved this sign by hand.',
      },
      // evidence: You enter next to the giant tree that's Pooh's home, with a sign reading "Mr. Sanderz" above the door.
      // source: https://touringplans.com/blog/2020/07/26/everything-you-need-to-know-about-the-many-adventures-of-winnie-the-pooh
      {
        type: 'spy',
        id: 'winnie-the-pooh-s2',
        prompt: 'Find Pooh’s tree house and read the sign above the door.',
        hint: 'It says “Mr. Sanderz.” This big tree was moved here from Pooh’s old play area when the queue opened in 2010.',
      },
      // evidence: "guests can go into Pooh's house and see how the bear lives"
      // source: https://themickeywiki.com/index.php/The_Many_Adventures_of_Winnie_the_Pooh
      {
        type: 'spy',
        id: 'winnie-the-pooh-s3',
        prompt: 'Peek inside Pooh’s house. What does a bear keep at home?',
        hint: 'The queue lets you step into Pooh’s home and see how he lives. Look for hunny!',
      },
      // evidence: The queue is framed as Chapter One of the story, with storybook pages supplying the backstory.
      // source: https://themickeywiki.com/index.php/The_Many_Adventures_of_Winnie_the_Pooh
      {
        type: 'spy',
        id: 'winnie-the-pooh-s4',
        prompt: 'Find a giant storybook page. Which chapter is it?',
        hint: 'The queue is Chapter One of the story. The pages set up the adventure before you ride.',
      },
      // evidence: "Explore Rabbit's Garden, paint with honey and visit Eeyore's home."
      // source: https://disneyworld.disney.go.com/attractions/magic-kingdom/many-adventures-of-winnie-the-pooh/
      {
        type: 'spy',
        id: 'winnie-the-pooh-s5',
        prompt: 'Find Eeyore’s house. Is it standing up straight?',
        hint: 'Eeyore’s gloomy little home has its own storybook page outside.',
      },
      // evidence: Eeyore's and Piglet's houses have storybook pages outside them.
      // source: https://themickeywiki.com/index.php/The_Many_Adventures_of_Winnie_the_Pooh
      {
        type: 'spy',
        id: 'winnie-the-pooh-s6',
        prompt: 'Now find Piglet’s house. Is it big or very small?',
        hint: 'Piglet’s home has a storybook page too. Later on the ride, Piglet gets stuck in the flood!',
      },
      // evidence: Rabbit's Garden: You can spin sunflowers and play pumpkin and watermelon drums.
      // source: https://touringplans.com/blog/2020/07/26/everything-you-need-to-know-about-the-many-adventures-of-winnie-the-pooh
      {
        type: 'spy',
        id: 'winnie-the-pooh-s7',
        prompt: 'In Rabbit’s garden, find a giant sunflower you can spin.',
        hint: 'Rabbit takes his garden very seriously. On the ride, you’ll see him buried under carrots!',
      },
      // evidence: You can spin sunflowers and play pumpkin and watermelon drums.
      // source: https://touringplans.com/blog/2020/07/26/everything-you-need-to-know-about-the-many-adventures-of-winnie-the-pooh
      {
        type: 'spy',
        id: 'winnie-the-pooh-s8',
        prompt: 'Find the vegetables that work like drums. Which one sounds the best?',
        hint: 'Pumpkins and watermelons in Rabbit’s garden make music when you tap them.',
      },
      // evidence: Rabbit's garden has gophers that pop up and interact with guests.
      // source: https://themickeywiki.com/index.php/The_Many_Adventures_of_Winnie_the_Pooh
      {
        type: 'spy',
        id: 'winnie-the-pooh-s9',
        prompt: 'Watch Rabbit’s garden for a gopher popping up.',
        hint: 'Gopher isn’t in the old Pooh books. Disney created him, and he pops up all over this ride.',
      },
      // evidence: The honey walls are "large interactive touch screens" where guests can smear and draw in honey.
      // source: https://themickeywiki.com/index.php/The_Many_Adventures_of_Winnie_the_Pooh
      {
        type: 'spy',
        id: 'winnie-the-pooh-s10',
        prompt: 'Find the wall of honey. What can you draw in it?',
        hint: 'It’s a big touch screen that lets you smear pretend honey, no sticky fingers!',
      },
      // evidence: A series of "hives" with "bees" that you move between.
      // source: https://touringplans.com/blog/2020/07/26/everything-you-need-to-know-about-the-many-adventures-of-winnie-the-pooh
      {
        type: 'spy',
        id: 'winnie-the-pooh-s11',
        prompt: 'Find the beehives and help a bee buzz from one hive to another.',
        hint: 'Bees mean hunny, and hunny is what Pooh is after on the whole ride.',
      },
      // evidence: Switchbacks are lined with Winnie the Pooh book pages.
      // source: https://touringplans.com/blog/2020/07/26/everything-you-need-to-know-about-the-many-adventures-of-winnie-the-pooh
      {
        type: 'spy',
        id: 'winnie-the-pooh-s12',
        prompt: 'In the back-and-forth part of the line, read a book page out loud together.',
        hint: 'The switchbacks are lined with storybook pages, so the story keeps going while you wait.',
      },
      // evidence: At the loading area, Chapter Two pages line the back wall.
      // source: https://themickeywiki.com/index.php/The_Many_Adventures_of_Winnie_the_Pooh
      {
        type: 'spy',
        id: 'winnie-the-pooh-s13',
        prompt: 'Near the hunny pots, find the pages for the next chapter.',
        hint: 'Chapter Two pages line the wall where you board. Turn the page and ride into the story!',
      },
      // evidence: "Eeyore complains about the wind and then about the rain."
      {
        type: 'challenge',
        id: 'winnie-the-pooh-x17',
        prompt: 'On the ride, Eeyore grumbles about the wind and the rain. Everyone do your gloomiest Eeyore weather report.',
      },
      // evidence: "The vehicles arrive in the Hundred Acre Wood during a rather blustery day."
      {
        type: 'challenge',
        id: 'winnie-the-pooh-x19',
        prompt: 'The ride starts on a blustery day! Everyone sway like the wind is blowing and hold onto your hats.',
      },
      {
        type: 'wyr',
        id: 'winnie-the-pooh-x21',
        a: 'Bounce along with Tigger in the bouncy scene',
        b: 'Float into the sky with Pooh in his dream',
      },
      {
        type: 'wyr',
        id: 'winnie-the-pooh-r16',
        a: 'Sit in the front row of the hunny pot',
        b: 'Sit in the back row of the hunny pot',
      },
      {
        type: 'emoji',
        id: 'winnie-the-pooh-x25',
        emojis: '🐯🦘🌀',
        hint: 'Your hunny pot bounces right along with him.',
        choices: ['Tigger', 'Roo', 'Rajah', 'Shere Khan'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'winnie-the-pooh-x26',
        emojis: '🐘🍯💭',
        hint: 'They sing in Pooh’s dream.',
        choices: ['Heffalumps', 'Dumbos', 'Mammoths', 'Elephants on parade'],
        answer: 0,
      },
    ],
  },

  'enchanted-tales-belle': {
    facts: [
      // evidence: Storytime with Belle at the Fairytale Garden ran from July 1, 1999, to September 12, 2010.
      {
        text: 'This show replaced an older one called Storytime with Belle, held in the Fairytale Garden.',
        source: BELLE_TP,
      },
      // evidence: "Enchanted Tales with Belle: A live interactive show that opened in December 2012"
      {
        text: 'Enchanted Tales with Belle opened in December 2012.',
        source: BELLE_WIKI,
      },
      // evidence: "reopened on February 19, 2023"
      {
        text: 'After a long break, the show reopened on February 19, 2023.',
        source: BELLE_WIKI,
      },
    ],
    quests: [
      // fixed version of enchanted-tales-belle-photo-1
      // evidence: "a special enchanted mirror the Beast gave to Belle"
      {
        type: 'photo',
        id: 'enchanted-tales-belle-photo-2',
        prompt: 'From the line in Maurice’s workshop, snap a picture of the magic mirror before it starts to sparkle!',
        tip: 'Your group waits right in front of it.',
        source: BELLE_DISNEY,
      },
      // evidence: "If you look closely at the entrance signage, you can spot Lumiére."
      {
        type: 'photo',
        id: 'enchanted-tales-belle-r-photo3',
        prompt: 'From the line, photograph the entrance sign. Can you find Lumière hiding on it?',
        source: BELLE_WDWNT,
      },
      // evidence: "The top of Beast’s castle is visible high up the mountain in the background"
      {
        type: 'photo',
        id: 'enchanted-tales-belle-r-photo4',
        prompt: 'From the line, aim your camera at the top of the Beast’s castle high up on the mountain.',
        source: BELLE_ALLEARS,
      },
      // evidence: "like these gears on the lantern post" (a nod to Maurice's inventive side)
      {
        type: 'photo',
        id: 'enchanted-tales-belle-r-photo5',
        prompt: 'From the line, photograph the lantern post with gears on it.',
        tip: 'The gears are a wink to inventor Maurice.',
        source: BELLE_WDWNT,
      },
      // evidence: "a well, lanterns, wooden buckets, a wheelbarrow, wagon wheels"
      {
        type: 'photo',
        id: 'enchanted-tales-belle-r-photo6',
        prompt: 'From the line, photograph the old well, a wooden bucket or the wheelbarrow along the path.',
        source: BELLE_ALLEARS,
      },
      // evidence: "how tall Belle was as she grew from age three to 18"
      {
        type: 'photo',
        id: 'enchanted-tales-belle-r-photo7',
        prompt: 'In the cottage before the show starts, photograph the height marks on the wall. Which one is nearest to a kid in your group?',
        tip: 'Take your picture while you wait, before the magic mirror scene begins.',
        source: BELLE_WDWNT,
      },
      // evidence: "a special enchanted mirror the Beast gave to Belle"
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-x1',
        question: 'Who gave the magic mirror in Maurice’s workshop?',
        choices: ['Gaston', 'The Beast', 'Lumière', 'The Enchantress'],
        answer: 1,
        explain: 'The magic mirror was a gift from the Beast to Belle.',
        source: BELLE_DISNEY,
      },
      // evidence: Lumiere ... directs them to yell "surprise" when Belle enters
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-x3',
        question: 'In the library, who gets everyone ready to surprise Belle?',
        choices: ['Cogsworth', 'Chip', 'Lumière', 'Mrs. Potts'],
        answer: 2,
        explain: 'Lumière! He tells everyone to yell “Surprise!” when Belle walks in.',
        source: BELLE_WDWNT,
      },
      // evidence: "Madame Wardrobe: The audio-animatronic explains the reenactment"
      {
        type: 'truefalse',
        id: 'enchanted-tales-belle-x4',
        statement: 'Madame Wardrobe is played by a real actor in a costume.',
        answer: false,
        explain: 'Nope! Madame Wardrobe is an audio-animatronic, a moving, talking figure.',
        source: BELLE_TP,
      },
      // evidence: "Enchanted Tales with Belle: A live interactive show that opened in December 2012"
      {
        type: 'guess',
        id: 'enchanted-tales-belle-x5',
        question: 'What year did Enchanted Tales with Belle open?',
        answer: 2012,
        min: 1990,
        max: 2026,
        step: 1,
        unit: '',
        tolerance: 2,
        explain: 'It opened in December 2012 as part of the big Fantasyland expansion.',
        source: BELLE_WIKI,
      },
      // evidence: cottage, then workshop and mirror, then Wardrobe, then library with Lumière and Belle
      {
        type: 'order',
        id: 'enchanted-tales-belle-x6',
        prompt: 'Put your adventure in order.',
        items: [
          'Enter Maurice’s cottage',
          'Find the magic mirror in the workshop',
          'Meet Madame Wardrobe',
          'Tell the story with Lumière and Belle',
        ],
        explain: 'Cottage, mirror, Wardrobe, then the library with Belle!',
        source: BELLE_WDWNT,
      },
      // evidence: Storytime with Belle at the Fairytale Garden
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-r1',
        question: 'Before this show, where did Belle tell stories at Magic Kingdom?',
        choices: ['Fairytale Garden', 'Main Street Theater', 'Cinderella Castle', 'Liberty Square'],
        answer: 0,
        explain: 'Storytime with Belle was held in the Fairytale Garden from 1999 to 2010.',
        source: BELLE_TP,
      },
      // evidence: Imagineers worked on it for about five years
      {
        type: 'guess',
        id: 'enchanted-tales-belle-r2',
        question: 'About how many years did Imagineers work on this show?',
        answer: 5,
        min: 1,
        max: 20,
        step: 1,
        unit: 'years',
        tolerance: 1,
        explain: 'About five years, making sure the magic and the timing were just right.',
        source: BELLE_TP,
      },
      // evidence: Guests chant "take me back to when Belle and Beast fell in love."
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-r3',
        question: 'What do you say to wake up the magic mirror?',
        choices: [
          '“Open sesame!”',
          '“Take me back to when Belle and Beast fell in love”',
          '“Bibbidi-bobbidi-boo!”',
          '“Mirror, mirror, on the wall”',
        ],
        answer: 1,
        explain: 'Everyone chants it together, and the mirror grows into a doorway!',
        source: BELLE_WDWNT,
      },
      // evidence: Height markings show Belle's growth "from age three to 18."
      {
        type: 'guess',
        id: 'enchanted-tales-belle-r4',
        question: 'The height marks on the cottage wall show Belle growing up to what age?',
        answer: 18,
        min: 5,
        max: 30,
        step: 1,
        unit: 'years old',
        tolerance: 2,
        explain: 'From age 3 all the way to 18. Maurice measured her every year!',
        source: BELLE_WDWNT,
      },
      // evidence: A portrait shows Belle as a child reading a book with her mother.
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-r5',
        question: 'In the cottage portrait, who is reading with young Belle?',
        choices: ['Her mother', 'Gaston', 'The Beast', 'Mrs. Potts'],
        answer: 0,
        explain: 'Her mother. It hints that Belle got her love of reading from her mom.',
        source: BELLE_WDWNT,
      },
      // evidence: one titled "La Belle au Bois Dormant" ("Sleeping Beauty")
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-r6',
        question: 'One of Belle’s childhood books in the cottage is “La Belle au Bois Dormant.” What story is that?',
        choices: ['Cinderella', 'Sleeping Beauty', 'Snow White', 'The Little Mermaid'],
        answer: 1,
        explain: 'It’s French for Sleeping Beauty.',
        source: BELLE_TP,
      },
      // evidence: Plans for the music box Maurice gave Belle and Prince Adam (the Beast) as a wedding present.
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-r7',
        question: 'Maurice’s sketches in the cottage include plans for what wedding present?',
        choices: ['A music box', 'A carriage', 'A rose vase', 'A clock'],
        answer: 0,
        explain: 'A music box for Belle and the Beast. Look for the drawings!',
        source: BELLE_TP,
      },
      // evidence: Gears on the lantern post nod to Maurice's inventive spirit.
      {
        type: 'truefalse',
        id: 'enchanted-tales-belle-r8',
        statement: 'Gears on a lantern post in the queue are a nod to inventor Maurice.',
        answer: true,
        explain: 'True! Even the lamps show off Maurice’s tinkering.',
        source: BELLE_WDWNT,
      },
      // evidence: Guests enter in groups of about 45.
      {
        type: 'guess',
        id: 'enchanted-tales-belle-r9',
        question: 'About how many guests go into Maurice’s workshop together?',
        answer: 45,
        min: 5,
        max: 150,
        step: 5,
        unit: 'guests',
        tolerance: 10,
        explain: 'About 45 guests at a time, so there are lots of helpers for the story.',
        source: BELLE_ALLEARS,
      },
      // evidence: "Guests of all ages may volunteer to play the Beast"
      {
        type: 'truefalse',
        id: 'enchanted-tales-belle-r10',
        statement: 'Only kids are allowed to play the Beast.',
        answer: false,
        explain: 'Nope! Guests of all ages can volunteer to play the Beast.',
        source: BELLE_DISNEY,
      },
      // evidence: Actors and guests go into "one of two identical libraries."
      {
        type: 'truefalse',
        id: 'enchanted-tales-belle-r11',
        statement: 'There are two matching libraries, so two shows can happen at once.',
        answer: true,
        explain: 'True! The two libraries are mirror images of each other.',
        source: BELLE_ALLEARS,
      },
      // evidence: bookmark reading "you'll always be part of my favorite story"
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-r12',
        question: 'What keepsake do the story helpers get from Belle?',
        choices: ['A bookmark', 'A rose', 'A teacup', 'A key'],
        answer: 0,
        explain: 'A bookmark that says “you’ll always be part of my favorite story.”',
        source: BELLE_WDWNT,
      },
      // evidence: The audience howls like wind, shivers in the dungeon, and gallops with the horse.
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-r13',
        question: 'During the story, what does the audience help make?',
        choices: ['Wind sounds', 'Fireworks', 'Bubbles', 'Snow'],
        answer: 0,
        explain: 'Everyone howls like the wind, shivers in the dungeon and gallops along with the horse!',
        source: BELLE_ALLEARS,
      },
      // evidence: A Hidden Mickey is in the stacks of firewood in Maurice's cottage (look toward the bottom).
      {
        type: 'truefalse',
        id: 'enchanted-tales-belle-r14',
        statement: 'A Hidden Mickey is tucked in the firewood in Maurice’s cottage.',
        answer: true,
        explain: 'True! Look near the bottom of the woodpile.',
        source: BELLE_TP,
      },
      // evidence: Belle ... says "it's time for dinner" and leaves.
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-r15',
        question: 'Why does Belle say she has to go at the end?',
        choices: ['It’s time for dinner', 'It’s raining', 'Gaston is coming', 'She has a test'],
        answer: 0,
        explain: 'It’s time for dinner! Maybe the dishes are singing already.',
        source: BELLE_WDWNT,
      },
      // evidence: closed in March 2020, reopened on February 19, 2023
      {
        type: 'guess',
        id: 'enchanted-tales-belle-r16',
        question: 'The show took a long break starting in 2020. About how many years was it closed?',
        answer: 3,
        min: 0,
        max: 10,
        step: 1,
        unit: 'years',
        tolerance: 0,
        explain: 'Nearly 3 years, from March 2020 to February 19, 2023.',
        source: BELLE_WIKI,
      },
      // evidence: The frame grows, the castle exterior gets closer, and the mirror becomes a doorway.
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-r17',
        question: 'What appears closer and closer in the magic mirror?',
        choices: ['The Beast’s castle', 'Gaston’s tavern', 'The village bakery', 'A pumpkin coach'],
        answer: 0,
        explain: 'The Beast’s castle! Then the mirror becomes a real doorway.',
        source: BELLE_WDWNT,
      },
      // evidence: "If you look closely at the entrance signage, you can spot Lumiére."
      {
        type: 'truefalse',
        id: 'enchanted-tales-belle-r18',
        statement: 'Lumière is hiding on the entrance sign.',
        answer: true,
        explain: 'True! Look closely at the sign as you walk in.',
        source: BELLE_WDWNT,
      },
      // Look around: queue and cottage, in walk order.
      // evidence: "If you look closely at the entrance signage, you can spot Lumiére."
      // source: https://wdwnt.com/2023/02/enchanted-tales-with-belle-reopens-magic-kingdom/
      {
        type: 'spy',
        id: 'enchanted-tales-belle-s1',
        prompt: 'Look closely at the entrance sign. Who is hiding on it?',
        hint: 'Lumière! The candlestick runs the show in the library later on.',
      },
      // evidence: "The top of Beast's castle is visible high up the mountain."
      // source: https://allears.net/?p=11533
      {
        type: 'spy',
        id: 'enchanted-tales-belle-s2',
        prompt: 'Look up at the mountain. Can you spot the Beast’s castle?',
        hint: 'That’s where the magic mirror will take you. It looms over the whole path.',
      },
      // evidence: Guests pass "an old-timey well and a water wheel"
      // source: https://touringplans.com/blog/five-things-to-know-about-enchanted-tales-with-belle
      {
        type: 'spy',
        id: 'enchanted-tales-belle-s3',
        prompt: 'Find the old well along the path.',
        hint: 'The path is Belle’s countryside, with a well just like a real French village home.',
      },
      // evidence: Guests pass "an old-timey well and a water wheel"
      // source: https://touringplans.com/blog/five-things-to-know-about-enchanted-tales-with-belle
      {
        type: 'spy',
        id: 'enchanted-tales-belle-s4',
        prompt: 'Find the water wheel. Is it turning?',
        hint: 'A water wheel could power one of Maurice’s machines. He’s an inventor, after all!',
      },
      // evidence: Gears on the lantern post nod to Maurice's inventive spirit.
      // source: https://wdwnt.com/2023/02/enchanted-tales-with-belle-reopens-magic-kingdom/
      {
        type: 'spy',
        id: 'enchanted-tales-belle-s5',
        prompt: 'Find a lantern post with gears on it.',
        hint: 'The gears are a wink to Maurice, who can’t stop inventing things.',
      },
      // evidence: "a well, lanterns, wooden buckets, a wheelbarrow, wagon wheels and even chairs built into the walls"
      // source: https://allears.net/?p=11533
      {
        type: 'spy',
        id: 'enchanted-tales-belle-s6',
        prompt: 'Spot a wooden bucket, a wheelbarrow and a wagon wheel.',
        hint: 'Farm tools like these make the path feel like the road to Belle’s cottage.',
      },
      // evidence: Guests find a cozy fireplace and stacks of books.
      // source: https://allears.net/?p=11533
      {
        type: 'spy',
        id: 'enchanted-tales-belle-s7',
        prompt: 'Inside the cottage, find the fireplace and the stacks of books.',
        hint: 'Of course Belle’s home is full of books. She’s the biggest reader in the village!',
      },
      // evidence: A portrait shows Belle as a child reading a book with her mother.
      // source: https://wdwnt.com/2023/02/enchanted-tales-with-belle-reopens-magic-kingdom/
      {
        type: 'spy',
        id: 'enchanted-tales-belle-s8',
        prompt: 'Find the portrait of young Belle. What is she doing?',
        hint: 'She’s reading with her mother. It’s a rare look at Belle’s mom, who isn’t in the movie.',
      },
      // evidence: Height markings show Belle's growth "from age three to 18."
      // source: https://wdwnt.com/2023/02/enchanted-tales-with-belle-reopens-magic-kingdom/
      {
        type: 'spy',
        id: 'enchanted-tales-belle-s9',
        prompt: 'Find the height marks on the wall. Which mark is closest to your height?',
        hint: 'Maurice marked Belle’s height every year, from age 3 to 18.',
      },
      // evidence: A "familiar-looking teapot and cup" sits on a shelf.
      // source: https://touringplans.com/blog/five-things-to-know-about-enchanted-tales-with-belle
      {
        type: 'spy',
        id: 'enchanted-tales-belle-s10',
        prompt: 'Find a teapot and a little cup on a shelf. Do they remind you of anyone?',
        hint: 'Mrs. Potts and Chip! Belle’s castle friends seem to have visited the cottage.',
      },
      // evidence: Belle's childhood favorites, including one titled "La Belle au Bois Dormant"
      // source: https://touringplans.com/blog/five-things-to-know-about-enchanted-tales-with-belle
      {
        type: 'spy',
        id: 'enchanted-tales-belle-s11',
        prompt: 'Find the book called “La Belle au Bois Dormant.”',
        hint: 'It’s French for Sleeping Beauty, one of young Belle’s favorite stories.',
      },
      // evidence: A Hidden Mickey is in the stacks of firewood in Maurice's cottage (look toward the bottom).
      // source: https://touringplans.com/blog/five-things-to-know-about-enchanted-tales-with-belle
      {
        type: 'spy',
        id: 'enchanted-tales-belle-s12',
        prompt: 'Search the firewood for a Hidden Mickey.',
        hint: 'Look near the bottom of the stack. Imagineers love hiding Mickeys!',
      },
      // evidence: "his creations are perched on shelves and hanging from the ceiling"
      // source: https://allears.net/?p=11533
      {
        type: 'spy',
        id: 'enchanted-tales-belle-s13',
        prompt: 'In the workshop, look up. Find an invention hanging from the ceiling.',
        hint: 'Maurice’s gadgets are everywhere, on shelves and dangling overhead.',
      },
      // evidence: "Blueprints for Maurice's inventions line the walls" / Plans for the music box
      // source: https://touringplans.com/blog/five-things-to-know-about-enchanted-tales-with-belle
      {
        type: 'spy',
        id: 'enchanted-tales-belle-s14',
        prompt: 'Find Maurice’s drawing of a music box.',
        hint: 'It’s the plan for his wedding present to Belle and the Beast.',
      },
      // evidence: "Blueprints for Maurice's inventions line the walls of his workshop."
      // source: https://wdwnt.com/2023/02/enchanted-tales-with-belle-reopens-magic-kingdom/
      {
        type: 'spy',
        id: 'enchanted-tales-belle-s15',
        prompt: 'In the workshop, look at the walls. Can you find a blueprint for one of Maurice’s inventions?',
        hint: 'Maurice draws his plans on paper and pins them all around his workshop.',
      },
      // evidence: roles include Beast, Suits of Armor, Mrs. Potts and Chip, Footstool, Horse
      {
        type: 'challenge',
        id: 'enchanted-tales-belle-x17',
        prompt: 'Practice a role from the show: a suit of armor, a footstool or the galloping horse. Others guess which!',
      },
      // evidence: Lumière directs the action in the library
      {
        type: 'challenge',
        id: 'enchanted-tales-belle-x18',
        prompt: 'Whisper the magic mirror words together in your best Lumière accent.',
      },
      {
        type: 'wyr',
        id: 'enchanted-tales-belle-x21',
        a: 'Explore the cottage full of Belle’s books',
        b: 'Tinker in Maurice’s workshop',
      },
      {
        type: 'wyr',
        id: 'enchanted-tales-belle-x22',
        a: 'Be cast as the Beast',
        b: 'Be cast as a suit of armor',
      },
      {
        type: 'emoji',
        id: 'enchanted-tales-belle-x25',
        emojis: '🕯️🔥🇫🇷',
        hint: 'A candlestick who runs the show in the library.',
        choices: ['Cogsworth', 'Lumière', 'Chip', 'Gaston'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'enchanted-tales-belle-x26',
        emojis: '🪞✨🏰',
        hint: 'Say the magic words and it becomes a doorway.',
        choices: ['The magic mirror', 'A window', 'A painting', 'A fountain'],
        answer: 0,
      },
    ],
  },

  barnstormer: {
    facts: [
      // evidence: "Manufacturer: Vekoma"
      {
        text: 'The Barnstormer’s coaster was made by a company called Vekoma.',
        source: BARN_WIKI,
      },
      // evidence: "for a total of 16 riders per train"
      { text: 'Each Barnstormer train carries 16 riders.', source: BARN_WIKI },
      // evidence: "named Grandma Duck's Petting Farm previously occupied the site"
      {
        text: 'Long ago, a petting zoo called Grandma Duck’s Petting Farm stood on this spot.',
        source: BARN_WIKI,
      },
      // evidence: "former attractions at the now-defunct Opryland USA theme park"
      {
        text: 'The Barnstormer shares its name with an old ride at a closed theme park called Opryland USA.',
        source: BARN_WIKI,
      },
      // evidence: put together an aerial stunt show in the tradition of old-timey fairs
      {
        text: 'In the ride’s story, Goofy, the Great Goofini, puts on an aerial stunt show like the ones at old-timey fairs.',
        source: BARN_TP,
      },
    ],
    quests: [
      // fixed version of barnstormer-photo-1
      // evidence: a grouping of letters that "once read 'Wiseacre Farm.'"
      {
        type: 'photo',
        id: 'barnstormer-photo-2',
        prompt: 'From the line, snap the jumbled red letters on the back of the entrance sign. Can you unscramble them?',
        tip: 'Check the back of the entrance sign.',
        source: BARN_PREP,
      },
      // evidence: "The sign is done in a circus style."
      {
        type: 'photo',
        id: 'barnstormer-r-photo3',
        prompt: 'From the line, photograph the front of the circus-style Barnstormer sign with the Great Goofini on it.',
        source: BARN_TMFL,
      },
      // evidence: "A faux ticket booth sits at the entrance to The Barnstormer's queue."
      {
        type: 'photo',
        id: 'barnstormer-r-photo4',
        prompt: 'From the line, take a photo of the pretend circus ticket booth.',
        source: BARN_TMFL,
      },
      // evidence: "Props, including cannon with cannonballs, a dartboard, and a rocket ship, dot the queue."
      {
        type: 'photo',
        id: 'barnstormer-r-photo5',
        prompt: 'From the line, photograph the cannon and its pile of cannonballs.',
        source: BARN_TMFL,
      },
      // evidence: "Props, including cannon with cannonballs, a dartboard, and a rocket ship, dot the queue."
      {
        type: 'photo',
        id: 'barnstormer-r-photo6',
        prompt: 'From the line, photograph the dartboard. Can you tell where the darts landed?',
        source: BARN_TMFL,
      },
      // evidence: "Props, including cannon with cannonballs, a dartboard, and a rocket ship, dot the queue."
      {
        type: 'photo',
        id: 'barnstormer-r-photo7',
        prompt: 'From the line, take a photo of Goofini’s rocket ship prop.',
        source: BARN_TMFL,
      },
      // evidence: "Riders reach a top speed of 40.2 kilometers per hour (25.0 mph)"
      {
        type: 'guess',
        id: 'barnstormer-x1',
        question: 'How fast does the Barnstormer go at top speed, in miles per hour?',
        answer: 25,
        min: 5,
        max: 80,
        step: 1,
        unit: 'mph',
        tolerance: 4,
        explain: 'It zooms up to 25 miles per hour!',
        source: BARN_WIKI,
      },
      // evidence: "207 meters (679 ft)"
      {
        type: 'guess',
        id: 'barnstormer-x2',
        question: 'How many feet long is the Barnstormer’s track?',
        answer: 679,
        min: 100,
        max: 2000,
        step: 10,
        unit: 'feet',
        tolerance: 100,
        explain: 'The track is 679 feet of twists and turns.',
        source: BARN_WIKI,
      },
      // evidence: "to a height of 9.1 meters (30 ft)"
      {
        type: 'guess',
        id: 'barnstormer-x3',
        question: 'How many feet high does the lift hill climb?',
        answer: 30,
        min: 5,
        max: 150,
        step: 1,
        unit: 'feet',
        tolerance: 5,
        explain: 'The lift hill goes up 30 feet. That’s about as tall as a 3-story building!',
        source: BARN_WIKI,
      },
      // evidence: "Duration: 0:53"
      {
        type: 'guess',
        id: 'barnstormer-x4',
        question: 'How many seconds does a Barnstormer ride last?',
        answer: 53,
        min: 10,
        max: 180,
        step: 1,
        unit: 'seconds',
        tolerance: 8,
        explain: 'The ride lasts about 53 seconds. Short and zippy!',
        source: BARN_WIKI,
      },
      // evidence: "It opened in Mickey's Toontown Fair on October 1, 1996."
      {
        type: 'truefalse',
        id: 'barnstormer-x5',
        statement: 'The first Barnstormer opened in 1996 in a land called Mickey’s Toontown Fair.',
        answer: true,
        explain: 'True! It opened in Mickey’s Toontown Fair on October 1, 1996.',
        source: BARN_WIKI,
      },
      // evidence: "Inversions: none"
      {
        type: 'truefalse',
        id: 'barnstormer-x6',
        statement: 'The Barnstormer turns riders upside down.',
        answer: false,
        explain: 'Nope! It has no upside-down loops at all.',
        source: BARN_WIKI,
      },
      // evidence: "home to Minnie Moo, a holstein cow"
      {
        type: 'trivia',
        id: 'barnstormer-x7',
        question: 'Minnie Moo lived at the old petting farm here. What kind of animal was she?',
        choices: ['A goat', 'A cow', 'A pig', 'A duck'],
        answer: 1,
        explain: 'Minnie Moo was a Holstein cow with a Hidden Mickey on her side!',
        source: BARN_WIKI,
      },
      // evidence: "named Grandma Duck's Petting Farm previously occupied the site" / "It opened in Mickey's Toontown Fair on October 1, 1996." / "March 12, 2012 (relaunch)"
      {
        type: 'order',
        id: 'barnstormer-x8',
        prompt: 'Put this spot’s history in order, oldest first.',
        items: [
          'Grandma Duck’s Petting Farm',
          'The Barnstormer at Goofy’s Wiseacre Farm',
          'The Barnstormer featuring the Great Goofini',
        ],
        explain: 'Petting farm first, then the farm coaster in 1996, then the Great Goofini in 2012.',
        source: BARN_WIKI,
      },
      // evidence: "located in the Storybook Circus section of the Magic Kingdom"
      {
        type: 'trivia',
        id: 'barnstormer-x12',
        question: 'Which part of Fantasyland is the Barnstormer in?',
        choices: ['Storybook Circus', 'Enchanted Forest', 'Castle Courtyard', 'Toontown'],
        answer: 0,
        explain: 'It’s in Storybook Circus. Look for the circus tents!',
        source: BARN_WIKI,
      },
      // evidence: Goofy "designed and built a special 'Multiflex Octoplane.'"
      {
        type: 'trivia',
        id: 'barnstormer-r1',
        question: 'What does Goofy call the homemade plane you ride?',
        choices: ['The Multiflex Octoplane', 'The Goofy Glider', 'The Sky Barn 3000', 'The Flying Haystack'],
        answer: 0,
        explain: 'The Multiflex Octoplane! Goofy designed and built it himself.',
        source: BARN_TP,
      },
      // evidence: The emergency escape parachute was "cut for budgetary reasons!"
      {
        type: 'truefalse',
        id: 'barnstormer-r2',
        statement: 'As the joke goes, Goofy’s plane has no emergency parachute because it was cut from the budget.',
        answer: true,
        explain: 'True! The parachute was “cut for budgetary reasons!” Classic Goofy.',
        source: BARN_TP,
      },
      // evidence: Finale: the coaster "crashes" through a billboard.
      {
        type: 'trivia',
        id: 'barnstormer-r3',
        question: 'What does your plane “crash” through near the end of the ride?',
        choices: ['A barn door', 'A billboard', 'A haystack', 'A circus tent'],
        answer: 1,
        explain: 'A billboard with Goofy’s silhouette cut out of it!',
        source: BARN_ALLEARS,
      },
      // evidence: "Two trains with eight cars each"
      {
        type: 'guess',
        id: 'barnstormer-r4',
        question: 'How many cars are in each Barnstormer train?',
        answer: 8,
        min: 1,
        max: 20,
        step: 1,
        unit: 'cars',
        tolerance: 1,
        explain: 'Eight cars, two riders each. That’s why it’s an Octo-plane!',
        source: BARN_WIKI,
      },
      // evidence: The top speed is 25 mph, the slowest coaster speed at Walt Disney World.
      {
        type: 'truefalse',
        id: 'barnstormer-r5',
        statement: 'The Barnstormer has the slowest top speed of any roller coaster at Walt Disney World.',
        answer: true,
        explain: 'True! At 25 mph, it’s a perfect first coaster.',
        source: BARN_TP,
      },
      // evidence: "crashed into a barn containing Audio-Animatronic chickens"
      {
        type: 'trivia',
        id: 'barnstormer-r6',
        question: 'In the old farm version, riders crashed through a barn full of what?',
        choices: ['Robot chickens', 'Hay bales', 'Pigs', 'Pumpkins'],
        answer: 0,
        explain: 'Audio-Animatronic chickens! That barn was removed in the 2012 makeover.',
        source: BARN_WIKI,
      },
      // evidence: 1988 Mickey's Birthdayland; 1990 Mickey's Starland; 1996 Mickey's Toontown Fair; 2012 Storybook Circus
      {
        type: 'order',
        id: 'barnstormer-r7',
        prompt: 'This corner of the park has had many names. Put them in order, oldest first.',
        items: ['Mickey’s Birthdayland', 'Mickey’s Starland', 'Mickey’s Toontown Fair', 'Storybook Circus'],
        explain: 'Birthdayland (1988), Starland (1990), Toontown Fair (1996), then Storybook Circus (2012).',
        source: BARN_TP,
      },
      // evidence: Goofini can be greeted at Pete's Silly Sideshow, across the way.
      {
        type: 'trivia',
        id: 'barnstormer-r8',
        question: 'Where can you meet the Great Goofini himself?',
        choices: ['Pete’s Silly Sideshow', 'Cinderella Castle', 'Main Street Station', 'Tomorrowland Terrace'],
        answer: 0,
        explain: 'At Pete’s Silly Sideshow, right across the way in Storybook Circus.',
        source: BARN_TP,
      },
      // evidence: Its theme was "an airplane school where Goofy was the instructor."
      {
        type: 'trivia',
        id: 'barnstormer-r9',
        question: 'Before the circus, what was the Barnstormer’s story?',
        choices: [
          'An airplane school with Goofy as the teacher',
          'A space mission with Donald',
          'A pirate ship battle',
          'A race through Toontown',
        ],
        answer: 0,
        explain: 'Goofy ran an airplane school on his Wiseacre Farm.',
        source: BARN_PREP,
      },
      // evidence: Minnie Moo was "relocated to Fort Wilderness"
      {
        type: 'trivia',
        id: 'barnstormer-r10',
        question: 'When the petting farm closed, where did Minnie Moo the cow go?',
        choices: ['Fort Wilderness', 'Animal Kingdom', 'EPCOT', 'Disneyland'],
        answer: 0,
        explain: 'She moved to Fort Wilderness at Walt Disney World.',
        source: BARN_PREP,
      },
      // evidence: "Manufacturer: Vekoma" / "Designer: Walt Disney Imagineering"
      {
        type: 'trivia',
        id: 'barnstormer-r11',
        question: 'Which company built the Barnstormer’s coaster?',
        choices: ['Vekoma', 'Lego', 'Ford', 'Pixar'],
        answer: 0,
        explain: 'Vekoma built it, and Walt Disney Imagineering designed it.',
        source: BARN_WIKI,
      },
      // evidence: "The Great Goofini hopes you will fly again soon!"
      {
        type: 'trivia',
        id: 'barnstormer-r12',
        question: 'What does the Great Goofini hope you’ll do after you land?',
        choices: ['Fly again soon', 'Join the circus', 'Buy a plane', 'Feed the elephants'],
        answer: 0,
        explain: '“Fly again soon!” Goofini loves repeat passengers.',
        source: BARN_PREP,
      },
      // evidence: Exit display: Goofini's equipment, including "First (and Second) Aid kits."
      {
        type: 'truefalse',
        id: 'barnstormer-r13',
        statement: 'Goofini’s gear near the exit includes “First (and Second) Aid kits.”',
        answer: true,
        explain: 'True! A daredevil like Goofy needs extra bandages.',
        source: BARN_ALLEARS,
      },
      // evidence: the barn and track stay in the same locations
      {
        type: 'truefalse',
        id: 'barnstormer-r14',
        statement: 'When the ride became the Great Goofini in 2012, the track stayed in the same spot.',
        answer: true,
        explain: 'True! The look changed, but the barn and track stayed right where they were.',
        source: BARN_ITM,
      },
      // evidence: "Goofy's 'Multiflex Octoplane' has 'eight articulated sections, each with side-by-side seating for two guests.'"
      {
        type: 'trivia',
        id: 'barnstormer-r15',
        question: 'How do riders sit in each car of Goofy’s plane?',
        choices: ['Two side by side', 'Four in a circle', 'One alone', 'Standing up'],
        answer: 0,
        explain: 'Two side by side in each of the eight cars.',
        source: BARN_TP,
      },
      // Look around: the path and queue, in walk order.
      // evidence: Textured paths run throughout the land, and hidden footprints from many characters are set into them.
      // source: https://insidethemagic.net/2012/03/detailed-storybook-circus-debut-builds-excitement-for-new-fantasyland-as-first-phase-opens-at-walt-disney-world/
      {
        type: 'spy',
        id: 'barnstormer-s1',
        prompt: 'On the path to the entrance, look down. Can you find a character footprint?',
        hint: 'Storybook Circus has footprints hidden in its paths, like the circus just paraded through.',
      },
      // evidence: "The sign is done in a circus style."
      // source: https://www.themouseforless.com/walt-disney-world/parks/magic-kingdom/barnstormer/
      {
        type: 'spy',
        id: 'barnstormer-s2',
        prompt: 'Find the circus-style Barnstormer sign at the entrance.',
        hint: 'It was redone in circus style in 2012, but the back still hides the old farm name.',
      },
      // evidence: "A faux ticket booth sits at the entrance."
      // source: https://www.themouseforless.com/walt-disney-world/parks/magic-kingdom/barnstormer/
      {
        type: 'spy',
        id: 'barnstormer-s3',
        prompt: 'Find the circus ticket booth. Can you buy a ticket there?',
        hint: 'It’s a pretend booth for the Great Goofini’s stunt show. Your ticket is just waiting in line!',
      },
      // evidence: Weathered signs suggest the circus "recently moved in."
      // source: https://insidethemagic.net/2012/03/detailed-storybook-circus-debut-builds-excitement-for-new-fantasyland-as-first-phase-opens-at-walt-disney-world/
      {
        type: 'spy',
        id: 'barnstormer-s4',
        prompt: 'Spot a sign that looks old and weathered.',
        hint: 'The worn signs tell the story that the circus just rolled into town.',
      },
      // evidence: Guests can pose with the Wheel of Peril ... "Watch out for flying knives!"
      // source: https://insidethemagic.net/2012/03/detailed-storybook-circus-debut-builds-excitement-for-new-fantasyland-as-first-phase-opens-at-walt-disney-world/
      {
        type: 'spy',
        id: 'barnstormer-s5',
        prompt: 'Find the Wheel of Peril.',
        hint: 'It’s one of Goofini’s daredevil acts. Watch out for flying knives!',
      },
      // evidence: a rocket ride that "didn't go quite according to plan"
      // source: https://insidethemagic.net/2012/03/detailed-storybook-circus-debut-builds-excitement-for-new-fantasyland-as-first-phase-opens-at-walt-disney-world/
      {
        type: 'spy',
        id: 'barnstormer-s6',
        prompt: 'Find Goofini’s rocket. Do you think his rocket ride went well?',
        hint: 'It “didn’t go quite according to plan.” Goofini’s stunts rarely do!',
      },
      // evidence: "Props, including cannon with cannonballs" / His cannon stunt "didn't end well."
      // source: https://www.themouseforless.com/walt-disney-world/parks/magic-kingdom/barnstormer/
      {
        type: 'spy',
        id: 'barnstormer-s7',
        prompt: 'Find the cannon and its cannonballs.',
        hint: 'Goofini tried being a human cannonball too. It didn’t end well.',
      },
      // evidence: "Props, including cannon with cannonballs, a dartboard, and a rocket ship"
      // source: https://www.themouseforless.com/walt-disney-world/parks/magic-kingdom/barnstormer/
      {
        type: 'spy',
        id: 'barnstormer-s8',
        prompt: 'Find the dartboard. Where are the darts?',
        hint: 'Another prop from Goofini’s circus act. Aim was never his strong suit.',
      },
      // evidence: Goofy's acts include "Tiger Juggling," which is a one-time performance.
      // source: https://insidethemagic.net/2012/03/detailed-storybook-circus-debut-builds-excitement-for-new-fantasyland-as-first-phase-opens-at-walt-disney-world/
      {
        type: 'spy',
        id: 'barnstormer-s9',
        prompt: 'Look for clues about Goofini’s other acts, like tiger juggling.',
        hint: 'Tiger juggling was a one-time-only show. You can probably guess why!',
      },
      // evidence: "a little shade and some mounted fans"
      // source: https://touringplans.com/blog/five-things-to-know-about-the-barnstormer-starring-the-great-goofini/
      {
        type: 'spy',
        id: 'barnstormer-s10',
        prompt: 'Find a fan mounted in the queue and enjoy the breeze.',
        hint: 'The line is outdoors, so the fans help on hot Florida days. Pilots like a good breeze!',
      },
      // evidence: The lift hill begins with a checkered design.
      // source: https://insidethemagic.net/2012/03/detailed-storybook-circus-debut-builds-excitement-for-new-fantasyland-as-first-phase-opens-at-walt-disney-world/
      {
        type: 'spy',
        id: 'barnstormer-s11',
        prompt: 'Watch a plane go up the lift hill. Find the checkered pattern.',
        hint: 'The checkered start is like an air show runway. Takeoff in 3, 2, 1!',
      },
      // evidence: the current billboard is a cutout silhouette
      // source: https://wdwnt.com/the-barnstormer/
      {
        type: 'spy',
        id: 'barnstormer-s12',
        prompt: 'Find the billboard the planes crash through. Whose shape is cut out of it?',
        hint: 'It’s Goofy’s silhouette, the hole he left when he flew through. Your plane follows his path!',
      },
      // evidence: The plane-shaped train has 8 rows of side-by-side seating
      {
        type: 'challenge',
        id: 'barnstormer-x19',
        prompt: 'Stretch your arms like Goofini’s plane wings and lean left and right like the coaster’s turns.',
      },
      {
        type: 'wyr',
        id: 'barnstormer-x23',
        a: 'Ride in the front row of the Octoplane',
        b: 'Ride in the very back row',
      },
      {
        type: 'emoji',
        id: 'barnstormer-x25',
        emojis: '🐶✈️🎪',
        hint: 'Your daring pilot today.',
        choices: ['Pluto', 'Goofy', 'Max', 'Bolt'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'barnstormer-x26',
        emojis: '🎪🐘🎈',
        hint: 'The part of Fantasyland you’re in right now!',
        choices: ['Storybook Circus', 'Adventureland', 'Liberty Square', 'Main Street'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'barnstormer-x27',
        emojis: '✈️🤸‍♂️⭐',
        hint: 'Goofy’s daredevil stage name.',
        choices: ['The Great Goofini', 'The Flying Dumbo', 'Captain Goof', 'Sky Pup'],
        answer: 0,
      },
    ],
  },
};
