import { combineReducers } from 'redux';

import login from '../../app/views/login/LOGIN_REDUCER'
import favoritesState from '../components/favorites/FAVORITES_REDUCER'

const rootReducer = combineReducers({
  login,
  favoritesState
})

 export default rootReducer;
