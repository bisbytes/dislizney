import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import type { Quest } from '@/data/types';
import { useProgress } from '@/lib/progress';
import { colors } from '@/theme';
import { StarBurst } from './star-burst';
import { Card, StoryButton, tap, Txt } from './ui';

const KIND: Record<Quest['type'], { label: string; emoji: string; color: string }> = {
  trivia: { label: 'Trivia', emoji: '❓', color: '#FFF3C4' },
  spy: { label: 'I Spy', emoji: '🔍', color: '#DFF4FF' },
  challenge: { label: 'Group Challenge', emoji: '🎉', color: '#FFE3EE' },
  wyr: { label: 'Would You Rather', emoji: '🤔', color: '#E6F8EC' },
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

export function QuestCard({ quest, step, locked, accent }: { quest: Quest; step: number; locked: boolean; accent: string }) {
  const { done, complete } = useProgress();
  const [burst, setBurst] = useState(0);
  const finished = done[quest.id];
  const kind = KIND[quest.type];

  const finish = (star: boolean) => {
    complete(quest.id, star);
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
        <Txt weight="bold" size={14} color={colors.inkSoft} style={{ letterSpacing: 1 }}>
          {kind.emoji} {kind.label.toUpperCase()}
        </Txt>
      </View>

      {locked ? (
        <Txt size={16} color={colors.inkSoft}>
          🔒 Finish the quest above to unlock this one.
        </Txt>
      ) : (
        <QuestBody quest={quest} finished={finished} finish={finish} />
      )}
      <StarBurst trigger={burst} />
    </Card>
  );
}

function QuestBody({ quest, finished, finish }: { quest: Quest; finished?: { star: boolean }; finish: (star: boolean) => void }) {
  const [picked, setPicked] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);

  switch (quest.type) {
    case 'trivia': {
      const revealed = picked !== null || !!finished;
      return (
        <View>
          <Txt weight="medium" size={20}>
            {quest.question}
          </Txt>
          <View style={styles.choices}>
            {quest.choices.map((choice, i) => {
              const isAnswer = i === quest.answer;
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
                  style={({ pressed }) => [styles.choice, { backgroundColor: bg, opacity: pressed ? 0.8 : 1 }]}>
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
                {picked === null ? (finished?.star ? 'You got it! ⭐' : 'Answered') : picked === quest.answer ? 'You got it! ⭐' : 'So close!'}
              </Txt>
              <Txt size={16}>{quest.explain}</Txt>
              <SourceLink url={quest.source} />
            </View>
          )}
        </View>
      );
    }
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
            <StoryButton small label="I found it!" color={colors.sky} onPress={() => finish(true)} style={styles.action} />
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
            <StoryButton small label="We did it!" color={colors.berry} textColor={colors.white} onPress={() => finish(true)} style={styles.action} />
          )}
        </View>
      );
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
                  finish(true);
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

const styles = StyleSheet.create({
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
  action: { alignSelf: 'flex-start', marginTop: 12 },
});
