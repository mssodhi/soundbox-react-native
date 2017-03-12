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
          placeholder='Search'
          style={styles.default}
          clearButtonMode="while-editing"
          onChangeText={(text) => _handleSearch(text)}
        />
        {searchState.results.length > 0 &&
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
    paddingBottom: 48,
    backgroundColor: '#222'
  },
  default: {
    height: 30,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    borderRadius: 3,
    margin: 5,
    backgroundColor: '#fff',
    fontSize: 13,
    padding: 4,
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
