import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

function WebViewScreen(): React.JSX.Element {
  return (
    <WebView
      userAgent="Thia mobile app"
      source={{ uri: 'https://www.google.com' }}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
