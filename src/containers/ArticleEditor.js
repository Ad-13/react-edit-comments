import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditArticle from '../components/EditArticle'
import { bindActionCreators } from 'redux'
import * as ArticleListActions from '../actions/ArticleListActions'
import * as ArticleEditorActions from '../actions/ArticleEditorActions'

class ArticleEditor extends Component {
	render() {
		const articles = this.props.editArticle.articlesToEdit
		const approveRequest = this.props.ArticleEditorActions.approveRequest
		const deleteRequest = this.props.ArticleEditorActions.deleteRequest
		const articlesTemplate = articles.map(article => {
			return <EditArticle 
				key={article.id} 
				article={article} 
				approveRequest={approveRequest} 
				deleteRequest={deleteRequest} 
			/>
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
		ArticleListActions: bindActionCreators(ArticleListActions, dispatch),
		ArticleEditorActions: bindActionCreators(ArticleEditorActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);