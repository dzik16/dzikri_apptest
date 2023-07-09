import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../themes';

export default StyleSheet.create({
  wrapper: {
    height: 48,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputContainer: {
    paddingVertical: 3,
  },

  label: {
    color: COLORS.black,
    ...FONTS.h3,
    fontWeight: 'bold',
    marginLeft: 5
  },

  text: {
    flex: 1,
    width: '100%',
    color: COLORS.black,
    paddingTop: 10,
    fontSize: SIZES.h4
  },
});
