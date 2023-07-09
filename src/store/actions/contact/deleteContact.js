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

export const deleteContact = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const ress = await deleteContactApi(id)
    dispatch(deleteContactSuccess(response.data));
    dispatch(setLoading(false));
    showSuccess('Delete Success');
  } catch (err) {
    dispatch(deleteContactFailed(err.message));
    dispatch(setLoading(false));
    showError("Delete failed");
  }
};