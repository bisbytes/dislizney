import { router, useLocalSearchParams } from 'expo-router';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { FactCard } from '@/components/cards';
import { LandScene } from '@/components/land-scene';
import { QuestCard } from '@/components/quest-card';
import { StoryButton, Txt } from '@/components/ui';
import { getAttraction } from '@/data/parks';
import { useJourney } from '@/lib/journey';
import { buildQueue, countForMinutes, MINUTES } from '@/lib/plan';
import { useProgress } from '@/lib/progress';
import { useSound } from '@/lib/sound';
import { colors, MAX_WIDTH, pageShadow } from '@/theme';

export default function LineStory() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const ref = getAttraction(id);
  const journey = useJourney();
  const { session, updateSession, finishLine, cancelLine } = journey;
  const progress = useProgress();
  const { play } = useSound();
  const insets = useSafeAreaInsets();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(t);
  }, []);

  const active = session && session.attractionId === id ? session : null;

  // Quests seen before this line started, so the story prefers fresh ones and
  // stays in the same order when the app is reopened mid-line.
  const queue = useMemo(() => {
    if (!ref || !active || !progress.ready) return [];
    const seen = new Set(Object.keys(progress.done).filter((q) => !active.done[q]));
    return buildQueue(ref, active.id, seen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.attraction.id, active?.id, progress.ready]);

  if (!journey.ready) return null;

  if (!ref || !active) {
    return (
      <SafeAreaView style={styles.missing}>
        <Txt weight="bold" size={22} style={{ textAlign: 'center' }}>
          You’re not in this line right now.
        </Txt>
        <StoryButton
          label="Pick a ride"
          onPress={() =>
            ref
              ? router.replace({ pathname: '/attraction/[id]', params: { id: ref.attraction.id } })
              : router.replace('/')
          }
        />
      </SafeAreaView>
    );
  }

  const { land, attraction: a, park } = ref;
  const c = land.colors;
  const planned = countForMinutes(queue, active.waitMinutes);
  const total = Math.min(queue.length, countForMinutes(queue, active.waitMinutes + (active.bonusMinutes ?? 0)));
  const list = queue.slice(0, total);
  const current = list.findIndex((pq) => !active.done[pq.quest.id]);
  // Show what's done, the quest you're on, and a peek at the next two.
  const visible = current === -1 ? list : list.slice(0, current + 3);
  const hidden = list.slice(visible.length);
  const hiddenMinutes = Math.round(hidden.reduce((n, pq) => n + MINUTES[pq.quest.type], 0));
  const elapsed = Math.floor((now - active.startedAt) / 60000);
  const left = active.waitMinutes - elapsed;
  const pct = Math.min(1, elapsed / active.waitMinutes);
  const stars = Object.values(active.done).filter((d) => d.star).length;
  const outOfQuests = current === -1 && total >= queue.length;

  const board = () => {
    const k = finishLine();
    play('fanfare');
    if (k) router.replace({ pathname: '/keepsake/[id]', params: { id: k.id, fresh: '1' } });
    else router.replace({ pathname: '/park/[parkId]', params: { parkId: park.id } });
  };

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: c.ground }}>
      <View style={[styles.topBar, { backgroundColor: c.ground }]}>
        <View style={styles.topInner}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Back to rides"
            hitSlop={12}
            onPress={() => router.replace({ pathname: '/park/[parkId]', params: { parkId: park.id } })}>
            <Txt weight="bold" size={16} color={colors.white}>
              ← Rides
            </Txt>
          </Pressable>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Txt weight="bold" size={15} color={colors.white} numberOfLines={1}>
              {a.emoji} {a.name}
            </Txt>
          </View>
          <Txt weight="bold" size={15} color={colors.white}>
            ⭐ {stars}
          </Txt>
        </View>
        <View style={styles.topInner}>
          <View style={styles.timerTrack}>
            <View style={[styles.timerFill, { width: `${pct * 100}%`, backgroundColor: c.accent }]} />
            <Txt weight="bold" size={13} style={styles.timerText} accessibilityLiveRegion="polite">
              {left > 0 ? `⏳ About ${left} min to go` : '🎢 Any minute now!'}
            </Txt>
          </View>
        </View>
      </View>

      <ScrollView
        style={{ backgroundColor: c.sky }}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 120 + insets.bottom }}>
        <View style={[styles.page, { paddingHorizontal: 16, paddingTop: 16, gap: 14 }]}>
          <View style={[styles.narration, pageShadow, { borderColor: c.ink }]}>
            <View style={StyleSheet.absoluteFill} pointerEvents="none">
              <LandScene landId={land.id} color={c.ground} opacity={0.12} />
            </View>
            <Txt weight="medium" size={19} style={{ textAlign: 'center' }}>
              Once upon a time, a brave group joined the line for {a.name}. Their adventure begins now! Scroll down and
              play your way to the front.
            </Txt>
          </View>

          {visible.map((pq, i) => {
            const fact = a.facts.length ? a.facts[Math.floor(i / 6) % a.facts.length] : undefined;
            return (
              <Fragment key={pq.quest.id}>
                {i === planned && (
                  <Txt weight="bold" size={18} color={c.ink} style={{ textAlign: 'center', marginTop: 8 }}>
                    ✨ Still waiting? The fun keeps going!
                  </Txt>
                )}
                <QuestCard
                  quest={pq.quest}
                  step={i + 1}
                  locked={current !== -1 && i > current}
                  accent={c.accent}
                  from={pq.from}
                  finished={active.done[pq.quest.id]}
                  onFinish={(star, pick) =>
                    updateSession((s) => {
                      const done = { ...s.done, [pq.quest.id]: { star } };
                      // Reached the end of the list but still in line: keep it going.
                      const extend = i === list.length - 1 ? 10 : 0;
                      return {
                        ...s,
                        done,
                        picks: pick ? [...s.picks, pick] : s.picks,
                        bonusMinutes: (s.bonusMinutes ?? 0) + extend,
                      };
                    })
                  }
                />
                {i % 6 === 5 && fact && active.done[pq.quest.id] && <FactCard fact={fact} />}
              </Fragment>
            );
          })}

          {hidden.length > 0 && (
            <Txt size={15} color={c.ink} style={{ textAlign: 'center' }}>
              🔒 {hidden.length} more quests ahead, about {hiddenMinutes} minutes of fun
            </Txt>
          )}

          {outOfQuests && (
            <View style={[styles.end, pageShadow]}>
              <Txt weight="bold" size={20} style={{ textAlign: 'center' }}>
                You played every quest we have! You’re a true line legend. 🏆
              </Txt>
            </View>
          )}

          <Pressable
            accessibilityRole="button"
            onPress={() => {
              cancelLine();
              router.replace({ pathname: '/park/[parkId]', params: { parkId: park.id } });
            }}
            style={{ alignSelf: 'center', marginTop: 18 }}>
            <Txt size={14} color={c.ink} style={{ textDecorationLine: 'underline' }}>
              Left the line? End without saving
            </Txt>
          </Pressable>
        </View>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: 12 + insets.bottom }]} pointerEvents="box-none">
        <StoryButton
          label="🎢 We’re boarding! Save my keepsake"
          color={colors.berry}
          textColor={colors.white}
          onPress={board}
          style={{ width: '100%', maxWidth: MAX_WIDTH - 32 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: { paddingHorizontal: 16, paddingBottom: 10, gap: 8, alignItems: 'center' },
  topInner: { width: '100%', maxWidth: MAX_WIDTH, flexDirection: 'row', alignItems: 'center', gap: 10 },
  timerTrack: {
    flex: 1,
    height: 28,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: colors.ink,
    backgroundColor: colors.paper,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  timerFill: { position: 'absolute', left: 0, top: 0, bottom: 0 },
  timerText: { textAlign: 'center' },
  page: { width: '100%', maxWidth: MAX_WIDTH },
  narration: {
    backgroundColor: colors.paper,
    borderWidth: 3,
    borderRadius: 22,
    padding: 18,
    paddingTop: 22,
    alignItems: 'center',
    gap: 6,
    overflow: 'hidden',
  },
  end: {
    backgroundColor: colors.lemon,
    borderWidth: 3,
    borderColor: colors.ink,
    borderRadius: 22,
    padding: 18,
    gap: 12,
    alignItems: 'center',
  },
  footer: { position: 'absolute', left: 0, right: 0, bottom: 0, alignItems: 'center', paddingHorizontal: 16 },
  missing: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24 },
});
