import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateCurrentPlay, updatePlayTime, updatePlayLoop, updatePlayRandom, updatePlayVolume, updatePlayStatus } from '../actions'

import Palette from '../image/Palette.png'
import playercontrollerSvg from '../svg/playercontroller.svg'


class ControlArea extends Component {
	constructor(props) {
		super(props)
		this.handleUpdateTime = this.handleUpdateTime.bind(this)
		this.handleUpdateLoop = this.handleUpdateLoop.bind(this)
		this.handleUpdateRandom = this.handleUpdateRandom.bind(this)
		this.handleUpdateVolume = this.handleUpdateVolume.bind(this)
		this.handleUpdateStatus = this.handleUpdateStatus.bind(this)
		this.handleUpdateSong = this.handleUpdateSong.bind(this)	
	}	

	handleUpdateTime() {
		let time = '03:01';
		this.props.dispatch(updatePlayTime(time))
	}	

	handleUpdateLoop() {
		let loop = this.props.currentPlay.loop == 2 ? 0 : this.props.currentPlay.loop+1;
		this.props.dispatch(updatePlayLoop(loop))
	}	

	handleUpdateRandom() {
		let random = !this.props.currentPlay.random;
		this.props.dispatch(updatePlayRandom(random))
	}

	handleUpdateVolume() {
		let volume = 10;
		this.props.dispatch(updatePlayVolume(volume))
	}

	handleUpdateStatus() {
		let time = '02:22';
		let status = !this.props.currentPlay.play;
		this.props.dispatch(updatePlayStatus(time, status))
	}					

	handleUpdateSong(song) {
		if (song === undefined) return;

		let currentPlay = Object.assign({}, this.props.currentPlay, 
			{
				song: song.name,
				time: song.time, 
				playTime: '00:00'
			});
		this.props.dispatch(updateCurrentPlay(currentPlay))
	}

	render() {
		const { currentPlay, albums, switchPage } = this.props

		let album = albums.find((item) => {
			return (item.name == currentPlay.album && item.artist == currentPlay.artist);
		})

		let songs = [];
		let currentSongIndex = 0, prevSongIndex = 0, nextSongIndex = 0;

		if (album !== undefined) {
			songs = album.songs;

			currentSongIndex = songs.findIndex((item) => {
				return item.name == currentPlay.song;
			})

			prevSongIndex = currentSongIndex === 0 ? songs.length-1 : currentSongIndex-1;
			nextSongIndex = currentSongIndex === songs.length-1 ? 0 : currentSongIndex+1; 
		}

	return(
		<div className="controlArea d-flex align-items-center justify-content-between">
			<div className="albumInfo d-flex align-items-center">
				<div className="photo">
					<img src={Palette}/>
				</div>			
				<div className="">
					<div className="albumName">{currentPlay.song}</div>
					<div className="artistName">{currentPlay.artist}</div>
				</div>							
			</div>
			<div className="control d-flex align-items-center">
				<div className="play">
					<i className="material-icons" onClick={() => this.handleUpdateSong(songs[prevSongIndex])}>skip_previous</i>
				</div>
				<div className="play playControl">
					<i className="material-icons" onClick={() => this.handleUpdateStatus()}>{`${currentPlay.play ? 'pause':'play_arrow'}`}</i>
				</div>
				<div className="play">
					<i className="material-icons" onClick={() => this.handleUpdateSong(songs[nextSongIndex])}>skip_next</i>
				</div>
				<div className="playProgress d-flex align-items-center">
					<div className="startTime">
						{currentPlay.playtime}
					</div>
					<div className="progressbar">
						<img src={playercontrollerSvg}/>
						<div className="progressbar_inner" />
					</div>
					<div className="songTime">
						{currentPlay.time}
					</div>					
				</div>
				<div className="rightControl">
					<i className={`material-icons ${currentPlay.loop !== 0 ? ' active':''}`} onClick={() => this.handleUpdateLoop()}>{`${currentPlay.loop == 2 ? 'repeat_one': 'repeat'}`}</i>
				</div>
				<div className="rightControl">
					<i className={`material-icons${currentPlay.random ? ' active':''}`} onClick={() => this.handleUpdateRandom()}>shuffle</i>
				</div>
				<div className="rightControl volume d-flex align-items-center">
					<i className="material-icons">volume_up</i>
					<div className="progressbar">
						<img src={playercontrollerSvg} style={{left: `${currentPlay.volume}%`}} />
						<div className="progressbar_inner" style={{width: `${currentPlay.volume}%`}}/>
					</div>
				</div>																																			
			</div>
		</div>
	)}
}

ControlArea = connect()(ControlArea)
export default ControlArea

// ControlArea.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

