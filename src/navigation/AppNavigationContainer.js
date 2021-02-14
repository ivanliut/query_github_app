import React, { createRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import LoginStack from './stacks/LoginStack';
import MainStack from './stacks/MainStack';
import { STACKS } from './constants';

const Stack = createStackNavigator();
const rootNavigationRef = createRef();

const AppNavigationContainer = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer ref={rootNavigationRef}>
        <Stack.Navigator>
          <Stack.Screen name={STACKS.LoginStack} component={LoginStack} />
          <Stack.Screen name={STACKS.MainStack} component={MainStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AppNavigationContainer;
