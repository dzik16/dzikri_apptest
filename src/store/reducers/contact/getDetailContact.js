import {
  GET_DETAIL_CONTACT_SUCCESS,
  GET_DETAIL_CONTACT_FAILED,
} from "../../types";

const initialState = {
  isError: false,
  errorMessage: '',
  dataDetailContact: {},
};

export const getDetailContactReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_CONTACT_SUCCESS:
      return {
        ...state,
        isError: false,
        dataDetailContact: action.payload,
      };
    case GET_DETAIL_CONTACT_FAILED:
      return {
        ...state,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}