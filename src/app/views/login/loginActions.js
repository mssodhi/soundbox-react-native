import { AUTH_FACEBOOK, AUTH_DEMO, AUTH_RESOLVE, AUTH_REJECT, AUTH_LOGOUT } from './loginTypes';
import { loadFavorites } from '../../../shared/components/favorites/favoritesActions'
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
    dispatch({ type: AUTH_FACEBOOK });
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
    dispatch(loadFavorites('1209'));
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
