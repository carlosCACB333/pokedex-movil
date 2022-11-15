import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';
interface Props {
  style?: StyleProp<ViewStyle>;
  onDebonce: (value: string) => void;
}
const SearchInput = ({ style, onDebonce }: Props) => {
  const { colors } = useTheme();
  const [textValue, setTextValue] = useState('');

  const debounceValue = useDebounce(textValue);

  useEffect(() => {
    onDebonce(debounceValue);
  }, [debounceValue, onDebonce]);

  //   console.log(debounceValue);

  return (
    <View style={{ ...styles.container, ...(style as any) }}>
      <TextInput
        value={textValue}
        style={{ ...styles.input, backgroundColor: colors.card }}
        placeholder="Buscar..."
        onChangeText={setTextValue}
      />
      <Icon name="search-outline" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignSelf: 'center',
    marginTop: 5,
  },
  input: { borderRadius: 20, paddingHorizontal: 15 },
  icon: { position: 'absolute', fontSize: 20, right: 15 },
});

export default SearchInput;
