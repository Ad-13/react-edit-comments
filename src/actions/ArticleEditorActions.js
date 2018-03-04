/* eslint-disable */
import {
	SET_ARTICLE_TO_EDIT,
	APPROVE_REQUEST,
	APPROVE_REQUEST_ACCEPTED,
	APPROVE_REQUEST_FAIL,
	DELETE_REQUEST,
	DELETE_REQUEST_ACCEPTED,
	DELETE_REQUEST_FAIL
} from '../constants/EditArticle'

import {
	SET_ARTICLE_TO_LIST,
	CANCEL_REQUEST
} from '../constants/ArticleList'

import {
	httpRequest
} from '../utils/utils'

export function deleteRequest(modifiedArticle) {

	return (dispatch) => {

		dispatch({
			type: DELETE_REQUEST,
			payload: modifiedArticle
		})

		httpRequest('POST', 'http://www.omdbapi.com/?apikey=b080b47c&plot=full&s=Star%20Wars&page=1')
			.then(
				response => {
					dispatch({
						type: DELETE_REQUEST_ACCEPTED,
						payload: modifiedArticle
					})
					dispatch({
						type: CANCEL_REQUEST,
						payload: modifiedArticle
					})
				},
				error => {
					dispatch({
						type: DELETE_REQUEST_FAIL,
						payload: modifiedArticle
					})
				}
			)
	}
}

export function approveRequest(modifiedArticle) {

	return (dispatch) => {

		dispatch({
			type: APPROVE_REQUEST,
			payload: modifiedArticle
		})

		httpRequest('POST', 'http://www.omdbapi.com/?apikey=b080b47c&plot=full&s=Star%20Wars&page=1')
			.then(
				response => {
					dispatch({
						type: APPROVE_REQUEST_ACCEPTED,
						payload: modifiedArticle
					})
					dispatch({
						type: SET_ARTICLE_TO_LIST,
						payload: modifiedArticle
					})
				},
				error => {
					dispatch({
						type: APPROVE_REQUEST_FAIL,
						payload: modifiedArticle
					})
				}
			)
	}
}
/* eslint-enable */