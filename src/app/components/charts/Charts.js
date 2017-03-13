import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

import TrackCarousel from '../track/TrackCarousel'
import TrackList from '../track/TrackList'
import { shuffle } from '../music-player/musicPlayerEffects'
import Loading from '../loading/Loading'

class Charts extends React.Component {

  render() {
    const { props: { chartsState, _onShuffle } } = this
    if (chartsState.loadingCharts) {
      return (
        <Loading />
      )
    } else {
      if (chartsState.tracks.length > 0) {
        return (
          <View style={styles.charts}>

            <View style={{marginTop: 25}}>
              <TouchableHighlight style={styles.customButton} onPress={() => _onShuffle(chartsState.tracks)}>
                <Text style={styles.shuffleText}>Shuffle</Text>
              </TouchableHighlight>
              <TrackCarousel style={{}} tracks={chartsState.tracks} />
            </View>

            {/*<TrackList tracks={chartsState.tracks}/>*/}
          </View>
        )
      }
    }
  }
}

const styles = StyleSheet.create({
  charts: {
    flex: .2,
    paddingTop: 64,
    paddingBottom: 48,
    backgroundColor: '#222'
  },
  customButton: {
    margin: 5,
    backgroundColor: '#ff6347',
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center'
  },
  shuffleText: {
    fontSize: 15,
    margin: 15,
    color: '#fff'
  }
});

const mapStateToProps = state => {
  return {
    chartsState: state.charts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _onShuffle(tracks) {
      dispatch(shuffle(tracks))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Charts);
