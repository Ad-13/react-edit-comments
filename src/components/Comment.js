import React, { Component } from 'react'
import AnimateHeight from 'react-animate-height';

export default class Comment extends Component {
	
	render() {
		const comments = this.props.comments || []
		const comment = this.props.comment || {}
		const formHeight = comment.isFormOpened ? 'auto' : 0
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
					<AnimateHeight
						duration={500}
						height={formHeight}
					>
						<form className='comment__form'>
							<textarea
								className='edit-comment'
								defaultValue=''
								placeholder='Your version'
							></textarea>
							<button
								className='submit'
								onClick={(e) => this.sendSuggestion(e)}
							>Edit Commesssnt</button>
						</form>
					</AnimateHeight>
				</div>
			</div>
		)
	}

	sendSuggestion(e) {
		e.preventDefault();
		console.log('sendSuggestion');
	}

}
