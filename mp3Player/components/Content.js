import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateCurrentPlay, updateCurrentAlbum, updateFavorite } from '../actions'

import orangeMoon from '../image/orangeMoon.png'
import Palette from '../image/Palette.png'
import BBIBBI from '../image/BBIBBI.png'
import SoulMate from '../image/SoulMate.png'
import Flower_Bookmark from '../image/Flower_Bookmark.png'
import CHAT_SHIRE from '../image/CHAT_SHIRE.png'
import album_musicvideo from '../image/album_musicvideo.png'

class Content extends Component {
	constructor(props) {
		super(props)
		this.handleFavorite = this.handleFavorite.bind(this)
		this.handleSwitchAlbum = this.handleSwitchAlbum.bind(this)
		this.handlePlaySong = this.handlePlaySong.bind(this)
	}	

	handleFavorite(status, album, song, artist) {
		let favorite = Object.assign([], this.props.favorite)
		if (status) {
			favorite.push({
				album,
				song,
				artist
			})
		} else {
			favorite = this.props.favorite.filter((item) => {
				return !(item.album == album && item.song == song && item.artist == artist); 
			})
		}

		this.props.dispatch(updateFavorite(favorite))
	}

	handleSwitchAlbum(album, artist) {
		let currentAlbum = {
			album,
			artist
		}
		this.props.dispatch(updateCurrentAlbum(currentAlbum))
	}

	handlePlaySong(id,album,song,artist,time) {
		let currentPlay = Object.assign({}, this.props.currentPlay, {id,album,song,artist,time, playTime: '00:00', play: true});
		this.props.dispatch(updateCurrentPlay(currentPlay))
	}

	render() {
		const { albums, currentPlay, currentPage, favorite, currentAlbum } = this.props
		let currentAlbumInfo = currentAlbum !== null ? currentAlbum : {album: albums[0].name,artist: albums[0].artist}

		let album = albums.find((item) => {
			return (item.name == currentAlbumInfo.album && item.artist == currentAlbumInfo.artist);
		})

		let albumLists = albums.filter((item) => {
			return !(item.name == currentAlbumInfo.album && item.artist == currentAlbumInfo.artist);
		})

	return(
		<div className="musicContent">		
			<div className="album d-flex">
				<div className="albumInfo">
					<div className="albumCover">
						<img src={`./dist/image/${album.id}.png`}/>
						<div className="albumName">{album.name}</div>
						<div>{album.artist}</div>
						<div className="date">{album.publishDate}</div>
					</div>
					<div className="musicVideo">
						<div>Music Vedios</div>
						<div className="videoImg"><img src={album_musicvideo}/></div>
					</div>
				</div>
				<div className="songList">
				{album.songs.map((song,index) => {
					let like = favorite.find((item) => {
						return (item.album == album.name && item.song == song.name && item.artist == album.artist);
					}) ? true : false;

					return (
						<div key={index} className="song d-flex align-items-center justify-content-between">
							<div className="songInfo" onClick={() => this.handlePlaySong(album.id, album.name, song.name, album.artist, song.time)}>
								<span className="order">{index+1}</span>
								<span className="name">{song.name}</span>						
							</div>
							<div className="like" onClick={()=> this.handleFavorite(!like, album.name, song.name, album.artist)}>
								<i className="material-icons">{`${like ? 'favorite':'favorite_border'}`}</i>
								</div>
						</div>						
					)
				})}
				</div>
			</div>
			<div className="albumList">
				<div>New Albums</div>
				<div className="lists d-flex">
				{albumLists.map((eachAlbum, index) => {
					if (eachAlbum.artist == currentAlbumInfo.artist) {
						return (
							<div key={index} className="album" onClick={() => this.handleSwitchAlbum(eachAlbum.name, eachAlbum.artist)}>
								<img src={`./dist/image/${eachAlbum.id}.png`} />
								<div className="name">{eachAlbum.name}</div>					
							</div>
						)
					}
				})}
				</div>
			</div>
		</div>
	)}
}
Content = connect()(Content)
export default Content

// Content.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }
