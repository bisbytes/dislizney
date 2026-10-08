import { Image } from 'expo-image';
import * as WebBrowser from 'expo-web-browser';
import { useMemo, useState, type ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import type { GuessQuest, OrderQuest, PhotoQuest, Quest } from '@/data/types';
import { pickPhoto, sharePhoto, takePhoto } from '@/lib/photos';
import { useProgress } from '@/lib/progress';
import { useSound } from '@/lib/sound';
import { colors } from '@/theme';
import { StarBurst } from './star-burst';
import { Card, StoryButton, tap, Txt } from './ui';

const KIND: Record<Quest['type'], { label: string; emoji: string; color: string }> = {
  trivia: { label: 'Trivia', emoji: '❓', color: '#FFF3C4' },
  spy: { label: 'I Spy', emoji: '🔍', color: '#DFF4FF' },
  challenge: { label: 'Group Challenge', emoji: '🎉', color: '#FFE3EE' },
  wyr: { label: 'Would You Rather', emoji: '🤔', color: '#E6F8EC' },
  truefalse: { label: 'Fact or Fiction', emoji: '⚖️', color: '#EDE6FF' },
  order: { label: 'Put in Order', emoji: '🔢', color: '#FFEBD9' },
  guess: { label: 'Guess the Number', emoji: '🎯', color: '#E0F7F4' },
  emoji: { label: 'Emoji Riddle', emoji: '🧩', color: '#FFF0F6' },
  photo: { label: 'Photo Spot', emoji: '📸', color: '#E3F0FF' },
};

export function SourceLink({ url }: { url: string }) {
  return (
    <Pressable accessibilityRole="link" onPress={() => WebBrowser.openBrowserAsync(url)}>
      <Txt size={13} color={colors.inkSoft} style={{ textDecorationLine: 'underline', marginTop: 6 }}>
        Source: {url.replace('https://', '').split('/')[0]}
      </Txt>
    </Pressable>
  );
}

type Finish = (star: boolean, pick?: string) => void;
type Done = { star: boolean } | undefined;

export function QuestCard({
  quest,
  step,
  locked,
  accent,
  finished,
  onFinish,
  from,
  photo,
  onPhoto,
  shareCaption,
}: {
  quest: Quest;
  step: number;
  locked: boolean;
  accent: string;
  finished: Done;
  onFinish: (star: boolean, pick?: string) => void;
  /** Where a borrowed quest comes from, e.g. a neighboring ride. */
  from?: string;
  /** Photo spots: the photo taken here, a callback to save one, and the share caption. */
  photo?: string;
  onPhoto?: (uri: string) => void;
  shareCaption?: string;
}) {
  const { complete } = useProgress();
  const { play } = useSound();
  const [burst, setBurst] = useState(0);
  const kind = KIND[quest.type];

  const finish: Finish = (star, pick) => {
    complete(quest.id, star);
    onFinish(star, pick);
    play(star ? 'correct' : 'wrong');
    if (star) setBurst(Date.now());
  };

  return (
    <Card color={locked ? '#EEE7D6' : kind.color} style={styles.card}>
      <View style={styles.header}>
        <View style={[styles.step, { backgroundColor: finished ? colors.gold : colors.white, borderColor: accent }]}>
          <Txt weight="bold" size={15} color={colors.ink}>
            {finished ? '★' : step}
          </Txt>
        </View>
        <View style={{ flex: 1 }}>
          <Txt weight="bold" size={14} color={colors.inkSoft} style={{ letterSpacing: 1 }}>
            {kind.emoji} {kind.label.toUpperCase()}
          </Txt>
          {from && !locked && (
            <Txt size={12} color={colors.inkSoft}>
              About {from}
            </Txt>
          )}
        </View>
      </View>

      {locked ? (
        <Txt size={16} color={colors.inkSoft}>
          🔒 Finish the quest above to unlock this one.
        </Txt>
      ) : (
        <QuestBody
          quest={quest}
          finished={finished}
          finish={finish}
          photo={photo}
          onPhoto={onPhoto}
          shareCaption={shareCaption}
        />
      )}
      <StarBurst trigger={burst} />
    </Card>
  );
}

type PhotoProps = { photo?: string; onPhoto?: (uri: string) => void; shareCaption?: string };

function QuestBody({
  quest,
  finished,
  finish,
  ...photoProps
}: { quest: Quest; finished: Done; finish: Finish } & PhotoProps) {
  const [picked, setPicked] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);

  switch (quest.type) {
    case 'trivia':
      return (
        <Choices
          prompt={
            <Txt weight="medium" size={20}>
              {quest.question}
            </Txt>
          }
          choices={quest.choices}
          answer={quest.answer}
          finished={finished}
          finish={finish}
          explain={quest.explain}
          source={quest.source}
        />
      );
    case 'truefalse':
      return (
        <Choices
          prompt={
            <Txt weight="medium" size={20}>
              “{quest.statement}”
            </Txt>
          }
          choices={['✅ Fact', '❌ Fiction']}
          answer={quest.answer ? 0 : 1}
          finished={finished}
          finish={finish}
          explain={quest.explain}
          source={quest.source}
          row
        />
      );
    case 'emoji':
      return (
        <Choices
          prompt={
            <View style={{ alignItems: 'center', gap: 4 }}>
              <Txt size={44} style={{ lineHeight: 56, textAlign: 'center' }}>
                {quest.emojis}
              </Txt>
              <Txt size={15} color={colors.inkSoft} style={{ textAlign: 'center' }}>
                What do these emojis spell? {quest.hint}
              </Txt>
            </View>
          }
          choices={quest.choices}
          answer={quest.answer}
          finished={finished}
          finish={finish}
          explain={`It’s ${quest.choices[quest.answer]}!`}
        />
      );
    case 'order':
      return <OrderBody quest={quest} finished={finished} finish={finish} />;
    case 'guess':
      return <GuessBody quest={quest} finished={finished} finish={finish} />;
    case 'spy':
      return (
        <View>
          <Txt weight="medium" size={20}>
            {quest.prompt}
          </Txt>
          {quest.hint && !finished && (
            <Pressable onPress={() => setShowHint((s) => !s)}>
              <Txt size={15} color={colors.inkSoft} style={{ marginTop: 6, textDecorationLine: 'underline' }}>
                {showHint ? quest.hint : 'Need a hint?'}
              </Txt>
            </Pressable>
          )}
          {finished ? (
            <Txt weight="bold" size={17} style={{ marginTop: 10 }}>
              Found it! ⭐
            </Txt>
          ) : (
            <StoryButton
              small
              label="I found it!"
              color={colors.sky}
              onPress={() => finish(true)}
              style={styles.action}
            />
          )}
        </View>
      );
    case 'challenge':
      return (
        <View>
          <Txt weight="medium" size={20}>
            {quest.prompt}
          </Txt>
          {finished ? (
            <Txt weight="bold" size={17} style={{ marginTop: 10 }}>
              Challenge complete! ⭐
            </Txt>
          ) : (
            <StoryButton
              small
              label="We did it!"
              color={colors.berry}
              textColor={colors.white}
              onPress={() => finish(true)}
              style={styles.action}
            />
          )}
        </View>
      );
    case 'photo':
      return <PhotoBody quest={quest} finished={finished} finish={finish} {...photoProps} />;
    case 'wyr':
      return (
        <View>
          <Txt weight="medium" size={20}>
            Would you rather...
          </Txt>
          <View style={styles.choices}>
            {[quest.a, quest.b].map((opt, i) => (
              <Pressable
                key={opt}
                accessibilityRole="button"
                disabled={!!finished}
                onPress={() => {
                  tap();
                  setPicked(i);
                  finish(true, opt);
                }}
                style={[styles.choice, { backgroundColor: picked === i ? colors.mint : colors.white }]}>
                <Txt weight="medium" size={17} color={picked === i ? colors.white : colors.ink}>
                  {i === 0 ? '🅰️ ' : '🅱️ '}
                  {opt}
                </Txt>
              </Pressable>
            ))}
          </View>
          {finished && (
            <Txt size={16} style={{ marginTop: 10 }}>
              No wrong answers here! Now everyone in line explains their pick. ⭐
            </Txt>
          )}
        </View>
      );
  }
}

