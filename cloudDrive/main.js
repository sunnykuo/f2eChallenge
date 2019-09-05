import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { addMission, updateBreakStatus } from './actions'
import Content from './components/Content'
import Header from './components/Header' 
import PropTypes from 'prop-types'
import './index.scss'

class CloudDrive extends Component {
	constructor(props) {
		super(props)

	}

	render() {
		return (
			<div className="cloudDrive d-flex flex-column">
				<Header {...this.props} />
				<Content {...this.props} />
			</div>
		)
	}
}

// CloudDrive.propTypes = {
// 	albums: PropTypes.array.isRequired,
// 	favorite: PropTypes.array.isRequired,
// 	currentPlay: PropTypes.object,
// 	currentPage: PropTypes.string.isRequired
// }

function mapStateToProps(state) {
	const { drives, selectedDrive, selectedItem, viewType, search, typeMapping } = state
	return {
		drives,
		selectedDrive,
		selectedItem,	
		search,
		typeMapping,
		viewType
	}
}

export default connect(mapStateToProps)(CloudDrive);
