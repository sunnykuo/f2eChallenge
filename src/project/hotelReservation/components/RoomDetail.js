import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils }  from 'react-day-picker'
import Flickity from 'flickity'
import moment from 'moment';
import ReactLoading from 'react-loading'
import { bookRoom, resetBookResult } from '../actions'

let flickityOptions = {
    initialIndex: 0,
    cellSelector: '.photo',
    pageDots: false,
    wrapAround: true   
}

function isEmpty(value) {
	if (value !== "" && value !== null) {
		return false
	} else {
		return true
	}
}

function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}


class RoomDetail extends Component {
	constructor(props) {
		super(props)
		this.handleDayClick = this.handleDayClick.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handlePhoneChange = this.handlePhoneChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			name: '',
			phone: '',
			from: null,
			to: null,
			validation: {
				name: true,
				phone: true,
				date: true,
				dateOverRange: false
			},
			activeReserveBtn: false			
		}			
	}

	componentDidMount() {
		this.props.dispatch(resetBookResult())		
		setTimeout(() => {
			let flkty = new Flickity( '.carousel', flickityOptions);
		});
		window.scrollTo(0, 0);
	}

	handleDayClick(day, modifiers = {}) {
		if (modifiers.disabled) return;
	    const range = DateUtils.addDayToRange(day, this.state);
	    this.setState(range);
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
			name: value
		})
	}  	

	handleSubmit(id) {
		//checkEmpty
		let canSubmit = true;
		const { name, from, to, phone, validation, activeReserveBtn } = this.state;

		//reset validation
		validation.name = true;
		validation.phone = true;
		validation.date = true;
		validation.dateOverRange = false;

		if ( isEmpty(name) ) {
			canSubmit = false
			validation.name = false
		}	

		if ( isEmpty(from) || isEmpty(to) ) {
			 canSubmit = false
			 validation.date = false
		}

		if (validation.date) {
			if ((moment(from).diff(moment(),'days') > 90) || (moment(to).diff(moment(),'days') > 90)) {
				validation.date = false
				validation.dateOverRange = true
			}
		}


		if ( isEmpty(phone) ) {
			canSubmit = false
			validation.phone = false
		}	

		if (!canSubmit)	{
			if (activeReserveBtn) {
				this.setState({
					validation
				})
			} else {
				this.setState({
					validation,
					activeReserveBtn: true
				})
			}
		} else {
			if (!activeReserveBtn) {
				this.setState({
					activeReserveBtn: true
				})
			}		

			let data = {
				name,
				tel: phone,
				date: getDates(from, to)
			}

			this.props.dispatch(bookRoom(id, data))
		}
	}			

	render() {
	    const { detail, isBooking, bookResult, handleDetailPage } = this.props
	    const room = detail.room[0];
	    const descriptionShort = room.descriptionShort;
	    const booked = detail.booking;

	    const { from, to, name, phone, validation } = this.state;
	    const modifiers = { start: from, end: to };
	    const disabledDays = [
	    		{
	    			before: new Date()
	    		}
	    	]

	    if (booked.length > 0) {
	    	booked.map((item) => {
	    		disabledDays.push(moment(item.date).toDate())
	    	})
	    }

	return(
		<div className="roomDetail">
			<div className="roomInfo d-flex justify-content-between">
				<div className="carousel-outside d-flex justify-content-center">
					<RoomPhoto detail={room}/>
				</div>
				<div className="details">
					<div className="d-flex align-items-center justify-content-around">
						<div className="checkTime d-flex align-items-center">
							<div className="time checkin">
								<div style={{marginBottom: '3px'}}>CheckIn</div>
								<div>{room.checkInAndOut.checkInEarly}-{room.checkInAndOut.checkInLate}</div>
							</div>
							<div className="time">
								<div style={{marginBottom: '3px'}}>CheckOut</div>
								<div>{room.checkInAndOut.checkOut}</div>
							</div>
						</div>	
					 	<div className="info">
					 		<div>房客人數限制：{descriptionShort.GuestMax}人</div>
					 		<div>床型：{descriptionShort.Bed[0]}</div>
					 		<div>衛浴數量：{descriptionShort['Private-Bath']}間</div>
					 		<div>房間大小：{descriptionShort.Footage} M²</div>
					 	</div>	
					</div>	
					<div className="desc">{room.description}</div>
				</div>
			</div>
			<div className="reserve-area d-flex justify-content-between">
				<div className="calenderArea">
					<div>- 此房型可預訂狀態</div>
					<DayPicker className="Selectable" 
						onDayClick={this.handleDayClick} 
						selectedDays={[from, { from, to }]} 
						modifiers={modifiers}
						disabledDays={disabledDays}
					/>
				</div>
				<div>
				<Reserve {...this.state} isBooking={isBooking} bookResult={bookResult} room={room} handleNameChange={this.handleNameChange} handlePhoneChange={this.handlePhoneChange} handleSubmit={this.handleSubmit} />
				</div>
			</div>
			<Providers amenities = {room.amenities}/>
		</div>
)}
}

