import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import Stack from './Stack';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgba(0,0,0,0.8)',
          position: 'absolute',
        },
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15 },
      }}>
      <Tab.Screen
        name="Home"
        component={Stack}
        options={{
          title: 'Lista de pokemones',
          tabBarIcon: ({ color }) => (
            <Icon name="list-outline" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Buscar pokemones',
          tabBarIcon: ({ color }) => (
            <Icon name="search-outline" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
