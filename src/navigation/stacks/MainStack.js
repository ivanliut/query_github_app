import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PAGES } from '../constants';
import MainPage from '../../containers/MainPage';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator headerMode={'screen'}>
    <Stack.Screen name={PAGES.MainPage} component={MainPage} />
  </Stack.Navigator>
);

export default MainStack;
