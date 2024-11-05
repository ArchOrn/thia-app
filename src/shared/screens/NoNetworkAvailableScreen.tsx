import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const NoNetworkAvailableScreen = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>No network available</Text>
    </SafeAreaView>
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

export default NoNetworkAvailableScreen;
