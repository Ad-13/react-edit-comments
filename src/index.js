import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Comments from './containers/Comments'
import CommentEditor from './containers/CommentEditor';
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
			<div id='comments-app' className='comments-app'>
				<div className='container'>
					<nav className='comments-app__nav'>
						<div className='comments-app__nav__item'>
							<Link to='/comments' className='link'>Comments List</Link>
						</div>
						<div className='comments-app__nav__item'>
							<Link to='/edit-comment' className='link'>Editor Page</Link>
						</div>
					</nav>
				</div>

				<div className='comments-app-content'>
					<div className='container'>
						<Route path='/comments' component={Comments} />
						<Route exact path='/edit-comment' component={CommentEditor} />
					</div>
				</div>
			</div>
		</Router>
	</Provider>,
	document.getElementById('react-comments-app')
);
