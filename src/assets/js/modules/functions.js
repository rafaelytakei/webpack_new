import 'parsleyjs';

import $ from 'jquery';

import ParsleyOptions from './parsleyOptions';

export /**
 * Lê o valor de todos os campos input/select dentro de um seletor, e armazena em um objeto
 *
 * @param {String} formElement - String com um seletor para um elemento a ser lido, por exemplo, '#myForm'
 * @returns {Object} - Objeto contendo os dados lidos
 */
const getFormValues = (formElement) => {
	const formObject = {};
	const formFields = document.querySelectorAll(
		`${formElement} input[type="text"], ${formElement} select`
	);
	for (const formField of formFields) {
		let value = null;
		if (formField.tagName.toLowerCase() === 'select') {
			value = formField.slim.selected();
		} else if (formField.tagName.toLowerCase() === 'input') {
			value = formField.value;
		}
		formObject[formField.id] = value;
	}
	return formObject;
};

export /**
 * Valida todos os campos input/select dentro de um seletor usando o parsley
 *
 * @param {String} formElement - String com um seletor para um elemento a ser analisado, por exemplo, '#myForm'
 * @returns {Boolean} - True caso todos os campos sejam válidos
 */
const validateForm = (formElement) => {
	$(`${formElement} .form-control, ${formElement} select`).each(function () {
		$(this)
			.parsley(ParsleyOptions.default)
			.on('field:error', function (field) {
				const errorMessage = field.getErrorsMessages();
				$(this)[0]
					.$element.parents('.form-group')
					.find('.error-container')
					.removeClass('d-none');
				$(this)[0]
					.$element.parents('.form-group')
					.find('.error-validation')
					.attr('title', errorMessage)
					.attr('data-original-title', errorMessage);
				$(this)[0]
					.$element.parents('.form-group')
					.find('.error-validation')
					.popover({
						container: 'body',
					});
			})
			.on('field:success', function () {
				$(this)[0]
					.$element.parents('.form-group')
					.find('.error-container')
					.addClass('d-none');
			});
	});
	let validation = true;
	$(`${formElement} .form-control, ${formElement} select`).each(function () {
		$(this).parsley().validate();
		if (!$(this).parsley().isValid()) {
			validation = false;
		}
	});
	return validation;
};

/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
export const getURLParams = (url = window.location.href) => {
	const params = {};
	const parser = document.createElement('a');
	parser.href = url;
	const query = parser.search.substring(1);
	const vars = query.split('&');
	for (let i = 0; i < vars.length; i += 1) {
		const pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};
/**
 * Formata uma string para BRL
 * @param {String} value - String com o valor a ser formatado
 * @return {String} String formatada em reais
 */

export const toReal = (value) => {
	return value.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});
};
