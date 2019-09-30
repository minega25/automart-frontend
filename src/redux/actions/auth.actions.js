import { LOGIN_SUCCESS, LOGGED_OUT } from "./types";

export const loginUser = () => {
  return {
    type: LOGIN_SUCCESS
  };
};
export const logoutUser = () => {
  return {
    type: LOGGED_OUT
  };
};

export const login = () => dispatch => {
  try {
    dispatch(loginUser());
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => dispatch => {
  try {
    dispatch(logoutUser());
  } catch (error) {
    console.log(error);
  }
};
