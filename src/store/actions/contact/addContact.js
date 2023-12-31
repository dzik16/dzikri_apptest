import { showSuccess } from '../../../plugins';
import { addContactApi } from '../../../services/api/contact';
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
  try {
    const res = await addContactApi(payload)
    dispatch(setAddContactSuccess(res.data));
    dispatch(setLoading(false));
    showSuccess('Tambah Contact Success');
    navigation.replace("HomeScreen");
    console.log('ADD CONTACT', res);
  } catch (err) {
    dispatch(setAddContactFailed());
    dispatch(setLoading(false));
    navigation.replace("HomeScreen");
  }
};
