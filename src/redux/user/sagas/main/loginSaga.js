import { put } from 'redux-saga/effects';

import { navigationHelper } from '../../../../navigation/utils/navigationHelpers';
import { STACKS } from '../../../../navigation/constants';
import { saveUserLogin } from '../../actions';

export default function* loginSaga({ payload }) {
  const { username, token } = payload;
  const response = yield fetch('https://api.github.com/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(username + ':' + token)}`,
    },
  });

  if (response.status === 200) {
    const { login } = yield response.json();
    yield put(saveUserLogin(login));

    navigationHelper.reset({
      index: 0,
      routes: [{ name: STACKS.MainStack }],
    });
  }
}
