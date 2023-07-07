import { showError, showSuccess } from '../../../plugins';
import { addContact } from '../../../services/api/contact';
import { ADD_CONTACT_SUCCESS, ADD_CONTACT_FAILED } from '../../types';
import { setLoading } from '../common';

export const setAddContactSuccess = value => ({
  type: ADD_CONTACT_SUCCESS,
  payload: value,
});

export const setAddContactFailed = () => ({
  type: ADD_CONTACT_FAILED,
});

export const addContact = (payload, navigation) => async dispatch => {
  dispatch(setLoading(true));
  console.log('Kirim Data Contact', payload);
  await addContact(payload)
    .then(res => {
      dispatch(setAddContactSuccess(res.data));
      dispatch(setLoading(false));
      showSuccess('Tambah Contact Success');
      navigation.navigate('Home');
      console.log('ADD CONTACT', res);
    })
    .catch(err => {
      dispatch(setAddContactFailed());
      dispatch(setLoading(false));
      showError(err.response.message);
      console.log('ADD PRODUK FAILED', err);
    });
};