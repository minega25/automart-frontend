import * as auth from "../types/auth.type";
import initialState from "../initialState";
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      };
    case "LOGGED_OUT":
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default authReducer;
