import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BisFooter } from '@/components/bis';
import { DaySharePanel } from '@/components/day-share-panel';
import { StoryButton, tap, Txt } from '@/components/ui';
import { getAttraction } from '@/data/parks';
import { exportJourney, importJourney } from '@/lib/backup';
import { useJourney, type Keepsake } from '@/lib/journey';
import { colors, MAX_WIDTH, pageShadow } from '@/theme';

export default function Journey() {
  const { keepsakes, session, ready, importKeepsakes } = useJourney();
  const [sharing, setSharing] = useState<string | null>(null);
  const [backupMsg, setBackupMsg] = useState('');

  const backup = async () => {
    tap();
    try {
      setBackupMsg(await exportJourney(keepsakes));
    } catch {
      setBackupMsg('Something went wrong saving your keepsakes. Please try again.');
    }
  };

  const restore = async () => {
    tap();
    try {
      const list = await importJourney();
      if (!list) return;
      const added = importKeepsakes(list);
      setBackupMsg(
        added
          ? `Welcome back! ${added} keepsake${added === 1 ? '' : 's'} added back. ✨`
          : 'Those keepsakes are already here.',
      );
    } catch {
      setBackupMsg('That file doesn’t look like saved Once Upon a Line keepsakes.');
    }
  };

  if (!ready) return null;

  // Group by calendar day, newest first.
  const days = new Map<string, Keepsake[]>();
  for (const k of keepsakes) {
    const day = new Date(k.date).toDateString();
    days.set(day, [...(days.get(day) ?? []), k]);
  }

  const activities = keepsakes.reduce((n, k) => n + k.quests, 0);
  const stars = keepsakes.reduce((n, k) => n + k.stars, 0);
  const inLine = session && getAttraction(session.attractionId);

  const shareDay = (day: string) => {
    tap();
    setSharing(day);
  };

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: colors.paper }}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.page}>
          <Pressable accessibilityRole="button" hitSlop={12} onPress={() => router.back()} style={{ marginBottom: 8 }}>
            <Txt weight="bold" size={18}>
              ← Back
            </Txt>
          </Pressable>

          <Txt size={52} style={{ textAlign: 'center' }}>
            📖
          </Txt>
          <Txt weight="bold" size={32} style={{ textAlign: 'center' }}>
            My Journey
          </Txt>
          <Txt size={17} color={colors.inkSoft} style={{ textAlign: 'center' }}>
            Every ride you finish becomes a keepsake page in your own storybook.
          </Txt>

          {keepsakes.length > 0 && (
            <View style={[styles.totals, pageShadow]}>
              <Total big={`${keepsakes.length}`} small={keepsakes.length === 1 ? 'ride' : 'rides'} />
              <Total big={`${activities}`} small="activities" />
              <Total big={`⭐ ${stars}`} small="stars" />
            </View>
          )}

          {inLine && (
            <Pressable
              accessibilityRole="button"
              onPress={() => router.push({ pathname: '/line/[id]', params: { id: inLine.attraction.id } })}
              style={[styles.resume, pageShadow]}>
              <Txt weight="bold" size={16}>
                {inLine.attraction.emoji} You’re in line for {inLine.attraction.name}. Tap to keep reading →
              </Txt>
            </Pressable>
          )}

          {keepsakes.length === 0 ? (
            <View style={[styles.empty, pageShadow]}>
              <Txt size={17} style={{ textAlign: 'center' }}>
                Your journey is a blank page for now. Pick a ride, play while you wait, and tap “We’re boarding!” to
                save your first keepsake.
              </Txt>
              <StoryButton label="Pick a ride" onPress={() => router.push('/')} />
            </View>
          ) : (
            [...days].map(([day, list]) => (
              <View key={day} style={{ gap: 12, marginTop: 18 }}>
                <View style={styles.dayHeader}>
                  <Txt weight="bold" size={18}>
                    {new Date(list[0].date).toLocaleDateString(undefined, {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </Txt>
                  <StoryButton small label="📤 Share my day" onPress={() => shareDay(day)} />
                </View>
                <DaySharePanel list={list} open={sharing === day} onClose={() => setSharing(null)} />
                <CrewDay list={list} />
                <View style={styles.grid}>
                  {list.map((k, i) => (
                    <Polaroid key={k.id} k={k} tilt={i % 2 ? 2 : -2} />
                  ))}
                </View>
              </View>
            ))
          )}
          <View style={[styles.forever, pageShadow]}>
            <Txt weight="bold" size={18} style={{ textAlign: 'center' }}>
              💾 Keep your journey forever
            </Txt>
            <Txt size={14} color={colors.inkSoft} style={{ textAlign: 'center' }}>
              Your keepsakes live only on this {Platform.OS === 'web' ? 'browser' : 'phone'}. Download your keepsakes
              as a file and keep it somewhere you keep things, like iCloud Drive, Google Drive or an email to yourself,
              then add them back on any phone or browser. This app never uploads anything.
            </Txt>
            <View style={styles.foreverButtons}>
              {keepsakes.length > 0 && <StoryButton small label="💾 Download my keepsakes" onPress={backup} />}
              <StoryButton small label="📂 Add keepsakes back" color={colors.white} onPress={restore} />
            </View>
            {!!backupMsg && (
              <Txt weight="medium" size={14} style={{ textAlign: 'center' }} accessibilityLiveRegion="polite">
                {backupMsg}
              </Txt>
            )}
          </View>
          <BisFooter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Polaroid({ k, tilt }: { k: Keepsake; tilt: number }) {
  const r = getAttraction(k.attractionId);
  if (!r) return null;
  const time = new Date(k.date).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${r.attraction.name} keepsake`}
      onPress={() => {
        tap();
        router.push({ pathname: '/keepsake/[id]', params: { id: k.id } });
      }}
      style={({ pressed }) => [
        styles.polaroid,
        pageShadow,
        { transform: [{ rotate: `${tilt}deg` }, { scale: pressed ? 0.97 : 1 }] },
      ]}>
      <View style={[styles.photo, { backgroundColor: r.land.colors.ground }]}>
        {k.photos?.[0] ? (
          <Image source={{ uri: k.photos[0] }} style={StyleSheet.absoluteFill} contentFit="cover" />
        ) : (
          <Txt size={44} style={{ lineHeight: 54 }}>
            {r.attraction.emoji}
          </Txt>
        )}
        {k.rating && <Txt style={styles.rating}>{k.rating}</Txt>}
      </View>
      <Txt weight="bold" size={14} numberOfLines={2} style={{ textAlign: 'center' }}>
        {r.attraction.name}
      </Txt>
      <Txt size={12} color={colors.inkSoft}>
        {time} · ⭐ {k.stars}
      </Txt>
    </Pressable>
  );
}

/** The day's team totals across every ride the crew played together. */
function CrewDay({ list }: { list: Keepsake[] }) {
  const totals = new Map<string, { name: string; emoji: string; score: number; rides: number }>();
  for (const k of list) {
    for (const p of k.team ?? []) {
      const key = `${p.emoji}${p.name}`;
      const t = totals.get(key) ?? { name: p.name, emoji: p.emoji, score: 0, rides: 0 };
      totals.set(key, { ...t, score: t.score + p.score, rides: t.rides + 1 });
    }
  }
  if (!totals.size) return null;
  const rows = [...totals.values()].sort((a, b) => b.score - a.score);
  return (
    <View style={[styles.crewDay, pageShadow]} accessibilityLabel="Crew scorecard for the day">
      <Txt weight="bold" size={16} style={{ textAlign: 'center' }}>
        🏆 Today’s crew scorecard
      </Txt>
      {rows.map((p, i) => (
        <View key={`${p.emoji}${p.name}`} style={styles.crewRow}>
          <Txt weight={i === 0 ? 'bold' : 'medium'} size={16}>
            {i === 0 && p.score > 0 ? '👑' : `${i + 1}.`} {p.emoji} {p.name}
          </Txt>
          <Txt size={14} color={colors.inkSoft}>
            {p.rides} ride{p.rides === 1 ? '' : 's'} ·{' '}
            <Txt weight="bold" size={16}>
              {p.score}
            </Txt>
          </Txt>
        </View>
      ))}
    </View>
  );
}

function Total({ big, small }: { big: string; small: string }) {
  return (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <Txt weight="bold" size={24}>
        {big}
      </Txt>
      <Txt size={13} color={colors.inkSoft}>
        {small}
      </Txt>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: { padding: 16, paddingBottom: 48, alignItems: 'center' },
  page: { width: '100%', maxWidth: MAX_WIDTH, gap: 8 },
  totals: {
    flexDirection: 'row',
    marginTop: 12,
    backgroundColor: colors.lemon,
    borderWidth: 3,
    borderColor: colors.ink,
    borderRadius: 22,
    paddingVertical: 12,
  },
  resume: {
    marginTop: 10,
    backgroundColor: colors.white,
    borderWidth: 3,
    borderColor: colors.ink,
    borderRadius: 18,
    padding: 12,
  },
  empty: {
    marginTop: 16,
    gap: 14,
    backgroundColor: colors.white,
    borderWidth: 3,
    borderColor: colors.ink,
    borderRadius: 22,
    padding: 18,
  },
  dayHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' },
  crewDay: {
    backgroundColor: colors.lemon,
    borderWidth: 3,
    borderColor: colors.ink,
    borderRadius: 18,
    padding: 12,
    gap: 4,
  },
  crewRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  forever: {
    marginTop: 24,
    gap: 10,
    backgroundColor: colors.white,
    borderWidth: 3,
    borderColor: colors.ink,
    borderRadius: 22,
    padding: 16,
  },
  foreverButtons: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 16 },
  polaroid: {
    width: '47%',
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: 6,
    padding: 8,
    paddingBottom: 12,
    alignItems: 'center',
    gap: 4,
  },
  photo: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  rating: { position: 'absolute', right: 6, bottom: 4, fontSize: 24 },
});
