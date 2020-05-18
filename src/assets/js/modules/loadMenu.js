import $ from 'jquery';
import logoRealiza from '../../images/logo-realiza.png';
import logoAlper from '../../images/logo-alper.png';
import iconTaxi from '../../images/icones/taxi_menu.png';
import iconResidencial from '../../images/icones/residencial_menu.png';
import iconFaq from '../../images/icones/faq_menu.png';
import iconPet from '../../images/icones/pet_menu.png';

export function getNavMenu() {

    var menu = $('#dynamic-menu');

    let menuContent = [
        '<nav class="navbar navbar-expand-lg navbar-light bg-white py-0" style="box-shadow: 0 1px 40px;">',
        '<div class="navbar-brand d-none d-lg-block">',
        '<img src="'+logoRealiza+' "class="logo-realiza img-fluid logo-menu mr-2" alt="Logo Realiza" />',
        '<img src="'+logoAlper+'"class="logo-alper img-fluid logo-menu" alt="Alper Consultoria em Seguros" />',
        '</div>',
        '<div class="d-block d-lg-none py-2 w-100">',
        '<div class="row align-items-center">',
        '<div class="col-2">',
        '<a href="#" id="openMobile">',
        '<span class="navbar-toggler-icon"></span>',
        '</a>',
        '</div>',
        '<div class="col-8">',
        '<div class="row align-items-center">',
        '<div class="col-6">',
        '<img src="'+logoRealiza+'" class="img-fluid logo-menu" alt="Logo Realiza" />',
        '</div>',
        '<div class="col-6">',
        '<img src="'+logoAlper+'"class="img-fluid logo-menu"',
        'alt="Alper Consultoria em Seguros" />',
        '</div>',
        '</div>',
        '</div>',
        '</div>',
        '</div>',
        '<div class="navbar-collapse d-none d-lg-block">',
        '<ul class="navbar-nav menu-desktop modify-list-menu ul-menu" id="modify-list-menu">',
        '<li class="nav-item li-menu px-4">',
        '<a class="nav-link text-blue" href="index.html">',
        'Home',
        '</a>',
        '</li>',
        '<li class="nav-item li-menu px-4">',
        '<a class="nav-link text-blue" href="assistencia-auto.html">',
        'Assistência Auto',
        '</a>',
        '</li>',
        '<li class="nav-item li-menu px-4">',
        '<a class="nav-link text-blue" href="assistencia-residencial.html">',
        'Assistência Residencial',
        '</a>',
        '</li>',
        '<li class="nav-item li-menu px-4">',
        '<a class="nav-link text-blue" href="assistencia-pet.html">',
        'Assistência Pet',
        '</a>',
        '</li>',
        '</ul>',
        '<span class="navbar-text">',
        '<ul class="navbar-nav mr-auto">',
        '<li class="nav-item">',
        '<a class="nav-link text-blue" href="faq.html">',
        'FAQ',
        '</a>',
        '</li>',
        '</ul>',
        '</span>',
        '</div>',
        '</nav>',
        '<div class="navbar-mobile px-4 d-block d-lg-none">',
        '<div class="overflow-auto d-block text-right">',
        '<a href="#" class="iconeCloseMobile">',
        '<span aria-hidden="true">&times;</span>',
        '</a>',
        '</div>',
        '<ul class="navbar-nav mr-auto modify-list-menu">',
        '<li class="nav-item my-1">',
        '<a class="nav-link" href="index.html">',
        '<i class="fas fa-arrow-left mr-3"></i> Home',
        '</a>',
        '</li>',
        '<li class="nav-item my-1">',
        '<a class="nav-link" href="assistencia-auto.html">',
        '<img class="mr-2 icon-taxi" alt="" /> Assistência Auto',
        '</a>',
        '</li>',
        '<li class="nav-item my-1">',
        '<a class="nav-link" href="assistencia-residencial.html">',
        '<img class="icon-residencial mr-2" alt="" /> Assistência Residencial',
        '</a>',
        '</li>',
        '<li class="nav-item my-1">',
        '<a class="nav-link" href="assistencia-pet.html">',
        '<img class="icon-pet mr-2" alt="" /> Assistência Pet',
        '</a>',
        '</li>',
        '</ul>',
        '<ul class="navbar-nav">',
        '<li class="nav-item my-1">',
        '<a class="nav-link" href="faq.html">',
        '<img class="icon-faq mr-2" alt="" /> FAQ',
        '</a>',
        '</li>',
        '</ul>',
        '</div>',
    ].join('');
    menu.append(menuContent);

    var pathname = window.location.pathname;
    var regex = /^(([A-Z]:)?[\.]?[\\{1,2}/]?.*[\\{1,2}/])*(.+)\.(.+)/g;
    var namePage = pathname.split('\\').pop().split('/').pop();
    $('.icon-taxi').attr('src', iconTaxi);
    $('.icon-faq').attr('src', iconFaq);
    $('.icon-residencial').attr('src', iconResidencial);
    $('.icon-pet').attr('src', iconPet);
    // --- MENU MOBILE
    var openMenu = false;
    var openMenuFn = function (e) {
        e.preventDefault();
        openMenu ? $('.navbar-mobile').css({
            'left': ''
        }) : $('.navbar-mobile').css({
            'left': 0
        });
        openMenu = !openMenu;
    }

    $('a[href*="#ancora"]').click(function (e) {
        e.preventDefault();
        var alvo = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(alvo).offset().top
        }, 500);
    });

    menu.find('a[href="' + namePage + '"]').addClass('active');

    $('#openMobile, .iconeCloseMobile, .navbar-mobile a[href*="ancora"]').click(openMenuFn);

}