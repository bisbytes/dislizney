import { router, type Href } from 'expo-router';

/**
 * Goes back one screen. When there is nothing to go back to (the app was opened straight
 * on this screen from a link, a bookmark or the home screen), goes to `fallback` instead,
 * so a back button never sits there doing nothing.
 */
export function goBack(fallback: Href = '/') {
  if (router.canGoBack()) router.back();
  else router.replace(fallback);
}
