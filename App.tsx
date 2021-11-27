import { StatusBar } from "react-native";
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { Provider } from 'react-redux'
import store from "./store";
export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar  barStyle="light-content"/>
      </SafeAreaProvider>
      </Provider>
    );
  }
}
