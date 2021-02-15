import { createSelector } from 'reselect';
import { app, fullScreenModal, url } from './constants';

const selectAppReducer = (state) => state[app];

export const selectIsFullScreenModal = createSelector(selectAppReducer, (ar) => ar[fullScreenModal]);
export const selectWebViewUrl = createSelector(selectAppReducer, (ar) => ar[url]);
