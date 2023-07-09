import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../themes'
import IconAddContact from '../../../assets/icons/IconAddContact'

function HeaderTitle({ title, onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <IconAddContact />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HeaderTitle

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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    ...FONTS.h1,
    color: COLORS.black,
    marginTop: 4,
    fontWeight: 'bold'
  }
})