import { LOAD_CHARTS, LOAD_CHARTS_COMPLETED, LOAD_GENRES, LOAD_GENRES_COMPLETED } from '../../../shared/constants/action-constants';

export const loadCharts = (genre) => {
    return dispatch => {
        dispatch({ type: LOAD_CHARTS });
        fetch(`http://mssodhi.me/soundbox/api/charts/getByGenre/${genre}`)
            .then((response) => response.json())
            .then((res) => dispatch(resolveCharts(res.collection.map(obj => obj.track))))
            .catch((error) => {
                console.error(error);
            });
    }
}

export const loadGenres = () => {
    return dispatch => {
        dispatch({ type: LOAD_GENRES });
        fetch('http://mssodhi.me/soundbox/api/charts/getGenres')
            .then((response) => response.json())
            .then((res) => resolveGenres(res))
            .catch((error) => {
                console.error(error);
            });
    }
}

const resolveCharts = (tracks) => {
    console.log(tracks)
    return {
        type: LOAD_CHARTS_COMPLETED,
        payload: tracks
    }
}

const resolveGenres = (genres) => {
    return {
        type: LOAD_GENRES_COMPLETED,
        payload: genres
    }
}