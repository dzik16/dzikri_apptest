import { UPDATE_CONTACT_SUCCESS, UPDATE_CONTACT_FAILED } from "../../types";

const initialState = {
  isLoading: true,
  data: {},
};

export const updateContactReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case UPDATE_CONTACT_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
}