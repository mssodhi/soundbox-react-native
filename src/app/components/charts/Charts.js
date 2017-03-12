import React, { PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

import TrackList from '../track/TrackList'

class Charts extends React.Component {
  render() {
    const { props: { chartsState } } = this
    if (chartsState.loadingCharts) {
      return (
        <View style={styles.container}>
          <Text style={styles.loading}>Loading...</Text>
        </View>
      )
    } else {
      if(chartsState.tracks.length > 0) {
        return (
          <View style={styles.charts}>
            <TrackList tracks={chartsState.tracks} navigator={this.props.navigator} />
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
  }
});

const mapStateToProps = state => {
  return {
    chartsState: state.charts
  }
}

export default connect(mapStateToProps, null)(Charts);
