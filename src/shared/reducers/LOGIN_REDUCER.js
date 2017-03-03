import { AUTH_FACEBOOK, AUTH_DEMO, AUTH_RESOLVE, AUTH_LOGOUT } from '../constants/action-constants'

const initialState = {
  loading: null,
  user: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_FACEBOOK:
      return Object.assign({}, state, { loading: true })
    case AUTH_DEMO:
      return Object.assign({}, state, { loading: true })
    case AUTH_RESOLVE:
      return Object.assign({}, state, { loading: false, user: action.payload })
    case AUTH_LOGOUT:
      return Object.assign({}, state, initialState)
    default:
      return state;
  }
}
