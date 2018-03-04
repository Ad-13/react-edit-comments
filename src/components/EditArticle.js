import React, { Component } from 'react'
import UserText from './UserText'

export default class EditArticle extends Component {

	render() {
		const article = this.props.article || {}
		const usersTexts = article.usersText || []
		const usersTextTemplate = usersTexts.map((userText, index) => {
			return <UserText
				key={index}
				userText={userText}
			/>
		})

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
					<p className='article__text article__text--original'>{article.originalText}</p>
					<div className='users-suggestions'>
						<p className='article__text article__text--title'>
							<span className='txt'>Users suggestions:</span>
							<button
								className='btn btn--decline'
								onClick={(e) => this.sendSuggestion(e)}
							>Delete All</button>
						</p>
						{usersTextTemplate}
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
