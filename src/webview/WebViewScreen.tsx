import React from 'react';
import { WebView } from 'react-native-webview';

const styles = {
  container: {
    flex: 1,
  },
};

function WebViewScreen(): React.JSX.Element {
  return (
    <WebView
      source={{ uri: 'https://www.google.com' }}
      style={styles.container}
    />
  );
}

export default WebViewScreen;
