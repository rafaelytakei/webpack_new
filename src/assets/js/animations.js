import 'Styles/main.scss'
import 'popper.js'
import 'bootstrap'

import $ from 'jquery'
import SutHubLogo from 'Images/suthub-logo.png'
import anime from 'animejs'
import buildNavBar from 'Modules/navbar'

window.onload = () => {
	buildNavBar()
	$('body').append(
		'<section id="content-section" class="container-fluid"></section>'
	)
	$('body').attr('id', 'animation-page')

	$('#content-section').append('<div id="animation-div"></div>')
	$('#animation-div').append(
		'<button id="start-animation" class="btn btn-info py-3 px-5">Click Me!</button>'
	)
	$('#start-animation').on('click', () => {
		const flipAnimation = anime
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
					complete () {
						$('#animation-div').empty()
						$('#animation-div').append('<div id="main-image-div"></div>')
						$('#main-image-div').append(
							`<img id="suthub-logo" src="${ SutHubLogo }"></img>`
						)
						$('#main-image-div').append(
							'<svg width="309.083" height="75.979" viewBox="0 0 309.083 75.979" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000" stroke-width="0.25mm" fill="none" style="stroke:#000;stroke-width:0.25mm;fill:none"><path class="path" d="M 53.076 24.658 L 40.771 24.658 A 14.268 14.268 0 0 0 40.321 20.97 A 10.139 10.139 0 0 0 37.28 15.942 A 11.348 11.348 0 0 0 32.96 13.556 Q 31.263 13.031 29.222 12.867 A 24.081 24.081 0 0 0 27.295 12.793 Q 23.094 12.793 20.198 14.039 A 10.558 10.558 0 0 0 17.896 15.381 A 8.394 8.394 0 0 0 14.597 21.548 A 11.93 11.93 0 0 0 14.551 22.607 Q 14.551 26.514 18.164 29.126 A 19.502 19.502 0 0 0 20.567 30.584 Q 23.281 31.999 27.414 33.369 A 89.005 89.005 0 0 0 30.078 34.204 Q 36.052 35.979 40.332 38.108 A 36.043 36.043 0 0 1 43.408 39.819 A 26.643 26.643 0 0 1 47.051 42.531 Q 49.061 44.331 50.371 46.372 A 16.094 16.094 0 0 1 50.781 47.046 A 17.482 17.482 0 0 1 52.89 53.27 A 22.753 22.753 0 0 1 53.125 56.592 Q 53.125 65.479 46.313 70.728 A 23.521 23.521 0 0 1 38.287 74.664 Q 34.966 75.607 31.018 75.873 A 47.545 47.545 0 0 1 27.832 75.977 A 36.422 36.422 0 0 1 18.243 74.746 A 32.391 32.391 0 0 1 13.647 73.12 A 26.829 26.829 0 0 1 7.898 69.72 A 21.709 21.709 0 0 1 3.589 65.234 Q 0 60.205 0 53.516 L 12.354 53.516 Q 12.354 59.57 16.357 62.891 A 13.09 13.09 0 0 0 20.785 65.246 Q 22.672 65.849 24.953 66.075 A 29.205 29.205 0 0 0 27.832 66.211 A 25.437 25.437 0 0 0 31.377 65.981 Q 33.188 65.725 34.652 65.186 A 10.122 10.122 0 0 0 37.524 63.599 A 8.324 8.324 0 0 0 40.738 57.545 A 10.734 10.734 0 0 0 40.771 56.689 Q 40.771 52.002 37.476 49.463 A 16.261 16.261 0 0 0 35.24 48.051 Q 31.796 46.206 25.586 44.336 A 84.705 84.705 0 0 1 20.093 42.488 Q 17.443 41.486 15.245 40.41 A 36.996 36.996 0 0 1 11.914 38.574 A 24.893 24.893 0 0 1 6.79 34.397 A 16.78 16.78 0 0 1 2.197 22.656 A 17.064 17.064 0 0 1 7.755 9.75 A 22.331 22.331 0 0 1 9.204 8.496 Q 16.036 3.068 26.838 2.933 A 44.3 44.3 0 0 1 27.393 2.93 A 34.414 34.414 0 0 1 34.721 3.679 A 27.592 27.592 0 0 1 40.625 5.664 A 22.396 22.396 0 0 1 47.437 10.52 A 21.131 21.131 0 0 1 49.756 13.452 Q 53.076 18.506 53.076 24.658 Z" id="0" vector-effect="non-scaling-stroke"/><path class="path" d="M 95.117 75 L 94.824 69.824 A 16.997 16.997 0 0 1 84.648 75.568 A 25.396 25.396 0 0 1 79.98 75.977 Q 73.202 75.977 69.02 72.847 A 13.474 13.474 0 0 1 66.968 70.947 A 16.23 16.23 0 0 1 63.76 65.133 Q 62.974 62.7 62.698 59.749 A 36.027 36.027 0 0 1 62.549 56.396 L 62.549 22.168 L 74.414 22.168 L 74.414 56.25 A 17.703 17.703 0 0 0 74.772 59.984 Q 75.95 65.419 81.004 66.183 A 11.766 11.766 0 0 0 82.764 66.309 Q 91.406 66.309 94.434 60.107 L 94.434 22.168 L 106.299 22.168 L 106.299 75 L 95.117 75 Z" id="1" vector-effect="non-scaling-stroke"/><path class="path" d="M 121.387 9.326 L 133.252 9.326 L 133.252 22.168 L 142.578 22.168 L 142.578 30.957 L 133.252 30.957 L 133.252 60.449 Q 133.252 63.477 134.448 64.819 A 3.36 3.36 0 0 0 135.67 65.663 Q 136.846 66.162 138.721 66.162 A 18.278 18.278 0 0 0 142.871 65.674 L 142.871 74.854 A 31.041 31.041 0 0 1 137.738 75.838 A 26.344 26.344 0 0 1 135.059 75.977 Q 121.387 75.977 121.387 60.889 L 121.387 30.957 L 112.695 30.957 L 112.695 22.168 L 121.387 22.168 L 121.387 9.326 Z" id="2" vector-effect="non-scaling-stroke"/><path class="path" d="M 163.33 0 L 163.33 27.93 Q 169.141 21.191 178.027 21.191 A 21.091 21.091 0 0 1 185.209 22.314 Q 194.981 25.844 195.166 40.479 L 195.166 75 L 183.301 75 L 183.301 40.918 A 19.924 19.924 0 0 0 183.134 38.238 Q 182.716 35.173 181.256 33.516 A 5.56 5.56 0 0 0 180.933 33.179 A 7.523 7.523 0 0 0 178.009 31.476 Q 176.84 31.094 175.421 30.969 A 16.479 16.479 0 0 0 173.975 30.908 A 12.537 12.537 0 0 0 169.046 31.838 Q 166.109 33.08 164.117 35.981 A 15.574 15.574 0 0 0 163.33 37.256 L 163.33 75 L 151.465 75 L 151.465 0 L 163.33 0 Z" id="3" vector-effect="non-scaling-stroke"/><path class="path" d="M 239.453 75 L 239.16 69.824 A 16.997 16.997 0 0 1 228.984 75.568 A 25.396 25.396 0 0 1 224.316 75.977 Q 217.537 75.977 213.356 72.847 A 13.474 13.474 0 0 1 211.304 70.947 A 16.23 16.23 0 0 1 208.095 65.133 Q 207.31 62.7 207.034 59.749 A 36.027 36.027 0 0 1 206.885 56.396 L 206.885 22.168 L 218.75 22.168 L 218.75 56.25 A 17.703 17.703 0 0 0 219.108 59.984 Q 220.286 65.419 225.34 66.183 A 11.766 11.766 0 0 0 227.1 66.309 Q 235.742 66.309 238.77 60.107 L 238.77 22.168 L 250.635 22.168 L 250.635 75 L 239.453 75 Z" id="4" vector-effect="non-scaling-stroke"/><path class="path" d="M 309.082 48.438 L 309.082 49.121 Q 309.082 58.524 305.874 64.99 A 23.397 23.397 0 0 1 303.589 68.701 A 17.542 17.542 0 0 1 290.817 75.863 A 23.538 23.538 0 0 1 288.477 75.977 A 20.604 20.604 0 0 1 282.095 75.036 A 16.438 16.438 0 0 1 274.023 69.287 L 273.438 75 L 262.695 75 L 262.695 0 L 274.561 0 L 274.561 27.246 A 16.797 16.797 0 0 1 286.65 21.254 A 23.477 23.477 0 0 1 288.379 21.191 A 20.91 20.91 0 0 1 295.299 22.287 A 17.586 17.586 0 0 1 303.564 28.369 Q 307.967 34.096 308.857 43.459 A 52.66 52.66 0 0 1 309.082 48.438 Z M 297.217 49.609 L 297.217 48.096 A 39.353 39.353 0 0 0 296.977 43.602 Q 296.399 38.585 294.424 35.551 A 11.394 11.394 0 0 0 294.189 35.205 Q 291.162 30.908 285.4 30.908 A 13.627 13.627 0 0 0 280.929 31.6 Q 276.685 33.067 274.561 37.646 L 274.561 59.424 Q 277.314 65.396 283.521 66.188 A 15.629 15.629 0 0 0 285.498 66.309 A 11.886 11.886 0 0 0 289.316 65.725 A 9.622 9.622 0 0 0 294.092 62.158 A 13.595 13.595 0 0 0 295.95 58.448 Q 297.118 54.971 297.212 49.936 A 46.67 46.67 0 0 0 297.217 49.609 Z" id="5" vector-effect="non-scaling-stroke"/></g></svg>'
						)
						const svgPath = document.querySelectorAll('.path')
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
									opacity: [ 0, 1 ],
									duration: 4500,
									scale: [ 0, 1 ],
									rotateZ: 720,
									easing: 'easeInSine',
								},
								'-=1000'
							)
							.add(
								{
									targets: svgPath,
									strokeDashoffset: [ anime.setDashoffset, 0 ],
									easing: 'easeInOutSine',
									duration: 1500,
									delay: (el, i) => {
										return i * 250
									},
								},
								'-=2500'
							)
							.add({
								targets: svgPath,
								duration: 2000,
								fill: '#000000',
								delay: (el, i) => {
									return i * 200
								},
							})
					},
				},
				'-=2000'
			)
	})
}
