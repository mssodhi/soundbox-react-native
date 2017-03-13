import React from 'react'
import { StyleSheet, View, } from 'react-native'
import { connect } from 'react-redux'

import TrackCarousel from '../track/TrackCarousel'
import TrackList from '../track/TrackList'
import Loading from '../loading/Loading'

class Charts extends React.Component {

  render() {
    const { props: { chartsState } } = this
    if (chartsState.loadingCharts) {
      return (
        <Loading />
      )
    } else {
      if (chartsState.tracks.length > 0) {
        return (
          <View style={styles.charts}>
            <TrackCarousel style={{marginTop: 25}} tracks={chartsState.tracks} />

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
  }
});

const mapStateToProps = state => {
  return {
    chartsState: state.charts
  }
}

export default connect(mapStateToProps)(Charts);
