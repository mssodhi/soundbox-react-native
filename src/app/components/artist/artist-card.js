import React from 'react'
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import { StyleSheet, View, Text, Image } from 'react-native'
const noImage = require('../../../shared/images/Wind-Vector-resize.png')

export default class ArtistCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let imageUrl = this.props.artist.avatar_url ? { uri: this.props.artist.avatar_url.replace('large', 't500x500'), cache: 'force-cached' } : noImage
    return (
      <View style={styles.card}>
        <Image style={styles.backgroundImage} source={noImage} />
        <Image style={styles.avatar} source={imageUrl} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#222',
    height: 150,
    width: width - 20,
    margin: 10,
    borderRadius: 2,
    borderColor: 'white',
    borderWidth: 1
  },
  backgroundImage: {
    height: 75,
    width: width - 20,
    overflow: 'hidden'
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: -40,
    alignSelf: 'center'
  }
});
