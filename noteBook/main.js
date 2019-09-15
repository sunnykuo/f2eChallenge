import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { addMission, updateBreakStatus } from './actions'
import Content from './components/Content'
import Header from './components/Header' 
import NavBar from './Components/NavBar'
import PropTypes from 'prop-types'
import './index.scss'


class NoteBook extends Component {
	constructor(props) {
		super(props)
		this.handleChangeViewMode = this.handleChangeViewMode.bind(this)
		this.state = {
			darkMode: false
		}
	}

	handleChangeViewMode() {
		this.setState({
			darkMode: !this.state.darkMode
		})
	}

	render() {
		const { selectedCategory } = this.props
		return (
			<div className={`noteBook d-flex flex-column ${this.state.darkMode ? 'dark':''}`}>
				<Header {...this.props} darkMode={this.state.darkMode} changeViewMode={this.handleChangeViewMode} />
				<NavBar selectedCategory={selectedCategory}/>
				<Content {...this.props} />
			</div>
		)
	}
}

// NoteBook.propTypes = {
// 	albums: PropTypes.array.isRequired,
// 	favorite: PropTypes.array.isRequired,
// 	currentPlay: PropTypes.object,
// 	currentPage: PropTypes.string.isRequired
// }

function mapStateToProps(state) {
	const { drives, selectedCategory, selectedItem, viewType, search, typeMapping } = state
	return {
		drives,
		selectedCategory,
		selectedItem,	
		search,
		typeMapping,
		viewType
	}
}

export default connect(mapStateToProps)(NoteBook);
