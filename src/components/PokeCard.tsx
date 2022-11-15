import { View, Text, Image, StyleSheet } from 'react-native';
import { SimplePoke } from '../interfaces/pokeInterface';
import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getImageColor } from '../helpers/colors';
import { useState, useEffect, useRef } from 'react';
const PokeCard = ({ poke }: { poke: SimplePoke }) => {
  const { colors } = useTheme();
  const isMounted = useRef(true);
  const [bgCard, setBgCard] = useState({
    primary: colors.card,
    secondary: colors.card,
  });

  const { navigate } = useNavigation();

  useEffect(() => {
    getImageColor(poke.picture).then(res => {
      if (isMounted.current) {
        setBgCard(state => ({
          primary: res.primary || state.primary,
          secondary: res.secondary || state.primary,
        }));
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [poke.picture]);

  const handlePress = () => {
    navigate('Detail', { poke, color: bgCard.primary });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={{ ...styles.card, backgroundColor: bgCard.primary }}>
          <Text style={{ ...styles.title, color: colors.text }}>
            {poke.name}
          </Text>
          <View style={styles.containerPokebola}>
            <Image
              style={styles.pokebola}
              source={require('../assets/pokebola-blanca.png')}
            />
          </View>
          <Image source={{ uri: poke.picture }} style={styles.img} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    borderRadius: 20,
    height: 100,
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  img: {
    position: 'absolute',
    height: 100,
    width: 100,
    right: -15,
  },
  containerPokebola: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    opacity: 0.05,
    overflow: 'hidden',
  },
  pokebola: {
    flex: 1,
    height: 100,
    width: 100,
    right: -15,
  },
  title: { paddingLeft: 5 },
});
export default PokeCard;
