import {
	TOGGLE_FORM
} from '../constants/CommentsList'

export function toggleForm(comments, id) {

	var newComments = comments.map((comment)=>{
		if (comment.id == id) {
			comment.isFormOpened = !comment.isFormOpened;
		}

		return comment;
	});

	return {
		type: TOGGLE_FORM,
		payload: newComments
	}

}