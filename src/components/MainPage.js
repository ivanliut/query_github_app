import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {selectUserLogin} from "../redux/user/selectors";

const MainPage = () => {
    const login = useSelector(selectUserLogin);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello {login}</Text>
    </View>
  );
};

export default MainPage;
