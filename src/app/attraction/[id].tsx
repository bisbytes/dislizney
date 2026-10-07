import { router, useLocalSearchParams } from 'expo-router';
import { Fragment } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { FactCard, WikiCard } from '@/components/cards';
import { QuestCard } from '@/components/quest-card';
import { Stars, StoryButton, Txt } from '@/components/ui';
import { getAttraction } from '@/data/parks';
import { attractionProgress, useProgress } from '@/lib/progress';
import { colors, MAX_WIDTH } from '@/theme';

export default function AttractionQuests() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const ref = getAttraction(id);
  const { done } = useProgress();

  if (!ref) {
    return (
      <SafeAreaView style={styles.missing}>
        <Txt weight="bold" size={22}>
          We couldn’t find that page.
        </Txt>
        <StoryButton label="Back to the shelf" onPress={() => router.replace('/')} />
      </SafeAreaView>
    );
  }

  const { land, attraction: a } = ref;
  const c = land.colors;
  const prog = attractionProgress(a, done);
  const firstOpen = a.quests.findIndex((q) => !done[q.id]);
  const allDone = firstOpen === -1;

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: c.ground }}>
      <ScrollView style={{ backgroundColor: c.sky }} contentContainerStyle={{ alignItems: 'center', paddingBottom: 48 }}>
        <View style={[styles.hero, { backgroundColor: c.ground }]}>
          <View style={styles.page}>
            <Pressable accessibilityRole="button" accessibilityLabel="Back to map" hitSlop={12} onPress={() => router.back()}>
              <Txt weight="bold" size={18} color={colors.white}>
                ← Map
              </Txt>
            </Pressable>
            <View style={{ alignItems: 'center', gap: 4, marginTop: 8 }}>
              <Txt size={72} style={{ lineHeight: 88 }}>
                {a.emoji}
              </Txt>
              <Txt weight="medium" size={14} color={colors.paper} style={{ letterSpacing: 2 }}>
                YOU’RE IN LINE FOR
              </Txt>
              <Txt weight="bold" size={30} color={colors.white} style={{ textAlign: 'center' }}>
                {a.name}
              </Txt>
              <Txt size={16} color={colors.paper} style={{ textAlign: 'center' }}>
                {a.blurb}
              </Txt>
              <View style={styles.starPill}>
                <Stars n={prog.finished} of={prog.total} size={18} />
              </View>
            </View>
          </View>
        </View>
        <Svg width="100%" height={22} viewBox="0 0 100 10" preserveAspectRatio="none" style={{ marginTop: -1 }}>
          <Path d="M0 0 H100 V2 Q 87.5 10 75 2 Q 62.5 10 50 2 Q 37.5 10 25 2 Q 12.5 10 0 2 Z" fill={c.ground} />
        </Svg>

        <View style={[styles.page, { gap: 0, paddingHorizontal: 16 }]}>
          <Txt weight="bold" size={14} color={c.ink} style={styles.section}>
            YOUR QUEST ROADMAP
          </Txt>
          {a.quests.map((q, i) => (
            <Fragment key={q.id}>
              {i > 0 && <View style={[styles.connector, { borderColor: c.ground }]} />}
              <QuestCard quest={q} step={i + 1} locked={!allDone && i > firstOpen} accent={c.accent} />
              {i % 2 === 1 && a.facts[(i - 1) / 2] && (
                <>
                  <View style={[styles.connector, { borderColor: c.ground }]} />
                  <FactCard fact={a.facts[(i - 1) / 2]} />
                </>
              )}
            </Fragment>
          ))}

          {allDone && (
            <>
              <View style={[styles.connector, { borderColor: c.ground }]} />
              <View style={[styles.finale, { borderColor: c.ink }]}>
                <Txt size={48}>🏆</Txt>
                <Txt weight="bold" size={24} style={{ textAlign: 'center' }}>
                  Chapter complete!
                </Txt>
                <Txt size={16} style={{ textAlign: 'center' }}>
                  You earned {prog.stars} star{prog.stars === 1 ? '' : 's'} at {a.name}. Still in line? Read the fresh
                  facts below.
                </Txt>
              </View>
            </>
          )}

          <Txt weight="bold" size={14} color={c.ink} style={styles.section}>
            MORE TO EXPLORE
          </Txt>
          <View style={{ gap: 14 }}>
            {a.wikiTitle && <WikiCard title={a.wikiTitle} />}
            <Txt size={13} color={c.ink} style={{ textAlign: 'center' }}>
              Opened {a.opened}
            </Txt>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  hero: { width: '100%', alignItems: 'center', paddingHorizontal: 16, paddingTop: 12, paddingBottom: 8 },
  page: { width: '100%', maxWidth: MAX_WIDTH },
  starPill: {
    backgroundColor: colors.paper,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: colors.ink,
    marginTop: 8,
  },
  section: { letterSpacing: 2, textAlign: 'center', marginVertical: 14 },
  connector: { alignSelf: 'center', height: 28, borderLeftWidth: 5, borderStyle: 'dotted' },
  finale: {
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.gold,
    borderWidth: 3,
    borderRadius: 22,
    padding: 20,
  },
  missing: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24 },
});
