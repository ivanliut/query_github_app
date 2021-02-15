import { userReducer } from './user/reducer';
import { searchReducer } from './search/reducer';
import { appReducer } from './app/reducer';

import { app } from './app/constants';
import { user } from './user/constants';
import { search } from './search/constants';

/**
 * Combine all separate reducers to Root-reducer;
 */
export default {
  [app]: appReducer,
  [user]: userReducer,
  [search]: searchReducer,
};
