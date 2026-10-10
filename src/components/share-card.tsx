import { Image } from 'expo-image';
import type { ComponentProps, Ref } from 'react';
import { StyleSheet, View } from 'react-native';

import { LandScene } from '@/components/land-scene';
import { Txt as BaseTxt } from '@/components/ui';
import { getAttraction } from '@/data/parks';
import { type Keepsake } from '@/lib/journey';
import { summaryChips } from '@/lib/play-summary';
import { lightColors as colors } from '@/theme';

/** Share pictures are always light, so their writing stays dark even when the phone is in dark mode. */
const Txt = (props: ComponentProps<typeof BaseTxt>) => <BaseTxt color={colors.ink} {...props} />;

/** Width of the card on screen. It's captured at 1080 × 1350, the portrait size social apps like best. */
export const SHARE_CARD_WIDTH = 320;
export const SHARE_IMAGE = { width: 1080, height: 1350 };

const HEADLINES: Record<string, string> = {
  '🤩': 'Pure magic!',
  '😄': 'So much fun!',
  '😱': 'I survived!',
  '😴': 'Checked it off!',
};

/** A post-ready picture of one ride: big, bright and about the rider, not the app. */
export function ShareCard({ k, ref }: { k: Keepsake; ref?: Ref<View> }) {
  const r = getAttraction(k.attractionId);
  if (!r) return null;
  const c = r.land.colors;
  const photo = k.photos?.[0];
  const team = k.team && k.team.length > 1 ? k.team : undefined;
  const date = new Date(k.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' });
  const headline = (k.rating && HEADLINES[k.rating]) || (team ? 'We rode it!' : 'I rode it!');

  return (
    <View ref={ref} collapsable={false} style={[styles.card, { backgroundColor: c.ground }]}>
      <View style={styles.scene} pointerEvents="none">
        <LandScene landId={r.land.id} opacity={0.25} />
      </View>
      <Txt weight="bold" size={28} color={colors.lemon} style={styles.center}>
        {headline}
      </Txt>

      {photo ? (
        <View style={styles.polaroid}>
          <Image source={{ uri: photo }} style={styles.photo} contentFit="cover" />
          <Txt weight="bold" size={15} style={styles.center} numberOfLines={1}>
            {r.attraction.emoji} {r.attraction.name}
          </Txt>
        </View>
      ) : (
        <View style={styles.hero}>
          <Txt size={92} style={{ lineHeight: 110 }}>
            {r.attraction.emoji}
          </Txt>
          <Txt weight="bold" size={26} color={colors.white} style={styles.center}>
            {r.attraction.name}
          </Txt>
        </View>
      )}

      <View style={styles.chips}>
        {summaryChips(k).map((c) => (
          <Chip key={c} text={c} />
        ))}
        {k.rating && <Chip text={k.rating} />}
      </View>
      {team && (
        <Txt weight="bold" size={16} color={colors.white} style={styles.center}>
          {team[0].score > team[1].score
            ? `👑 ${team[0].emoji} ${team[0].name} won our line trivia!`
            : '🤝 Our line trivia ended in a tie!'}
        </Txt>
      )}
      <View style={{ flex: 1 }} />
      <Txt weight="medium" size={13} color={colors.paper} style={styles.center}>
        {r.park.name} · {date}
      </Txt>
      <Txt size={11} color={colors.paper} style={[styles.center, { opacity: 0.8 }]}>
        Once Upon a Line · by Bis Bytes
      </Txt>
    </View>
  );
}

function Chip({ text }: { text: string }) {
  return (
    <View style={styles.chip}>
      <Txt weight="bold" size={15}>
        {text}
      </Txt>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: SHARE_CARD_WIDTH,
    height: (SHARE_CARD_WIDTH * SHARE_IMAGE.height) / SHARE_IMAGE.width,
    borderRadius: 20,
    padding: 16,
    gap: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  scene: { position: 'absolute', left: 0, right: 0, bottom: 0, height: 140 },
  center: { textAlign: 'center' },
  hero: { alignItems: 'center', gap: 2, marginTop: 6 },
  polaroid: {
    width: '62%',
    backgroundColor: colors.white,
    padding: 8,
    paddingBottom: 10,
    gap: 6,
    borderRadius: 6,
    transform: [{ rotate: '-2deg' }],
  },
  photo: { width: '100%', aspectRatio: 1, borderRadius: 3 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 6 },
  chip: { backgroundColor: colors.lemon, borderRadius: 999, paddingVertical: 4, paddingHorizontal: 12 },
});
