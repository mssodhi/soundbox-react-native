import { LOAD_FAVORITES, LOAD_FAVORITES_COMPLETED } from './favoritesTypes';
import { Map } from 'immutable';

export default (state = Map({}), action) => {
  switch (action.type) {
    case LOAD_FAVORITES:
      return Map({ loading: true });
    case LOAD_FAVORITES_COMPLETED:
      return Map({ loading: false, data: action.payload.data, tracks: action.payload.tracks });
    default:
      return state;
  }
}
