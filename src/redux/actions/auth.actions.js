import { LOGIN_SUCCESS, LOGGED_OUT } from './types';
import { login } from '../../services/authService';

export const loginUser = (data) => ({
  type: LOGIN_SUCCESS,
  user: data,
});
export const logoutUser = () => ({
  type: LOGGED_OUT,
});

export const fetchUser = (email, password) => async (dispatch) => {
  try {
    const res = await login(email, password);
    dispatch(loginUser(res));
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => (dispatch) => {
  try {
    dispatch(logoutUser());
  } catch (error) {
    console.log(error);
  }
};
