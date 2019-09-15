import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { updateCurrentPlay, updateCurrentAlbum, updateFavorite } from '../actions'

import Detail from '../Components/Detail'
import NoteList from '../Components/NoteList'
import AddNote from '../Components/AddNote'

class Content extends Component {
	constructor(props) {
		super(props)

	}	

	render() {
		const { drives, selectedCategory, selectedItem, viewType, search, typeMapping } = this.props

	return(
		<div className="noteContent d-flex">
			<div className="recentNote_Area">
				<button className="btn addBtn"><i className="material-icons">add</i>Add Note</button>
				<div className="recentNote_List">
					<div className="title">Recent Notes</div>
					<div className="noteCard">
						<div className="cardTitle">Meeting Record</div>
						<div className="content">We’ll have a meeting about searching the references of dissertation. AT That time, we shouldAT That time, we shouldAT That time, we should</div>
						<div className="more">See More<i className="material-icons">navigate_next</i></div>
					</div>
					<div className="noteCard">
						<div className="cardTitle">Meeting Record</div>
						<div className="content">We’ll have a meeting about searching the references of dissertation. AT That time, we should,We’ll have a meeting about searching the references of dissertation.</div>
						<div className="more">See More<i className="material-icons">navigate_next</i></div>
					</div>					
				</div>
			</div>
			<NoteList />
		</div>
	)}
}
Content = connect()(Content)
export default Content

// Content.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }
