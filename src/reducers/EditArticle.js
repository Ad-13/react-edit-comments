import {
	SET_ARTICLE_TO_EDIT
} from '../constants/EditArticle'

const initialState = {
	articlesToEdit: [
		{
			id: 1,
			articleUrl: 'https://dagbladet.no/url-1',
			name: 'SpaceX',
			originalText: 'Some text 1',
			usersText: [
				'Suggestion To Text 1',
				'Suggestion To Text 2'
			]
		}
	]
	// articlesToEdit: []
}

export default function EditArticle(state = initialState, action) {
	switch (action.type) {
	case SET_ARTICLE_TO_EDIT:
		return { ...state, articlesToEdit: getNewArticles(state.articlesToEdit, action.payload) }

	default:
		return state;
	}
}

function getNewArticles(articles, modifiedArticle) {
	debugger;
	let newArticles = articles.slice();
	if (newArticles.some(hasArticle.bind(null, modifiedArticle))) {
		for (let i = newArticles.length - 1; i >= 0; i--) {
			const article = newArticles[i];
			if (article.id === modifiedArticle.id) {
				article.usersText = article.usersText.concat(modifiedArticle.usersText);
			}
		}
	} else {
		newArticles.push(modifiedArticle);
	}

	return newArticles;
}

function hasArticle(article1, article2) {
	return article1.id == article2.id;
}