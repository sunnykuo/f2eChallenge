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
		const { selectedDrive, viewType } = this.props
	return(
		<ul className="nav d-flex align-items-end">
			<li className={`${selectedDrive === 'myDrives' ? 'active':''}`} onClick={() => this.handleSwitchDrive('myDrives')}><div>我的抽屜</div></li>
			<li className={`${selectedDrive === 'sharedDrives' ? 'active':''}`} onClick={() => this.handleSwitchDrive('sharedDrives')}><div>共用抽屜</div></li>
			<li className={`${selectedDrive === 'importantDrives' ? 'active':''}`} onClick={() => this.handleSwitchDrive('importantDrives')}><div>重要抽屜</div></li>
			<li className={`${selectedDrive === 'garbages' ? 'active':''}`} onClick={() => this.handleSwitchDrive('garbages')}><div>垃圾桶</div></li>
			<li className={`viewType ${viewType === 0 ? 'active':''}`} onClick={() => this.handleSwitchViewType(0)}><i className="material-icons">view_list</i></li>
			<li className={`viewType ${viewType === 1 ? 'active':''}`} onClick={() => this.handleSwitchViewType(1)}><i className="material-icons">apps</i></li>
		</ul>
)}
}

NavBar = connect()(NavBar)
export default NavBar
// NavBar.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

