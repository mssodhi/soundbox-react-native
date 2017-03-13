import React from 'react'
import { StyleSheet, View, Switch, Picker } from 'react-native'
import { connect } from 'react-redux'

import TrackCarousel from '../track/TrackCarousel'
import TrackList from '../track/TrackList'
import Loading from '../loading/Loading'
import { loadCharts } from '../charts/chartsEffects'

class ChartsGenrePicker extends React.Component {
  _renderPickerOptions(genres) {
    return genres.map(genre => {
      return (<Picker.Item color='#fff' key={genre.value} label={genre.name} value={genre.value} />)
    })
  }

  render() {
    const { props: { chartsState, handleGenreChange } } = this
    return (
      <View style={styles.page}>
        <Picker
          style={styles.picker}
          selectedValue={chartsState.selectedGenre.value}
          onValueChange={(value) => handleGenreChange(this.props.navigator, chartsState.genres.find(genre => genre.value === value))}>
          {this._renderPickerOptions(chartsState.genres)}
        </Picker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 64,
    paddingBottom: 48,
    backgroundColor: '#222'
  },
  picker: {

  }
});

const mapStateToProps = state => {
  return {
    chartsState: state.charts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGenreChange: (navigator, genre) => {
      navigator.pop();
      dispatch(loadCharts(genre));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartsGenrePicker);
