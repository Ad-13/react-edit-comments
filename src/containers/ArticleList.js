import React, { Component } from 'react'
import { connect } from 'react-redux'
import Article from '../components/Article'
import { bindActionCreators } from 'redux'
import * as ArticleListActions from '../actions/ArticleListActions'

class ArticleList extends Component {
	render() {
		const articles = this.props.articleList.articles
		const { toggleForm } = this.props.ArticleListActions
		const articlesTemplate = articles.map(article => {
			return <Article key={article.id} articles={articles} article={article} toggleForm={toggleForm} />
		})
		return (
			<div className='articles-list'>
				{articlesTemplate}
			</div>
		)
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