class Reserve extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {activeReserveBtn, name, phone, from, to, validation, isBooking, bookResult, room, handlePhoneChange, handleNameChange, handleSubmit } = this.props;

		if (bookResult !== null && bookResult.success) {
			return (
				<div className="reserve">
					<h1 className="title">
						<span>訂房成功<i className="material-icons">check_circle_outline</i></span>
					</h1>
					<div className="input">
						<span>姓名</span><span>{name}</span>
					</div>
					<div className="input">
						<span>電話</span><span>{phone}</span>
					</div>
					<div className="input date">
						<span>日期</span><span>{moment(from).format('YYYY-MM-DD')}</span><span className="dateText">至</span><span>{moment(to).format('YYYY-MM-DD')}</span>
					</div>	
					<PriceDetail from={from} to={to}  room={room} />
					<div className="btnReserve d-flex justify-content-center">
						<div className="finalBtn d-flex align-items-center justify-content-between">
							<div className="cancel">取消訂單</div>
							<div className="contact">聯絡我們</div>
						</div>
					</div>						
				</div>		
			)		
		} else {
			return (
				<div className="reserve">
					<h1 className="title"><span>即刻預訂!</span></h1>
					<div className="input">
						<div><span>姓名</span><input type="text" value={name} onChange={e => handleNameChange(e)}/></div>
						{!validation.name && <Reminder text="必填欄位" />}
					</div>
					<div className="input">
						<div><span>電話</span><input type="text" value={phone} onChange={e => handlePhoneChange(e)}/></div>
						{!validation.phone && <Reminder text="必填欄位" />}
					</div>
					<div className="input date">
						<div><span>日期</span><input readOnly type="text" ref="start_date" value={from == null ? '' : moment(from).format('YYYY-MM-DD')} /><span className="dateText">至</span><input readOnly type="text" ref="end_date" value={to == null ? '' : moment(to).format('YYYY-MM-DD')} /></div>
						{!validation.date && <Reminder text={`${validation.dateOverRange ? '預定日期不可超過90天':'必填欄位'}`} />}
					</div>	
					{activeReserveBtn &&
						<PriceDetail from={from} to={to}  room={room} />
					}
					<div className="btnReserve d-flex justify-content-center">
						<button className={`btn d-flex ${isBooking ? 'disabled':''}`} onClick={() => handleSubmit(room.id)}><div>預約</div>{isBooking && <ReactLoading type="spinningBubbles" color="#fff" height={'18px'} width={'18px'} />}</button>
					</div>						
				</div>		
			)			
		}

	}
}

function getDayCount(normalDay, dayArray) {
	let result = dayArray.filter((day) => {
		let dayIndex = moment(day).toDate().getDay();
		if (normalDay) {
			return dayIndex > 0 && dayIndex < 5
		} else {
			return dayIndex >= 5 || dayIndex === 0
		}
	})
	return result.length;
}

const PriceDetail = ({from, to, room}) => {
	let dayArray = getDates(from, to)
	let holidayCount = getDayCount(false, dayArray)
	let normalDayCount = getDayCount(true, dayArray)
	let normalDayPrice = normalDayCount*room.normalDayPrice;
	let holidayPrice = holidayCount*room.holidayPrice;

	return (
		<div className="priceDetail">
			<div className="detail">
				{normalDayCount > 0 &&
					<div className="price d-flex align-items-center justify-content-between">
						<div>${room.normalDayPrice} x {normalDayCount}晚</div>
						<div>${normalDayPrice}</div>
					</div>					
				}
				{holidayCount > 0 &&
					<div className="price d-flex align-items-center justify-content-between">
						<div>${room.holidayPrice} x {holidayCount}晚</div>
						<div>${holidayPrice}</div>
					</div>					
				}				
				<div className="price d-flex align-items-center justify-content-between">
					<div>手續費</div>
					<div>$0</div>
				</div>								
			</div>
			<div className="finalPrice d-flex align-items-center justify-content-between">
				<div>總計</div>
				<div>${normalDayPrice+holidayPrice}</div>
			</div>
		</div>		
	)
}

const Reminder = ({text}) => {
	return (
		<div className="reminder d-flex align-items-center justify-content-center">
			<i className="material-icons">error</i>		
			<div className="text">{text}</div>
		</div>		
	)
}

const RoomPhoto = ({detail}) => (
	<div className="room">
		<div className="carousel">
		{detail.imageUrl.map((image, i) => {
			return(<div key={i} className="photo" style={{backgroundImage: `url('${image}')`}}></div>)
			})
		}
		</div>
		<div className="name">{detail.name}</div>
		<div className="date">平日/假日(五-日)</div>
		<div className="price">{`\$${detail.normalDayPrice}/${detail.holidayPrice}`}</div>
	</div>
)

const Providers = ({amenities}) => {
	const idList = Object.keys(amenities);
	return (
		<div className="providers">
			<div className="title">提供項目</div>
			<div className="items d-flex justify-content-between">
				<ul className="left">
					{idList.map((id, i) => {
						if(i <= 5) {
							return(
								<li key={i} className={`${amenities[id] ? 'active':''}`}>
									<i className="material-icons">{`${amenities[id] ? 'done':'clear'}`}</i>{`${id=='Wi-Fi' ? id : id.replace("-"," ")}`}
								</li>)
						}
					})
					}					
				</ul>
				<ul className="right">
					{idList.map((id, i) => {
						if(i > 5) {
							return(
								<li key={i} className={`${amenities[id] ? 'active':''}`}>
									<i className="material-icons">{`${amenities[id] ? 'done':'clear'}`}</i>{`${id=='Wi-Fi' ? id : id.replace("-"," ")}`}
								</li>)
						}
					})
					}				
				</ul>
			</div>
		</div>		
	)
}

RoomDetail = connect()(RoomDetail)
export default RoomDetail

