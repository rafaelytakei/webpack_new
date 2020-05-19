import $ from 'jquery';
import menuContent from '../../../components/navbar.html';

export function getNavMenu() {

    var menu = $('#dynamic-menu');

    menu.append(menuContent);

    var pathname = window.location.pathname;
    var regex = /^(([A-Z]:)?[\.]?[\\{1,2}/]?.*[\\{1,2}/])*(.+)\.(.+)/g;
    var namePage = pathname.split('\\').pop().split('/').pop();
    // --- MENU MOBILE
    var openMenu = false;
    var openMenuFn =  (e) => {
        e.preventDefault();
        openMenu ? $('.navbar-mobile').css({
            'left': ''
        }) : $('.navbar-mobile').css({
            'left': 0
        });
        openMenu = !openMenu;
    }

    $('a[href*="#ancora"]').click((e) => {
        e.preventDefault();
        var alvo = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(alvo).offset().top
        }, 500);
    });

    menu.find('a[href="' + namePage + '"]').addClass('active');

    $('#openMobile, .iconeCloseMobile, .navbar-mobile a[href*="ancora"]').click(openMenuFn);

}