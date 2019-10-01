import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = `${apiUrl}/auth/signin`;
const tokenKey = 'token';

export const login = async (email, password) => {
  try {
    const serverResponse = await http.post(apiEndpoint, { email, password });
    if (serverResponse) {
      toast.success(serverResponse.data.message);
      localStorage.setItem(tokenKey, serverResponse.data.data.token);
      return serverResponse;
    }
    const error = 'Provide correct username and password';
    throw error;
  } catch (error) {
    toast.error(error);
  }
};

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}
http.setJwt(getJwt());
export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
