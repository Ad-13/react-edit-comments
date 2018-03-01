import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import User from '../components/User'
// import Page from '../components/Page'
// import * as pageActions from '../actions/PageActions'

class Comments extends Component {
	render() {
		return (
			<div className='comments-list'>
				comments-list page
			</div>
		)
	}
}

// function mapStateToProps(state) {
// 	return {
// 		user: state.user,
// 		page: state.page
// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		pageActions: bindActionCreators(pageActions, dispatch)
// 	}
// }

export default connect()(Comments);