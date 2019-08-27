import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Menu from './Menu'
import CreditCard from './CreditCard'
import WebATM from './WebATM'

class PayDetail extends Component {
	render() {
		const { type, handleDetailPage, handleSuccessPopup } = this.props
	return(	
		<div className="payDetail d-flex align-items-stretch">
			<Menu {...this.props}/>
			<div className="rightSide">
				{type === 1 && <CreditCard {...this.props}/>}
				{type === 2 && <WebATM {...this.props}/>}		
			</div>
		</div>
)}
}
PayDetail = connect()(PayDetail)
export default PayDetail

// PayDetail.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }
