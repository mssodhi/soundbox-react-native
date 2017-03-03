import { LOAD_ARTIST_MUSIC, LOAD_ARTIST_MUSIC_COMPLETED } from '../../../shared/constants/action-constants'
import { constructUserSongsUrl } from '../../../shared/services/soundcloud.service'

export const loadArtistMusic = (artist) => {
  return dispatch => {
    dispatch({ type: LOAD_ARTIST_MUSIC, payload: artist });
    
    fetch(constructUserSongsUrl(artist.id))
      .then((response) => response.json())
      .then((res) => dispatch(resolveTracks(res.map(track => track))))
      .catch((error) => { console.error(error) });
  }
}

const resolveTracks = (tracks) => {
  return {
    type: LOAD_ARTIST_MUSIC_COMPLETED,
    payload: tracks
  }
}
