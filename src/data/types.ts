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

export type Quest = TriviaQuest | SpyQuest | ChallengeQuest | WouldYouRatherQuest;

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
};
