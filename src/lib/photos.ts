import * as Clipboard from 'expo-clipboard';
import { Directory, File, Paths } from 'expo-file-system';
import { ImageManipulator, SaveFormat } from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import { Platform } from 'react-native';

/**
 * Photo spots: take a picture, shrink it, and keep it on the device.
 * On phones the photo is a file in the app's documents folder. On the web it
 * is a small JPEG data URI so it survives a page reload.
 */
export async function takePhoto(): Promise<string | null> {
  if (Platform.OS !== 'web') {
    const perm = await ImagePicker.requestCameraPermissionsAsync();
    if (!perm.granted) return pickPhoto();
  }
  const result = await ImagePicker.launchCameraAsync({ mediaTypes: 'images', quality: 0.8 });
  if (result.canceled || !result.assets?.[0]) return null;
  return keep(result.assets[0]);
}

/** Choose a photo from the library instead (or when the camera isn't allowed). */
export async function pickPhoto(): Promise<string | null> {
  const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: 'images', quality: 0.8 });
  if (result.canceled || !result.assets?.[0]) return null;
  return keep(result.assets[0]);
}

async function keep(asset: ImagePicker.ImagePickerAsset): Promise<string> {
  const web = Platform.OS === 'web';
  const context = ImageManipulator.manipulate(asset.uri);
  // Give both sides: the web renderer can't work out the height on its own.
  const width = Math.min(asset.width || 1440, web ? 800 : 1440);
  const height = asset.width && asset.height ? Math.round((asset.height * width) / asset.width) : width;
  context.resize({ width, height });
  const image = await context.renderAsync();
  const saved = await image.saveAsync({ format: SaveFormat.JPEG, compress: web ? 0.6 : 0.8, base64: web });
  if (web) return `data:image/jpeg;base64,${saved.base64}`;

  const dir = new Directory(Paths.document, 'photo-spots');
  if (!dir.exists) dir.create({ intermediates: true, idempotent: true });
  const source = new File(saved.uri);
  const dest = new File(dir, `${Date.now().toString(36)}.jpg`);
  await source.copy(dest, { overwrite: true });
  return dest.uri;
}

/** Removes saved photo files (phones only; web photos live in storage). */
export function deletePhotos(uris: string[]) {
  if (Platform.OS === 'web') return;
  for (const uri of uris) {
    try {
      const f = new File(uri);
      if (f.exists) f.delete();
    } catch {
      // Already gone.
    }
  }
}

/**
 * Shares a photo with its caption. The caption is copied first (straight from
 * the tap, so browsers allow it) because most social apps drop shared text.
 * Returns a short message to show the person.
 */
export async function sharePhoto(uri: string, caption: string): Promise<string> {
  Clipboard.setStringAsync(caption).catch(() => {});
  try {
    if (Platform.OS === 'web') {
      const nav = globalThis.navigator as Navigator | undefined;
      const blob = await (await fetch(uri)).blob();
      const file = new globalThis.File([blob], 'dislizney-photo.jpg', { type: 'image/jpeg' });
      if (nav?.canShare?.({ files: [file] })) {
        await nav.share({ files: [file], text: caption });
        return 'Caption copied too! Paste it into your post 📋';
      }
      return 'Caption copied! Save the photo by pressing and holding it 📋';
    }
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(uri, { mimeType: 'image/jpeg', UTI: 'public.jpeg', dialogTitle: 'Share your photo' });
    }
    return 'Caption copied! Paste it into your post 📋';
  } catch {
    return 'Caption copied! 📋';
  }
}
