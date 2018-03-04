import React, { Component } from 'react'
import UserText from './UserText'
import Loader from './Loader'

export default class EditArticle extends Component {

	approveRequest = this.props.approveRequest

	render() {
		const article = this.props.article || {}
		const usersTexts = article.usersText || []
		const deleted = article.deleted
		const usersTextTemplate = usersTexts.map((userText, index) => {
			return <UserText
				key={index}
				userText={userText}
				article={article}
				approveRequest={this.approveRequest}
			/>
		})

		return (
			<div key={article.id} className={'article article--edit' + (article.requestStatus ? ' ' + article.requestStatus : '')}>
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
						<div className='article__text article__text--title'>
							<span className='txt'>Users suggestions:</span>
							<Loader />
							<button
								className='btn btn--decline'
								onClick={() => this.deleteRequest()}
								disabled={article.requestStatus == 'pending' ? true : false}
							>Delete All</button>
						</div>
						{usersTextTemplate}
						<form className='article__form'>
							<p className='article__text article__text--title'>
								<span className='txt'>Your suggestions:</span>
							</p>
							<div className='form-input'>
								<textarea
									className='edit-article'
									defaultValue=''
									placeholder='Your version'
									ref='edit_article'
									onFocus={this.hideTooltip.bind(this)}
								></textarea>
								<span className='tooltip'>Yo! Here is an empty message!</span>
							</div>
							<button
								className='submit'
								onClick={(e) => this.editParagraph(e)}
								disabled={article.requestStatus == 'pending' ? true : false}
							>Edit paragraph</button>
							<Loader />
						</form>
						<p className='message message--fail'>
							<span className='img'></span>
							<span className='txt'>Sorry, your request fail. Please try again.</span>
						</p>
					</div>
				</div>
				<p className='message message--success'>
					<span className='img'></span>
					{deleted ?
						<span className='txt'>You successfully delete suggestions!</span>
						:
						<span className='txt'>You successfully modified text!</span>
					}
				</p>
			</div>
		)
	}

	deleteRequest() {
		this.props.deleteRequest(this.props.article);
	}

	hideTooltip() {
		this.refs.edit_article.parentElement.classList.remove('error');
	}

	editParagraph(e) {
		e.preventDefault();
		const editInput = this.refs.edit_article;
		const newText = editInput.value;
		const currentArticle = this.props.article;
		let modifiedArticle

		if (!newText) {
			editInput.parentElement.classList.add('error');
			return;
		} else {
			modifiedArticle = {
				id: currentArticle.id,
				articleUrl: currentArticle.articleUrl,
				name: currentArticle.name,
				text: newText,
				isFormOpened: false,
				requestStatus: ''
			}
		}
		this.approveRequest(modifiedArticle);
	}

}
