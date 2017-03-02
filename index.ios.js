import { AppRegistry, View } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/shared/reducers/configureStore'
import App from './src/app/App';

const store = configureStore();

class Main extends Component {
  render() {
  	return (
  	<Provider store={store}><App /></Provider>
  	);
  }
}

AppRegistry.registerComponent('soundboxNative', () => Main);
