import React from 'react';
import { Linking } from 'react-native';

import RootNavigator from '@/shared/navigation/RootNavigator.tsx';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://8a242f36b1d70439921e97bed60b757f@o4507413815361536.ingest.de.sentry.io/4507413818703952',
});

class App extends React.Component {
  componentDidMount() {
    Linking.getInitialURL().then((url) => {
      if (url) {
        Linking.canOpenURL(url).then((supported) => {
          if (supported) {
            this.handleUrl(url);
          }
        });
      }
    })
    .catch((err) => {
      console.warn('An error occurred', err);
    });

    Linking.addEventListener('url', (event) => {
      Linking.canOpenURL(event.url).then((supported) => {
        if (supported) {
           this.handleUrl(event.url);
        }
      });
    });
  }

  componentWillUnmount () {
    Linking.removeEventListener('url', this.handleUrl);
  }

  handleUrl (url) {
    // do something, navigate in your router
  }

  render() {
    return <RootNavigator />;
  }
}

export default App;
