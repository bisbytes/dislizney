import * as Clipboard from 'expo-clipboard';
import { useEffect, useRef, useState } from 'react';
import { Modal, Platform, Pressable, ScrollView, StyleSheet, Switch, TextInput, View } from 'react-native';
import { captureRef } from 'react-native-view-shot';

import { DayCard } from '@/components/day-card';
import { SHARE_IMAGE } from '@/components/share-card';
import { StoryButton, tap, Txt } from '@/components/ui';
import { dayCaption, type Keepsake } from '@/lib/journey';
import { isSlow, track } from '@/lib/log';
import { shareImage } from '@/lib/share';
import { drawDayImage } from '@/lib/share-canvas';
import { colors, fonts, MAX_WIDTH } from '@/theme';

/** Shows a picture of the day and its caption, then opens the share sheet. Guests choose whether their own photos go on it. */
export function DaySharePanel({ list, open, onClose }: { list: Keepsake[]; open: boolean; onClose: () => void }) {
  const card = useRef<View>(null);
  const hasPhotos = list.some((k) => k.photos?.length);
  const [withPhotos, setWithPhotos] = useState(true);
  const [text, setText] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (open) {
      setText(dayCaption(list));
      setMsg('');
      setWithPhotos(true);
    }
    // Refresh each time the panel opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const make = () => {
    const slow = (ms: number) => new Promise<string>((_, no) => setTimeout(() => no(new Error('slow')), ms));
    if (Platform.OS === 'web') {
      return drawDayImage(list, withPhotos && hasPhotos).catch(() => drawDayImage(list, false, 540));
    }
    return Promise.race([
      captureRef(card, { format: 'png', quality: 1, ...SHARE_IMAGE, result: 'tmpfile' }),
      slow(12_000),
    ]);
  };

  const send = async () => {
    tap();
    setBusy(true);
    setMsg('');
    try {
      setMsg(await shareImage(await make(), text, 'my-day.png'));
      track('day_picture_ok');
    } catch (e) {
      track(isSlow(e) ? 'day_picture_slow' : 'day_picture_failed');
      Clipboard.setStringAsync(text).catch(() => {});
      setMsg('Couldn’t make the picture, but your caption is copied 📋 Tap again to retry.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <Modal visible={open} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <ScrollView style={styles.sheet} contentContainerStyle={{ gap: 12, alignItems: 'center', padding: 18 }}>
          <Txt weight="bold" size={20}>
            Share my day
          </Txt>
          <DayCard list={list} includePhotos={withPhotos && hasPhotos} ref={card} />
          {hasPhotos && (
            <View style={styles.toggle}>
              <Txt weight="medium" size={15}>
                📸 Put my photos on it
              </Txt>
              <Switch value={withPhotos} onValueChange={setWithPhotos} accessibilityLabel="Put my photos on it" />
            </View>
          )}
          <TextInput
            value={text}
            onChangeText={setText}
            multiline
            accessibilityLabel="Caption"
            style={[styles.note, { width: '100%', minHeight: 130 }]}
          />
          <Txt size={13} color={colors.inkSoft} style={{ textAlign: 'center' }}>
            Pick Instagram, TikTok, Facebook, Messages or any app you like. Some apps leave the words out, so we copy
            your caption. Just paste it into your post.
          </Txt>
          <StoryButton
            label={busy ? 'Making your picture…' : '📤 Share picture'}
            disabled={busy}
            color={colors.berry}
            textColor={colors.white}
            onPress={send}
            style={{ alignSelf: 'stretch' }}
          />
          {!!msg && (
            <Txt weight="medium" size={14} style={{ textAlign: 'center' }} accessibilityLiveRegion="polite">
              {msg}
            </Txt>
          )}
          <Pressable accessibilityRole="button" onPress={onClose} hitSlop={12}>
            <Txt size={15} style={{ textDecorationLine: 'underline' }}>
              Done
            </Txt>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(43,27,63,0.5)', justifyContent: 'flex-end' },
  sheet: {
    maxHeight: '92%',
    width: '100%',
    maxWidth: MAX_WIDTH,
    alignSelf: 'center',
    backgroundColor: colors.paper,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
  },
  toggle: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'stretch' },
  note: {
    borderWidth: 3,
    borderColor: colors.ink,
    borderRadius: 18,
    padding: 14,
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.ink,
    backgroundColor: colors.surface,
    textAlignVertical: 'top',
  },
});
