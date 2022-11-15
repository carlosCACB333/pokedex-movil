import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import PokemonDetails from '../components/PokemonDetails';
import usePokeFull from '../hooks/usePokeFull';
import { RootStackParams } from '../navigations/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const DetailsScreen = ({ navigation, route }: Props) => {
  const { poke, color } = route.params;
  const { colors } = useTheme();

  const { pokemon, isLoading } = usePokeFull(poke.id);

  return (
    <View style={styles.container}>
      <View style={{ ...styles.header, backgroundColor: color }}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" color={colors.text} size={40} />
          </TouchableOpacity>
        </View>
        <Image
          style={styles.pokebola}
          source={require('../assets/pokebola.png')}
        />
        <Text style={styles.title}>{poke.name}</Text>
        <Image source={{ uri: poke.picture }} style={styles.img} />
      </View>

      {isLoading ? (
        <ActivityIndicator size={50} color={color} style={styles.loading} />
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: 350,
    borderBottomStartRadius: 500,
    borderBottomEndRadius: 500,
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 200,
  },

  title: { fontSize: 40, fontWeight: 'bold' },
  back: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 10,
  },

  pokebola: {
    width: 200,
    height: 200,
    position: 'absolute',
    opacity: 0.4,
    bottom: 0,
  },

  img: { aspectRatio: 1, width: 200, height: 200, marginBottom: -80 },
  loading: { marginTop: 80 },
});
export default DetailsScreen;
