import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import { updateNote } from '../actions'

class ItemDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showEditBar: false,
			currentNote: null
		}
	}	

	componentDidMount() {
		let currentNote = this.props.notes.find((note, i) => {
			return note.id === this.props.selectedNote
		})
		this.setState({
			currentNote
		})	
	}

	handleTitleChange(e) {
		if (e.target.value.trim() == "") return
		this.state.currentNote.title = e.target.value
		this.setState({
			currentNote: this.state.currentNote
		})	
	}

	handleContentChange(e) {
		this.state.currentNote.content = e.target.value
		this.setState({
			currentNote: this.state.currentNote
		})
	}	

	handleCategoryChange(e) {
		this.state.currentNote.category = e.target.value
		this.setState({
			currentNote: this.state.currentNote
		})			
	}

	handleEditBarDisplay(status) {
		this.setState({
			showEditBar: status
		})
	}

	render() {
		if (this.state.currentNote === null) return (<div />)

		const { notes, category, selectedCategory, selectedNote, handleAddNotePopup, handleDetailPage } = this.props
		
		let recentNotes = notes.filter((note, i) => {
			return note.id !== selectedNote
		})

		recentNotes = recentNotes.sort((a,b) => {
			return moment(a.create_date, 'MM.DD.YYYY') < moment(b.create_date, 'MM.DD.YYYY') ? 1 : -1
		})

		if (selectedCategory !== 'All') {
			recentNotes = recentNotes.filter((note, i) => {
				return note.category === selectedCategory
			})
		}

	return(
		<div className="noteContent-inner itemDetail d-flex">
			<div className="recentNote_Area">
				<button className="btn addBtn" onClick={() => handleAddNotePopup(true)}><i className="material-icons">add</i>Add Note</button>
				<div className="recentNote_List">
				{recentNotes.map((note, i) => {
					if (i < 10) {
						return (
							<div key={i} className="d-flex noteCard">
								<div className="cardDate">{note.create_date}</div>
								<div className="cardTitle">{note.title}</div>
							</div>								
						)
					}
				})}
				</div>
				<div className="more"><span onClick={()=> handleDetailPage(false)}>See More<i className="material-icons">navigate_next</i></span></div>				
			</div>		
			<div className="noteEdit">
				{this.state.showEditBar && <EditBar />}
				<div className="contentArea">
					<div className="d-flex align-items-start justify-content-between">
						<div className="titleArea">
							<div className="title"><input type="text" className="titleInput" value={this.state.currentNote.title} onChange={e => this.handleTitleChange(e)}/></div>
							<div className="date">{this.state.currentNote.create_date}</div>
						</div>
						<div className="categoryArea">
							<span>Category:</span>
							<select className="categoryList" value={this.state.currentNote.category} onChange={e => this.handleCategoryChange(e)}>
							{category.map((item, i) => {
								return (<option key={i} value={item}>{item}</option>)
							})}
							</select>					
						</div>
					</div>
					<div className="inputArea">
						<textarea value={this.state.currentNote.content}
							onChange={e => this.handleContentChange(e)} 
							onBlur={() => this.handleEditBarDisplay(false)}
							onFocus={() => this.handleEditBarDisplay(false)}>
						</textarea>
					</div>
				</div>
			</div>
		</div>
	)}
}

class EditBar extends Component {
	constructor(props) {
		super(props)
	}

	render() {
	
	return(
		<div className="editBar d-flex align-items-center justify-content-between">
			<div className="editFn"><select className="fontSet fontStyle">
				<option value="maveo_pro">Maveo Pro</option>
				<option value="roboto">Roboto</option>
			</select></div>	
			<div className="editFn"><select className="fontSet fontWeight">
				<option value="light">Light</option>				
				<option value="medium">Medium</option>
				<option value="bold">Bold</option>
			</select></div>	
			<div className="editFn"><select className="fontSet fontSize">
				<option value="12">12</option>				
				<option value="13">13</option>
				<option value="14">14</option>
				<option value="15">15</option>
				<option value="16">16</option>
				<option value="17">17</option>
				<option value="18">18</option>
				<option value="19">19</option>
				<option value="20">20</option>										
			</select></div>
			<i className="editFn material-icons">format_bold</i>
			<i className="editFn material-icons">format_italic</i>
			<i className="editFn material-icons">format_underlined</i>
			<i className="editFn material-icons">title</i>
			<i className="editFn material-icons">format_clear</i>
			<i className="editFn material-icons">format_align_justify</i>
			<i className="editFn material-icons">format_align_center</i>
			<i className="editFn material-icons">format_align_left</i>																
			<i className="editFn material-icons">format_align_right</i>
			<i className="editFn material-icons">format_list_numbered</i>
			<i className="editFn material-icons">format_list_bulleted</i>
			<i className="editFn material-icons">insert_photo</i>
			<i className="editFn material-icons">insert_link</i>
		</div>
	)}
}

ItemDetail = connect()(ItemDetail)
export default ItemDetail

// FolderDetail.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

