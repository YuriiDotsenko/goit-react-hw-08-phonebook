import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
  token,
} from './../../services/api';
import {
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  loginUserError,
  loginUserRequest,
  loginUserSuccess,
  logoutUserError,
  logoutUserRequest,
  logoutUserSuccess,
  registerUserError,
  registerUserRequest,
  registerUserSuccess,
} from './auth-actions';

export const registerUserOperation = userData => async dispatch => {
  dispatch(registerUserRequest());

  try {
    const answer = await registerUser(userData);
    dispatch(registerUserSuccess(answer.data));
    token.set(answer.data.token);
  } catch (error) {
    dispatch(registerUserError(error.response.status));
  }
};

export const loginUserOperation = userData => async dispatch => {
  dispatch(loginUserRequest());

  try {
    const answer = await loginUser(userData);

    dispatch(loginUserSuccess(answer.data));
    token.set(answer.data.token);
  } catch (error) {
    dispatch(loginUserError(error.response.status));
  }
};

export const logoutUserOperation = () => async dispatch => {
  dispatch(logoutUserRequest());

  try {
    await logoutUser();

    dispatch(logoutUserSuccess());
    token.reset();
  } catch (error) {
    dispatch(logoutUserError(error.response.status));
  }
};

export const getCurrentUserOperation = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  try {
    const response = await getCurrentUser();

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.response.status));
  }
};
