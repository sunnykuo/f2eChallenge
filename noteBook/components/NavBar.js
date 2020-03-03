import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateViewType, updateSelectedCategory } from '../actions'

class NavBar extends Component {
	constructor(props) {
		super(props)		
	}

	handleSwitchViewType(type) {
		if (type === this.props.viewType) return;
		this.props.dispatch(updateViewType(type))
	}

	handleSwitchCategory(category) {
		if (category === this.props.selectedCategory) return;
		this.props.dispatch(updateSelectedCategory(category))
		this.props.handleDetailPage(false)
	}	

	render() {
		const { category, selectedCategory, darkMode, handleAddCategoryPopup } = this.props

	return(
		<ul className={`nav d-flex align-items-end justify-content-center ${darkMode ? 'dark':''}`}>
			<li className={`${selectedCategory === 'All' ? 'active':''}`} onClick={() => this.handleSwitchCategory('All')}>All</li>
			{
				category.map((item, i) => {
					return (<li key={i} className={`${selectedCategory === item ? 'active':''}`} onClick={() => this.handleSwitchCategory(item)}>{item}</li>)
				})
			}
			<li className="addCategory" onClick={() => handleAddCategoryPopup(true)}><i className="material-icons">add_circle_outline</i>Add new category</li>
		</ul>
)}
}

NavBar = connect()(NavBar)
export default NavBar
// NavBar.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

