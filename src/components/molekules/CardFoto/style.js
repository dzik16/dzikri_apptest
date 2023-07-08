import { StyleSheet } from 'react-native';
import { COLORS, RADIUS, FONTS } from '../../../themes';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginHorizontal: 5,
    marginVertical: 5,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10
  },
  wrapperContact: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  imageContact: {
    borderRadius: 15,
    height: 50,
    width: 50,
    marginRight: 16,
  },
  namaContact: {
    ...FONTS.h3,
    color: COLORS.black,
    textTransform: 'capitalize',
    width: 194,
  },
  namaKota: {
    ...FONTS.body5,
    marginTop: 0,
  },
  button: {
    height: 26,
    width: 47,
    marginLeft: 5,
    right: 15,
    justifyContent: 'center',
  },
  textButton: {
    color: COLORS.black,
    ...FONTS.body5,
    alignSelf: 'center',
    marginVertical: 2,
  }
})
