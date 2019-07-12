import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todos extends Component {
	render() {
		// const { value, onChange, options} = this.props
	return(
	<div className="section_todo">
		<div className="add_mission">
			<input type="text" className="form-control" placeholder="ADD A NEW MISSION..."/>
			<i className="material-icons">add</i>
		</div>
		<div className="todos">
			<div className="tab d-flex justify-content-between align-items-center">
				<span>to-do</span>
				<i className="material-icons">arrow_drop_up</i>
			</div>
			<div className="lists">
				<div className="mission_content">
					<div className="mission_name">
						<i className="material-icons">radio_button_unchecked</i>
						<span>The first thing to do today</span>
					</div>
					<i className="startButton material-icons">play_circle_outline</i>
				</div>
				<div className="mission_content">
					<div className="mission_name">
						<i className="material-icons">radio_button_unchecked</i>
						<span>The second thing to do today</span>
					</div>
					<i className="startButton material-icons">play_circle_outline</i>
				</div>				
			</div>
		</div>
		<div className="todos done">
			<div className="tab d-flex justify-content-between align-items-center">
				<span>done</span>
				<i className="material-icons">arrow_drop_down</i>
			</div>
			<div className="lists">
				<div className="mission_content">
					<div className="mission_name">
						<i className="material-icons">check_circle_outline</i>
						<span>The third thing to do today</span>
					</div>
				</div>
				<div className="mission_content">
					<div className="mission_name">
						<i className="material-icons">check_circle_outline</i>
						<span>The fourth thing to do today</span>
					</div>
				</div>				
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
