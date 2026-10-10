import { Directory, File, Paths } from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import * as Sharing from 'expo-sharing';
import { Platform } from 'react-native';

import type { Keepsake } from '@/lib/journey';
import { addToPhotoLibrary } from '@/lib/photo-library';

/**
 * Keepsakes that last: nothing is ever uploaded. People keep their own
 * journey as a backup file (in iCloud Drive, Google Drive, email…) and can
 * restore it on any phone or browser. Photos travel inside the file.
 */
type BackupFile = { app: 'dislizney'; version: 1; exportedAt: string; keepsakes: Keepsake[] };

const web = Platform.OS === 'web';

async function toDataUri(uri: string): Promise<string> {
  if (uri.startsWith('data:')) return uri;
  return `data:image/jpeg;base64,${await new File(uri).base64()}`;
}

function photoDir() {
  const dir = new Directory(Paths.document, 'photo-spots');
  if (!dir.exists) dir.create({ intermediates: true, idempotent: true });
  return dir;
}

function fromDataUri(dataUri: string, name: string): string {
  if (web || !dataUri.startsWith('data:')) return dataUri;
  const file = new File(photoDir(), `${name}.jpg`);
  file.write(dataUri.split(',')[1], { encoding: 'base64' });
  return file.uri;
}

/** Saves the whole journey as one file the person keeps wherever they like. */
export async function exportJourney(keepsakes: Keepsake[]): Promise<string> {
  const withPhotos = await Promise.all(
    keepsakes.map(async (k) => ({ ...k, photos: await Promise.all((k.photos ?? []).map(toDataUri)) })),
  );
  const data: BackupFile = {
    app: 'dislizney',
    version: 1,
    exportedAt: new Date().toISOString(),
    keepsakes: withPhotos,
  };
  const json = JSON.stringify(data);
  const name = `dislizney-journey-${new Date().toISOString().slice(0, 10)}.json`;

  if (web) {
    const url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 10_000);
    return 'Keepsakes downloaded! Keep the file somewhere safe, like iCloud Drive or Google Drive.';
  }
  const file = new File(Paths.cache, name);
  file.write(json);
  await Sharing.shareAsync(file.uri, {
    mimeType: 'application/json',
    UTI: 'public.json',
    dialogTitle: 'Save your keepsakes',
  });
  return 'Save it to Files, iCloud Drive or Google Drive so it’s there for good.';
}

/** Reads a backup file and returns its keepsakes, ready to merge into My Journey. */
export async function importJourney(): Promise<Keepsake[] | null> {
  const result = await DocumentPicker.getDocumentAsync({ type: ['application/json', '*/*'], base64: false });
  if (result.canceled || !result.assets?.[0]) return null;
  const asset = result.assets[0];
  const text = web && asset.file ? await asset.file.text() : await new File(asset.uri).text();
  const data = JSON.parse(text) as BackupFile;
  if (data?.app !== 'dislizney' || !Array.isArray(data.keepsakes)) throw new Error('Not a dislizney backup');
  return data.keepsakes.map((k) => ({
    ...k,
    photos: (k.photos ?? []).map((p, i) => fromDataUri(p, `${k.id}-${i}`)),
  }));
}

/** Saves pictures to the phone's photo library (or downloads them in a browser). */
export async function saveToPhotos(uris: string[]): Promise<string> {
  if (web) {
    // Phones: the share sheet has "Save Image". Computers: download the files.
    const nav = globalThis.navigator as Navigator | undefined;
    try {
      const files = await Promise.all(
        uris.map(
          async (uri, i) =>
            new globalThis.File([await (await fetch(uri)).blob()], `bisbytes-${i + 1}.jpg`, { type: 'image/jpeg' }),
        ),
      );
      if (nav?.canShare?.({ files })) {
        await nav.share({ files });
        return 'Tap “Save Image” to keep it in your photos.';
      }
    } catch {
      // Fall back to downloading.
    }
    uris.forEach((uri, i) => {
      const a = document.createElement('a');
      a.href = uri;
      a.download = `bisbytes-${Date.now()}-${i + 1}.jpg`;
      a.click();
    });
    return uris.length === 1 ? 'Picture downloaded!' : `${uris.length} pictures downloaded!`;
  }
  if (!(await addToPhotoLibrary(uris)))
    return 'To save pictures, allow Once Upon a Line to add to your photos in Settings.';
  return uris.length === 1 ? 'Saved to your photos! 📸' : `${uris.length} pictures saved to your photos! 📸`;
}

/** Asks the browser to keep this site's saved data instead of clearing it when space runs low. */
export function keepBrowserData() {
  if (!web) return;
  const storage = (globalThis.navigator as Navigator | undefined)?.storage;
  storage?.persist?.().catch(() => {});
}
