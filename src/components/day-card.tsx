import { Image } from 'expo-image';
import type { Ref } from 'react';
import { StyleSheet, View } from 'react-native';

import { Txt } from '@/components/ui';
import { getAttraction } from '@/data/parks';
import { waitedMinutes, type Keepsake } from '@/lib/journey';
import { colors } from '@/theme';
import { SHARE_CARD_WIDTH, SHARE_IMAGE } from '@/components/share-card';

/** Most rides and photos that fit on the day picture. */
export const DAY_MAX_RIDES = 5;
export const DAY_MAX_PHOTOS = 4;

/** A picture of one whole day: rides, time in line, stars and (if wanted) the guest's own photos. */
export function DayCard({ list, includePhotos, ref }: { list: Keepsake[]; includePhotos: boolean; ref?: Ref<View> }) {
  const rides = list.map((k) => ({ k, r: getAttraction(k.attractionId) })).filter((x) => x.r);
  const photos = includePhotos ? list.flatMap((k) => k.photos ?? []).slice(0, DAY_MAX_PHOTOS) : [];
  const parks = [...new Set(rides.map((x) => x.r!.park.name))].join(' and ');
  const date = new Date(list[0].date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' });
  const minutes = list.reduce((n, k) => n + waitedMinutes(k), 0);
  const stars = list.reduce((n, k) => n + k.stars, 0);

  return (
    <View ref={ref} collapsable={false} style={styles.card}>
      <Txt weight="bold" size={28} color={colors.lemon} style={styles.center}>
        What a day!
      </Txt>
      <Txt weight="medium" size={13} color={colors.paper} style={styles.center}>
        {parks || 'Walt Disney World'} · {date}
      </Txt>

      <View style={styles.row}>
        {photos.length > 0
          ? photos.map((uri, i) => (
              <Image
                key={i}
                source={{ uri }}
                style={[styles.photo, photos.length <= 3 && { width: 90, height: 90 }]}
                contentFit="cover"
              />
            ))
          : rides.slice(0, DAY_MAX_PHOTOS).map(({ r }, i) => (
              <Txt key={i} size={40} style={{ lineHeight: 50 }}>
                {r!.attraction.emoji}
              </Txt>
            ))}
      </View>

      <View style={{ gap: 3, alignSelf: 'stretch' }}>
        {rides.slice(0, DAY_MAX_RIDES).map(({ k, r }) => (
          <Txt key={k.id} weight="medium" size={14} color={colors.white} numberOfLines={1}>
            {r!.attraction.emoji} {r!.attraction.name} · {waitedMinutes(k)} min
          </Txt>
        ))}
        {rides.length > DAY_MAX_RIDES && (
          <Txt weight="medium" size={14} color={colors.paper}>
            + {rides.length - DAY_MAX_RIDES} more
          </Txt>
        )}
      </View>

      <View style={styles.row}>
        <Chip text={`🎢 ${rides.length} ride${rides.length === 1 ? '' : 's'}`} />
        <Chip text={`⏱️ ${minutes} min`} />
        {stars > 0 && <Chip text={`⭐ ${stars}`} />}
      </View>
      <View style={{ flex: 1 }} />
      <Txt size={11} color={colors.paper} style={[styles.center, { opacity: 0.8 }]}>
        Once Upon a Line · by Bis Bytes
      </Txt>
    </View>
  );
}

function Chip({ text }: { text: string }) {
  return (
    <View style={styles.chip}>
      <Txt weight="bold" size={14}>
        {text}
      </Txt>
    </View>
  );
}

export const DAY_BACKGROUND = '#4b38d6';

const styles = StyleSheet.create({
  card: {
    width: SHARE_CARD_WIDTH,
    height: (SHARE_CARD_WIDTH * SHARE_IMAGE.height) / SHARE_IMAGE.width,
    borderRadius: 20,
    padding: 16,
    gap: 10,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: DAY_BACKGROUND,
  },
  center: { textAlign: 'center' },
  row: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 6 },
  photo: { width: 66, height: 66, borderRadius: 6, borderWidth: 3, borderColor: colors.white },
  chip: { backgroundColor: colors.lemon, borderRadius: 999, paddingVertical: 4, paddingHorizontal: 12 },
});
