import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BisFooter } from '@/components/bis';
import { RadarToggle } from '@/components/cards';
import { LandBar } from '@/components/land-bar';
import { LandScene } from '@/components/land-scene';
import { QueueTimesLink } from '@/components/queue-times-credit';
import { StoryButton, tap, Txt } from '@/components/ui';
import { WaitBadge } from '@/components/wait-badge';
import { getPark, isClosedForRefurb } from '@/data/parks';
import type { Attraction, Land } from '@/data/types';
import { useJourney } from '@/lib/journey';
import { useRadar } from '@/lib/radar';
import { fetchPostedWaits, findWait, type PostedWait } from '@/lib/waits';
import { colors, fonts, MAX_WIDTH, pageShadow } from '@/theme';

export default function PickYourRide() {
  const { parkId } = useLocalSearchParams<{ parkId: string }>();
  const park = getPark(parkId);
  const { keepsakes, session } = useJourney();
  const { ping } = useRadar();
  const [query, setQuery] = useState('');
  const [waits, setWaits] = useState<Map<string, PostedWait>>(new Map());
  const scroller = useRef<ScrollView>(null);
  const sectionsY = useRef(0);
  const sectionY = useRef<number[]>([]);
  const barHeight = useRef(64);
  const [active, setActive] = useState(0);

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

  const visited = new Set(keepsakes.map((k) => k.attractionId));
  // While the park is open, rides the live feed says aren't running are hidden.
  // Before opening and after close everything shows, so families can plan ahead.
  const parkOpen = [...waits.values()].some((w) => w.open);
  const isRunning = (a: Attraction) => !isClosedForRefurb(a) && (!parkOpen || findWait(waits, a.name)?.open !== false);
  const running: Land[] = park.lands
    .map((l) => ({ ...l, attractions: l.attractions.filter(isRunning) }))
    .filter((l) => l.attractions.length > 0);
  const hidden = park.lands.flatMap((l) => l.attractions).filter((a) => !isRunning(a));
  const q = query.trim().toLowerCase();
  const lands: Land[] = running.map((l) => ({
    ...l,
    attractions: q ? l.attractions.filter((a) => a.name.toLowerCase().includes(q)) : l.attractions,
  }));

  const topOf = (i: number) => sectionsY.current + (sectionY.current[i] ?? 0) - barHeight.current;
  const jumpTo = (i: number) => {
    setActive(i);
    scroller.current?.scrollTo({ y: Math.max(0, topOf(i) + 2), animated: true });
  };
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = e.nativeEvent.contentOffset.y + 40;
    let current = 0;
    lands.forEach((_, i) => {
      if (y >= topOf(i)) current = i;
    });
    if (current !== active) setActive(current);
  };

  const inLine = session && park.lands.flatMap((l) => l.attractions).find((a) => a.id === session.attractionId);

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: colors.paper }}>
      <ScrollView
        ref={scroller}
        stickyHeaderIndices={[1]}
        onScroll={onScroll}
        scrollEventThrottle={64}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}>
        <View style={styles.page}>
          <View style={styles.topBar}>
            <Pressable accessibilityRole="button" accessibilityLabel="Back" hitSlop={12} onPress={() => router.back()}>
              <Txt weight="bold" size={18}>
                ← Shelf
              </Txt>
            </Pressable>
            <View style={{ flexDirection: 'row', gap: 14 }}>
              <Pressable
                accessibilityRole="button"
                hitSlop={12}
                onPress={() => router.push({ pathname: '/scoreboard/[parkId]', params: { parkId: park.id } })}>
                <Txt weight="bold" size={16}>
                  🏆 Today
                </Txt>
              </Pressable>
              <Pressable accessibilityRole="button" hitSlop={12} onPress={() => router.push('/journey')}>
                <Txt weight="bold" size={16}>
                  📖 My Journey
                </Txt>
              </Pressable>
            </View>
          </View>

          <View style={styles.title}>
            <Txt size={56}>{park.emoji}</Txt>
            <Txt weight="bold" size={34} style={{ textAlign: 'center' }}>
              {park.name}
            </Txt>
            <Txt size={18} color={colors.inkSoft} style={{ textAlign: 'center' }}>
              Which line are you in? Pick your ride and we’ll write a story that lasts as long as your wait.
            </Txt>
          </View>

          {inLine && (
            <Pressable
              accessibilityRole="button"
              onPress={() => router.push({ pathname: '/line/[id]', params: { id: inLine.id } })}
              style={[styles.resume, pageShadow]}>
              <Txt size={30}>{inLine.emoji}</Txt>
              <View style={{ flex: 1 }}>
                <Txt weight="bold" size={16}>
                  You’re in line for {inLine.name}
                </Txt>
                <Txt size={14} color={colors.inkSoft}>
                  Tap to keep reading your line story →
                </Txt>
              </View>
            </Pressable>
          )}

          <TextInput
            id="ride-search"
            value={query}
            onChangeText={setQuery}
            placeholder="🔍  Search for a ride"
            placeholderTextColor={colors.inkSoft}
            style={styles.search}
            accessibilityLabel="Search for a ride"
            returnKeyType="search"
          />
          <View style={{ alignItems: 'center', marginBottom: 14 }}>
            <RadarToggle />
          </View>
        </View>

        <View style={{ width: '100%' }} onLayout={(e) => (barHeight.current = e.nativeEvent.layout.height)}>
          <LandBar
            lands={running}
            active={active}
            onPick={jumpTo}
            subtitle={(land) => {
              const n = land.attractions.filter((a) => visited.has(a.id)).length;
              return n === land.attractions.length ? '🏅 All visited!' : `${n}/${land.attractions.length} visited`;
            }}
          />
        </View>

        <View style={styles.page} onLayout={(e) => (sectionsY.current = e.nativeEvent.layout.y)}>
          {lands.map((land, i) => (
            <View key={land.id} onLayout={(e) => (sectionY.current[i] = e.nativeEvent.layout.y)}>
              <View style={[styles.landHeader, { backgroundColor: land.colors.ground }]}>
                <View style={StyleSheet.absoluteFill} pointerEvents="none">
                  <LandScene landId={land.id} />
                </View>
                <Txt weight="bold" size={24} color={colors.white}>
                  {land.emoji} {land.name}
                </Txt>
              </View>
              <View style={[styles.grid, { backgroundColor: land.colors.sky }]}>
                {land.attractions.length === 0 ? (
                  <Txt size={15} color={land.colors.ink}>
                    No rides match “{query}” here.
                  </Txt>
                ) : (
                  land.attractions.map((a) => (
                    <RideCard
                      key={a.id}
                      attraction={a}
                      land={land}
                      wait={findWait(waits, a.name)}
                      visits={keepsakes.filter((k) => k.attractionId === a.id).length}
                      nearby={ping?.attraction.id === a.id}
                    />
                  ))
                )}
              </View>
            </View>
          ))}
          {hidden.length > 0 && (
            <Txt size={13} color={colors.inkSoft} style={{ textAlign: 'center', marginTop: 12 }}>
              🚧 Not running right now, so hidden for today: {hidden.map((a) => a.name).join(', ')}.
            </Txt>
          )}
          {waits.size > 0 && (
            <Txt size={12} color={colors.inkSoft} style={{ textAlign: 'center', marginTop: 12 }}>
              Posted wait times · <QueueTimesLink />
            </Txt>
          )}
          <View style={{ paddingHorizontal: 16 }}>
            <BisFooter />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function RideCard({
  attraction: a,
  land,
  wait,
  visits,
  nearby,
}: {
  attraction: Attraction;
  land: Land;
  wait?: PostedWait;
  visits: number;
  nearby: boolean;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${a.name}${wait?.open ? `, posted wait ${wait.minutes} minutes` : ''}`}
      onPress={() => {
        tap();
        router.push({ pathname: '/attraction/[id]', params: { id: a.id } });
      }}
      style={({ pressed }) => [
        styles.card,
        pageShadow,
        { borderColor: nearby ? land.colors.accent : colors.ink, transform: [{ scale: pressed ? 0.97 : 1 }] },
      ]}>
      {wait && <WaitBadge wait={wait} />}
      <View style={[styles.cardEmoji, { backgroundColor: land.colors.sky, borderColor: land.colors.ground }]}>
        <Txt size={32} style={{ lineHeight: 40 }}>
          {a.emoji}
        </Txt>
      </View>
      <Txt weight="bold" size={15} color={land.colors.ink} numberOfLines={2} style={{ textAlign: 'center' }}>
        {a.name}
      </Txt>
      <View style={styles.pills}>
        {visits > 0 && (
          <View style={[styles.pill, { backgroundColor: colors.gold }]}>
            <Txt size={12} weight="medium">
              📖 {visits === 1 ? 'Visited' : `${visits} visits`}
            </Txt>
          </View>
        )}
        {nearby && (
          <View style={[styles.pill, { backgroundColor: colors.mint }]}>
            <Txt size={12} weight="medium" color={colors.white}>
              📍 Nearby
            </Txt>
          </View>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  page: { width: '100%', maxWidth: MAX_WIDTH, alignSelf: 'center' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  title: { alignItems: 'center', paddingHorizontal: 20, paddingBottom: 16, gap: 4 },
  resume: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginHorizontal: 16,
    marginBottom: 14,
    padding: 12,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: colors.ink,
    backgroundColor: colors.lemon,
  },
  search: {
    marginHorizontal: 16,
    marginBottom: 14,
    borderWidth: 3,
    borderColor: colors.ink,
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 12,
    fontFamily: fonts.medium,
    fontSize: 17,
    color: colors.ink,
    backgroundColor: colors.white,
  },
  landHeader: { paddingTop: 44, paddingBottom: 12, alignItems: 'center', overflow: 'hidden', marginTop: 18 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, padding: 14, justifyContent: 'space-between' },
  card: {
    width: '47.5%',
    backgroundColor: colors.white,
    borderWidth: 3,
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
    gap: 8,
  },
  cardEmoji: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pills: { flexDirection: 'row', flexWrap: 'wrap', gap: 4, justifyContent: 'center' },
  pill: { borderRadius: 999, paddingHorizontal: 8, paddingVertical: 2, borderWidth: 1.5, borderColor: colors.ink },
  missing: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24 },
});
