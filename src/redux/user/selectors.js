import { createSelector } from 'reselect';
import { IS_LOGGED_IN, userLogin, user } from './constants';

const selectUserReducer = (state) => state[user];

export const selectIsUserLoggedIn = createSelector(selectUserReducer, (ur) => ur[IS_LOGGED_IN]);

export const selectUserLogin = createSelector(selectUserReducer, (ur) => ur[userLogin]);
