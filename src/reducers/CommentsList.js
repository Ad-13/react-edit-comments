import {
	EDIT_REQUEST,
	EDIT_REQUEST_SUCCESS,
	EDIT_REQUEST_FAIL
} from '../constants/CommentsList'

const initialState = {
	comments: [
		{
			id: 1,
			text: 'Some text 1'
		},
		{
			id: 2,
			text: 'Some text 2'
		},
		{
			id: 3,
			text: 'Some text 3'
		}
	],
	requestStatus: ''
}

export default function CommentsList(state = initialState, action) {
	switch (action.type) {
	case EDIT_REQUEST:
		return { ...state, requestStatus: 'sending' }

	case EDIT_REQUEST_SUCCESS:
		return { ...state, requestStatus: 'success' }

	case EDIT_REQUEST_FAIL:
		return { ...state, requestStatus: 'fail' }

	default:
		return state;
	}
}
