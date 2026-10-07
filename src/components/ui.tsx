import * as Haptics from 'expo-haptics';
import type { ReactNode } from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type TextProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import { colors, fonts, pageShadow } from '@/theme';

type TxtProps = TextProps & { weight?: 'regular' | 'medium' | 'bold'; size?: number; color?: string };

export function Txt({ weight = 'regular', size = 17, color = colors.ink, style, ...rest }: TxtProps) {
  return (
    <Text
      {...rest}
      style={[
        { fontFamily: fonts[weight], fontSize: size, color, lineHeight: Math.round(size * 1.35) },
        style as StyleProp<TextStyle>,
      ]}
    />
  );
}

export function tap() {
  if (Platform.OS !== 'web') Haptics.selectionAsync().catch(() => {});
}

type ButtonProps = {
  label: string;
  onPress: () => void;
  color?: string;
  textColor?: string;
  small?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  accessibilityHint?: string;
};

export function StoryButton({
  label,
  onPress,
  color = colors.gold,
  textColor = colors.ink,
  small,
  disabled,
  style,
  accessibilityHint,
}: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityHint={accessibilityHint}
      disabled={disabled}
      onPress={() => {
        tap();
        onPress();
      }}
      style={({ pressed }) => [
        styles.button,
        small && styles.buttonSmall,
        { backgroundColor: color, opacity: disabled ? 0.5 : 1, transform: [{ translateY: pressed ? 3 : 0 }] },
        !pressed && pageShadow,
        style,
      ]}>
      <Txt weight="bold" size={small ? 15 : 18} color={textColor} style={{ textAlign: 'center' }}>
        {label}
      </Txt>
    </Pressable>
  );
}

export function Card({
  children,
  style,
  color = colors.white,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  color?: string;
}) {
  return <View style={[styles.card, { backgroundColor: color }, pageShadow, style]}>{children}</View>;
}

export function Stars({ n, of, size = 16 }: { n: number; of: number; size?: number }) {
  return (
    <Txt size={size} accessibilityLabel={`${n} of ${of} stars`}>
      {'★'.repeat(n)}
      <Txt size={size} color="rgba(43,27,63,0.25)">
        {'★'.repeat(Math.max(0, of - n))}
      </Txt>
    </Txt>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: colors.ink,
  },
  buttonSmall: { paddingVertical: 8, paddingHorizontal: 16 },
  card: {
    borderRadius: 22,
    borderWidth: 3,
    borderColor: colors.ink,
    padding: 18,
  },
});
