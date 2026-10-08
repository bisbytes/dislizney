import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { StoryButton, tap, Txt } from '@/components/ui';
import { BOARD_EMOJIS } from '@/lib/board-names';
import { newPlayerId, type Player } from '@/lib/journey';
import { colors, fonts } from '@/theme';

const EMOJIS = BOARD_EMOJIS;
const MAX_NAME = 12;

type Props = {
  crew: Player[];
  playing: string[];
  onChange: (crew: Player[], playing: string[]) => void;
};

/**
 * "Who's playing?" for team mode on one phone. Players are just a nickname
 * and an emoji, remembered on this device only.
 */
export function CrewPicker({ crew, playing, onChange }: Props) {
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState(EMOJIS[0]);

  const toggle = (id: string) => {
    tap();
    onChange(crew, playing.includes(id) ? playing.filter((p) => p !== id) : [...playing, id]);
  };

  const add = () => {
    const nick = name.trim().slice(0, MAX_NAME);
    if (!nick) return;
    const p: Player = { id: newPlayerId(), name: nick, emoji };
    onChange([...crew, p], [...playing, p.id]);
    setName('');
    setEmoji(EMOJIS[(crew.length + 1) % EMOJIS.length]);
    setAdding(false);
  };

  const remove = (id: string) => {
    tap();
    onChange(
      crew.filter((p) => p.id !== id),
      playing.filter((p) => p !== id),
    );
  };

  return (
    <View style={styles.wrap}>
      <Txt weight="bold" size={17} style={{ textAlign: 'center' }}>
        👫 Who’s playing?
      </Txt>
      <Txt size={13} color={colors.inkSoft} style={{ textAlign: 'center' }}>
        Playing together? Add everyone and take turns answering. Nicknames stay on this phone.
      </Txt>
      <View style={styles.chips}>
        {crew.map((p) => {
          const on = playing.includes(p.id);
          return (
            <Pressable
              key={p.id}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: on }}
              accessibilityLabel={`${p.name} is ${on ? '' : 'not '}playing`}
              accessibilityHint="Long press to remove"
              onPress={() => toggle(p.id)}
              onLongPress={() => remove(p.id)}
              style={[styles.chip, { backgroundColor: on ? colors.lemon : colors.white, opacity: on ? 1 : 0.6 }]}>
              <Txt weight="bold" size={15}>
                {p.emoji} {p.name}
                {on ? ' ✓' : ''}
              </Txt>
            </Pressable>
          );
        })}
        {!adding && (
          <Pressable
            accessibilityRole="button"
            onPress={() => {
              tap();
              setAdding(true);
            }}
            style={[styles.chip, styles.addChip]}>
            <Txt weight="bold" size={15}>
              ＋ Add a player
            </Txt>
          </Pressable>
        )}
      </View>
      {adding && (
        <View style={styles.addBox}>
          <TextInput
            autoFocus
            value={name}
            onChangeText={(t) => setName(t.slice(0, MAX_NAME))}
            onSubmitEditing={add}
            placeholder="Nickname"
            placeholderTextColor={colors.inkSoft}
            maxLength={MAX_NAME}
            autoComplete="off"
            autoCorrect={false}
            accessibilityLabel="Player nickname"
            style={styles.input}
          />
          <View style={styles.emojis}>
            {EMOJIS.map((e) => (
              <Pressable
                key={e}
                accessibilityRole="radio"
                accessibilityState={{ selected: e === emoji }}
                onPress={() => setEmoji(e)}
                style={[styles.emoji, e === emoji && { backgroundColor: colors.lemon, borderColor: colors.ink }]}>
                <Txt size={22}>{e}</Txt>
              </Pressable>
            ))}
          </View>
          <View style={styles.row}>
            <StoryButton small label="Add" disabled={!name.trim()} onPress={add} />
            <StoryButton small label="Cancel" color={colors.white} onPress={() => setAdding(false)} />
          </View>
        </View>
      )}
      {crew.length > 0 && (
        <Txt size={12} color={colors.inkSoft} style={{ textAlign: 'center' }}>
          Tap a name to sit out this ride. Press and hold to remove.
        </Txt>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 8, borderTopWidth: 2, borderTopColor: colors.paperEdge, paddingTop: 12 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  chip: { borderWidth: 2, borderColor: colors.ink, borderRadius: 999, paddingVertical: 6, paddingHorizontal: 12 },
  addChip: { borderStyle: 'dashed', backgroundColor: colors.paper },
  addBox: { gap: 10, backgroundColor: colors.paper, borderRadius: 16, padding: 12 },
  input: {
    fontFamily: fonts.medium,
    fontSize: 18,
    color: colors.ink,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  emojis: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, justifyContent: 'center' },
  emoji: { borderWidth: 2, borderColor: 'transparent', borderRadius: 12, padding: 4 },
  row: { flexDirection: 'row', gap: 8, justifyContent: 'center' },
});
