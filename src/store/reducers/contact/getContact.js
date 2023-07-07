import {
	GET_CONTACT_SUCCESS,
	GET_CONTACT_FAILED,
	CONTACT_LOADING
} from "../../types";

const initialState = {
	isLoading: false,
	isError: false,
	data: [],
};

export const getContactReducers = (state = initialState, action) => {
	switch (action.type) {
		case CONTACT_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		case GET_CONTACT_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			};
		case GET_CONTACT_FAILED:
			return {
				...state,
				isLoading: false,
				isError: true,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
}