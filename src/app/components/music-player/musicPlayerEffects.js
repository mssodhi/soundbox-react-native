import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import { DeviceEventEmitter } from 'react-native'
import MusicControl from 'react-native-music-control'

import { LOAD_TRACK, LOAD_TRACK_COMPLETED, LOAD_PLAYER_COMPLETED, PLAY, PAUSE, SHUFFLE_PLAY } from '../../../shared/constants/action-constants'
import { constructStreamUrl } from '../../../shared/services/soundcloud.service';

export const loadTrack = (track) => {
  return dispatch => {
    dispatch({ type: LOAD_TRACK });
    dispatch(resolveTrack(track));
    dispatch(resolveStreamUrl(constructStreamUrl(track.id)));
    updateMusicControls(track, dispatch)
  }
}

export const shuffle = (tracks) => {
  return dispatch => {
    dispatch({ type: SHUFFLE_PLAY, payload: tracks })
    dispatch(loadTrack(tracks[Math.floor(Math.random() * tracks.length)]))
  }
}

export const skip_backward = () => {
  return (dispatch, getState) => {
    let state = getState().musicPlayer
    if (state.tracks.length > 0) {
      var curIndex = state.tracks.indexOf(state.currentTrack)
      var prevTrack = curIndex > 0 ? state.tracks[curIndex - 1] : state.tracks[state.tracks.length - 1]
      prevTrack ? dispatch(loadTrack(prevTrack)) : ''
    }
  }
}

export const skip_forward = () => {
  return (dispatch, getState) => {
    let state = getState().musicPlayer
    if (state.tracks.length > 0) {
      var curIndex = state.tracks.indexOf(state.currentTrack)
      var nextTrack = curIndex < state.tracks.length - 1 ? state.tracks[curIndex + 1] : state.tracks[0]
      nextTrack ? dispatch(loadTrack(nextTrack)) : ''
    }
  }
}

const resolveTrack = (track) => ({ type: LOAD_TRACK_COMPLETED, payload: track })

export const play = () => {
  ReactNativeAudioStreaming.getStatus((error, status) => {
    status.status === 'STOPPED' && status.duration === 0 ? ReactNativeAudioStreaming.play(status.url, {}) : ReactNativeAudioStreaming.resume()
    MusicControl.setNowPlaying({
      playbackRate: 1,
      elapsedPlaybackTime: status.progress
    })
  });
  return { type: PLAY }
}

export const pause = () => {
  ReactNativeAudioStreaming.pause()
  ReactNativeAudioStreaming.getStatus((error, status) => {
    MusicControl.setNowPlaying({
      playbackRate: 0,
      elapsedPlaybackTime: status.progress
    })
  });
  return { type: PAUSE }
}

const resolveStreamUrl = (streamUrl) => {
  ReactNativeAudioStreaming.play(streamUrl, { })
  return dispatch => {
    dispatch({ type: LOAD_PLAYER_COMPLETED, payload: streamUrl })
    DeviceEventEmitter.addListener(
      'AudioBridgeEvent', (evt) => {
        if (evt.status === 'STOPPED') {
          dispatch({ type: PAUSE })
          dispatch(skip_forward())
        }
      }
    );

  }
}

const updateMusicControls = (track, dispatch) => {
  MusicControl.setNowPlaying({
    title: track.title,
    artwork: track.artwork_url || '',
    artist: track.user.username,
    duration: track.duration / 1000,
    elapsedPlaybackTime: 0
  })

  MusicControl.enableControl('play', true)
  MusicControl.enableControl('pause', true)
  MusicControl.enableControl('stop', true)
  MusicControl.enableControl('nextTrack', true)
  MusicControl.enableControl('previousTrack', true)
  MusicControl.enableControl('seekForward', false)
  MusicControl.enableControl('seekBackward', false)
  MusicControl.enableBackgroundMode(true);

  MusicControl.on('play', ()=> {
    dispatch(play())
  })

  MusicControl.on('pause', ()=> {
    dispatch(pause())
  })

  MusicControl.on('stop', ()=> {
    dispatch(pause())
  })

  MusicControl.on('nextTrack', ()=> {
    dispatch(skip_forward())
  })

  MusicControl.on('previousTrack', ()=> {
    dispatch(skip_backward())
  })

  MusicControl.on('seekForward', ()=> { dispatch(skip_backward()) });
  MusicControl.on('seekBackward', ()=> { dispatch(skip_backward()) });

  MusicControl.on('seek', (pos)=> {}); // Android only (Seconds)
  MusicControl.on('rate', (rating)=> {}); // Android only (Percentage)
  MusicControl.on('volume', (volume)=> {}); // Android only (0 to maxVolume) - Only fired when remoteVolume is enabled

  MusicControl.on('togglePlayPause', ()=> { dispatch(play()) }); // iOS only
  MusicControl.on('enableLanguageOption', ()=> {}); // iOS only
  MusicControl.on('disableLanguageOption', ()=> {}); // iOS only
  MusicControl.on('skipForward', ()=> { dispatch(skip_forward()) }); // iOS only
  MusicControl.on('skipBackward', ()=> { dispatch(skip_backward()) }); // iOS only

}
