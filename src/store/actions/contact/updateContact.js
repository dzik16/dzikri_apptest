import { showError, showSuccess } from '../../../plugins';
import { updateContactApi } from '../../../services/api/contact';
import { UPDATE_CONTACT_SUCCESS, UPDATE_CONTACT_FAILED } from '../../types';
import { setLoading } from '../common';
import { getDetailDetailContact } from './getDetailContact';

export const successUpdateContact = value => ({
  type: UPDATE_CONTACT_SUCCESS,
  payload: value,
});

export const failedUpdateContact = () => ({
  type: UPDATE_CONTACT_FAILED,
});

export const updateContact = (id, payload, navigation) => async dispatch => {
  console.log("payy : ", payload);
  dispatch(setLoading(true));
  try {
    const res = await updateContactApi(id, payload)
    dispatch(successUpdateContact(res.data));
    dispatch(getDetailDetailContact(id));
    showSuccess('Update Contact Success');
    dispatch(setLoading(false));
    navigation.goBack();
    console.log(res);
  } catch (err) {
    dispatch(failedUpdateContact());
    showError("Update Contact Error");
    dispatch(setLoading(false));
    navigation.goBack();
    console.log(err);
  }
};
