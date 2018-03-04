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
	httpRequest
} from '../utils/utils'

const mockArticlesReqData = {
	articles: [
		{
			id: 1,
			articleUrl: 'https://dagbladet.no/url-1',
			name: 'SpaceX',
			text: 'Some text 1',
			isFormOpened: false,
			requestStatus: ''
		},
		{
			id: 2,
			articleUrl: 'https://dagbladet.no/url-2',
			name: 'SpaceX',
			text: 'Some text 2',
			isFormOpened: false,
			requestStatus: ''
		},
		{
			id: 3,
			articleUrl: 'https://dagbladet.no/url-3',
			name: 'SpaceX',
			text: 'Some text 3',
			isFormOpened: false,
			requestStatus: ''
		},
		{
			id: 4,
			articleUrl: 'https://dagbladet.no/url-4',
			name: 'SpaceX',
			text: 'Some text 4',
			isFormOpened: false,
			requestStatus: ''
		},
		{
			id: 5,
			articleUrl: 'https://dagbladet.no/url-5',
			name: 'SpaceX',
			text: 'Some text 5',
			isFormOpened: false,
			requestStatus: ''
		}
	]
}

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
		let modifiedState = articles.map((article) => {
			if (article.id == modifiedArticle.id) {
				article.requestStatus = 'pending';
			}

			return article;
		})
	
		dispatch({
			type: EDIT_REQUEST,
			payload: modifiedState
		})

		httpRequest('POST', 'http://www.omdbapi.com/?apikey=b080b47c&plot=full&s=Star%20Wars&page=1')
			.then(
				response => {
					let modifiedState = articles.map((article) => {
						if (article.id == modifiedArticle.id) {
							article.requestStatus = 'success';
						}

						return article;
					})
					dispatch ({
						type: EDIT_REQUEST_ACCEPTED,
						payload: modifiedState
					})
					dispatch ({
						type: SET_ARTICLE_TO_EDIT,
						payload: modifiedArticle
					})
				},
				error => {
					let modifiedState = articles.map((article) => {
						if (article.id == modifiedArticle.id) {
							article.requestStatus = 'fail';
						}

						return article;
					})
					dispatch ({
						type: EDIT_REQUEST_FAIL,
						payload: modifiedState
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
					if (mockArticlesReqData.articles.length) {
						dispatch({
							type: ARTICLES_REQUEST_SUCCESS,
							payload: mockArticlesReqData.articles
						})
					} else {
						dispatch({
							type: HANDLE_EMPTY_LIST,
							payload: mockArticlesReqData.articles
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