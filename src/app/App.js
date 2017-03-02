
import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { connect } from 'react-redux'

import Home from './views/home/Home'
import Login from './views/login/Login'


class App extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.error) {
      nextProps.onError(nextProps.error);
    }
  }
  render() {
    const { props: { data } } = this
    if(data) {
      return (
        <View style={styles.container}>
          <Home />
        </View>
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
  }
});

const mapStateToProps = state => {
  return {
    data: state.login.get('data')
  }
}

export default connect(mapStateToProps) (App)
