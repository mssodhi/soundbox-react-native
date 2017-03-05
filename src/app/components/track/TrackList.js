import React, { PropTypes } from 'react'
import { StyleSheet, View, ListView, Button } from 'react-native'
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
  render() {
    const { props: { _onShuffle } } = this
    return (
      <View>
        <Button
          onPress={() => _onShuffle(this.props.tracks)}
          title="Shuffle"
          color="#841584"
        />
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(track) => <TrackListItem track={track}></TrackListItem>}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
      </View>
    )
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
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    _onShuffle(tracks) {
      dispatch(shuffle(tracks))
    }
  }
}

export default connect(null, mapDispatchToProps) (TrackList)
