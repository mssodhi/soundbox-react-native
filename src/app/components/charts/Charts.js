import React from 'react'
import { StyleSheet, View, Switch, Picker, TouchableHighlight, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import TrackCarousel from '../track/TrackCarousel'
import TrackList from '../track/TrackList'
import Loading from '../loading/Loading'
import { loadCharts } from '../charts/chartsEffects'
import ChartsGenrePicker from './ChartsGenrePicker'

class Charts extends React.Component {
  constructor() {
    super()
    this.state = { carousel: true }
  }

  _renderPickerOptions(genres) {
    return genres.map(genre => {
      return (<Picker.Item color='#fff' key={genre.value} label={genre.name} value={genre.value} />)
    })
  }

  render() {
    const { props: { chartsState } } = this
    return (
      <View style={styles.charts}>

        <TouchableHighlight onPress={() => this.props.navigator.push({component: ChartsGenrePicker})}>
          <View style={styles.row}>
            <Text style={styles.text}>{chartsState.selectedGenre.name}</Text>
            <Icon name='chevron-right' size={20} style={styles.icon} />
          </View>
        </TouchableHighlight>

        {chartsState.loadingCharts ? (<Loading />) : (
          <View>
            <Switch
              onValueChange={(value) => this.setState({ carousel: value })}
              style={{ marginTop: 10, marginRight: 10, alignSelf: 'flex-end' }}
              value={this.state.carousel} />
            {this.state.carousel ? (<TrackCarousel style={{ marginTop: 25 }} tracks={chartsState.tracks} />) : (<TrackList tracks={chartsState.tracks} />)}
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  charts: {
    flex: 1,
    paddingTop: 64,
    paddingBottom: 48,
    backgroundColor: '#222'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff'
  },
  text: {
    color: '#000',
    alignSelf: 'flex-start'
  },
  icon: {
    alignSelf: 'flex-end',
    marginRight: 10,
    width: 20,
  }
});

const mapStateToProps = state => {
  return {
    chartsState: state.charts
  }
}

export default connect(mapStateToProps)(Charts)
