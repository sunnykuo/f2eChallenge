import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { updateCurrentPage } from '../actions'
import SearchContent from '../components/SearchContent'
import logo from '../image/logo.svg'


class Header extends Component {
	constructor(props) {
		super(props)
		this.handleDisplaySearchPopup = this.handleDisplaySearchPopup.bind(this)
		this.state = {
			showSearchContent: false
		}
	}

	handleDisplaySearchPopup(show = false) {
		this.setState({
			showSearchContent: show
		})
	}

	render() {
		// const { switchPage, missions, breakTime } = this.props
	return(
		<div className="header d-flex align-items-center">
			<div className="left d-flex align-items-center">
				<img src={logo} />
			</div>
			<div className="right d-flex flex-column">
				<div className="progressArea d-flex flex-column">
					<div className="d-flex align-items-center justify-content-between">
						<div>30 GB</div>
						<div>100 GB</div>
					</div>
					<div className="progressBar">
						<div className="progressNow" style={{width: `30px`}}></div>
					</div>
				</div>
				<div className="search d-flex align-items-center">
					<div className="searchIcon"><i className="material-icons">search</i></div>
					<div className="searchInput">
						<input type="text" />
						<div className="dropdownbtn" onClick={()=>this.handleDisplaySearchPopup(!this.state.showSearchContent)}><i className="material-icons">arrow_drop_down</i></div>
						{ this.state.showSearchContent && 
							<SearchContent displaySearchPopup={this.handleDisplaySearchPopup}/>
						}
					</div>
				</div>
			</div>
		</div>
)}
}
Header = connect()(Header)
export default Header
// Header.propTypes = {
// 	type: PropTypes.number.isRequried,
// 	switchPage: PropTypes.func.isRequried
// }


