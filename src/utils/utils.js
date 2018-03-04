/* eslint-disable */
export function httpRequest(method, url) {

	return new Promise(function (resolve, reject) {

		var xhr = new XMLHttpRequest();
		xhr.open(method, url, true);

		xhr.onload = function () {
			if (this.status == 200) {
				resolve(this.response);
			} else {
				var error = new Error(this.statusText);
				error.code = this.status;
				reject(error);
			}
		};

		xhr.onerror = function () {
			reject(new Error('Network Error'));
		};

		xhr.send();
	});
}

export function setRequestStatus(articles, modifiedArticle, requestStatus) {
	let modifiedState = articles.map((article) => {
		if (article.id == modifiedArticle.id) {
			article.requestStatus = requestStatus;
		}

		return article;
	})
	return modifiedState;
}

export function getArticlesToEdit(articles, modifiedArticle) {
	let newArticles = articles.slice();

	for (let i = newArticles.length - 1; i >= 0; i--) {
		const article = newArticles[i];
		if (article.id === modifiedArticle.id) {
			if (article.requestStatus) {
				article.usersText = modifiedArticle.usersText;
				article.requestStatus = '';
				article.deleted = false;
				return newArticles;
			} else {
				article.usersText = article.usersText.concat(modifiedArticle.usersText);
				article.deleted = false;
				return newArticles;
			}
		}
	}

	newArticles.push(modifiedArticle);
	return newArticles;
}

export function deleteTextArray(articles, modifiedArticle) {
	let newArticles = articles.slice();

	for (let i = newArticles.length - 1; i >= 0; i--) {
		const article = newArticles[i];
		if (article.id === modifiedArticle.id) {
			article.usersText.length = 0;
			article.requestStatus = 'success';
			article.deleted = true;
		}
	}

	return newArticles;
}

export function setModifiedArticle(articles, modifiedArticle) {
	let newArticles = articles.slice();
	
	for (let i = newArticles.length - 1; i >= 0; i--) {
		let article = newArticles[i];
		if (article.id === modifiedArticle.id) {
			article.originalText = modifiedArticle.originalText;
			article.requestStatus = '';
			article.isFormOpened = false;
		}
	}

	return newArticles;
}

/* eslint-enable */