import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateCurrentPage } from '../actions'
import logo from '../image/Logo.png'

class Menu extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { type, handleDetailPage, handleSuccessPopup } = this.props

	return(
		<div className="menus d-flex flex-column justify-content-between">
			<div className="banner" />
			<div className="menu_container d-flex flex-column justify-content-between">
				<div className="order">
					<h1>訂單資訊</h1>
					<div className="title">商店名稱</div>
					<div className="content">Amazing 3C online Shop</div>
					<div className="title">訂單編號</div>
					<div className="content">239234dwnd321</div>
					<div className="title price">本筆訂單將支付</div>				
					<div className="content price"><span>1,250</span>元</div>
				</div>
				<div className="pay">
					<div className="title">支付方式</div>
					<div className={`item ${type === 1 ? 'active':''}`} onClick={()=> handleDetailPage(1)}>信用卡</div>
					<div className={`item d-flex align-items-end justify-content-between ${type === 2 ? 'active':''}`} onClick={()=> handleDetailPage(2)}><div>網路ATM</div><div className="desc">(晶片讀卡機轉帳)</div></div>
					<div className={`item d-flex align-items-end justify-content-between ${type === 3 ? 'active':''}`}><div>ATM櫃員機</div><div className="desc">(實體ATM及網銀)</div></div>
				</div>
				<div className="logo"><img src={logo} /></div>
			</div>
		</div>
)}
}
Menu = connect()(Menu)
export default Menu
// Menu.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

