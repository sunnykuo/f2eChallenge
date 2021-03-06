import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const RoomList = React.forwardRef(({ roomList, handleDetailPage }, ref) => (	
	<div ref={ref} className="roomList d-flex justify-content-between">
		{roomList.map((room, i) => {
				return(<div key={i} className="room" onClick={() => handleDetailPage(true, room.id)}>
					<div className="photo" style={{backgroundImage: `url('${room.imageUrl}')`}}></div>
					<div className="name">{room.name}</div>
					<div className="price">{`\$${room.normalDayPrice}/${room.holidayPrice}`}</div>
				</div>)					
			})
		}								
	</div>
))

export default RoomList
// RoomList.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }
