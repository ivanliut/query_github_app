import React from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../redux/user/actions';
import { ContentBlock } from '../../components/LoginPage';

const LoginPage = () => {
  const dispatch = useDispatch();
  const onLoginPress = (creds) => dispatch(loginUser.init(creds));

  return <ContentBlock onLoginPress={onLoginPress} />;
};

export default LoginPage;
