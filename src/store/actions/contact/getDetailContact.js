import { showError } from "../../../plugins";
import { getDetailContactApi } from "../../../services/api/contact";
import {
  GET_DETAIL_CONTACT_SUCCESS,
  GET_DETAIL_CONTACT_FAILED,
  CONTACT_LOADING,
} from "../../types";

export const setDetailContactSuccess = data => ({
  type: GET_DETAIL_CONTACT_SUCCESS,
  payload: data,
});

export const setDetailContactLoading = loading => ({
  type: CONTACT_LOADING,
  payload: loading
})

export const setDetailContactFailed = error => ({
  type: GET_DETAIL_CONTACT_FAILED,
  payload: error,
});

export const getDetailDetailContact = (id) => async dispatch => {
  // dispatch(setDetailContactLoading(true));
  await getDetailContactApi(id)
    .then(res => {
      dispatch(setDetailContactSuccess(res.data));
      console.log("jjjjjj", res.data);
      dispatch(setDetailContactLoading(false));
    })
    .catch(err => {
      dispatch(setDetailContactFailed(err.response.message));
      dispatch(setDetailContactLoading(false));
      showError("err.response.message");
    });
};