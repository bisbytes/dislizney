import { Linking, Pressable, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

import { Txt } from '@/components/ui';
import { BRAND } from '@/lib/brand';
import { colors } from '@/theme';

/** Bis, the Bis Bytes mascot, from the Bis Bytes artwork. */
export function Bis({ size = 64 }: { size?: number }) {
  return (
    <Image
      source={require('@/assets/images/bis.png')}
      style={{ width: size, height: size }}
      contentFit="contain"
      accessibilityLabel="Bis, the Bis Bytes mascot"
    />
  );
}

/** The cover logo: Bis and the name. */
export function BisLogo() {
  return (
    <View style={styles.logo} accessibilityRole="header" accessibilityLabel={`${BRAND.app}, by ${BRAND.name}`}>
      <Bis size={130} />
      <Txt weight="bold" size={34} style={{ lineHeight: 40, textAlign: 'center' }}>
        {BRAND.app}
      </Txt>
      <Txt weight="medium" size={15} color={colors.inkSoft} style={{ letterSpacing: 1.5 }}>
        BY {BRAND.name.toUpperCase()}
      </Txt>
    </View>
  );
}

/** Footer on every main screen: who made this, a line about her, and her portfolio. */
export function BisFooter() {
  const url = BRAND.portfolioUrl;
  return (
    <View style={styles.footer}>
      <View style={styles.row}>
        <Bis size={52} />
        <View style={{ flex: 1, gap: 2 }}>
          <Txt weight="bold" size={15}>
            Made with 💛 by {BRAND.name}
          </Txt>
          <Txt size={13} color={colors.inkSoft}>
            {BRAND.aboutLine}
          </Txt>
          {url ? (
            <Pressable accessibilityRole="link" onPress={() => Linking.openURL(url)} hitSlop={8}>
              <Txt weight="bold" size={14} color={colors.berry} style={{ textDecorationLine: 'underline' }}>
                See my portfolio →
              </Txt>
            </Pressable>
          ) : (
            <Txt size={13} color={colors.inkSoft} style={{ fontStyle: 'italic' }}>
              Portfolio coming soon ✨
            </Txt>
          )}
        </View>
      </View>
      <Txt size={11} color={colors.inkSoft} style={{ textAlign: 'center' }}>
        An unofficial fan project. Not affiliated with or endorsed by The Walt Disney Company.
      </Txt>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: { alignItems: 'center', justifyContent: 'center', gap: 2, flex: 1 },
  footer: {
    marginTop: 28,
    gap: 10,
    borderTopWidth: 2,
    borderTopColor: colors.paperEdge,
    paddingTop: 14,
    width: '100%',
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
});

const BIS_TIPS = [
  'The best details in a queue are usually up high. Look up! 👀',
  'Count the cast members you can spot and give them a wave. 👋',
  'Stretch break! Reach for the sky, then touch your toes. 🙆',
  'Who in your group has ridden this the most times? 🏆',
  'When you board, phones away so you don’t miss a thing. 📵',
  'Make up a secret handshake for when you reach the front. 🤝',
  'Hum a Disney song and see who guesses it first. 🎶',
  'Line time is thirsty work. Have a sip of water! 💧',
  'Close your eyes and listen. What sounds can you hear? 👂',
  'Tell your crew your favorite ride ever, and why. 💬',
];

function hash(s: string) {
  let h = 0;
  for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) | 0;
  return Math.abs(h);
}

/** Bis pops in now and then, at random but the same spots each time you reopen a line. */
export function bisAppearsAfter(seed: string, index: number) {
  return (index + 1) % 10 === 0 && hash(`${seed}:${index}`) % 3 === 0;
}

export function BisPop({ seed }: { seed: string }) {
  const tip = BIS_TIPS[hash(seed) % BIS_TIPS.length];
  return (
    <View style={popStyles.wrap} accessibilityRole="text">
      <Bis size={58} />
      <View style={popStyles.bubble}>
        <Txt weight="bold" size={13} color={colors.berry}>
          Psst, Bis here!
        </Txt>
        <Txt size={15}>{tip}</Txt>
      </View>
    </View>
  );
}

const popStyles = StyleSheet.create({
  wrap: { flexDirection: 'row', alignItems: 'flex-end', gap: 8, paddingHorizontal: 4 },
  bubble: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: 18,
    borderBottomLeftRadius: 4,
    padding: 10,
    gap: 2,
  },
});
