import { LOAD_FAVORITES, LOAD_FAVORITES_COMPLETED } from './favoritesTypes';
import { constructUserSongsUrl, constructSongUrl } from '../../services/soundcloud.service';

export const loadFavorites = (fbId) => {
  console.log(fbId);
  return dispatch => {
    dispatch({ type: LOAD_FAVORITES });
    fetch(`http://mssodhi.me/soundbox/api/favorites/getFavorites/user/${fbId}`)
      .then((response) => response.json())
      .then((responseJson) => {

        console.log(responseJson);
        let tracks = [];
        responseJson.forEach(obj => {
          fetch(constructUserSongsUrl(obj.artist_id))
            .then((response) => response.json())
            .then((res) => {
              console.log(res);
              tracks.push(res);
            })
            .catch((error) => {
              console.error(error);
            });
        })
        dispatch(resolve(tracks));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const resolve = (data) => {
  return {
    type: LOAD_FAVORITES_COMPLETED,
    payload: {
      data
    }
  }
}

const reject = (error) => {
  return {
    type: AUTH_REJECT,
    payload: {
      error
    }
  }
}
