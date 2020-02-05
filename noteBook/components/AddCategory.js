import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addCategory } from '../actions'

class AddCategory extends Component {
	constructor(props) {
		super(props)
		this.state = {
			newCategory: "" 
		}
	}	

	handleInputChange(e) {
		this.setState({
			newCategory: e.target.value.trim()
		})
	}

	handleAdd() {
		if (this.isDuplicate()) {
			alert('The category is already exist')
		} else {
			this.props.dispatch(addCategory(this.state.newCategory))
			this.props.handleAddCategoryPopup()
		}
	}

	isDuplicate() {
		let duplicateItem = this.props.category.filter((item) => {
			return item.toLowerCase() === this.state.newCategory.toLowerCase()
		})
		if (duplicateItem.length > 0) {
			return true
		} else if (this.state.newCategory === 'All') {
			return true
		}
		return false
	}

	render() {
		const { handleAddCategoryPopup } = this.props
		
	return(
		<div className="addNote d-flex align-items-center justify-content-center">
			<div className="inner">
				<i className="material-icons closeBtn" onClick={() => handleAddCategoryPopup()}>cancel</i>
				<div className="title">Add a New Category</div>
				<div className="content">
					<div>Name:</div>
					<input type="text" className="input" onChange={ e => this.handleInputChange(e) }/>
				</div>
				<div className="buttonArea">
					<button className="btn" onClick={() => handleAddCategoryPopup()}>Cancel</button>
					<button className="btn" onClick={() => this.handleAdd()}>OK</button>
				</div>
			</div>
		</div>
	)}
}
AddCategory = connect()(AddCategory)
export default AddCategory

// Content.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }
	