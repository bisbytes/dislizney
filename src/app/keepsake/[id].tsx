import * as Clipboard from 'expo-clipboard';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import * as Sharing from 'expo-sharing';
import { useEffect, useRef, useState, type Ref } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { captureRef } from 'react-native-view-shot';

import { LandScene } from '@/components/land-scene';
import { StarBurst } from '@/components/star-burst';
import { StoryButton, tap, Txt } from '@/components/ui';
import { getAttraction } from '@/data/parks';
import { hashtag, keepsakeCaption, useJourney, waitedMinutes, type Keepsake } from '@/lib/journey';
import { colors, fonts, MAX_WIDTH, pageShadow } from '@/theme';

const RATINGS = [
  { emoji: '🤩', label: 'Magical' },
  { emoji: '😄', label: 'So fun' },
  { emoji: '😱', label: 'Thrilling' },
  { emoji: '😴', label: 'Meh' },
];

export default function KeepsakePage() {
  const { id, fresh } = useLocalSearchParams<{ id: string; fresh?: string }>();
  const { keepsakes, ready, updateKeepsake, deleteKeepsake } = useJourney();
  const k = keepsakes.find((x) => x.id === id);
  const card = useRef<View>(null);
  const [note, setNote] = useState(k?.note ?? '');
  const [toast, setToast] = useState('');
  const [party, setParty] = useState(0);
  const [fixing, setFixing] = useState(false);

  useEffect(() => {
    if (fresh) setParty(Date.now());
  }, [fresh]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(''), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  if (!ready) return null;
  const ref = k && getAttraction(k.attractionId);
  if (!k || !ref) {
    return (
      <SafeAreaView style={styles.missing}>
        <Txt weight="bold" size={22}>
          We couldn’t find that keepsake.
        </Txt>
        <StoryButton label="My Journey" onPress={() => router.replace('/journey')} />
      </SafeAreaView>
    );
  }

  const caption = keepsakeCaption({ ...k, note: note.trim() || undefined });
  const tags = caption.split('\n\n')[1].split(' ');

  const copy = (msg = 'Caption and hashtags copied! 📋') => {
    // Called straight from the tap, before any await, so Safari allows it.
    Clipboard.setStringAsync(caption).catch(() => {});
    setToast(msg);
  };

  const share = async () => {
    tap();
    if (Platform.OS === 'web') {
      const nav = globalThis.navigator as Navigator | undefined;
      if (nav?.share) {
        try {
          await nav.share({ title: 'My dislizney keepsake', text: caption });
          return;
        } catch {
          // Cancelled or blocked: fall back to copying.
        }
      }
      copy('Caption copied! Paste it into your post 📋');
      return;
    }
    copy('Caption copied! Paste it into your post 📋');
    try {
      const uri = await captureRef(card, { format: 'png', quality: 1 });
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri, { mimeType: 'image/png', UTI: 'public.png', dialogTitle: 'Share your keepsake' });
      }
    } catch {
      setToast('Couldn’t make the picture, but your caption is copied 📋');
    }
  };

  const saveNote = () => updateKeepsake(k.id, { note: note.trim() || undefined });

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: colors.paper }}>
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.page}>
          <View style={styles.topBar}>
            <Pressable
              accessibilityRole="button"
              hitSlop={12}
              onPress={() =>
                fresh ? router.replace({ pathname: '/park/[parkId]', params: { parkId: ref.park.id } }) : router.back()
              }>
              <Txt weight="bold" size={18}>
                {fresh ? '← Next ride' : '← Back'}
              </Txt>
            </Pressable>
            <Pressable accessibilityRole="button" hitSlop={12} onPress={() => router.push('/journey')}>
              <Txt weight="bold" size={16}>
                📖 My Journey
              </Txt>
            </Pressable>
          </View>

          {fresh && (
            <Txt weight="bold" size={26} style={{ textAlign: 'center', marginBottom: 8 }}>
              Enjoy the ride! Here’s your keepsake ✨
            </Txt>
          )}

          {(k.actualMinutes === undefined || fixing) && (
            <WaitCheck
              k={k}
              onSave={(m) => {
                updateKeepsake(k.id, { actualMinutes: m });
                setFixing(false);
              }}
            />
          )}

          <KeepsakeCard ref={card} k={k} note={note.trim()} />
          {k.actualMinutes !== undefined && !fixing && (
            <Pressable accessibilityRole="button" onPress={() => setFixing(true)} style={{ alignSelf: 'center' }}>
              <Txt size={13} color={colors.inkSoft} style={{ textDecorationLine: 'underline' }}>
                Fix my wait time
              </Txt>
            </Pressable>
          )}
          <StarBurst trigger={party} />

          <Txt weight="bold" size={14} color={colors.inkSoft} style={styles.label}>
            HOW WAS IT?
          </Txt>
          <View style={styles.ratings}>
            {RATINGS.map((r) => {
              const on = k.rating === r.emoji;
              return (
                <Pressable
                  key={r.emoji}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: on }}
                  accessibilityLabel={r.label}
                  onPress={() => {
                    tap();
                    updateKeepsake(k.id, { rating: on ? undefined : r.emoji });
                  }}
                  style={[styles.rating, { backgroundColor: on ? colors.lemon : colors.white }]}>
                  <Txt size={30} style={{ lineHeight: 38 }}>
                    {r.emoji}
                  </Txt>
                  <Txt size={12} weight="medium">
                    {r.label}
                  </Txt>
                </Pressable>
              );
            })}
          </View>

          <TextInput
            value={note}
            onChangeText={setNote}
            onBlur={saveNote}
            onSubmitEditing={saveNote}
            placeholder="Add a memory (who was with you, what made you laugh…)"
            placeholderTextColor={colors.inkSoft}
            maxLength={120}
            multiline
            style={styles.note}
            accessibilityLabel="Add a memory"
          />

          <StoryButton label="📤 Share my keepsake" color={colors.berry} textColor={colors.white} onPress={share} />
          {toast ? (
            <Txt weight="medium" size={15} style={{ textAlign: 'center' }} accessibilityLiveRegion="polite">
              {toast}
            </Txt>
          ) : null}

          <Txt weight="bold" size={14} color={colors.inkSoft} style={styles.label}>
            YOUR HASHTAGS
          </Txt>
          <View style={styles.tags}>
            {tags.map((t) => (
              <View key={t} style={styles.tag}>
                <Txt size={14} weight="medium" color={colors.berry}>
                  {t}
                </Txt>
              </View>
            ))}
          </View>
          <StoryButton
            small
            label="📋 Copy caption + hashtags"
            color={colors.white}
            onPress={() => {
              tap();
              copy();
            }}
            style={{ alignSelf: 'center' }}
          />

          <Pressable
            accessibilityRole="button"
            onPress={() => {
              deleteKeepsake(k.id);
              router.replace('/journey');
            }}
            style={{ alignSelf: 'center', marginTop: 24 }}>
            <Txt size={13} color={colors.inkSoft} style={{ textDecorationLine: 'underline' }}>
              Delete this keepsake
            </Txt>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/** The picture that gets shared: a storybook page for one ride. */
