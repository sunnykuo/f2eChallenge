import { UPDATE_CREDITCARD } from '../constants/constants'

export const updateCreditCard = (updateColumn, value) => ({
	type: UPDATE_CREDITCARD,
	updateColumn,
	value
})