/** Shared multiple-choice body for Trivia, Fact or Fiction and Emoji Riddles. */
function Choices({
  prompt,
  choices,
  answer,
  finished,
  finish,
  explain,
  source,
  row,
}: {
  prompt: ReactNode;
  choices: string[];
  answer: number;
  finished: Done;
  finish: Finish;
  explain: string;
  source?: string;
  row?: boolean;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const revealed = picked !== null || !!finished;
  const gotIt = picked === null ? !!finished?.star : picked === answer;

  return (
    <View>
      {prompt}
      <View style={[styles.choices, row && { flexDirection: 'row' }]}>
        {choices.map((choice, i) => {
          const isAnswer = i === answer;
          const isPicked = i === picked;
          let bg: string = colors.white;
          if (revealed && isAnswer) bg = colors.mint;
          else if (isPicked) bg = colors.wrong;
          return (
            <Pressable
              key={choice}
              accessibilityRole="button"
              disabled={revealed}
              onPress={() => {
                tap();
                setPicked(i);
                finish(isAnswer);
              }}
              style={({ pressed }) => [
                styles.choice,
                row && { flex: 1, alignItems: 'center' },
                { backgroundColor: bg, opacity: pressed ? 0.8 : 1 },
              ]}>
              <Txt weight="medium" size={17} color={revealed && (isAnswer || isPicked) ? colors.white : colors.ink}>
                {choice}
              </Txt>
            </Pressable>
          );
        })}
      </View>
      {revealed && (
        <View style={{ marginTop: 10 }}>
          <Txt weight="bold" size={17}>
            {gotIt ? 'You got it! ⭐' : 'So close!'}
          </Txt>
          <Txt size={16}>{explain}</Txt>
          {source && <SourceLink url={source} />}
        </View>
      )}
    </View>
  );
}

function shuffled<T>(items: T[], seed: string): T[] {
  // Deterministic shuffle per quest so the order doesn't jump around on re-render.
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) >>> 0;
    const j = h % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  // Never start already solved.
  if (out.every((v, i) => v === items[i])) out.push(out.shift()!);
  return out;
}

