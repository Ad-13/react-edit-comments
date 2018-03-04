import React, { Component } from 'react'
import AnimateHeight from 'react-animate-height';
import Loader from './Loader'

export default class Article extends Component {
	
	render() {
		const articles = this.props.articles || []
		const article = this.props.article || {}
		const formHeight = article.isFormOpened ? 'auto' : 0
		const toggleForm = function () {
			this.props.toggleForm(articles, article.id);
		}

		return (
			<div key={article.id} className={'article' + (article.requestStatus ? ' ' + article.requestStatus : '')}>
				<div className='article__header'>
					<p className='article__name'>Article name: <span className='name'>{article.name}</span></p>
					<p className='article__num'>№ {article.id}</p>
				</div>
				<div className='article__content'>
					<button
						className={'toggle-form' + (article.isFormOpened ? ' active' : '')}
						onClick={toggleForm.bind(this)}
					>
						<span className='img'></span>
					</button>
					<p className='article__text'>{article.text}</p>
					<AnimateHeight
						duration={500}
						height={formHeight}
					>
						<form className='article__form'>
							<div className='form-input'>
								<textarea
									className='edit-article'
									defaultValue=''
									placeholder='Your version'
									ref='suggestionText'
									onFocus={this.hideTooltip.bind(this)}
								></textarea>
								<span className='tooltip'>Yo! You cannot send empty message!</span>
							</div>
							<button
								className='submit'
								onClick={(e) => this.sendSuggestion(e)}
								disabled={article.requestStatus == 'pending' ? true : false }
							>Edit paragraph</button>
							<Loader />
						</form>
					</AnimateHeight>
					<p className='message message--fail'>
						<span className='img'></span>
						<span className='txt'>Sorry, your request fail. Please try again.</span>
					</p>
				</div>
				<p className='message message--success'>
					<span className='img'></span>
					<span className='txt'>Thank you! Your suggestion is under consideration...</span>
				</p>
			</div>
		)
	}

	hideTooltip() {
		this.refs.suggestionText.parentElement.classList.remove('error');
	}

	sendSuggestion(e) {
		e.preventDefault();
		let modifiedArticle;
		const suggestion = this.refs.suggestionText;
		const usersText = suggestion.value;
		const article = this.props.article;
		const articles = this.props.articles;

		if (!usersText) {
			suggestion.parentElement.classList.add('error');
			return;
		} else {
			modifiedArticle = {
				id: article.id,
				articleUrl: article.articleUrl,
				name: article.name,
				originalText: article.text,
				usersText: [usersText]
			}
		}

		this.props.editRequest(articles, modifiedArticle);
	}

}
