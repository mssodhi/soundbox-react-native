import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

import { logout } from '../login/loginActions'
import FavoritesList from '../../../shared/components/favorites/FavoritesList'
import TrackList from '../../../shared/components/track-list/TrackList'

class Home extends React.Component {
  render() {
    const { props: { user, loading, favState, artists, tracks, handleLogout } } = this

    if(user && !loading && favState.get('tracks')) {      
      return (
        <View style={styles.container}>
          <View style={styles.instructions}>
            <Text style={styles.welcome}>{`${user.get('details').get('name')}, Welcome to React Native!`}</Text>
            <Icon.Button name="sign-out" backgroundColor="#d42828" onPress={handleLogout}>Logout</Icon.Button>
          </View>
          
          <TrackList tracks={favState.get('tracks')} />
          
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
    user: state.login.get('data'),
    favState: state.favorites,
    artists: state.favorites.artists,
    tracks: state.favorites.get('tracks'),
    loading: state.favorites.get('loading'),
    error: state.login.get('error'),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => {
      dispatch(logout());
    },
    onError: (text) => {
    	console.log('error');
      // dispatch(openModal(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
