import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

import { logout } from '../login/loginActions'
import TrackList from '../../../shared/components/track/TrackList'
import FavoritesList from '../../../shared/components/favorites/FavoritesList'

class Home extends React.Component {
  render() {
    const { props: { user, favState, handleLogout } } = this
    if (user && !favState.loadingArtists && !favState.loadingArtists) {
      return (
        <View style={styles.home}>
          <View style={styles.container}>
            <Text style={styles.welcome}>{`${user.get('details').get('name')}, Welcome to React Native!`}</Text>
            <Icon.Button name="sign-out" backgroundColor="#d42828" onPress={handleLogout}>Logout</Icon.Button>
          </View>
          {favState.tracks.length > 0 && 
            <TrackList tracks={favState.tracks} />
          }
          {/*{favState.artists.length > 0 &&
            <FavoritesList artists={favState.artists} />
          }*/}
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
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  container: {
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
