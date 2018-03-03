import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../components/EditComment'
import { bindActionCreators } from 'redux'
import * as CommentsListActions from '../actions/CommentsListActions'

class CommentsEditor extends Component {
	render() {
		const comments = this.props.commentsList.comments
		const commentsTemplate = comments.map(comment => {
			return <Comment key={comment.id} comment={comment} />
		})
		return (
			<div className='comments-list'>
				{commentsTemplate}
			</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CommentsEditor);