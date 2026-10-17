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
          <Card>
            <Txt weight="bold" size={18}>
              🔒 Your privacy
            </Txt>
            <Txt size={16}>
              No accounts, no cookies, no ads, no tracking. Your stars, keepsakes, photos, crew names and settings are
              saved only on this device. Clear the app or your browser data and they are gone.
            </Txt>
            <Txt size={16}>
              Nothing leaves your device unless you choose to share a score to today's public board, which only shows
              the made-up name you pick and is wiped every night. The app also sends an anonymous count when it opens
              (just web, iOS or Android, with no id) so we know how many visits there are.
            </Txt>
            <Txt size={16}>
              Like any website, the services the app talks to (GitHub Pages, Cloudflare, Queue-Times.com for wait
              times and Wikipedia) see your IP address when they answer. We don't save it.
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
