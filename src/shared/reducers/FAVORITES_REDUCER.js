import { LOAD_FAVORITES, LOAD_FAVORITES_ARTISTS_COMPLETED, LOAD_FAVORITES_TRACKS_COMPLETED } from '../constants/action-constants'

const initialState = {
  loadingTracks: null,
  loadingArtists: null,
  artists: [],
  tracks: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LOAD_FAVORITES:
      return Object.assign({}, state, { loadingTracks: true, loadingArtists: true });

    case LOAD_FAVORITES_ARTISTS_COMPLETED:
      return Object.assign({}, state, { loadingArtists: false, artists: action.payload });

    case LOAD_FAVORITES_TRACKS_COMPLETED:
      return Object.assign({}, state, { loadingTracks: false, tracks: action.payload });

    default:
      return state;
  }
}
