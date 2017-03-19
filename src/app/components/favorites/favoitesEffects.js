import { LOAD_FAVORITES, LOAD_FAVORITES_ARTISTS_COMPLETED } from '../../../shared/constants/action-constants'
import { constructUserUrl } from '../../../shared/services/soundcloud.service'

export const loadFavorites = (fb_id) => {
  return dispatch => {
    dispatch({ type: LOAD_FAVORITES });
    fetch(`http://mssodhi.me/soundbox/api/favorites/getFavorites/user/${fb_id}`)
      .then((response) => response.json())
      .then((res) => {
        let artists = [];
        for(let artist of res) {
          fetch(constructUserUrl(artist.artist_id))
            .then((response) => response.json())
            .then((res) => artists.push(res))
            .then(() => dispatch(resolveArtists(artists)))
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const resolveArtists = (artists) => {
  return {
    type: LOAD_FAVORITES_ARTISTS_COMPLETED,
    payload: artists
  }
}
