import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import FavoritesList from '../favorites/FavoritesList'
import TrackList from '../track/TrackList'
import { search } from './searchEffects'

class Search extends React.Component {
  render() {
    const { props: { searchState, _handleSearch } } = this
    return (
      <View style={styles.searchPage}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => _handleSearch(text)}
        />
        {searchState.results.length > 1 &&
          <FavoritesList artists={searchState.results} navigator={this.props.navigator} />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchPage: {
    flex: 1,
    paddingTop: 64,
    paddingBottom: 48
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

const mapStateToProps = state => {
  return {
    searchState: state.searchState
  }
}

const mapDispatchToState = dispatch => {
  return {
    _handleSearch: (query) => {
      console.log(query)
      dispatch(search(query))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToState)(Search)
