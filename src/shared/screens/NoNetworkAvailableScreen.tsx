import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const NoNetworkAvailableScreen = (): React.JSX.Element => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.primary,
      fontSize: 24,
      fontFamily: 'Krub-SemiBold',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>No network available</Text>
    </SafeAreaView>
  );
};

export default NoNetworkAvailableScreen;
