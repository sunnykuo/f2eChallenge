import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../components/CardsResource'
import { DragSource } from 'react-dnd'

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

	setCardAnimation(cardname, cardIndex, lineIndex, cardlength) {
		if (!this.state.init) return;
		setTimeout(() => {
			this.refs[cardname].style.top = cardIndex * 25 + 'px';
			this.refs[cardname].style.opacity = 1;
		}, cardIndex * lineIndex * 30)

		if (lineIndex == 7 && cardIndex == cardlength-1) {
			this.setState({
				init: false
			})
		}
	}	

	render() {
		const { lineIndex, 
				line, 
				cardLines,
				isDragging, // Injected by React DnD
				connectDragPreview, // Injected by React DnD
				connectDragSource, // Injected by React DnD			
			} = this.props;

	return connectDragSource(
		<div id={line} className="cardline">
			{cardLines[line].map((card, index) => {
				setTimeout(() => this.setCardAnimation(card.name, index, lineIndex, cardLines[line].length))			
				return <div ref={card.name} key={index} className="card"><img src={`./dist/svg/${card.name}.svg`} width="100%" /></div>
			})}
		</div>
	)}
}

// export component 的時候用 DragSource 以 HOC 的方式
// 將 Card 帶入，DragSource 第一個參數為 item type (string)，
// 會用來判斷 DropTarget 的 item type 是否為一樣，一樣才會觸發 Drag & Drop。
export default DragSource('CONNECT_CARD', dragSource, dragCollect)(Card)
