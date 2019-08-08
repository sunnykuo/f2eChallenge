import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMission, updateBreakStatus } from './actions'
import PayDetail from './components/PayDetail'
import Menu from './components/Menu' 
import Success from './components/Success'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"
import './index.scss'

class Payment extends Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleRefreshClick = this.handleRefreshClick.bind(this) 
		this.handleDetailPage = this.handleDetailPage.bind(this)
		this.handleSuccessPopup = this.handleSuccessPopup.bind(this)
		this.state = {
			showSuccess: false,
			detailType: 1
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

	handleSuccessPopup(status) {
		this.setState({
			showSuccess: status
		})
	}

	handleDetailPage(type = 0) {
		this.setState({
			detailType: type
		})
	}	

	render() {
		const { albums, favorite, currentPlay, currentPage } = this.props
		return (
			<div className="payment main">
				{!this.state.showSuccess && 
					<PayDetail {...this.props} 
						type={this.state.detailType}
						handleSuccessPopup={this.handleSuccessPopup}
						handleDetailPage={this.handleDetailPage}/>
				}
				{this.state.showSuccess && <Success handleSuccessPopup={this.handleSuccessPopup}/>}
			</div>
		)
	}
}

Payment.propTypes = {
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Payment));
