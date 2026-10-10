import * as Clipboard from 'expo-clipboard';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState, type Ref } from 'react';
import { Modal, Platform, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { captureRef } from 'react-native-view-shot';

import { goBack } from '@/lib/nav';
import { BisFooter } from '@/components/bis';
import { LandScene } from '@/components/land-scene';
import { StarBurst } from '@/components/star-burst';
import { StoryButton, tap, Txt } from '@/components/ui';
import { getAttraction } from '@/data/parks';
import { ShareCard, SHARE_IMAGE } from '@/components/share-card';
import { saveToPhotos } from '@/lib/backup';
import { isSlow, track } from '@/lib/log';
import { shareImage } from '@/lib/share';
import { drawShareImage } from '@/lib/share-canvas';
import { boardNamesFor, canShareToBoard, shareToBoard } from '@/lib/board';
import { hashtag, keepsakeCaption, useJourney, type Keepsake } from '@/lib/journey';
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
  const [sharing, setSharing] = useState(false);
  // Right after boarding: a calm "phones away" page first, keepsake after the ride.
  const [riding, setRiding] = useState(!!fresh);

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
  const tags = caption.split('\n\n').at(-1)!.split(' ');

  const copy = (msg = 'Caption and hashtags copied! 📋') => {
    // Called straight from the tap, before any await, so Safari allows it.
    Clipboard.setStringAsync(caption).catch(() => {});
    setToast(msg);
  };

  const save = async () => {
    tap();
    try {
      const pictures = [...(k.photos ?? [])];
      if (Platform.OS !== 'web') pictures.unshift(await captureRef(card, { format: 'png', quality: 1 }));
      if (!pictures.length) {
        setToast('Take a screenshot of your keepsake card to keep it in your photos 📸');
        return;
      }
      setToast(await saveToPhotos(pictures));
    } catch {
      track('save_photos_failed');
      setToast('Couldn’t save the pictures. Please try again.');
    }
  };

  const share = () => {
    tap();
    setSharing(true);
  };

  const saveNote = () => updateKeepsake(k.id, { note: note.trim() || undefined });

  if (riding) {
    const c = ref.land.colors;
    return (
      <SafeAreaView style={[styles.riding, { backgroundColor: c.ground }]}>
        <View style={StyleSheet.absoluteFill} pointerEvents="none">
          <LandScene landId={ref.land.id} opacity={0.15} />
        </View>
        <Txt size={84} style={{ lineHeight: 100 }}>
          📵
        </Txt>
        <Txt weight="bold" size={30} color={colors.white} style={{ textAlign: 'center' }}>
          Phones away, it’s ride time!
        </Txt>
        <Txt size={18} color={colors.onGround} style={{ textAlign: 'center', maxWidth: 360 }}>
          Tuck your phone in a pocket or bag, hold on, and keep your hands and feet inside. Enjoy every second of{' '}
          {ref.attraction.name}! Your keepsake is saved and will be right here when you get off.
        </Txt>
        <StoryButton
          label="🎉 We’re off the ride! Show my keepsake"
          onPress={() => {
            setRiding(false);
            setParty(Date.now());
          }}
          style={{ marginTop: 12 }}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: colors.paper }}>
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.page}>
          <View style={styles.topBar}>
            <Pressable
              accessibilityRole="button"
              hitSlop={12}
              onPress={() =>
                fresh ? router.replace({ pathname: '/park/[parkId]', params: { parkId: ref.park.id } }) : goBack('/journey')
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

          <KeepsakeCard ref={card} k={k} note={note.trim()} />
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
                  style={[styles.rating, { backgroundColor: on ? colors.lemon : colors.surface }]}>
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

          <StoryButton label="📤 Share my ride" color={colors.berry} textColor={colors.white} onPress={share} />
          <SharePanel k={{ ...k, note: note.trim() || undefined }} open={sharing} onClose={() => setSharing(false)} />
          <StoryButton
            small
            label={Platform.OS === 'web' ? '📥 Save my photos' : '📥 Save card and photos to my phone'}
            color={colors.surface}
            onPress={save}
            style={{ alignSelf: 'center' }}
          />
          <BoardShare k={k} onShared={() => updateKeepsake(k.id, { boardShared: true })} />
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
                <Txt size={14} weight="medium" color={colors.link}>
                  {t}
                </Txt>
              </View>
            ))}
          </View>
          <StoryButton
            small
            label="📋 Copy caption + hashtags"
            color={colors.surface}
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
          <BisFooter />
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
        <Txt weight="medium" size={14} color={colors.onGround}>
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
          <Stat big={`⭐ ${k.stars}`} small="stars" />
          <Stat big={`${k.quests}`} small="quests" />
          {!!k.played?.spotted && <Stat big={`👀 ${k.played.spotted}`} small="spotted" />}
          {k.rating && <Stat big={k.rating} small="rating" />}
        </View>
        {!!k.team?.length && (
          <View style={styles.team} accessibilityLabel="Team scoreboard">
            <Txt weight="bold" size={12} color={colors.inkSoft} style={{ letterSpacing: 1, textAlign: 'center' }}>
              🏆 TEAM SCOREBOARD
            </Txt>
            {k.team.map((p, i) => (
              <View key={`${p.name}-${i}`} style={styles.teamRow}>
                <Txt weight={i === 0 ? 'bold' : 'medium'} size={16}>
                  {i === 0 && p.score > 0 ? '👑' : `${i + 1}.`} {p.emoji} {p.name}
                </Txt>
                <Txt weight="bold" size={16}>
                  {p.score}
                </Txt>
              </View>
            ))}
          </View>
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
          {hashtag(r.attraction.name)} #OnceUponALine
        </Txt>
      </View>
    </View>
  );
}

