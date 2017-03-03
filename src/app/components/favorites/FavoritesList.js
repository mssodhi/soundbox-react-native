import React, { PropTypes } from 'react'
import { StyleSheet, View, ListView } from 'react-native'

import UserListItem from './UserListItem'

export default class FavoritesList extends React.Component {
  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

  constructor(props) {
    super(props)
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.artists)
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      nextProps.onError(nextProps.error);
    }
    this.setState({
      dataSource: this.ds.cloneWithRows(nextProps.artists)
    })
  }
  render() {
    return (
      <ListView dataSource={this.state.dataSource}
        renderRow={(artist) => <UserListItem artist={artist} navigator={this.props.navigator}></UserListItem>}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    )
  }
}

FavoritesList.PropTypes = {
  artists: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});
