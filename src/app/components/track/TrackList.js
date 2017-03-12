import React, { PropTypes } from 'react'
import { StyleSheet, View, ListView, TouchableHighlight, Text } from 'react-native'
import { connect } from 'react-redux'
import TrackListItem from './TrackListItem'

import { shuffle, loadTrack } from '../music-player/musicPlayerEffects'

class TrackList extends React.Component {
  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

  constructor(props) {
    super(props)
    this.state = {
      dataSource: this.ds.cloneWithRows(props.tracks)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      nextProps.onError(nextProps.error);
    }
    this.setState({
      dataSource: this.ds.cloneWithRows(nextProps.tracks)
    })
  }

  _renderHeader(callback) {
    return (
      <TouchableHighlight style={styles.customButton} onPress={() => callback(this.props.tracks)}>
        <Text style={styles.shuffleText}>Shuffle</Text>
      </TouchableHighlight>
    )
  }

  render() {
    const { props: { _onShuffle } } = this
    if (this.state.dataSource.getRowCount() > 0) {
      return (
        <ListView
          renderHeader={() => this._renderHeader(_onShuffle)}
          dataSource={this.state.dataSource}
          renderRow={(track) => <TrackListItem track={track}></TrackListItem>}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
      )
    }
  }
}

TrackList.PropTypes = {
  tracks: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
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
})

const mapDispatchToProps = (dispatch) => {
  return {
    _onShuffle(tracks) {
      dispatch(shuffle(tracks))
    }
  }
}

export default connect(null, mapDispatchToProps)(TrackList)
