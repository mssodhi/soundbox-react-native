import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import TrackListItem from '../track/TrackListItem'

class TrackList extends React.Component {
  constructor(props) {
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource : ds.cloneWithRows(props.tracks)
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.error) {
      nextProps.onError(nextProps.error);
    }
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.setState({
      dataSource : ds.cloneWithRows(nextProps.tracks)
    })
  }
  render() {
    return (
          <ListView dataSource={this.state.dataSource} 
          renderRow={(track) => <TrackListItem track={track}></TrackListItem>} 
          style={styles.container}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          />
      )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});

export default TrackList;
