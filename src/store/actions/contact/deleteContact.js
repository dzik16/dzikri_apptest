import { deleteContactApi } from "../../../services/api/contact";
import { showError, showSuccess } from "../../../plugins";
import { setLoading } from "../common";
import {
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILED
} from "../../types";

export const deleteContactSuccess = (data) => ({
  type: DELETE_CONTACT_SUCCESS,
  payload: data,
});

export const deleteContactFailed = (error) => ({
  type: DELETE_CONTACT_FAILED,
  payload: error,
});

export const deleteContact = (id, navigation) => async (dispatch) => {
  dispatch(setLoading(true));
  await deleteContactApi(id)
    .then((response) => {
      dispatch(deleteContactSuccess(response.data));
      showSuccess('Home');
      dispatch(setLoading(false));
      navigation.goBack();
    }).catch(err => {
      dispatch(deleteContactFailed(err.response.message));
      showError(err.response.message);
      dispatch(setLoading(false));
    });
};