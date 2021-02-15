export const ASYNC_TYPES = {
  INIT: 'INIT',
  SUCCESS: 'SUCCESS',
};

export const createReduxAction = (type = '') => (payload = {}) => ({ type, payload });

export const createReduxAsyncAction = (type = '') => ({
  init: (payload = {}) => ({ type: type[ASYNC_TYPES.INIT], payload }),
  success: (payload = {}) => ({ type: type[ASYNC_TYPES.SUCCESS], payload }),
});

export const createReduxType = (TYPE) => `${TYPE}`;

export const createReduxAsyncType = (TYPE) => ({
  INIT: `${TYPE}_${ASYNC_TYPES.INIT}`,
  SUCCESS: `${TYPE}_${ASYNC_TYPES.SUCCESS}`,
});
