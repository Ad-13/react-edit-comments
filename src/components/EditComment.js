import React, { Component } from 'react'

export default class Comment extends Component {

	render() {
		const comment = this.props.comment || {}

		return (
			<div key={comment.id} className='comment comment--edit'>
				<div className='comment__header'>
					<p className='comment__num'>№ {comment.id}</p>
					<p className='comment__author'>Автор: <span className='name'>Ad</span></p>
				</div>
				<div className='comment__content'>
					<p className='comment__text comment__text--title'>
						<span className='txt'>Original Text:</span>
					</p>
					<p className='comment__text comment__text--original'>{comment.text}</p>
					<div className='users-suggestions'>
						<p className='comment__text comment__text--title'>
							<span className='txt'>Users suggestions:</span>
							<button
								className='btn btn--decline'
								onClick={(e) => this.sendSuggestion(e)}
							>Delete All</button>
						</p>
						<p className='comment__text'>Some suggestion text 1</p>
						<button
							className='btn btn--approve'
							onClick={(e) => this.sendSuggestion(e)}
						>Approve</button>
						<p className='comment__text'>Some suggestion text 2</p>
						<button
							className='btn btn--approve'
							onClick={(e) => this.sendSuggestion(e)}
						>Approve</button>
						<p className='comment__text'>Some suggestion text 3</p>
						<button
							className='btn btn--approve'
							onClick={(e) => this.sendSuggestion(e)}
						>Approve</button>
						<form className='comment__form'>
							<p className='comment__text comment__text--title'>
								<span className='txt'>Your suggestions:</span>
							</p>
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
					</div>
				</div>
			</div>
		)
	}

}
