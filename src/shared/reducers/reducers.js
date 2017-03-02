import { combineReducers } from 'redux';

import login from '../../app/views/login/LOGIN_REDUCER'
import favorites from '../components/favorites/FAVORITES_REDUCER'
import musicPlayer from '../components/music-player/MUSIC_PLAYER_REDUCER'
import charts from '../components/charts/CHARTS_REDUCER'

const rootReducer = combineReducers({
  login,
  favorites,
  musicPlayer,
  charts
})

export default rootReducer;
