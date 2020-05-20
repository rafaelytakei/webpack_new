import '../styles/main.scss'
import 'popper.js';
import 'bootstrap';
import $ from 'jquery';
import anime from 'animejs';
import buildNavBar from './modules/navbar';

$(() => {
    buildNavBar();
    anime.timeline().add({
      targets: '#bg-img-left',
      translateX: ['-100%', '-0.5%'],
      duration: 700,
      easing: "easeInSine"
    }).add({
      targets: '#bg-img-right',
      translateX: ['100%', '0.5%'],
      duration: 700,
      easing: "easeInSine"
    }, '-=700').add({
      targets: '#middle-line',
      translateY: ['100%', '0'],
      duration: 1000,
      easing: "easeInSine"
    }).add({
      targets: '#middle-circle',
      height: [0, '15vh'],
      width: [0, '15vh'],
      top: ['15%', '5%'],
      duration: 600,
      easing: "easeInSine"
    }).add({
      targets: "#rotated-circle",
      width: [0, '80vw'],
      duration: 1000,
      easing: "easeInSine"
    }).add({
      targets: ".main-header",
      opacity: [0, 1],
      easing: "easeInSine",
      zIndex: 5,
      duration: 1000
    })
})