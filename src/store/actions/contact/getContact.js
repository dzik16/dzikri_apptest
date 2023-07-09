import { showError } from "../../../plugins";
import { getContactApi } from "../../../services/api/contact";
import {
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAILED,
} from "../../types";
import { setLoading } from "../common";

export const setContactSuccess = data => ({
  type: GET_CONTACT_SUCCESS,
  payload: data,
});

export const setContactFailed = error => ({
  type: GET_CONTACT_FAILED,
  payload: error,
});

export const getContact = () => async dispatch => {
  dispatch(setLoading(true));
  try {
    const res = await getContactApi()
    dispatch(setContactSuccess(res.data));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setContactFailed(err.message));
    dispatch(setLoading(false));
    showError("Get Contact Failed");
  }
};