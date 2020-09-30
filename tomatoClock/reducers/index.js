import { combineReducers } from 'redux'
import { ADD_MISSION, UPDATE_MISSION_TIME, UPDATE_CURRENT_MISSION, UPDATE_BREAK_STATUS, UPDATE_RINGTONES } from '../constants/constants'

const initialState = {
	missions: [],
	ringtones: {
		work: 0,
		break: 0
	},
	breakTime: {
		status: false,
		time: 300
	}
}

const missionReducer = (state = initialState, action) => {
	let missions = []
	switch (action.type) {
		case ADD_MISSION:
			missions = Object.assign([], state.missions)
			missions.push(action.mission)
			return Object.assign({}, state, {missions: missions})
			
		// case UPDATE_MISSION_TIME:
		// 	return state.map((todo, i) => 
		// 		i === action.index ? (action.time === 1500 ? { ...todo, completedTime: action.time, current: false} : { ...todo, completedTime: action.time}) : todo
		// 	)		
		// case UPDATE_CURRENT_MISSION: 
		// 	return state.map((todo, i) => 
		// 		i === action.index ? { ...todo, current: true} : (todo.current === true ? {...todo, current: false} : todo)
		// 	)	
		case UPDATE_RINGTONES: 
			return Object.assign({}, state, {ringtones: action.ringtones})				
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

export default missionReducer
