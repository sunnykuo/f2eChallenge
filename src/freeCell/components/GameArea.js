import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"
import '../components/Cards'
import { getInitCardLines } from '../actions'


class GameArea extends Component {
	constructor(props) {
		super(props)
		// this.handleAddMission = this.handleAddMission.bind(this)
		// this.handleCompleteMission = this.handleCompleteMission.bind(this)
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(getInitCardLines())
	}

	render() {
		const { cardLines } = this.props
		if (cardLines.length === 0) return;
		let cardComponent = [];
		for (let key in cardLines) {
			cardComponent.push(<CardComponent key={key} line={key} cards={cardLines[key]} />)
		}
	return(
		<div className="gameArea">
			<div className="gameArea_head d-flex justify-content-between flex-wrap">
				<div className="tempArea d-flex">
					<div ref="temp1" className="rect"></div>
					<div ref="temp2" className="rect"></div>
					<div ref="temp3" className="rect"></div>
					<div ref="temp4" className="rect"></div>
				</div>
				<div className="collectArea d-flex">
					<div ref="collect1" className="rect"></div>
					<div ref="collect2"className="rect"></div>
					<div ref="collect3"className="rect"></div>
					<div ref="collect4" className="rect"></div>							
				</div>
			</div>
			<div className="gameArea_card d-flex">
			{cardComponent}										
			</div>						
		</div>
)}
}

class CardComponent extends Component {
	render() {
		const { line, cards } = this.props;
		let topPosition = 0;
	return (
		<div ref={line} className="cardline">
			{cards.map((card, index) => {
				topPosition += 25
				return <div key={index} className="card" style={{top: `${topPosition}px`}}><img src={`./dist/freeCell/svg/${card.name}.svg`} width="100%" /></div>
			})}
		</div>
	)}
}

// DetailPage.propTypes = {
// 	options: PropTypes.arrayOf(
// 		PropTypes.string.isRequried
// 	).isRequried,	
// 	value: PropTypes.string.isRequried,
// 	onChange: PropTypes.func.isRequried
// }
export default withRouter(connect()(GameArea));
