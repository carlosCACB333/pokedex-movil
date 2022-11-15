import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { PokeDetails as PokeDetailsI } from '../interfaces/pokeDetailsInterface';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';

const PokemonDetails = ({ pokemon }: { pokemon: PokeDetailsI }) => {
  const { colors } = useTheme();
  return (
    <ScrollView
      style={{ ...StyleSheet.absoluteFillObject }}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Tipos</Text>
        <View style={styles.row}>
          {pokemon.types.map(({ type }) => (
            <Text
              key={type.name}
              style={{ ...styles.badge, backgroundColor: colors.card }}>
              {type.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Peso</Text>

        <View style={styles.row}>
          <Text style={{ ...styles.badge, backgroundColor: colors.card }}>
            {pokemon.weight} KG
          </Text>
        </View>

        <Text style={styles.title}>Sprites</Text>

        <ScrollView horizontal={true}>
          <Image
            style={styles.img}
            source={{ uri: pokemon.sprites.back_default }}
          />
          <Image
            style={styles.img}
            source={{ uri: pokemon.sprites.front_shiny }}
          />
          <Image
            style={styles.img}
            source={{ uri: pokemon.sprites.back_shiny }}
          />
          <Image
            style={styles.img}
            source={{ uri: pokemon.sprites.front_default }}
          />
        </ScrollView>

        <Text style={styles.title}>Habilidades</Text>
        <View style={styles.row}>
          {pokemon.abilities.map(({ ability }) => (
            <Text
              key={ability.name}
              style={{ ...styles.badge, backgroundColor: colors.card }}>
              {ability.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Movimientos</Text>
        <View style={{ ...styles.row, flexWrap: 'wrap' }}>
          {pokemon.moves.map(({ move }) => (
            <Text
              key={move.name}
              style={{ ...styles.badge, backgroundColor: colors.card }}>
              {move.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Stats</Text>
        <View style={{ ...styles.row, flexWrap: 'wrap', marginBottom: 100 }}>
          {pokemon.stats.map(({ stat, base_stat }) => (
            <Text
              key={stat.name}
              style={{ ...styles.badge, backgroundColor: colors.card }}>
              {stat.name} = {base_stat}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 350,
  },

  title: { fontSize: 25, marginTop: 5 },
  badge: {
    marginHorizontal: 2,
    padding: 5,
    borderRadius: 10,
  },
  row: { flexDirection: 'row' },
  img: { aspectRatio: 1, height: 100 },
});

export default PokemonDetails;
