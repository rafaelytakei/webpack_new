import $ from 'jquery';
import '../styles/main.scss';
import {getNavMenu} from './modules/loadMenu';
import {getFooter} from './modules/loadFooter';


$(document).ready(function () {
    getNavMenu();
    getFooter();
    let pageContent = [
        '<div class="bg-home-auto container-fluid home-section my-3 my-lg-4">',
            '<div class="row mb-sm-4 mb-3">',
                '<div class="col-1"></div>',
                '<div class="col-6">',
                    '<h2 class="home-header">A assistência de<br>automóvel que facilita<br>de verdade.</h2>',
                '</div>',
                '<div class="col-5"></div>',
            '</div>',
            '<div class="row mt-sm-2 mt-1">',
                '<div class="col-1"></div>',
                '<div class="col-5">',
                    '<a href="assistencia-auto.html" class="btn text-uppercase home-btn-effect home-btn px-lg-4 px-3 py-2 py-lg-3">conheça as vantagens</a>',
                '</div>',
                '<div class="col-6"></div>',
            '</div>',
        '</div>',
        '<div class="bg-home-residencia container-fluid home-section section-right residencia-section my-3 my-lg-4">',
            '<div class="row mb-sm-4 mb-3">',
                '<div class="col-6"></div>',
                '<div class="col-5">',
                    '<h2 class="home-header header-right residencia">Toda segurança e<br>tranquilidade que sua<br>casa merece.</h2>',
                '</div>',
                '<div class="col-1"></div>',
            '</div>',
            '<div class="row mt-sm-2 mt-1">',
                '<div class="col-6"></div>',
                '<div class="col-5">',
                    '<a href="assistencia-residencial.html" class="btn text-uppercase home-btn-effect home-btn residencia px-lg-4 px-3 py-2 py-lg-3">mais informações</a>',
                '</div>',
                '<div class="col-1"></div>',
            '</div>',
        '</div>',
        '<div class="bg-home-pet container-fluid home-section my-3 my-lg-4">',
            '<div class="row mb-sm-4 mb-3">',
                '<div class="col-1"></div>',
                '<div class="col-6">',
                    '<h2 class="pet home-header">Proteger seu bichinho<br>agora é possível com o<br>Plano de Assistência Pet<br>Emergencial.</h2>',
                '</div>',
                '<div class="col-5"></div>',
            '</div>',
            '<div class="row mt-2 mt-1">',
                '<div class="col-1"></div>',
                '<div class="col-6">',
                    '<a href="assistencia-pet.html" class="btn text-uppercase home-btn-effect home-btn pet px-lg-4 px-3 py-2 py-lg-3">quero saber mais</a>',
                '</div>',
                '<div class="col-5"></div>',
            '</div>',
        '</div>',
    ].join('');
    $('.home-body').append(pageContent);
});


