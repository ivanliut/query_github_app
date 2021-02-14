import { TYPES, IS_LOGGED_IN } from './constants';

const initialState = {
  [IS_LOGGED_IN]: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOG_IN_USER:
      console.log('LOGIN STATE ', state);
      return { ...state };
    default:
      return {
        ...state,
      };
  }
};
