import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { updateCurrentPlay, updateCurrentAlbum, updateFavorite } from '../actions'

import NavBar from '../Components/NavBar'
import ItemDetail from '../Components/ItemDetail'
import NoteList from '../Components/NoteList'
import AddCategory from '../Components/AddCategory'
import AddNote from '../Components/AddNote'

class Content extends Component {
	constructor(props) {
		super(props)
		this.state = {
			detailPage: false,
			detailInfo: null,
			addCategoryPopup: false,
			addNotePopup: false
		}
		this.handleAddCategoryPopup = this.handleAddCategoryPopup.bind(this)
		this.handleAddNotePopup = this.handleAddNotePopup.bind(this)
	}	

	handleAddCategoryPopup(display = false) {
		this.setState({
			addCategoryPopup: display
		})
	}

	handleAddNotePopup(display = false) {
		this.setState({
			addNotePopup: display
		})
	}		

	render() {
		const { notes, category, selectedCategory } = this.props

	return(
		<div className="noteContent">
			<NavBar category={category} selectedCategory={this.props.selectedCategory} darkMode={this.props.darkMode} handleAddCategoryPopup={this.handleAddCategoryPopup}/>		
			<div className="noteContent-innner d-flex">
				<div className="recentNote_Area">
					<button className="btn addBtn" onClick={() => this.handleAddNotePopup(true)}><i className="material-icons">add</i>Add Note</button>
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
				{!this.state.detailPage &&
					<NoteList notes={notes} selectedCategory={selectedCategory}/>
				}
				{this.state.detailPage &&
					<ItemDetail />
				}				
			</div>			
			{this.state.addCategoryPopup &&
				<AddCategory handleAddCategoryPopup={this.handleAddCategoryPopup} category={category} />
			}
			{this.state.addNotePopup &&
				<AddNote handleAddNotePopup={this.handleAddNotePopup} category={category} />
			}			
		</div>
	)}
}
Content = connect()(Content)
export default Content

// Content.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }
