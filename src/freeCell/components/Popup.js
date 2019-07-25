import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Popup extends Component {
	render() {
		const { type } = this.props
	return(
		<div className="popup d-flex justify-content-center align-items-center">
		{type == 'win' &&
			<WinPopup />
		}
		{type == 'lose' &&
			<LosePopup />
		}		
		</div>
	)}
}

const WinPopup = () => (
	<div className="inner win">
		<div className="title">win</div>
		<div className="desc">Play again?</div>
		<div className="buttons">
			<button className="btn">yes</button>
			<button className="btn">no</button>
		</div>
	</div>	
)

const LosePopup = () => (
	<div className="inner lose">
		<div className="title">no more moves</div>
		<div className="buttons d-flex align-items-center flex-column">
			<button className="btn">Restart this Game</button>
			<button className="btn">Quit and Start a New Game</button>
			<button className="btn">Go back and undo some moves</button>			
		</div>
	</div>	
)

// DetailPage.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

