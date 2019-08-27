import React, { Component } from 'react' 
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import TomatoClock from './main'
const store = configureStore()

export default class App extends Component {
	render(){
		return (
			<Provider store={store}>
				<TomatoClock />
			</Provider>
		)
	}
}