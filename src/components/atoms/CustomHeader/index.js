import { View } from 'react-native';
import React from 'react';
import styles from './style';
import BackTitle from './BackTitle';
import Title from './Title';

function CustomHeader({ title, onPress, type }) {
  if (type === 'BackTitle') {
    return <BackTitle title={title} onPress={onPress} />;
  }
  if (type === 'HeaderTitle') {
    return <Title title={title} onPress={onPress} />;
  }
  return <View style={styles.header}></View>;
}

export default CustomHeader;
