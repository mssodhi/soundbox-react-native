import React from 'react'
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
const noImage = require('../../../shared/images/Wind-Vector-resize.png')

import { play, pause, skip_backward, skip_forward } from './musicPlayerEffects'

class MusicPlayerView extends React.Component {
  render() {
    const { props: { musicPlayer, dispatchPlay, dispatchPause, dispatchForward, dispatchBackward } } = this
    return (

      <View style={styles.container}>
        {musicPlayer.currentTrack &&
          <View style={styles.body}>
            {musicPlayer.currentTrack.artwork_url ?
              (<Image style={{ width: 250, height: 250 }} source={{ uri: musicPlayer.currentTrack.artwork_url.replace('large', 't500x500'), cache: 'force-cached' }} />)
              :
              (<Image style={{ width: 250, height: 250 }} source={noImage} />)
            }

            <Text style={styles.trackName}>{musicPlayer.currentTrack.title}</Text>
            <Text style={styles.artistName}>{musicPlayer.currentTrack.user.username}</Text>
            <View style={styles.actions}>
              <View style={{ margin: 10 }}>
                {musicPlayer.tracks.length > 0 &&
                  <TouchableHighlight style={[styles.actionButton, styles.secondaryButton]} underlayColor='#a9a9a9' onPress={() => { dispatchBackward() }}>
                    <Icon name="step-backward" style={{ fontSize: 20, color: '#fff' }} />
                  </TouchableHighlight>
                }
              </View>
              <View style={{ margin: 10 }}>
                {musicPlayer.isPlaying ? (
                  <TouchableHighlight style={[styles.actionButton, styles.primaryButto]} underlayColor='#ff8c00' onPress={() => { dispatchPause() }}>
                    <Icon name="pause" style={{ fontSize: 20, color: '#fff' }} />
                  </TouchableHighlight>
                ) : (
                    <TouchableHighlight style={[styles.actionButton, styles.primaryButto]} underlayColor='#ff8c00' onPress={() => { dispatchPlay() }}>
                      <Icon name="play" style={{ fontSize: 20, color: '#fff' }} />
                    </TouchableHighlight>
                  )}
              </View>
              <View style={{ margin: 10 }}>
                {musicPlayer.tracks.length > 0 &&
                  <TouchableHighlight style={[styles.actionButton, styles.secondaryButton]} underlayColor='#a9a9a9' onPress={() => { dispatchForward() }}>
                    <Icon name="step-forward" style={{ fontSize: 20, color: '#fff' }} />
                  </TouchableHighlight>
                }
              </View>
            </View>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center'
  },
  body: {
    top: 64,
    flex: .6,
    alignItems: 'center'
  },
  trackName: {
    marginTop: 10,
    color: '#fff',
    fontSize: 20,
    alignItems: 'center'
  },
  artistName: {
    marginTop: 10,
    color: '#fff',
    fontSize: 15,
    alignItems: 'center'
  },
  actions: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  primaryButto: {
    backgroundColor: '#ff6347',
  },
  secondaryButton: {
    backgroundColor: '#696969',
  },
  actionButton: {
    borderWidth: 1,
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
});

const mapStateToProps = state => {
  return {
    musicPlayer: state.musicPlayer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchPlay: () => {
      dispatch(play())
    },
    dispatchPause: () => {
      dispatch(pause())
    },
    dispatchForward: () => {
      dispatch(skip_forward())
    },
    dispatchBackward: () => {
      dispatch(skip_backward())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayerView);
