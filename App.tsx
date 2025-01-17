import React from 'react';

import RootNavigator from '@/shared/navigation/RootNavigator.tsx';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://8a242f36b1d70439921e97bed60b757f@o4507413815361536.ingest.de.sentry.io/4507413818703952',

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

function App(): React.JSX.Element {
  return <RootNavigator />;
}

export default App;
