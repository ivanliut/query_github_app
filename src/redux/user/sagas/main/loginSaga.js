import { navigationHelper } from '../../../../navigation/utils/navigationHelpers';
import { STACKS } from '../../../../navigation/constants';

export default function* loginSaga({ payload }) {
  const { username, token } = payload;
  console.log('LOG IN request has been sent', { username, token });
  const response = yield fetch('https://api.github.com/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(username + ':' + token)}`,
    },
  });

  if (response.status === 200) {
    console.log(response);
    debugger;
    navigationHelper.reset({
      index: 0,
      routes: [{ name: STACKS.MainStack }],
    });

    const userInfo = yield response.json();
  }
}
