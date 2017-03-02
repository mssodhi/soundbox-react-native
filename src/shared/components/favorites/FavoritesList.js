import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

class FavoritesList extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.artists);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource : this.props.artists.length > 0 ? ds.cloneWithRows(this.props.artists) : ds.cloneWithRows([])
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.error) {
      nextProps.onError(nextProps.error);
    }
  }
  render() {
    return (
        <ListView dataSource={this.state.dataSource} renderRow={(rowData) => <Text>{rowData.username}</Text>} />
      )
  } /* end render */
}

const styles = StyleSheet.create({
  
});

// const mapStateToProps = state => {
//   return {
//     data: state.login.get('data'),
//     artists: state.favorites.get('artists'),
//     loading: state.favorites.get('loading'),
//     error: state.login.get('error'),
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     handleLogout: () => {
//       dispatch(logout());
//     },
//     onError: (text) => {
//     	console.log('error');
//       // dispatch(openModal(text))
//     }
//   }
// }

export default FavoritesList;
