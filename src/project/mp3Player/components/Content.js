import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Palette from '../image/Palette.png'
import BBIBBI from '../image/BBIBBI.png'
import SMASH_HITS_2 from '../image/SMASH_HITS_2.png'
import SoulMate from '../image/SoulMate.png'
import Flower_Bookmark from '../image/Flower_Bookmark.png'
import CHAT_SHIRE from '../image/CHAT_SHIRE.png'
import album_musicvideo from '../image/album_musicvideo.png'
import favoriteSvg from '../svg/favorite.svg'
import unfavoriteSvg from '../svg/unfavorite.svg'

export default class Content extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentAlbum: 'Palette',
			currentSong: 'dlwlrma',
			playTime: '00:00'
		}

	}	

	render() {
		// const { type, switchPage, data } = this.props
		let albums = [
			{id: 'BBIBBI', name: 'BBIBBI',publishDate: '2019-07-01', artist: 'IU',songs:[]},
			{id: 'SMASH_HITS_2', name: 'SMASH HITS 2',publishDate: '2019-01-01', artist: 'IU',songs:[]},
			{id: 'SoulMate', name: 'SoulMate',publishDate: '2018-08-05', artist: 'IU',songs:[]},
			{id: 'Flower_Bookmark', name: 'Flower Bookmark',publishDate: '2018-03-01', artist: 'IU',songs:[]},
			{id: 'CHAT_SHIRE', name: 'CHAT-SHIRE',publishDate: '2017-11-01', artist: 'IU',songs:[]},
			{id: 'Palette', name: 'Palette',publishDate: '2017-01-30', artist: 'IU', 
				songs: [
					{name:'dlwlrma',time:'03:33'},
					{name:'Palette (Feat. G-DRAGON)',time:'02:52'},
					{name:'Ending scene',time:'03:10'},
					{name:"Can't Love You Anymore (With OHHYUK)",time:'03:55'},
					{name:'Jam Jam',time:'02:57'},
					{name:'Black Out',time:'03:25'},
					{name:'Full Stop',time:'04:05'},
					{name:'Through the Night',time:'03:45'},
					{name:'Love Alone',time:'03:40'},
					{name:'Dear Name',time:'03:50'},
				]}	
		]
		let album = albums.find((item) => {
			return item.name == this.state.currentAlbum;
		})
		let song = album.songs.find((item) => {
			return item.name == this.state.currentSong;
		})
		console.log(album)
		console.log(song)
	return(
	<div className="musicContent">		
		<div className="album d-flex">
			<div className="albumInfo">
				<div className="albumCover">
					<img src={Palette}/>
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
				return (
					<div key={index} className="song d-flex align-items-center justify-content-between">
						<div>
							<span className="order">{index+1}</span>
							<span className="name">{song.name}</span>						
						</div>
						<div className="like"><img src={unfavoriteSvg}/></div>
					</div>						
				)
			})}
			</div>
		</div>
		<div className="albumList">
			<div>New Albums</div>
			<div className="lists d-flex">
			{albums.map((album, index) => {
				if (album.name !== this.state.currentAlbum) {
					return (
						<div key={index} className="album">
							<img src={`./dist/mp3Player/image/${album.id}.png`} />
							<div className="name">{album.name}</div>					
						</div>
					)
				}
			})}
			</div>
		</div>
	</div>
)}
}

// Content.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }
