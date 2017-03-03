import { AUTH_FACEBOOK, AUTH_DEMO, AUTH_RESOLVE, AUTH_LOGOUT } from './../../../shared/constants/action-constants'
import { loadFavorites } from '../favorites/favoitesEffects'
import { loadGenres, loadCharts } from '../charts/chartsEffects'

const user = {
  username: 'demo',
  name: 'John Doe',
  fbId: '1209'
}

export const facebookLogin = () => {
  return dispatch => {
    dispatch({ type: AUTH_FACEBOOK });
    dispatch(resolve(user))
    dispatch(loadFavorites('1209'))
    dispatch(loadCharts('all-music'))
    dispatch(loadGenres())
  }
}

export const demoLogin = () => {
  return dispatch => {
    dispatch({ type: AUTH_DEMO });
    dispatch(resolve(user))
    dispatch(loadFavorites('1209'))
    dispatch(loadCharts('all-music'))
    dispatch(loadGenres())
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({
      type: AUTH_LOGOUT,
    })
  }
}

const resolve = (user) => {
  return {
    type: AUTH_RESOLVE,
    payload: user
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
