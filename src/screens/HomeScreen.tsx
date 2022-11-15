import { useTheme } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PokeCard from '../components/PokeCard';
import usePoke from '../hooks/usePoke';
import { RootStackParams } from '../navigations/Navigation';
// import Icon from 'react-native-vector-icons/Ionicons';
interface Props extends StackScreenProps<RootStackParams, 'Home'> {}

const HomeScreen = ({}: Props) => {
  const { colors } = useTheme();

  const { simplePoke, loadPokes } = usePoke();
  // console.log(simplePoke);

  return (
    <View style={styles.constainer}>
      <Image
        style={styles.img}
        source={require('../assets/pokebola-blanca.png')}
      />

      <FlatList
        numColumns={2}
        data={simplePoke}
        keyExtractor={poke => poke.id}
        onEndReached={loadPokes}
        onEndReachedThreshold={0.3}
        ListHeaderComponent={
          <Text style={{ ...styles.title, color: colors.primary }}>
            Pokedex
          </Text>
        }
        renderItem={({ item }) => <PokeCard poke={item} />}
        ListFooterComponent={<ActivityIndicator />}
        // ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: { flex: 1 },
  img: {
    width: 300,
    height: 300,
    position: 'absolute',
    right: -130,
    top: -130,
    opacity: 0.1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 5,
  },
});

export default HomeScreen;
