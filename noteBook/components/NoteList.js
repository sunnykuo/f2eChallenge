import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { updateCurrentPage } from '../actions'

class NoteList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			viewMode: 0
		}
	}

	handleChangeViewMode(type) {
		if (type == this.state.viewMode) return;

		this.setState({
			viewMode: type
		})
	}

	render() {
		// const { displaySearchPopup } = this.props
	return(
		<div className="noteList">
			<div className="viewMode d-flex justify-content-end">
				<div className={`mode ${this.state.viewMode == 0 ? 'active':''}`}><i className="material-icons" onClick={() => this.handleChangeViewMode(0)}>list</i></div>
				<div className={`mode ${this.state.viewMode == 1 ? 'active':''}`}><i className="material-icons" onClick={() => this.handleChangeViewMode(1)}>dashboard</i></div>
			</div>
			<div className="list">
				
			</div>
		</div>
)}
}

NoteList = connect()(NoteList)
export default NoteList



