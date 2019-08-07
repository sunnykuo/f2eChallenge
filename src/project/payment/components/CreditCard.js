import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateCurrentPlay, updateCurrentAlbum, updateFavorite } from '../actions'

// import orangeMoon from '../image/orangeMoon.png'

class CreditCard extends Component {
	constructor(props) {
		super(props)
		// this.handleFavorite = this.handleFavorite.bind(this)
		// this.handleSwitchAlbum = this.handleSwitchAlbum.bind(this)
		// this.handlePlaySong = this.handlePlaySong.bind(this)
	}	

	// handleFavorite(status, album, song, artist) {
	// 	let favorite = Object.assign([], this.props.favorite)
	// 	if (status) {
	// 		favorite.push({
	// 			album,
	// 			song,
	// 			artist
	// 		})
	// 	} else {
	// 		favorite = this.props.favorite.filter((item) => {
	// 			return !(item.album == album && item.song == song && item.artist == artist); 
	// 		})
	// 	}

	// 	this.props.dispatch(updateFavorite(favorite))
	// }

	// handleSwitchAlbum(album, artist) {
	// 	let currentAlbum = {
	// 		album,
	// 		artist
	// 	}
	// 	this.props.dispatch(updateCurrentAlbum(currentAlbum))
	// }

	// handlePlaySong(id,album,song,artist,time) {
	// 	let currentPlay = Object.assign({}, this.props.currentPlay, {id,album,song,artist,time, playTime: '00:00', play: true});
	// 	this.props.dispatch(updateCurrentPlay(currentPlay))
	// }

	render() {
		const { albums, currentPlay, currentPage, favorite, currentAlbum } = this.props
		// let currentAlbumInfo = currentAlbum !== null ? currentAlbum : {album: albums[0].name,artist: albums[0].artist}

		// let album = albums.find((item) => {
		// 	return (item.name == currentAlbumInfo.album && item.artist == currentAlbumInfo.artist);
		// })

		// let albumLists = albums.filter((item) => {
		// 	return !(item.name == currentAlbumInfo.album && item.artist == currentAlbumInfo.artist);
		// })

	return(
		<div className="inner creditCard d-flex flex-column align-items-center justify-content-between">
			<h1 className="title">信用卡</h1>
			<div className="creditCardType d-flex justify-content-between">
				<div className="type active"><i className="payfont-Visa" /></div>
				<div className="type"><i className="payfont-MasterCard" /></div>
				<div className="type"><i className="payfont-JCB" /></div>
				<div className="type"><i className="payfont-UnionPay" /></div>
			</div>
			<div className="userInfo">
				<div className="inputArea">
					<div className="title"><span>*</span>持卡人</div>
					<input ref="name" className="name error" type="text" />
					<Reminder text="持卡人姓名需與信用卡面姓名一致"/>
				</div>
				<div className="inputArea">
					<div className="title"><span>*</span>信用卡號</div>
					<div className="cardInfo d-flex align-items-center justify-content-between">
						<input ref="cardNumber1" className="cardNumber" type="text" maxLength="4" />
						<div>-</div>
						<input ref="cardNumber2" className="cardNumber" type="text" maxLength="4" />
						<div>-</div>
						<input ref="cardNumber3" className="cardNumber" type="text" maxLength="4" />
						<div>-</div>
						<input ref="cardNumber4" className="cardNumber" type="text" maxLength="4" />
					</div>
				</div>
				<div className="inputArea d-flex align-items-center">
					<div className="">
						<div className="title"><span>*</span>有效日期</div>
						<div className="invalidDate d-flex align-items-center">
							<input ref="invalidMonth" className="date" type="text" placeholder="MM" maxLength="2"/>
							<div>/</div>
							<input ref="invalidYear" className="date" type="text" placeholder="YY" maxLength="2"/>
						</div>
					</div>
					<div className="">
						<div className="title"><span>*</span>信用卡背面末三碼</div>
						<input ref="lastNumber" className="lastNumber" type="text" maxLength="3" />
					</div>												
				</div>
				<div className="inputArea">
					<div className="title"><span>*</span>手機號碼</div>
					<input ref="phone" className="phone" type="text" />
					<div className="desc">
						<div>如非台灣手機號碼請加國碼，如香港為852，則輸入852123456789。</div>
						<div>若刷卡驗證採簡訊驗證，簡訊將發送至您於發卡銀行留存的手機號碼。</div>
					</div>
				</div>				
			</div>
			<button className="btn confirm">確認付款</button>
		</div>
	)}
}

const Reminder = ({text}) => {
	return (
		<div className="reminder d-flex align-items-center justify-content-between">
			<div className="text">{text}</div>
			<div className=""><i className="material-icons">warning</i></div>
		</div>		
	)
}

CreditCard = connect()(CreditCard)
export default CreditCard

// CreditCard.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }
