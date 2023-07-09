import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../themes';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: COLORS.black
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonConfrmation: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonCancel: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: COLORS.danger,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: SIZES.h4,
    fontWeight: 'bold',
  },
});
