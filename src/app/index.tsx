import { Link, router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BisFooter, BisLogo } from '@/components/bis';
import { Twinkles } from '@/components/twinkles';
import { Card, StoryButton, tap, Txt } from '@/components/ui';
import { parks } from '@/data/parks';
import { useJourney } from '@/lib/journey';
import { useProgress } from '@/lib/progress';
import { useSound } from '@/lib/sound';
import { colors, MAX_WIDTH, pageShadow } from '@/theme';

export default function Cover() {
  const { totalStars } = useProgress();
  const sound = useSound();
  const { keepsakes } = useJourney();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.lemon }}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Twinkles />
        <View style={styles.inner}>
          <View style={[styles.book, pageShadow]}>
            <BisLogo />
          </View>

          <Txt size={18} color={colors.inkSoft} style={[styles.center, { marginBottom: 8 }]}>
            Waiting in line? Open a storybook, pick your ride, and discover its secrets: trivia, hidden details to spot in the queue and more, until it’s
            your turn.
          </Txt>

          {totalStars > 0 && (
            <Txt weight="medium" size={18} style={styles.center}>
              ⭐ You’ve collected {totalStars} star{totalStars === 1 ? '' : 's'}!
            </Txt>
          )}

          <StoryButton
            label={`📖 My Journey${keepsakes.length ? ` · ${keepsakes.length} keepsake${keepsakes.length === 1 ? '' : 's'}` : ''}`}
            color={colors.white}
            onPress={() => router.push('/journey')}
            style={{ marginTop: 6 }}
          />

          <Txt weight="bold" size={14} color={colors.inkSoft} style={styles.shelfLabel}>
            CHOOSE YOUR STORYBOOK
          </Txt>
          <View style={{ gap: 14 }}>
            {parks.map((park) => (
              <Pressable
                key={park.id}
                disabled={park.comingSoon}
                accessibilityRole="button"
                accessibilityLabel={park.comingSoon ? `${park.name}, coming soon` : `Open ${park.name}`}
                onPress={() => {
                  tap();
                  router.push({ pathname: '/park/[parkId]', params: { parkId: park.id } });
                }}>
                {({ pressed }) => (
                  <Card
                    color={park.comingSoon ? '#F5EFD9' : colors.white}
                    style={[
                      styles.parkCard,
                      { opacity: park.comingSoon ? 0.7 : 1, transform: [{ translateY: pressed ? 3 : 0 }] },
                    ]}>
                    <Txt size={44}>{park.emoji}</Txt>
                    <View style={{ flex: 1 }}>
                      <Txt weight="bold" size={22}>
                        {park.name}
                      </Txt>
                      <Txt size={15} color={colors.inkSoft}>
                        {park.tagline}
                      </Txt>
                    </View>
                    <Txt weight="bold" size={14} color={park.comingSoon ? colors.inkSoft : colors.berry}>
                      {park.comingSoon ? 'SOON' : 'OPEN →'}
                    </Txt>
                  </Card>
                )}
              </Pressable>
            ))}
          </View>

          <StoryButton
            small
            label={sound.enabled ? '🔊 Sounds on' : '🔇 Sounds off'}
            color={colors.white}
            onPress={sound.toggle}
            style={{ alignSelf: 'center', marginTop: 18 }}
          />
          <Link href="/about" style={styles.about}>
            <Txt size={15} color={colors.inkSoft} style={{ textDecorationLine: 'underline' }}>
              About this app · open source
            </Txt>
          </Link>
          <BisFooter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: { padding: 16, paddingBottom: 48, alignItems: 'center' },
  inner: { width: '100%', maxWidth: MAX_WIDTH, gap: 10 },
  book: {
    alignSelf: 'center',
    width: 260,
    height: 260,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: colors.ink,
    overflow: 'hidden',
    backgroundColor: colors.lemon,
    marginVertical: 12,
  },
  center: { textAlign: 'center' },
  shelfLabel: { letterSpacing: 2, marginTop: 14, textAlign: 'center' },
  parkCard: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  about: { alignSelf: 'center', marginTop: 10 },
});
