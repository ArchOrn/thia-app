import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNetworkAvailable } from '@/core/hooks';
import WebViewScreen from '@/webview/WebViewScreen.tsx';
import NoNetworkAvailableScreen from '@/shared/screens/NoNetworkAvailableScreen.tsx';
import AppTheme from '@/shared/theme/AppTheme.ts';

const Stack = createNativeStackNavigator();

const OnlineStack = (): React.JSX.Element => (
  <Stack.Navigator>
    <Stack.Screen
      name="WebView"
      component={WebViewScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const OfflineStack = (): React.JSX.Element => (
  <Stack.Navigator>
    <Stack.Screen
      name="NoNetworkAvailable"
      component={NoNetworkAvailableScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const RootNavigator = (): React.JSX.Element => {
  const [isNetworkAvailable] = useNetworkAvailable();

  return (
    <NavigationContainer theme={AppTheme}>
      {isNetworkAvailable ? <OnlineStack /> : <OfflineStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
