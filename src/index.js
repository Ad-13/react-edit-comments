import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import ArticleList from './containers/ArticleList'
import ArticleEditor from './containers/ArticleEditor';
import './styles/app.scss' 
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

const store = configureStore()

render(
	<Provider store={store}>
		<Router>
			<div className='articles-app'>
				<div className='articles-app__header'>
					<div className='container'>
						<h2 className='articles-app__title'>Choose article & Edit !</h2>
						<nav className='articles-app__nav'>
							<Link to='/articles' className='btn articles-app__nav__link'>articles List</Link>
							<Link to='/edit-article' className='btn articles-app__nav__link'>Editor Page</Link>
						</nav>
					</div>
				</div>

				<div className='articles-app-content'>
					<div className='container'>
						<Route path='/articles' component={ArticleList} />
						<Route exact path='/edit-article' component={ArticleEditor} />
					</div>
				</div>
			</div>
		</Router>
	</Provider>,
	document.getElementById('injected-articles-app')
);
