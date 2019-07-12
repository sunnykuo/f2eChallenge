import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Bar } from 'react-chartjs-2';


export default class Analytics extends Component {
	render() {
		// const { value, onChange, options} = this.props
		let chartData = [{
			data: [10,8,16,22,5],
			backgroundColor: [
				'#fff',
				'#fff',
				'#fff',
				'#FF4384',
				'#fff'
			],
		}]		
	return(
	<div className="section_analytics">
		<div className="focus_time">
			<div className="tab">focus time</div>
			<div className="total_times d-flex">
				<div className="flex-fill">
					<div className="title">today</div>
					<div className="times">20<span>/tomato</span></div>
				</div>
				<div className="flex-fill">
					<div className="title">week</div>
					<div className="times">108<span>/tomato</span></div>
				</div>							
			</div>
		</div>
		<div className="charts">
			<div className="tab d-flex justify-content-between align-items-center">
				<span>chart</span>
				<div className="period">
					<i className="material-icons">chevron_left</i>
					<span>2019.7.1 - 2019.7.7</span>
					<i className="material-icons">chevron_right</i>					
				</div>
			</div>
			<div className="chart_area">
				<Bar
				    data={{
				      labels: ['7/1','7/2','7/3','7/4','7/5'],
				      datasets: chartData
				    }}
				    options={{
				        legend: {
				        	display: false
				       	},
				        scales: {
				        	yAxes: [{
				        		ticks: {
				        			fontColor: "#fff",
				            		max: 24,
				              		min: 0,
				              		stepSize: 4
				            	},
						        gridLines: {
						          display: false,
						          color: '#fff'
						        }
				          	}],
				        	xAxes: [{
				        		ticks: {
				        			fontColor: "#fff"
				            	},
						        gridLines: {
						          display: false,
						          color: '#fff'
						        }
				          	}]			          	
				        },
				        tooltips: {
				        	enabled: false
				        }
				    }}
				/>						
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
