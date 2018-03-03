import React, { Component } from 'react'
import { connect } from 'react-redux'
import Article from '../components/Article'
import { bindActionCreators } from 'redux'
import * as ArticleListActions from '../actions/ArticleListActions'

class ArticleList extends Component {
	render() {
		const articles = this.props.articleList.articles
		const error = this.props.articleList.error
		const fetching = this.props.articleList.fetching
		const { toggleForm, editRequest } = this.props.ArticleListActions
		const articlesTemplate = articles.map(article => {
			return <Article 
				key={article.id} 
				articles={articles} 
				article={article} 
				toggleForm={toggleForm} 
				editRequest={editRequest} 
			/>
		})
		return (
			<div className='articles-list'>
				{articles.length ? articlesTemplate : <p className='no-items'> There are no suggestions to actriles' paragraphs</p>}
				{error ? <p className='error'> {error}. <br /> Попробуйте еще раз.</p> : null}
				{fetching ? (
					<div className='loader'>
						<span className='inner1'></span>
						<span className='inner2'></span>
						<span className='inner3'></span>
					</div>
				) : null}
				
			</div>
		)
	}

	componentDidMount() {
		console.log('componentDidMount');
		this.props.ArticleListActions.getArticles('http://www.omdbapi.com/?apikey=b080b47c&plot=full&s=Star%20Wars&page=1');
	}
}

function mapStateToProps(state) {
	return {
		articleList: state.ArticleList
	}
}

function mapDispatchToProps(dispatch) {
	return {
		ArticleListActions: bindActionCreators(ArticleListActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);