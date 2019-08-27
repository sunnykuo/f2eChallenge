import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import missionReducer from './reducers';

const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware,loggerMiddleware)
  // other store enhancers if any
);
export default function configureStore(preloadedState) {
	return createStore(
		missionReducer,
		preloadedState,
		enhancer
	)
}