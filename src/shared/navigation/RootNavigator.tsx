import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNetworkAvailable } from '@/core/hooks';
import WebViewScreen from '@/webview/WebViewScreen.tsx';
import NoNetworkAvailableScreen from '@/shared/screens/NoNetworkAvailableScreen.tsx';

const Stack = createNativeStackNavigator();

const RootNavigator = (): React.JSX.Element => {
  const [isNetworkAvailable, hasCheckedAvailability] = useNetworkAvailable();

  if (!hasCheckedAvailability) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!isNetworkAvailable) {
    return <NoNetworkAvailableScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WebView"
          component={WebViewScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'semibold',
    fontSize: 24,
  },
});

export default RootNavigator;
