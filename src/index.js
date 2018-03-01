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
			<div className='comments-app'>
				<div className='comments-app__header'>
					<div className='container'>
						<h2 className='comments-app__title'>Choose comment & Edit !</h2>
						<nav className='comments-app__nav'>
							<Link to='/comments' className='btn comments-app__nav__link'>Comments List</Link>
							<Link to='/edit-comment' className='btn comments-app__nav__link'>Editor Page</Link>
						</nav>
					</div>
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
	document.getElementById('injected-comments-app')
);
