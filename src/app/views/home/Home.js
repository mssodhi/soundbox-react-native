import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

import { logout } from '../login/loginActions'
import { loadFavorites } from '../../../shared/components/favorites/favoritesActions'

class Home extends React.Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.error) {
      nextProps.onError(nextProps.error);
    }
  }
  render() {
    const { props: { data, loading, handleLogout, handleLoadFavorites } } = this
    
    if(data && !loading) {
      return (
        <View style={styles.container}>
          <View style={styles.instructions}>
            <Text style={styles.welcome}>{`${data.get('details').get('name')}, Welcome to React Native!`}</Text>
            <Icon.Button name="sign-out" backgroundColor="#d42828" onPress={handleLogout}>Logout</Icon.Button>
            <Icon.Button name="sign-out" backgroundColor="#d42828" onPress={handleLoadFavorites}>Load favorites</Icon.Button>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.instructions}>
            <Text style={styles.welcome}>Loading...</Text>  
          </View>
        </View>
      )
    }

  } /* end render */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    flex: .3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

const mapStateToProps = state => {
  return {
    data: state.login.get('data'),
    loading: state.login.get('loading'),
    error: state.login.get('error'),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => {
      dispatch(logout());
    },
    handleLoadFavorites: () => {
      console.log('1209');

      dispatch(loadFavorites('1209'));
    },
    onError: (text) => {
    	console.log('error');
      // dispatch(openModal(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
