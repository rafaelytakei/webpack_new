import 'parsleyjs';

import $ from 'jquery';

export /**
 * Lê o valor de todos os campos input/select dentro de um seletor, e armazena em um objeto
 *
 * @param {String} formElement - String com um seletor para um elemento a ser lido, por exemplo, '#myForm'
 * @returns {Object} - Objeto contendo os dados lidos
 */
const getFormValues = (formElement) => {
	const formObject = {};
	$(`${formElement} .form-control, ${formElement} select`).each(function () {
		let value = $(this).val();
		if ($(this).prop('tagName').toLowerCase() === 'input') {
			value = value.trim();
		}
		formObject[$(this).attr('id')] = value;
	});
	return formObject;
};

export /**
 * Valida todos os campos input/select dentro de um seletor usando o parsley
 *
 * @param {String} formElement - String com um seletor para um elemento a ser analisado, por exemplo, '#myForm'
 * @returns {Boolean} - True caso todos os campos sejam válidos
 */
const validateForm = (formElement) => {
	let validation = true;
	$(`${formElement} .form-control, ${formElement} select`).each(function () {
		$(this).parsley().validate();
		if (!$(this).parsley().isValid()) {
			validation = false;
		}
	});
	return validation;
};
