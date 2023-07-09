import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS} from '../../themes';
import IconCamera from '../../assets/icons/IconCamera';
import IconUser from '../../assets/icons/IconUser';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 3000);
  });
  return (
    <LinearGradient
      colors={['#1FD2FE', '#01B0DA', '#0198BD']}
      style={styles.container}>
      <IconUser />
      <Text style={styles.logoText}>My Contact App</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLogo: {
    width: 100,
    height: 100,
  },
  logoText: {
    ...FONTS.h1,
    color: COLORS.white,
    marginTop: 10,
  },
  copyright: {
    ...FONTS.body4,
    color: COLORS.grey7,
    position: 'absolute',
    bottom: 19,
  },
});
