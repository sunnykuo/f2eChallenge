import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addNote } from '../actions'

class AddNote extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedCategory: this.props.category[0],
			noteName: ''
		}
	}	

	handleAddNote() {
		if (this.state.noteName === '') return
		this.props.dispatch(addNote(this.state.noteName, this.state.selectedCategory))
		this.props.handleAddNotePopup()
		this.props.handleDetailPage(true)
	}

	handleInputChange(e) {
		this.setState({
			noteName: e.target.value.trim()
		})
	}

	handleChangeCategory(e) {
		this.setState({
			selectedCategory: e.target.value
		})
	}

	render() {
		const { category, handleAddNotePopup } = this.props
		
	return(
		<div className="addNote d-flex align-items-center justify-content-center">
			<div className="inner">
				<i className="material-icons closeBtn" onClick={() => handleAddNotePopup()}>cancel</i>
				<div className="title">Add a New Note</div>
				<div className="content">
					<div>Name:</div>
					<input type="text" className="input" onChange={e => this.handleInputChange(e)}/>
				</div>
				<div className="content">
					<div>Category:</div>
					<select name="category" className="input" onChange={e => this.handleChangeCategory(e)}>
					{category.map((item, i) => {
						if (item === 'All') return
						return(<option key={i} value={item}>{item}</option>)
					})
					}
					</select>					
				</div>
				<div className="buttonArea">
					<button className="btn" onClick={() => handleAddNotePopup()}>Cancel</button>
					<button className="btn" onClick={() => this.handleAddNote()}>OK</button>
				</div>
			</div>
		</div>
	)}
}
AddNote = connect()(AddNote)
export default AddNote

// Content.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }
	