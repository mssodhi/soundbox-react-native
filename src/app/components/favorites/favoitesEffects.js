import { LOAD_FAVORITES, LOAD_FAVORITES_ARTISTS_COMPLETED, LOAD_FAVORITES_TRACKS_COMPLETED } from '../../../shared/constants/action-constants'
import { constructUserUrl, constructUserSongsUrl, constructSongUrl } from '../../../shared/services/soundcloud.service'

export const loadFavorites = (fbId) => {
  return dispatch => {
    dispatch({ type: LOAD_FAVORITES });
    fetch(`http://mssodhi.me/soundbox/api/favorites/getFavorites/user/${fbId}`)
      .then((response) => response.json())
      .then((favoriteArtists) => {
        // let tracks = [];
        let artists = [];
        for (var i = 0; i < favoriteArtists.length; i++) {
          var artist = favoriteArtists[i];

          // fetch(constructUserSongsUrl(artist.artist_id))
          //   .then((response) => response.json())
          //   .then((response) => dispatch(resolveTracks(response.map(track => tracks.push(track)))))
          //   .catch((error) => {
          //     console.error(error);
          //   });

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

const resolveTracks = (tracks) => {
  return {
    type: LOAD_FAVORITES_TRACKS_COMPLETED,
    payload: tracks
  }
}

const resolveArtists = (artists) => {
  return {
    type: LOAD_FAVORITES_ARTISTS_COMPLETED,
    payload: artists
  }
}
