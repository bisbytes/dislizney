import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { goBack } from '@/lib/nav';
import { BisFooter } from '@/components/bis';
import { FactCard, WikiCard } from '@/components/cards';
import { CrewPicker } from '@/components/crew-picker';
import { LandScene } from '@/components/land-scene';
import { QueueTimesLink } from '@/components/queue-times-credit';
import { StoryButton, tap, Txt } from '@/components/ui';
import { WaitBadge } from '@/components/wait-badge';
import { getAttraction, isClosedForRefurb } from '@/data/parks';
import { useJourney } from '@/lib/journey';
import { fetchPostedWaits, findWait, type PostedWait } from '@/lib/waits';
import { colors, MAX_WIDTH, pageShadow } from '@/theme';

const WAIT_CHOICES = [15, 30, 45, 60, 75, 90, 120];

export default function RideIntro() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const ref = getAttraction(id);
  const { session, keepsakes, crew = [], startLine, cancelLine, saveCrew } = useJourney();
  const [playing, setPlaying] = useState<string[]>(() => crew.map((p) => p.id));
  const [posted, setPosted] = useState<PostedWait>();
  const [wait, setWait] = useState(30);
  const [touched, setTouched] = useState(false);
  const [changing, setChanging] = useState(false);

  useEffect(() => {
    const qt = ref?.park.queueTimesId;
    if (!qt) return;
    fetchPostedWaits(qt).then((waits) => {
      const w = findWait(waits, ref.attraction.name);
      setPosted(w);
      if (w?.open && w.minutes > 0 && !touched) setWait(w.minutes);
    });
    // Only on first load; later taps on the chips win.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.attraction.id]);

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
  const here = session?.attractionId === a.id;
  const elsewhere = session && !here ? getAttraction(session.attractionId)?.attraction : undefined;
  const past = keepsakes.filter((k) => k.attractionId === a.id);

  const start = () => {
    if (session && !here) cancelLine();
    const players = crew.filter((p) => playing.includes(p.id));
    startLine(a.id, wait, players.length > 1 ? players : undefined);
    router.replace({ pathname: '/line/[id]', params: { id: a.id } });
  };

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: c.ground }}>
      <ScrollView
        style={{ backgroundColor: c.sky }}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 48 }}>
        <View style={[styles.hero, { backgroundColor: c.ground }]}>
          <View style={StyleSheet.absoluteFill} pointerEvents="none">
            <LandScene landId={land.id} opacity={0.16} />
          </View>
          <View style={styles.page}>
            <Pressable accessibilityRole="button" accessibilityLabel="Back" hitSlop={12} onPress={() => goBack({ pathname: '/park/[parkId]', params: { parkId: ref.park.id } })}>
              <Txt weight="bold" size={18} color={colors.white}>
                ← Rides
              </Txt>
            </Pressable>
            <View style={{ alignItems: 'center', gap: 4, marginTop: 8 }}>
              <Txt size={72} style={{ lineHeight: 88 }}>
                {a.emoji}
              </Txt>
              <Txt weight="medium" size={14} color={colors.onGround} style={{ letterSpacing: 2 }}>
                {land.name.toUpperCase()}
              </Txt>
              <Txt weight="bold" size={30} color={colors.white} style={{ textAlign: 'center' }}>
                {a.name}
              </Txt>
              <Txt size={16} color={colors.onGround} style={{ textAlign: 'center' }}>
                {a.blurb}
              </Txt>
              {posted && (
                <View style={{ marginTop: 10 }}>
                  <WaitBadge wait={posted} large />
                </View>
              )}
            </View>
          </View>
        </View>
        <Svg width="100%" height={22} viewBox="0 0 100 10" preserveAspectRatio="none" style={{ marginTop: -1 }}>
          <Path d="M0 0 H100 V2 Q 87.5 10 75 2 Q 62.5 10 50 2 Q 37.5 10 25 2 Q 12.5 10 0 2 Z" fill={c.ground} />
        </Svg>

        <View style={[styles.page, { paddingHorizontal: 16, gap: 14 }]}>
          {isClosedForRefurb(a) && a.closure && (
            <View style={[styles.box, pageShadow, { backgroundColor: colors.lemon }]}>
              <Txt weight="bold" size={17} style={{ textAlign: 'center' }}>
                🚧 {a.closure.note}
              </Txt>
            </View>
          )}
          {here ? (
            <View style={[styles.box, pageShadow, { backgroundColor: colors.lemon }]}>
              <Txt weight="bold" size={20} style={{ textAlign: 'center' }}>
                You’re already in this line!
              </Txt>
              <StoryButton
                label="📖 Keep reading my story"
                onPress={() => router.replace({ pathname: '/line/[id]', params: { id: a.id } })}
              />
            </View>
          ) : (
            <View style={[styles.box, pageShadow]}>
              <Txt weight="bold" size={20} style={{ textAlign: 'center' }}>
                Ready to play?
              </Txt>
              <Txt size={15} style={{ textAlign: 'center' }}>
                {posted?.open && posted.minutes > 0 && !touched
                  ? `📖 The posted wait is ${posted.minutes} minutes, so we’ll fill it with ${a.name} secrets, trivia and things to spot in this line.`
                  : `📖 We’ll fill about ${label(wait)} with ${a.name} secrets, trivia and things to spot in this line, and keep going if it’s slower.`}
              </Txt>
              {changing ? (
                <View style={styles.chips}>
                  {WAIT_CHOICES.map((m) => {
                    const on = m === wait;
                    return (
                      <Pressable
                        key={m}
                        accessibilityRole="radio"
                        accessibilityState={{ selected: on }}
                        accessibilityLabel={m >= 60 ? `${m / 60} hour${m > 60 ? 's' : ''}` : `${m} minutes`}
                        onPress={() => {
                          tap();
                          setTouched(true);
                          setWait(m);
                          setChanging(false);
                        }}
                        style={[styles.chip, { backgroundColor: on ? c.ground : colors.surface, borderColor: c.ground }]}>
                        <Txt weight="bold" size={16} color={on ? colors.white : c.ink}>
                          {label(m)}
                        </Txt>
                      </Pressable>
                    );
                  })}
                </View>
              ) : (
                <Pressable accessibilityRole="button" onPress={() => setChanging(true)} style={{ alignSelf: 'center' }}>
                  <Txt size={14} color={colors.inkSoft} style={{ textDecorationLine: 'underline' }}>
                    Sign says something different? Change the wait
                  </Txt>
                </Pressable>
              )}
              {elsewhere && (
                <Txt size={13} color={colors.inkSoft} style={{ textAlign: 'center' }}>
                  This ends your line story for {elsewhere.name}.
                </Txt>
              )}
              <CrewPicker
                crew={crew}
                playing={playing}
                onChange={(next, on) => {
                  saveCrew(next);
                  setPlaying(on);
                }}
              />
              <StoryButton
                label={
                  crew.filter((p) => playing.includes(p.id)).length > 1
                    ? '✨ Start our team story'
                    : '✨ Start my line story'
                }
                onPress={start}
              />
            </View>
          )}

          {a.facts[0] && <FactCard fact={a.facts[0]} />}

          {past.length > 0 && (
            <Pressable
              accessibilityRole="button"
              onPress={() => router.push({ pathname: '/keepsake/[id]', params: { id: past[0].id } })}
              style={[styles.box, pageShadow, { backgroundColor: colors.gold }]}>
              <Txt weight="bold" size={17} style={{ textAlign: 'center' }}>
                📸 You have {past.length} keepsake{past.length === 1 ? '' : 's'} from this ride
              </Txt>
              <Txt size={14} style={{ textAlign: 'center' }}>
                Tap to see your latest →
              </Txt>
            </Pressable>
          )}

          {a.wikiTitle && <WikiCard title={a.wikiTitle} />}
          <Txt size={13} color={c.ink} style={{ textAlign: 'center' }}>
            Opened {a.opened}
            {posted && (
              <>
                {' · Posted wait times · '}
                <QueueTimesLink />
              </>
            )}
          </Txt>
          <BisFooter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function label(m: number) {
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const r = m % 60;
  return r ? `${h}h ${r}m` : `${h} hr${h > 1 ? 's' : ''}`;
}

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    overflow: 'hidden',
  },
  page: { width: '100%', maxWidth: MAX_WIDTH },
  box: {
    backgroundColor: colors.surface,
    borderWidth: 3,
    borderColor: colors.ink,
    borderRadius: 22,
    padding: 18,
    gap: 12,
  },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  chip: { borderWidth: 3, borderRadius: 999, paddingVertical: 8, paddingHorizontal: 14 },
  missing: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24 },
});
