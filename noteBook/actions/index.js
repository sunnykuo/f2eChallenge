import { UPDATE_SELECTED_ITEM,UPDATE_BOOKMARK,UPDATE_VIEW_TYPE,DELETE_ITEM,ADD_CATEGORY,UPDATE_SELECTED_CATEGORY,UPDATE_SELECTED_NOTE,ADD_NOTE,UPDATE_NOTE } from '../constants/constants'

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

export const updateViewType = viewType => ({
	type: UPDATE_VIEW_TYPE,
	viewType
})

export const deleteItem = (drive, item) => ({
	type: DELETE_ITEM,
	drive,
	item
})

export const addCategory = (item) => ({
	type: ADD_CATEGORY,
	item
})

export const updateSelectedCategory = (category) => ({
	type: UPDATE_SELECTED_CATEGORY,
	category
})

export const updateSelectedNote = (noteId) => ({
	type: UPDATE_SELECTED_NOTE,
	noteId
})

export const addNote = (name, category) => ({
	type: ADD_NOTE,
	name,
	category
})

export const updateNote = (note) => ({
	type: UPDATE_NOTE,
	id: note.id,
	title: note.title,
	content: note.content,
	category: note.category
})
