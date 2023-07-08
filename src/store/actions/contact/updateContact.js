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

export const updateContact = (id, payload) => async dispatch => {
  // dispatch(setLoading(true));
  await updateContactApi(id, payload)
    .then(res => {
      dispatch(successUpdateContact(res));
      // dispatch(setLoading(false));
      dispatch(getDetailDetailContact(id));
      // navigation.goBack();
      showSuccess('Update Contact Success');
    })
    .catch(err => {
      dispatch(failedUpdateContact());
      // dispatch(setLoading(false));
      showError("Update Contact Error");
    });
};
