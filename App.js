import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import store from './src/redux/store'
import AppNavigationContainer from './src/navigation/AppNavigationContainer';

export default function App() {
  return (
      <SafeAreaProvider>
          <Provider store={store}>
              <AppNavigationContainer />
          </Provider>
      </SafeAreaProvider>
  );
}