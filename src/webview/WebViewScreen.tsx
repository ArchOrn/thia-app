import React, { useEffect, useState } from 'react';
import { Linking, Modal, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
import DeviceInfo from 'react-native-device-info';
import { useTheme } from '@react-navigation/native';
import remoteConfig from '@react-native-firebase/remote-config';
import semver from 'semver';

function WebViewScreen(): React.JSX.Element {
  const [forceUpdate, setForceUpdate] = useState(false);
  const [updateUrl, setUpdateUrl] = useState('');

  useEffect(() => {
    const checkForUpdate = async () => {
      try {
        await remoteConfig().setConfigSettings({
          minimumFetchIntervalMillis: 4000,
        });

        await remoteConfig().fetchAndActivate();
        const mandatoryVersion = remoteConfig().getValue('mandatory_version').asString();
        const storeUrl = Platform.OS === 'ios'
          ? remoteConfig().getValue('ios_store_url').asString()
          : remoteConfig().getValue('android_store_url').asString();

        const currentVersion = DeviceInfo.getVersion();
        if (semver.lt(semver.coerce(currentVersion), semver.coerce(mandatoryVersion))) {
          setForceUpdate(true);
          setUpdateUrl(storeUrl);
        } else {
          setForceUpdate(false);
        }
      } catch (error) {
        console.error('Error while checking for update', error);
      }
    };

    checkForUpdate();
  }, []);

const { colors } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  modalContent: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  updateButton: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

  return (
    <View style={styles.container}>
      <WebView
        userAgent="Thia mobile app"
        source={{ uri: 'https://www.google.com' }}
        style={styles.webview}
      />

      <Modal
        visible={forceUpdate}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Mise à jour requise</Text>
            <Text style={styles.modalMessage}>
              Une nouvelle version de l'application est disponible. Veuillez mettre à jour pour continuer.
            </Text>
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => Linking.openURL(updateUrl)}
            >
              <Text style={styles.updateButtonText}>Mettre à jour</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default WebViewScreen;
