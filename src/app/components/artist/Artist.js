import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import TrackList from '../track/TrackList'
import ArtistCard from './artist-card'

class Artist extends React.Component {
  render() {
    const { props: { artistState } } = this
    return (
      <View style={styles.view}>
        <ArtistCard artist={artistState.artist}/>
        {artistState.loadingTracks ? (
          <View style={styles.container}>
            <Text style={styles.loading}>Loading...</Text>
          </View>
        ) : (
            <TrackList tracks={artistState.tracks} />
          )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 64,
    paddingBottom: 48,
    backgroundColor: '#222'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  }
});

const mapStateToProps = state => {
  return {
    artistState: state.artistState
  }
}

export default connect(mapStateToProps, null)(Artist)
