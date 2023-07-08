import {
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILED
} from "../../types";

const initialState = {
  dataDeleteContact: {},
  isError: null,
};

export const deleteContactReducers = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        isError: null,
        dataDeleteContact: action.payload,
      };

    case DELETE_CONTACT_FAILED:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
}