import React, { Component } from 'react'
import { connect } from 'react-redux'
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


class Ringtones extends Component {

	constructor(props) {
		super(props)
		this.handleControlSound = this.handleControlSound.bind(this)
		this.state = {
			ringtones: this.props.ringtones,
			playStatus: 'stop',
			playType: 'work',
			ringtones_option: [
				{id: 0, name: 'none', ringtone: ''},
				{id: 1, name: 'default', ringtone: 'alarm'},
				{id: 2, name: 'alert', ringtone: 'alert'},
				{id: 3, name: 'beep', ringtone: 'beep'},
				{id: 4, name: 'bell', ringtone: 'bell'},
				{id: 5, name: 'bugle', ringtone: 'bugle'},
				{id: 6, name: 'clock', ringtone: 'clock'},
				{id: 7, name: 'digital', ringtone: 'digital'}			
			]
		}
	}

	handleControlSound(type, id, status) {
		if (status === 'play') {
			let ringtones = this.props.ringtones
			ringtones[type] = id		
			this.props.dispatch(updateRingTones(ringtones))
		}
		this.setState({
			playStatus: status,
			playType: type
		})			
	}

	render() {
		const { ringtones } = this.props
		let self = this

	return(
	<div className="section_ringtones">
		<div className="ringtones_work">
			<div className="tab">work</div>
			<div className="options d-flex align-items-center flex-wrap">
			{this.state.ringtones_option.map(function(item,i){
				return (
					<div key={i} className="ringtone_option" onClick={() => self.handleControlSound('work', item.id, 'play')}>
						<i className="material-icons">{ringtones.work === item.id ? 'radio_button_checked' : 'radio_button_unchecked'}</i>{item.name}
						{item.name !== "none" && 
							<Sound url={`./dist/ringtones/${item.ringtone}.mp3`} playStatus={`${ringtones.work === item.id && self.state.playStatus == 'play' && self.state.playType == 'work' ? Sound.status.PLAYING : Sound.status.STOPPED}`} 
							onPlaying={({position,duration}) => { 
								if(position>=5000) {self.handleControlSound('work', item.id,'stop')}}}/>
						}
					</div>)
			})}				
			</div>
		</div>
		<div className="ringtones_break">
			<div className="tab">break</div>
			<div className="options d-flex align-items-center flex-wrap">
			{this.state.ringtones_option.map(function(item,i){
				return (
					<div key={i} className="ringtone_option" onClick={() => self.handleControlSound('break', item.id, 'play')}>
						<i className="material-icons">{ringtones.break === item.id ? 'radio_button_checked' : 'radio_button_unchecked'}</i>{item.name}
						{item.name !== "none" && 
							<Sound url={`./dist/ringtones/${item.ringtone}.mp3`} playStatus={`${ringtones.break === item.id && self.state.playStatus == 'play' && self.state.playType == 'break' ? Sound.status.PLAYING : Sound.status.STOPPED}`} 
							onPlaying={({position,duration}) => { 
								if(position>=5000) {self.handleControlSound('break', item.i,'stop')}}}/>
						}
					</div>)
			})}				
			</div>
		</div>
	</div>
)}
}
Ringtones = connect()(Ringtones)
export default Ringtones

// DetailPage.propTypes = {
// 	options: PropTypes.arrayOf(
// 		PropTypes.string.isRequried
// 	).isRequried,	
// 	value: PropTypes.string.isRequried,
// 	onChange: PropTypes.func.isRequried
// }
