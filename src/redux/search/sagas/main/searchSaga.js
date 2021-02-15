import { put } from 'redux-saga/effects';

import { searchForRepo } from '../../actions';
import {BASE_URL, PER_PAGE} from '../../../../constants';

export default function* searchSaga({ payload }) {
  const { repoName, page } = payload;

  if (!repoName) {
    return;
  }

  const response = yield fetch(`${BASE_URL}/search/repositories?q=${repoName}+in:name&page=${page}&per_page=${PER_PAGE}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) {
    const { total_count, items } = yield response.json();
    yield put(searchForRepo.success({ total_count, items }));
  }
}
