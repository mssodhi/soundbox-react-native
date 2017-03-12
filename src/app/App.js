import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TabBarIOS, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'

import * as CONFIG from '../shared/config';
import TabsComponent from './components/tabs/TabsComponent'
import Login from './components/login/Login'

import { login } from './components/login/loginEffects'

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { dispatch, view } = this.props
    AsyncStorage.getItem("user").then((value) => {
      value = JSON.parse(value);
      if(value != null && value.fbId) {
        dispatch(login(value));
      }
    })
  }

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
