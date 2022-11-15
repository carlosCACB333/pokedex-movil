import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import React from 'react';
import SearchInput from '../components/SearchInput';
import usePokeSearch from '../hooks/usePokeSearch';
import { useTheme } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { SimplePoke } from '../interfaces/pokeInterface';
import PokeCard from '../components/PokeCard';

const SearchScreen = () => {
  const { colors } = useTheme();
  const { pokes, isLoading } = usePokeSearch();

  const [pokeFilters, setPokeFilters] = useState<SimplePoke[]>([]);
  const [kward, setKwarg] = useState('');
  console.log(kward);

  useEffect(() => {
    if (kward.length > 0) {
      setPokeFilters(
        pokes.filter(pok =>
          pok.name.toLocaleLowerCase().includes(kward.toLocaleLowerCase()),
        ),
      );
    } else {
      setPokeFilters([]);
    }
  }, [kward, pokes]);

  return (
    <View style={styles.container}>
      <SearchInput
        onDebonce={(value: string) => setKwarg(value)}
        style={{ zIndex: 100, position: 'absolute', flex: 1, width: '80%' }}
      />
      {isLoading ? (
        <ActivityIndicator size={40} color={colors.primary} />
      ) : (
        <FlatList
          numColumns={2}
          data={pokeFilters}
          keyExtractor={poke => poke.id}
          ListHeaderComponent={
            <Text style={{ ...styles.title, color: colors.primary }}>
              {kward}
            </Text>
          }
          renderItem={({ item }) => <PokeCard poke={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, margin: 5 },
  title: { fontSize: 25, marginLeft: 5, marginTop: 60 },
});
export default SearchScreen;
