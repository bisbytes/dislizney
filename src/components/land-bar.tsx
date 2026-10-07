import { useEffect, useRef } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import type { Land } from '@/data/types';
import { attractionProgress, useProgress } from '@/lib/progress';
import { colors, MAX_WIDTH } from '@/theme';
import { tap, Txt } from './ui';

/** Sticky row of land chips on the park map. Tap one to jump to that chapter. */
export function LandBar({
  lands,
  active,
  onPick,
  subtitle,
}: {
  lands: Land[];
  active: number;
  onPick: (index: number) => void;
  /** Small line under each land name. Defaults to quest progress. */
  subtitle?: (land: Land) => string;
}) {
  const { done } = useProgress();
  const scroller = useRef<ScrollView>(null);
  const chipX = useRef<number[]>([]);

  // Keep the active chip in view as you scroll through the story.
  useEffect(() => {
    const x = chipX.current[active];
    if (x !== undefined) scroller.current?.scrollTo({ x: Math.max(0, x - 24), animated: true });
  }, [active]);

  return (
    <View style={styles.wrap}>
      <View style={styles.inner}>
        <ScrollView
          ref={scroller}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.row}
          style={{ width: '100%', flexGrow: 0 }}>
          {lands.map((land, i) => {
            const rides = land.attractions.length;
            const finished = land.attractions.filter((a) => {
              const p = attractionProgress(a, done);
              return p.finished === p.total;
            }).length;
            const isActive = i === active;
            const sub = subtitle ? subtitle(land) : finished === rides ? '🏅 All done!' : `${finished}/${rides} rides`;
            return (
              <Pressable
                key={land.id}
                accessibilityRole="tab"
                accessibilityState={{ selected: isActive }}
                accessibilityLabel={`${land.name}. ${sub}.`}
                onLayout={(e) => (chipX.current[i] = e.nativeEvent.layout.x)}
                onPress={() => {
                  tap();
                  onPick(i);
                }}
                style={({ pressed }) => [
                  styles.chip,
                  {
                    backgroundColor: isActive ? land.colors.ground : colors.white,
                    borderColor: land.colors.ground,
                    transform: [{ scale: pressed ? 0.95 : 1 }],
                  },
                ]}>
                <Txt size={18}>{land.emoji}</Txt>
                <View>
                  <Txt weight="bold" size={14} color={isActive ? colors.white : land.colors.ink} numberOfLines={1}>
                    {shortName(land.name)}
                  </Txt>
                  <Txt size={11} color={isActive ? colors.paper : colors.inkSoft}>
                    {sub}
                  </Txt>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

function shortName(name: string) {
  return name.replace(', U.S.A.', '');
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    backgroundColor: colors.paper,
    borderBottomWidth: 3,
    borderBottomColor: colors.ink,
  },
  inner: { width: '100%', maxWidth: MAX_WIDTH, alignSelf: 'center', overflow: 'hidden' },
  row: { gap: 8, paddingHorizontal: 12, paddingVertical: 10 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 3,
    borderRadius: 999,
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 14,
  },
});
