import { ADD_CONTACT_SUCCESS, ADD_CONTACT_FAILED } from '../../types';

const initialState = {
  isLoading: true,
  data: {},
};

export const addContactReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case ADD_CONTACT_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
