import $ from 'jquery';
import '../styles/main.scss';
import {
    getNavMenu
} from './modules/loadMenu';
import {
    getFooter
} from './modules/loadFooter';

import assistenciasJson from '../json/assistencias.json';
import assistenciasMobileJson from '../json/assistencias-mobile.json';
import iconChaveiro from '../images/icones/assistencia-residencial_chaveiro.png';
import iconHospedagem from '../images/icones/assistencia-residencial_hospedagem.png';
import iconAntenas from '../images/icones/assistencia-residencial_antenas.png';
import iconPlanilha from '../images/icones/icone_planilha.png';
import iconCasa from '../images/icones/icone_casa.png';
import iconAtendimento from '../images/icones/icone_atendimento.png';
import iconTrabalho from '../images/icones/icone_trabalho.png';

let tableStatus = "";
$(() => {
    getNavMenu();
    getFooter();
    $('#page-content').append(pageContent);
    
    if (innerWidth >= 992) {
        tableStatus = 'desktop';
        $('[data-table-for]').each(function () {
            var key = $(this).data('table-for');
            var _self = $(this);
            let resData = assistenciasJson;
            var data = resData[key];
            var info = data['info'];
            var assistencias = data['assistencias'];
            var limites = data['limites'];
            var preco = data['preco'];
            // -- tabela
            var trThead = $('<tr>');
            _self.find('thead').append(trThead);

            info.forEach(function (val) {
                trThead.append(
                    '<th scope="col">' + val + '</th>'
                );
            });
            trThead.find('th:first').addClass('rounded-left-top');
            trThead.find('th:last').addClass('rounded-right-top');

            // -- LISTAR AS ASSISTENCIAS
            assistencias.forEach(function (val, idx) {
                var trBody = $('<tr/>');

                if (idx === 0) {
                    trBody.append(
                        '<td>' + val + '</td>',
                        '<td>' + limites[idx] + '</td>',
                        '<td class="w-25" rowspan="' + (assistencias.length + 1) + '"><strong class="big-title">R$ ' + preco.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }) + '<strong></td>'
                    );
                } else {
                    trBody.append(
                        '<td>' + val + '</td>',
                        '<td>' + limites[idx] + '</td>'
                    );
                }
                _self.find('tbody').append(
                    trBody
                );
            });
        });
    } else {
        tableStatus = "mobile";
        $('[data-table-for]').each(function () {
            var key = $(this).data('table-for');
            var _self = $(this);
            let resData = assistenciasMobileJson;
            var data = resData[key];
            var info = data['info'];
            var assistencias = data['assistencias'];
            var limites = data['limites'];
            var preco = data['preco'];
            // -- tabela
            var trThead = $('<tr>');
            _self.find('thead').append(trThead);

            info.forEach(function (val) {
                trThead.append(
                    '<th scope="col">' + val + '</th>'
                );
            });
            trThead.find('th:first').addClass('rounded-left-top');
            trThead.find('th:last').addClass('rounded-right-top');

            // -- LISTAR AS ASSISTENCIAS
            assistencias.forEach(function (val, idx) {
                var trBody = $('<tr/>');

                if (idx === 0) {
                    trBody.append(
                        '<td>' + val + '</td>',
                        '<td>' + limites[idx] + '</td>'
                    );
                } else {
                    trBody.append(
                        '<td>' + val + '</td>',
                        '<td>' + limites[idx] + '</td>'
                    );
                }
                _self.find('tbody').append(
                    trBody
                );
            });
            var trFoot = $('<tr>');
            trFoot.append(
                '<td colspan="2">preço mensal: R$ ' + preco.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + '</td></tr>'
            );
            _self.find('tfoot').append(trFoot);
            trFoot.find('td:first').addClass('rounded-bottom');

        });
    }
});

$(window).resize(function() {
    if(innerWidth >= 992 && tableStatus == "mobile") {
        $('.table-coberturas').find('thead').empty();
        $('.table-coberturas').find('tbody').empty();
        $('.table-coberturas').find('tfoot').empty();
        tableStatus = "desktop";
        $('[data-table-for]').each(function () {
            var key = $(this).data('table-for');
            var _self = $(this);
            $.get('./assets/js/assistencias.json').then(function (resData) {
                var data = resData[key];
                var info = data['info'];
                var assistencias = data['assistencias'];
                var limites = data['limites'];
                var preco = data['preco'];
                // -- tabela
                var trThead = $('<tr>');
                _self.find('thead').append(trThead);

                info.forEach(function (val) {
                    trThead.append(
                        '<th scope="col">' + val + '</th>'
                    );
                });
                trThead.find('th:first').addClass('rounded-left-top');
                trThead.find('th:last').addClass('rounded-right-top');

                // -- LISTAR AS ASSISTENCIAS
                assistencias.forEach(function (val, idx) {
                    var trBody = $('<tr/>');

                    if (idx === 0) {
                        trBody.append(
                            '<td>' + val + '</td>',
                            '<td>' + limites[idx] + '</td>',
                            '<td class="w-25" rowspan="' + (assistencias.length + 1) + '"><strong class="big-title">R$ ' + preco.toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }) + '<strong></td>'
                        );
                    } else {
                        trBody.append(
                            '<td>' + val + '</td>',
                            '<td>' + limites[idx] + '</td>'
                        );
                    }
                    _self.find('tbody').append(
                        trBody
                    );
                });

            });
        });
    } else if(innerWidth < 992 && tableStatus == "desktop") {
        $('.table-coberturas').find('thead').empty();
        $('.table-coberturas').find('tbody').empty();
        $('.table-coberturas').find('tfoot').empty();
        tableStatus = "mobile";
        $('[data-table-for]').each(function () {
            var key = $(this).data('table-for');
            var _self = $(this);
            $.get('./assets/js/assistencias-mobile.json').then(function (resData) {
                var data = resData[key];
                var info = data['info'];
                var assistencias = data['assistencias'];
                var limites = data['limites'];
                var preco = data['preco'];
                // -- tabela
                var trThead = $('<tr>');
                _self.find('thead').append(trThead);
    
                info.forEach(function (val) {
                    trThead.append(
                        '<th scope="col">' + val + '</th>'
                    );
                });
                trThead.find('th:first').addClass('rounded-left-top');
                trThead.find('th:last').addClass('rounded-right-top');
    
                // -- LISTAR AS ASSISTENCIAS
                assistencias.forEach(function (val, idx) {
                    var trBody = $('<tr/>');
    
                    if (idx === 0) {
                        trBody.append(
                            '<td>' + val + '</td>',
                            '<td>' + limites[idx] + '</td>'
                        );
                    } else {
                        trBody.append(
                            '<td>' + val + '</td>',
                            '<td>' + limites[idx] + '</td>'
                        );
                    }
                    _self.find('tbody').append(
                        trBody
                    );
                });
                var trFoot = $('<tr>');
                trFoot.append(
                    '<td colspan="2">preço mensal: R$ ' + preco.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }) + '</td></tr>'
                );
                _self.find('tfoot').append(trFoot);
                trFoot.find('td:first').addClass('rounded-bottom');
    
    
            });
        });
    }
})