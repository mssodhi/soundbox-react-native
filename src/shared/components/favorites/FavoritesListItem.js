import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default FavoritesListItem = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.artist.avatar_url}} style={styles.photo} />
    <Text style={styles.text}>
      {`${props.artist.username} - ${props.artist.track_count}`}
    </Text>
  </View>
);

FavoritesListItem.PropTypes = {
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
