/**
 * Web has no photo library to write to, so browsers download or share the
 * pictures instead (see saveToPhotos in backup.ts). expo-media-library can't
 * be loaded on the web, which is why the phone version lives in
 * photo-library.native.ts.
 */
export async function addToPhotoLibrary(_uris: string[]): Promise<boolean> {
  return false;
}
