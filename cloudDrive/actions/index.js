import { UPDATE_SEARCH,UPDATE_SELECTED_DRIVE,UPDATE_SELECTED_ITEM,UPDATE_BOOKMARK,ADD_NEW_ITEM,UPDATE_VIEW_TYPE,DELETE_ITEM } from '../constants/constants'

export const updateSearch = conditions => ({
	type: UPDATE_SEARCH,
	conditions
})

export const updateSelectedDrive = drive => ({
	type: UPDATE_SELECTED_DRIVE,
	drive
})

export const updateSelectedItem = item => ({
	type: UPDATE_SELECTED_ITEM,
	item
})

export const updateBookmark = (drive, item, bookmark) => ({
	type: UPDATE_BOOKMARK,
	drive,
	item,
	bookmark
})

export const addNewItem = (drive, item) => ({
	type: ADD_NEW_ITEM,
	drive,
	item
})

export const updateViewType = viewType => ({
	type: UPDATE_VIEW_TYPE,
	viewType
})

export const deleteItem = (drive, item) => ({
	type: DELETE_ITEM,
	drive,
	item
})
