import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import App from './App'

render(
	<App />,
	document.getElementById('app')	
)

//hot-module-replacement( HMR )
if (module.hot) {
	module.hot.accept();
}