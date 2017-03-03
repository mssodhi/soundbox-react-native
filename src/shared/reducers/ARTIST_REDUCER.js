import { LOAD_ARTIST_MUSIC, LOAD_ARTIST_MUSIC_COMPLETED } from '../constants/action-constants'

const initialState = {
  loadingTracks: null,
  tracks: [],
  artist: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LOAD_ARTIST_MUSIC:
      return Object.assign({}, state, { loadingTracks: true, artist: action.payload })

    case LOAD_ARTIST_MUSIC_COMPLETED:
      return Object.assign({}, state, { loadingTracks: false, tracks: action.payload })

    default:
      return state;
  }
}
