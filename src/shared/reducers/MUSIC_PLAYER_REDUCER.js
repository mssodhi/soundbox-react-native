import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import { LOAD_TRACK, LOAD_TRACK_COMPLETED, LOAD_PLAYER_COMPLETED, PLAY, PAUSE, SHUFFLE_PLAY, SKIP_BACKWARD, SKIP_FORWARD } from '../constants/action-constants'

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
      ReactNativeAudioStreaming.play(action.payload, { showIniOSMediaCenter: true });
      return Object.assign({}, state, { isPlaying: true });

    case PLAY:
      ReactNativeAudioStreaming.resume()
      return Object.assign({}, state, { isPlaying: true })

    case PAUSE:
      ReactNativeAudioStreaming.pause()
      return Object.assign({}, state, { isPlaying: false })

    case SHUFFLE_PLAY:
      return Object.assign({}, state, { tracks: action.payload })

    case SKIP_BACKWARD:
      var curIndex = state.tracks.indexOf(state.currentTrack)
      var prevTrack = curIndex > 0 ? state.tracks[curIndex - 1] : null
      if(prevTrack) {
        return Object.assign({}, state, { currentTrack: prevTrack, isPlaying: true })
      }

    case SKIP_FORWARD:
      var curIndex = state.tracks.indexOf(state.currentTrack)
      var nextTrack = curIndex < state.tracks.length ? state.tracks[curIndex + 1] : null
      if(nextTrack) {
        return Object.assign({}, state, { currentTrack: nextTrack.json(), isPlaying: true })
      }

    default:
      return state;
  }
}
