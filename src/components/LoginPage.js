import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import { loginUser } from '../redux/user/actions';
import { selectIsUserLoggedIn } from '../redux/user/selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsUserLoggedIn);

  useEffect(() => {
    dispatch(loginUser());
  }, []);

  return (
    <View>
      {isLoggedIn ? <Text>Hello There!</Text> : <Text>Login</Text>}
    </View>
  );
};

export default LoginPage;
