import React, { Component } from 'react'
import '../styles/loader.scss';

export default class Loader extends Component {
	render() {
		return (
			<div className='loader'>
				<span className='inner1'></span>
				<span className='inner2'></span>
				<span className='inner3'></span>
			</div>
		)
	}

}
