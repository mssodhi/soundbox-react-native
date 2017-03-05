import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

import { loadArtistMusic } from '../artist/artistEffects'
import Artist from '../artist/Artist'
const noImage = require('../../../shared/images/Wind-Vector-resize.png')

class UserListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  _onArtistSelect(callback) {
    callback(this.props.artist)
    this.props.navigator.push({ component: Artist, title: this.props.artist.username })
  }

  render() {
    const { props: { handleSelectArtist } } = this
    let imageUrl = this.props.artist.avatar_url ? { uri: this.props.artist.avatar_url, cache: 'force-cache' } : noImage
    return (
      <TouchableHighlight onPress={() => this._onArtistSelect(handleSelectArtist)}>
        <View style={styles.container}>
          <Image source={imageUrl} style={styles.photo} />
          <Text style={styles.text}>
            {`${this.props.artist.username} - ${this.props.artist.track_count}`}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

UserListItem.PropTypes = {
  artist: PropTypes.object.isRequired
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
    handleSelectArtist: (artist) => {
      dispatch(loadArtistMusic(artist))
    }
  }
}

export default connect(null, mapDispatchToProps)(UserListItem)
