import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ItemDetail extends Component {
	constructor(props) {
		super(props)

	}	


	render() {
		// const { selectedItem, typeMapping } = this.props

		// if (selectedItem === null) {
		// 	return (<div className="itemDetail detail" />)
		// }

	return(
		<div className="itemDetail">
			<div className="editorBar d-flex align-items-center justify-content-between">
				<select className="fontStyle">
					<option value="maveo_pro">Maveo Pro</option>
					<option value="roboto">Roboto</option>
				</select>	
				<select className="fontWeight">
					<option value="light">Light</option>				
					<option value="medium">Medium</option>
					<option value="bold">Bold</option>
				</select>	
				<select className="fontSize">
					<option value="12">12</option>				
					<option value="13">13</option>
					<option value="14">14</option>
					<option value="15">15</option>
					<option value="16">16</option>
					<option value="17">17</option>
					<option value="18">18</option>
					<option value="19">19</option>
					<option value="20">20</option>										
				</select>
				<i className="material-icons">format_bold</i>
				<i className="material-icons">format_italic</i>
				<i className="material-icons">format_underlined</i>
				<i className="material-icons">title</i>
				<i className="material-icons">format_clear</i>
				<i className="material-icons">format_align_justify</i>
				<i className="material-icons">format_align_center</i>
				<i className="material-icons">format_align_left</i>																
				<i className="material-icons">format_align_right</i>
				<i className="material-icons">format_list_numbered</i>
				<i className="material-icons">format_list_bulleted</i>
				<i className="material-icons">insert_photo</i>
				<i className="material-icons">insert_link</i>
			</div>
			<div className="titleArea d-flex align-items-start justify-content-between">
				<div>
					<div className="title">Design Concept</div>
					<div className="date">09.09.2019</div>
				</div>
				<div className="category">
					<span>Category:</span>
					<select className="categoryList">
						<option value="maveo_pro">Maveo Pro</option>
						<option value="roboto">Roboto</option>
					</select>					
				</div>
			</div>
			<div className="content">
			</div>
		</div>
	)}
}

ItemDetail = connect()(ItemDetail)
export default ItemDetail

// FolderDetail.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

