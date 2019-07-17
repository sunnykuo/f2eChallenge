import { combineReducers } from 'redux'

import { ADD_MISSION, UPDATE_MISSION_STATUS, UPDATE_BREAK_STATUS, UPDATE_RINGTONES } from '../constants/constants'


const initialState = {
	missions: [],
	ringtones: {
		work: 'none',
		break: 'none'
	},
	breakTime: {
		status: false,
		time: 5
	}
}

const missionReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MISSION:
			let missions = state.missions;
			missions.push(action.mission)			
			return Object.assign({}, state, {
				missions
			})
		// case REQUEST_POSTS:
		// 	return Object.assign({}, state, {isFetching: true, didInvalidate: false})
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
