import { UPDATE_CONTACT_SUCCESS, UPDATE_CONTACT_FAILED } from "../../types";

const initialState = {
  // isLoading: true,
  dataUpdateContact: {},
};

export const updateContactReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        dataUpdateContact: action.payload,
      };

    case UPDATE_CONTACT_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
}