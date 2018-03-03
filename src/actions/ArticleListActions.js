import {
	TOGGLE_FORM
} from '../constants/ArticleList'

export function toggleForm(articles, id) {

	var newArticles = articles.map((article)=>{
		if (article.id == id) {
			article.isFormOpened = !article.isFormOpened;
		}

		return article;
	});

	return {
		type: TOGGLE_FORM,
		payload: newArticles
	}

}