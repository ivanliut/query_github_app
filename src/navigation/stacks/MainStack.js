import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PAGES } from '../constants';
import MainPage from '../../components/MainPage';
import RepoPage from '../../components/RepoPage';
import HeaderLeft from '../../components/HeaderLeft';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator headerMode={'screen'}>
    <Stack.Screen name={PAGES.MainPage} component={MainPage} />
    <Stack.Screen
      name={PAGES.RepoPage}
      component={RepoPage}
      options={({ navigation }) => ({
        headerLeft: () => <HeaderLeft onPress={navigation.goBack} />,
      })}
    />
  </Stack.Navigator>
);

export default MainStack;
