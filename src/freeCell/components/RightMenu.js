import React, { Component } from 'react'
import PropTypes from 'prop-types'
import hint from '../image/hint.png'
import undo from '../image/undo.png'
import newGame from '../image/newGame.svg'

export default class RightMenu extends Component {
	render() {
		// const { switchPage } = this.props
	return(
		<div className="menuArea d-flex flex-column">
			<img src={undo} width="30px"/>
			<img src={hint} width="30px"/>
			<img src={newGame} width="30px"/>
		</div>
	)}
}

// DetailPage.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

