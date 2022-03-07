import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppNavigation from './navigation/TabNavigations';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
