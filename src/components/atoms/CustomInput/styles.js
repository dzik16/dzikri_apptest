import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../themes';

export default StyleSheet.create({
  wrapper: {
    height: 48,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    marginTop: 12,
  },

  inputContainer: {
    paddingVertical: 2,
  },

  label: {
    color: COLORS.black,
    ...FONTS.tabBarLabel,
  },

  textInput: {
    flex: 1,
    width: '100%',
    color: COLORS.black,
  },

  error: {
    color: COLORS.danger,
    fontSize: 12,
  },
});
