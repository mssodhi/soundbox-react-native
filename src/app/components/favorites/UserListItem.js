import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

class UserListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { props: { handleSelectArtist } } = this
    let imageUrl = this.props.artist.avatar_url ? this.props.artist.avatar_url : ''
    return (
      <TouchableHighlight onPress={() => handleSelectArtist(this.props.artist)}>
        <View style={styles.container}>
          <Image source={{ uri: imageUrl, cache: 'only-if-cached' }} style={styles.photo} />
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
      console.log(artist);
      // dispatch(loadTrack(track))
    }
  }
}

export default connect(null, mapDispatchToProps)(UserListItem)
