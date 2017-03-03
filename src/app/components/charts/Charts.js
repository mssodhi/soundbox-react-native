import React, { PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

import TrackList from '../track/TrackList'

class Charts extends React.Component {
    render() {
        const { props: { chartsState } } = this
        return (
            <View style={styles.charts}>
                {chartsState.loadingCharts ? (
                    <View style={styles.container}>
                        <Text style={styles.welcome}>Loading...</Text>
                    </View>
                ) : (
                        <TrackList tracks={chartsState.tracks} />
                    )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    charts: {
        flex: 1,
        flexDirection: 'column',
        top: 44
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
        chartsState: state.charts
    }
}

export default connect(mapStateToProps, null)(Charts);
