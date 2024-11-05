import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNetworkAvailable } from '@/core/hooks';
import WebViewScreen from '@/webview/WebViewScreen.tsx';
import NoNetworkAvailableScreen from '@/shared/screens/NoNetworkAvailableScreen.tsx';
import AppTheme from '@/shared/theme/AppTheme.ts';

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
    <NavigationContainer theme={AppTheme}>
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
});

export default RootNavigator;
