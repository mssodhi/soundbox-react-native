import { LOAD_FAVORITES, LOAD_FAVORITES_ARTISTS_COMPLETED } from '../constants/action-constants'

const initialState = {
  loadingArtists: null,
  artists: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LOAD_FAVORITES:
      return Object.assign({}, state, { loadingArtists: true });

    case LOAD_FAVORITES_ARTISTS_COMPLETED:
      return Object.assign({}, state, { loadingArtists: false, artists: action.payload });

    default:
      return state;
  }
}
