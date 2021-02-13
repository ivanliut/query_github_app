import { createReduxAction } from '../utils/reduxUtils';
import { TYPES } from './constants';

export const loginUser = createReduxAction(TYPES.LOG_IN_USER);
