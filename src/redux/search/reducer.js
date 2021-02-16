import { TYPES, totalCount, items } from './constants';

const initialState = {
  [totalCount]: 0,
  [items]: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SEARCH_FOR_REPO.SUCCESS:
      return {
        ...state,
        [totalCount]: action.payload[totalCount],
        [items]: [...state[items], ...action.payload[items]],
      };
    case TYPES.SEARCH_FOR_REPO.SUCCESS_REPLACE:
      return {
        ...state,
        [totalCount]: action.payload[totalCount],
        [items]: [...action.payload[items]],
      };
    default:
      return {
        ...state,
      };
  }
};
