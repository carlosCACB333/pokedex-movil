import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParams } from './Navigation';
const Stk = createStackNavigator<RootStackParams>();
const Stack = () => {
  return (
    <Stk.Navigator screenOptions={{ headerShown: false }}>
      <Stk.Screen name="Home" component={HomeScreen} />
      <Stk.Screen name="Detail" component={DetailsScreen} />
    </Stk.Navigator>
  );
};

export default Stack;
