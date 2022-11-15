import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import { useColorScheme } from 'react-native';
import { useEffect, useState } from 'react';
import { SimplePoke } from '../interfaces/pokeInterface';
import Tabs from './Tabs';

DarkTheme.colors.primary = '#2B6CB0';

export type RootStackParams = {
  Home: undefined;
  Detail: { poke: SimplePoke; color: string };
};

const Navigation = () => {
  const mode = useColorScheme();
  const [theme, setTheme] = useState(
    mode === 'light' ? DefaultTheme : DarkTheme,
  );

  useEffect(() => {
    setTheme(mode === 'light' ? DefaultTheme : DarkTheme);
  }, [mode]);

  return (
    <NavigationContainer theme={theme}>
      <Tabs />
    </NavigationContainer>
  );
};

export default Navigation;
