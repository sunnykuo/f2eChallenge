import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateSelectedItem } from '../actions'

class DriveDetail extends Component {
	constructor(props) {
		super(props)
	}	

	handleShowDetail(item) {
		this.props.dispatch(updateSelectedItem(item))
	}	

	handleDoubleClick(item) {
		if (item.type === 'folder') {
			console.log('enter')
		} else {
			console.log('preview')
		}
	}

	render() {
		const { drives, selectedDrive, selectedItem, viewType, search, typeMapping } = this.props
		let currentDrive = null;
		if (selectedDrive === 'importantDrives') {

		} else {
			currentDrive = drives[selectedDrive];
		}
	return(
		<div className="driveDetail detail d-flex flex-column justify-content-between">
			<ul className="list">
				<div className="path">我的抽屜 > Hello</div>
				<li className="row title">
					<div className="bookmark"><i className="material-icons">bookmark_border</i></div>
					<div className="checkbox"><i className="material-icons">check_box_outline_blank</i></div>
					<div className="name">名稱<i className="material-icons order">arrow_drop_down</i></div>
					<div className="date">修改日期<i className="material-icons order">arrow_drop_down</i></div>
					<div className="type" >類型<i className="material-icons order">arrow_drop_down</i></div>
					<div className="owner">擁有人<i className="material-icons order">arrow_drop_down</i></div>
					<div className="size">大小<i className="material-icons order">arrow_drop_down</i></div>
					<div className="more"></div>
				</li>
				{currentDrive !== null && currentDrive.map((item,i) => {
					let itemType = typeMapping[item.type];
					return(
					<li className="row" key={i} onClick={() => this.handleShowDetail(item)} onDoubleClick={() => this.handleDoubleClick(item)}>
						<div className="bookmark"><i className="material-icons">{`${item.bookMark == true ? 'bookmark' : 'bookmark_border'}`}</i></div>
						<div className="checkbox"><i className="material-icons">check_box_outline_blank</i></div>
						<div className="name"><i className="material-icons">{itemType.code}</i>{item.name}</div>
						<div className="date">{item.modifyTime}</div>
						<div className="type">{itemType.name}</div>
						<div className="owner">{item.owner}</div>
						<div className="size">{item.size}</div>
						<div className="more"><i className="material-icons">more_horiz</i></div>
					</li>)
				})
				}			
			</ul>
			<div className="buttons d-flex align-items-center">
				<div className="new"><i className="material-icons">add_circle</i>新增資料夾</div>
				<div className="new"><i className="material-icons">add_circle</i>新增檔案</div>
			</div>
		</div>
	)}
}

DriveDetail = connect()(DriveDetail)
export default DriveDetail

// DriveDetail.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

