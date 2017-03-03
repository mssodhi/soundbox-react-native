import { LOAD_TRACK, LOAD_TRACK_COMPLETED, LOAD_STREAM_URL_COMPLETED } from '../constants/action-constants'

const initialState = {
  currentTrack: null,
  tracks: [],
  streamUrl: null,
  loadingTrack: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LOAD_TRACK:
      return Object.assign({}, state, { loadingTrack: true });

    case LOAD_TRACK_COMPLETED:
      return Object.assign({}, state, { loadingTrack: false, currentTrack: action.payload.track });

    case LOAD_STREAM_URL_COMPLETED:
      return Object.assign({}, state, { streamUrl: action.payload.streamUrl });

    default:
      return state;
  }
}
