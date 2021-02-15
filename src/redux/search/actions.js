import { createReduxAsyncAction } from '../utils/reduxUtils';
import { TYPES } from './constants';

export const searchForRepo = createReduxAsyncAction(TYPES.SEARCH_FOR_REPO);
