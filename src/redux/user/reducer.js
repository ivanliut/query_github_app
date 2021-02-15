import { TYPES, userLogin } from './constants';

const initialState = {
  [userLogin]: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOG_IN_USER.SUCCESS:
      return { ...state, [userLogin]: action.payload };
    default:
      return {
        ...state,
      };
  }
};