/** Shows the post picture and caption, then opens the phone's share sheet to pick an app. */
function SharePanel({ k, open, onClose }: { k: Keepsake; open: boolean; onClose: () => void }) {
  const card = useRef<View>(null);
  const [text, setText] = useState(() => keepsakeCaption(k));
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (open) {
      setText(keepsakeCaption(k));
      setMsg('');
    }
    // Refresh the caption each time the panel opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const ready = useRef<Promise<string> | null>(null);

  /** Makes the picture, giving up (and trying a smaller one) rather than hanging on a phone. */
  const make = () => {
    const attempt = (scale: number, ms: number) =>
      Promise.race([
        captureRef(card, {
          format: 'png',
          quality: 1,
          width: Math.round(SHARE_IMAGE.width * scale),
          height: Math.round(SHARE_IMAGE.height * scale),
          result: Platform.OS === 'web' ? 'data-uri' : 'tmpfile',
        }),
        new Promise<string>((_, no) => setTimeout(() => no(new Error('slow')), ms)),
      ]);
    if (Platform.OS === 'web') return drawShareImage(k).catch(() => drawShareImage(k, 540));
    return attempt(1, 12_000).catch(() => attempt(0.5, 12_000));
  };

  // On the web, start the picture as soon as the panel opens so the tap can share right away.
  useEffect(() => {
    ready.current = null;
    if (!open || Platform.OS !== 'web') return;
    const t = setTimeout(() => {
      const p = make();
      p.catch(() => {});
      ready.current = p;
    }, 500);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const send = async () => {
    tap();
    setBusy(true);
    setMsg('');
    try {
      const uri = await (ready.current ?? make());
      setMsg(await shareImage(uri, text));
      track('share_picture_ok');
    } catch (e) {
      track(isSlow(e) ? 'share_picture_slow' : 'share_picture_failed');
      ready.current = null;
      Clipboard.setStringAsync(text).catch(() => {});
      setMsg('Couldn’t make the picture, but your caption is copied 📋 Tap again to retry.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <Modal visible={open} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.sheetBackdrop}>
        <ScrollView style={styles.sheet} contentContainerStyle={{ gap: 12, alignItems: 'center', padding: 18 }}>
          <Txt weight="bold" size={20}>
            Share your ride
          </Txt>
          <ShareCard k={k} ref={card} />
          <TextInput
            value={text}
            onChangeText={setText}
            multiline
            accessibilityLabel="Caption"
            style={[styles.note, { width: '100%', minHeight: 110 }]}
          />
          <Txt size={13} color={colors.inkSoft} style={{ textAlign: 'center' }}>
            Pick Instagram, TikTok, Facebook, Messages or any app you like. Make the caption your own, and we’ll copy it
            so you can paste it in.
          </Txt>
          <StoryButton
            label={busy ? 'Making your picture…' : '📤 Share picture'}
            disabled={busy}
            color={colors.berry}
            textColor={colors.white}
            onPress={send}
            style={{ alignSelf: 'stretch' }}
          />
          {!!msg && (
            <Txt weight="medium" size={14} style={{ textAlign: 'center' }} accessibilityLiveRegion="polite">
              {msg}
            </Txt>
          )}
          <Pressable accessibilityRole="button" onPress={onClose} hitSlop={12}>
            <Txt size={15} style={{ textDecorationLine: 'underline' }}>
              Done
            </Txt>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
}

/** Opt-in: puts this ride's points on today's public board under made-up names. */
function BoardShare({ k, onShared }: { k: Keepsake; onShared: () => void }) {
  const [names, setNames] = useState<{ name: string; emoji: string; nickname?: string; score: number }[]>();
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  const r = getAttraction(k.attractionId)!;

  if (k.boardShared) {
    return (
      <Pressable
        accessibilityRole="button"
        onPress={() => router.push({ pathname: '/scoreboard/[parkId]', params: { parkId: r.park.id } })}
        style={{ alignSelf: 'center' }}>
        <Txt weight="medium" size={14} style={{ textDecorationLine: 'underline' }}>
          🏆 On today’s public board. See the scores →
        </Txt>
      </Pressable>
    );
  }
  if (!canShareToBoard(k)) return null;

  const send = async () => {
    setBusy(true);
    try {
      await shareToBoard(k);
      onShared();
      setMsg('');
    } catch {
      setMsg('We couldn’t reach the board. Check your connection and try again.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <View style={styles.board}>
      {!names ? (
        <StoryButton
          small
          label="🏆 Share to today’s public board"
          color={colors.lemon}
          onPress={async () => setNames(await boardNamesFor(k))}
          style={{ alignSelf: 'center' }}
        />
      ) : (
        <>
          <Txt weight="bold" size={16} style={{ textAlign: 'center' }}>
            🏆 Today’s public board
          </Txt>
          <Txt size={13} color={colors.inkSoft} style={{ textAlign: 'center' }}>
            Everyone at the park can see the board, so you’ll show up with a made-up name. Only the name, emoji and
            points are sent. It all erases tonight.
          </Txt>
          {names.map((n) => (
            <Txt key={n.name} weight="medium" size={15} style={{ textAlign: 'center' }}>
              {n.nickname ? `${n.nickname} → ` : 'You → '}
              {n.emoji} {n.name} · {n.score} pts
            </Txt>
          ))}
          <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'center' }}>
            <StoryButton small label={busy ? 'Sharing…' : 'Share it'} disabled={busy} onPress={send} />
            <StoryButton small label="Not now" color={colors.surface} onPress={() => setNames(undefined)} />
          </View>
        </>
      )}
      {!!msg && (
        <Txt size={14} style={{ textAlign: 'center' }} accessibilityLiveRegion="polite">
          {msg}
        </Txt>
      )}
    </View>
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
    backgroundColor: colors.surface,
    textAlignVertical: 'top',
  },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, justifyContent: 'center' },
  tag: {
    borderWidth: 2,
    borderColor: colors.berry,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: colors.surface,
  },
  card: { borderWidth: 4, borderColor: colors.ink, borderRadius: 26, overflow: 'hidden' },
  cardTop: { alignItems: 'center', paddingTop: 18, paddingBottom: 14, paddingHorizontal: 16, overflow: 'hidden' },
  cardBody: { padding: 16, gap: 12 },
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
  board: {
    gap: 8,
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: colors.ink,
    padding: 12,
  },
  team: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.ink,
    padding: 12,
    gap: 4,
  },
  teamRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  fact: { backgroundColor: colors.lemon, borderRadius: 16, borderWidth: 2, borderColor: colors.ink, padding: 12 },
  sheetBackdrop: { flex: 1, backgroundColor: 'rgba(43,27,63,0.5)', justifyContent: 'flex-end' },
  sheet: {
    maxHeight: '92%',
    width: '100%',
    maxWidth: MAX_WIDTH,
    alignSelf: 'center',
    backgroundColor: colors.paper,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
  },
  riding: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 14, padding: 24, overflow: 'hidden' },
  missing: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24 },
});
