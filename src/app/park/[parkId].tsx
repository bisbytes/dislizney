import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RadarToggle } from '@/components/cards';
import { Chapter } from '@/components/chapter';
import { LandBar } from '@/components/land-bar';
import { StoryButton, Txt } from '@/components/ui';
import { getPark } from '@/data/parks';
import { useJourney } from '@/lib/journey';
import { attractionProgress, useProgress } from '@/lib/progress';
import { useRadar } from '@/lib/radar';
import { fetchPostedWaits, findWait, type PostedWait } from '@/lib/waits';
import { colors, MAX_WIDTH, pageShadow } from '@/theme';

export default function ParkStorybook() {
  const { parkId } = useLocalSearchParams<{ parkId: string }>();
  const park = getPark(parkId);
  const { done } = useProgress();
  const { ping } = useRadar();
  const scroller = useRef<ScrollView>(null);
  const chaptersY = useRef(0);
  const chapterY = useRef<number[]>([]);
  const barHeight = useRef(64);
  const [active, setActive] = useState(0);
  const { keepsakes, session } = useJourney();
  const [waits, setWaits] = useState<Map<string, PostedWait>>(new Map());

  useEffect(() => {
    if (park?.queueTimesId) fetchPostedWaits(park.queueTimesId).then(setWaits);
  }, [park?.queueTimesId]);

  if (!park || park.comingSoon) {
    return (
      <SafeAreaView style={styles.missing}>
        <Txt weight="bold" size={22}>
          This storybook is still being written ✍️
        </Txt>
        <StoryButton label="Back to the shelf" onPress={() => router.replace('/')} />
      </SafeAreaView>
    );
  }

  const all = park.lands.flatMap((l) => l.attractions);
  const totals = all.reduce(
    (acc, a) => {
      const p = attractionProgress(a, done);
      return { stars: acc.stars + p.stars, quests: acc.quests + p.total, finished: acc.finished + p.finished };
    },
    { stars: 0, quests: 0, finished: 0 },
  );

  const visited = new Set(keepsakes.map((k) => k.attractionId));
  const inLine = session && all.find((a) => a.id === session.attractionId);

  const topOf = (i: number) => chaptersY.current + (chapterY.current[i] ?? 0) - barHeight.current;

  const jumpTo = (i: number) => {
    setActive(i);
    scroller.current?.scrollTo({ y: Math.max(0, topOf(i) + 2), animated: true });
  };

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = e.nativeEvent.contentOffset.y + 40;
    let current = 0;
    park.lands.forEach((_, i) => {
      if (y >= topOf(i)) current = i;
    });
    if (current !== active) setActive(current);
  };

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: colors.paper }}>
      <ScrollView
        ref={scroller}
        stickyHeaderIndices={[1]}
        onScroll={onScroll}
        scrollEventThrottle={64}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.page}>
          <View style={styles.topBar}>
            <Pressable accessibilityRole="button" accessibilityLabel="Back" hitSlop={12} onPress={() => router.back()}>
              <Txt weight="bold" size={18}>
                ← Shelf
              </Txt>
            </Pressable>
            <Pressable accessibilityRole="button" hitSlop={12} onPress={() => router.push('/journey')}>
              <Txt weight="bold" size={16}>
                📖 My Journey · ⭐ {totals.stars}
              </Txt>
            </Pressable>
          </View>

          <View style={styles.title}>
            <Txt size={64}>{park.emoji}</Txt>
            <Txt weight="bold" size={36} style={{ textAlign: 'center' }}>
              {park.name}
            </Txt>
            <Txt size={18} color={colors.inkSoft} style={{ textAlign: 'center', fontStyle: 'italic' }}>
              {park.tagline}
            </Txt>
            <View style={styles.progressTrack}>
              <View
                style={[styles.progressFill, { width: `${(totals.finished / Math.max(1, totals.quests)) * 100}%` }]}
              />
            </View>
            <Txt size={14} color={colors.inkSoft}>
              {totals.finished} of {totals.quests} quests complete
            </Txt>
            <Txt size={16} style={{ textAlign: 'center', marginTop: 8 }}>
              Scroll through the story, or jump to a land with the bar below. Then tap the ride you’re in line for and
              we’ll write a story as long as your wait.
            </Txt>
            {inLine && (
              <Pressable
                accessibilityRole="button"
                onPress={() => router.push({ pathname: '/line/[id]', params: { id: inLine.id } })}
                style={[styles.resume, pageShadow]}>
                <Txt weight="bold" size={16} style={{ textAlign: 'center' }}>
                  {inLine.emoji} You’re in line for {inLine.name}. Tap to keep reading →
                </Txt>
              </Pressable>
            )}
            <View style={{ marginTop: 12 }}>
              <RadarToggle />
            </View>
          </View>
        </View>

        <View style={{ width: '100%' }} onLayout={(e) => (barHeight.current = e.nativeEvent.layout.height)}>
          <LandBar lands={park.lands} active={active} onPick={jumpTo} />
        </View>

        <View style={styles.page} onLayout={(e) => (chaptersY.current = e.nativeEvent.layout.y)}>
          {park.lands.map((land, i) => (
            <View key={land.id} onLayout={(e) => (chapterY.current[i] = e.nativeEvent.layout.y)}>
              <Chapter
                land={land}
                number={i + 1}
                highlightId={ping?.attraction.id}
                next={park.lands[i + 1]}
                onNext={() => jumpTo(i + 1)}
                waitFor={(name) => findWait(waits, name)}
                visited={visited}
              />
            </View>
          ))}

          <View style={styles.end}>
            <Txt weight="bold" size={30}>
              The End
            </Txt>
            <Txt size={16} color={colors.inkSoft} style={{ textAlign: 'center' }}>
              ...for now. New chapters and new parks are on the way. ✨
            </Txt>
            {waits.size > 0 && (
              <Txt size={12} color={colors.inkSoft} style={{ textAlign: 'center', marginTop: 12 }}>
                Posted wait times powered by Queue-Times.com
              </Txt>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { width: '100%', maxWidth: MAX_WIDTH, alignSelf: 'center' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  title: { alignItems: 'center', paddingHorizontal: 20, paddingBottom: 24, gap: 4 },
  progressTrack: {
    width: '80%',
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.ink,
    backgroundColor: colors.white,
    overflow: 'hidden',
    marginTop: 12,
  },
  progressFill: { height: '100%', backgroundColor: colors.gold },
  resume: {
    marginTop: 14,
    padding: 12,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: colors.ink,
    backgroundColor: colors.lemon,
  },
  end: { alignItems: 'center', padding: 40, gap: 6 },
  missing: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24 },
});
