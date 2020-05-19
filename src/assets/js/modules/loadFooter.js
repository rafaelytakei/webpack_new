import $ from 'jquery';
import footerContent from '../../../components/footer.html';
export function getFooter() {
    let currentYear = new Date().getFullYear();

    $('#footer').append(footerContent);
    $('#year').html(currentYear);
}