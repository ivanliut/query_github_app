import { createReduxType } from '../utils/reduxUtils';

export const TYPES = {
  SET_FULL_SCREEN_MODAL: createReduxType('SET_FULL_SCREEN_MODAL'),
};

/**
 * Redux store constants;
 */
export const app = 'app';
export const fullScreenModal = 'fullScreenModal';
export const url = 'url';
