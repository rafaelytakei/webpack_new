// Test import of a JavaScript function, an SVG, and Sass
import HelloWorld from './modules/HelloWorld'
import '../styles/main.scss'
import WebpackLogo from '../images/webpack-logo.svg';
import 'popper.js';
import 'bootstrap';
import $ from 'jquery';
import buildNavBar from './modules/navbar';
import {getURLParameters} from './modules/functions';


$(() => {
    buildNavBar();
    console.log('Hello!');
    console.log(getURLParameters());
    $('#main-image-div').append('<img id="index-logo" src="'+WebpackLogo+'"></img>');
    $('#text-div').append('<h1 class="col-12">~ '+ HelloWorld() +' ~</h1>');
});