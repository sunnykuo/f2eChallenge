import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Palette from '../image/Palette.png'
import lastsongSvg from '../svg/lastsong.svg'
import nextsongSvg from '../svg/nextsong.svg'
import playSvg from '../svg/play.svg'
import playercontrollerSvg from '../svg/playercontroller.svg'
import volumeSvg from '../svg/volume.svg'
import randomSvg from '../svg/random.svg'
import loopSvg from '../svg/loop.svg'


export default class ControlArea extends Component {
	render() {
		const { switchPage } = this.props
	return(
		<div className="controlArea d-flex align-items-center justify-content-between">
			<div className="albumInfo d-flex align-items-center">
				<div className="photo">
					<img src={Palette}/>
				</div>			
				<div className="">
					<div className="albumName">dlwlrma</div>
					<div className="artistName">IU</div>
				</div>							
			</div>
			<div className="control d-flex align-items-center">
				<div className="">
					<img src={lastsongSvg}/>
				</div>
				<div className="">
					<img src={playSvg}/>
				</div>
				<div className="">
					<img src={nextsongSvg}/>
				</div>
				<div className="playProgress d-flex align-items-center">
					<div className="startTime">
						0:32
					</div>
					<div className="progressbar">
						<img src={playercontrollerSvg}/>
					</div>
					<div className="songTime">
						2:56
					</div>					
				</div>
				<div className="loop">
					<img src={loopSvg}/>
				</div>
				<div className="random">
					<img src={randomSvg}/>
				</div>
				<div className="volume d-flex align-items-center">
					<img src={volumeSvg}/>
					<div className="progressbar">
						<img src={playercontrollerSvg}/>
					</div>
				</div>																																			
			</div>
		</div>
	)}
}

// ControlArea.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

