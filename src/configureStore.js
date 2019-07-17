import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import exampleReducer from './example/reducers'
import missionReducer from './tomatoClock/reducers'

const allReducers = combineReducers({ exampleReducer, missionReducer })
const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
	return createStore(
		allReducers,
		preloadedState,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	)
}