import { TYPES, IS_LOGGED_IN, userLogin } from './constants';

const initialState = {
  [IS_LOGGED_IN]: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOG_IN_USER:
      console.log('LOGIN STATE ', state);
      return { ...state };
    case TYPES.SAVE_USER_LOGIN:
      console.log('SAVE_USER_LOGIN STATE ', state);
      console.log('SAVE_USER_LOGIN action ', action);
      debugger
      return { ...state, [userLogin]: action.payload };
    default:
      return {
        ...state,
      };
  }
};
