import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateSelectedNote } from '../actions'
import img1 from '../images/image1.png'
import moment from 'moment'

class NoteList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			viewMode: 0,
			months: [
		    'January', 'February', 'March', 'April', 'May',
		    'June', 'July', 'August', 'September',
		    'October', 'November', 'December'
		    ]
		}
	}

	handleChangeViewMode(type) {
		if (type == this.state.viewMode) return;

		this.setState({
			viewMode: type
		})
	}

	handleShowDetailPage(noteId) {
		this.props.dispatch(updateSelectedNote(noteId))
		this.props.handleDetailPage(true)
	}

	render() {
		const { notes, selectedCategory, handleAddNotePopup } = this.props
		let prevMonth = ""
		let filterNotes = notes
		filterNotes = filterNotes.sort((a,b) => {
			return moment(a.create_date, 'MM.DD.YYYY') < moment(b.create_date, 'MM.DD.YYYY') ? 1 : -1
		})
		
		if (selectedCategory !== 'All') {
			filterNotes = filterNotes.filter((note, i) => {
				return note.category === selectedCategory
			})
		}

	return(
		<div className="noteContent-inner noteList d-flex">
			<div className="recentNote_Area">
				<button className="btn addBtn" onClick={() => handleAddNotePopup(true)}><i className="material-icons">add</i>Add Note</button>
				<div className="recentNote_List">
					<div className="title">Recent Notes</div>
					{filterNotes.map((note, i) => {
						if (i < 10) {
							return(
								<div key={i} className="noteCard">
									<div className="cardTitle">{note.title}</div>
									<div className="content">{note.content}</div>
									<div className="more" onClick={() => this.handleShowDetailPage(note.id)}>See More<i className="material-icons">navigate_next</i></div>
								</div>								
							)
						}
					})}					
				</div>
			</div>		
			<div className="noteList_Area d-flex">
				<div className="list">		
				{this.state.viewMode == 0 && 
					<div className="listMode">
						{filterNotes.map((note, i) => {
							let noteMonth = moment(note.create_date,'MM.DD.YYYY').month()
							let monthName = this.state.months[noteMonth]
							let monthRow = ""
							if (prevMonth === '' || noteMonth !== prevMonth) {
								prevMonth = noteMonth
								monthRow = (<div className="month">{monthName}</div>)
							}
							return (<div key={i}>
							{monthRow}
							<div className="contentRow d-flex align-items-center justify-content-between" onClick={() => this.handleShowDetailPage(note.id)}>
							<div className="date">{note.create_date}</div>
							<div className="title">{note.title}</div>
							<div className="type">{note.category}</div>
							</div>
							</div>)						
						})
						}											
					</div>
				}
				{this.state.viewMode == 1 &&
					<div className="listDetailMode d-flex flex-wrap justify-content-start align-items-start">
						{filterNotes.map((note, i) => {
							return(
							<div key={i} className="listDetail_outer" onClick={() => this.handleShowDetailPage(note.id)}>
								<div className="month">{note.category}</div>
								<div className="contentRow">
									<div className="title">{note.title}</div>
									<div className="content">{note.content}</div>
									<div className="photo"><img src={img1} /></div>
									<div className="date">{note.create_date}</div>
								</div>
							</div>)
						})
						}					
					</div>
				}
				</div>
				<div className="viewMode d-flex align-items-start justify-content-end">
					<div className={`mode ${this.state.viewMode == 0 ? 'active':''}`}><i className="material-icons" onClick={() => this.handleChangeViewMode(0)}>list</i></div>
					<div className={`mode ${this.state.viewMode == 1 ? 'active':''}`}><i className="material-icons" onClick={() => this.handleChangeViewMode(1)}>dashboard</i></div>
				</div>
			</div>			
		</div>
)}
}

NoteList = connect()(NoteList)
export default NoteList



