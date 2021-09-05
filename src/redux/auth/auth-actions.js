import { createAction } from '@reduxjs/toolkit';

export const registerUserRequest = createAction('auth/registerUserRequest');
export const registerUserSuccess = createAction('auth/registerUserSuccess');
export const registerUserError = createAction('auth/registerUserError');

export const loginUserSuccess = createAction('auth/loginUserSuccess');
export const loginUserRequest = createAction('auth/loginUserRequest');
export const loginUserError = createAction('auth/loginUserError');

export const logoutUserSuccess = createAction('auth/logoutUserSuccess');
export const logoutUserRequest = createAction('auth/logoutUserRequest');
export const logoutUserError = createAction('auth/logoutUserError');

export const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
export const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
export const getCurrentUserError = createAction('auth/getCurrentUserError');
