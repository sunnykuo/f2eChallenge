import { REQUEST_ROOMS, RECEIVE_ROOMS, REQUEST_ROOM_DETAIL, RECEIVE_ROOM_DETAIL, BOOK_ROOM_RESULT, REQUEST_BOOK_ROOM, RESET_BOOK_RESULT } from '../constants/constants'

const initialState = {
	isFetching: false,
	roomList: [],
	roomDetail: {},
	isBooking: false,
	bookResult: null
}

const hotelReducer = (state = initialState, action) => {
	let currentPlay = null;

	switch (action.type) {		
		case REQUEST_ROOMS:
		case REQUEST_ROOM_DETAIL:
			return Object.assign({}, state, {isFetching: true})	
		case REQUEST_BOOK_ROOM: 
			return Object.assign({}, state, {isBooking: true})	
		case RECEIVE_ROOMS:
			return Object.assign({}, state, {
		        roomList: action.rooms,
		        isFetching: false        
	      	})
	    case RECEIVE_ROOM_DETAIL:
			return Object.assign({}, state, {
		        roomDetail: action.roomDetail,
		        isFetching: false		        
	      	})
	    case BOOK_ROOM_RESULT:
			return Object.assign({}, state, {
		        bookResult: action.result,
		        isBooking: false		        
	      	})
	    case RESET_BOOK_RESULT: 
	    	return Object.assign({}, state, {bookResult: null})      		    
		default:
			return state
	}
}

export default hotelReducer
