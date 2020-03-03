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
		this.handleDetailPage = this.handleDetailPage.bind(this)
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

	handleDetailPage(display) {
		this.setState({
			detailPage: display
		})
	}		

	render() {
		const { notes, category, selectedCategory, selectedNote } = this.props

	return(
		<div className="noteContent">
			<NavBar category={category} selectedCategory={this.props.selectedCategory} darkMode={this.props.darkMode} handleAddCategoryPopup={this.handleAddCategoryPopup} handleDetailPage={this.handleDetailPage}/>		
			{!this.state.detailPage &&
				<NoteList notes={notes} selectedCategory={selectedCategory} handleAddNotePopup={this.handleAddNotePopup} handleDetailPage={this.handleDetailPage}/>
			}
			{this.state.detailPage &&
				<ItemDetail notes={notes} category={category} selectedCategory={selectedCategory} selectedNote={selectedNote} handleAddNotePopup={this.handleAddNotePopup} handleDetailPage={this.handleDetailPage} />
			}		
			{this.state.addCategoryPopup &&
				<AddCategory handleAddCategoryPopup={this.handleAddCategoryPopup} category={category} />
			}
			{this.state.addNotePopup &&
				<AddNote handleAddNotePopup={this.handleAddNotePopup} category={category}  handleDetailPage={this.handleDetailPage}/>
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
