import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { updateCurrentPlay, updateCurrentAlbum, updateFavorite } from '../actions'
import NavBar from '../Components/NavBar'
import DriveDetail from '../Components/DriveDetail'
import ItemDetail from '../Components/ItemDetail'

class Content extends Component {
	constructor(props) {
		super(props)

	}	

	render() {
		const { drives, selectedDrive, selectedItem, viewType, search, typeMapping } = this.props

	return(
		<div className="driveContent d-flex align-items-end flex-wrap">		
			<div className="left">
				<NavBar selectedDrive={selectedDrive} viewType={viewType} />
				<DriveDetail {...this.props}/>
			</div>
			<ItemDetail selectedItem={selectedItem} typeMapping={typeMapping}/>
		</div>
	)}
}
Content = connect()(Content)
export default Content

// Content.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }
