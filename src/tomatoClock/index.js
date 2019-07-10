import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from './actions'
import Picker from './components/Picker'
import Posts from './components/Posts' 
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import './index.scss';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

class TomatoClock extends Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleRefreshClick = this.handleRefreshClick.bind(this) 
		this.state = {}
	}

	componentDidMount() {
		const { dispatch, selectedSubreddit } = this.props
		dispatch(fetchPostsIfNeeded(selectedSubreddit))
	}

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
	// 		const { dispatch, selectedSubreddit } = nextProps
	// 		dispatch(fetchPostsIfNeeded(selectedSubreddit))
	// 	}
	// }

	static getDerivedStateFromProps(props, state) {

		if (!state) return null;
		if (props.selectedSubreddit !== state.selectedSubreddit) {
			const { dispatch, selectedSubreddit } = props
			dispatch(fetchPostsIfNeeded(selectedSubreddit))
			return null;
		}		
	}

	handleChange(nextSubreddit) {
		this.props.dispatch(selectSubreddit(nextSubreddit))
	}

	handleRefreshClick(e) {
		e.preventDefault()

		const { dispatch, selectedSubreddit } = this.props
		dispatch(invalidateSubreddit(selectedSubreddit))
		dispatch(fetchPostsIfNeeded(selectedSubreddit))
	}

	render() {
		const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
		return (
			<div className="main d-flex justify-content-center align-items-center">
				<div className="main_todo d-flex flex-column">
					<div className="add_mission flex-fill">
						<input type="text" className="form-control" placeholder="ADD A NEW MISSION..."/>
						<i className="material-icons">add</i>
					</div>
					<div className="mission_lists flex-fill">
						<div className="mission">
							<div className="mission_content">
								<div className="mission_name">
									<i className="material-icons">radio_button_unchecked</i>
									<span>The first thing to do today</span>
								</div>
							</div>
							<div className="time">25:00</div>
						</div>
						<div className="mission">
							<div className="mission_content">
								<div className="mission_name">
									<i className="material-icons">radio_button_unchecked</i>
									<span>The first thing to do today</span>
								</div>
								<i className="startButton material-icons">play_circle_outline</i>
							</div>
						</div>
						<div className="mission">
							<div className="mission_content">
								<div className="mission_name">
									<i className="material-icons">radio_button_unchecked</i>
									<span>The first thing to do today</span>
								</div>
								<i className="startButton material-icons">play_circle_outline</i>
							</div>
						</div>	
						<div className="more">MORE</div>											
					</div>
				</div>
				<div className="main_menu">
					<div className="menu_icons d-flex flex-column justify-content-around align-items-end">
						<i className="material-icons">format_list_bulleted</i>
						<i className="material-icons">insert_chart</i>
						<i className="material-icons">library_music</i>
					</div>
				</div>
				<div className="progressArea">
			      <CircularProgressbarWithChildren 
			      	value={0}
			      	strokeWidth={5}			      	
					styles={buildStyles({
						pathColor: "#FF4384",
						trailColor: "transparent"
					})}>
			      	<i className="material-icons">play_circle_filled</i>
			      </CircularProgressbarWithChildren>				
				</div>
			</div>
		)
	}
}

TomatoClock.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	const { selectedSubreddit, postsBySubreddit } = state.exampleReducer
	const { isFetching, lastUpdated, items: posts } = postsBySubreddit[selectedSubreddit] || {
		isFetching: true,
		items: []
	} 

	return {
		selectedSubreddit,
		posts,
		isFetching,
		lastUpdated		
	}
}

export default withRouter(connect(mapStateToProps)(TomatoClock));
