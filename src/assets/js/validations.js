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
import 'Styles/main.scss';
import 'parsleyjs';

import $ from 'jquery';
import Cleave from 'cleave.js';
import Inputmask from 'inputmask';
import SlimSelect from 'slim-select';
import buildNavBar from 'Modules/navbar';

$(() => {
	new Cleave('#cartao', {
		creditCard: true,
	});

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
