import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentsList from '../components/CommentsList'
import { bindActionCreators } from 'redux'
import * as CommentsListActions from '../actions/CommentsListActions'

class Comments extends Component {
	render() {
		const comments = this.props.commentsList.comments
		const { toggleForm } = this.props.CommentsListActions
		return (
			<CommentsList commentsArr={comments} toggleForm={toggleForm}/>
		)
	}
}

function mapStateToProps(state) {
	return {
		commentsList: state.CommentsList
	}
}

function mapDispatchToProps(dispatch) {
	return {
		CommentsListActions: bindActionCreators(CommentsListActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);