import { createSelector } from 'reselect';
import { search, items, totalCount } from './constants';

const selectSearchReducer = (state) => state[search];

export const selectSearchItems = createSelector(selectSearchReducer, (sr) => sr[items]);

export const selectSearchTotalCount = createSelector(selectSearchReducer, (sr) => sr[totalCount]);
