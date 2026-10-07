import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RadarToggle } from '@/components/cards';
import { Chapter } from '@/components/chapter';
import { StoryButton, Txt } from '@/components/ui';
import { getPark } from '@/data/parks';
import { attractionProgress, useProgress } from '@/lib/progress';
import { useRadar } from '@/lib/radar';
import { colors, MAX_WIDTH } from '@/theme';

export default function ParkStorybook() {
  const { parkId } = useLocalSearchParams<{ parkId: string }>();
  const park = getPark(parkId);
  const { done } = useProgress();
  const { ping } = useRadar();

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

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: colors.paper }}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <View style={styles.page}>
          <View style={styles.topBar}>
            <Pressable accessibilityRole="button" accessibilityLabel="Back" hitSlop={12} onPress={() => router.back()}>
              <Txt weight="bold" size={18}>
                ← Shelf
              </Txt>
            </Pressable>
            <Txt weight="bold" size={16}>
              ⭐ {totals.stars}
            </Txt>
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
              Scroll through the story and tap the ride you’re in line for.
            </Txt>
            <View style={{ marginTop: 12 }}>
              <RadarToggle />
            </View>
          </View>

          {park.lands.map((land, i) => (
            <Chapter key={land.id} land={land} number={i + 1} highlightId={ping?.attraction.id} />
          ))}

          <View style={styles.end}>
            <Txt weight="bold" size={30}>
              The End
            </Txt>
            <Txt size={16} color={colors.inkSoft} style={{ textAlign: 'center' }}>
              ...for now. New chapters and new parks are on the way. ✨
            </Txt>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { width: '100%', maxWidth: MAX_WIDTH },
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
  end: { alignItems: 'center', padding: 40, gap: 6 },
  missing: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24 },
});
