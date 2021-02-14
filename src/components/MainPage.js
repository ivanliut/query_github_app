import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserLogin } from '../redux/user/selectors';
import { searchForRepo } from '../redux/search/actions';

const { width: screenWidth } = Dimensions.get('window');

const MainPage = () => {
  const dispatch = useDispatch();

  const login = useSelector(selectUserLogin);
  const [repoName, onChangeRepoName] = useState('');

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
        placeholder="repo name"
        onChangeText={(text) => onChangeRepoName(text)}
        value={repoName}
        maxLength={30}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 5,
        }}
        onPress={() => {
          dispatch(searchForRepo.init(repoName));
        }}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainPage;
