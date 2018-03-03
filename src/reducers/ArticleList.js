import {
	TOGGLE_FORM,
	EDIT_REQUEST,
	EDIT_REQUEST_SUCCESS,
	EDIT_REQUEST_FAIL,
	ARTICLES_REQUEST,
	ARTICLES_REQUEST_SUCCESS,
	ARTICLES_REQUEST_FAIL
} from '../constants/ArticleList'

const initialState = {
	articles: [],
	fetching: false,
	error: ''
}

export default function ArticleList(state = initialState, action) {
	switch (action.type) {
	case ARTICLES_REQUEST:
		return { ...state, fetching: true }

	case ARTICLES_REQUEST_SUCCESS:
		return { ...state, articles: action.payload, fetching: false, error: '' }

	case ARTICLES_REQUEST_FAIL:
		return { ...state, error: action.payload.message, fetching: false }

	case EDIT_REQUEST:
		return { ...state, articles: action.payload }

	case EDIT_REQUEST_SUCCESS:
		return { ...state, articles: action.payload }

	case EDIT_REQUEST_FAIL:
		return { ...state, articles: action.payload }

	case TOGGLE_FORM:
		return { ...state, articles: action.payload }

	default:
		return state;
	}
}