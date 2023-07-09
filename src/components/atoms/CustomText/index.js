import React, { memo } from 'react';
import { Text, TextInput, View } from 'react-native';
import { COLORS } from '../../../themes';
import styles from './styles';

const TextView = ({
  value,
  label,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          // { alignItems: 'center' },
          { borderColor: COLORS.primary, flexDirection: "left" },
        ]}>
        <Text
          style={[styles.text]}
          {...props}
        >{value}</Text>
      </View>
    </View>
  );
};

export default TextView;
