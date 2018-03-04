import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditArticle from '../components/EditArticle'
import { bindActionCreators } from 'redux'
import * as ArticleListActions from '../actions/ArticleListActions'

class ArticleEditor extends Component {
	render() {
		const articles = this.props.editArticle.articlesToEdit
		const articlesTemplate = articles.map(article => {
			return <EditArticle key={article.id} article={article} />
		})
		return (
			<div className='articles-list'>
				{articles.length ? articlesTemplate : <p className='no-items'> There are no suggestions from users</p>}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		articleList: state.ArticleList,
		editArticle: state.EditArticle
	}
}

function mapDispatchToProps(dispatch) {
	return {
		ArticleListActions: bindActionCreators(ArticleListActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);