import { put } from 'redux-saga/effects';

import { searchForRepo } from '../../actions';

export default function* searchSaga({ payload }) {
  const response = yield fetch(`https://api.github.com/search/repositories?q=${payload}+in:name`, {
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
