import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ad1 from '../image/ad1.png'

class Ad extends Component {
	constructor(props) {
		super(props)		
		this.handleSubscribe = this.handleSubscribe.bind(this);
	}

	handleSubscribe() {

	}

	render() {

	return(
		<div className="ad d-flex justify-content-center align-items-center">
			<div className="ad_inner">
				<img src={ad1} />
				<div className="ad_text">
					<div>Best online music player for listening song's</div>
					<button className="btn">Subscribe</button>
					<div className="laterBtn" onClick={() => this.props.handleAdPopup(false)}>Ask me later</div>
				</div>
			</div>
		</div>
)}
}
Ad = connect()(Ad)
export default Ad
// Ad.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }

