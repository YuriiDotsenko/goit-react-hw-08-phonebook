import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  loginUserError,
  loginUserSuccess,
  logoutUserError,
  logoutUserSuccess,
  registerUserError,
  registerUserSuccess,
} from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerUserSuccess]: (_, { payload }) => payload.user,
  [loginUserSuccess]: (_, { payload }) => payload.user,
  [logoutUserSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerUserSuccess]: (_, { payload }) => payload.token,
  [loginUserSuccess]: (_, { payload }) => payload.token,
  [logoutUserSuccess]: () => null,
});

const userAuthorized = createReducer(false, {
  [registerUserSuccess]: () => true,
  [loginUserSuccess]: () => true,
  [logoutUserSuccess]: () => false,
  [getCurrentUserSuccess]: () => true,
});

const isRefreshing = createReducer(false, {
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
});

const setError = (_, { payload }) => {
  switch (payload) {
    case 400:
      return 'Invalid data entered, please, change your inputs!';
    case 500:
      return 'Oops, something went wrong :( Please, try again!';
    case 401:
      return 'You shouls authorize to perform this operation!';
    default:
      return 'Unknown error';
  }
};

const error = createReducer(null, {
  [registerUserError]: setError,
  [loginUserError]: setError,
  [logoutUserError]: setError,
  [getCurrentUserError]: setError,
});

const authReducer = combineReducers({
  user,
  token,
  error,
  userAuthorized,
  isRefreshing,
});

export default authReducer;
