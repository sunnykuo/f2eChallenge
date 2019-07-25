import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../components/CardsResource'

export default class Card extends Component {
	constructor(props) {
		super(props)
		this.setCardAnimation = this.setCardAnimation.bind(this)
		this.state = {
			init: true
		}
	}

	setCardAnimation(cardname, cardIndex, lineIndex) {
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
		const { lineIndex, line, cards } = this.props;
	return (
		<div ref={line} id={line} className="cardline">
			{cards.map((card, index) => {
				setTimeout(() => this.setCardAnimation(card.name, index, lineIndex))			
				return <div ref={card.name} key={index} className="card"><img src={`./dist/freeCell/svg/${card.name}.svg`} width="100%" /></div>
			})}
		</div>
	)}
}