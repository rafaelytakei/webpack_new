import $ from 'jquery';
import '../styles/main.scss';
import {getNavMenu} from './modules/loadMenu';
import {getFooter} from './modules/loadFooter';

$(() => {
    getNavMenu();
    getFooter();
});


