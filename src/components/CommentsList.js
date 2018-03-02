import React, { Component } from 'react'

export default class CommentsList extends Component {

	render() {
		const commentsArr = this.props.commentsArr || []
		const commentsTemplate = commentsArr.map(function (item) {
			return (
				<div key={item.id} className='comment'>
					<div className='comment__header'>
						<p className='comment__num'>№ {item.id}</p>
						<p className='comment__author'>Автор: <span className='name'>Ad</span></p>
					</div>
					<div className='comment__content'>
						<p className='comment__text'>{item.text}</p>
					</div>
				</div>
			)
		})
		return (
			<div className='comments-list'>
				{commentsTemplate}
			</div>
		)
	}

}
