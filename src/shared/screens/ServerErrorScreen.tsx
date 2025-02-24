import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import call from '../../assets/images/call.png';
import info from '../../assets/images/info.png';
import logo from '../../assets/images/logo.png';
import networkImage from '../../assets/images/network.png';

const NoNetworkAvailableScreen = (): React.JSX.Element => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'top',
    },
    scrollView: {
      alignItems: 'center',
    },
    header: {
      alignItems: 'center',
      backgroundColor: colors.dark,
      height: 60,
      width: '100%',
      justifyContent: 'center',
    },
    logo: {
      height: 35,
      tintColor: 'white',
    },
    network: {
      height: 155,
      marginBottom: 10,
      marginTop: 50,
    },
    headerTitle: {
      color: colors.dark,
      fontFamily: 'Krub-SemiBold',
      fontSize: 30,
      textAlign: 'center',
    },
    headerText: {
      color: colors.dark,
      fontFamily: 'Inter-Medium',
      fontSize: 18,
      paddingHorizontal: 40,
      textAlign: 'center',
    },
    subContainer: {
      alignItems: 'stretch',
      flex: 1,
      gap: 20,
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    info: {
      backgroundColor: '#edfbfd',
      borderColor: '#dbf7fb',
      borderRadius: 10,
      borderWidth: 1,
      flex: 1,
      gap: 16,
      padding: 20,
    },
    infoText: {
      color: colors.dark,
      fontFamily: 'Inter-SemiBold',
      fontSize: 17,
      lineHeight: 24,
      textAlign: 'center',
    },
    call: {
      alignItems: 'center',
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'center',
    },
    callBox: {
      alignItems: 'center',
      backgroundColor: '#d4f5fa',
      borderRadius: 10,
      flexDirection: 'row',
      gap: 10,
      height: 50,
      justifyContent: 'center',
      width: 130,
    },
    callText: {
      color: colors.dark,
      fontFamily: 'Inter-Bold',
      fontSize: 20,
      textAlign: 'center',
    },
    callSubText: {
      color: colors.dark,
      fontFamily: 'Inter-Medium',
      fontSize: 14,
      lineHeight: 22,
      textAlign: 'center',
    },
    callOr: {
      color: colors.dark,
      fontFamily: 'Inter-Medium',
      fontSize: 16,
      textAlign: 'center',
    },
    callImage: {
      width: 22,
      height: 22,
      tintColor: colors.dark,
    },
    warning: {
      alignItems: 'center',
      backgroundColor: '#fffbec',
      borderColor: '#ffe085',
      borderRadius: 10,
      borderWidth: 1,
      flex: 1,
      gap: 8,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    warningText: {
      color: colors.dark,
      fontFamily: 'Inter-SemiBold',
      fontSize: 14,
      lineHeight: 22,
      textAlign: 'center',
    },
    warningImage: {
      width: 22,
      height: 22,
      tintColor: colors.dark,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Image
            source={logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Image
          source={networkImage}
          style={styles.network}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.headerTitle}>
            Oups!
          </Text>
          <Text style={styles.headerText}>
            ThIA Suivi est temporairement indisponible. Nous mettons tout en oeuvre pour rétablir
            son fonctionnement dans les plus brefs délais.
          </Text>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.info}>
            <Text style={styles.infoText}>
              En attendant, nous souhaitons vous rappeler que vous n'êtes pas seul.
              Si vous avez besoin d'une aide immédiate, contactez sans attendre le :
            </Text>
            <View style={styles.call}>
              <View style={styles.callBox}>
                <Image
                  source={call}
                  style={styles.callImage}
                  resizeMode="contain"
                />
                <Text style={styles.callText}>
                  15
                </Text>
              </View>
              <Text style={styles.callOr}>
                ou
              </Text>
              <View style={styles.callBox}>
                <Image
                  source={call}
                  style={styles.callImage}
                  resizeMode="contain"
                />
                <Text style={styles.callText}>
                  3114
                </Text>
              </View>
            </View>
            <Text style={styles.callSubText}>
              Ce sont des lignes accessibles 24h/24h, pour signaler votre état et recevoir
              un soutien immédiat
            </Text>
          </View>
          <View style={styles.warning}>
            <Image
              source={info}
              style={styles.warningImage}
              resizeMode="contain"
            />
            <Text style={styles.warningText}>
              Si vous sentez que votre situation nécessite un rendez-vous plus rapide, contactez
              votre psychiatre qui saura vous écouter et vous accompagner.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NoNetworkAvailableScreen;
