import { combineReducers } from 'redux'
import { GET_INIT_CARDLINES, UPDATE_MISSION_TIME, UPDATE_CURRENT_MISSION, UPDATE_BREAK_STATUS, UPDATE_RINGTONES } from '../constants/constants'

const getCards = () => {
	let cards = [];
	for (let i=1; i<=13; i++) {
		cards.push({name: 'cc_'+i, currentPosition: null, lastPosition: null, lastOrder: 0})
		cards.push({name: 'ca_'+i, currentPosition: null, lastPosition: null, lastOrder: 0})
		cards.push({name: 'tr_'+i, currentPosition: null, lastPosition: null, lastOrder: 0})
		cards.push({name: 'pi_'+i, currentPosition: null, lastPosition: null, lastOrder: 0})
	}
	 return cards
}
const initialState = {
	cards: getCards(),
	cardLines: {
		line1: [],
		line2: [],
		line3: [],
		line4: [],
		line5: [],
		line6: [],
		line7: [],
		line8: []
	}
}

const cardLines = (state = initialState.cardLines, action) => {
	switch (action.type) {
		case GET_INIT_CARDLINES:
		return Object.assign({}, state, action.cardLines)
		// case UPDATE_MISSION_TIME:
		// 	return state.map((todo, i) => 
		// 		i === action.index ? (action.time === 1500 ? { ...todo, completedTime: action.time, current: false} : { ...todo, completedTime: action.time}) : todo
		// 	)		
		default:
			return state
	}
}

const cards = (state = initialState.cards, action) => {
	switch (action.type) {				
		// case UPDATE_MISSION_TIME:
		// 	return state.map((todo, i) => 
		// 		i === action.index ? (action.time === 1500 ? { ...todo, completedTime: action.time, current: false} : { ...todo, completedTime: action.time}) : todo
		// 	)		
		default:
			return state
	}
}


const freeCellReducer = combineReducers({ cards, cardLines })

export default freeCellReducer
