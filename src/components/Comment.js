import React, { Component } from 'react'

export default class Comment extends Component {
	
	render() {
		const comments = this.props.comments || []
		const comment = this.props.comment || {}
		const toggleForm = function () {
			this.props.toggleForm(comments, comment.id);
		}

		return (
			<div key={comment.id} className='comment'>
				<div className='comment__header'>
					<p className='comment__num'>№ {comment.id}</p>
					<p className='comment__author'>Автор: <span className='name'>Ad</span></p>
				</div>
				<div className='comment__content'>
					<button
						className={comment.isFormOpened ? 'toggle-form active' : 'toggle-form'}
						onClick={toggleForm.bind(this)}
					>
						<span className='img'></span>
					</button>
					<p className='comment__text'>{comment.text}</p>
					<form className='comment__form'>
						<textarea
							className='edit-comment'
							defaultValue=''
							placeholder='Your version'
						></textarea>
						<button
							className='submit'
						>Edit Commesssnt</button>
					</form>
				</div>
			</div>
		)
	}

	animateHeight() {
		console.log('height');
	}

}
