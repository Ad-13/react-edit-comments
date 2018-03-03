import React, { Component } from 'react'

export default class EditArticle extends Component {

	render() {
		const article = this.props.article || {}

		return (
			<div key={article.id} className='article article--edit'>
				<div className='article__header'>
					<p className='article__name'>Article name: <span className='name'>{article.name}</span></p>
					<p className='article__num'>№ {article.id}</p>
				</div>
				<div className='article__content'>
					<p className='article__text article__text--title'>
						<span className='txt'>Original Text:</span>
					</p>
					<p className='article__text article__text--original'>{article.text}</p>
					<div className='users-suggestions'>
						<p className='article__text article__text--title'>
							<span className='txt'>Users suggestions:</span>
							<button
								className='btn btn--decline'
								onClick={(e) => this.sendSuggestion(e)}
							>Delete All</button>
						</p>
						<p className='article__text'>Some suggestion text 1</p>
						<button
							className='btn btn--approve'
							onClick={(e) => this.sendSuggestion(e)}
						>Approve</button>
						<p className='article__text'>Some suggestion text 2</p>
						<button
							className='btn btn--approve'
							onClick={(e) => this.sendSuggestion(e)}
						>Approve</button>
						<p className='article__text'>Some suggestion text 3</p>
						<button
							className='btn btn--approve'
							onClick={(e) => this.sendSuggestion(e)}
						>Approve</button>
						<form className='article__form'>
							<p className='article__text article__text--title'>
								<span className='txt'>Your suggestions:</span>
							</p>
							<textarea
								className='edit-article'
								defaultValue=''
								placeholder='Your version'
							></textarea>
							<button
								className='submit'
								onClick={(e) => this.sendSuggestion(e)}
							>Edit paragraph</button>
						</form>
					</div>
				</div>
			</div>
		)
	}

}
