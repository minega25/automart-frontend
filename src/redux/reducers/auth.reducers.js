import * as auth from '../actions/types';

const initialState = {
  user: '',
  isAuthenticated: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case auth.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
      };
    case auth.LOGGED_OUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
