import { showError } from "../../../plugins";
import { getDetailContactApi } from "../../../services/api/contact";
import {
  GET_DETAIL_CONTACT_SUCCESS,
  GET_DETAIL_CONTACT_FAILED,
} from "../../types";
import { setLoading } from "../common";

export const setDetailContactSuccess = data => ({
  type: GET_DETAIL_CONTACT_SUCCESS,
  payload: data,
});

export const setDetailContactFailed = error => ({
  type: GET_DETAIL_CONTACT_FAILED,
  payload: error,
});

export const getDetailDetailContact = (id) => async dispatch => {
  dispatch(setLoading(true))
  try {
    const res = await getDetailContactApi(id)
    dispatch(setDetailContactSuccess(res.data));
    dispatch(setLoading(false))
  } catch (err) {
    dispatch(setDetailContactFailed(err.message));
    dispatch(setLoading(false))
  }
};