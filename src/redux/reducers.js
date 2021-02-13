import { userReducer } from './user/reducer';

/**
 * Combine all separate reducers to Root-reducer;
 */
export default {
  user: userReducer,
};
