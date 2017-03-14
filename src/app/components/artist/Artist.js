import React from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import TrackList from '../track/TrackList'
import ArtistCard from './artist-card'
import Loading from '../loading/Loading'

class Artist extends React.Component {
  render() {
    const { props: { artistState } } = this
    return (
      <ScrollView style={styles.view}>
        <ArtistCard artist={artistState.artist} />
        {artistState.loadingTracks ? (
          <Loading/>
        ) : (
            <View>
              {artistState.tracks.length > 0 &&
                <TrackList tracks={artistState.tracks} />
              }
            </View>
          )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingBottom: 48,
    backgroundColor: '#222'
  }
});

const mapStateToProps = state => {
  return {
    artistState: state.artistState
  }
}

export default connect(mapStateToProps, null)(Artist)
