import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

/*class TrackListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      track: props.track
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      nextProps.onError(nextProps.error);
    }

    this.setState({
      track: nextProps.track
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: props.picture.large }} style={styles.photo} />
        <Text style={styles.text}>
          {`${props.name.first} ${props.name.last}`}
        </Text>
      </View>
    )
  }
}*/

export const TrackListItem = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.track.artwork_url}} style={styles.photo} />
    <Text style={styles.text}>
      {`${props.track.title} - ${props.track.user.username}`}
    </Text>
  </View>
);


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

export default TrackListItem;
