import { combineReducers } from 'redux';
import {
  getContactReducers,
  getDetailContactReducers,
  addContactReducers,
  updateContactReducers,
  deleteContactReducers
} from './contact';

const reducer = combineReducers({
  getContactReducers,
  getDetailContactReducers,
  addContactReducers,
  updateContactReducers,
  deleteContactReducers
});

export default reducer;
