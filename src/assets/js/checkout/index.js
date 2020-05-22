// Test import of a JavaScript function, an SVG, and Sass
import HelloWorld from '../modules/HelloWorld'
import '../../styles/main.scss';
import WebpackLogo from '../../images/webpack-logo.svg';
import 'popper.js';
import 'bootstrap';
import $ from 'jquery';
import buildNavBar from '../modules/navbar';
import {getURLParameters} from '../modules/functions';


$(() => {
    buildNavBar();
    console.log('dsada');
    console.log(getURLParameters());
    $('body').append('<section id="content-section" class="container-fluid"></section>');
    $('body').attr('id', 'index-page');
    $('#content-section').append('<div id="main-image-div"></div>');
    $('#main-image-div').append('<img id="index-logo" src="'+WebpackLogo+'"></img>');
    $('#content-section').append('<div id="text-div" class="row mb-4"></div>');
    $('#text-div').append('<h1 class="col-12 d-flex justify-content-center">~ '+ HelloWorld() +' ~</h1>');
    $('#text-div').append('<h2 class="col-12 d-flex justify-content-center">This is the checkout page</h2>');
    $('#text-div').append('<a class="btn btn-primary" href="secondaryPage.html">Go To Another Page</button>');
});