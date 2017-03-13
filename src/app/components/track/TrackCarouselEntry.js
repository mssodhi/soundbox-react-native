import React, { PropTypes } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

import styles from './TrackCarouselStyles';
import { loadTrack } from '../music-player/musicPlayerEffects'
const noImage = require('../../../shared/images/Wind-Vector-resize.png')

class TrackCarouselEntry extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { props: { _handleSelectTrack } } = this
    let imageUrl = this.props.track.artwork_url ? { uri: this.props.track.artwork_url.replace('large', 't500x500'), cache: 'force-cached' } : noImage

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.slideInnerContainer}
        onPress={() => _handleSelectTrack(this.props.track)}
      >
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.image}/>
          <View style={styles.radiusMask} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>{this.props.track.title.toUpperCase()}</Text>
          <Text style={styles.subtitle} numberOfLines={2}>{this.props.track.user.username}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    _handleSelectTrack: (track) => {
      dispatch(loadTrack(track))
    }
  }
}

TrackCarouselEntry.PropTypes = {
  track: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(TrackCarouselEntry);
