/* Testando diferentes libs para validação
   - Parsleyjs: não tem suporte pronto para modules ou typescript
   - Validate.js: Possível
   - v8n: Funciona, porém sem definições de typescript. Não cria problemas, porém cria warnings na compilação.

   No momento estou testando a lib https://github.com/trevorr/tsfv, que é baseada na v8n com algumas funcionalidades extras.
*/

import 'Styles/main.scss'
import 'popper.js'
import 'bootstrap'
import 'Modules/customValidators'

import $ from 'jquery'
import Cleave from 'cleave.js'
import buildNavBar from 'Modules/navbar'
import tsfv from 'tsfv'

$(() => {
	const nameRegex = /^([\w]{3,})+\s+([\w\s]{3,})+$/i
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/
	const masterRegex = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/

	let cartaoCleave = new Cleave('#cartao', {
		creditCard: true,
	})
	let cpfCleave = new Cleave('#cpf', {
		delimiters: [ '.', '.', '-' ],
		blocks: [ 3, 3, 3, 2 ],
		numericOnly: true,
	})

	buildNavBar()
	$('#validate').on('click', function () {
		$('#erros-list').empty()
		let nome = $('#nome').val()
		let email = $('#email').val()
		let cartao = cartaoCleave.getRawValue()
		let cpf = $('#cpf').val()

		console.log(cartao)
		let nameValidation = tsfv.pattern(nameRegex).test(nome)
		let emailValidation = tsfv.pattern(emailRegex).test(email)
		let cartaoValidation = tsfv
			.anyOf(tsfv.pattern(visaRegex), tsfv.pattern(masterRegex))
			.test(cartao)
		let cpfValidation = tsfv.cpf().test(cpf)
		if (!nameValidation)
			$('#erros-list').append('<li>Nome Inválido</li>')

		if (!emailValidation)
			$('#erros-list').append('<li>Email Inválido</li>')

		if (!cartaoValidation)
			$('#erros-list').append('<li>Cartão Inválido</li>')

		if (!cpfValidation)
			$('#erros-list').append('<li>CPF Inválido</li>')

	})
})
