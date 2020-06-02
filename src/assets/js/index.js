/* Test import of a JavaScript function, an SVG, and Sass */

import 'popper.js'
import 'bootstrap'
import 'Styles/main.scss'

import $ from 'jquery'
import HelloWorld from 'Modules/HelloWorld'
import WebpackLogo from 'Images/webpack-logo.svg'
import buildNavBar from 'Modules/navbar'
import {
	getURLParameters,
} from 'Modules/functions'

$(() => {
	buildNavBar()
	console.log('Hello!')
	console.log(getURLParameters())
	$('#main-image-div').append(
		`<img id="index-logo" src="${ WebpackLogo }"></img>`
	)
	$('#text-div').append('<h1 class="col-12">~ ' + HelloWorld() + ' ~</h1>')
})