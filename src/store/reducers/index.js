import { combineReducers } from 'redux';
import {
  getContactReducers,
  getDetailContactReducers,
  addContactReducers,
  updateContactReducers,
  deleteContactReducers
} from './contact';
import { commonReducers } from './common';

const reducer = combineReducers({
  getContactReducers,
  getDetailContactReducers,
  addContactReducers,
  updateContactReducers,
  deleteContactReducers,
  commonReducers
});

export default reducer;
