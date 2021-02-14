import { put } from 'redux-saga/effects';

import { searchForRepo } from '../../actions';

export default function* searchSaga({ payload }) {
  const { repoName, page } = payload;
  const response = yield fetch(
    `https://api.github.com/search/repositories?q=${repoName}+in:name&page=${page}&per_page=15`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  if (response.status === 200) {
    const { total_count, items } = yield response.json();
    yield put(searchForRepo.success({ total_count, items }));
  }
}
