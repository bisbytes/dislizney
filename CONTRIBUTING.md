# Contributing to dislizney

Thanks for helping make lines more fun! Most contributions are content: new quests, rides, or parks. You don't need to touch any app code for those.

## The golden rule: every fact needs a source

Every `Fact` and every trivia quest has a `source` URL. Only add facts you can point to on a public page (Wikipedia, official Disney Parks pages, or reputable press). If a fact changes (a ride is re-themed or closes), update or remove it.

## Add a quest to a ride

Open the park file, for example `src/data/parks/magic-kingdom.ts`, find the ride, and add to its `quests` list. Give every quest an `id` that is unique across the whole app (progress is saved by id).

```ts
{
  type: 'trivia',
  id: 'hm-4',
  question: 'What do you ride through the Haunted Mansion in?',
  choices: ['Doom Buggies', 'Ghost Boats', 'Spook Trains', 'Bat Carts'],
  answer: 0,               // index of the right choice
  explain: 'You ride in Doom Buggies.',
  source: 'https://en.wikipedia.org/wiki/The_Haunted_Mansion',
}
```

Quest types:

| type        | fields                                   | what it's for                                |
|-------------|------------------------------------------|----------------------------------------------|
| `trivia`    | question, choices, answer, explain, source | multiple choice; a star for a first-try right answer |
| `spy`       | prompt, hint?                            | find something in the queue                  |
| `challenge` | prompt                                   | a silly thing the whole group does together  |
| `wyr`       | a, b                                     | Would You Rather; no wrong answer            |
| `truefalse` | statement, answer (true/false), explain, source | Fact or Fiction                       |
| `guess`     | question, answer, min, max, step, unit, tolerance, explain, source | guess a number; a star if within `tolerance` |
| `order`     | prompt, items (in the correct order), explain, source | tap items in order; the app shuffles them |
| `emoji`     | emojis, hint, choices, answer            | Emoji Riddle; guess what the emojis spell    |

Keep the wording kid friendly and short enough to read in line.

## Add a ride

Add an `Attraction` to a land's `attractions` list. You'll need:

- `coords`: the ride's entrance latitude and longitude (used by Fun Fact Radar). If you had to estimate, set `coordsApprox: true` so someone can correct it later.
- `wikiTitle`: the English Wikipedia page title, so the app can pull a live summary.
- `facts`: two or three "Did you know?" facts, each with a source.
- `quests`: three to five quests is a good length for one line.

## Add a park

1. Copy `src/data/parks/magic-kingdom.ts` to a new file, for example `epcot.ts`, and fill in lands and rides.
2. In `src/data/parks/index.ts`, import it and replace the matching `comingSoon(...)` entry with it.

The storybook map, quest screens and radar pick it up automatically.

## Code changes

```bash
npm install
npx expo start      # run it
npx tsc --noEmit    # typecheck before opening a pull request
```

This project uses Expo (SDK 57) and Expo Router. Install native packages with `npx expo install <package>` so versions match the SDK.
