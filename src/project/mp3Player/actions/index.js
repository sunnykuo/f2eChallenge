import { UPDATE_FAVORITE, UPDATE_CURRENT_PLAY, UPDATE_CURRENT_PAGE, UPDATE_CURRENT_ALBUM } from '../constants/constants'

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
