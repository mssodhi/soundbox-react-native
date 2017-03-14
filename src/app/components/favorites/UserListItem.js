import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

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
        <View style={styles.row}>
          <View style={styles.left}>
            <Image source={imageUrl} style={styles.photo} />
            <Text style={styles.text}>{this.props.artist.username}</Text>
          </View>
          <Icon name='chevron-right' size={20} style={styles.icon} />
        </View>
      </TouchableHighlight>
    )
  }
}

UserListItem.PropTypes = {
  artist: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  left: {
    alignSelf: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    color: '#fff',
  },
  icon: {
    color: '#fff',
    margin: 10,
    width: 20,
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
