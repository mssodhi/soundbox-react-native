import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

import { loadTrack } from '../music-player/musicPlayerActions'

class TrackListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      nextProps.onError(nextProps.error);
    }
  }
  render() {
    const { props: { handleSelectTrack } } = this
    let imageUrl = this.props.track.artwork_url ? this.props.track.artwork_url : ''
    return (
      <TouchableHighlight onPress={()=> handleSelectTrack(this.props.track)}>
        <View style={styles.container}>
          <Image source={{ uri: imageUrl, cache: 'only-if-cached' }} alt="img" style={styles.photo} />
          <Text style={styles.text}>
            {`${this.props.track.title} - ${this.props.track.user.username}`}
          </Text>
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
    handleSelectTrack: (track) => {
      dispatch(loadTrack(track))
    }
  }
}

export default connect(null, mapDispatchToProps)(TrackListItem);
