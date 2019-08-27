import React, { Component } from 'react'
import Phaser from 'phaser'
import { gameStart } from "./components/gameStart";
import { gamePlay } from "./components/gamePlay";
import './main.scss'
// export interface IGameProps {}

export default class Minigame extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
	    const config = {
			type: Phaser.AUTO,
			width: 1200,
			height: 768,
			parent: "minigame",
		     physics: {
		        default: 'arcade',
		        arcade: {
		            gravity: {
		                y: 0
		            }
		        }
		     },			
			scene: [gamePlay]
	    };

	    new Phaser.Game(config);		
	}

	render() {
		return (
			<div id="minigame" 
				className="d-flex align-items-center justify-content-center"
				style={{width: '100vw',height: '100vh'}}>		
			</div>
		)
	}
}

