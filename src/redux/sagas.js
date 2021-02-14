import { all } from 'redux-saga/effects';

import userSaga from './user/sagas';
import searchForRepoSaga from './search/sagas';

export default function* rootSaga() {
  const sagas = [userSaga(), searchForRepoSaga()];
  yield all(sagas);
}
