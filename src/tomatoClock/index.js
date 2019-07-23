import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMission, updateBreakStatus } from './actions'
import DetailPage from './components/DetailPage'
import MainTodos from './components/MainTodos' 
import RightMenu from './components/RightMenu'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import './index.scss'

class TomatoClock extends Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleRefreshClick = this.handleRefreshClick.bind(this) 
		this.handleDetailPage = this.handleDetailPage.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		this.state = {
			showDetail: false,
			detailType: 0
		}
	}

	componentDidMount() {
		// const { dispatch, selectedSubreddit } = this.props
		// dispatch(fetchPostsIfNeeded(selectedSubreddit))
	}

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
	// 		const { dispatch, selectedSubreddit } = nextProps
	// 		dispatch(fetchPostsIfNeeded(selectedSubreddit))
	// 	}
	// }

	// replace componentWillReceiveProps at react16
	static getDerivedStateFromProps(props, state) {
		// if (!state.missionReducer) return null;
		// if (props.missionReducer !== state.missionReducer) {
		// 	const { dispatch, selectedSubreddit } = props
		// 	dispatch(fetchPostsIfNeeded(selectedSubreddit))
		// 	return null;
		// }		
	}

	handleChange(nextSubreddit) {
		// this.props.dispatch(selectSubreddit(nextSubreddit))
	}

	handleRefreshClick(e) {
		// e.preventDefault()

		// const { dispatch, selectedSubreddit } = this.props
		// dispatch(invalidateSubreddit(selectedSubreddit))
		// dispatch(fetchPostsIfNeeded(selectedSubreddit))
	}

	handleDetailPage(status, type = 0) {
		this.setState({
			showDetail: status,
			detailType: type
		})
	}	

	handleAdd(newMission) {
		this.props.handleAdd(newMission);
	}

	render() {
		const { missions, breakTime, ringtones } = this.props
		return (
			<div className="main d-flex justify-content-center align-items-center">
				<MainTodos switchPage={this.handleDetailPage} handleAdd={this.handleAdd} missions={missions} breakTime={breakTime}/>
				<RightMenu switchPage={this.handleDetailPage} />
				<div className="progressArea">
			      <CircularProgressbarWithChildren 
			      	className="circular_progress"
			      	value={0}
			      	strokeWidth={5}			      	
					styles={buildStyles({
						pathColor: "#FF4384",
						trailColor: "transparent"
					})}>
			      	<i className="material-icons">play_circle_filled</i>
			      	<i className="material-icons dot">stop</i>
			      </CircularProgressbarWithChildren>				
				</div>
				{this.state.showDetail &&
					<DetailPage data={this.props} type={this.state.detailType} switchPage={this.handleDetailPage} />					
				}
			</div>
		)
	}
}

TomatoClock.propTypes = {
	breakTime: PropTypes.object.isRequired,
	missions: PropTypes.array.isRequired,
	ringtones: PropTypes.object.isRequired
}

function mapStateToProps(state) {
	const { breakTime, missions, ringtones } = state.missionReducer
	return {
		breakTime,
		missions,
		ringtones	
	}
}

//for connect
const mapDispatchToProps = dispatch => ({
	handleAdd: newMission => dispatch(addMission(newMission))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TomatoClock));
