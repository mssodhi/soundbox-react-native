import { LOAD_TRACK, LOAD_TRACK_COMPLETED, LOAD_PLAYER_COMPLETED, PLAY, PAUSE, SHUFFLE_PLAY } from '../constants/action-constants'

const initialState = {
  currentTrack: null,
  tracks: [],
  player: null,
  loadingTrack: null,
  isPlaying: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LOAD_TRACK:
      return Object.assign({}, state, { loadingTrack: true });

    case LOAD_TRACK_COMPLETED:
      return Object.assign({}, state, { loadingTrack: false, currentTrack: action.payload });

    case LOAD_PLAYER_COMPLETED:
      return Object.assign({}, state, { isPlaying: true });

    case PLAY:
      return Object.assign({}, state, { isPlaying: true })

    case PAUSE:
      return Object.assign({}, state, { isPlaying: false })

    case SHUFFLE_PLAY:
      return Object.assign({}, state, { tracks: action.payload })

    default:
      return state;
  }
}
