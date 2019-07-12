import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Ringtones extends Component {
	render() {
		// const { value, onChange, options} = this.props
	
	return(
	<div className="section_ringtones">
		<div className="ringtones_work">
			<div className="tab">work</div>
			<div className="total_times">						
			</div>
		</div>
		<div className="ringtones_break">
			<div className="tab">break</div>
			<div className="chart_area">						
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
