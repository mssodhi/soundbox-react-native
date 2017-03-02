import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

class TrackList extends React.Component {
  constructor(props) {
    super(props)
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource : ds.cloneWithRows(this.props.tracks)
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.error) {
      nextProps.onError(nextProps.error);
    }
    console.log(nextProps);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.setState({
      dataSource : nextProps.tracks.length > 0 ? ds.cloneWithRows(nextProps.tracks) : ds.cloneWithRows([])
    })
  }
  render() {
    return (
        <ListView dataSource={this.state.dataSource} renderRow={(track) => <Text>{track.title}</Text>} />
      )
  }
}

const styles = StyleSheet.create({
  
});

export default TrackList;
