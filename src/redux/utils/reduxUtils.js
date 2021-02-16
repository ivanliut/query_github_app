export const ASYNC_TYPES = {
  INIT: 'INIT',
  SUCCESS: 'SUCCESS',
  SUCCESS_REPLACE: 'SUCCESS_REPLACE',
};

export const createReduxAction = (type = '') => (payload = {}) => ({ type, payload });

export const createReduxAsyncAction = (type = '') => ({
  init: (payload = {}) => ({ type: type[ASYNC_TYPES.INIT], payload }),
  success: (payload = {}) => ({ type: type[ASYNC_TYPES.SUCCESS], payload }),
  success_replace: (payload = {}) => ({ type: type[ASYNC_TYPES.SUCCESS_REPLACE], payload }),
});

export const createReduxType = (TYPE) => `${TYPE}`;

export const createReduxAsyncType = (TYPE) => ({
  INIT: `${TYPE}_${ASYNC_TYPES.INIT}`,
  SUCCESS: `${TYPE}_${ASYNC_TYPES.SUCCESS}`,
  SUCCESS_REPLACE: `${TYPE}_${ASYNC_TYPES.SUCCESS_REPLACE}`,
});
