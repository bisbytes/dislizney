import { Image } from 'expo-image';
import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { Fact } from '@/data/types';
import { useRadar } from '@/lib/radar';
import { fetchWikiSummary, type WikiSummary } from '@/lib/wiki';
import { colors, MAX_WIDTH, pageShadow } from '@/theme';
import { SourceLink } from './quest-card';
import { Card, StoryButton, tap, Txt } from './ui';

export function FactCard({ fact }: { fact: Fact }) {
  return (
    <Card color={colors.lemon} style={{ transform: [{ rotate: '-1deg' }] }}>
      <Txt weight="bold" size={14} color={colors.inkSoft} style={{ letterSpacing: 1 }}>
        ✨ DID YOU KNOW?
      </Txt>
      <Txt weight="medium" size={18} style={{ marginTop: 4 }}>
        {fact.text}
      </Txt>
      <SourceLink url={fact.source} />
    </Card>
  );
}

/** Live summary pulled from Wikipedia when the page opens. */
export function WikiCard({ title }: { title: string }) {
  const [state, setState] = useState<'loading' | 'error' | WikiSummary>('loading');

  useEffect(() => {
    let alive = true;
    fetchWikiSummary(title).then((s) => alive && setState(s ?? 'error'));
    return () => {
      alive = false;
    };
  }, [title]);

  if (state === 'error') return null;

  return (
    <Card color={colors.white}>
      <Txt weight="bold" size={14} color={colors.inkSoft} style={{ letterSpacing: 1 }}>
        🌐 FRESH FROM THE WEB
      </Txt>
      {state === 'loading' ? (
        <ActivityIndicator color={colors.ink} style={{ marginVertical: 16 }} />
      ) : (
        <View style={{ flexDirection: 'row', gap: 12, marginTop: 8 }}>
          {state.thumbnail && <Image source={state.thumbnail} style={styles.thumb} contentFit="cover" />}
          <View style={{ flex: 1 }}>
            <Txt size={15} numberOfLines={7}>
              {state.extract}
            </Txt>
            <Pressable accessibilityRole="link" onPress={() => WebBrowser.openBrowserAsync(state.url)}>
              <Txt size={13} color={colors.inkSoft} style={{ textDecorationLine: 'underline', marginTop: 6 }}>
                Read more on Wikipedia
              </Txt>
            </Pressable>
          </View>
        </View>
      )}
    </Card>
  );
}

export function RadarToggle() {
  const { status, start, stop } = useRadar();
  const label =
    status === 'on'
      ? '📡 Fun Fact Radar is ON'
      : status === 'asking'
        ? '📡 Asking for location...'
        : '📡 Turn on Fun Fact Radar';
  return (
    <View style={{ alignItems: 'center', gap: 6 }}>
      <StoryButton
        small
        label={label}
        color={status === 'on' ? colors.mint : colors.white}
        onPress={() => (status === 'on' ? stop() : start())}
        accessibilityHint="Uses your location to pop up fun facts when you are near an attraction"
      />
      <Txt size={13} color={colors.inkSoft} style={{ textAlign: 'center', maxWidth: 320 }}>
        {status === 'denied'
          ? 'Location is off. You can allow it in your settings to get nearby fun facts.'
          : status === 'error'
            ? 'Couldn’t start the radar on this device.'
            : status === 'on'
              ? 'Walk near a ride and a fun fact will pop up!'
              : 'Get a fun fact whenever you walk up to a ride.'}
      </Txt>
    </View>
  );
}

/** Floating "you're near..." banner shown on top of every screen. */
export function RadarBanner() {
  const { ping, dismiss } = useRadar();
  const insets = useSafeAreaInsets();
  if (!ping) return null;
  return (
    <View pointerEvents="box-none" style={[styles.bannerWrap, { top: insets.top + 8 }]}>
      <Pressable
        accessibilityRole="button"
        onPress={() => {
          tap();
          dismiss();
          router.push({ pathname: '/attraction/[id]', params: { id: ping.attraction.id } });
        }}
        style={[styles.banner, pageShadow]}>
        <Txt size={34}>{ping.attraction.emoji}</Txt>
        <View style={{ flex: 1 }}>
          <Txt weight="bold" size={16}>
            You’re near {ping.attraction.name}!
          </Txt>
          <Txt size={14} numberOfLines={3}>
            {ping.fact}
          </Txt>
          <Txt weight="medium" size={13} color={colors.berry}>
            Tap to play its quests →
          </Txt>
        </View>
        <Pressable accessibilityLabel="Dismiss" hitSlop={12} onPress={dismiss}>
          <Txt size={20}>✕</Txt>
        </Pressable>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  thumb: { width: 84, height: 84, borderRadius: 12, borderWidth: 2, borderColor: colors.ink },
  bannerWrap: { position: 'absolute', left: 12, right: 12, alignItems: 'center', zIndex: 10 },
  banner: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    backgroundColor: colors.lemon,
    borderWidth: 3,
    borderColor: colors.ink,
    borderRadius: 20,
    padding: 12,
  },
});
