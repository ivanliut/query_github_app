import { all } from 'redux-saga/effects';

import userSaga from './user/sagas';

export default function* rootSaga() {
  const sagas = [userSaga()];
  yield all(sagas);
}
