import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

import { logout } from '../login/loginActions'

class Settings extends React.Component {
    render() {
        const { props: { user, handleLogout } } = this
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{`${user.get('name')}, Welcome to React Native!`}</Text>
                <Icon.Button name="sign-out" backgroundColor="#d42828" onPress={handleLogout}>Logout</Icon.Button>
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
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

const mapStateToProps = state => {
    return {
        user: state.login.get('data').get('details')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogout: () => {
            dispatch(logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
