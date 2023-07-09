import {
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAILED,
} from "../../types";

const initialState = {
  isError: false,
  dataContact: [],
};

export const getContactReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataContact: action.payload,
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