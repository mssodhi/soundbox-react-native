import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { facebookLogin, demoLogin, logout } from './loginActions'

class Login extends React.Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.error) {
      nextProps.onError(nextProps.error);
    }
  }
  render() {
    const { props: { data, handleFacebookLogin, handleDemoLogin } } = this

    if(!data) {
      return (
        <View style={styles.container}>
          <View style={styles.instructions}>
            <Text>Choose Login method to start using the app</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.buttonContainer}>
              <View style={styles.method}>
                <Icon.Button name="facebook" onPress={handleFacebookLogin}>Login with Facebook</Icon.Button>
              </View>
              <View style={styles.method}>
                <Icon.Button name="sign-in" backgroundColor="#d42828" onPress={handleDemoLogin}>Demo</Icon.Button>
              </View>
            </View>
          </View>
        </View>
      )
    }
    else {
      return (
        null
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    flex: .3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: .7,
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  method: {
    margin: 10
  }
});

const mapStateToProps = state => {
  return {
    data: state.login.get('data'),
    loading: state.login.get('loading'),
    error: state.login.get('error'),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleFacebookLogin: () => {
      dispatch(facebookLogin())
    },
    handleDemoLogin: () => {
      dispatch(demoLogin())
    },
    onError: (text) => {
    	console.log('error');
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
