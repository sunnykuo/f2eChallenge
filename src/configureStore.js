import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import exampleReducer from './example/reducers'

const allReducers = combineReducers({exampleReducer})
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