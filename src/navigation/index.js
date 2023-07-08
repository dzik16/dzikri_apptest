import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Splash, Home } from '../screens/index';
import { COLORS } from '../themes';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Router from './Stack';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.white,
  },
};

function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Router />
    </NavigationContainer>
  );
}

export default Navigation;
