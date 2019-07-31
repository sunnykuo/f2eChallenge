import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../components/CardsResource'
import { DragSource } from 'react-dnd'
import { withRouter } from "react-router-dom"

const dragSource = {
	beginDrag(props) {
	// 會將所有 <Card /> 的 props 帶到 onDrop Component 
		return {
			...props,
		}
	}
}

// collect function 回傳的 object
// 將會由 HOC 的方式以 props 帶入至 <Card /> 裡面
function dragCollect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		connectDragPreview: connect.dragPreview(),
		isDragging: monitor.isDragging()
	}
}

class Card extends Component {
	constructor(props) {
		super(props)
		this.setCardAnimation = this.setCardAnimation.bind(this)
		this.state = {
			init: true
		}
	}

	setCardAnimation(cardname, cardIndex, lineIndex) {
		console.log('ttt')
		if (!this.state.init) return;
		setTimeout(() => {
			this.refs[cardname].style.top = cardIndex * 25 + 'px';
			this.refs[cardname].style.opacity = 1;
		}, cardIndex * lineIndex * 30)

		if (lineIndex == 7 && cardIndex == this.props.cards.length-1) {
			this.setState({
				init: false
			})
		}
	}	

	render() {
		const { lineIndex, 
				line, 
				cards,
				isDragging, // Injected by React DnD
				connectDragPreview, // Injected by React DnD
				connectDragSource, // Injected by React DnD			
			} = this.props;
			console.log(cards.length)
	return connectDragSource(
		<div id={line} className="cardline">
			{cards.map((card, index) => {
				setTimeout(() => this.setCardAnimation(card.name, index, lineIndex))			
				return <div ref={card.name} key={index} className="card"><img src={`./dist/freeCell/svg/${card.name}.svg`} width="100%" /></div>
			})}
		</div>
	)}
}

// export component 的時候用 DragSource 以 HOC 的方式
// 將 Card 帶入，DragSource 第一個參數為 item type (string)，
// 會用來判斷 DropTarget 的 item type 是否為一樣，一樣才會觸發 Drag & Drop。
export default withRouter(DragSource('CONNECT_CARD', dragSource, dragCollect)(Card))
