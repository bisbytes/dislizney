import type { Fact, Quest } from '../../types';

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
      // evidence: "Peter Pan was released on February 5, 1953"
      {
        text: 'The movie Peter Pan came out on February 5, 1953.',
        source: 'https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)',
      },
    ],
    quests: [
      // evidence: "their elder sister Wendy" tells the Darling boys, "John and Michael," stories
      {
        type: 'trivia',
        id: 'peter-pan-x1',
        question: 'In the movie, what are the names of Wendy’s two little brothers?',
        choices: ['Fred and George', 'John and Michael', 'Tom and Jerry', 'Huey and Dewey'],
        answer: 1,
        explain: 'Wendy tells stories about Peter Pan to John and Michael.',
        source: 'https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)',
      },
      // evidence: "led by Captain Hook and his first mate, Mr. Smee"
      {
        type: 'trivia',
        id: 'peter-pan-x2',
        question: 'Who is Captain Hook’s first mate?',
        choices: ['Mr. Smee', 'Tick-Tock', 'Nana', 'Starkey the Parrot'],
        answer: 0,
        explain: 'Mr. Smee is Captain Hook’s first mate.',
        source: 'https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)',
      },
      // evidence: "Based on J. M. Barrie's 1904 play"
      {
        type: 'trivia',
        id: 'peter-pan-x3',
        question: 'The Peter Pan movie is based on a play by which writer?',
        choices: ['Lewis Carroll', 'J. M. Barrie', 'Hans Christian Andersen', 'The Brothers Grimm'],
        answer: 1,
        explain: 'It’s based on J. M. Barrie’s 1904 play.',
        source: 'https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)',
      },
      // evidence: "\"You Can Fly!\" is one of the film's original songs."
      {
        type: 'trivia',
        id: 'peter-pan-x4',
        question: 'Which song is from the Peter Pan movie?',
        choices: ['“Let It Go”', '“You Can Fly!”', '“Heigh-Ho”', '“Under the Sea”'],
        answer: 1,
        explain: '“You Can Fly!” is one of the movie’s songs.',
        source: 'https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)',
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
      // evidence: "his best friend, the hot-headed pixie Tinker Bell"
      {
        type: 'truefalse',
        id: 'peter-pan-x7',
        statement: 'Tinker Bell is Peter Pan’s best friend in the movie.',
        answer: true,
        explain: 'Fact! The pixie Tinker Bell is Peter’s best friend.',
        source: 'https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)',
      },
      // evidence: "Peter Pan was released on February 5, 1953"
      {
        type: 'truefalse',
        id: 'peter-pan-x8',
        statement: 'The Peter Pan movie came out after this ride opened in 1971.',
        answer: false,
        explain: 'Fiction! The movie came out in 1953, long before 1971.',
        source: 'https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)',
      },
      // evidence: (film page) "released on February 5, 1953"; (ride page) "debuted at Disneyland on the park's opening day in July 1955" / "opened two days after the park's grand opening on October 3, 1971"
      {
        type: 'order',
        id: 'peter-pan-x9',
        prompt: 'Put these in order, oldest first.',
        items: ['Peter Pan movie comes out', 'Ride opens at Disneyland', 'Ride opens at Magic Kingdom'],
        explain: 'Movie in 1953, Disneyland ride in 1955, Magic Kingdom ride in 1971.',
        source: 'https://en.wikipedia.org/wiki/Peter_Pan%27s_Flight',
      },
      // evidence: "Peter is the leader of the Lost Boys of Never Land."
      {
        type: 'trivia',
        id: 'peter-pan-x10',
        question: 'Peter Pan is the leader of which group?',
        choices: ['The Pirates', 'The Lost Boys', 'The Darlings', 'The Mermaids'],
        answer: 1,
        explain: 'Peter leads the Lost Boys of Never Land.',
        source: 'https://en.wikipedia.org/wiki/Peter_Pan_(1953_film)',
      },
      // evidence: queue is "the Darlings' house" (per source reference title)
      {
        type: 'spy',
        id: 'peter-pan-x11',
        prompt: 'You’re in the Darlings’ house! Spot something that looks like it belongs in a children’s bedroom.',
        hint: 'Think toys, beds or storybooks.',
      },
      {
        type: 'spy',
        id: 'peter-pan-x12',
        prompt: 'Find something shaped like a star. Is it the second star to the right?',
      },
      {
        type: 'spy',
        id: 'peter-pan-x13',
        prompt: 'Spot something that would look right on a pirate ship.',
        hint: 'Ropes, anchors, flags or treasure!',
      },
      { type: 'spy', id: 'peter-pan-x14', prompt: 'Look for something that could be a clock. Tick-tock, tick-tock!' },
      {
        type: 'challenge',
        id: 'peter-pan-x15',
        prompt: 'Everyone do your best Captain Hook laugh. Who sounds the most villainous?',
      },
      {
        type: 'challenge',
        id: 'peter-pan-x16',
        prompt: 'Crow like Peter Pan! Take turns giving your loudest (but friendly) rooster crow.',
      },
      {
        type: 'challenge',
        id: 'peter-pan-x17',
        prompt: 'Think a happy thought and strike your best flying pose. Hold it for 10 seconds!',
      },
      {
        type: 'challenge',
        id: 'peter-pan-x18',
        prompt:
          'Play “Tinker Bell says”: one person is Tink and can only jingle and point. Everyone else guesses what she means!',
      },
      {
        type: 'wyr',
        id: 'peter-pan-x19',
        a: 'Live with the Lost Boys in Never Land',
        b: 'Sail with the pirates on the Jolly Roger',
      },
      { type: 'wyr', id: 'peter-pan-x20', a: 'Have Tinker Bell as your best friend', b: 'Have Nana as your nanny dog' },
      {
        type: 'wyr',
        id: 'peter-pan-x21',
        a: 'Lose your shadow like Peter',
        b: 'Lose your hand like Captain Hook (to a friendly crocodile)',
      },
      {
        type: 'wyr',
        id: 'peter-pan-x22',
        a: 'Fly over London at night',
        b: 'Swim with the mermaids in Mermaid Lagoon',
      },
      {
        type: 'emoji',
        id: 'peter-pan-x23',
        emojis: '🐊 ⏰',
        hint: 'He swallowed something that goes tick-tock.',
        choices: ['Tick-Tock the Crocodile', 'Mr. Smee', 'Nana', 'Sebastian'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'peter-pan-x24',
        emojis: '🏴‍☠️ 🪝 🎩',
        hint: 'He’s scared of a ticking croc.',
        choices: ['Mr. Smee', 'Captain Hook', 'Peter Pan', 'John Darling'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'peter-pan-x25',
        emojis: '🐕 👶 🛏️',
        hint: 'She looks after the Darling children.',
        choices: ['Pluto', 'Nana', 'Max', 'Lady'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'peter-pan-x26',
        emojis: '✨ 🧚 🔔',
        hint: 'Sprinkle some pixie dust!',
        choices: ['Fairy Godmother', 'Tinker Bell', 'Blue Fairy', 'Flora'],
        answer: 1,
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
      // evidence: "According to Time, the Sherman Brothers' song \"It's a Small World\" is the most publicly performed song of all time."
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
      {
        type: 'spy',
        id: 'small-world-x11',
        prompt: 'Find something on the building that looks like it came from a toy box.',
      },
      {
        type: 'spy',
        id: 'small-world-x12',
        prompt: 'Spot every color of the rainbow somewhere around you. Red, orange, yellow, green, blue, purple!',
      },
      {
        type: 'spy',
        id: 'small-world-x13',
        prompt: 'Find a shape on the ride’s front that you could draw with one line: a circle, triangle or square.',
      },
      {
        type: 'spy',
        id: 'small-world-x14',
        prompt: 'Look for something that reminds you of a country you’d love to visit.',
        hint: 'Towers, flags, patterns or buildings all count.',
      },
      {
        type: 'challenge',
        id: 'small-world-x15',
        prompt: 'Hum the song without opening your mouth. First person to giggle loses!',
      },
      {
        type: 'challenge',
        id: 'small-world-x16',
        prompt: 'Make up a new verse about your family to the “small world” tune.',
      },
      {
        type: 'challenge',
        id: 'small-world-x17',
        prompt: 'Take turns naming a country for each letter of the alphabet. How far can you get?',
      },
      {
        type: 'challenge',
        id: 'small-world-x18',
        prompt: 'Freeze like a doll! When someone says “small world,” everyone holds a doll pose.',
      },
      {
        type: 'wyr',
        id: 'small-world-x19',
        a: 'Sail through every country on a little boat',
        b: 'Fly over every country in a hot-air balloon',
      },
      {
        type: 'wyr',
        id: 'small-world-x20',
        a: 'Be one of the singing dolls for a day',
        b: 'Design a brand-new room for the ride',
      },
      {
        type: 'wyr',
        id: 'small-world-x21',
        a: 'Speak every language in the world',
        b: 'Play every instrument in the world',
      },
      {
        type: 'wyr',
        id: 'small-world-x22',
        a: 'Have the song stuck in your head all day',
        b: 'Have to sing it out loud once an hour',
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
      // evidence: "It is the first animated feature film produced in the United States and the first cel animated feature film."
      {
        text: 'Snow White and the Seven Dwarfs (1937) was the first cel-animated feature film.',
        source: 'https://en.wikipedia.org/wiki/Snow_White_and_the_Seven_Dwarfs_(1937_film)',
      },
    ],
    quests: [
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
      // evidence: "named Doc, Grumpy, Happy, Sleepy, Bashful, Sneezy, and Dopey"
      {
        type: 'truefalse',
        id: 'seven-dwarfs-x6',
        statement: 'One of the seven dwarfs is named Grouchy.',
        answer: false,
        explain: 'Fiction! It’s Grumpy, along with Doc, Happy, Sleepy, Bashful, Sneezy and Dopey.',
        source: 'https://en.wikipedia.org/wiki/Snow_White_and_the_Seven_Dwarfs_(1937_film)',
      },
      // evidence: "Disney received a full-size Oscar statuette and seven miniature ones"
      {
        type: 'trivia',
        id: 'seven-dwarfs-x7',
        question: 'What special award did Walt Disney get for the Snow White movie?',
        choices: ['A golden apple', 'One big Oscar and seven tiny ones', 'Seven gold pickaxes', 'A crystal crown'],
        answer: 1,
        explain: 'He received a full-size Oscar plus seven miniature ones!',
        source: 'https://en.wikipedia.org/wiki/Snow_White_and_the_Seven_Dwarfs_(1937_film)',
      },
      // evidence: "based on the 1812 German fairy tale \"Snow White\" by the Brothers Grimm"
      {
        type: 'trivia',
        id: 'seven-dwarfs-x8',
        question: 'Who first wrote down the fairy tale of Snow White?',
        choices: ['The Brothers Grimm', 'J. M. Barrie', 'Lewis Carroll', 'Dr. Seuss'],
        answer: 0,
        explain: 'It’s based on the Brothers Grimm’s 1812 fairy tale.',
        source: 'https://en.wikipedia.org/wiki/Snow_White_and_the_Seven_Dwarfs_(1937_film)',
      },
      // evidence: "creates a poisoned apple that will put whoever eats it into Sleeping Death."
      {
        type: 'trivia',
        id: 'seven-dwarfs-x9',
        question: 'What tricky fruit does the Queen give Snow White?',
        choices: ['A banana', 'A pear', 'An apple', 'A cherry'],
        answer: 2,
        explain: 'A poisoned apple that puts her into a Sleeping Death.',
        source: 'https://en.wikipedia.org/wiki/Snow_White_and_the_Seven_Dwarfs_(1937_film)',
      },
      // evidence: "Snow White and the Seven Dwarfs is a 1937 American animated musical" / "The Magic Kingdom version opened to the public on May 28, 2014"
      {
        type: 'order',
        id: 'seven-dwarfs-x10',
        prompt: 'Put these in order, oldest first.',
        items: ['Brothers Grimm fairy tale', 'Snow White movie', 'Mine Train opens'],
        explain: 'Fairy tale in 1812, movie in 1937, Mine Train in 2014.',
        source: 'https://en.wikipedia.org/wiki/Seven_Dwarfs_Mine_Train',
      },
      // evidence: "Speed: 34 mph" ... "5 trains with 5 cars"
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
      // evidence: "There are 12 spigots each representing a note on the chromatic scale."
      {
        type: 'spy',
        id: 'seven-dwarfs-x12',
        prompt: 'Find the musical spigots and try to play a song. Can you play “Heigh-Ho”?',
        hint: 'There are 12, each a different note.',
      },
      { type: 'spy', id: 'seven-dwarfs-x13', prompt: 'Spot something sparkly that looks like a gem or jewel.' },
      { type: 'spy', id: 'seven-dwarfs-x14', prompt: 'Find something made of wood that the dwarfs might have carved.' },
      {
        type: 'spy',
        id: 'seven-dwarfs-x15',
        prompt: 'Look for a tool a miner would use.',
        hint: 'Pickaxes, buckets, lanterns or carts!',
      },
      {
        type: 'challenge',
        id: 'seven-dwarfs-x16',
        prompt: 'March in place and sing “Heigh-Ho” like you’re heading home from the mine.',
      },
      {
        type: 'challenge',
        id: 'seven-dwarfs-x17',
        prompt: 'Act out a dwarf and let the group guess which one. Try Sneezy or Sleepy!',
      },
      {
        type: 'challenge',
        id: 'seven-dwarfs-x18',
        prompt: 'Whistle while you wait! Who can whistle a tune the longest?',
      },
      {
        type: 'challenge',
        id: 'seven-dwarfs-x19',
        prompt: 'Be the Magic Mirror: say something kind about each person in your group.',
      },
      { type: 'wyr', id: 'seven-dwarfs-x20', a: 'Dig for diamonds with the dwarfs', b: 'Cook dinner with Snow White' },
      {
        type: 'wyr',
        id: 'seven-dwarfs-x21',
        a: 'Have a magic mirror that answers any question',
        b: 'Have a pickaxe that always finds gems',
      },
      {
        type: 'wyr',
        id: 'seven-dwarfs-x22',
        a: 'Be as cheerful as Happy all the time',
        b: 'Be as cozy as Sleepy all the time',
      },
      { type: 'wyr', id: 'seven-dwarfs-x23', a: 'Live in the dwarfs’ cottage', b: 'Live in the Queen’s castle' },
      {
        type: 'emoji',
        id: 'seven-dwarfs-x24',
        emojis: '😴 💤 🛏️',
        hint: 'He can’t keep his eyes open.',
        choices: ['Dopey', 'Sleepy', 'Doc', 'Bashful'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'seven-dwarfs-x25',
        emojis: '🪞 🧙‍♀️ 🍎',
        hint: 'She asks “Who’s the fairest of them all?”',
        choices: ['The Evil Queen', 'Ursula', 'The Queen of Hearts', 'Maleficent'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'seven-dwarfs-x26',
        emojis: '😠 💪 🧔',
        hint: 'He’s not a fan of hugs at first.',
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
      // evidence: "Loosely based on the 1837 Danish fairy tale"
      {
        text: 'The Little Mermaid movie is loosely based on an 1837 Danish fairy tale by Hans Christian Andersen.',
        source: 'https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)',
      },
      // evidence: "It also marked the start of the era known as the Disney Renaissance."
      {
        text: 'The Little Mermaid (1989) kicked off the era called the Disney Renaissance.',
        source: 'https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)',
      },
    ],
    quests: [
      // evidence: "The Little Mermaid was released in theaters on November 17, 1989"
      {
        type: 'guess',
        id: 'little-mermaid-x1',
        question: 'In what year did The Little Mermaid movie come out?',
        answer: 1989,
        min: 1950,
        max: 2020,
        step: 1,
        unit: '',
        tolerance: 3,
        explain: 'It came out November 17, 1989.',
        source: 'https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)',
      },
      // evidence: "Eric's excitable pet sheepdog"
      {
        type: 'trivia',
        id: 'little-mermaid-x2',
        question: 'What kind of pet does Prince Eric have?',
        choices: ['A parrot', 'A sheepdog', 'A cat', 'A horse'],
        answer: 1,
        explain: 'Max is Eric’s excitable sheepdog.',
        source: 'https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)',
      },
      // evidence: "Ursula's symbiotic and insidious pet green moray eels"
      {
        type: 'trivia',
        id: 'little-mermaid-x3',
        question: 'What kind of animals are Ursula’s pets Flotsam and Jetsam?',
        choices: ['Sharks', 'Eels', 'Octopuses', 'Jellyfish'],
        answer: 1,
        explain: 'They’re green moray eels.',
        source: 'https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)',
      },
      // evidence: "a red Jamaican-accented Caribbean crab who serves as King Triton's advisor and court composer"
      {
        type: 'trivia',
        id: 'little-mermaid-x4',
        question: 'What is Sebastian’s job for King Triton?',
        choices: ['Chef', 'Advisor and court composer', 'Royal guard', 'Mail carrier'],
        answer: 1,
        explain: 'Sebastian is Triton’s advisor and court composer.',
        source: 'https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)',
      },
      // evidence: "for three days in exchange for Ariel's voice"
      {
        type: 'guess',
        id: 'little-mermaid-x5',
        question: 'For how many days does Ursula make Ariel human?',
        answer: 3,
        min: 1,
        max: 10,
        step: 1,
        unit: 'days',
        tolerance: 0,
        explain: 'Three days, in exchange for Ariel’s voice.',
        source: 'https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)',
      },
      // evidence: "The film won two Academy Awards for Best Original Score and Best Original Song"
      {
        type: 'truefalse',
        id: 'little-mermaid-x6',
        statement: '“Under the Sea” won an Academy Award for Best Original Song.',
        answer: true,
        explain: 'Fact! The film won Oscars for Best Original Score and Best Original Song.',
        source: 'https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)',
      },
      // evidence: "a dimwitted seagull who gives inaccurate information about humans"
      {
        type: 'truefalse',
        id: 'little-mermaid-x7',
        statement: 'Scuttle the seagull is an expert who always gets human stuff right.',
        answer: false,
        explain: 'Fiction! Scuttle gives silly, wrong information about humans.',
        source: 'https://en.wikipedia.org/wiki/The_Little_Mermaid_(1989_film)',
      },
      // evidence: "The Little Mermaid: Ariel's Undersea Adventure opened on June 3, 2011." / "on December 6, 2012 at Magic Kingdom"
      {
        type: 'order',
        id: 'little-mermaid-x8',
        prompt: 'Put these in order, oldest first.',
        items: ['The Little Mermaid movie', 'California Adventure ride opens', 'Magic Kingdom ride opens'],
        explain: 'Movie in 1989, California ride in 2011, this ride in 2012.',
        source: 'https://en.wikipedia.org/wiki/Under_the_Sea:_Journey_of_the_Little_Mermaid',
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
      // evidence: "featuring Prince Eric's castle and the surrounding cliffs"
      {
        type: 'spy',
        id: 'little-mermaid-x11',
        prompt: 'Find Prince Eric’s castle up on the cliffs. Can you spot a tower?',
      },
      {
        type: 'spy',
        id: 'little-mermaid-x12',
        prompt: 'Spot something Scuttle might call a “human treasure.”',
        hint: 'Old ship parts, ropes or anything shiny!',
      },
      { type: 'spy', id: 'little-mermaid-x13', prompt: 'Look for something shaped like a seashell or a sea creature.' },
      { type: 'spy', id: 'little-mermaid-x14', prompt: 'Find something that looks like water or waves.' },
      {
        type: 'challenge',
        id: 'little-mermaid-x15',
        prompt: 'Swim like a mermaid in place! Everyone wiggle your “tail” without moving your feet.',
      },
      {
        type: 'challenge',
        id: 'little-mermaid-x16',
        prompt: 'Be Scuttle: pick an everyday object and give it a silly new name and use.',
      },
      {
        type: 'challenge',
        id: 'little-mermaid-x17',
        prompt: 'Lose your voice like Ariel! Tell a story using only hand signals for one minute.',
      },
      {
        type: 'challenge',
        id: 'little-mermaid-x18',
        prompt: 'Sing “Under the Sea” together, but in your best crab voice.',
      },
      {
        type: 'wyr',
        id: 'little-mermaid-x19',
        a: 'Have a fin like Ariel',
        b: 'Have legs and live in Prince Eric’s castle',
      },
      {
        type: 'wyr',
        id: 'little-mermaid-x20',
        a: 'Have Flounder as your best friend',
        b: 'Have Sebastian as your music teacher',
      },
      {
        type: 'wyr',
        id: 'little-mermaid-x21',
        a: 'Collect treasures from shipwrecks',
        b: 'Ride a seahorse through a coral reef',
      },
      {
        type: 'wyr',
        id: 'little-mermaid-x22',
        a: 'Be a royal sea king or queen',
        b: 'Be a seagull who flies anywhere',
      },
      {
        type: 'emoji',
        id: 'little-mermaid-x23',
        emojis: '🦀 🎵 🌊',
        hint: 'He conducts the band under the sea.',
        choices: ['Flounder', 'Sebastian', 'Scuttle', 'Max'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'little-mermaid-x24',
        emojis: '🐙 🧙‍♀️ 🐚',
        hint: 'She takes Ariel’s voice.',
        choices: ['Ursula', 'The Evil Queen', 'Maleficent', 'Cruella'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'little-mermaid-x25',
        emojis: '🍴 💇‍♀️',
        hint: 'Scuttle’s name for this is a “dinglehopper.”',
        choices: ['A fork', 'A spoon', 'A pipe', 'A comb'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'little-mermaid-x26',
        emojis: '🔱 👑 🌊',
        hint: 'Ariel’s dad.',
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
      // evidence: "At 64 minutes, it is one of the studio's shortest animated features"
      {
        text: 'The Dumbo movie is just 64 minutes long, one of Disney’s shortest animated features.',
        source: 'https://en.wikipedia.org/wiki/Dumbo_(1941_film)',
      },
      // evidence: "For their work on the score, Churchill and Wallace won the Academy Award for Best Original Score"
      {
        text: 'Dumbo’s music won the Academy Award for Best Original Score.',
        source: 'https://en.wikipedia.org/wiki/Dumbo_(1941_film)',
      },
    ],
    quests: [
      // evidence: "Dumbo is a 1941 American animated musical comedy-drama fantasy film"
      {
        type: 'guess',
        id: 'dumbo-x1',
        question: 'In what year did the Dumbo movie come out?',
        answer: 1941,
        min: 1920,
        max: 2000,
        step: 1,
        unit: '',
        tolerance: 3,
        explain: 'Dumbo came out in 1941.',
        source: 'https://en.wikipedia.org/wiki/Dumbo_(1941_film)',
      },
      // evidence: "At 64 minutes, it is one of the studio's shortest animated features"
      {
        type: 'guess',
        id: 'dumbo-x2',
        question: 'How many minutes long is the Dumbo movie?',
        answer: 64,
        min: 30,
        max: 150,
        step: 1,
        unit: 'minutes',
        tolerance: 8,
        explain: 'Only 64 minutes!',
        source: 'https://en.wikipedia.org/wiki/Dumbo_(1941_film)',
      },
      // evidence: "the circus loads up its train, Casey Jr., and sets out on a new tour"
      {
        type: 'trivia',
        id: 'dumbo-x3',
        question: 'What is the name of the circus train in Dumbo?',
        choices: ['Thomas', 'Casey Jr.', 'Little Toot', 'Choo-Choo Charlie'],
        answer: 1,
        explain: 'The circus travels on its train, Casey Jr.',
        source: 'https://en.wikipedia.org/wiki/Dumbo_(1941_film)',
      },
      // evidence: "a flock of white storks delivers many babies to the animals"
      {
        type: 'trivia',
        id: 'dumbo-x4',
        question: 'In the movie, what kind of bird delivers baby Dumbo?',
        choices: ['A pelican', 'A stork', 'An owl', 'A crow'],
        answer: 1,
        explain: 'White storks deliver the circus babies.',
        source: 'https://en.wikipedia.org/wiki/Dumbo_(1941_film)',
      },
      // evidence: "Mrs. Jumbo, Dumbo's mother, who not only speaks just once in the film"
      {
        type: 'trivia',
        id: 'dumbo-x5',
        question: 'What is the name of Dumbo’s mom?',
        choices: ['Mrs. Jumbo', 'Mrs. Potts', 'Mama Ellie', 'Mrs. Trunk'],
        answer: 0,
        explain: 'Mrs. Jumbo is Dumbo’s mother.',
        source: 'https://en.wikipedia.org/wiki/Dumbo_(1941_film)',
      },
      // evidence: "Mrs. Jumbo, Dumbo's mother, who not only speaks just once in the film"
      {
        type: 'truefalse',
        id: 'dumbo-x6',
        statement: 'Dumbo’s mom talks a lot in the movie.',
        answer: false,
        explain: 'Fiction! Mrs. Jumbo speaks just once in the whole film.',
        source: 'https://en.wikipedia.org/wiki/Dumbo_(1941_film)',
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
      // evidence: "The original attraction opened at Disneyland on August 16, 1955." / "Starting in 2012, Magic Kingdom's Timothy currently spins"
      {
        type: 'order',
        id: 'dumbo-x9',
        prompt: 'Put these in order, oldest first.',
        items: [
          'Dumbo movie comes out',
          'First Dumbo ride opens at Disneyland',
          'Magic Kingdom gets 16 new Dumbos',
          'Timothy starts spinning on top',
        ],
        explain: '1941, 1955, 1993, then 2012.',
        source: 'https://en.wikipedia.org/wiki/Dumbo_the_Flying_Elephant',
      },
      // evidence: "carrying what he thinks of as a magic feather"
      {
        type: 'trivia',
        id: 'dumbo-x10',
        question: 'What does Dumbo hold because he thinks it helps him fly?',
        choices: ['A peanut', 'A magic feather', 'A balloon', 'A wand'],
        answer: 1,
        explain: 'He carries what he thinks is a magic feather.',
        source: 'https://en.wikipedia.org/wiki/Dumbo_(1941_film)',
      },
      // evidence: "an indoor queue themed to the Bigtop"
      { type: 'spy', id: 'dumbo-x11', prompt: 'You’re at the circus! Find something with red and white stripes.' },
      { type: 'spy', id: 'dumbo-x12', prompt: 'Spot something that looks like a circus ticket or sign.' },
      { type: 'spy', id: 'dumbo-x13', prompt: 'Look for a feather, a peanut or a bird somewhere around you.' },
      { type: 'spy', id: 'dumbo-x14', prompt: 'Find an elephant! How many can you count from where you are?' },
      {
        type: 'challenge',
        id: 'dumbo-x15',
        prompt: 'Be the ringmaster! Take turns announcing the next family member like a big circus act.',
      },
      {
        type: 'challenge',
        id: 'dumbo-x16',
        prompt: 'Pretend to be an elephant: swing your arm like a trunk and give your best trumpet!',
      },
      { type: 'challenge', id: 'dumbo-x17', prompt: 'Chug like Casey Jr.! Make a train line and choo-choo in place.' },
      {
        type: 'challenge',
        id: 'dumbo-x18',
        prompt: 'Sing a lullaby softly like Mrs. Jumbo to the youngest person in your group.',
      },
      { type: 'wyr', id: 'dumbo-x19', a: 'Fly with giant ears like Dumbo', b: 'Ride on Casey Jr. across the country' },
      { type: 'wyr', id: 'dumbo-x20', a: 'Be a clown in the circus', b: 'Be an acrobat on the trapeze' },
      {
        type: 'wyr',
        id: 'dumbo-x21',
        a: 'Have Timothy Mouse ride in your hat',
        b: 'Have a magic feather that gives you courage',
      },
      { type: 'wyr', id: 'dumbo-x22', a: 'Eat circus peanuts all day', b: 'Eat cotton candy all day' },
      {
        type: 'emoji',
        id: 'dumbo-x23',
        emojis: '🐭 🎩 🎪',
        hint: 'Dumbo’s tiny best friend.',
        choices: ['Mickey Mouse', 'Timothy Q. Mouse', 'Jaq', 'Remy'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'dumbo-x24',
        emojis: '🚂 🎪 🚃',
        hint: 'He carries the whole circus.',
        choices: ['Casey Jr.', 'Thomas', 'The Polar Express', 'Big Thunder'],
        answer: 0,
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
      // evidence: "based on Lewis Carroll's 1865 novel Alice's Adventures in Wonderland"
      {
        text: 'Alice in Wonderland (1951) is based on Lewis Carroll’s 1865 book and its sequel, Through the Looking-Glass.',
        source: 'https://en.wikipedia.org/wiki/Alice_in_Wonderland_(1951_film)',
      },
    ],
    quests: [
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
      // evidence: "invites Alice to a bizarre croquet match using flamingoes and hedgehogs as the equipment."
      {
        type: 'trivia',
        id: 'mad-tea-party-x8',
        question: 'In the movie, what does the Queen of Hearts use as croquet mallets?',
        choices: ['Brooms', 'Flamingos', 'Teaspoons', 'Umbrellas'],
        answer: 1,
        explain: 'Flamingos for mallets and hedgehogs for balls!',
        source: 'https://en.wikipedia.org/wiki/Alice_in_Wonderland_(1951_film)',
      },
      // evidence: "a mysterious, pink-and-purple-striped cat with a permanent grin."
      {
        type: 'trivia',
        id: 'mad-tea-party-x9',
        question: 'What colors are the Cheshire Cat’s stripes?',
        choices: ['Orange and black', 'Pink and purple', 'Blue and green', 'Red and white'],
        answer: 1,
        explain: 'He’s pink and purple with a never-ending grin.',
        source: 'https://en.wikipedia.org/wiki/Alice_in_Wonderland_(1951_film)',
      },
      // evidence: "two fat identical twin brothers dressed in schoolboy uniforms and wearing red propeller caps."
      {
        type: 'truefalse',
        id: 'mad-tea-party-x10',
        statement: 'Tweedledee and Tweedledum wear red propeller caps.',
        answer: true,
        explain: 'Fact! The twins wear red propeller caps.',
        source: 'https://en.wikipedia.org/wiki/Alice_in_Wonderland_(1951_film)',
      },
      // evidence: "Alice in Wonderland is a 1951 American animated musical"
      {
        type: 'guess',
        id: 'mad-tea-party-x11',
        question: 'In what year did Disney’s Alice in Wonderland come out?',
        answer: 1951,
        min: 1920,
        max: 2000,
        step: 1,
        unit: '',
        tolerance: 3,
        explain: 'It came out in 1951.',
        source: 'https://en.wikipedia.org/wiki/Alice_in_Wonderland_(1951_film)',
      },
      {
        type: 'spy',
        id: 'mad-tea-party-x12',
        prompt: 'Pick the teacup you want to ride. What colors and patterns does it have?',
      },
      {
        type: 'spy',
        id: 'mad-tea-party-x13',
        prompt: 'Find something round that could be a saucer, a clock or a cake.',
      },
      { type: 'spy', id: 'mad-tea-party-x14', prompt: 'Look for a hanging light that would fit at a fancy tea party.' },
      {
        type: 'spy',
        id: 'mad-tea-party-x15',
        prompt: 'Spot someone wearing a hat. Is it as silly as the Mad Hatter’s?',
      },
      {
        type: 'challenge',
        id: 'mad-tea-party-x16',
        prompt: 'Have a pretend tea party! Pour, sip and say “Clean cup, move down!”',
      },
      {
        type: 'challenge',
        id: 'mad-tea-party-x17',
        prompt: 'Grin like the Cheshire Cat. Who can hold the biggest smile the longest?',
      },
      {
        type: 'challenge',
        id: 'mad-tea-party-x18',
        prompt: 'Be the White Rabbit: look at your “watch” and shout “I’m late!” in your fastest voice.',
      },
      {
        type: 'challenge',
        id: 'mad-tea-party-x19',
        prompt: 'Everyone tell a riddle that has no answer, just like the Mad Hatter would.',
      },
      {
        type: 'wyr',
        id: 'mad-tea-party-x20',
        a: 'Spin super fast in your teacup',
        b: 'Spin slow and wave at everyone',
      },
      {
        type: 'wyr',
        id: 'mad-tea-party-x21',
        a: 'Have tea with the Mad Hatter',
        b: 'Play croquet with the Queen of Hearts',
      },
      { type: 'wyr', id: 'mad-tea-party-x22', a: 'Shrink as tiny as a mouse', b: 'Grow as tall as a house' },
      {
        type: 'wyr',
        id: 'mad-tea-party-x23',
        a: 'Celebrate an unbirthday every day',
        b: 'Have one giant birthday once a year',
      },
      {
        type: 'emoji',
        id: 'mad-tea-party-x24',
        emojis: '🐰 ⏰ 🏃',
        hint: 'He’s late for a very important date!',
        choices: ['The White Rabbit', 'The March Hare', 'Thumper', 'Rabbit'],
        answer: 0,
      },
      {
        type: 'emoji',
        id: 'mad-tea-party-x25',
        emojis: '🐱 😁 🌙',
        hint: 'His grin stays when the rest disappears.',
        choices: ['Figaro', 'The Cheshire Cat', 'Lucifer', 'Dinah'],
        answer: 1,
      },
      {
        type: 'emoji',
        id: 'mad-tea-party-x26',
        emojis: '🎩 ☕ 🎉',
        hint: 'He hosts the unbirthday party.',
        choices: ['The Mad Hatter', 'Mr. Smee', 'The Caterpillar', 'Doc'],
        answer: 0,
      },
    ],
  },
};
