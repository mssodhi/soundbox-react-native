import React from 'react'
import { StyleSheet, View, Switch } from 'react-native'
import { connect } from 'react-redux'

import TrackCarousel from '../track/TrackCarousel'
import TrackList from '../track/TrackList'
import Loading from '../loading/Loading'

class Charts extends React.Component {
  constructor() {
    super()
    this.state = { carousel: true }
  }

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
            <Switch
              onValueChange={(value) => this.setState({ carousel: value })}
              style={{ marginTop: 10, marginRight: 10, alignSelf: 'flex-end' }}
              value={this.state.carousel} />
            {this.state.carousel ? (<TrackCarousel style={{ marginTop: 25 }} tracks={chartsState.tracks} />) : (<TrackList tracks={chartsState.tracks} />)}
          </View>
        )
      }
    }
  }
}

const styles = StyleSheet.create({
  charts: {
    flex: 1,
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
