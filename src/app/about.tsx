import * as WebBrowser from 'expo-web-browser';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { goBack } from '@/lib/nav';
import { BisFooter } from '@/components/bis';
import { Card, StoryButton, Txt } from '@/components/ui';
import { useProgress } from '@/lib/progress';
import { colors, MAX_WIDTH } from '@/theme';

const REPO = 'https://github.com/bisbytes/dislizney';

export default function About() {
  const { reset, totalStars } = useProgress();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.paper }}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 16, paddingBottom: 48 }}>
        <View style={styles.page}>
          <Pressable accessibilityRole="button" hitSlop={12} onPress={() => goBack('/')}>
            <Txt weight="bold" size={18}>
              ← Back
            </Txt>
          </Pressable>
          <Txt weight="bold" size={32}>
            About Once Upon a Line
          </Txt>
          <Card>
            <Txt size={17}>
              Once Upon a Line turns waiting in line at Walt Disney World into a storybook adventure. Every ride has
              trivia, I Spy hunts, would-you-rathers and group challenges for kids and grown-ups alike.
            </Txt>
          </Card>
          <Card>
            <Txt weight="bold" size={18}>
              🔎 Facts you can check
            </Txt>
            <Txt size={16}>
              Every fact and trivia answer links to its source, and each ride page pulls a fresh summary from Wikipedia.
              Spot something wrong? Open an issue or a pull request.
            </Txt>
          </Card>
          <Card>
            <Txt weight="bold" size={18}>
              💛 Open source
            </Txt>
            <Txt size={16}>Anyone can add rides, parks and quests. The code and content live on GitHub.</Txt>
            <StoryButton
              small
              label="View on GitHub"
              onPress={() => WebBrowser.openBrowserAsync(REPO)}
              style={{ alignSelf: 'flex-start', marginTop: 10 }}
            />
          </Card>
          <Card>
            <Txt weight="bold" size={18}>
              📡 Your location
            </Txt>
            <Txt size={16}>
              Fun Fact Radar only uses your location on your device, while the app is open, to notice when you are near
              a ride. It is never sent anywhere.
            </Txt>
          </Card>
          {totalStars > 0 && (
            <StoryButton
              small
              label="Start my storybook over"
              color={colors.surface}
              onPress={reset}
              style={{ alignSelf: 'center' }}
            />
          )}
          <Txt size={12} color={colors.inkSoft} style={{ textAlign: 'center' }}>
            All attraction names are trademarks of their respective owners.
          </Txt>
          <BisFooter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { width: '100%', maxWidth: MAX_WIDTH, gap: 14 },
});
