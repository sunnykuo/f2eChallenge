import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMission, updateBreakStatus } from './actions'
import Content from './components/Content'
import Header from './components/Header' 
import ControlArea from './components/ControlArea'
import Ad from './components/Ad'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"
import './index.scss'

class MP3Player extends Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleRefreshClick = this.handleRefreshClick.bind(this) 
		this.handleDetailPage = this.handleDetailPage.bind(this)
		this.handleAdPopup = this.handleAdPopup.bind(this)
		this.state = {
			showDetail: false,
			detailType: props.currentPage,
			showAd: false
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

	handleAdPopup(status) {
		this.setState({
			showAd: status
		})
	}

	handleDetailPage(status, type = 0) {
		this.setState({
			showDetail: status,
			detailType: type
		})
	}	

	render() {
		const { albums, favorite, currentPlay, currentPage } = this.props
		return (
			<div className="mp3Player main">
				<Header switchPage={this.handleDetailPage}/>
				<Content {...this.props}/>			
				<ControlArea currentPlay={currentPlay} switchPage={this.handleDetailPage} />
				{this.state.showAd &&
					<Ad handleAdPopup={this.handleAdPopup} />
				}
			</div>
		)
	}
}

MP3Player.propTypes = {
	albums: PropTypes.array.isRequired,
	favorite: PropTypes.array.isRequired,
	currentPlay: PropTypes.object,
	currentPage: PropTypes.string.isRequired
}

function mapStateToProps(state) {
	const { albums, favorite, currentPlay, currentPage, currentAlbum } = state.mp3PlayerReducer
	return {
		albums,
		favorite,
		currentPlay,	
		currentPage,
		currentAlbum
	}
}

//for connect
const mapDispatchToProps = dispatch => ({
	// handleAdd: newMission => dispatch(addMission(newMission))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MP3Player));
