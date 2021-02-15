import { takeLatest } from 'redux-saga/effects';
import { TYPES } from '../constants';
import searchSaga from './main/searchSaga';

export default function* searchForRepoSaga() {
  yield takeLatest(TYPES.SEARCH_FOR_REPO.INIT, searchSaga);
}
