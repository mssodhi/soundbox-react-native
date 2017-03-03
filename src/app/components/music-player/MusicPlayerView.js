import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

class MusicPlayerView extends React.Component {
    render() {
        const { props: { musicPlayer } } = this
        return (
            <View>
                {musicPlayer.currentTrack &&
                    <Text>
                        {musicPlayer.currentTrack.title}
                    </Text>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const mapStateToProps = state => {
    return {
        musicPlayer: state.musicPlayer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handdlePlay: () => {

        },
        handlePause: () => {

        },
        handleSkipForward: () => {

        },
        handleSkipBackward: () => {

        },
        onError: (text) => {
            console.log('error');
            // dispatch(openModal(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayerView);
