import React from 'react'
import { AsyncStorage } from 'react-native'

import { AUTH_FACEBOOK, AUTH_DEMO, AUTH_RESOLVE, AUTH_LOGOUT } from './../../../shared/constants/action-constants'
import { loadFavorites } from '../favorites/favoitesEffects'
import { loadGenres, loadCharts } from '../charts/chartsEffects'

export const facebookLogin = (user) => {
  return dispatch => {
    return fetch(`http://mssodhi.me/soundbox/api/login/checkUser/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: user.name
      })
    })
      .then((response) => response.json())
      .then((user) => dispatch(login(user)))
      .catch((error) => reject(error));
  }
}

export const demoLogin = () => {
  return dispatch => dispatch(login({ name: 'John Doe', fb_id: '1209' }))
}

export const logout = () => {
  return dispatch => {
    AsyncStorage.clear();
    dispatch({ type: AUTH_LOGOUT })
  }
}

export const login = (user) => {
  return dispatch => {
    dispatch(loadFavorites(user.fb_id));
    dispatch({ type: AUTH_RESOLVE, payload: user });
    dispatch(loadCharts({ name: 'All Music', value: 'all-music' }));
    dispatch(loadGenres());
    AsyncStorage.setItem("user", JSON.stringify(user));
  }
}
