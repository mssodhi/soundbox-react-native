import { LOAD_TRACK, LOAD_TRACK_COMPLETED, LOAD_STREAM_URL_COMPLETED } from './musicPlayerTypes';
import { constructSongUrl, constructPlayerUrl } from '../../services/soundcloud.service';

export const loadTrack = (track) => {
    return dispatch => {
        dispatch({ type: LOAD_TRACK });
        dispatch(resolveTrack(track));
        console.log(constructPlayerUrl(track.id));
        fetch(constructPlayerUrl(track.id))
            .then((response) => {
                dispatch(resolvePlayer(response.url));
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

const resolveTrack = (track) => {
    console.log(track);
    return {
        type: LOAD_TRACK_COMPLETED,
        payload: track
    }
}

const resolvePlayer = (streamUrl) => {
    return {
        type: LOAD_STREAM_URL_COMPLETED,
        payload: streamUrl
    }
}