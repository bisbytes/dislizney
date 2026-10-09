import { Linking, Text } from 'react-native';

const QUEUE_TIMES = 'https://queue-times.com/';

/**
 * Queue-Times' API terms ask for "Powered by Queue-Times.com" linking back to
 * their site. Nest it inside a Txt so it picks up the surrounding style.
 */
export function QueueTimesLink() {
  return (
    <Text
      accessibilityRole="link"
      onPress={() => Linking.openURL(QUEUE_TIMES)}
      style={{ textDecorationLine: 'underline' }}>
      Powered by Queue-Times.com
    </Text>
  );
}
