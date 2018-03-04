import React, { Component } from 'react'
import { connect } from 'react-redux'
import Article from '../components/Article'
import Loader from '../components/Loader'
import { bindActionCreators } from 'redux'
import * as ArticleListActions from '../actions/ArticleListActions'
import {
	MOCK_URL
} from '../constants/constants'

class ArticleList extends Component {
	render() {
		const articles = this.props.articleList.articles
		const error = this.props.articleList.error
		const emptyList = this.props.articleList.emptyList
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
				{emptyList ? <p className='no-items'> There are no suggestions to actriles' paragraphs</p> : articlesTemplate}
				{error ? <p className='error'> {error}. <br /> Попробуйте еще раз.</p> : null}
				{fetching ? (
					<Loader/>
				) : null}
				
			</div>
		)
	}

	componentDidMount() {
		this.props.ArticleListActions.getArticles(MOCK_URL);
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