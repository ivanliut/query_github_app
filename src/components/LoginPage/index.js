import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { loginUser } from '../../redux/user/actions';

import styles from './styles';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        maxLength={40}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize="none"
        placeholder="Token"
        onChangeText={(text) => setToken(text)}
        value={token}
        maxLength={40}
      />
      <TouchableOpacity style={styles.button} onPress={() => dispatch(loginUser.init({ username, token }))}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
