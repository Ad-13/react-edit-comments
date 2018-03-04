import {
	SET_ARTICLE_TO_LIST,
	TOGGLE_FORM,
	EDIT_REQUEST,
	EDIT_REQUEST_ACCEPTED,
	EDIT_REQUEST_FAIL,
	ARTICLES_REQUEST,
	ARTICLES_REQUEST_SUCCESS,
	ARTICLES_REQUEST_FAIL,
	HANDLE_EMPTY_LIST,
	CANCEL_REQUEST
} from '../constants/ArticleList'

import {
	setModifiedArticle,
	setRequestStatus
} from '../utils/utils'

const initialState = {
	articles: [],
	fetching: false,
	error: '',
	emptyList: false
}

export default function ArticleList(state = initialState, action) {
	switch (action.type) {
	case TOGGLE_FORM:
		return { ...state, articles: action.payload }
		
	case HANDLE_EMPTY_LIST:
		return { ...state, articles: action.payload, fetching: false, error: '', emptyList: true }

	case ARTICLES_REQUEST:
		return { ...state, fetching: true }

	case ARTICLES_REQUEST_SUCCESS:
		return { ...state, articles: action.payload, fetching: false, error: '' }

	case ARTICLES_REQUEST_FAIL:
		return { ...state, error: action.payload.message, fetching: false }

	case EDIT_REQUEST:
		return { ...state, articles: setRequestStatus(state.articles, action.payload, 'pending') }

	case EDIT_REQUEST_ACCEPTED:
		return { ...state, articles: setRequestStatus(state.articles, action.payload, 'success') }

	case EDIT_REQUEST_FAIL:
		return { ...state, articles: setRequestStatus(state.articles, action.payload, 'fail') }

	case SET_ARTICLE_TO_LIST:
		return { ...state, articles: setModifiedArticle(state.articles, action.payload) }

	case CANCEL_REQUEST:
		return { ...state, articles: setModifiedArticle(state.articles, action.payload) }

	default:
		return state;
	}
}
