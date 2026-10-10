import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Pressable, RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BisFooter } from '@/components/bis';
import { StoryButton, Txt } from '@/components/ui';
import { getPark } from '@/data/parks';
import { boardAvailable, fetchBoard, myBoardNames, type Board } from '@/lib/board';
import { colors, MAX_WIDTH, pageShadow } from '@/theme';

/** Today's public scoreboard: anonymous names only, wiped every night. */
export default function Scoreboard() {
  const { parkId } = useLocalSearchParams<{ parkId: string }>();
  const park = getPark(parkId);
  const [board, setBoard] = useState<Board>();
  const [mine, setMine] = useState<Set<string>>(new Set());
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    if (!park || !boardAvailable) return;
    setLoading(true);
    try {
      const [b, m] = await Promise.all([fetchBoard(park.id), myBoardNames()]);
      setBoard(b);
      setMine(m);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [park]);

  useEffect(() => {
    load();
  }, [load]);

  if (!park) return null;
  const hours = board ? Math.round(board.resetsInSeconds / 3600) : 0;

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: colors.paper }}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={load} />}>
        <View style={styles.page}>
          <Pressable accessibilityRole="button" hitSlop={12} onPress={() => router.back()} style={{ marginBottom: 8 }}>
            <Txt weight="bold" size={18}>
              ← Back
            </Txt>
          </Pressable>
          <Txt size={52} style={{ textAlign: 'center' }}>
            🏆
          </Txt>
          <Txt weight="bold" size={30} style={{ textAlign: 'center' }}>
            Today’s Line Legends
          </Txt>
          <Txt size={16} color={colors.inkSoft} style={{ textAlign: 'center' }}>
            Everyone who shared a ride score at {park.name} today. Names are made up, so nobody knows who’s who, and the
            board erases itself every night.
          </Txt>

          {!boardAvailable || error ? (
            <View style={[styles.box, pageShadow]}>
              <Txt size={16} style={{ textAlign: 'center' }}>
                {boardAvailable
                  ? 'We couldn’t reach today’s board. Check your connection and try again.'
                  : 'The public board isn’t switched on in this version of the app yet.'}
              </Txt>
              {boardAvailable && <StoryButton small label="Try again" onPress={load} />}
            </View>
          ) : !board ? (
            <Txt size={16} color={colors.inkSoft} style={{ textAlign: 'center', marginTop: 24 }}>
              Loading today’s board…
            </Txt>
          ) : board.rows.length === 0 ? (
            <View style={[styles.box, pageShadow]}>
              <Txt size={17} style={{ textAlign: 'center' }}>
                Nobody’s on the board yet today. Finish a ride, then tap “Share to today’s board” on your keepsake to be
                first! 🌟
              </Txt>
            </View>
          ) : (
            <View style={[styles.box, pageShadow, { gap: 4 }]}>
              <Txt size={13} color={colors.inkSoft} style={{ textAlign: 'center', marginBottom: 6 }}>
                {board.players} player{board.players === 1 ? '' : 's'} today · resets in about {hours} hour
                {hours === 1 ? '' : 's'}
              </Txt>
              {board.rows.map((r, i) => {
                const me = mine.has(`${r.emoji} ${r.name}`);
                return (
                  <View key={`${r.emoji}${r.name}`} style={[styles.row, me && styles.me]}>
                    <Txt weight="bold" size={16} style={{ width: 34 }}>
                      {i < 3 ? ['🥇', '🥈', '🥉'][i] : `${i + 1}.`}
                    </Txt>
                    <Txt weight={me ? 'bold' : 'medium'} size={16} style={{ flex: 1 }} numberOfLines={1}>
                      {r.emoji} {r.name}
                      {me ? ' (you)' : ''}
                    </Txt>
                    <Txt size={13} color={colors.inkSoft}>
                      {r.rides} ride{r.rides === 1 ? '' : 's'}
                    </Txt>
                    <Txt weight="bold" size={17} style={{ width: 44, textAlign: 'right' }}>
                      {r.score}
                    </Txt>
                  </View>
                );
              })}
            </View>
          )}
          <Txt size={12} color={colors.inkSoft} style={{ textAlign: 'center', marginTop: 12 }}>
            Only the made-up name, emoji and points are sent, and only when you choose to share. No accounts, no real
            names, no photos.
          </Txt>
          <BisFooter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: { padding: 16, paddingBottom: 48, alignItems: 'center' },
  page: { width: '100%', maxWidth: MAX_WIDTH, gap: 8 },
  box: {
    marginTop: 16,
    gap: 12,
    backgroundColor: colors.surface,
    borderWidth: 3,
    borderColor: colors.ink,
    borderRadius: 22,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  me: { backgroundColor: colors.lemon },
});
