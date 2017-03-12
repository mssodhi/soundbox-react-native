import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import FavoritesList from '../favorites/FavoritesList'

class Home extends React.Component {
  render() {
    const { props: { favState } } = this
    if(favState.loadingArtists) {
      return (
        <View style={styles.container}>
            <Text style={styles.loading}>Loading...</Text>
          </View>
      )
    } else {
      return (
        <View style={styles.home}>
          <FavoritesList artists={favState.artists} navigator={this.props.navigator} />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    paddingTop: 64,
    paddingBottom: 48,
    backgroundColor: '#222'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222'
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  }
});

const mapStateToProps = state => {
  return {
    favState: state.favorites
  }
}

export default connect(mapStateToProps, null)(Home)
