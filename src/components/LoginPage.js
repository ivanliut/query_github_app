import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text } from 'react-native';

import { loginUser } from '../redux/user/actions';

const LoginPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginUser());
  }, []);

  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default LoginPage;
