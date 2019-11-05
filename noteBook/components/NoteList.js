import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { updateCurrentPage } from '../actions'
import img1 from '../images/image1.png'

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
		<div className="noteList d-flex">
			<div className="list">		
			{this.state.viewMode == 0 && 
				<div className="listMode">
					<div className="month">August</div>
					<div className="contentRow d-flex align-items-center justify-content-between">
						<div className="date">08.28.19</div>
						<div className="title">Meeting Record</div>
						<div className="type">Work</div>
						<div className="favorite material-icons">star_border</div>
					</div>
					<div className="contentRow d-flex align-items-center justify-content-between">
						<div className="date">08.14.19</div>
						<div className="title">Osaka planning</div>
						<div className="type">Travel</div>
						<div className="favorite material-icons">star</div>
					</div>
					<div className="month">July</div>
					<div className="contentRow d-flex align-items-center justify-content-between">
						<div className="date">07.20.19</div>
						<div className="title">Meeting Record</div>
						<div className="type">Work</div>
						<div className="favorite material-icons">star_border</div>
					</div>
					<div className="contentRow d-flex align-items-center justify-content-between">
						<div className="date">07.17.19</div>
						<div className="title">Osaka planning</div>
						<div className="type">Travel</div>
						<div className="favorite material-icons">star</div>
					</div>											
				</div>
			}
			{this.state.viewMode == 1 &&
				<div className="listDetailMode d-flex flex-wrap justify-content-between align-items-start">
					<div className="listDetail_outer">
						<div className="month">August</div>
						<div className="contentRow">
							<div className="title">Meeting Record</div>
							<div className="content">When we talk about dissertation, we focus on teugfd fdshu</div>
							<div className="photo"><img src={img1} /></div>
							<div className="date d-flex align-items-center"><i className="material-icons">star_border</i><div>08.28.19</div></div>
						</div>
					</div>
					<div className="listDetail_outer">
						<div className="month">August</div>
						<div className="contentRow">
							<div className="title">Osaka planning</div>
							<div className="content">When we talk about dissertation, we focus on teugfd fdshu</div>
							<div className="date d-flex align-items-center"><i className="material-icons">star_border</i><div>08.14.19</div></div>
						</div>
					</div>
					<div className="listDetail_outer">
						<div className="month">July</div>
						<div className="contentRow">
							<div className="title">Meeting Record</div>
							<div className="content">When we talk about dissertation, we focus on teugfd fdshufdshufdshu</div>
							<div className="photo"><img src={img1} /></div>
							<div className="date d-flex align-items-center"><i className="material-icons">star_border</i><div>07.20.19</div></div>
						</div>
					</div>															
					<div className="listDetail_outer">
						<div className="month">July</div>
						<div className="contentRow">
							<div className="title">Osaka planning</div>
							<div className="content">When we talk about dissertation, we focus on teugfd fdshufdshufdshu</div>
							<div className="photo"><img src={img1} /></div>
							<div className="date d-flex align-items-center"><i className="material-icons">star_border</i><div>07.17.19</div></div>
						</div>
					</div>					
				</div>
			}
			</div>
			<div className="viewMode d-flex align-items-start justify-content-end">
				<div className={`mode ${this.state.viewMode == 0 ? 'active':''}`}><i className="material-icons" onClick={() => this.handleChangeViewMode(0)}>list</i></div>
				<div className={`mode ${this.state.viewMode == 1 ? 'active':''}`}><i className="material-icons" onClick={() => this.handleChangeViewMode(1)}>dashboard</i></div>
			</div>			
		</div>
)}
}

NoteList = connect()(NoteList)
export default NoteList



