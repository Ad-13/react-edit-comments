import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentsList from '../components/CommentsList'
// import { bindActionCreators } from 'redux'
// import User from '../components/User'
// import * as pageActions from '../actions/PageActions'

class Comments extends Component {
	render() {
		const comments = this.props.commentsList.comments
		return (
			<CommentsList commentsArr={comments}/>
		)
	}
}

function mapStateToProps(state) {
	return {
		commentsList: state.CommentsList
	}
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		pageActions: bindActionCreators(pageActions, dispatch)
// 	}
// }

export default connect(mapStateToProps)(Comments);