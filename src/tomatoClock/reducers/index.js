import { combineReducers } from 'redux'
import { ADD_MISSION, UPDATE_MISSION_TIME, UPDATE_CURRENT_MISSION, UPDATE_BREAK_STATUS, UPDATE_RINGTONES } from '../constants/constants'

const initialState = {
	missions: [],
	ringtones: {
		work: 'none',
		break: 'none'
	},
	breakTime: {
		status: false,
		time: 300
	}
}

const missions = (state = initialState.missions, action) => {
	switch (action.type) {
		case ADD_MISSION:
			return [
				...state,
				action.mission
			]
		case UPDATE_MISSION_TIME:
			return state.map((todo, i) => 
				i === action.index ? (action.time === 1500 ? { ...todo, completedTime: action.time, current: false} : { ...todo, completedTime: action.time}) : todo
			)		
		case UPDATE_CURRENT_MISSION: 
			return state.map((todo, i) => 
				i === action.index ? { ...todo, current: true} : (todo.current === true ? {...todo, current: false} : todo)
			)			
		// case RECEIVE_POSTS:
		// 	return Object.assign({}, state, {
		//         isFetching: false,
		//         didInvalidate: false,
		//         items: action.posts,
		//         lastUpdated: action.receivedAt
	 //      	})
		default:
			return state
	}
}

const breakTime = (state = initialState.breakTime, action) => {
	switch (action.type) {
		case ADD_MISSION:
			// return [
			// 	...state,
			// 	action.mission
			// ]
		default:
			return state
	}
}

const ringtones = (state = initialState.ringtones, action) => {
	switch (action.type) {
		// case ADD_MISSION:
		// 	return [
		// 		...state,
		// 		action.mission
		// 	]
		default:
			return state
	}
}

const missionReducer = combineReducers({ missions, breakTime, ringtones})

export default missionReducer
