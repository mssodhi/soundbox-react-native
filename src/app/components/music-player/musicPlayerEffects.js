import { LOAD_TRACK, LOAD_TRACK_COMPLETED, LOAD_STREAM_URL_COMPLETED } from '../../../shared/constants/action-constants'
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';

import { constructStreamUrl } from '../../../shared/services/soundcloud.service';

export const loadTrack = (track) => {
  return dispatch => {
    dispatch({ type: LOAD_TRACK });
    dispatch(resolveTrack(track));
    dispatch(resolveStreamUrl(constructStreamUrl(track.id)))
  }
}

const resolveTrack = (track) => {
  return {
    type: LOAD_TRACK_COMPLETED,
    payload: track
  }
}

const resolveStreamUrl = (streamUrl) => {
  ReactNativeAudioStreaming.play(streamUrl, {});

  return {
    type: LOAD_STREAM_URL_COMPLETED,
    payload: streamUrl
  }
}
