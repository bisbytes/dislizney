import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

const BITS = ['⭐', '✨', '🌟', '✨', '⭐', '💫', '✨', '🌟'];

/** A little celebratory pop of stars. Re-plays whenever `trigger` changes. */
export function StarBurst({ trigger }: { trigger: number }) {
  const t = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!trigger) return;
    t.setValue(0);
    Animated.timing(t, { toValue: 1, duration: 900, easing: Easing.out(Easing.cubic), useNativeDriver: true }).start();
  }, [trigger, t]);

  if (!trigger) return null;

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <View style={styles.center}>
        {BITS.map((bit, i) => {
          const angle = (i / BITS.length) * Math.PI * 2;
          const dist = 90;
          return (
            <Animated.Text
              key={i}
              style={[
                styles.bit,
                {
                  opacity: t.interpolate({ inputRange: [0, 0.7, 1], outputRange: [1, 1, 0] }),
                  transform: [
                    { translateX: t.interpolate({ inputRange: [0, 1], outputRange: [0, Math.cos(angle) * dist] }) },
                    { translateY: t.interpolate({ inputRange: [0, 1], outputRange: [0, Math.sin(angle) * dist] }) },
                    { scale: t.interpolate({ inputRange: [0, 0.3, 1], outputRange: [0.3, 1.4, 1] }) },
                  ],
                },
              ]}>
              {bit}
            </Animated.Text>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  bit: { position: 'absolute', fontSize: 26 },
});
