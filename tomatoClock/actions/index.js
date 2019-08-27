import { ADD_MISSION, UPDATE_MISSION_TIME, UPDATE_CURRENT_MISSION, UPDATE_BREAK_STATUS, UPDATE_RINGTONES } from '../constants/constants'

export const addMission = mission => ({
	type: ADD_MISSION,
	mission
})

export const updateMissionTime = (idx, time) => ({
	type: UPDATE_MISSION_TIME,
	index: idx,
	time
})

export const updateCurrentMission = (idx) => ({
	type: UPDATE_CURRENT_MISSION,
	index: idx
})

export const updateBreakStatus = breakStatus => ({
	type: UPDATE_BREAK_STATUS,
	breakStatus
})

export const updateRingTones = ringtones => ({
	type: UPDATE_RINGTONES,
	ringtones
})
