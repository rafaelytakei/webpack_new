import Inputmask from 'inputmask';
import { Masks } from './Inputmasks';
import apAnswers from '../json/ap.json';

/* Exemplo da qualicorp */
const forms = {
	ap: {
		quote: {
			inputs: [
				{
					id: 'atividade',
					type: 'question',
					uuid: 'c374e7f9-c623-4d6c-942c-93401b0ea56b',
					questionPlan: 450,
					questionIndex: 0,
					required: true,
					label: 'Em qual atividade você se enquadra?',
					groupExtraClasses: ['col-12'],
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					id: 'insured_amount',
					type: 'select',
					required: true,
					label: 'Valor da Importância Segurada',
					groupExtraClasses: ['col-12', 'd-none'],
					options: [],
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					id: 'ap-quote-button',
					type: 'button',
					extraClasses: [
						'btn',
						'yellow-btn',
						'font-italic',
						'font-weight-bold',
						'text-uppercase',
						'd-flex',
						'justify-content-center',
						'align-items-center',
					],
					extraAttributes: [
						{
							attribute: 'data-custom-task',
							value: 'quote',
						},
					],
					buttonText: 'Cotar',
					groupExtraClasses: ['col-12', 'd-flex', 'align-items-center'],
				},
			],
		},
		enroll: {
			inputs: [
				{
					/* Identificador a ser usado no 'id' e 'name' do input */
					id: 'name',
					/* Tipo: input, select, button ou whitespace */
					type: 'input',
					/* Opções a serem mostradas caso type == 'select'. Não é necessário para input */
					option: [
						{
							/* Texto da opção */
							display: 'Exemplo 1',
							/* Value da opção */
							value: 'ex1',
						},
					],
					/* Define se o campo é required ou não */
					required: true,
					/* Texto do label */
					label: 'Nome Completo',
					/* Classes a serem adicionadas no wrapper (div que agrupa label+input). Ex: 'col-12', 'col-md-6' */
					groupExtraClasses: ['col-12'],
					/* Atributos a serem adicionados ao input. Ex. Parsley stuff */
					extraAttributes: [
						{
							/* Nome do atributo */
							attribute: 'data-parsley-fullname',
							/* Valor do atributo */
							value: null,
						},
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
						{
							attribute: 'data-parsley-fullname-message',
							value: 'Nome deve ser completo',
						},
					],
				},
				{
					id: 'cpf',
					type: 'input',
					required: true,
					label: 'CPF',
					groupExtraClasses: ['col-sm-6', 'col-md-4', 'col-12'],
					mask: 'cpf',
					extraAttributes: [
						{
							attribute: 'data-parsley-cpf',
							value: null,
						},
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
						{
							attribute: 'data-parsley-cpf-message',
							value: 'CPF Inválido',
						},
					],
				},
				{
					id: 'email',
					type: 'input',
					required: true,
					label: 'E-mail',
					groupExtraClasses: ['col-sm-6', 'col-md-4', 'col-12'],
					extraAttributes: [
						{
							attribute: 'data-parsley-email',
							value: null,
						},
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
						{
							attribute: 'data-parsley-email-message',
							value: 'Email Inválido',
						},
					],
				},
				{
					id: 'birth_date',
					type: 'input',
					required: true,
					label: 'Data de Nascimento',
					groupExtraClasses: ['col-sm-6', 'col-md-4', 'col-12'],
					mask: 'date',
					extraAttributes: [
						{
							attribute: 'data-parsley-date',
							value: null,
						},
						{
							attribute: 'data-parsley-minimumage',
							value: null,
						},
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
						{
							attribute: 'data-parsley-date-message',
							value: 'Data Inválida',
						},
						{
							attribute: 'data-parsley-minimumage-message',
							value: 'Idade Mínima de 18 Anos',
						},
					],
				},

				{
					id: 'income',
					type: 'input',
					required: true,
					label: 'Renda Mensal',
					mask: 'money',
					groupExtraClasses: ['col-sm-6', 'col-md-4', 'col-12'],
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					id: 'marital_status',
					type: 'select',
					options: [
						{
							display: 'Solteiro(a)',
							value: 'solteiro',
						},
						{
							display: 'Casado(a)',
							value: 'casado',
						},
						{
							display: 'Viúvo(a)',
							value: 'viuvo',
						},
						{
							display: 'Separado(a)',
							value: 'separado',
						},
						{
							display: 'Desquisitado(a)',
							value: 'desquisitado',
						},
						{
							display: 'União Estável',
							value: 'uniaoEstavel',
						},
						{
							display: 'Outros',
							value: 'outros',
						},
					],
					required: true,
					label: 'Estado Civil',
					groupExtraClasses: ['col-12', 'col-sm-6', 'col-md-4'],
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					id: 'cellphone_number',
					type: 'input',
					required: true,
					label: 'Celular',
					mask: 'phone',
					groupExtraClasses: ['col-md-4', 'col-sm-6', 'col-12'],
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
						{
							attribute: 'data-parsley-phone',
							value: null,
						},
						{
							attribute: 'data-parsley-phone-message',
							value: 'Nº de Celular Inválido',
						},
					],
				},
				{
					id: 'gender',
					type: 'select',
					options: [
						{
							display: 'Feminino',
							value: 'F',
						},
						{
							display: 'Masculino',
							value: 'M',
						},
					],
					required: true,
					label: 'Sexo',
					groupExtraClasses: ['col-12', 'col-sm-6', 'col-md-4'],
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					id: 'politically_exposed',
					type: 'select',
					options: [
						{
							display: 'Sim',
							value: 'Sim',
						},
						{
							display: 'Não',
							value: 'Não',
						},
					],
					required: true,
					label: 'Pessoa Politicamente Exposta',
					groupExtraClasses: ['col-12', 'col-sm-6', 'col-md-4'],
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					id: 'cep',
					type: 'input',
					required: true,
					label: 'CEP',
					mask: 'cep',
					groupExtraClasses: ['col-md-4', 'col-sm-6', 'col-12'],
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
						{
							attribute: 'data-parsley-cep',
							value: null,
						},
						{
							attribute: 'data-parsley-cep-message',
							value: 'CEP deve conter 8 números',
						},
					],
				},
				{
					id: 'estado',
					type: 'select',
					options: [
						{
							display: 'Acre',
							value: 'AC',
						},
						{
							display: 'Alagoas',
							value: 'AL',
						},
						{
							display: 'Amapá',
							value: 'AP',
						},
						{
							display: 'Amazonas',
							value: 'AM',
						},
						{
							display: 'Bahia',
							value: 'BH',
						},
						{
							display: 'Ceará',
							value: 'CE',
						},
						{
							display: 'Distrito Federal',
							value: 'DF',
						},
						{
							display: 'Espírito Santo',
							value: 'ES',
						},
						{
							display: 'Goiás',
							value: 'GO',
						},
						{
							display: 'Maranhão',
							value: 'MA',
						},
						{
							display: 'Mato Grosso',
							value: 'MT',
						},
						{
							display: 'Mato Grosso do Sul',
							value: 'MS',
						},
						{
							display: 'Minas Gerais',
							value: 'MG',
						},
						{
							display: 'Pará',
							value: 'PA',
						},
						{
							display: 'Paraíba',
							value: 'PB',
						},
						{
							display: 'Paraná',
							value: 'PR',
						},
						{
							display: 'Pernambuco',
							value: 'PE',
						},
						{
							display: 'Piauí',
							value: 'PI',
						},
						{
							display: 'Rio de Janeiro',
							value: 'RJ',
						},
						{
							display: 'Rio Grande do Norte',
							value: 'RN',
						},
						{
							display: 'Rio Grande do Sul',
							value: 'RS',
						},
						{
							display: 'Rondônia',
							value: 'RO',
						},
						{
							display: 'Roraima',
							value: 'RR',
						},
						{
							display: 'Santa Catarina',
							value: 'SC',
						},
						{
							display: 'São Paulo',
							value: 'SP',
						},
						{
							display: 'Sergipe',
							value: 'SE',
						},
						{
							display: 'Tocantins',
							value: 'TO',
						},
					],
					required: true,
					label: 'Estado',
					groupExtraClasses: ['col-12', 'col-sm-6', 'col-md-4'],
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					id: 'cidade',
					type: 'input',
					required: true,
					label: 'Cidade',
					groupExtraClasses: ['col-md-4', 'col-sm-6', 'col-12'],
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					id: 'bairro',
					type: 'input',
					required: true,
					label: 'Bairro',
					groupExtraClasses: ['col-sm-4', 'col-12'],
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					id: 'logradouro',
					type: 'input',
					required: true,
					label: 'Logradouro',
					groupExtraClasses: ['col-sm-8', 'col-12'],
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					id: 'numero',
					type: 'input',
					required: true,
					label: 'Nº',
					groupExtraClasses: ['col-sm-4', 'col-12'],
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},

				{
					id: 'complemento',
					type: 'input',
					required: false,
					label: 'Complemento',
					groupExtraClasses: ['col-sm-4', 'col-12'],
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					type: 'whitespace',
					groupExtraClasses: ['col-lg-4', 'col-md-4', 'col-sm-6', 'col-12'],
				},
				{
					id: 'payment-button',
					type: 'button',
					extraClasses: [
						'btn',
						'yellow-btn',
						'font-italic',
						'font-weight-bold',
						'text-uppercase',
						'd-flex',
						'justify-content-center',
						'w-100',
					],
					extraAttributes: [
						{
							attribute: 'data-custom-task',
							value: 'payment',
						},
					],
					buttonText: 'Continuar',
					groupExtraClasses: [
						'col-12',
						'col-sm-6',
						'col-lg-4',
						'd-flex',
						'align-items-end',
					],
				},
			],
		},
		payment: {
			inputs: [
				{
					id: 'payment-cc-number',
					type: 'input',
					required: true,
					label: 'Número do cartão',
					groupExtraClasses: ['col-12'],
					mask: 'cc',
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					id: 'payment-name',
					type: 'input',
					required: true,
					label: 'Nome como está no cartão',
					groupExtraClasses: ['col-12'],
					mask: 'fullname',
					extraAttributes: [
						{
							attribute: 'data-parsley-fullname',
							value: null,
						},
						{
							attribute: 'data-parsley-fullname-message',
							value: 'Digite um nome completo',
						},
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					id: 'payment-cc-month',
					type: 'select',
					alias: 'cc-month',
					required: true,
					label: 'Data de Expiração',
					groupExtraClasses: ['col-12', 'col-sm-6', 'col-md-3'],
					extraAttributes: [
						{
							attribute: 'data-parsley-isnumber',
							value: null,
						},
						{
							attribute: 'data-parsley-isnumber-message',
							value: 'Campo Obrigatório',
						},
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					id: 'payment-cc-year',
					type: 'select',
					alias: 'cc-year',
					required: true,
					label: '&nbsp',
					groupExtraClasses: ['col-12', 'col-sm-6', 'col-md-3'],
					extraAttributes: [
						{
							attribute: 'data-parsley-isnumber',
							value: null,
						},
						{
							attribute: 'data-parsley-isnumber-message',
							value: 'Campo Obrigatório',
						},
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					type: 'whitespace',
					groupExtraClasses: ['col-md-2', 'col-sm-6', 'col-12'],
				},
				{
					id: 'payment-cvv',
					type: 'input',
					required: true,
					label: 'CVV',
					groupExtraClasses: ['col-md-4', 'col-sm-6', 'col-12'],
					mask: 'cvv',
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
						{
							attribute: 'data-parsley-minlength',
							value: '3',
						},
						{
							attribute: 'data-parsley-minlength-message',
							value: 'CVV deve conter 3 números',
						},
					],
				},
				{
					id: 'payment-cpf',
					type: 'input',
					required: true,
					label: 'CPF do dono do cartão',
					groupExtraClasses: ['col-12'],
					mask: 'cpf',
					extraAttributes: [
						{
							attribute: 'data-parsley-cpf',
							value: null,
						},
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
						{
							attribute: 'data-parsley-cpf-message',
							value: 'CPF Inválido',
						},
					],
				},
				{
					id: 'payment-terms',
					type: 'checkbox',
					required: true,
					label:
						'Li e declaro que concordo com os <a href="https://demo.suthubservice.com/db7bde11-8491-47b6-a521-f91ec5232c7b/assets/pdfs/termos_e_condicoes.pdf" target="_blank">Termos de Uso</a>.',
					groupExtraClasses: ['col-12'],
					extraAttributes: [
						{
							attribute: 'data-parsley-required-message',
							value: 'Campo Obrigatório',
						},
					],
				},
				{
					id: 'ap-enroll-button',
					type: 'button',
					extraClasses: [
						'btn',
						'yellow-btn',
						'font-italic',
						'font-weight-bold',
						'text-uppercase',
						'd-flex',
						'justify-content-center',
					],
					extraAttributes: [
						{
							attribute: 'data-custom-task',
							value: 'enroll',
						},
					],
					buttonText: 'Pagar',
					groupExtraClasses: [
						'col-md-3',
						'col-sm-6',
						'col-12',
						'd-flex',
						'align-items-center',
					],
				},
			],
		},
	},
};
export const buildForm = (targetElement, productName, formName) => {
	let formData = null;
	if (forms[productName][formName]) {
		formData = forms[productName][formName];
	} else {
		console.log(`Form ${formName} não configurada em forms.js`);
		return;
	}

	for (const formInput of formData.inputs) {
		let extraClasses = '';
		for (const groupClass of formInput.groupExtraClasses) {
			extraClasses = `${extraClasses} ${groupClass}`;
		}
		const content = [`<div class="form-group${extraClasses}">`];
		if (
			formInput.type !== 'button' &&
			formInput.type !== 'whitespace' &&
			formInput.type !== 'checkbox'
		) {
			content.push(`<label for="${formInput.id}">${formInput.label}</label>`);
		} else if (formInput.type === 'button') {
			content.push(`<button class="`);
			for (const buttonClass of formInput.extraClasses) {
				content.push(` ${buttonClass}`);
			}
			content.push(`" `);
			for (const attribute of formInput.extraAttributes) {
				content.push(
					` ${attribute.attribute}${
						attribute.value != null ? `="${attribute.value}"` : ''
					}`
				);
			}
			content.push(`>${formInput.buttonText}</button>`);
		}

		if (formInput.type === 'input') {
			content.push(
				`<input type="text" id="${formInput.id}" name="${formInput.id}" class="form-control"`
			);
			for (const attribute of formInput.extraAttributes) {
				content.push(
					` ${attribute.attribute}${
						attribute.value != null ? `="${attribute.value}"` : ''
					}`
				);
			}
			content.push(` ${formInput.required === true ? 'required' : ''}>`);
		} else if (formInput.type === 'select') {
			if (formInput.alias) {
				content.push(`<select id="${formInput.id}" name="${formInput.id}"`);
				for (const attribute of formInput.extraAttributes) {
					content.push(
						` ${attribute.attribute}${
							attribute.value != null ? `="${attribute.value}"` : ''
						}`
					);
				}
				content.push(` ${formInput.required === true ? 'required' : ''}>`);

				if (formInput.alias === 'cc-year') {
					content.push(`<option data-placeholder="true">AA</option>`);
					const currentYear = new Date().getFullYear();
					console.log(currentYear);
					for (let i = 0; i < 10; i += 1) {
						content.push(
							`<option value="${(currentYear + i).toString().substr(2, 2)}">${(
								currentYear + i
							)
								.toString()
								.substr(2, 2)}</option>`
						);
					}
				} else if (formInput.alias === 'cc-month') {
					content.push(`<option data-placeholder="true">MM</option>`);
					for (let i = 1; i <= 12; i += 1) {
						let monthString = null;
						if (i < 10) {
							monthString = `0${i.toString()}`;
						} else {
							monthString = i.toString();
						}
						content.push(
							`<option value="${monthString}">${monthString}</option>`
						);
					}
				}
				content.push('</select>');
			} else {
				content.push(`<select id="${formInput.id}" name="${formInput.id}"`);
				for (const attribute of formInput.extraAttributes) {
					content.push(
						` ${attribute.attribute}${
							attribute.value != null ? `="${attribute.value}"` : ''
						}`
					);
				}
				content.push(` ${formInput.required === true ? 'required' : ''}>`);
				content.push(`<option data-placeholder="true"></option>`);
				for (const option of formInput.options) {
					content.push(
						`<option value="${option.value}">${option.display}</option>`
					);
				}
				content.push('</select>');
			}
		} else if (formInput.type === 'question') {
			content.push(
				`<select id="${formInput.id}" name="${formInput.id}" data-uuid="${formInput.uuid}"`
			);
			for (const attribute of formInput.extraAttributes) {
				content.push(
					` ${attribute.attribute}${
						attribute.value != null ? `="${attribute.value}"` : ''
					}`
				);
			}
			content.push(` ${formInput.required === true ? 'required' : ''}>`);
			content.push(`<option data-placeholder="true"></option>`);
			for (const option of apAnswers) {
				content.push(`<option value="${option.value}">${option.text}</option>`);
			}
			content.push('</select>');
		} else if (formInput.type === 'checkbox') {
			const checkboxContent = [
				`<div class="pretty p-default p-curve">`,
				`<input type="checkbox" id="${formInput.id}" name="${formInput.id}" ${
					formInput.required ? 'required' : ''
				} />`,
				`<div class="state p-primary-o">`,
				`<label></label>`,
				`</div>`,
				`</div>`,
				`<label class="indent-checkbox" for="${formInput.id}">${formInput.label}<span id="erro-${formInput.id}" class="erro-termos" data-toggle="popover"`,
				`tabindex="-1" data-trigger="hover" data-placement="top" class="error-validation"`,
				`data-title="Campo Obrigatório" data-original-title="Campo Obrigatório"><svg aria-hidden="true"`,
				`focusable="false" data-prefix="fas" data-icon="times-circle"`,
				`class="svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"`,
				`viewBox="0 0 512 512">`,
				`<path fill="currentColor"`,
				`d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z">`,
				`</path>`,
				`</svg></span>`,
				`</label>`,
			].join('');
			content.push(checkboxContent);
		}
		content.push('</div>');
		document
			.querySelector(targetElement)
			.insertAdjacentHTML('beforeend', content.join(''));
		if (formInput.mask) {
			new Inputmask(Masks[formInput.mask]).mask(`#${formInput.id}`);
		}
	}
};
