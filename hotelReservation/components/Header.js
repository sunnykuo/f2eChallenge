import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { handleDetailPage } = this.props

	return(
		<div className="header d-flex align-items-center justify-content-between">
			<div className="logo" onClick={() => handleDetailPage(false)}>HOMEPLACE</div>
			<ul className="menu-list d-flex align-items-center justify-content-between">
				<li className="menu">活動公告</li>
				<li className="menu">交通方式</li>
				<li className="menu">周邊景點</li>
				<li className="menu">關於我們</li>
			</ul>
		</div>
)}
}


