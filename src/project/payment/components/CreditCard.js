import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateCurrentPlay, updateCurrentAlbum, updateFavorite } from '../actions'
import creditCardType, { types as CardType } from 'credit-card-type'

function isEmpty(value) {
	if (value !== "") {
		return false
	} else {
		return true
	}
}

class CreditCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cardName: '',
			cardNumber: ['','','',''],
			cardType: null,
			validDate: {
				month: '',
				year: ''
			},
			cvc: "",
			phone: "",
			validation: {
				cardName: true,
				cardNumber: true,
				validDate: true,
				cvc: true,
				phone: true
			}
		}		
	}	

	handleCardNumberChange(index, e) {
		let value = e.target.value.trim();
		value = value.replace(/\D/,'');
		let cardType = null;
		let cardNumber = this.state.cardNumber;
		cardNumber[index] = value;

		if (index === 0) {
			let cardInfo = creditCardType(value)
			if (value !== "" && cardInfo.length > 0) {
				cardType = cardInfo[0].type
			}

			this.setState({
				cardType,
				cardNumber
			})
		} else {
			this.setState({
				cardNumber 
			})
		}
	}

	handleDateChange(type, e) {
		let value = e.target.value.trim();
		value = value.replace(/\D/,'');

		let validDate = this.state.validDate;
		validDate[type] = value;
		this.setState({
			validDate
		})
	}	

	handleCodeChange(e) {
		let value = e.target.value.trim();
		value = value.replace(/\D/,'');
		this.setState({
			cvc: value
		})
	}	

	handlePhoneChange(e) {
		let value = e.target.value.trim();
		value = value.replace(/\D/,'');
		this.setState({
			phone: value
		})
	}	

	handleNameChange(e) {
		let value = e.target.value.trim();
		this.setState({
			cardName: value
		})
	}

	handleSubmit() {
		//checkEmpty
		let canSubmit = true;
		const { cardNumber, cardName, validDate, cvc, phone, validation } = this.state;

		if ( isEmpty(cardName) ) {
			canSubmit = false
			validation.cardName = false
		}	

		if ( isEmpty(cardNumber[0]) || isEmpty(cardNumber[1]) || isEmpty(cardNumber[2]) || isEmpty(cardNumber[3]) ) {
			 canSubmit = false
			 validation.cardNumber = false
		}

		if ( isEmpty(validDate.month) || isEmpty(validDate.year) ) {
			 canSubmit = false
			 validation.validDate = false
		}

		if ( isEmpty(cvc) ) {
			canSubmit = false
			validation.cvc = false
		}	

		if ( isEmpty(phone) ) {
			canSubmit = false
			validation.phone = false
		}	

		if (!canSubmit)	{
			this.setState({
				validation
			})
			return
		} else {
			this.props.handleDetailPage()
			this.props.handleSuccessPopup(true)
		}
	}		

	render() {
		const { handleDetailPage } = this.props
		const { cardNumber, cardName, validDate, cvc, phone, validation } = this.state;

	return(
		<div className="inner creditCard d-flex flex-column align-items-center justify-content-between">
			<h1 className="title">信用卡<i className="material-icons" onClick={() => handleDetailPage()}>close</i></h1>
			<div className="creditCardType d-flex">
				<div className={`type ${this.state.cardType === CardType.VISA ? 'active': '' }`}><i className="payfont-Visa" /></div>
				<div className={`type ${this.state.cardType === CardType.MASTERCARD ? 'active': '' }`}><i className="payfont-MasterCard" /></div>
				<div className={`type ${this.state.cardType === CardType.JCB ? 'active': '' }`}><i className="payfont-JCB" /></div>
				<div className={`type ${this.state.cardType === CardType.UNIONPAY ? 'active': '' }`}><i className="payfont-UnionPay" /></div>
			</div>
			<div className="userInfo">
				<div className="inputArea">
					<div className="title"><span>*</span>持卡人</div>
					<input ref="name" className={`name ${validation.cardName ? '':'error'}`} type="text" value={cardName} onChange={e => this.handleNameChange(e)}/>
					{!validation.cardName &&
						<Reminder text="必填欄位"/>
					}
				</div>
				<div className="inputArea">
					<div className="title"><span>*</span>信用卡號</div>
					<div className="cardInfo d-flex align-items-center justify-content-between">
						<input ref="cardNumber1" className={`cardNumber ${validation.cardNumber ? '':'error'}`} type="text" maxLength="4" value={cardNumber[0]} onChange={e => this.handleCardNumberChange(0,e)} />
						<div>-</div>
						<input ref="cardNumber2" className={`cardNumber ${validation.cardNumber ? '':'error'}`} type="text" maxLength="4" value={cardNumber[1]} onChange={e => this.handleCardNumberChange(1,e)} />
						<div>-</div>
						<input ref="cardNumber3" className={`cardNumber ${validation.cardNumber ? '':'error'}`} type="text" maxLength="4" value={cardNumber[2]} onChange={e => this.handleCardNumberChange(2,e)} />
						<div>-</div>
						<input ref="cardNumber4" className={`cardNumber ${validation.cardNumber ? '':'error'}`} type="text" maxLength="4" value={cardNumber[3]} onChange={e => this.handleCardNumberChange(3,e)} />
					</div>
					{!validation.cardNumber &&
						<Reminder text="必填欄位"/>
					}					
				</div>
				<div className="inputArea d-flex align-items-center justify-content-between">
					<div style={{width:'40%'}}>
						<div className="title"><span>*</span>有效日期</div>
						<div className="validDate d-flex align-items-center">
							<input ref="validMonth" className={`date ${validation.validDate ? '':'error'}`} type="text" placeholder="MM" maxLength="2" value={validDate.month} onChange={e => this.handleDateChange('month',e)} />
							<div>/</div>
							<input ref="validYear" className={`date ${validation.validDate ? '':'error'}`} type="text" placeholder="YY" maxLength="2" value={validDate.year} onChange={e => this.handleDateChange('year',e)} />
						</div>
						{!validation.validDate &&
							<Reminder text="必填欄位"/>
						}						
					</div>
					<div style={{width:'40%'}}>
						<div className="title"><span>*</span>信用卡背面末三碼</div>
						<div className="lastNumber">
							<input ref="lastNumber" className={`lastNumberInput ${validation.cvc ? '':'error'}`} type="text" maxLength="3" value={cvc} onChange={e => this.handleCodeChange(e)}/>
							{!validation.cvc &&
								<Reminder text="必填欄位"/>
							}	
						</div>					
					</div>												
				</div>
				<div className="inputArea">
					<div className="title"><span>*</span>手機號碼</div>
					<input ref="phone" className={`phone ${validation.phone ? '':'error'}`} type="text" value={phone} onChange={e => this.handlePhoneChange(e)}/>
					{!validation.phone &&
						<Reminder text="必填欄位"/>
					}					
					<div className="desc">
						<div>如非台灣手機號碼請加國碼，如香港為852，則輸入852123456789。</div>
						<div>若刷卡驗證採簡訊驗證，簡訊將發送至您於發卡銀行留存的手機號碼。</div>
					</div>					
				</div>				
			</div>
			<button className="btn confirm" onClick={() => this.handleSubmit()}>確認付款</button>
		</div>
	)}
}

const Reminder = ({text}) => {
	return (
		<div className="reminder d-flex align-items-center justify-content-between">
			<div className="text">{text}</div>
			<div><i className="material-icons">warning</i></div>
		</div>		
	)
}

CreditCard = connect()(CreditCard)
export default CreditCard

// CreditCard.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }
