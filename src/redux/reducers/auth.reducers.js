import * as auth from "../types/auth.type";

const initialState = {
  user: "",
  isAuthenticated: false
};
const authReducer = (state = initialState, { type }) => {
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true
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
