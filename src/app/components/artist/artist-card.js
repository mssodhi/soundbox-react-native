import React from 'react'
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
const noImage = require('../../../shared/images/Wind-Vector-resize.png')

export default class ArtistCard extends React.Component {
  constructor(props) {
    super(props)
  }

  handleFavorite() {
    console.log('toggle fav');
  }

  handleShare() {
    console.log('share');
  }

  render() {
    let imageUrl = this.props.artist.avatar_url ? { uri: this.props.artist.avatar_url.replace('large', 't500x500'), cache: 'force-cached' } : noImage
    return (
      <View style={styles.card}>
        <Image style={styles.backgroundImage} source={noImage} />
        <Image style={styles.avatar} source={imageUrl} />
        <View style={styles.cardActions}>
          <TouchableHighlight underlayColor={'#222'} style={styles.actions} onPress={() => this.handleFavorite()}>
            <Text style={{ color: 'red' }}>Add to Favorites</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#222'} style={styles.actions} onPress={() => this.handleShare()}>
            <Text style={{ color: 'red' }}>Share</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#222',
    height: 175,
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
  },
  cardActions: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  actions: {
    padding: 10
  }
});
