/* eslint-disable */
import {
	TOGGLE_FORM,
	EDIT_REQUEST,
	EDIT_REQUEST_ACCEPTED,
	EDIT_REQUEST_FAIL,
	ARTICLES_REQUEST,
	ARTICLES_REQUEST_SUCCESS,
	ARTICLES_REQUEST_FAIL,
	HANDLE_EMPTY_LIST
} from '../constants/ArticleList'

import {
	SET_ARTICLE_TO_EDIT
} from '../constants/EditArticle'

import {
	MOCK_URL,
	MOCK_ARTICLES_REQ_DATA
} from '../constants/constants'

import {
	httpRequest
} from '../utils/utils'

export function toggleForm(articles, id) {

	let modifiedState = articles.map((article)=>{
		if (article.id == id) {
			article.isFormOpened = !article.isFormOpened;
		}

		return article;
	})

	return {
		type: TOGGLE_FORM,
		payload: modifiedState
	}
}

export function editRequest(articles, modifiedArticle) {

	return (dispatch) => {
	
		dispatch({
			type: EDIT_REQUEST,
			payload: modifiedArticle
		})

		httpRequest('POST', MOCK_URL)
			.then(
				response => {
					dispatch ({
						type: EDIT_REQUEST_ACCEPTED,
						payload: modifiedArticle
					})
					dispatch ({
						type: SET_ARTICLE_TO_EDIT,
						payload: modifiedArticle
					})
				},
				error => {
					dispatch ({
						type: EDIT_REQUEST_FAIL,
						payload: modifiedArticle
					})
				}
			)
	}
}

export function getArticles(url) {
	return (dispatch) => {

		dispatch({
			type: ARTICLES_REQUEST,
			payload: null
		})

		httpRequest('GET', url)
			.then(
				response => {
					if (MOCK_ARTICLES_REQ_DATA.articles.length) {
						dispatch({
							type: ARTICLES_REQUEST_SUCCESS,
							payload: MOCK_ARTICLES_REQ_DATA.articles
						})
					} else {
						dispatch({
							type: HANDLE_EMPTY_LIST,
							payload: MOCK_ARTICLES_REQ_DATA.articles
						})
					}
				},
				error => {
					dispatch({
						type: ARTICLES_REQUEST_FAIL,
						error: true,
						payload: new Error('Network error')
					})
				}
			)
	}
}

/* eslint-enable */