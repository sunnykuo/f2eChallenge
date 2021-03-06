import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Todos from './Todos'
import Analytics from './Analytics'
import Ringtones from './Ringtones'

class DetailPage extends Component {
	render() {
		const { type, switchPage, data } = this.props
		let currentMission = data.missions.find((item) => {
			return item.current === true;
		})
	return(
	<div className="detailPage d-flex">
		<div className="menus">
			<div className="menu_icons d-flex flex-column">
				<div className={`menu_item ${type==0 ? 'active':''}`} onClick={() => switchPage(true,0)}><i className="material-icons">format_list_bulleted</i><span>TO-DO LIST</span></div>
				<div className={`menu_item ${type==1 ? 'active':''}`} onClick={() => switchPage(true,1)}><i className="material-icons">insert_chart</i><span>ANALYTICS</span></div>
				<div className={`menu_item ${type==2 ? 'active':''}`} onClick={() => switchPage(true,2)}><i className="material-icons">library_music</i><span>RINGTONES</span></div>
			</div>	
			{currentMission &&
				<div className="button_area">
					<div className="start_button">
						<div className="start_button_inner">
							<i className="material-icons">play_arrow</i>
						</div>
					</div>
					<div className="time">25:00</div>
					<div className="content">{currentMission.name}</div>				
				</div>				
			}	
		</div>
		<div className="details flex-fill">
			{type === 0 && <Todos missions={data.missions} />}
			{type === 1 && <Analytics missions={data.missions} />}
			{type === 2 && <Ringtones ringtones={data.ringtones} />}
		</div>
		<i className="material-icons close_button" onClick={() => switchPage(false)}>close</i>
		<div className="project_name">pomodoro</div>		
	</div>
)}
}

DetailPage = connect()(DetailPage)
export default DetailPage

// DetailPage.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }
// DetailPage.propTypes = {
// 	options: PropTypes.arrayOf(
// 		PropTypes.string.isRequried
// 	).isRequried,	
// 	value: PropTypes.string.isRequried,
// 	onChange: PropTypes.func.isRequried
// }
