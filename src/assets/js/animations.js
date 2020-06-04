import 'Styles/main.scss';
import 'bootstrap';
import 'popper.js';

import anime from 'animejs';
import buildNavBar from 'Modules/navbar';

window.addEventListener('DOMContentLoaded', () => {
	buildNavBar();
	const startAnimationButton = document.getElementById('start-animation');
	startAnimationButton.addEventListener('click', () => {
		anime
			.timeline()
			.add({
				targets: '#animation-div',
				rotateY: 180,
				rotateX: 360,
				duration: 2000,
				easing: 'easeInSine',
			})
			.add(
				{
					targets: '#start-animation',
					scale: 0,
					easing: 'easeInSine',
					duration: 1300,
					complete() {
						startAnimationButton.classList.add('d-none');
						const mainImageDiv = document.getElementById('main-image-div');
						mainImageDiv.classList.remove('d-none');
						const svgPath = document.querySelectorAll('.path');

						anime
							.timeline()
							.add({
								targets: '#main-image-div',
								rotateY: 180,
								duration: 0,
							})
							.add(
								{
									targets: '#suthub-logo',
									opacity: [0, 1],
									duration: 4500,
									scale: [0, 1],
									rotateZ: 720,
									easing: 'easeInSine',
								},
								'-=1000'
							)
							.add(
								{
									targets: svgPath,
									strokeDashoffset: [anime.setDashoffset, 0],
									easing: 'easeInOutSine',
									duration: 1500,
									delay: (el, i) => i * 250,
								},
								'-=2500'
							)
							.add({
								targets: svgPath,
								duration: 2000,
								fill: '#000000',
								delay: (el, i) => i * 200,
							});
					},
				},
				'-=2000'
			);
	});
});
