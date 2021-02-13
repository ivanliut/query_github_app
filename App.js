import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import store from './src/redux/store'
import LoginPage from "./src/components/LoginPage";

export default function App() {
  return (
      <Provider store={store}>
        <View style={styles.container}>
          <LoginPage />
          <Text>GitHub Query</Text>
        </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
