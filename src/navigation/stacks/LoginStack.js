import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PAGES } from '../constants';
import LoginPage from '../../components/LoginPage';

const Stack = createStackNavigator();

const LoginStack = () => (
  <Stack.Navigator headerMode={'none'}>
    <Stack.Screen name={PAGES.LoginPage} component={LoginPage} />
  </Stack.Navigator>
);

export default LoginStack;
