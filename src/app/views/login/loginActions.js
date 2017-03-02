import { AUTH_FACEBOOK, AUTH_DEMO, AUTH_RESOLVE, AUTH_REJECT, AUTH_LOGOUT } from './loginTypes';
import axios from 'axios'
import qs from 'qs'

export const logout = () => {
  return dispatch => {
    dispatch({
      type: AUTH_LOGOUT,
    })
  }
}

export const facebookLogin = () => {
  console.log('in action fb');
  return dispatch => {
    // dispatch({ type: AUTH_FACEBOOK });
    dispatch(resolve({
      details: {
        username: 'facebook user',
        name: 'Mark Z',
        fbId: '-1'
      }
    }));
  }
}

export const demoLogin = () => {
  return dispatch => {
    dispatch({ type: AUTH_DEMO });
    dispatch(resolve({
      details: {
        username: 'demo',
        name: 'Demo Smith',
        fbId: '1209'
      }
    }));
    // dispatch(resolve({
    //   details: {
    //     username: 'demo',
    //     name: 'Demo Smith',
    //     userId: '1209'
    //   }
    // }));
    // axios({
    //   url: 'https://api.backand.com/token',
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   data: qs.stringify({
    //     grant_type: 'password',
    //     appname: 'reactnativetodoexample',
    //     username,
    //     password
    //   })
    // })
    //   .then(response => {
    //     // console.log(response.data);
    //     dispatch(resolve({
    //       token: {
    //         Authorization: `${response.data.token_type} ${response.data.access_token}`
    //       },
    //       details: {
    //         username: response.data.username,
    //         name: response.data.fullName,
    //         userId: response.data.userId
    //       }
    //     }));
    //   })
    //   .catch(error => {
    //     // console.log(error);
    //     dispatch(reject(error.response.data.error_description));
    //   });
  };
}

const resolve = (data) => {
  return {
    type: AUTH_RESOLVE,
    payload: {
      data
    }
  }
}

const reject = (error) => {
  return {
    type: AUTH_REJECT,
    payload: {
      error
    }
  }
}
