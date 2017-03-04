import { LOAD_TRACK, LOAD_TRACK_COMPLETED, LOAD_PLAYER_COMPLETED, PLAY, PAUSE } from '../../../shared/constants/action-constants'

import { constructStreamUrl } from '../../../shared/services/soundcloud.service';

export const loadTrack = (track) => {
  return dispatch => {
    dispatch({ type: LOAD_TRACK });
    dispatch(resolveTrack(track));
    dispatch(resolveStreamUrl(constructStreamUrl(track.id)));
  }
}

export const play = () => {
  return dispatch => {
    dispatch({ type: PLAY })
  }
}

export const pause = () => {
  return dispatch => {
    dispatch({ type: PAUSE })
  }
}

const resolveTrack = (track) => {
  console.log(track);
  return {
    type: LOAD_TRACK_COMPLETED,
    payload: track
  }
}

const resolveStreamUrl = (streamUrl) => {
  return {
    type: LOAD_PLAYER_COMPLETED,
    payload: streamUrl
  }
}
