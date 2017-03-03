import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TabBarIOS } from 'react-native';
import { connect } from 'react-redux'

import * as CONFIG from '../shared/config';
import TabsComponent from './components/tabs/TabsComponent'
import Login from './components/login/Login'

class App extends Component {

  render() {
    const { props: { loginState } } = this
    if (loginState.user) {
      return (
        <TabsComponent style={styles.root} />
      );
    } else {
      return (
        <View style={styles.container}>
          <Login />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  root: {
    height: CONFIG.SCREEN.HEIGHT,
    width: CONFIG.SCREEN.WIDTH,
    backgroundColor: '#F5FCFF',
  }
})

const mapStateToProps = state => {
  return {
    loginState: state.login
  }
}

export default connect(mapStateToProps)(App)
