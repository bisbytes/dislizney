import * as MediaLibrary from 'expo-media-library';

/** Adds pictures to the phone's photo library. Returns false if the person said no. */
export async function addToPhotoLibrary(uris: string[]): Promise<boolean> {
  const perm = await MediaLibrary.requestPermissionsAsync(true, ['photo']);
  if (!perm.granted) return false;
  for (const uri of uris) await MediaLibrary.Asset.create(uri);
  return true;
}
