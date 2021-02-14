import { userReducer } from './user/reducer';
import { searchReducer } from './search/reducer';

import { user } from './user/constants';
import { search } from './search/constants';

/**
 * Combine all separate reducers to Root-reducer;
 */
export default {
  [user]: userReducer,
  [search]: searchReducer,
};
