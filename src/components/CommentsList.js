import React, { Component } from 'react'

export default class CommentsList extends Component {

	render() {
		const commentsArr = this.props.commentsArr || []
		const self = this
		const commentsTemplate = commentsArr.map(function (item) {
			return (
				<div key={item.id} className='comment'>
					<div className='comment__header'>
						<p className='comment__num'>№ {item.id}</p>
						<p className='comment__author'>Автор: <span className='name'>Ad</span></p>
					</div>
					<div className='comment__content'>
						<button
							className='toggle-form'
							onClick={self.toggleForm}
							ref='toggle-form'>
						</button>
						<p className='comment__text'>{item.text}</p>
						<form  className='comment__form'>
							<textarea
								className='edit-comment'
								defaultValue=''
								placeholder='Your version'
								ref='edit-comment'
							></textarea>
						</form>
					</div>
				</div>
			)
		})

		return (
			<div className='comments-list'>
				{commentsTemplate}
			</div>
		)
	}

	
	toggleForm() {
		console.log('asas');
	}

}
