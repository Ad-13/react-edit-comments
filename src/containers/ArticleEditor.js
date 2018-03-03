import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditArticle from '../components/EditArticle'
import { bindActionCreators } from 'redux'
import * as ArticleListActions from '../actions/ArticleListActions'

class ArticleEditor extends Component {
	render() {
		const articles = this.props.articleList.articles
		const articlesTemplate = articles.map(article => {
			return <EditArticle key={article.id} article={article} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);