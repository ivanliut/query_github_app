import { createReduxAsyncAction } from '../utils/reduxUtils';
import { TYPES } from './constants';

export const loginUser = createReduxAsyncAction(TYPES.LOG_IN_USER);
