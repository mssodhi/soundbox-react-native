import { LOAD_FAVORITES, LOAD_FAVORITES_ARTISTS_COMPLETED, LOAD_FAVORITES_TRACKS_COMPLETED } from './favoritesTypes';
import { Map } from 'immutable';

export default (state = Map({}), action) => {
  switch (action.type) {

    case LOAD_FAVORITES:
      return Map({ loading: true });

    case LOAD_FAVORITES_ARTISTS_COMPLETED:
      return Map({ loading: false, artists: action.payload });

    case LOAD_FAVORITES_TRACKS_COMPLETED:
      return Map({ loading: false, tracks: action.payload });

    default:
      return state;
  }
}
