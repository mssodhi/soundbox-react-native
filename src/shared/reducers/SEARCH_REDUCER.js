import { SEARCH, SEARCH_COMPLETED } from '../constants/action-constants'

const initialState = {
  loading: null,
  results: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SEARCH:
      return Object.assign({}, state, { loading: true });

    case SEARCH_COMPLETED:
      return Object.assign({}, state, { loading: false, results: action.payload });

    default:
      return state;
  }
}
