import React, { Component } from 'react' 
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Router from './Router'
import './App.scss'

const store = configureStore()

export default class Root extends Component {
	render(){
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		)
	}
}