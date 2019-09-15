import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateViewType, updateSelectedDrive } from '../actions'

class NavBar extends Component {
	constructor(props) {
		super(props)		
	}

	handleSwitchViewType(type) {
		if (type === this.props.viewType) return;
		this.props.dispatch(updateViewType(type))
	}

	handleSwitchDrive(dirveName) {
		if (dirveName === this.props.selectedDrive) return;
		this.props.dispatch(updateSelectedDrive(dirveName))
	}	

	render() {
		const { selectedCategory } = this.props
	return(
		<ul className="nav d-flex align-items-end justify-content-center">
			<li className={`${selectedCategory === 'all' ? 'active':''}`}>All</li>
			<li className={`${selectedCategory === 'travel' ? 'active':''}`}>Travel</li>
			<li className="addCategory"><i className="material-icons">add_circle_outline</i>Add new category</li>
		</ul>
)}
}

NavBar = connect()(NavBar)
export default NavBar
// NavBar.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

