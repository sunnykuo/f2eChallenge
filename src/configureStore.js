import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import exampleReducer from './project/example/reducers'
import missionReducer from './project/tomatoClock/reducers'
import freeCellReducer from './project/freeCell/reducers'
import mp3PlayerReducer from './project/mp3Player/reducers'
import paymentReducer from './project/payment/reducers'

const allReducers = combineReducers({ exampleReducer, missionReducer, freeCellReducer, mp3PlayerReducer, paymentReducer })
const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware,loggerMiddleware)
  // other store enhancers if any
);
export default function configureStore(preloadedState) {
	return createStore(
		allReducers,
		preloadedState,
		enhancer
	)
}