import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';

import { loginUser } from '../redux/user/actions';

const { width: screenWidth } = Dimensions.get('window');

const LoginPage = ({ navigation }) => {
  const dispatch = useDispatch();

  const [username, onChangeUsername] = useState('');
  const [token, onChangeToken] = useState('');

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
      <TextInput
        style={{
          height: 40,
          width: screenWidth - 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 5,
          marginBottom: 5,
        }}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Username"
        onChangeText={(text) => onChangeUsername(text)}
        value={username}
        maxLength={40}
      />
      <TextInput
        style={{
          height: 40,
          width: screenWidth - 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 5,
          marginBottom: 5,
        }}
        secureTextEntry={true}
        autoCapitalize="none"
        placeholder="Token"
        onChangeText={(text) => onChangeToken(text)}
        value={token}
        maxLength={40}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 5,
        }}
        onPress={() => dispatch(loginUser({ username, token }))}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
