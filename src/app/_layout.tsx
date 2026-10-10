import { Fredoka_400Regular, Fredoka_500Medium, Fredoka_700Bold, useFonts } from '@expo-google-fonts/fredoka';
import * as Notifications from 'expo-notifications';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform, View } from 'react-native';

import { RadarBanner } from '@/components/cards';
import { JourneyProvider } from '@/lib/journey';
import { ProgressProvider } from '@/lib/progress';
import { RadarProvider } from '@/lib/radar';
import { SoundProvider } from '@/lib/sound';
import { useAppStats } from '@/lib/stats';
import { colors } from '@/theme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({ Fredoka_400Regular, Fredoka_500Medium, Fredoka_700Bold });
  useAppStats();

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  // Tapping a "you're near..." notification opens that attraction.
  useEffect(() => {
    if (Platform.OS === 'web') return;
    const sub = Notifications.addNotificationResponseReceivedListener((response) => {
      const id = response.notification.request.content.data?.attractionId;
      if (typeof id === 'string') router.push({ pathname: '/attraction/[id]', params: { id } });
    });
    return () => sub.remove();
  }, []);

  if (!loaded && !error) return null;

  return (
    <ProgressProvider>
      <JourneyProvider>
        <SoundProvider>
          <RadarProvider>
            <View style={{ flex: 1, backgroundColor: colors.paper }}>
              <StatusBar style="auto" />
              <Stack
                screenOptions={{
                  headerShown: false,
                  animation: 'fade_from_bottom',
                  contentStyle: { backgroundColor: colors.paper },
                }}
              />
              <RadarBanner />
            </View>
          </RadarProvider>
        </SoundProvider>
      </JourneyProvider>
    </ProgressProvider>
  );
}
