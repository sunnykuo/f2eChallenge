import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import logo from '../image/Logo.png'

class Success extends Component {
	constructor(props) {
		super(props)		
		this.handleSubscribe = this.handleSubscribe.bind(this);
	}

	handleSubscribe() {

	}

	render() {

	return(
		<div className="successPage">
			<div className="banner" />
			<div className="logo"><img src={logo} /></div>
			<div className="text">
				<h1 className="mainTitle">付款成功</h1>
				<div className="price">您已支付 1,250 元</div>
				<div className="title">商店名稱</div>
				<div className="content">Amazing 3C online Shop</div>
				<div className="title">訂單編號</div>
				<div className="content">239234dwnd321</div>
				<div className="title">支付方式</div>
				<div className="content">信用卡付款</div>	
				<div className="return">
					<div className="content">畫面將自動轉回</div>
					<div className="content">Amazing 3C Online Shop</div>
				</div>							
			</div>
		</div>
)}
}
Success = connect()(Success)
export default Success
// Success.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

