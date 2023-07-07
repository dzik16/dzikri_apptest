import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Splash, Home} from '../screens/index';

const Stack = createNativeStackNavigator();

function Router() {
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
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Router;
