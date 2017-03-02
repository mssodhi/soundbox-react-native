import { combineReducers } from 'redux';

import login from '../../app/views/login/LOGIN_REDUCER'
import favorites from '../components/favorites/FAVORITES_REDUCER'

const rootReducer = combineReducers({
  login,
  favorites
})

 export default rootReducer;
