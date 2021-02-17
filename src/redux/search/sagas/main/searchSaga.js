import { put } from 'redux-saga/effects';

import { searchForRepo } from '../../actions';
import { BASE_URL, PER_PAGE } from '../../../../constants';

export default function* searchSaga({ payload }) {
  const {
    repoName,
    page,
    sortByStars = false,
    sortByForks = false,
    order = 'asc',
    isFilteringChanged = false,
  } = payload;

  if (!repoName) {
    return;
  }
  let searchUrl = `${BASE_URL}/search/repositories?q=${encodeURIComponent(
    repoName,
  )}+in:name&page=${page}&per_page=${PER_PAGE}`;

  if (sortByStars) {
    searchUrl += `&sort=stars&order=${order}`;
  } else if (sortByForks) {
    searchUrl += `&sort=forks&order=${order}`;
  }

  const response = yield fetch(searchUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) {
    const { total_count, items } = yield response.json();
    if (isFilteringChanged) {
      yield put(searchForRepo.success_replace({ total_count, items }));
      return;
    }

    yield put(searchForRepo.success({ total_count, items }));
  }
}
