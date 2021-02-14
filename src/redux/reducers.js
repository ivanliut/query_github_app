import { userReducer } from './user/reducer';
import { user } from './user/constants';

/**
 * Combine all separate reducers to Root-reducer;
 */
export default {
  [user]: userReducer,
};
