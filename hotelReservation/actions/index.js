import { REQUEST_ROOMS, RECEIVE_ROOMS, REQUEST_ROOM_DETAIL, RECEIVE_ROOM_DETAIL, BOOK_ROOM_RESULT, REQUEST_BOOK_ROOM, RESET_BOOK_RESULT } from '../constants/constants'

export const resetBookResult = () => ({
	type: RESET_BOOK_RESULT
})

const headers = new Headers({
	'Authorization': 'Bearer kyTOHSZM5dlJmaeXuJ9ObUFhQA8GCJIufia8muu5BtP6ZglFdF2egnEhp1JO',
    'Accept': 'application/json',
    'Content-Type': 'application/json',		
})

const requestRooms = () => ({
	type: REQUEST_ROOMS
})

const receiveRooms = (json) => ({
	type: RECEIVE_ROOMS,
	rooms: json.items
})

const fetchRooms = () => {
	return dispatch => {
		dispatch(requestRooms())
		return fetch('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',{
			    method: 'GET',
			    mode: 'cors',
			    headers: headers
			})
			.then(response => {
				return response.json()
			})
			.then(json => dispatch(receiveRooms(json)))
	}
}

const shouldFetchRooms = (state) => {
 	const rooms = state.roomsReducer
	if (!rooms) {
		return true
	} else if (rooms.isFetching) {
		return false
	} else {
		return rooms.roomList
	}
}

export const fetchRoomsIfNeeded = () => {
	return (dispatch, getState) => {
		if (shouldFetchRooms(getState())) {
			return dispatch(fetchRooms())
		}
	}
}

const requestRoomDetail = () => ({
	type: REQUEST_ROOM_DETAIL
})

const receiveRoomDetail = (json) => ({
	type: RECEIVE_ROOM_DETAIL,
	roomDetail: json
})

export const fetchRoomDetail = id => {
	return dispatch => {
		dispatch(requestRoomDetail())
		return fetch(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`,{
			    method: 'GET',
			    mode: 'cors',
			    headers: headers
			})
			.then(response => {
				return response.json()
			})
			.then(json => dispatch(receiveRoomDetail(json)))
	}
}

const requestbookRoom = () => ({
	type: REQUEST_BOOK_ROOM
})

const bookRoomResult = (json) => ({
	type: BOOK_ROOM_RESULT,
	result: json
})

export const bookRoom = (id, data) => {
	return dispatch => {
		dispatch(requestbookRoom())
		return fetch(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`,{
			    method: 'POST',
			    mode: 'cors',
			    headers: headers,
			    body: JSON.stringify(data)
			})
			.then(response => {
				return response.json()
			})
			.then(json => dispatch(bookRoomResult(json)))		
	}
}