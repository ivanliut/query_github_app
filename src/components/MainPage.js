import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserLogin } from '../redux/user/selectors';

const { width: screenWidth } = Dimensions.get('window');

const MainPage = () => {
  const login = useSelector(selectUserLogin);
  const [repo, onChangeRepo] = useState('');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello {login}, Let's find a repo!</Text>
      <TextInput
        style={{
          height: 40,
          width: screenWidth - 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 5,
          marginVertical: 10,
        }}
        autoCapitalize="none"
        placeholder="Token"
        onChangeText={(text) => onChangeRepo(text)}
        value={repo}
        maxLength={40}
      />
    </View>
  );
};

export default MainPage;
