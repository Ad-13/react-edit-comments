import React, { Component } from 'react'
import Loader from './Loader'

export default class UserText extends Component {
	approveRequest = this.props.approveRequest
	article = this.props.article || {}
	render() {
		const usersText = this.props.userText || []
		return (
			<div className='user-text'>
				<p className='txt' ref='userText'>{usersText}</p>
				<button
					className='btn btn--approve'
					onClick={() => this.approveSuggestion()}
					disabled={this.article.requestStatus == 'pending' ? true : false}
				>Approve</button>
				<Loader />
			</div>
		)
	}

	approveSuggestion() {
		const newText = this.refs.userText.innerText;
		let modifiedArticle = {
			id: this.article.id,
			articleUrl: this.article.articleUrl,
			name: this.article.name,
			originalText: newText,
			isFormOpened: false,
			requestStatus: ''
		}
		this.approveRequest(modifiedArticle);
	}

}
