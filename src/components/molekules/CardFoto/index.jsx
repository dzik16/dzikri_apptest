import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import SvgUri from 'react-native-svg-uri';
import IconDelete from '../../../assets/icons/IconDelete';
import IconView from '../../../assets/icons/IconView';
import IconEdit from '../../../assets/icons/IconEdit';

export default function CardFoto({ text1, text2, source, onPressDetails, onPressEdit, onPressDelete, onPressCard, stylee, isFocused }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressCard}>
      <View style={styles.wrapperContact}>
        {
          !isFocused ?
            <Image
              resizeMode="contain"
              style={styles.imageContact}
              source={source}
            />
            : <></>
        }

        <View>
          <Text style={styles.namaContact}>{text1}</Text>
          <Text style={styles.namaContact}>{text2}</Text>
        </View>
        {
          isFocused ?
            <View style={styles.containerButton}>
              <TouchableOpacity onPress={onPressDetails} style={[styles.button, stylee]}>
                <IconView />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressEdit} style={[styles.button, stylee]}>
                <IconEdit />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressDelete} style={[styles.button, stylee]}>
                <IconDelete />
              </TouchableOpacity>
            </View>

            : <></>
        }

      </View>
    </TouchableOpacity>
  );
};
