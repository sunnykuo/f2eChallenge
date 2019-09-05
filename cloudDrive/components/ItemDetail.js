import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ItemDetail extends Component {
	constructor(props) {
		super(props)

	}	


	render() {
		const { selectedItem, typeMapping } = this.props

		if (selectedItem === null) {
			return (<div className="itemDetail detail" />)
		}

	return(
		<div className="itemDetail detail">
			<div className="title">{selectedItem.name}</div>
			<div className="info">
				<div className="item"><div className="title">修改日期</div><div className="content">{selectedItem.modifyTime}</div></div>
				<div className="item"><div className="title">類型</div><div className="content">{typeMapping[selectedItem.type].name}</div></div>
				<div className="item"><div className="title">擁有人</div><div className="content">{selectedItem.owner}</div></div>
				<div className="item"><div className="title">大小</div><div className="content">{selectedItem.size}</div></div>
			</div>
			<div className="preview">
				<div>預覽內容</div>
				<ul className="previewList">
				{selectedItem.type === 'folder' && 
					selectedItem.files.map((item,i) => {
						return (
							<li key={i}><i className="material-icons">{typeMapping[item.type].code}</i>{`${item.type === 'folder' ? item.name : item.name + '.' + item.type }`}</li>
						)
					})				
				}
				{selectedItem.type !== 'folder' && 
					<div></div>
				}
				</ul>
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

