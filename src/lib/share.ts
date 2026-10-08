import * as Clipboard from 'expo-clipboard';
import * as Sharing from 'expo-sharing';
import { Platform } from 'react-native';

/**
 * Opens the phone's share sheet with a picture, so people pick Instagram,
 * TikTok, Facebook, Messages or anything else they have. Most social apps
 * ignore text sent along with a picture, so the caption is copied first,
 * ready to paste.
 */
export async function shareImage(uri: string, caption: string): Promise<string> {
  Clipboard.setStringAsync(caption).catch(() => {});
  if (Platform.OS !== 'web') {
    if (!(await Sharing.isAvailableAsync())) return 'Sharing isn’t available on this phone.';
    await Sharing.shareAsync(uri, { mimeType: 'image/png', UTI: 'public.png', dialogTitle: 'Share your ride' });
    return 'Caption copied! Paste it into your post 📋';
  }

  const blob = await (await fetch(uri)).blob();
  const file = new globalThis.File([blob], 'my-ride.png', { type: 'image/png' });
  const nav = globalThis.navigator as Navigator | undefined;
  if (nav?.canShare?.({ files: [file] })) {
    try {
      await nav.share({ files: [file], text: caption });
      return 'Caption copied too, in case the app leaves it out 📋';
    } catch (e) {
      if ((e as Error)?.name === 'AbortError') return '';
      // Blocked: fall back to downloading the picture.
    }
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'my-ride.png';
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 10_000);
  return 'Picture downloaded and caption copied! Add them to your post 📋';
}
