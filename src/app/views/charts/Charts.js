import React, { PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

import TrackList from '../../../shared/components/track/TrackList'

class Charts extends React.Component {
    render() {
        const { props: { chartsState } } = this
        return (
            <View style={styles.home}>
                {chartsState.tracks.length > 0 &&
                    <TrackList tracks={chartsState.tracks} />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const mapStateToProps = state => {
    return {
        chartsState: state.charts
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         handleLogout: () => {
//             dispatch(logout());
//         },
//         onError: (text) => {
//             console.log('error');
//             // dispatch(openModal(text))
//         }
//     }
// }

export default connect(mapStateToProps, null)(Charts);
