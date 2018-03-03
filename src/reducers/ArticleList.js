import {
	TOGGLE_FORM,
	EDIT_REQUEST,
	EDIT_REQUEST_SUCCESS,
	EDIT_REQUEST_FAIL
} from '../constants/ArticleList'

const initialState = {
	articles: [
		{
			id: 1,
			name: 'SpaceX',
			text: 'Some text 1',
			isFormOpened: false
		},
		{
			id: 2,
			name: 'SpaceX',
			text: 'Some text 2',
			isFormOpened: false
		},
		{
			id: 3,
			name: 'SpaceX',
			text: 'Some text 3',
			isFormOpened: false
		},
		{
			id: 4,
			name: 'SpaceX',
			text: 'Some text 4',
			isFormOpened: false
		},
		{
			id: 5,
			name: 'SpaceX',
			text: 'Some text 5',
			isFormOpened: false
		}
	],
	requestStatus: ''
}

export default function ArticleList(state = initialState, action) {
	switch (action.type) {
	case EDIT_REQUEST:
		return { ...state, requestStatus: 'sending' }

	case EDIT_REQUEST_SUCCESS:
		return { ...state, requestStatus: 'success' }

	case EDIT_REQUEST_FAIL:
		return { ...state, requestStatus: 'fail' }

	case TOGGLE_FORM:
		return { ...state, comments: action.payload }

	default:
		return state;
	}
}
