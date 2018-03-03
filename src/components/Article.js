import React, { Component } from 'react'
import AnimateHeight from 'react-animate-height';

export default class Article extends Component {
	
	render() {
		const articles = this.props.articles || []
		const article = this.props.article || {}
		const formHeight = article.isFormOpened ? 'auto' : 0
		const toggleForm = function () {
			this.props.toggleForm(articles, article.id);
		}

		return (
			<div key={article.id} className='article'>
				<div className='article__header'>
					<p className='article__name'>Article name: <span className='name'>{article.name}</span></p>
					<p className='article__num'>№ {article.id}</p>
				</div>
				<div className='article__content'>
					<button
						className={article.isFormOpened ? 'toggle-form active' : 'toggle-form'}
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
