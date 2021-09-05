import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions, {
  addContactError,
  addContactRequest,
  addContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  removeContactsError,
  removeContactsRequest,
  removeContactsSuccess,
} from './contacts-actions';

const entities = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,

  [addContactSuccess]: (state, action) => [...state, action.payload],

  [removeContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [removeContactsRequest]: () => true,
  [removeContactsSuccess]: () => false,
  [removeContactsError]: () => false,
});

const setError = (_, { payload }) => {
  switch (payload) {
    case 400:
      return 'Oops, something went wrong :( Please, try again!';
    case 401:
      return 'You shouls authorize to perform this operation!';
    case 404:
      return 'No data found for current user';
    case 500:
      return 'Oops, something went wrong :( Please, try again!';
    default:
      return 'Unknown error';
  }
};

const error = createReducer('', {
  [fetchContactsError]: setError,
  [fetchContactsRequest]: () => '',

  [addContactError]: setError,
  [addContactRequest]: () => '',

  [removeContactsError]: setError,
  [removeContactsRequest]: () => '',
});

const itemsReducer = combineReducers({
  entities,
  isLoading,
  error,
});

const filterReducer = createReducer('', {
  [actions.setUpFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
export default contactsReducer;
