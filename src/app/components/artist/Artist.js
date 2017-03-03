import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import TrackList from '../track/TrackList'

class Artist extends React.Component {
  render() {
    const { props: { artistState } } = this
    return (
      <View style={styles.home}>
        {artistState.loadingTracks ? (
          <View style={styles.container}>
            <Text style={styles.welcome}>Loading...</Text>
          </View>
        ) : (
            <TrackList tracks={artistState.tracks} />
          )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'column',
    top: 44
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
    artistState: state.artistState
  }
}

export default connect(mapStateToProps, null)(Artist)
