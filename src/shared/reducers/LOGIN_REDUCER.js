import { AUTH_FACEBOOK, AUTH_DEMO, AUTH_RESOLVE, AUTH_REJECT, AUTH_LOGOUT } from '../constants/action-constants'
import { Map } from 'immutable';

export default (state = Map({}), action) => {
  switch (action.type) {
    case AUTH_FACEBOOK:
      return Map({loading: true});
    case AUTH_DEMO:
      return Map({loading: true});
    case AUTH_RESOLVE:
      return state.merge({loading: false, data: action.payload.data, loaded: true});
    case AUTH_REJECT:
      return state.merge({loading: false, error: action.payload.error, loaded: false});
    case AUTH_LOGOUT:
      return Map({});
    default:
      return state;
  }
}
