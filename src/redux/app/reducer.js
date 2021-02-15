import { TYPES, fullScreenModal, url } from './constants';

const initialState = {
  [fullScreenModal]: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_FULL_SCREEN_MODAL:
      return {
        ...state,
        [fullScreenModal]: action.payload.isFullScreen,
        [url]: action.payload[url],
      };
    default:
      return {
        ...state,
      };
  }
};
