import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

export function useNetworkAvailable() {
  const [isNetworkAvailable, setIsNetworkAvailable] = useState(false);
  const [hasCheckedAvailability, setHasCheckedAvailability] = useState(false);

  useEffect(() => {
    return NetInfo.addEventListener(event => {
      if (typeof event.isInternetReachable === 'boolean') {
        setIsNetworkAvailable(event.isConnected && event.isInternetReachable);
        setHasCheckedAvailability(true);
      }
    });
  });

  return [isNetworkAvailable, hasCheckedAvailability];
}
