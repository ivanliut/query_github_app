import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { texts } from '../../localizations';

import { noop } from '../../utils/noop';

import styles from './styles';

const ContentBlock = ({ onLoginPress = noop }) => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={texts.username}
        onChangeText={(text) => setUsername(text)}
        value={username}
        maxLength={40}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize="none"
        placeholder={texts.token}
        onChangeText={(text) => setToken(text)}
        value={token}
        maxLength={40}
      />
      <TouchableOpacity style={styles.button} onPress={() => onLoginPress({ username, token })}>
        <Text>{texts.login}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContentBlock;
