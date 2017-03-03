import { AUTH_FACEBOOK, AUTH_DEMO, AUTH_RESOLVE, AUTH_REJECT, AUTH_LOGOUT } from './../../../shared/constants/action-constants'
import { loadFavorites } from '../favorites/favoitesEffects'
import { loadGenres, loadCharts } from '../charts/chartsEffects'

export const logout = () => {
  return dispatch => {
    dispatch({
      type: AUTH_LOGOUT,
    })
  }
}

export const facebookLogin = () => {
  return dispatch => {
    dispatch({ type: AUTH_FACEBOOK });
    dispatch(resolve({
      details: {
        username: 'facebook user',
        name: 'Mark Z',
        fbId: '1209'
      }
    }))
    dispatch(loadFavorites('1209'))
    dispatch(loadCharts('all-music'))
    dispatch(loadGenres())
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
    }))
    dispatch(loadFavorites('1209'))
    dispatch(loadCharts('all-music'))
    dispatch(loadGenres())
  }
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
