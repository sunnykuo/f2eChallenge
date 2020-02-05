import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { updateCurrentPage } from '../actions'

class Header extends Component {
	constructor(props) {
		super(props)
		// this.state = {
		// 	showSearchContent: false
		// }
	}

	// handleDisplaySearchPopup(show = false) {
	// 	this.setState({
	// 		showSearchContent: show
	// 	})
	// }

	handleChangeViewMode() {
		this.props.changeViewMode()
	}

	render() {
		const { darkMode } = this.props
	return(
		<div className={`header d-flex align-items-center justify-content-between ${darkMode ? 'dark':''}`}>
			<div className="left d-flex align-items-center">QuickNote</div>
			<div className="right d-flex align-items-center">
				<div className="darkMode d-flex align-items-center">
					<i className="material-icons" onClick={()=> this.handleChangeViewMode()}>{`${darkMode ? 'toggle_on' : 'toggle_off'}`}</i>
					<div>Dark Mode</div>
				</div>
				<div className="setting">Settings</div>
				<div className="account d-flex align-items-center">
					<div>Jessy</div>
					<i className="material-icons">account_circle</i>
				</div>
			</div>
		</div>
)}
}
Header = connect()(Header)
export default Header
// Header.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }


