import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Sound from 'react-sound'
import { updateRingTones } from '../actions'

import alarm from '../ringtones/Alarm.mp3'
import alert from '../ringtones/Alert.mp3'
import beep from '../ringtones/Beep.mp3'
import bell from '../ringtones/Bell.mp3'
import bugle from '../ringtones/Bugle.mp3'
import clock from '../ringtones/Clock.mp3'
import digital from '../ringtones/Digital.mp3'


export default class Ringtones extends Component {

	constructor(props) {
		super(props)
		this.handleControlSound = this.handleControlSound.bind(this)
		this.state = {
			playStatus: 'stop',
			playId: 0
		}
	}

	handleControlSound(id, status) {
		this.setState({
			playStatus: status,
			playId: id
		})
	}

	render() {
		// const { value, onChange, options} = this.props

		const ringtones_option = [
			{name: 'none', ringtone: ''},
			{name: 'default', ringtone: 'alarm'},
			{name: 'alert', ringtone: 'alert'},
			{name: 'beep', ringtone: 'beep'},
			{name: 'bell', ringtone: 'bell'},
			{name: 'bugle', ringtone: 'bugle'},
			{name: 'clock', ringtone: 'clock'},
			{name: 'digital', ringtone: 'digital'}
		]
		let self = this;
	return(
	<div className="section_ringtones">
		<div className="ringtones_work">
			<div className="tab">work</div>
			<div className="options d-flex align-items-center flex-wrap">
			{ringtones_option.map(function(item,i){
				return (
					<div key={i} className="ringtone_option">
						<i className="material-icons" onClick={() => self.handleControlSound(i, 'play')}>radio_button_unchecked</i>{item.name}
						{item.name !== "none" && 
							<Sound url={`./dist/tomatoClock/ringtones/${item.ringtone}.mp3`} playStatus={`${self.state.playId === i && self.state.playStatus == 'play' ? Sound.status.PLAYING : Sound.status.STOPPED}`} 
							onPlaying={({position,duration}) => { 
								if(position>=5000) {self.handleControlSound(i,'stop')}}}/>
						}
					</div>)
			})}				
			</div>
		</div>
		<div className="ringtones_break">
			<div className="tab">break</div>
			<div className="options d-flex align-items-center flex-wrap">
			{ringtones_option.map(function(item,i){
				return (
					<div key={i} className="ringtone_option">
						<i className="material-icons" onClick={() => self.handleControlSound(i, 'play')}>radio_button_unchecked</i>{item.name}
						{item.name !== "none" && 
							<Sound url={`./dist/tomatoClock/ringtones/${item.ringtone}.mp3`} playStatus={`${self.state.playId === i && self.state.playStatus == 'play' ? Sound.status.PLAYING : Sound.status.STOPPED}`} 
							onPlaying={({position,duration}) => { 
								if(position>=5000) {self.handleControlSound(i,'stop')}}}/>
						}
					</div>)
			})}				
			</div>
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
