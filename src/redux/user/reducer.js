import { TYPES, IS_LOGGED_IN, userLogin } from './constants';

const initialState = {
  [IS_LOGGED_IN]: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOG_IN_USER:
      return { ...state };
    case TYPES.SAVE_USER_LOGIN:
      return { ...state, [userLogin]: action.payload };
    default:
      return {
        ...state,
      };
  }
};
