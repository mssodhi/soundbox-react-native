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
    return (
      <View style={styles.card}>
        <Image style={styles.backgroundImage} source={noImage} />
        <Image style={styles.avatar} source={{ uri: this.props.artist.avatar_url }} />
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
    height: 60,
    width: width - 20,
    overflow: 'hidden'
  },
  avatar: {
    height: 75,
    width: 75,
    borderRadius: 40,
    marginTop: -25,
    alignSelf: 'center'
  }
});
