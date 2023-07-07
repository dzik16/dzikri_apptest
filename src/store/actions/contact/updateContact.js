import { showError, showSuccess } from '../../../plugins';
import { updateContact } from '../../../services/api/contact';
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

export const upDataProduct = (id, payload, navigation) => async dispatch => {
  dispatch(setLoading(true));
  await updateContact(id, payload)
    .then(res => {
      dispatch(successUpdateContact(res.data));
      dispatch(setLoading(false));
      dispatch(getDetailDetailContact(id));
      navigation.goBack();
      showSuccess('Update Contact Success');
    })
    .catch(err => {
      dispatch(failedUpdateContact());
      dispatch(setLoading(false));
      showError(err.response.message);
    });
};
