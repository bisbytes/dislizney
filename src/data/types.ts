/**
 * Content model for dislizney.
 *
 * Every park is a "storybook". Each land is a chapter, and each attraction is a
 * stop on the chapter's path. Standing in line at a stop unlocks its quests.
 *
 * To add a park, create a file in `src/data/parks/` that exports a `Park` and
 * register it in `src/data/parks/index.ts`. See CONTRIBUTING.md.
 */

export type LatLng = { lat: number; lng: number };

/** A fact must always carry the URL it came from, so anyone can check it. */
export type Fact = {
  text: string;
  source: string;
};

export type TriviaQuest = {
  type: 'trivia';
  id: string;
  question: string;
  choices: string[];
  /** Index into `choices`. */
  answer: number;
  /** Shown after answering. */
  explain: string;
  source: string;
};

/** Look around the queue and find something. */
export type SpyQuest = {
  type: 'spy';
  id: string;
  prompt: string;
  hint?: string;
};

/** A silly, do-it-together activity for the group in line. */
export type ChallengeQuest = {
  type: 'challenge';
  id: string;
  prompt: string;
};

/** No right answer: everyone picks and explains why. */
export type WouldYouRatherQuest = {
  type: 'wyr';
  id: string;
  a: string;
  b: string;
};

/** Fact or Fiction: is this statement true? */
export type TrueFalseQuest = {
  type: 'truefalse';
  id: string;
  statement: string;
  answer: boolean;
  explain: string;
  source: string;
};

/** Tap the items in the right order. `items` is listed in the correct order; the app shuffles them. */
export type OrderQuest = {
  type: 'order';
  id: string;
  prompt: string;
  items: string[];
  explain: string;
  source: string;
};

/** Guess a number with a slider. A guess within `tolerance` of `answer` earns the star. */
export type GuessQuest = {
  type: 'guess';
  id: string;
  question: string;
  answer: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  tolerance: number;
  explain: string;
  source: string;
};

/** Emoji Riddle: work out what the emojis spell. */
export type EmojiQuest = {
  type: 'emoji';
  id: string;
  emojis: string;
  hint: string;
  choices: string[];
  answer: number;
};

export type Quest =
  | TriviaQuest
  | SpyQuest
  | ChallengeQuest
  | WouldYouRatherQuest
  | TrueFalseQuest
  | OrderQuest
  | GuessQuest
  | EmojiQuest;

export type Attraction = {
  id: string;
  name: string;
  emoji: string;
  /** Opening date as written on the source, e.g. "October 1, 1971". */
  opened: string;
  coords: LatLng;
  /** True when coordinates were estimated rather than taken from a source. */
  coordsApprox?: boolean;
  /** English Wikipedia page title, used to pull a live summary from the web. */
  wikiTitle?: string;
  /** One-sentence teaser read aloud on the storybook map. */
  blurb: string;
  facts: Fact[];
  quests: Quest[];
};

export type Land = {
  id: string;
  name: string;
  emoji: string;
  /** Storybook narration that opens the chapter. */
  intro: string;
  colors: { sky: string; ground: string; ink: string; accent: string };
  attractions: Attraction[];
};

export type Park = {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  /** Parks that are announced but have no content yet. */
  comingSoon?: boolean;
  center: LatLng;
  lands: Land[];
  /** Park id on queue-times.com, used to show posted wait times. */
  queueTimesId?: number;
  /** Park-wide quests used to fill long waits at any ride in this park. */
  parkQuests?: Quest[];
};
