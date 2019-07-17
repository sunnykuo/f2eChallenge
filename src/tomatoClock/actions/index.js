import { ADD_MISSION, UPDATE_MISSION_STATUS, UPDATE_BREAK_STATUS, UPDATE_RINGTONES } from '../constants/constants'

export const addMission = mission => ({
	type: ADD_MISSION,
	mission
})

export const updateMissionStatus = mission => ({
	type: UPDATE_MISSION_STATUS,
	mission
})

export const updateBreakStatus = breakStatus => ({
	type: UPDATE_BREAK_STATUS,
	breakStatus
})

export const updateRingTones = ringtones => ({
	type: UPDATE_RINGTONES,
	ringtones
})
