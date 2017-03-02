import { LOAD_CHARTS, LOAD_CHARTS_COMPLETED, LOAD_GENRES, LOAD_GENRES_COMPLETED } from './chartsTypes';

const initialState = {
  loadingCharts: null,
  loadingGenres: null,
  tracks: [],
  genres: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LOAD_CHARTS:
      return Object.assign({}, state, { loadingCharts: true });

    case LOAD_CHARTS_COMPLETED:
      return Object.assign({}, state, { loadingCharts: false, tracks: action.payload });

    case LOAD_GENRES:
      return Object.assign({}, state, { loadingGenres: true } );

    case LOAD_GENRES_COMPLETED:
      return Object.assign({}, state, { loadingGenres: false, genres: action.payload } );

    default:
      return state;
  }
}
