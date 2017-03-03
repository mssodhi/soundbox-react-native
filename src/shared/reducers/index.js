import { combineReducers } from 'redux';

import login from './LOGIN_REDUCER'
import favorites from './FAVORITES_REDUCER'
import musicPlayer from './MUSIC_PLAYER_REDUCER'
import charts from './CHARTS_REDUCER'

const rootReducer = combineReducers({
  login,
  favorites,
  musicPlayer,
  charts
})

export default rootReducer;
