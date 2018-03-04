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
	getNewArticles,
	setRequestStatus,
	deleteTextArray
} from '../utils/utils'

const initialState = {
	articlesToEdit: [
		{
			id: 1,
			articleUrl: 'https://dagbladet.no/url-1',
			name: 'SpaceX',
			text: 'Some text 1',
			usersText: [
				'Suggestion To Text 1',
				'Suggestion To Text 2'
			],
			requestStatus: '',
			deleted: false
		}
	]
	// articlesToEdit: []
}

export default function EditArticle(state = initialState, action) {
	switch (action.type) {
	case SET_ARTICLE_TO_EDIT:
		return { ...state, articlesToEdit: getNewArticles(state.articlesToEdit, action.payload) }

	case APPROVE_REQUEST_ACCEPTED:
		return { ...state, articlesToEdit: setRequestStatus(state.articlesToEdit, action.payload, 'success') }

	case APPROVE_REQUEST_FAIL:
		return { ...state, articlesToEdit: setRequestStatus(state.articlesToEdit, action.payload, 'fail') }

	case APPROVE_REQUEST:
		return { ...state, articlesToEdit: setRequestStatus(state.articlesToEdit, action.payload, 'pending') }

	case DELETE_REQUEST:
		return { ...state, articlesToEdit: setRequestStatus(state.articlesToEdit, action.payload, 'pending') }

	case DELETE_REQUEST_ACCEPTED:
		return { ...state, articlesToEdit: deleteTextArray(state.articlesToEdit, action.payload) }

	case DELETE_REQUEST_FAIL:
		return { ...state, articlesToEdit: setRequestStatus(state.articlesToEdit, action.payload, 'fail') }

	default:
		return state;
	}
}
