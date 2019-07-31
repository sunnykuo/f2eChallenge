import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMission, updateBreakStatus } from './actions'
import Content from './components/Content'
import Header from './components/Header' 
import ControlArea from './components/ControlArea'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"
import './index.scss'

class MP3Player extends Component {
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
			<div className="mp3Player main">
				<Header switchPage={this.handleDetailPage} handleAdd={this.handleAdd} missions={missions} breakTime={breakTime}/>
				<Content />			
				<ControlArea switchPage={this.handleDetailPage} />
			</div>
		)
	}
}

MP3Player.propTypes = {
	breakTime: PropTypes.object.isRequired,
	missions: PropTypes.array.isRequired,
	ringtones: PropTypes.object.isRequired
}

function mapStateToProps(state) {
	const { breakTime, missions, ringtones } = state.mp3PlayerReducer
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MP3Player));
