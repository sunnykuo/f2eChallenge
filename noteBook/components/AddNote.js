import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { updateCurrentPlay, updateCurrentAlbum, updateFavorite } from '../actions'

class AddNote extends Component {
	constructor(props) {
		super(props)

	}	

	render() {
		const { drives, selectedCategory, selectedItem, viewType, search, typeMapping } = this.props

	return(
		<div className="addNote d-flex align-items-center justify-content-center">
			<div className="inner">
				<i className="material-icons closeBtn">cancel</i>
				<div className="title">Add a New Note</div>
				<div className="content">
					<div>Name:</div>
					<input type="text" className="input"/>
				</div>
				<div className="content">
					<div>Category:</div>
					<select name="category" className="input">
					　<option value="travel">Travel</option>
					　<option value="school">School</option>
					</select>					
				</div>
				<div className="buttonArea">
					<button className="btn">Cancel</button>
					<button className="btn">OK</button>
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
	