import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/shared/reducers/configureStore'
import App from './src/app/App';

const store = configureStore();
const Main = () => <Provider store={store}><App /></Provider>

AppRegistry.registerComponent('soundboxNative', () => Main);
