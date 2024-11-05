import React from 'react';
import { View, Text } from 'react-native';
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
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!isNetworkAvailable) {
    return (
      <Stack.Screen name="NoInternet" component={NoNetworkAvailableScreen} />
    );
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

export default RootNavigator;
