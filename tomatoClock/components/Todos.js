import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addMission, updateMissionTime, updateCurrentMission } from '../actions'

class Todos extends Component {
	constructor(props) {
		super(props)
		this.handleAddMission = this.handleAddMission.bind(this)
		this.handleCompleteMission = this.handleCompleteMission.bind(this)
		this.handleExpandList = this.handleExpandList.bind(this)
		this.state = {
			todo_expand: true,
			done_expand: true
		}
	}

	handleAddMission() {
		let value = this.refs.input_new_mission.value.trim();
		if (value === "") return;
		let newMission = {
			name: value,
			creatAt: Date.now(),
			completedTime: 0,
			current: this.props.missions.length === 0 ? true : false
		}

		this.refs.input_new_mission.value = ''
		this.props.dispatch(addMission(newMission))
	}

	handleCompleteMission(index) {
		this.props.dispatch(updateMissionTime(index, 1500))
	}

	handleExpandList(type) {
		if (type === 'todo') {
			this.setState({
				todo_expand: !this.state.todo_expand
			})
		} else {
			this.setState({
				done_expand: !this.state.done_expand
			})
		}
	}

	render() {
		const { missions } = this.props
		return(
		<div className="section_todo">
			<div className="add_mission">
				<input ref="input_new_mission" type="text" className="form-control" placeholder="ADD A NEW MISSION..."/>
				<i className="material-icons" onClick={this.handleAddMission}>add</i>
			</div>
			<div className="todos">
				<div className="tab d-flex justify-content-between align-items-center">
					<span>to-do</span>
					<i className="material-icons" onClick={()=>this.handleExpandList('todo')}>{this.state.todo_expand ? 'arrow_drop_up':'arrow_drop_down'}</i>
				</div>
				<div className="lists" style={{display: `${this.state.todo_expand ? 'block':'none'}`}}>
				{missions.map((item, i) => {
					if (item.completedTime < 1500) {
						return(
							<div key={i} className="mission_content">
								<div className="mission_name">
									<i className="material-icons" onClick={() => this.handleCompleteMission(i)}>radio_button_unchecked</i>
									<span>{item.name}</span>
								</div>
								<i className="startButton material-icons">play_circle_outline</i>
							</div>
						)
					}
				})}			
				</div>
			</div>
			<div className="todos done">
				<div className="tab d-flex justify-content-between align-items-center">
					<span>done</span>
					<i className="material-icons" onClick={()=>this.handleExpandList('done')}>{this.state.done_expand ? 'arrow_drop_up':'arrow_drop_down'}</i>
				</div>
				<div className="lists" style={{display: `${this.state.done_expand ? 'block':'none'}`}}>
				{missions.map((item, i) => {
					if (item.completedTime === 1500) {
						return (
							<div key={i} className="mission_content">
								<div className="mission_name">
									<i className="material-icons">check_circle_outline</i>
									<span>{item.name}</span>
								</div>
							</div>
						)
					}
				})}	
				</div>
			</div>
		</div>
	)}
}
Todos = connect()(Todos)
export default Todos

// DetailPage.propTypes = {
// 	options: PropTypes.arrayOf(
// 		PropTypes.string.isRequried
// 	).isRequried,	
// 	value: PropTypes.string.isRequried,
// 	onChange: PropTypes.func.isRequried
// }
