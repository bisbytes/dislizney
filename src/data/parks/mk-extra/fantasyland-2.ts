import type { Fact, Quest } from '../../types';

/** Extra ride-specific content for Fantasyland (Castle Courtyard, Enchanted Forest, Storybook Circus). Every sourced item was checked against its source page. */
export const extra: Record<string, { facts: Fact[]; quests: Quest[] }> = {
  carrousel: {
    facts: [
      // evidence: "began construction of Carousel No. 46"
      {
        text: 'The Philadelphia Toboggan Company built this carousel as its Carousel No. 46.',
        source: 'https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel',
      },
      // evidence: "one of only two surviving five-abreast carousels built by PTC"
      {
        text: 'It’s one of only two five-across carousels from its builder that still exist. The other is the Riverview Carousel.',
        source: 'https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel',
      },
      // evidence: "The number of horses was increased to 90, all painted white."
      {
        text: 'When Disney fixed it up, every horse was painted white.',
        source: 'https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel',
      },
      // evidence: "Similar carousels with Cinderella themes under different names"
      {
        text: 'Tokyo Disneyland and Hong Kong Disneyland have Cinderella carousels too, with different names.',
        source: 'https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel',
      },
    ],
    quests: [
      // evidence: "began construction of Carousel No. 46"
      {
        type: 'trivia',
        id: 'carrousel-x1',
        question: 'Which company built this carousel long ago?',
        choices: ['Arrow Development', 'Philadelphia Toboggan Company', 'Detroit Toy Company', 'Pixar'],
        answer: 1,
        explain: 'The Philadelphia Toboggan Company started building it in 1917.',
        source: 'https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel',
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
        source: 'https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel',
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
        source: 'https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel',
      },
      // evidence: "Previously known as: Cinderella's Golden Carousel (1971–2010)"
      {
        type: 'truefalse',
        id: 'carrousel-x4',
        statement: 'This ride used to be called Cinderella’s Golden Carousel.',
        answer: true,
        explain: 'True! That was its name from 1971 until 2010.',
        source: 'https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel',
      },
      // evidence: "The carousel was later moved to Olympic Park" (in Irvington, for almost 40 years)
      {
        type: 'truefalse',
        id: 'carrousel-x5',
        statement: 'Before Disney, the carousel spun for almost 40 years at a park in New Jersey.',
        answer: true,
        explain: 'True! It spent almost 40 years at Olympic Park in Irvington, New Jersey.',
        source: 'https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel',
      },
      // evidence: "The number of horses was increased to 90, all painted white."
      {
        type: 'truefalse',
        id: 'carrousel-x6',
        statement: 'Disney painted all the horses bright purple.',
        answer: false,
        explain: 'Nope! Disney painted all the horses white.',
        source: 'https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel',
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
        explain: 'Built in 1917–1918, it went from Detroit to New Jersey, then to Magic Kingdom.',
        source: 'https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel',
      },
      // evidence: "the carousel's name was changed from Cinderella's Golden Carousel" (on June 1, 2010)
      {
        type: 'trivia',
        id: 'carrousel-x8',
        question: 'What year did it get the name Prince Charming Regal Carrousel?',
        choices: ['1971', '1999', '2010', '2020'],
        answer: 2,
        explain: 'It was renamed on June 1, 2010.',
        source: 'https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel',
      },
      // evidence: "a 60-foot (18 m) platform containing 72" hand-carved horses
      {
        type: 'guess',
        id: 'carrousel-x9',
        question: 'How many feet across was the carousel’s original platform?',
        answer: 60,
        min: 10,
        max: 150,
        step: 5,
        unit: 'feet',
        tolerance: 10,
        explain: 'The platform was 60 feet across. That’s about as long as 4 cars!',
        source: 'https://en.wikipedia.org/wiki/Prince_Charming_Regal_Carrousel',
      },
      // evidence: "She transforms a pumpkin into a carriage"
      {
        type: 'trivia',
        id: 'carrousel-x10',
        question: 'In Cinderella, what does the Fairy Godmother turn into a carriage?',
        choices: ['A watermelon', 'A pumpkin', 'A teapot', 'A shoe'],
        answer: 1,
        explain: 'Bibbidi-bobbidi-boo! A pumpkin becomes Cinderella’s carriage.',
        source: 'https://en.wikipedia.org/wiki/Cinderella_(1950_film)',
      },
      // evidence: "two mice named Jaq and Gus"
      {
        type: 'trivia',
        id: 'carrousel-x11',
        question: 'What are the names of Cinderella’s two mouse friends?',
        choices: ['Chip and Dale', 'Jaq and Gus', 'Timon and Pumbaa', 'Flit and Meeko'],
        answer: 1,
        explain: 'Jaq and Gus are Cinderella’s brave mouse pals.',
        source: 'https://en.wikipedia.org/wiki/Cinderella_(1950_film)',
      },
      // evidence: "her stepmother's pet cat, Lucifer" / "her bloodhound Bruno into a footman"
      {
        type: 'truefalse',
        id: 'carrousel-x12',
        statement: 'In Cinderella, the stepmother’s cat is named Bruno.',
        answer: false,
        explain: 'Nope! The cat is Lucifer. Bruno is Cinderella’s dog.',
        source: 'https://en.wikipedia.org/wiki/Cinderella_(1950_film)',
      },
      // evidence: "Cinderella was released to theatres on February 15, 1950."
      {
        type: 'guess',
        id: 'carrousel-x13',
        question: 'What year did the movie Cinderella come out?',
        answer: 1950,
        min: 1920,
        max: 2000,
        step: 1,
        unit: '',
        tolerance: 3,
        explain: 'Cinderella came to theaters on February 15, 1950.',
        source: 'https://en.wikipedia.org/wiki/Cinderella_(1950_film)',
      },
      {
        type: 'spy',
        id: 'carrousel-x14',
        prompt: 'Spot something golden that looks fit for a royal ball.',
        hint: 'Look at the poles and trim.',
      },
      { type: 'spy', id: 'carrousel-x15', prompt: 'Find a horse that you think looks the bravest. Why that one?' },
      {
        type: 'spy',
        id: 'carrousel-x16',
        prompt: 'Spot something nearby that could belong to a princess.',
        hint: 'Crowns, castles and sparkles count!',
      },
      {
        type: 'spy',
        id: 'carrousel-x17',
        prompt: 'Count how many horses you can see that are mid-jump with their legs up.',
      },
      {
        type: 'challenge',
        id: 'carrousel-x18',
        prompt: 'Everyone gallop in place like a royal horse. Clip-clop, clip-clop!',
      },
      { type: 'challenge', id: 'carrousel-x19', prompt: 'Take turns doing your fanciest royal bow or curtsy.' },
      {
        type: 'challenge',
        id: 'carrousel-x20',
        prompt: 'Make up a magic spell, Fairy Godmother style. What would it turn into what?',
      },
      {
        type: 'challenge',
        id: 'carrousel-x21',
        prompt: 'Pretend the clock is striking midnight! Everyone count down the bongs from 12.',
      },
      {
        type: 'wyr',
        id: 'carrousel-x22',
        a: 'Ride a carousel horse that could really gallop',
        b: 'Ride a pumpkin coach pulled by mice',
      },
      { type: 'wyr', id: 'carrousel-x23', a: 'Wear glass slippers all day', b: 'Wear a crown all day' },
      { type: 'wyr', id: 'carrousel-x24', a: 'Have a Fairy Godmother', b: 'Have two talking mouse friends' },
      { type: 'wyr', id: 'carrousel-x25', a: 'Dance at the royal ball', b: 'Name every horse on the carousel' },
      {
        type: 'emoji',
        id: 'carrousel-x26',
        emojis: '👠✨🕛',
        hint: 'Left behind on the palace stairs.',
        choices: ['A crown', 'The glass slipper', 'A magic wand', 'A pumpkin'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'carrousel-x27',
        emojis: '🎃➡️🐴🛞',
        hint: 'A ride to the ball!',
        choices: ['The pumpkin coach', 'A pie cart', 'A hay wagon', 'A carousel'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'carrousel-x28',
        emojis: '🐭🐭🧀',
        hint: 'Cinderella’s tiny helpers.',
        choices: ['Mickey and Minnie', 'Jaq and Gus', 'Chip and Dale', 'Remy and Emile'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'carrousel-x29',
        emojis: '🧚‍♀️🪄✨',
        hint: 'Bibbidi-bobbidi-boo!',
        choices: ['Tinker Bell', 'The Fairy Godmother', 'The Blue Fairy', 'Flora'],
        answer: 1,
      },
    ],
  },

  philharmagic: {
    facts: [
      // evidence: "Opening date: October 8, 2003."
      {
        text: 'Mickey’s PhilharMagic opened at Magic Kingdom on October 8, 2003.',
        source: 'https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic',
      },
      // evidence: "Replaced: Legend of The Lion King"
      {
        text: 'Before PhilharMagic, this theater held a stage show called Legend of the Lion King.',
        source: 'https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic',
      },
      // evidence: "featuring 3D effects, scents, and water"
      {
        text: 'The show mixes 3D movie magic with smells and splashes of water.',
        source: 'https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic',
      },
    ],
    quests: [
      // evidence: "the Fantasyland Concert Hall (Orlando, Hong Kong, and Tokyo)"
      {
        type: 'trivia',
        id: 'philharmagic-x1',
        question: 'What is the name of the theater where Mickey’s orchestra plays?',
        choices: ['Fantasyland Concert Hall', 'Mickey’s Music Barn', 'The Royal Opera House', 'Toontown Theater'],
        answer: 0,
        explain: 'You’re waiting outside the Fantasyland Concert Hall!',
        source: 'https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic',
      },
      // evidence: "Mickey's PhilharMagic is a 12-minute-long show."
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
        source: 'https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic',
      },
      // evidence: "a new scene would be added to the film featuring" "Un Poco Loco" from Coco
      {
        type: 'trivia',
        id: 'philharmagic-x3',
        question: 'Which song from Coco was added to the show?',
        choices: ['“Remember Me”', '“Un Poco Loco”', '“Let It Go”', '“Try Everything”'],
        answer: 1,
        explain: '“Un Poco Loco” from Coco joined the show.',
        source: 'https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic',
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
        explain: 'The Coco scene arrived on November 12, 2021.',
        source: 'https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic',
      },
      // evidence: A vortex carries him through Beauty and the Beast ("Be Our Guest"), ... The Little Mermaid ("Part of Your World"), The Lion King ("I Just Can't Wait to Be King") ... Aladdin ("A Whole New World")
      {
        type: 'order',
        id: 'philharmagic-x5',
        prompt: 'Put these songs in the order Donald visits them in the show.',
        items: ['“Be Our Guest”', '“Part of Your World”', '“I Just Can’t Wait to Be King”', '“A Whole New World”'],
        explain: 'Donald goes from Beauty and the Beast to The Little Mermaid, The Lion King, and later Aladdin.',
        source: 'https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic',
      },
      // evidence: "Don't forget the orchestra. And don't touch my hat!"
      {
        type: 'truefalse',
        id: 'philharmagic-x6',
        statement: 'Mickey tells Donald not to touch his hat.',
        answer: true,
        explain: 'True! Mickey says, “Don’t touch my hat!” Guess what Donald does?',
        source: 'https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic',
      },
      // evidence: "Mickey places his famous Sorcerer's hat on the podium."
      {
        type: 'truefalse',
        id: 'philharmagic-x7',
        statement: 'The hat Donald borrows is Mickey’s cowboy hat.',
        answer: false,
        explain: 'Nope! It’s Mickey’s famous Sorcerer’s hat.',
        source: 'https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic',
      },
      // evidence: Peter Pan ("You Can Fly!")
      {
        type: 'trivia',
        id: 'philharmagic-x8',
        question: 'In the show, “You Can Fly!” comes from which movie?',
        choices: ['Dumbo', 'Peter Pan', 'Aladdin', 'Up'],
        answer: 1,
        explain: 'It’s from Peter Pan. Donald gets a flying lesson!',
        source: 'https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic',
      },
      // evidence: "Opening date: October 8, 2003."
      {
        type: 'guess',
        id: 'philharmagic-x9',
        question: 'What year did Mickey’s PhilharMagic open here?',
        answer: 2003,
        min: 1971,
        max: 2026,
        step: 1,
        unit: '',
        tolerance: 2,
        explain: 'It opened on October 8, 2003.',
        source: 'https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic',
      },
      // evidence: The Little Mermaid ("Part of Your World")
      {
        type: 'trivia',
        id: 'philharmagic-x10',
        question: 'Which Little Mermaid song is in the show?',
        choices: ['“Part of Your World”', '“Under the Sea”', '“Kiss the Girl”', '“Poor Unfortunate Souls”'],
        answer: 0,
        explain: 'Donald dives in for “Part of Your World.”',
        source: 'https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic',
      },
      // evidence: "Replaced: Legend of The Lion King."
      {
        type: 'truefalse',
        id: 'philharmagic-x11',
        statement: 'Before PhilharMagic, this theater had a Lion King stage show.',
        answer: true,
        explain: 'True! Legend of the Lion King played here before.',
        source: 'https://en.wikipedia.org/wiki/Mickey%27s_PhilharMagic',
      },
      {
        type: 'spy',
        id: 'philharmagic-x12',
        prompt: 'Spot something shaped like a musical instrument.',
        hint: 'Horns, drums, violins and harps all count!',
      },
      { type: 'spy', id: 'philharmagic-x13', prompt: 'Find a musical note or a music symbol somewhere around you.' },
      {
        type: 'spy',
        id: 'philharmagic-x14',
        prompt: 'Look for something gold and fancy, like it belongs in a grand concert hall.',
      },
      {
        type: 'spy',
        id: 'philharmagic-x15',
        prompt: 'Spot a character from a Disney movie that you think could be in Mickey’s orchestra.',
      },
      {
        type: 'challenge',
        id: 'philharmagic-x16',
        prompt: 'Be the conductor! One person waves their arms and everyone hums faster or slower to match.',
      },
      {
        type: 'challenge',
        id: 'philharmagic-x17',
        prompt: 'Everyone do your best grumpy Donald Duck voice. Who sounds the most like him?',
      },
      {
        type: 'challenge',
        id: 'philharmagic-x18',
        prompt: 'Air band! Each person picks a pretend instrument and plays “Be Our Guest” together.',
      },
      {
        type: 'challenge',
        id: 'philharmagic-x19',
        prompt: 'Pretend you just put on a magic hat. What silly spell happens?',
      },
      {
        type: 'wyr',
        id: 'philharmagic-x20',
        a: 'Play the drums in Mickey’s orchestra',
        b: 'Be the conductor waving the baton',
      },
      {
        type: 'wyr',
        id: 'philharmagic-x21',
        a: 'Fly on a magic carpet with Donald',
        b: 'Swim under the sea with Ariel',
      },
      {
        type: 'wyr',
        id: 'philharmagic-x22',
        a: 'Wear Mickey’s magic hat for one day',
        b: 'Have Donald as your music teacher',
      },
      {
        type: 'wyr',
        id: 'philharmagic-x23',
        a: 'Smell yummy food in the show',
        b: 'Feel a splash of water in the show',
      },
      {
        type: 'emoji',
        id: 'philharmagic-x24',
        emojis: '🧙‍♂️🎩⭐',
        hint: 'Donald should NOT have touched it.',
        choices: ['A top hat', 'The Sorcerer’s hat', 'A crown', 'A chef hat'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'philharmagic-x25',
        emojis: '🦆😡🎶',
        hint: 'He causes all the musical trouble.',
        choices: ['Daffy', 'Donald Duck', 'Scrooge', 'Daisy'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'philharmagic-x26',
        emojis: '🧞🪔🌙',
        hint: 'A whole new world!',
        choices: ['Aladdin', 'Moana', 'Mulan', 'Frozen'],
        answer: 0,
      },
    ],
  },

  'winnie-the-pooh': {
    facts: [
      // evidence: "Opening date: June 5, 1999"
      {
        text: 'This ride opened at Magic Kingdom on June 5, 1999.',
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)',
      },
      // evidence: "Cummings voiced Winnie the Pooh and Tigger in this version"
      {
        text: 'On this ride, the same voice actor, Jim Cummings, plays both Pooh and Tigger.',
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)',
      },
      // evidence: "statue in the Pet Cemetery outside the Haunted Mansion"
      {
        text: 'A little Mr. Toad statue sits in the Pet Cemetery outside the Haunted Mansion, a wave to the ride that was here first.',
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)',
      },
      // evidence: "Winnie the Pooh and the Honey Tree (1966), Winnie the Pooh and the Blustery Day (1968)"
      {
        text: 'The Pooh movie this ride is based on is made of three shorter films joined together.',
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh',
      },
    ],
    quests: [
      // evidence: "a rather curious picture of J. Thaddeus Toad himself"
      {
        type: 'truefalse',
        id: 'winnie-the-pooh-x1',
        statement: 'Inside Owl’s house on the ride, there’s a picture of Mr. Toad.',
        answer: true,
        explain: 'True! It’s a secret wave to Mr. Toad’s Wild Ride, which used to be here.',
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)',
      },
      // evidence: "Pooh's floating is achieved with the Pepper's ghost illusion"
      {
        type: 'trivia',
        id: 'winnie-the-pooh-x2',
        question: 'What old stage trick makes Pooh look like he’s floating in his dream?',
        choices: ['Pepper’s ghost', 'Salt’s shadow', 'Invisible string', 'A giant fan'],
        answer: 0,
        explain: 'It’s called Pepper’s ghost. It uses glass and light to make things seem to float!',
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)',
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
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)',
      },
      // evidence: "Gopher squirts water out of his mouth."
      {
        type: 'trivia',
        id: 'winnie-the-pooh-x4',
        question: 'Which character squirts water out of his mouth during the rainstorm?',
        choices: ['Rabbit', 'Gopher', 'Eeyore', 'Owl'],
        answer: 1,
        explain: 'Gopher squirts water. Watch out!',
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)',
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
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)',
      },
      // evidence: "The character Gopher, which does not appear in the Milne stories, was created"
      {
        type: 'truefalse',
        id: 'winnie-the-pooh-x6',
        statement: 'Gopher was in the original Winnie-the-Pooh books.',
        answer: false,
        explain: 'Nope! Gopher isn’t in A. A. Milne’s stories. He was created for the movies.',
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh',
      },
      // evidence: "based on characters appearing in the Winnie-the-Pooh stories by A. A. Milne and E. H. Shepard"
      {
        type: 'trivia',
        id: 'winnie-the-pooh-x7',
        question: 'Who wrote the original Winnie-the-Pooh stories?',
        choices: ['Dr. Seuss', 'A. A. Milne', 'Beatrix Potter', 'Roald Dahl'],
        answer: 1,
        explain: 'A. A. Milne wrote them, and E. H. Shepard drew the pictures.',
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh',
      },
      // evidence: "Winnie the Pooh and the Honey Tree (1966), Winnie the Pooh and the Blustery Day (1968)" / "Winnie the Pooh and Tigger Too (1974)"
      {
        type: 'order',
        id: 'winnie-the-pooh-x8',
        prompt: 'Put these Pooh films in the order they came out.',
        items: [
          'Winnie the Pooh and the Honey Tree',
          'Winnie the Pooh and the Blustery Day',
          'Winnie the Pooh and Tigger Too',
        ],
        explain: 'Honey Tree (1966), Blustery Day (1968), then Tigger Too (1974).',
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh',
      },
      // evidence: "It was first released on a double bill with The Littlest Horse Thieves on March 11, 1977."
      {
        type: 'guess',
        id: 'winnie-the-pooh-x9',
        question: 'What year did The Many Adventures of Winnie the Pooh movie come out?',
        answer: 1977,
        min: 1950,
        max: 2010,
        step: 1,
        unit: '',
        tolerance: 3,
        explain: 'The movie came out on March 11, 1977.',
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh',
      },
      // evidence: "the ride vehicles begin to bounce like Tigger" / "indicate the end of the heffalumps and woozles scene"
      {
        type: 'order',
        id: 'winnie-the-pooh-x10',
        prompt: 'Put these ride scenes in order.',
        items: ['A blustery, windy day', 'Bouncing with Tigger', 'Heffalumps and woozles dream', 'The big rainstorm'],
        explain: 'Wind first, then Tigger, then Pooh’s dream, then the rain!',
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh_(attraction)',
      },
      // evidence: "Christopher Robin must leave behind the Hundred Acre Wood to start school."
      {
        type: 'truefalse',
        id: 'winnie-the-pooh-x11',
        statement: 'At the end of the movie, Christopher Robin leaves the Hundred Acre Wood to start school.',
        answer: true,
        explain: 'True! But Pooh will always be waiting for him.',
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh',
      },
      // evidence: "Sterling Holloway" "as Winnie the Pooh"
      {
        type: 'trivia',
        id: 'winnie-the-pooh-x12',
        question: 'Who voiced Pooh in the 1977 movie?',
        choices: ['Jim Cummings', 'Sterling Holloway', 'Walt Disney', 'Paul Winchell'],
        answer: 1,
        explain: 'Sterling Holloway was the movie voice of Pooh. Paul Winchell voiced Tigger.',
        source: 'https://en.wikipedia.org/wiki/The_Many_Adventures_of_Winnie_the_Pooh',
      },
      {
        type: 'spy',
        id: 'winnie-the-pooh-x13',
        prompt: 'Spot something that Pooh would think is full of hunny.',
        hint: 'Pots, jars and beehives!',
      },
      { type: 'spy', id: 'winnie-the-pooh-x14', prompt: 'Find something that could be blown away on a blustery day.' },
      {
        type: 'spy',
        id: 'winnie-the-pooh-x15',
        prompt: 'Look for a tree that could be someone’s house in the Hundred Acre Wood.',
      },
      { type: 'spy', id: 'winnie-the-pooh-x16', prompt: 'Spot something orange and stripy like Tigger.' },
      {
        type: 'challenge',
        id: 'winnie-the-pooh-x17',
        prompt: 'Everyone say something gloomy in your best Eeyore voice. “Thanks for noticin’ me.”',
      },
      {
        type: 'challenge',
        id: 'winnie-the-pooh-x18',
        prompt: 'Do Pooh’s “Think, think, think” tap on your head while someone asks a riddle.',
      },
      {
        type: 'challenge',
        id: 'winnie-the-pooh-x19',
        prompt: 'Pretend a big wind is blowing! Everyone sway and hold onto your hats.',
      },
      {
        type: 'challenge',
        id: 'winnie-the-pooh-x20',
        prompt: 'Invent a brand new silly creature like a heffalump. What’s it called and what does it do?',
      },
      {
        type: 'wyr',
        id: 'winnie-the-pooh-x21',
        a: 'Bounce everywhere like Tigger',
        b: 'Float with a balloon like Pooh',
      },
      {
        type: 'wyr',
        id: 'winnie-the-pooh-x22',
        a: 'Live in a tree house like Owl',
        b: 'Live in a cozy burrow like Rabbit',
      },
      {
        type: 'wyr',
        id: 'winnie-the-pooh-x23',
        a: 'Eat only honey for a day',
        b: 'Eat only carrots from Rabbit’s garden for a day',
      },
      { type: 'wyr', id: 'winnie-the-pooh-x24', a: 'Ride in a giant honey pot', b: 'Ride on Tigger’s back' },
      {
        type: 'emoji',
        id: 'winnie-the-pooh-x25',
        emojis: '🐯🦘🌀',
        hint: 'Bouncy, trouncy, flouncy, pouncy!',
        choices: ['Tigger', 'Roo', 'Rajah', 'Shere Khan'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'winnie-the-pooh-x26',
        emojis: '🫏💙🎀',
        hint: 'He keeps losing his tail.',
        choices: ['Eeyore', 'Donkey', 'Piglet', 'Bullseye'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'winnie-the-pooh-x27',
        emojis: '🐷🧣💨',
        hint: 'Very small, and blown about by the wind.',
        choices: ['Pumbaa', 'Piglet', 'Hamm', 'Porky'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'winnie-the-pooh-x28',
        emojis: '💯🌳🌳',
        hint: 'Where Pooh and friends live.',
        choices: ['Sherwood Forest', 'The Hundred Acre Wood', 'Pride Rock', 'Neverland'],
        answer: 1,
      },
    ],
  },

  'enchanted-tales-belle': {
    facts: [
      // evidence: "It serves as the replacement for the Storytime with Belle attraction"
      {
        text: 'This show replaced an older one called Storytime with Belle.',
        source: 'https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle',
      },
      // evidence: "Enchanted Tales with Belle opened in December 2012."
      {
        text: 'Enchanted Tales with Belle opened in December 2012.',
        source: 'https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle',
      },
      // evidence: "Enchanted Tales with Belle reopened on February 19, 2023"
      {
        text: 'After a long break, the show reopened on February 19, 2023.',
        source: 'https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle',
      },
    ],
    quests: [
      // evidence: "encounter a magic mirror (a gift from the Beast) in Maurice's workshop"
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-x1',
        question: 'Who gave the magic mirror in Maurice’s workshop?',
        choices: ['Gaston', 'The Beast', 'Lumière', 'The Enchantress'],
        answer: 1,
        explain: 'The magic mirror was a gift from the Beast.',
        source: 'https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle',
      },
      // evidence: "located at the former site of Ariel's Grotto"
      {
        type: 'truefalse',
        id: 'enchanted-tales-belle-x2',
        statement: 'Maurice’s cottage stands where Ariel’s Grotto used to be.',
        answer: true,
        explain: 'True! Ariel’s Grotto was here before.',
        source: 'https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle',
      },
      // evidence: "meet an audio-animatronic Lumiere, who surprises a live Belle with guests"
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-x3',
        question: 'In the library, who surprises Belle with all the guests?',
        choices: ['Cogsworth', 'Chip', 'Lumière', 'Mrs. Potts'],
        answer: 2,
        explain: 'Lumière surprises Belle with you!',
        source: 'https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle',
      },
      // evidence: "meet an audio-animatronic Madame Wardrobe who casts some guests as objects"
      {
        type: 'truefalse',
        id: 'enchanted-tales-belle-x4',
        statement: 'Madame Wardrobe is played by a real actor in a costume.',
        answer: false,
        explain: 'Nope! Madame Wardrobe is an audio-animatronic, a moving, talking figure.',
        source: 'https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle',
      },
      // evidence: "Enchanted Tales with Belle opened in December 2012."
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
        explain: 'It opened in December 2012.',
        source: 'https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle',
      },
      // evidence: "encounter a magic mirror ... in Maurice's workshop" / "meet an audio-animatronic Madame Wardrobe" / "meet an audio-animatronic Lumiere"
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
        source: 'https://en.wikipedia.org/wiki/Enchanted_Tales_with_Belle',
      },
      // evidence: "Mrs. Potts's son, who has been transformed into a teacup"
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-x7',
        question: 'In Beauty and the Beast, what was Chip turned into?',
        choices: ['A spoon', 'A teacup', 'A clock', 'A candle'],
        answer: 1,
        explain: 'Chip is Mrs. Potts’s son, turned into a teacup.',
        source: 'https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)',
      },
      // evidence: "the first to receive a nomination for the Academy Award for Best Picture"
      {
        type: 'truefalse',
        id: 'enchanted-tales-belle-x8',
        statement: 'Beauty and the Beast was the first animated movie nominated for Best Picture at the Oscars.',
        answer: true,
        explain: 'True! It made history as the first animated Best Picture nominee.',
        source: 'https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)',
      },
      // evidence: "before the final petal falls from his enchanted rose"
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-x9',
        question: 'What enchanted flower counts down the Beast’s time?',
        choices: ['A tulip', 'A daisy', 'A rose', 'A sunflower'],
        answer: 2,
        explain: 'The spell must break before the last petal falls from the rose.',
        source: 'https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)',
      },
      // evidence: "a hunter who vies for Belle's hand in marriage"
      {
        type: 'trivia',
        id: 'enchanted-tales-belle-x10',
        question: 'What is Gaston’s hobby in the movie?',
        choices: ['Baking', 'Hunting', 'Painting', 'Gardening'],
        answer: 1,
        explain: 'Gaston is a hunter who wants to marry Belle.',
        source: 'https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)',
      },
      // evidence: "Beauty and the Beast is a 1991 American animated musical"
      {
        type: 'guess',
        id: 'enchanted-tales-belle-x11',
        question: 'What year did the animated Beauty and the Beast come out?',
        answer: 1991,
        min: 1950,
        max: 2020,
        step: 1,
        unit: '',
        tolerance: 2,
        explain: 'It came out in 1991.',
        source: 'https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)',
      },
      // evidence: "the bookish daughter of eccentric inventor Maurice"
      {
        type: 'truefalse',
        id: 'enchanted-tales-belle-x12',
        statement: 'Belle’s father, Maurice, is a baker.',
        answer: false,
        explain: 'Nope! Maurice is an inventor. That’s why he has a workshop.',
        source: 'https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)',
      },
      {
        type: 'spy',
        id: 'enchanted-tales-belle-x13',
        prompt: 'Spot something that looks like one of Maurice’s inventions.',
        hint: 'Gears, wheels and gadgets!',
      },
      {
        type: 'spy',
        id: 'enchanted-tales-belle-x14',
        prompt: 'Find a book, or something that Belle would love to read.',
      },
      { type: 'spy', id: 'enchanted-tales-belle-x15', prompt: 'Look for a rose or flower anywhere around you.' },
      {
        type: 'spy',
        id: 'enchanted-tales-belle-x16',
        prompt: 'Spot something that could come to life as an enchanted object, like a clock or candle.',
      },
      {
        type: 'challenge',
        id: 'enchanted-tales-belle-x17',
        prompt: 'Everyone strike a pose as an enchanted object. Others guess what you are!',
      },
      {
        type: 'challenge',
        id: 'enchanted-tales-belle-x18',
        prompt: 'Say “Be our guest!” in your fanciest French Lumière voice.',
      },
      {
        type: 'challenge',
        id: 'enchanted-tales-belle-x19',
        prompt: 'Tell the story of Beauty and the Beast together, one sentence each.',
      },
      {
        type: 'challenge',
        id: 'enchanted-tales-belle-x20',
        prompt: 'Tick-tock like Cogsworth! Everyone sway like a clock pendulum for 10 seconds.',
      },
      {
        type: 'wyr',
        id: 'enchanted-tales-belle-x21',
        a: 'Explore the Beast’s giant library',
        b: 'Tinker in Maurice’s workshop',
      },
      {
        type: 'wyr',
        id: 'enchanted-tales-belle-x22',
        a: 'Be cast as a wardrobe in the story',
        b: 'Be cast as a talking clock',
      },
      {
        type: 'wyr',
        id: 'enchanted-tales-belle-x23',
        a: 'Have a magic mirror that shows anywhere',
        b: 'Have an enchanted rose that never wilts',
      },
      {
        type: 'wyr',
        id: 'enchanted-tales-belle-x24',
        a: 'Dance in the ballroom with Belle',
        b: 'Have dinner served by singing dishes',
      },
      {
        type: 'emoji',
        id: 'enchanted-tales-belle-x25',
        emojis: '🕯️🔥🇫🇷',
        hint: 'A candlestick with a French accent.',
        choices: ['Cogsworth', 'Lumière', 'Chip', 'Gaston'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'enchanted-tales-belle-x26',
        emojis: '🫖👩‍🍳💕',
        hint: 'Chip’s mom.',
        choices: ['Mrs. Potts', 'Madame Wardrobe', 'Fairy Godmother', 'Mrs. Incredible'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'enchanted-tales-belle-x27',
        emojis: '🍽️🎶🙋',
        hint: 'A dinner song: “___ ___ ___!”',
        choices: ['Be Our Guest', 'Hakuna Matata', 'Let It Go', 'Under the Sea'],
        answer: 0,
      },
    ],
  },

  barnstormer: {
    facts: [
      // evidence: "Manufacturer: Vekoma"
      {
        text: 'The Barnstormer’s coaster was made by a company called Vekoma.',
        source: 'https://en.wikipedia.org/wiki/The_Barnstormer',
      },
      // evidence: "for a total of 16 riders per train"
      { text: 'Each Barnstormer train carries 16 riders.', source: 'https://en.wikipedia.org/wiki/The_Barnstormer' },
      // evidence: "named Grandma Duck's Petting Farm previously occupied the site"
      {
        text: 'Long ago, a petting zoo called Grandma Duck’s Petting Farm stood on this spot.',
        source: 'https://en.wikipedia.org/wiki/The_Barnstormer',
      },
      // evidence: "former attractions at the now-defunct Opryland USA theme park"
      {
        text: 'The Barnstormer shares its name with an old ride at a closed theme park called Opryland USA.',
        source: 'https://en.wikipedia.org/wiki/The_Barnstormer',
      },
    ],
    quests: [
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
        source: 'https://en.wikipedia.org/wiki/The_Barnstormer',
      },
      // evidence: "207 meters (679 ft) of twists, turns, and elevation changes follow"
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
        source: 'https://en.wikipedia.org/wiki/The_Barnstormer',
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
        source: 'https://en.wikipedia.org/wiki/The_Barnstormer',
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
        source: 'https://en.wikipedia.org/wiki/The_Barnstormer',
      },
      // evidence: "It opened in Mickey's Toontown Fair on October 1, 1996."
      {
        type: 'truefalse',
        id: 'barnstormer-x5',
        statement: 'The first Barnstormer opened in 1996 in a land called Mickey’s Toontown Fair.',
        answer: true,
        explain: 'True! It opened in Mickey’s Toontown Fair on October 1, 1996.',
        source: 'https://en.wikipedia.org/wiki/The_Barnstormer',
      },
      // evidence: "Inversions: none"
      {
        type: 'truefalse',
        id: 'barnstormer-x6',
        statement: 'The Barnstormer turns riders upside down.',
        answer: false,
        explain: 'Nope! It has no upside-down loops at all.',
        source: 'https://en.wikipedia.org/wiki/The_Barnstormer',
      },
      // evidence: "home to Minnie Moo, a holstein cow"
      {
        type: 'trivia',
        id: 'barnstormer-x7',
        question: 'Minnie Moo lived at the old petting farm here. What kind of animal was she?',
        choices: ['A goat', 'A cow', 'A pig', 'A duck'],
        answer: 1,
        explain: 'Minnie Moo was a Holstein cow with a Hidden Mickey on her side!',
        source: 'https://en.wikipedia.org/wiki/The_Barnstormer',
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
        source: 'https://en.wikipedia.org/wiki/The_Barnstormer',
      },
      // evidence: "This early version of Goofy was named Dippy Dawg by Disney artist Frank Webb."
      {
        type: 'trivia',
        id: 'barnstormer-x9',
        question: 'What was Goofy’s very first name?',
        choices: ['Silly Pup', 'Dippy Dawg', 'Goofus', 'Dopey Dog'],
        answer: 1,
        explain: 'Early on, Goofy was called Dippy Dawg!',
        source: 'https://en.wikipedia.org/wiki/Goofy',
      },
      // evidence: "The character first appeared in Mickey's Revue, released on May 25, 1932."
      {
        type: 'guess',
        id: 'barnstormer-x10',
        question: 'What year did Goofy first appear in a cartoon?',
        answer: 1932,
        min: 1920,
        max: 1990,
        step: 1,
        unit: '',
        tolerance: 3,
        explain: 'Goofy first showed up in Mickey’s Revue in 1932.',
        source: 'https://en.wikipedia.org/wiki/Goofy',
      },
      // evidence: "Goofy was portrayed as a single father with a son named Max"
      {
        type: 'truefalse',
        id: 'barnstormer-x11',
        statement: 'Goofy has a son named Max.',
        answer: true,
        explain: 'True! In the show Goof Troop, Goofy is a dad with a son named Max.',
        source: 'https://en.wikipedia.org/wiki/Goofy',
      },
      // evidence: "located in the Storybook Circus section of the Magic Kingdom"
      {
        type: 'trivia',
        id: 'barnstormer-x12',
        question: 'Which part of Fantasyland is the Barnstormer in?',
        choices: ['Storybook Circus', 'Enchanted Forest', 'Castle Courtyard', 'Toontown'],
        answer: 0,
        explain: 'It’s in Storybook Circus. Look for the circus tents!',
        source: 'https://en.wikipedia.org/wiki/The_Barnstormer',
      },
      {
        type: 'spy',
        id: 'barnstormer-x13',
        prompt: 'Spot something that looks like it belongs in a circus.',
        hint: 'Stripes, tents, flags and balloons!',
      },
      { type: 'spy', id: 'barnstormer-x14', prompt: 'Find something shaped like an airplane or a propeller.' },
      { type: 'spy', id: 'barnstormer-x15', prompt: 'Look for a poster or sign that shows off a daredevil stunt.' },
      { type: 'spy', id: 'barnstormer-x16', prompt: 'Spot the color red three different times around you.' },
      { type: 'challenge', id: 'barnstormer-x17', prompt: 'Everyone do the Goofy holler: “Yaaa-hoo-hoo-hoo-hooey!”' },
      {
        type: 'challenge',
        id: 'barnstormer-x18',
        prompt: 'Be a ringmaster! Announce the next person in line like they’re the star of the circus.',
      },
      {
        type: 'challenge',
        id: 'barnstormer-x19',
        prompt: 'Stretch your arms like airplane wings and do a slow pretend loop-de-loop.',
      },
      {
        type: 'challenge',
        id: 'barnstormer-x20',
        prompt: 'Say “Gawrsh!” the Goofy way. Who has the best Goofy laugh?',
      },
      { type: 'wyr', id: 'barnstormer-x21', a: 'Be a stunt pilot like the Great Goofini', b: 'Be a circus ringmaster' },
      { type: 'wyr', id: 'barnstormer-x22', a: 'Fly a plane made of a barn door', b: 'Fly a plane made of a bathtub' },
      {
        type: 'wyr',
        id: 'barnstormer-x23',
        a: 'Ride the Barnstormer in the front seat',
        b: 'Ride it in the very back seat',
      },
      {
        type: 'wyr',
        id: 'barnstormer-x24',
        a: 'Have Goofy as your flying teacher',
        b: 'Have Donald as your flying teacher',
      },
      {
        type: 'emoji',
        id: 'barnstormer-x25',
        emojis: '🐶🎩😂',
        hint: 'He says “Gawrsh!”',
        choices: ['Pluto', 'Goofy', 'Max', 'Bolt'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'barnstormer-x26',
        emojis: '🎪🐘🎈',
        hint: 'Where you are right now!',
        choices: ['Storybook Circus', 'Adventureland', 'Liberty Square', 'Main Street'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'barnstormer-x27',
        emojis: '✈️🤸‍♂️⭐',
        hint: 'Goofy’s daredevil act.',
        choices: ['The Great Goofini', 'The Flying Dumbo', 'Captain Goof', 'Sky Pup'],
        answer: 0,
      },
    ],
  },
};
