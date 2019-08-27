import { UPDATE_CREDITCARD } from '../constants/constants'

const initialState = {
	creditCard: {
		name: "",
		number: [],
		validDate: {
			month: '',
			year: ''
		},
		cvc: "",
		phone: ""
	}
}

const paymentReducer = (state = initialState, action) => {
	let currentPlay = null;

	switch (action.type) {		
		case UPDATE_CREDITCARD:
			return Object.assign({}, state, {currentPlay: action.playInfo})
		// case UPDATE_CREDITCARD:			
		// 	currentPlay = Object.assign({}, state.currentPlay, {playtime: action.time})
		// 	return Object.assign({}, state, {currentPlay: currentPlay})
										
		default:
			return state
	}
}

export default paymentReducer
