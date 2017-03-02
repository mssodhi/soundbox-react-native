CLIENT_ID = '0f7c969c815f51078c1de513f666ecdb';

export const constructSongUrl = (trackId) => {
	return `http://api.soundcloud.com/tracks/${trackId}?client_id=${CLIENT_ID}`;
}

export const constructUserSongsUrl = (userId) => {
	return `http://api.soundcloud.com/users/${userId}/tracks?client_id=${CLIENT_ID}`;
}

export const constructUserUrl = (userId) => {
	return `http://api.soundcloud.com/users/${userId}?client_id=${CLIENT_ID}`;
}

export const constructPlayerUrl = (trackId) => {
	return `http://api.soundcloud.com/tracks/${trackId}/stream?client_id=${CLIENT_ID}`;
}