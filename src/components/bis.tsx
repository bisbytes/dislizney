import { Linking, Pressable, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Txt } from '@/components/ui';
import { BRAND } from '@/lib/brand';
import { colors } from '@/theme';

/** Bis, the Bis Bytes mascot: red polka-dot bandana, blonde bangs, green shirt and a thumbs up. Same drawing as assets/images/bis.svg. */
export const BIS_XML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <g stroke="#1E1A1A" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <path d="M18 118 Q20 92 42 88 L74 88 Q96 92 98 118 Z" fill="#2E9B4B"/>
    <path d="M46 86 L58 98 L70 86" fill="#257F3D"/>
    <path d="M46 86 L40 98 L56 97 Z M70 86 L76 98 L60 97 Z" fill="#2E9B4B"/>
    <path d="M58 98 L58 118" fill="none" stroke-width="2.4"/>
    <path d="M50 78 L50 88 Q58 93 66 88 L66 78 Z" fill="#F4C09A"/>
    <circle cx="29" cy="58" r="6.5" fill="#F4C09A"/>
    <circle cx="87" cy="58" r="6.5" fill="#F4C09A"/>
    <path d="M30 52 Q30 84 58 84 Q86 84 86 52 Q86 30 58 30 Q30 30 30 52 Z" fill="#F4C09A"/>
    <path d="M30 50 Q30 26 58 25 Q86 26 86 50 Q82 40 74 37 Q60 34 44 46 Q38 50 33 56 Z" fill="#F7CF4A"/>
    <path d="M44 46 Q58 32 74 37 Q66 42 60 50 Q54 47 44 46 Z" fill="#F7CF4A"/>
    <path d="M27 46 Q30 20 58 18 Q86 20 89 46 Q84 30 58 28 Q32 30 27 46 Z" fill="#D9342B"/>
    <g transform="rotate(12 64 21) translate(4 0)"><path d="M60 20 Q50 6 38 10 Q36 20 52 24 Z" fill="#D9342B"/>
    <path d="M62 20 Q74 4 86 10 Q88 20 70 24 Z" fill="#D9342B"/>
    <circle cx="61" cy="21" r="5" fill="#C42A22"/></g>
  </g>
  <g fill="#FFFFFF">
    <circle cx="40" cy="27" r="2"/><circle cx="52" cy="22" r="1.7"/><circle cx="74" cy="24" r="1.8"/><circle cx="83" cy="33" r="1.7"/>
    <circle cx="33" cy="38" r="1.6"/><circle cx="49" cy="13" r="1.6"/><circle cx="82" cy="18" r="1.6"/>
  </g>
  <g stroke="#1E1A1A" stroke-width="2.6" stroke-linecap="round" fill="none">
    <path d="M42 52 Q46 49 50 51"/><path d="M66 51 Q70 49 74 52"/>
    <path d="M57 62 Q59 65 57 66"/>
  </g>
  <ellipse cx="46" cy="58" rx="3" ry="4" fill="#1E1A1A"/>
  <ellipse cx="70" cy="58" rx="3" ry="4" fill="#1E1A1A"/>
  <path d="M45 69 Q58 70 71 69 Q68 81 58 81 Q48 81 45 69 Z" fill="#B3262B" stroke="#1E1A1A" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M47 70 Q58 71.5 69 70 L68 73 Q58 75 48 73 Z" fill="#FFFFFF"/>
  <path d="M52 78 Q58 75 64 78 Q61 80.5 58 80.5 Q55 80.5 52 78 Z" fill="#E86A6A"/>
  <g stroke="#1E1A1A" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" fill="#F4C09A">
    <path d="M86 118 L84 98 Q84 92 90 92 L94 92 L95 80 Q96 74 100 75 Q104 76 103 82 L102 92 L110 93 Q115 94 114 99 L112 112 Q111 118 105 118 Z"/>
    <path d="M102 99 L113 100 M101 105 L112 106 M101 111 L110 112" fill="none" stroke-width="2.4"/>
  </g>
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
