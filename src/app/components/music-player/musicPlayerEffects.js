import { LOAD_TRACK, LOAD_TRACK_COMPLETED, LOAD_PLAYER_COMPLETED, PLAY, PAUSE, SHUFFLE_PLAY } from '../../../shared/constants/action-constants'

import { constructStreamUrl } from '../../../shared/services/soundcloud.service';

export const loadTrack = (track) => {
  return dispatch => {
    dispatch({ type: LOAD_TRACK });
    dispatch(resolveTrack(track));
    dispatch(resolveStreamUrl(constructStreamUrl(track.id)));
  }
}

export const play = () => ({ type: PLAY })

export const pause = () => ({ type: PAUSE })

export const shuffle = (tracks) => ({ type: SHUFFLE_PLAY, payload: tracks })

export const skip_backward = (stateCurrentTrack, stateTracks) => {
  return dispatch => {
    if(stateTracks.length > 0) {
      var curIndex = stateTracks.indexOf(stateCurrentTrack)
      var prevTrack = curIndex > 0 ? stateTracks[curIndex - 1] : stateTracks[stateTracks.length - 1]
      prevTrack ? dispatch(loadTrack(prevTrack)) : ''
    }
  }
}

export const skip_forward = (stateCurrentTrack, stateTracks) => {
  return dispatch => {
    if(stateTracks.length > 0) {
      var curIndex = stateTracks.indexOf(stateCurrentTrack)
      var nextTrack = curIndex < stateTracks.length - 1 ? stateTracks[curIndex + 1] : stateTracks[0]
      nextTrack ? dispatch(loadTrack(nextTrack)) : ''
    }
  }
}

const resolveTrack = (track) => ({ type: LOAD_TRACK_COMPLETED, payload: track })

const resolveStreamUrl = (streamUrl) => ({ type: LOAD_PLAYER_COMPLETED, payload: streamUrl })
