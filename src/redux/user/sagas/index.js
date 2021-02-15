import { takeLatest } from 'redux-saga/effects';
import { TYPES } from '../constants';
import loginSaga from './main/loginSaga';

export default function* userSaga() {
  yield takeLatest(TYPES.LOG_IN_USER.INIT, loginSaga);
}
