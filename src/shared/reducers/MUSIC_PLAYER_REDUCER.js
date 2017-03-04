import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import { LOAD_TRACK, LOAD_TRACK_COMPLETED, LOAD_STREAM_URL_COMPLETED, PLAY, PAUSE } from '../constants/action-constants'

const initialState = {
  currentTrack: null,
  tracks: [],
  streamUrl: null,
  loadingTrack: null,
  isPlaying: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LOAD_TRACK:
      return Object.assign({}, state, { loadingTrack: true });

    case LOAD_TRACK_COMPLETED:
      return Object.assign({}, state, { loadingTrack: false, currentTrack: action.payload });

    case LOAD_STREAM_URL_COMPLETED:
      return Object.assign({}, state, { streamUrl: action.payload });

    case PLAY:
      ReactNativeAudioStreaming.play(state.streamUrl, { showIniOSMediaCenter: true });
      return Object.assing({}, state, { isPlaying: true })

    case PAUSE:
      return Object.assing({}, state, { isPlaying: false })

    default:
      return state;
  }
}
