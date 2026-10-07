import { StyleSheet, View } from 'react-native';

import type { PostedWait } from '@/lib/waits';
import { colors } from '@/theme';
import { Txt } from './ui';

/** Big, glanceable posted wait so guests can compare lines at a glance. */
export function WaitBadge({ wait, large }: { wait: PostedWait; large?: boolean }) {
  const open = wait.open;
  const bg = !open ? '#E4E0EA' : wait.minutes <= 20 ? colors.mint : wait.minutes <= 50 ? colors.gold : colors.berry;
  const fg = !open ? colors.inkSoft : wait.minutes <= 20 || wait.minutes > 50 ? colors.white : colors.ink;
  return (
    <View style={[styles.waitBadge, large && styles.waitBadgeLarge, { backgroundColor: bg }]}>
      <Txt weight="bold" size={large ? 26 : 17} color={fg} style={{ textAlign: 'center' }}>
        {!open ? 'Closed now' : wait.minutes === 0 ? '🚶 No wait' : `⏳ ${wait.minutes} min`}
      </Txt>
      {open && (
        <Txt size={large ? 13 : 10} weight="medium" color={fg} style={{ textAlign: 'center', letterSpacing: 1 }}>
          POSTED WAIT
        </Txt>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  waitBadge: {
    alignSelf: 'stretch',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.ink,
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  waitBadgeLarge: { alignSelf: 'center', paddingVertical: 8, paddingHorizontal: 22, borderWidth: 3, borderRadius: 20 },
});
