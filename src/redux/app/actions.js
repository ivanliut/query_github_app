import { createReduxAction } from '../utils/reduxUtils';
import { TYPES } from './constants';

export const setFullScreenModal = createReduxAction(TYPES.SET_FULL_SCREEN_MODAL);
