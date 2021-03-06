import { combineReducers } from 'redux';

import artistState from './ARTIST_REDUCER'
import charts from './CHARTS_REDUCER'
import favorites from './FAVORITES_REDUCER'
import login from './LOGIN_REDUCER'
import searchState from './SEARCH_REDUCER'
import musicPlayer from './MUSIC_PLAYER_REDUCER'

const rootReducer = combineReducers({
  artistState,
  charts,
  favorites,
  login,
  searchState,
  musicPlayer
})

export default rootReducer;
