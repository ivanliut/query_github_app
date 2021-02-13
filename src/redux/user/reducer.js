import { TYPES } from './constants';

export const userReducer = (state, action) => {
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
