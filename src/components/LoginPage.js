import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';

import { loginUser } from '../redux/user/actions';

const { width: screenWidth } = Dimensions.get('window');

const LoginPage = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

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
        onChangeText={(text) => setUsername(text)}
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
        onChangeText={(text) => setToken(text)}
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
        onPress={() => dispatch(loginUser.init({ username, token }))}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
