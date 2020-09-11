import 'popper.js';
import 'bootstrap';
import 'slim-select/src/slim-select/slimselect.scss';
import 'Styles/main.scss';
import 'parsleyjs';

import $ from 'jquery';
import Inputmask from 'inputmask';
import SlimSelect from 'slim-select';
import buildNavBar from 'Modules/navbar';

$(() => {
	new Inputmask({
		mask: '999.999.999-99',
		jitmasking: true,
	}).mask('#cpf');

	new SlimSelect({
		select: '#esporte',
		placeholder: 'Escolha seu esporte',
		searchPlaceholder: 'Busca',
	});
	buildNavBar();
	const validateButton = document.getElementById('validate');
	validateButton.addEventListener('click', () => {
		const errosList = document.getElementById('erros-list');
		while (errosList.firstChild) {
			errosList.removeChild(errosList.firstChild);
		}
		const nomeValidation = $('#nome').parsley();
		console.log(nomeValidation.isValid());
	});
});
