import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Create, Home, Splash, Details, Update } from '../screens';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal-inverted',
      }}>
      <Stack.Screen
        name="SplashScreen"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateContactScreen"
        component={Create}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='DetailScreen'
        component={Details}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='UpdateContactScreen'
        component={Update}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}