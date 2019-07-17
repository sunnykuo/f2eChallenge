import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RightMenu extends Component {
	render() {
		const { switchPage } = this.props
	return(
		<div className="main_menu d-flex flex-column justify-content-between">
			<div className="menu_icons d-flex flex-column justify-content-around align-items-end">
				<i className="material-icons" onClick={() => switchPage(true,0)}>format_list_bulleted</i>
				<i className="material-icons" onClick={() => switchPage(true,1)}>insert_chart</i>
				<i className="material-icons" onClick={() => switchPage(true,2)}>library_music</i>
			</div>
			<div className="project_name">pomodoro</div>
		</div>
	)}
}

// DetailPage.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

