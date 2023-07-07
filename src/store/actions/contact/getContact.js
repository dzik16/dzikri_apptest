import { showError } from "../../../plugins";
import { getContact } from "../../../services/api/contact";
import {
	GET_CONTACT_SUCCESS,
	GET_CONTACT_FAILED,
	CONTACT_LOADING,
} from "../../types";

export const setContactSuccess = data => ({
	type: GET_CONTACT_SUCCESS,
	payload: data,
});

export const setContactLoading = loading => ({
	type: CONTACT_LOADING,
	payload: loading
})

export const setContactFailed = error => ({
	type: GET_CONTACT_FAILED,
	payload: error,
});

export const getContact = () => async dispatch => {
	dispatch(setContactLoading(true));
	await getContact()
		.then(res => {
			dispatch(setContactSuccess(res.data));
			dispatch(setContactLoading(false));
		})
		.catch(err => {
			dispatch(setContactFailed(err.response.message));
			dispatch(setContactLoading(false));
			showError(err.response.message);
		});
};