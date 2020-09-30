import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addMission, updateMissionTime, updateCurrentMission, updateBreakStatus } from '../actions'
import TimeFormat from 'hh-mm-ss'

class MainTodos extends Component {
	constructor(props) {
		super(props)
		this.handleAddMission = this.handleAddMission.bind(this)
		this.handleCompleteMission = this.handleCompleteMission.bind(this)
	}

	handleAddMission() {
		let value = this.refs.input_mission.value.trim();
		if (value === "") return;
		let newMission = {
			name: value,
			creatAt: Date.now(),
			completedTime: 0,
			current: this.props.missions.length === 0 ? true : false
		}

		this.refs.input_mission.value = '';
		this.props.handleAdd(newMission);
	}

	handleCompleteMission(index) {
		this.props.dispatch(updateMissionTime(index, 1500))
	}

	render() {
		const { switchPage, missions, breakTime } = this.props

		let currentMission = missions.find((item) => {
			return item.current === true;
		})
		let unfinishedMissionComponent = [];
			missions.map((mission, i) => {
				if (mission.completedTime < 1500 && mission.current === false) {
					unfinishedMissionComponent.push(
						<div className="mission" key={i}>
							<div className="mission_content">
								<div className="mission_name">
									<i className="material-icons" onClick={() => this.handleCompleteMission(i)}>radio_button_unchecked</i>
									<span>{mission.name}</span>
								</div>
								<i className="startButton material-icons">play_circle_outline</i>
							</div>
						</div>						
					)
				}
			})

		let	unfinishedMissionComponentDisplay = unfinishedMissionComponent.slice(0,3)
	return(
		<div className="main_todo d-flex flex-column">
			<div className="add_mission flex-fill">
				<input type="text" ref="input_mission" className="form-control" placeholder="ADD A NEW MISSION..."/>
				<i className="material-icons" onClick={this.handleAddMission}>add</i>
			</div>
			<div className="mission_lists flex-fill">
				{currentMission &&
					<div className="mission">
						<div className="mission_content current">
							<div className="mission_name">
								<i className="material-icons">radio_button_unchecked</i>
								<div>
									<div>{currentMission.name}</div>
								</div>
							</div>
						</div>
						<div className="time">{currentMission.finishedTime === 0 ? '25:00':''}</div>
					</div>
				}
				{unfinishedMissionComponentDisplay}
				{unfinishedMissionComponent.length > 3 &&
					<div className="more" onClick={() => switchPage(true,0)}>more</div>
				}											
			</div>
		</div>
)}
}
MainTodos = connect()(MainTodos)
export default MainTodos
// DetailPage.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

