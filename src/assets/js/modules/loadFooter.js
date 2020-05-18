import $ from 'jquery';
import logoRealiza from '../../images/logo-realiza.png';
import logoAlper from '../../images/logo-alper.png';
export function getFooter() {
    let currentYear = new Date().getFullYear();
    let footerContent = [
        '<footer class="mt-2 text-blue">',
        '<div class="container-fluid">',
        '<div class="row justify-content-center align-items-center">',
        '<div class="col-lg-10 text-center text-md-left">',
        'Copyright © <span id="year">' + currentYear + '</span> <strong>Realiza</strong> e <strong>Alper Consultoria em Seguros</strong> - Todos ',
        'os direitos reservados',
        '</div>',
        '<div class="col-6 col-lg-1 text-center text-lg-right">',
        '<img src="' + logoRealiza + '" class="logo-realiza img-fluid logo-menu" alt="Logo Realiza" />',
        '</div>',
        '<div class="col-6 col-lg-1 text-center text-lg-left">',
        '<img src="' + logoAlper + '" class="img-fluid logo-menu" alt="Alper Consultoria em Seguros" />',
        '</div>',
        '</div>',
        '</div>',
        '</footer>',
    ].join('');

    $('#footer').append(footerContent);
}