function KeepsakeCard({ k, note, ref }: { k: Keepsake; note: string; ref: Ref<View> }) {
  const r = getAttraction(k.attractionId)!;
  const c = r.land.colors;
  const date = new Date(k.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' });
  return (
    <View ref={ref} collapsable={false} style={[styles.card, pageShadow, { backgroundColor: c.sky }]}>
      <View style={[styles.cardTop, { backgroundColor: c.ground }]}>
        <View style={StyleSheet.absoluteFill} pointerEvents="none">
          <LandScene landId={r.land.id} opacity={0.2} />
        </View>
        <Txt size={64} style={{ lineHeight: 78 }}>
          {r.attraction.emoji}
        </Txt>
        <Txt weight="bold" size={26} color={colors.white} style={{ textAlign: 'center' }}>
          {r.attraction.name}
        </Txt>
        <Txt weight="medium" size={14} color={colors.paper}>
          {r.park.name} · {date}
        </Txt>
      </View>
      {!!k.photos?.length && (
        <View style={styles.photos}>
          <Image source={{ uri: k.photos[0] }} style={styles.mainPhoto} contentFit="cover" accessibilityLabel="Photo" />
          {k.photos.length > 1 && (
            <View style={styles.thumbs}>
              {k.photos.slice(1, 4).map((uri) => (
                <Image key={uri} source={{ uri }} style={styles.thumb} contentFit="cover" />
              ))}
            </View>
          )}
        </View>
      )}
      <View style={styles.cardBody}>
        <View style={styles.statRow}>
          <Stat big={`${waitedMinutes(k)}`} small="min wait" />
          <Stat big={`⭐ ${k.stars}`} small="stars" />
          <Stat big={`${k.quests}`} small="quests" />
          {k.rating && <Stat big={k.rating} small="rating" />}
        </View>
        {k.actualMinutes !== undefined && k.actualMinutes !== k.waitMinutes && (
          <Txt size={14} color={c.ink} style={{ textAlign: 'center' }}>
            ⏱️ Posted {k.waitMinutes} min · Really {k.actualMinutes} min
            {k.actualMinutes < k.waitMinutes ? ' · Faster than posted!' : ''}
          </Txt>
        )}
        {note ? (
          <Txt weight="medium" size={18} color={c.ink} style={{ textAlign: 'center' }}>
            “{note}”
          </Txt>
        ) : null}
        {k.picks[0] && (
          <Txt size={15} color={c.ink} style={{ textAlign: 'center' }}>
            🤔 Would rather: {k.picks[0]}
          </Txt>
        )}
        {k.fact ? (
          <View style={styles.fact}>
            <Txt weight="bold" size={12} color={colors.inkSoft} style={{ letterSpacing: 1 }}>
              ✨ FACT I LEARNED IN LINE
            </Txt>
            <Txt size={15}>{k.fact}</Txt>
          </View>
        ) : null}
        <Txt weight="bold" size={13} color={c.ink} style={{ textAlign: 'center' }}>
          #dislizney {hashtag(r.attraction.name)}
        </Txt>
      </View>
    </View>
  );
}

/** Asks how long the wait really was, starting from the app's own timer. */
function WaitCheck({ k, onSave }: { k: Keepsake; onSave: (minutes: number) => void }) {
  const [m, setM] = useState(k.actualMinutes ?? k.minutesInLine);
  const nudge = (d: number) => {
    tap();
    setM((v) => Math.min(240, Math.max(1, v + d)));
  };
  return (
    <View style={[styles.check, pageShadow]}>
      <Txt weight="bold" size={19} style={{ textAlign: 'center' }}>
        ⏱️ How long was your wait, really?
      </Txt>
      <Txt size={14} color={colors.inkSoft} style={{ textAlign: 'center' }}>
        The sign said {k.waitMinutes} minutes. Our timer says {k.minutesInLine} minute{k.minutesInLine === 1 ? '' : 's'}
        . Fix it if you joined the line before opening the story.
      </Txt>
      <View style={styles.stepper}>
        <StepBtn label="−5" onPress={() => nudge(-5)} />
        <StepBtn label="−1" onPress={() => nudge(-1)} />
        <Txt weight="bold" size={30} accessibilityLiveRegion="polite" style={{ minWidth: 96, textAlign: 'center' }}>
          {m} min
        </Txt>
        <StepBtn label="+1" onPress={() => nudge(1)} />
        <StepBtn label="+5" onPress={() => nudge(5)} />
      </View>
      <StoryButton small label="✅ That’s right" onPress={() => onSave(m)} style={{ alignSelf: 'center' }} />
    </View>
  );
}

function StepBtn({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress} style={styles.stepBtn}>
      <Txt weight="bold" size={15}>
        {label}
      </Txt>
    </Pressable>
  );
}