function OrderBody({ quest, finished, finish }: { quest: OrderQuest; finished: Done; finish: Finish }) {
  const pool = useMemo(() => shuffled(quest.items, quest.id), [quest]);
  const [chosen, setChosen] = useState<string[]>([]);
  const complete = chosen.length === quest.items.length;
  const correct = complete && chosen.every((v, i) => v === quest.items[i]);
  const showAnswer = !!finished && !complete;

  const pick = (item: string) => {
    tap();
    const next = [...chosen, item];
    setChosen(next);
    if (next.length === quest.items.length) finish(next.every((v, i) => v === quest.items[i]));
  };

  return (
    <View>
      <Txt weight="medium" size={20}>
        {quest.prompt}
      </Txt>
      <Txt size={14} color={colors.inkSoft}>
        Tap them in order, first to last.
      </Txt>
      <View style={styles.choices}>
        {(complete ? chosen : showAnswer ? quest.items : pool).map((item) => {
          const pos = showAnswer ? quest.items.indexOf(item) : chosen.indexOf(item);
          const used = pos >= 0;
          const right = complete ? quest.items[pos] === item : null;
          return (
            <Pressable
              key={item}
              accessibilityRole="button"
              disabled={used || complete || !!finished}
              onPress={() => pick(item)}
              style={[
                styles.choice,
                styles.orderRow,
                {
                  backgroundColor:
                    right === true || showAnswer
                      ? colors.mint
                      : right === false
                        ? colors.wrong
                        : used
                          ? colors.paperEdge
                          : colors.white,
                },
              ]}>
              <View style={styles.orderNum}>
                <Txt weight="bold" size={15}>
                  {used ? pos + 1 : '·'}
                </Txt>
              </View>
              <Txt
                weight="medium"
                size={17}
                style={{ flex: 1 }}
                color={right !== null || showAnswer ? colors.white : colors.ink}>
                {item}
              </Txt>
            </Pressable>
          );
        })}
      </View>
      {chosen.length > 0 && !complete && (
        <Pressable onPress={() => setChosen([])}>
          <Txt size={15} color={colors.inkSoft} style={{ marginTop: 8, textDecorationLine: 'underline' }}>
            Start over
          </Txt>
        </Pressable>
      )}
      {(complete || showAnswer) && (
        <View style={{ marginTop: 10 }}>
          <Txt weight="bold" size={17}>
            {correct || (showAnswer && finished?.star) ? 'Perfect order! ⭐' : 'Nice try! Here’s the right order.'}
          </Txt>
          {complete && !correct && <Txt size={16}>{quest.items.map((it, i) => `${i + 1}. ${it}`).join('   ')}</Txt>}
          <Txt size={16}>{quest.explain}</Txt>
          <SourceLink url={quest.source} />
        </View>
      )}
    </View>
  );
}

