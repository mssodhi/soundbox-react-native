import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

import { loadTrack } from '../music-player/musicPlayerEffects'
const noImage = require('../../../shared/images/Wind-Vector-resize.png')

class TrackListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { props: { _handleSelectTrack } } = this
    let imageUrl = this.props.track.artwork_url ? { uri: this.props.track.artwork_url, cache: 'force-cached' } : noImage
    return (
      <TouchableHighlight onPress={() => _handleSelectTrack(this.props.track)}>
        <View style={styles.container}>
          <Image source={imageUrl} style={styles.photo} />
          <Text style={styles.text}>{this.props.track.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

TrackListItem.PropTypes = {
  track: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  }
});

const mapDispatchToProps = dispatch => {
  return {
    _handleSelectTrack: (track) => {
      dispatch(loadTrack(track))
    }
  }
}

export default connect(null, mapDispatchToProps)(TrackListItem);
