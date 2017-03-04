import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import { LOAD_TRACK, LOAD_TRACK_COMPLETED, LOAD_PLAYER_COMPLETED, PLAY, PAUSE } from '../constants/action-constants'

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
      return Object.assign({}, state, { isPlaying: true, player: ReactNativeAudioStreaming.play(action.payload, { showIniOSMediaCenter: true }) });

    case PLAY:
      ReactNativeAudioStreaming.resume()
      return Object.assign({}, state, { isPlaying: true })

    case PAUSE:
      ReactNativeAudioStreaming.pause()
      return Object.assign({}, state, { isPlaying: false })

    default:
      return state;
  }
}
