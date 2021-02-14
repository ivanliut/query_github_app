import { TYPES } from './constants';

const initialState = {};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SEARCH_FORT_REPO.SUCCESS:
      console.log(action);
      debugger;
      return { ...state, ...action.payload };
    default:
      return {
        ...state,
      };
  }
};
