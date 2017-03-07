import { SEARCH, SEARCH_COMPLETED } from '../../../shared/constants/action-constants'
import { constructSearchUrl } from '../../../shared/services/soundcloud.service'

export const search = (query) => {
  return dispatch => {
    dispatch({ type: SEARCH });
    fetch(constructSearchUrl(query))
      .then((response) => response.json())
      .then((searchResults) => dispatch(resolveSearch(searchResults.collection.filter(obj => obj.kind === 'user'))))
      .catch((error) => {
        console.error(error);
      });
  }
}

const resolveSearch = (data) => {
  return {
    type: SEARCH_COMPLETED,
    payload: data
  }
}
