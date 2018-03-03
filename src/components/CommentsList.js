import React, { Component } from 'react'

export default class CommentsList extends Component {
	
	render() {
		const commentsArr = this.props.commentsArr || []
		const toggleForm = function () {
			this.props.toggleForm();
			this.animateHeight();
		}
		const commentsTemplate = commentsArr.map(function (item) {
			return (
				<div key={item.id} className='comment'>
					<div className='comment__header'>
						<p className='comment__num'>№ {item.id}</p>
						<p className='comment__author'>Автор: <span className='name'>Ad</span></p>
					</div>
					<div className='comment__content'>
						<button
							className={item.isFormOpened ? 'toggle-form active' : 'toggle-form'}
							onClick={() => toggleForm(commentsArr, item.id)}
						>
							<span className='img'></span>
						</button>
						<p className='comment__text'>{item.text}</p>
						<form  className='comment__form'>
							<textarea
								className='edit-comment'
								defaultValue=''
								placeholder='Your version'
							></textarea>
							<button
								className='submit'
							>Edit Commesssnt</button>
						</form>
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

	animateHeight() {
		console.log('height');
	}

	animate(options) {

		var start = performance.now();

		requestAnimationFrame(function animate(time) {
			// timeFraction от 0 до 1
			var timeFraction = (time - start) / options.duration;
			if (timeFraction > 1) timeFraction = 1;

			// текущее состояние анимации
			var progress = options.timing(timeFraction)

			options.draw(progress);

			if (timeFraction < 1) {
				requestAnimationFrame(animate);
			}

		});
	}

}
