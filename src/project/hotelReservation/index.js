import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRoomsIfNeeded, fetchRoomDetail } from './actions'
import RoomList from './components/RoomList'
import Header from './components/Header' 
import RoomDetail from './components/RoomDetail'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"
import ReactLoading from 'react-loading'

import './index.scss'
import banner from  './image/banner.png'
import Icon_chevronsdown from  './image/Icon_chevronsdown.svg'
import Icon_facebook from  './image/Icon_facebook.svg'
import Icon_Instagram from  './image/Icon_Instagram.svg'

class HotelReservation extends Component {
	constructor(props) {
		super(props)
		this.handleDetailPage = this.handleDetailPage.bind(this)
		this.handleScroll = this.handleScroll.bind(this)
		this.state = {
			showDetail: false,
			showAnimate: false
		}
		this.listRef = React.createRef()
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchRoomsIfNeeded())
		window.addEventListener('scroll', this.handleScroll, true);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}		

	handleScroll() {
		if (this.state.showAnimate || this.state.showDetail) return;

		const winScroll =
		    document.body.scrollTop || document.documentElement.scrollTop		

    	if (winScroll >= 200) {
    		this.listRef.current.classList.add('showAnimate');
    		this.setState({
    			showAnimate: true
    		})
    	}
	}

	handleDetailPage(status, id = "") {
		this.setState({
			showDetail: status,
			showAnimate: false
		})
		if (status) {
			this.props.dispatch(fetchRoomDetail(id))
		}
		window.scrollTo(0, 0)		
	}	

    scrollToRoomList() {
        window.scrollTo({
            top: this.listRef.current.offsetTop - 90, 
            behavior: "smooth"
        });
    }	

	render() {
		const { isFetching, roomList, roomDetail, isBooking, bookResult } = this.props
		return (
			<div className="hotelReservation main">
				<Header handleDetailPage={this.handleDetailPage} />
				{!this.state.showDetail && !isFetching &&
					<div className="contents">
						<div className="bannerArea">
							<img src={banner} />
							<div className="follow">
								<span>Follow Us!</span>
								<img src={Icon_Instagram} />
								<img src={Icon_facebook} />
							</div>
						</div>
						<div className="down" onClick={() => this.scrollToRoomList()}><img src={Icon_chevronsdown} /></div>
						<RoomList ref={this.listRef} roomList={roomList} handleDetailPage={this.handleDetailPage}/>
					</div>
				}
				{this.state.showDetail && !isFetching &&
					<RoomDetail detail={roomDetail} isBooking={isBooking} bookResult={bookResult} handleDetailPage={this.handleDetailPage} />
				}
				{isFetching && 
					<div className="loading d-flex align-items-center justify-content-center">
						<ReactLoading type="bubbles" color="#000" height={'80px'} width={'80px'} />
					</div>
				}
				<div className="footer d-flex flex-column align-items-center">
					<div>
						<div className="info"><i className="material-icons">place</i>台北市大安區新生南路二段86號</div>
						<div className="info"><i className="material-icons">phone</i>02-2345678</div>
						<div className="info"><i className="material-icons">email</i>homeplace@mail.com</div>
					</div>
				</div>
			</div>
		)
	}
}

HotelReservation.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	roomList: PropTypes.array.isRequired,
	roomDetail: PropTypes.object
}

function mapStateToProps(state) {
	const { isFetching, roomList, roomDetail, isBooking, bookResult } = state.hotelReducer
	return {
		isFetching,
		roomList,
		roomDetail,
		isBooking,
		bookResult
	}
}

export default withRouter(connect(mapStateToProps)(HotelReservation));
