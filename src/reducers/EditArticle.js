import {
	EDIT_REQUEST_SUCCESS,
	EDIT_REQUEST_FAIL
} from '../constants/ArticleList'

const initialState = {
	articlesToEdit: [
		{
			id: 1,
			name: 'SpaceX',
			originalText: 'Some text 1',
			suggestionText: 'Suggestion To Text 1'
		}
	]
}

export default function EditArticle(state = initialState, action) {
	switch (action.type) {
	case EDIT_REQUEST_SUCCESS:
		return { ...state, year: action.payload, fetching: true }

	case EDIT_REQUEST_FAIL:
		return { ...state, photos: action.payload, fetching: false }

	default:
		return state;
	}
}