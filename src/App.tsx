import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistore, Store } from './store';
import { StatusBar } from 'react-native';
import { COLORS } from './themes';
import Navigation from './navigation';

const MainApp = () => {
  return (
    <>
      <StatusBar
        backgroundColor={COLORS.primary}
        barStyle="default" />
      <Navigation />
      <FlashMessage position="top" />
    </>
  );
};

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistore}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
}
