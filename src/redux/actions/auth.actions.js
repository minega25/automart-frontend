import { toast } from "react-toastify";
import { LOGIN_SUCCESS, LOGGED_OUT } from "./types";
import http from "../../services/httpService";
import { apiUrl } from "../../config.json";

const registerapiEndpoint = `${apiUrl}/auth/signup`;
const loginapiEndpoint = `${apiUrl}/auth/signin`;

export const loginUser = payload => {
  return {
    type: LOGIN_SUCCESS,
    user: payload
  };
};
export const signUpUser = payload => {
  return {
    type: "SIGNUP_SUCCESS",
    user: payload
  };
};
export const logoutUser = () => {
  return {
    type: LOGGED_OUT
  };
};

export const signup = user => async dispatch => {
  try {
    const { data } = await http.post(registerapiEndpoint, {
      first_name: user.first_name,
      last_name: user.last_name,
      address: user.address,
      password: user.password,
      email: user.email
    });
    localStorage.setItem("token", data.data.token);
    toast.success(data.message);
    dispatch(signUpUser(data));
  } catch (error) {
    toast.error(error);
  }
};

export const signin = user => async dispatch => {
  try {
    const { data } = await http.post(loginapiEndpoint, {
      email: user.email,
      password: user.password
    });
    localStorage.setItem("token", data.data.token);
    toast.success(data.message);
    dispatch(loginUser(data));
  } catch (error) {
    toast.error(error);
  }
};
