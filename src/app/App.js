
import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TabBarIOS } from 'react-native';
import { connect } from 'react-redux'

import TabsComponent from '../shared/components/tabs/TabsComponent'
import Login from './views/login/Login'


class App extends Component { 
  
  render() {
    const { props: { data } } = this
    if(data) {
      return (
        <TabsComponent />
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
