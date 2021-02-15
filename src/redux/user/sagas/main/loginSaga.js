import { put } from 'redux-saga/effects';

import { navigationHelper } from '../../../../navigation/utils/navigationHelpers';
import { STACKS } from '../../../../navigation/constants';
import { loginUser } from '../../actions';
import { BASE_URL } from '../../../../constants';

export default function* loginSaga({ payload }) {
  const { username, token } = payload;

  const response = yield fetch(`${BASE_URL}/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(username + ':' + token)}`,
    },
  });

  if (response.status === 200) {
    const { login } = yield response.json();
    yield put(loginUser.success(login));

    navigationHelper.reset({
      index: 0,
      routes: [{ name: STACKS.MainStack }],
    });
  }
}
