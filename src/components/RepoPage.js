import React from 'react';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/core';

const RepoPage = () => {
  const route = useRoute();

  return (
    <WebView
      useWebKit={true}
      source={{
        uri: route.params?.url,
      }}
    />
  );
};

export default RepoPage;
