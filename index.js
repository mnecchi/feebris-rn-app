/**
 * @format
 */

import React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/store';

const MyApp = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => MyApp);
