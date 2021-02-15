import { createReduxAsyncType } from '../utils/reduxUtils';

export const TYPES = {
  LOG_IN_USER: createReduxAsyncType('LOG_IN_USER'),
};

// Redux store constants
export const user = 'user';
export const userLogin = 'userLogin';
