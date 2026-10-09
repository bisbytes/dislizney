import { useEffect, useRef } from 'react';
import { AccessibilityInfo, Animated, Easing, StyleSheet, View } from 'react-native';

import { season } from '@/theme';
import { SEASON_SPARKLES } from '@/theme/seasons';

const SPOTS = [
  { left: '8%', top: '6%', size: 18, delay: 0 },
  { left: '86%', top: '4%', size: 22, delay: 400 },
  { left: '18%', top: '30%', size: 14, delay: 900 },
  { left: '78%', top: '26%', size: 16, delay: 1300 },
  { left: '6%', top: '52%', size: 20, delay: 700 },
  { left: '90%', top: '48%', size: 14, delay: 200 },
  { left: '50%', top: '2%', size: 12, delay: 1100 },
] as const;

const GLYPHS = SEASON_SPARKLES[season ?? 'none'];

/** Gently twinkling stars for the cover. Sits still when Reduce Motion is on. */
export function Twinkles() {
  const values = useRef(SPOTS.map(() => new Animated.Value(0.6))).current;

  useEffect(() => {
    let loops: Animated.CompositeAnimation[] = [];
    AccessibilityInfo.isReduceMotionEnabled()
      .catch(() => false)
      .then((reduce) => {
        if (reduce) return;
        loops = values.map((v, i) =>
          Animated.loop(
            Animated.sequence([
              Animated.delay(SPOTS[i].delay),
              Animated.timing(v, {
                toValue: 1,
                duration: 900,
                easing: Easing.inOut(Easing.sin),
                useNativeDriver: true,
              }),
              Animated.timing(v, {
                toValue: 0.3,
                duration: 900,
                easing: Easing.inOut(Easing.sin),
                useNativeDriver: true,
              }),
            ]),
          ),
        );
        loops.forEach((l) => l.start());
      });
    return () => loops.forEach((l) => l.stop());
  }, [values]);

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {SPOTS.map((s, i) => (
        <Animated.Text
          key={i}
          style={{
            position: 'absolute',
            left: s.left,
            top: s.top,
            fontSize: s.size,
            opacity: values[i],
            transform: [{ scale: values[i] }],
          }}>
          {GLYPHS[i % GLYPHS.length]}
        </Animated.Text>
      ))}
    </View>
  );
}
