import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

import { loginUser } from '../redux/user/actions';
import { selectIsUserLoggedIn } from '../redux/user/selectors';
import { STACKS } from '../navigation/constants';

const LoginPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsUserLoggedIn);

  useEffect(() => {
    dispatch(loginUser());
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

      }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 5
        }}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: STACKS.MainStack }],
          });
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
