import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateCurrentPage } from '../actions'
import logoSvg from '../image/logo.svg'
import memberSvg from '../svg/member.svg'

class Header extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		// const { switchPage, missions, breakTime } = this.props
	return(
		<div className="header d-flex align-items-center justify-content-between">
			<div className="left d-flex align-items-center">
				<div className="logo"><img src={logoSvg} /></div>
				<div className="menus d-flex">
					<div className="menu">news</div>
					<div className="menu active">music</div>
					<div className="menu">video</div>
					<div className="menu">artist</div>
					<div className="menu">events</div>
					<div className="menu">contact</div>
				</div>
			</div>
			<div className="right d-flex align-items-center">
				<div className="menu">my list</div>
				<div className="member"><img src={memberSvg} /></div>
			</div>
		</div>
)}
}
Header = connect()(Header)
export default Header
// DetailPage.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

