import React, { Component } from 'react'

export default class UserText extends Component {
	render() {
		const usersText = this.props.userText || []
		return (
			<div className='user-text'>
				<p className='txt' ref='userText'>{usersText}</p>
				<button
					className='btn btn--approve'
					onClick={() => this.approveSuggestion()}
				>Approve</button>
			</div>
		)
	}

	approveSuggestion() {
		console.log('approveSuggestion');
		console.log(this.refs.userText.innerText);
	}

}
