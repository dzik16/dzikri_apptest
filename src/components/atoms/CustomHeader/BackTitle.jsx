import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../../../themes';
import Icon from 'react-native-vector-icons/Feather';
import IconBack from '../../../assets/icons/IconBack';

const IconSize = 24;
function BackTitle({ title, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <IconBack />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

export default BackTitle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingVertical: 20,
    paddingLeft: SIZES.padding,
    paddingRight: SIZES.padding2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    ...FONTS.h3,
    color: COLORS.black,
    marginTop: 4,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
});