function GuessBody({ quest, finished, finish }: { quest: GuessQuest; finished: Done; finish: Finish }) {
  // Years read better without a thousands separator.
  const fmt = (n: number) => (quest.unit ? n.toLocaleString() : String(n));
  const start = Math.round((quest.min + quest.max) / 2 / quest.step) * quest.step;
  const [value, setValue] = useState(start);
  const [locked, setLocked] = useState<number | null>(null);
  const revealed = locked !== null || !!finished;
  const close = locked !== null ? Math.abs(locked - quest.answer) <= quest.tolerance : !!finished?.star;

  const nudge = (by: number) => {
    tap();
    setValue((v) => Math.min(quest.max, Math.max(quest.min, v + by)));
  };
  const big = quest.step * 10;

  return (
    <View>
      <Txt weight="medium" size={20}>
        {quest.question}
      </Txt>
      {!revealed ? (
        <>
          <View style={styles.guessRow}>
            <StepBtn label={`−${big}`} onPress={() => nudge(-big)} />
            <StepBtn label="−" onPress={() => nudge(-quest.step)} />
            <View style={styles.guessValue}>
              <Txt weight="bold" size={34} style={{ fontVariant: ['tabular-nums'] }}>
                {fmt(value)}
              </Txt>
              <Txt size={14} color={colors.inkSoft}>
                {quest.unit}
              </Txt>
            </View>
            <StepBtn label="+" onPress={() => nudge(quest.step)} />
            <StepBtn label={`+${big}`} onPress={() => nudge(big)} />
          </View>
          <StoryButton
            small
            label="Lock in my guess"
            color={colors.sky}
            onPress={() => {
              setLocked(value);
              finish(Math.abs(value - quest.answer) <= quest.tolerance);
            }}
            style={styles.action}
          />
        </>
      ) : (
        <View style={{ marginTop: 10 }}>
          {locked !== null && (
            <Txt size={16}>
              You guessed {fmt(locked)} {quest.unit}. The answer is {fmt(quest.answer)} {quest.unit}.
            </Txt>
          )}
          <Txt weight="bold" size={17}>
            {close ? 'Super close! ⭐' : 'Good guess! Not quite.'}
          </Txt>
          <Txt size={16}>{quest.explain}</Txt>
          <SourceLink url={quest.source} />
        </View>
      )}
    </View>
  );
}

function StepBtn({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [styles.stepBtn, { opacity: pressed ? 0.7 : 1 }]}>
      <Txt weight="bold" size={label.length > 2 ? 13 : 22}>
        {label}
      </Txt>
    </Pressable>
  );
}

function PhotoBody({
  quest,
  finished,
  finish,
  photo,
  onPhoto,
  shareCaption,
}: { quest: PhotoQuest; finished: Done; finish: Finish } & PhotoProps) {
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');

  const snap = async (from: 'camera' | 'library') => {
    tap();
    setBusy(true);
    try {
      const uri = from === 'camera' ? await takePhoto() : await pickPhoto();
      if (uri) {
        onPhoto?.(uri);
        if (!finished) finish(true);
      }
    } catch {
      setMsg('The camera didn’t open. You can pick a photo instead.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <View>
      <Txt weight="medium" size={20}>
        {quest.prompt}
      </Txt>
      {quest.tip && (
        <Txt size={15} color={colors.inkSoft} style={{ marginTop: 4 }}>
          📍 {quest.tip}
        </Txt>
      )}
      {photo ? (
        <View style={styles.polaroid}>
          <Image source={{ uri: photo }} style={styles.photo} contentFit="cover" accessibilityLabel="Your photo" />
          <View style={styles.photoActions}>
            <StoryButton
              small
              label="📤 Share"
              color={colors.berry}
              textColor={colors.white}
              onPress={async () => setMsg(await sharePhoto(photo, shareCaption ?? '#dislizney'))}
            />
            <StoryButton small label="🔄 Retake" color={colors.white} onPress={() => snap('camera')} />
          </View>
        </View>
      ) : (
        <View style={styles.photoActions}>
          <StoryButton
            small
            label={busy ? 'Opening…' : '📸 Take the photo'}
            color={colors.sky}
            disabled={busy}
            onPress={() => snap('camera')}
          />
          <StoryButton small label="🖼️ Pick one" color={colors.white} disabled={busy} onPress={() => snap('library')} />
        </View>
      )}
      {!photo && !finished && (
        <Pressable accessibilityRole="button" onPress={() => finish(true)}>
          <Txt size={14} color={colors.inkSoft} style={{ marginTop: 10, textDecorationLine: 'underline' }}>
            We took it with our own camera
          </Txt>
        </Pressable>
      )}
      {!!msg && (
        <Txt weight="medium" size={14} style={{ marginTop: 8 }} accessibilityLiveRegion="polite">
          {msg}
        </Txt>
      )}
      {quest.source && <SourceLink url={quest.source} />}
    </View>
  );
}

const styles = StyleSheet.create({
  polaroid: {
    marginTop: 12,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: 6,
    padding: 8,
    paddingBottom: 12,
    gap: 10,
    transform: [{ rotate: '-1.5deg' }],
  },
  photo: { width: '100%', aspectRatio: 4 / 3, borderRadius: 4, backgroundColor: colors.paperEdge },
  photoActions: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12, justifyContent: 'center' },
  card: { overflow: 'visible' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  step: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choices: { gap: 8, marginTop: 12 },
  choice: {
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: 14,
    paddingVertical: 11,
    paddingHorizontal: 14,
  },
  orderRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  orderNum: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.ink,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  guessRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 6, marginTop: 14 },
  guessValue: { flex: 1, alignItems: 'center', minWidth: 80 },
  stepBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: colors.ink,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  action: { alignSelf: 'flex-start', marginTop: 12 },
});
