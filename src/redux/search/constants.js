import { createReduxAsyncType } from '../utils/reduxUtils';

export const TYPES = {
  SEARCH_FOR_REPO: createReduxAsyncType('SEARCH_FOR_REPO'),
};

// Redux store constants
export const search = 'search';
export const name = 'name';
export const fullName = 'full_name';
export const htmlUrl = 'html_url';
export const totalCount = 'total_count';
export const items = 'items';
export const repo = 'repo';
