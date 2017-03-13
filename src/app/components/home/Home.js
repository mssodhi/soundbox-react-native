import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Loading from '../loading/Loading'
import FavoritesList from '../favorites/FavoritesList'

class Home extends React.Component {
  render() {
    const { props: { favState } } = this
    if(favState.loadingArtists) {
      return (
        <Loading/>
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
  }
});

const mapStateToProps = state => {
  return {
    favState: state.favorites
  }
}

export default connect(mapStateToProps, null)(Home)