function Stat({ big, small }: { big: string; small: string }) {
  return (
    <View style={{ alignItems: 'center', minWidth: 64 }}>
      <Txt weight="bold" size={22}>
        {big}
      </Txt>
      <Txt size={12} color={colors.inkSoft}>
        {small}
      </Txt>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: { padding: 16, paddingBottom: 48, alignItems: 'center' },
  page: { width: '100%', maxWidth: MAX_WIDTH, gap: 12 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4, marginBottom: 6 },
  label: { letterSpacing: 2, textAlign: 'center', marginTop: 10 },
  ratings: { flexDirection: 'row', justifyContent: 'center', gap: 8 },
  rating: {
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.ink,
    borderRadius: 18,
    paddingVertical: 6,
    width: 76,
  },
  note: {
    borderWidth: 3,
    borderColor: colors.ink,
    borderRadius: 18,
    padding: 14,
    minHeight: 70,
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.ink,
    backgroundColor: colors.white,
    textAlignVertical: 'top',
  },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, justifyContent: 'center' },
  tag: {
    borderWidth: 2,
    borderColor: colors.berry,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: colors.white,
  },
  card: { borderWidth: 4, borderColor: colors.ink, borderRadius: 26, overflow: 'hidden' },
  cardTop: { alignItems: 'center', paddingTop: 18, paddingBottom: 14, paddingHorizontal: 16, overflow: 'hidden' },
  cardBody: { padding: 16, gap: 12 },
  check: {
    backgroundColor: colors.lemon,
    borderWidth: 3,
    borderColor: colors.ink,
    borderRadius: 22,
    padding: 16,
    gap: 10,
  },
  stepper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
  stepBtn: {
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: colors.white,
  },
  photos: { padding: 12, paddingBottom: 0, gap: 8 },
  mainPhoto: { width: '100%', aspectRatio: 4 / 3, borderRadius: 14, borderWidth: 3, borderColor: colors.ink },
  thumbs: { flexDirection: 'row', gap: 8 },
  thumb: { flex: 1, aspectRatio: 1, borderRadius: 10, borderWidth: 2, borderColor: colors.ink, maxWidth: '32%' },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.paper,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: colors.ink,
    paddingVertical: 8,
  },
  fact: { backgroundColor: colors.lemon, borderRadius: 16, borderWidth: 2, borderColor: colors.ink, padding: 12 },
  missing: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24 },
});
