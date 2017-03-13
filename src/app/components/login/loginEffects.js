import React from 'react'
import { AsyncStorage } from 'react-native'

import { AUTH_FACEBOOK, AUTH_DEMO, AUTH_RESOLVE, AUTH_LOGOUT } from './../../../shared/constants/action-constants'
import { loadFavorites } from '../favorites/favoitesEffects'
import { loadGenres, loadCharts } from '../charts/chartsEffects'

let user = {
  username: 'demo',
  name: 'John Doe',
  fbId: '1209',
}

export const facebookLogin = () => {
  return dispatch => {
    dispatch({ type: AUTH_FACEBOOK });
    AsyncStorage.setItem("user", JSON.stringify(user));
    dispatch(login(user))
  }
}

export const demoLogin = () => {
  return dispatch => {
    dispatch({ type: AUTH_DEMO });
    AsyncStorage.setItem("user", JSON.stringify(user));
    dispatch(login(user));
  }
}

export const logout = () => {
  return dispatch => {
    AsyncStorage.clear();
    dispatch({
      type: AUTH_LOGOUT,
    })
  }
}

export const login = (user) => {
  return dispatch => {
    dispatch(loadFavorites(user.fbId));
    let genre = {name: 'All Music', value: 'all-music'}
    dispatch(loadCharts(genre));
    dispatch(loadGenres());
    dispatch({ type: AUTH_RESOLVE, payload: user });
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
