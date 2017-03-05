import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import { LOAD_TRACK, LOAD_TRACK_COMPLETED, LOAD_PLAYER_COMPLETED, PLAY, PAUSE, SHUFFLE_PLAY } from '../../../shared/constants/action-constants'
import { constructStreamUrl } from '../../../shared/services/soundcloud.service';

export const loadTrack = (track) => {
  return dispatch => {
    dispatch({ type: LOAD_TRACK });
    dispatch(resolveTrack(track));
    dispatch(resolveStreamUrl(constructStreamUrl(track.id)));
  }
}

export const shuffle = (tracks) => {
  return dispatch => {
    dispatch(loadTrack(tracks[Math.floor(Math.random()*tracks.length)]))
    dispatch({ type: SHUFFLE_PLAY, payload: tracks })
  }
}

export const skip_backward = () => {
  return (dispatch, getState) => {
    let state = getState().musicPlayer
    if(state.tracks.length > 0) {
      var curIndex = state.tracks.indexOf(state.currentTrack)
      var prevTrack = curIndex > 0 ? state.tracks[curIndex - 1] : state.tracks[state.tracks.length - 1]
      prevTrack ? dispatch(loadTrack(prevTrack)) : ''
    }
  }
}

export const skip_forward = () => {
  return (dispatch, getState) => {
    let state = getState().musicPlayer
    if(state.tracks.length > 0) {
      var curIndex = state.tracks.indexOf(state.currentTrack)
      var nextTrack = curIndex < state.tracks.length - 1 ? state.tracks[curIndex + 1] : state.tracks[0]
      nextTrack ? dispatch(loadTrack(nextTrack)) : ''
    }
  }
}

const resolveTrack = (track) => ({ type: LOAD_TRACK_COMPLETED, payload: track })

export const play = () => {
  ReactNativeAudioStreaming.resume()
  return { type: PLAY }
}

export const pause = () => {
  ReactNativeAudioStreaming.pause()
  return { type: PAUSE }
}
const resolveStreamUrl = (streamUrl) => {
  ReactNativeAudioStreaming.play(streamUrl, { showIniOSMediaCenter: true })

  return { type: LOAD_PLAYER_COMPLETED, payload: streamUrl }
}
