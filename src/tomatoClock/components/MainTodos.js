import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addMission, updateMissionStatus, updateBreakStatus } from '../actions'

export default class MainTodos extends Component {
	constructor(props) {
		super(props)
		this.handleAddMission = this.handleAddMission.bind(this)
	}

	handleAddMission() {
		let value = this.refs.input_mission.value.trim();
		if (value === "") return;
		let newMission = {
			name: value,
			creatAt: Date.now(),
			status: 0
		}

		this.refs.input_mission.value = '';
		this.props.handleAdd(newMission);
	}

	render() {
		const { missions, breakTime } = this.props
		console.log(missions)
	return(
		<div className="main_todo d-flex flex-column">
			<div className="add_mission flex-fill">
				<input type="text" ref="input_mission" className="form-control" placeholder="ADD A NEW MISSION..."/>
				<i className="material-icons" onClick={this.handleAddMission}>add</i>
			</div>
			<div className="mission_lists flex-fill">
				<div className="mission">
					<div className="mission_content current">
						<div className="mission_name">
							<i className="material-icons">radio_button_unchecked</i>
							<div>
								<div>The first thing to do today</div>
							</div>
						</div>
					</div>
					<div className="time">25:00</div>
				</div>
				{missions.map((mission, i) => {
					if(mission.status == 0) {
						return (
							<div className="mission" key={i}>
								<div className="mission_content">
									<div className="mission_name">
										<i className="material-icons">radio_button_unchecked</i>
										<span>{mission.name}</span>
									</div>
									<i className="startButton material-icons">play_circle_outline</i>
								</div>
							</div>
							)
					}
				})}	
				<div className="more">more</div>											
			</div>
		</div>
)}
}

// DetailPage.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

