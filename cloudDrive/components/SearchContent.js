import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { updateCurrentPage } from '../actions'

class SearchContent extends Component {
	constructor(props) {
		super(props)
	}

	handleSearch() {

		this.props.displaySearchPopup();
	}

	render() {
		const { displaySearchPopup } = this.props
	return(
		<div className="searchContent">
			<div className="closeBtn" onClick={() => displaySearchPopup()}><i className="material-icons">close</i></div>
			<div className="condition">
				<div className="title">類型</div>
				<ul className="items">
					<li><i className="material-icons">radio_button_checked</i>不限</li>
					<li><i className="material-icons">radio_button_unchecked</i>文件</li>
					<li><i className="material-icons">radio_button_unchecked</i>圖像</li>
					<li><i className="material-icons">radio_button_unchecked</i>影音</li>
					<li><i className="material-icons">radio_button_unchecked</i>簡報</li>
					<li><i className="material-icons">radio_button_unchecked</i>其他</li>
				</ul>
			</div>
			<div className="condition">
				<div className="title">修改日期</div>
				<ul className="items">
					<li><i className="material-icons">radio_button_checked</i>不限</li>
					<li><i className="material-icons">radio_button_unchecked</i>今天</li>
					<li><i className="material-icons">radio_button_unchecked</i>7天內</li>
					<li><i className="material-icons">radio_button_unchecked</i>30天內</li>
					<li><i className="material-icons">radio_button_unchecked</i>60天內</li>
				</ul>			
			</div>
			<div className="condition">
				<div className="title">位置</div>
				<ul className="items">
					<li><i className="material-icons">radio_button_checked</i>不限</li>
					<li><i className="material-icons">radio_button_unchecked</i>我的抽屜</li>
					<li><i className="material-icons">radio_button_unchecked</i>共用抽屜</li>
					<li><i className="material-icons">radio_button_unchecked</i>重要抽屜</li>
					<li><i className="material-icons">radio_button_unchecked</i>垃圾桶</li>
				</ul>			
			</div>
			<div className="searchBtn"><button className="btn" onClick={() => this.handleSearch()}>搜尋</button></div>					
		</div>
)}
}

SearchContent = connect()(SearchContent)
export default SearchContent



