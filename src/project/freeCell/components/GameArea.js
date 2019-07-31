import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"
import '../components/CardsResource'
import { getInitCardLines } from '../actions'
import Card from '../components/Card'
import { DropTarget } from 'react-dnd'
import { compose } from 'redux'

const dropTarget = {

	drop(props, monitor, component) {

		// 此處已經可以得到 props(CardWall) 與 item (Card props)
		const item = monitor.getItem()    
		console.log('dropCard:', item) // card props
		console.log('dropWall', props) // card wall props
		const { id } = item
		const { updateCardStatus, status: targetStatus } = props

		// 更新 Card status
		updateCardStatus(id, targetStatus)

		return { moved: true }
	},
}

// collect function 回傳的 object
// 將會由 HOC 的方式以 props 帶入至 <CardWall /> 裡面
const dropCollect = (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	isOverCurrent: monitor.isOver({ shallow: true }),
	canDrop: monitor.canDrop(),
	itemType: monitor.getItemType(),
})

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
		const { 
				cardLines,
				isOver, // Injected by React DnD
				canDrop, // Injected by React DnD
				connectDropTarget, // Injected by React DnD				
			} = this.props
		if (cardLines.length === 0) return;
		console.log(cardLines.line1.length)
	return connectDropTarget(
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
			{Object.keys(cardLines).map((lineKey, index) => {
					return <Card lineIndex={index} key={lineKey} line={lineKey} cards={cardLines[lineKey]} />
				})				
			}					
			</div>						
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

// DropTarget 第一個參數為 item type(string)，
// 必須要跟 DragSource 的 item type 設為一樣才可以觸發 Drag & Drop
// export default DropTarget('CONNECT_CARD', dropTarget, dropCollect)(GameArea)
export default withRouter(compose(
	DropTarget('CONNECT_CARD', dropTarget, dropCollect),
	connect()
)(GameArea))
// export default withRouter(connect()(GameArea));
