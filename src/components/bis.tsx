import { Linking, Pressable, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Txt } from '@/components/ui';
import { BRAND } from '@/lib/brand';
import { colors } from '@/theme';

/** Bis, the Bis Bytes mascot, with her ear headband. Same drawing as assets/images/bis.svg. */
export const BIS_XML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <path d="M30 40 Q60 14 90 40" fill="none" stroke="#6E6E6E" stroke-width="5" stroke-linecap="round"/>
  <circle cx="27" cy="27" r="17" fill="#BDBDBD" stroke="#2B1B3F" stroke-width="3"/>
  <circle cx="93" cy="27" r="17" fill="#BDBDBD" stroke="#2B1B3F" stroke-width="3"/>
  <rect x="21" y="21" width="5" height="5" rx="1" fill="#FFFD54"/>
  <rect x="28" y="27" width="4" height="4" rx="1" fill="#FFFFFF" opacity="0.8"/>
  <rect x="94" y="21" width="5" height="5" rx="1" fill="#FFFD54"/>
  <rect x="88" y="27" width="4" height="4" rx="1" fill="#FFFFFF" opacity="0.8"/>
  <path d="M24 70 Q22 34 60 32 Q98 34 96 70 L96 92 Q90 98 84 92 L84 70 L36 70 L36 92 Q30 98 24 92 Z" fill="#4A2C2A"/>
  <circle cx="60" cy="68" r="31" fill="#F2C29B" stroke="#2B1B3F" stroke-width="3"/>
  <path d="M29 62 Q32 38 60 37 Q88 38 91 62 Q78 52 70 44 Q62 54 46 52 Q38 58 29 62 Z" fill="#4A2C2A"/>
  <path d="M60 38 L46 30 Q42 38 46 46 Z" fill="#FFFD54" stroke="#2B1B3F" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M60 38 L74 30 Q78 38 74 46 Z" fill="#FFFD54" stroke="#2B1B3F" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="60" cy="38" r="4.5" fill="#E0457B" stroke="#2B1B3F" stroke-width="2.5"/>
  <ellipse cx="48" cy="70" rx="4.2" ry="5.5" fill="#2B1B3F"/>
  <ellipse cx="72" cy="70" rx="4.2" ry="5.5" fill="#2B1B3F"/>
  <circle cx="49.5" cy="68" r="1.6" fill="#FFFFFF"/>
  <circle cx="73.5" cy="68" r="1.6" fill="#FFFFFF"/>
  <ellipse cx="40" cy="80" rx="5" ry="3" fill="#E0457B" opacity="0.35"/>
  <ellipse cx="80" cy="80" rx="5" ry="3" fill="#E0457B" opacity="0.35"/>
  <path d="M51 82 Q60 91 69 82" fill="none" stroke="#2B1B3F" stroke-width="3" stroke-linecap="round"/>
</svg>`;

export function Bis({ size = 64 }: { size?: number }) {
  return <SvgXml xml={BIS_XML} width={size} height={size} accessibilityLabel="Bis, the Bis Bytes mascot" />;
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
