import { UPDATE_FAVORITE, UPDATE_CURRENT_PLAY, UPDATE_CURRENT_PAGE, UPDATE_CURRENT_ALBUM, 
UPDATE_PLAY_TIME, UPDATE_PLAY_LOOP, UPDATE_PLAY_RANDOM, UPDATE_PLAY_VOLUME, UPDATE_PLAY_STATUS } from '../constants/constants'

export const updateFavorite = favorite => ({
	type: UPDATE_FAVORITE,
	favorite
})

export const updateCurrentPlay = playInfo => ({
	type: UPDATE_CURRENT_PLAY,
	playInfo
})

export const updateCurrentPage = page => ({
	type: UPDATE_CURRENT_PAGE,
	page
})

export const updateCurrentAlbum = album => ({
	type: UPDATE_CURRENT_ALBUM,
	album
})

export const updatePlayTime = time => ({
	type: UPDATE_PLAY_TIME,
	time
})

export const updatePlayLoop = loop => ({
	type: UPDATE_PLAY_LOOP,
	loop
})

export const updatePlayRandom = random => ({
	type: UPDATE_PLAY_RANDOM,
	random
})

export const updatePlayVolume = volume => ({
	type: UPDATE_PLAY_VOLUME,
	volume
})

export const updatePlayStatus = (time, status) => ({
	type: UPDATE_PLAY_STATUS,
	time,
	status
})
