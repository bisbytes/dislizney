# disLIZney

**Line-time storybook adventures for Walt Disney World.**

Standing in line? Open dislizney, pick the ride you're waiting for, and get one long scroll of trivia, I Spy hunts, would-you-rathers and group challenges that lasts as long as your wait. When you reach the front, the ride is saved as a keepsake in your own journey, ready to share with your hashtags.

Built for kids, families and grown-ups who still feel like kids. Runs on iPhone, Android and the web from one codebase.

<p>
  <img src="docs/screenshots/park.png" width="200" alt="Pick your ride, with posted wait times" />
  <img src="docs/screenshots/ride.png" width="200" alt="Pick your wait" />
  <img src="docs/screenshots/line.png" width="200" alt="A line story" />
  <img src="docs/screenshots/keepsake.png" width="200" alt="A shareable keepsake" />
</p>

## What's inside

- **Pick your ride**: every ride in the park, grouped by land, with the posted wait time in big colored badges (green for short, gold for medium, pink for long). Waits come from [Queue-Times.com](https://queue-times.com).
- **Stories sized to your wait**: the app uses the posted wait (or one you pick if the sign says something different) and fills it with one continuous scroll of quests. It starts with quests about your ride, then mixes in trivia about nearby rides and the park with play-anywhere games. Every quest is open to play in any order, and more keep appearing as you scroll.
- **Photo spots**: as the line moves, the story points you to real things in the queue worth a picture (the Haunted Mansion's musical crypt, the Darling house in Peter Pan's queue, TRON's color-changing canopy and more, each with a source). Photos are saved on your device, added to the ride's keepsake, and can be shared straight from the line with hashtags.
- **Nine quest types**: Trivia, Fact or Fiction, Guess the Number, Put in Order, Emoji Riddles, I Spy, Would You Rather, Group Challenges and Photo Spots.
- **Keepsakes and My Journey**: tap "We're boarding!" and the ride becomes a keepsake card with your wait, stars, a fact you learned, a rating and a memory. Share it as a picture with a caption and hashtags (#dislizney #LineTimeAdventures and the park and ride), or share your whole day from the My Journey scrapbook.
- **Storybook flair**: each land has its own illustrated skyline, with sound effects, star bursts and a fanfare when you finish a ride. Sounds can be muted from the cover and respect the phone's silent switch.
- **Facts you can check**: every fact and trivia answer links to its source, and each ride page pulls a live summary from Wikipedia.
- **Fun Fact Radar**: turn it on and the app pops a fun fact (a notification on phones, a banner everywhere) when you're near a ride. Location never leaves your device.
- **Stars, progress and keepsakes**: saved on your device.

Magic Kingdom is the first storybook (30 rides and shows across 6 lands). EPCOT, Hollywood Studios and Animal Kingdom are on the shelf as "coming soon."

## Run it

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npx expo start
```

Then press `w` for web, or scan the QR code with the Expo Go app on your phone.

To build a web version you can host anywhere:

```bash
npx expo export --platform web   # outputs to dist/
```

## Project layout

```
src/
  app/                 screens (Expo Router: every file is a route)
    index.tsx          the cover and park shelf
    park/[parkId].tsx  pick your ride, with posted waits
    attraction/[id].tsx ride intro and wait picker
    line/[id].tsx      the line story, sized to the wait
    keepsake/[id].tsx  a shareable keepsake for one ride
    journey.tsx        the My Journey scrapbook
    about.tsx
  data/
    types.ts           the content model (Park → Land → Attraction → Quest)
    parks/             one file per park, registered in parks/index.ts
    pools/             park-wide and play-anywhere quests for long waits
  components/          storybook UI pieces
  lib/                 story planner, journey, wait times, progress, radar, Wikipedia
  theme/               colors and fonts
```

## Adding rides, quests and parks

All content lives in plain TypeScript files under `src/data/parks/`. See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add a quest, a ride or a whole new park.

## License

[MIT](LICENSE). Code and content contributions are welcome.

dislizney is an unofficial fan project and is not affiliated with or endorsed by The Walt Disney Company. Attraction names are trademarks of their respective owners.
