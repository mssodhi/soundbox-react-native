import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { GraphRequest, GraphRequestManager, LoginManager, AccessToken } from 'react-native-fbsdk'
import { facebookLogin, demoLogin } from './loginEffects'

class Login extends React.Component {

  _handleLoginManager(callback) {
    AccessToken.getCurrentAccessToken().then(token => {
      // check to see if a token is already present
      if (token && token.userID) {
        this._fetchFacebookProfile(callback);
      } else {
        // if not, have the user login
        LoginManager.logInWithReadPermissions(['public_profile']).then(result => {
          if (result.isCancelled) {
            alert('Login cancelled');
          } else if (result.grantedPermissions.length == 0) {
            alert("Error loging in");
          } else {
            this._fetchFacebookProfile(callback);
          }
        })
      }
    })
  }

  _fetchFacebookProfile(callback) {
    const req = new GraphRequest(
      '/me',
      null,
      fcn = (error, response) => {
        if (error) {
          alert("Error loggin in");
        }
        if (response.id) {
          callback(response);
        }
      }
    )
    new GraphRequestManager().addRequest(req).start();
  }

  render() {
    const { props: { handleFacebookLogin, handleDemoLogin } } = this
    return (
      <View style={styles.container}>
        <View style={styles.instructions}>
          <Text>Choose Login method to start using the app</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.buttonContainer}>
            <View style={styles.method}>
              <Icon.Button name="facebook" onPress={this._handleLoginManager.bind(this, handleFacebookLogin)}>Login with Facebook</Icon.Button>
            </View>
            <View style={styles.method}>
              <Icon.Button name="sign-in" backgroundColor="#d42828" onPress={handleDemoLogin}>Demo</Icon.Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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

const mapDispatchToProps = dispatch => {
  return {
    handleFacebookLogin: (user) => {
      dispatch(facebookLogin(user))
    },
    handleDemoLogin: () => {
      dispatch(demoLogin())
    }
  }
}

export default connect(null, mapDispatchToProps)(Login);
