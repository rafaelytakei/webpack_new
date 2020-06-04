/* Testando diferentes libs para validação
   - Parsleyjs: não tem suporte pronto para modules ou typescript
   - Validate.js: Possível
   - v8n: Funciona, porém sem definições de typescript. Não cria problemas, porém cria warnings na compilação.

   No momento estou testando a lib https://github.com/trevorr/tsfv, que é baseada na v8n com algumas funcionalidades extras.

	Para masking, as opções testadas até o momento são inputmask e cleave.js. Creio que inputmask cubra a grande maioria das necessiades,
	mas o Cleave parece melhor para lidar especificamente com números de CC.
*/

import 'popper.js';
import 'bootstrap';
import 'slim-select/src/slim-select/slimselect.scss';
import 'Modules/customValidators';
import 'Styles/main.scss';

import $ from 'jquery';
import Cleave from 'cleave.js';
import Inputmask from 'inputmask';
import SlimSelect from 'slim-select';
import buildNavBar from 'Modules/navbar';
import tsfv from 'tsfv';

$(() => {
	const nameRegex = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
	const masterRegex = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;

	const cartaoCleave = new Cleave('#cartao', {
		creditCard: true,
	});

	const cpfMask = new Inputmask({
		mask: '999.999.999-99',
		jitmasking: true,
	}).mask('#cpf');

	const esporteSelect = new SlimSelect({
		select: '#esporte',
		placeholder: 'Escolha seu esporte',
		searchPlaceholder: 'Busca',
	});
	buildNavBar();
	const validateButton = document.getElementById('validate');
	validateButton.addEventListener('click', () => {
		const errosList = document.getElementById('erros-list');
		while(errosList.firstChild) {
			errosList.removeChild(errosList.firstChild);
		}
		let nome = document.getElementById('nome');
		nome = nome.value;
		const email = $('#email').val();
		const cartao = cartaoCleave.getRawValue();
		const cpf = cpfMask.unmaskedvalue();
		const esporte = esporteSelect.selected();
		console.log(esporte);
		const nameValidation = tsfv.pattern(nameRegex).test(nome);
		const emailValidation = tsfv.pattern(emailRegex).test(email);
		const cartaoValidation = tsfv
			.anyOf(tsfv.pattern(visaRegex), tsfv.pattern(masterRegex))
			.test(cartao);
		const cpfValidation = tsfv.cpf().test(cpf);
		const esporteValidation = tsfv.not.null().test(esporte);
		if (!nameValidation)
			$('#erros-list').append(`<li>Nome Inválido</li>`);

		if (!emailValidation)
			$('#erros-list').append('<li>Email Inválido</li>');

		if (!cartaoValidation)
			$('#erros-list').append('<li>Cartão Inválido</li>');

		if (!cpfValidation)
			$('#erros-list').append('<li>CPF Inválido</li>');
		
		if(!esporteValidation)
			$('#erros-list').append(`<li>Esporte Inválido</li>`);
	});
});
