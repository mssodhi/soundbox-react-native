import React, { PropTypes } from 'react'
import { StyleSheet, View, ListView } from 'react-native'

import TrackListItem from './TrackListItem'

export default class TrackList extends React.Component {
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
    return (
      <ListView 
        initialListSize={10}
        pageSize={15}
        removeClippedSubviews={true}
        dataSource={this.state.dataSource}
        renderRow={(track) => <TrackListItem track={track}></TrackListItem>}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
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
});
