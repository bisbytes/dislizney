import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import type { Land } from '@/data/types';
import { attractionProgress, useProgress } from '@/lib/progress';
import { colors, pageShadow } from '@/theme';
import { LandScene } from './land-scene';
import { Stars, tap, Txt } from './ui';

const STEP = 170;
const NODE = 92;

/** One land, drawn as a storybook chapter with a winding path of stops. */
export function Chapter({
  land,
  number,
  highlightId,
  next,
  onNext,
}: {
  land: Land;
  number: number;
  highlightId?: string;
  next?: Land;
  onNext?: () => void;
}) {
  const [width, setWidth] = useState(0);
  const { done } = useProgress();
  const c = land.colors;
  const landDone = land.attractions.every((a) => {
    const p = attractionProgress(a, done);
    return p.finished === p.total;
  });

  const points = land.attractions.map((_, i) => ({
    x: width * (i % 2 === 0 ? 0.3 : 0.7),
    y: i * STEP + NODE / 2 + 10,
  }));
  const d = points
    .map((p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`;
      const prev = points[i - 1];
      return `C ${prev.x} ${prev.y + STEP / 2}, ${p.x} ${p.y - STEP / 2}, ${p.x} ${p.y}`;
    })
    .join(' ');

  return (
    <View style={[styles.chapter, { backgroundColor: c.sky }]}>
      <View style={[styles.banner, { backgroundColor: c.ground }]}>
        <View style={StyleSheet.absoluteFill} pointerEvents="none">
          <LandScene landId={land.id} />
        </View>
        <Txt weight="medium" size={14} color={colors.paper} style={styles.kicker}>
          CHAPTER {number}
        </Txt>
        <Txt weight="bold" size={30} color={colors.white} style={{ textAlign: 'center' }}>
          {land.emoji} {land.name}
        </Txt>
        {landDone && (
          <View style={[styles.ribbon, { backgroundColor: colors.gold }]}>
            <Txt weight="bold" size={13}>
              🏅 CHAPTER COMPLETE
            </Txt>
          </View>
        )}
      </View>
      <Svg width="100%" height={22} viewBox="0 0 100 10" preserveAspectRatio="none" style={{ marginTop: -1 }}>
        <Path d="M0 0 H100 V2 Q 87.5 10 75 2 Q 62.5 10 50 2 Q 37.5 10 25 2 Q 12.5 10 0 2 Z" fill={c.ground} />
      </Svg>

      <Txt size={18} color={c.ink} style={styles.intro}>
        {land.intro}
      </Txt>

      <View
        style={{ height: land.attractions.length * STEP, marginBottom: 12 }}
        onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
        {width > 0 && (
          <>
            <Svg width={width} height={land.attractions.length * STEP} style={StyleSheet.absoluteFill}>
              <Path d={d} stroke={c.ground} strokeWidth={6} strokeDasharray="2 14" strokeLinecap="round" fill="none" />
            </Svg>
            {land.attractions.map((a, i) => {
              const p = points[i];
              const prog = attractionProgress(a, done);
              const complete = prog.finished === prog.total;
              const highlighted = a.id === highlightId;
              return (
                <Pressable
                  key={a.id}
                  accessibilityRole="button"
                  accessibilityLabel={`${a.name}. ${prog.finished} of ${prog.total} quests done.`}
                  onPress={() => {
                    tap();
                    router.push({ pathname: '/attraction/[id]', params: { id: a.id } });
                  }}
                  style={({ pressed }) => [
                    styles.stop,
                    { left: p.x - 80, top: p.y - NODE / 2, transform: [{ scale: pressed ? 0.95 : 1 }] },
                  ]}>
                  <View
                    style={[
                      styles.node,
                      pageShadow,
                      {
                        borderColor: highlighted ? c.accent : c.ink,
                        backgroundColor: complete ? colors.gold : colors.white,
                        borderWidth: highlighted ? 6 : 4,
                      },
                    ]}>
                    <Txt size={40} style={{ lineHeight: 50 }}>
                      {a.emoji}
                    </Txt>
                    {complete && <Txt style={styles.crown}>👑</Txt>}
                  </View>
                  <View style={[styles.label, { backgroundColor: colors.paper, borderColor: c.ink }]}>
                    <Txt weight="bold" size={14} color={c.ink} numberOfLines={2} style={{ textAlign: 'center' }}>
                      {a.name}
                    </Txt>
                    <Stars n={prog.finished} of={prog.total} size={12} />
                  </View>
                </Pressable>
              );
            })}
          </>
        )}
      </View>
      {next && onNext && (
        <Pressable
          accessibilityRole="button"
          onPress={() => {
            tap();
            onNext();
          }}
          style={({ pressed }) => [styles.next, { borderColor: c.ink, opacity: pressed ? 0.8 : 1 }]}>
          <Txt weight="bold" size={15} color={c.ink}>
            Next chapter: {next.emoji} {next.name} ↓
          </Txt>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  chapter: { paddingBottom: 24 },
  next: {
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.paper,
  },
  banner: {
    paddingTop: 56,
    paddingBottom: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    overflow: 'hidden',
    gap: 2,
  },
  ribbon: {
    marginTop: 6,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: colors.ink,
  },
  kicker: { letterSpacing: 3, opacity: 0.85 },
  intro: { marginHorizontal: 24, marginTop: 10, marginBottom: 18, textAlign: 'center', fontStyle: 'italic' },
  stop: { position: 'absolute', width: 160, alignItems: 'center' },
  node: {
    width: NODE,
    height: NODE,
    borderRadius: NODE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  crown: { position: 'absolute', top: -18, fontSize: 24 },
  label: {
    marginTop: 8,
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignItems: 'center',
    maxWidth: 160,
  },
});
