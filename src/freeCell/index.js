import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMission, updateBreakStatus } from './actions'
import GameArea from './components/GameArea'
import RightMenu from './components/RightMenu'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"
import './index.scss'
import freeCellLogo from './image/freeCell_logo.png'

class FreeCell extends Component {
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
		// this.props.handleAdd(newMission);
	}

	render() {
		const { cards, cardLines } = this.props
		return (
			<div className="main d-flex justify-content-between">
				<div className="mainArea flex-fill">
					<div className="header d-flex justify-content-between align-items-center flex-wrap">
						<div className="leftSide">
							<img src={freeCellLogo} width="50vw"/>
							<span>#6384730</span>
						</div>
						<div className="rightSide d-flex">
							<div className="time">Time: 00:00</div>
							<div className="score">Score: 00</div>
						</div>
					</div>
					<GameArea cardLines={cardLines} />
				</div>					
				<RightMenu />
			</div>
		)
	}
}

// FreeCell.propTypes = {
// 	breakTime: PropTypes.object.isRequired,
// 	missions: PropTypes.array.isRequired,
// 	ringtones: PropTypes.object.isRequired
// }

function mapStateToProps(state) {
	const { cards, cardLines } = state.freeCellReducer
	return {
		cards,
		cardLines	
	}
}

//for connect
const mapDispatchToProps = dispatch => ({
	// getInitCardLines: () => dispatch(getInitCardLines())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FreeCell));
