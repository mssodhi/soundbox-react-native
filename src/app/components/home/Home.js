import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import FavoritesList from '../favorites/FavoritesList'

class Home extends React.Component {
  render() {
    const { props: { favState } } = this
    return (
      <View style={styles.home}>
        {favState.loadingArtists ? (
          <View style={styles.container}>
            <Text style={styles.welcome}>Loading...</Text>
          </View>
        ) : (
            <FavoritesList artists={favState.artists} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
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
    favState: state.favorites
  }
}

export default connect(mapStateToProps, null)(Home)
