import React, { PropTypes } from 'react'
import { StyleSheet, View, ListView, Text } from 'react-native'

import FavoritesListItem from './FavoritesListItem'

export default class FavoritesList extends React.Component {
  constructor(props) {
    super(props)
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(this.props.artists)
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      nextProps.onError(nextProps.error);
    }
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.artists)
    })
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(artist) => <FavoritesListItem artist={artist}></FavoritesListItem>}
        style={styles.container}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    )
  }
}

FavoritesList.PropTypes = {
  artists: PropTypes.array.isRequired
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
