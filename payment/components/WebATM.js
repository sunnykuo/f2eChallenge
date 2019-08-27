import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import logo from '../image/Logo.png'

class WebATM extends Component {
	constructor(props) {
		super(props)		
		this.state = {
			currentBankIndex: null,
			banks: ['兆豐國際商銀','台灣土地銀行','永豐銀行','台灣銀行','國泰世華銀行','中國信託','玉山銀行','第一銀行','台北富邦','台新銀行','其他金融機構']
		}
	}

	handleBankChange(value) {
		this.setState({
			currentBankIndex: value
		})
	}

	handleSubmit() {
		if (this.state.currentBankIndex == null) return;
		this.props.handleDetailPage()
		this.props.handleSuccessPopup(true)		
	}

	render() {

	return(
		<div className="inner webATM d-flex flex-column align-items-center justify-content-between">
			<h1 className="mainTitle">網路ATM<i className="material-icons" onClick={() => handleDetailPage()}>close</i></h1>
			<div className="bankArea">
				<div className="title">請選擇以下網路銀行付款</div>
				<div className="bankList d-flex flex-wrap justify-content-between">
				{this.state.banks.map((item,i) => {
						return(<div key={i} className={`bank ${i===this.state.currentBankIndex ? 'active':''}`} onClick={() => this.handleBankChange(i)}>{item}</div>)
					})
				}
				</div>							
				<ul className="desc">
					<li>選擇以上任一銀行之金融卡並使用同銀行WebATM進行轉帳享0元手續費；使用他行WebATM，則需支付跨行手續費15元。</li>
					<li>
						<div>若無以上任一家銀行之金融卡，可任意選擇或點選其他金融機構進行付款，需支付跨行手續費15元。</div>
						<div>例：玉山金融卡在玉山WebATM轉帳享0元手續費；玉山金融卡在非玉山 WebATM轉帳收取15元手續費。</div>
					</li>
				</ul>
			</div>
			<button className="btn confirm" onClick={() => this.handleSubmit()}>確認送出</button>
		</div>
)}
}
WebATM = connect()(WebATM)
export default WebATM

