import { createSelector } from 'reselect';
import { IS_LOGGED_IN } from './constants';

const selectUserReducer = (state) => state.user;

export const selectIsUserLoggedIn = createSelector(selectUserReducer, (ur) => ur[IS_LOGGED_IN]);
