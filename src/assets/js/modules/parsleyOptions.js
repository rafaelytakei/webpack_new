import $ from 'jquery';

/* Validadores custom do parsley */
window.Parsley.addValidator('fullname', {
	validateString(value) {
		const regex = /^([A-zÀ-ú '´]{3,})+\s+([A-zÀ-ú '´]{3,})$/g;
		return !!regex.test(value);
	},
});

window.Parsley.addValidator('isnumber', {
	validateString(value) {
		if (value.length === value.replace(/\D/g, '').length) {
			return true;
		}
		return false;
	},
});

window.Parsley.addValidator('cep', {
	validateString(value) {
		if (value.replace(/\D/g, '').length === 8) {
			return true;
		}
		return false;
	},
});
window.Parsley.addValidator('cpf', {
	requirementType: 'string',
	validateString(enteredValue) {
		const value = enteredValue.replace(/\D/g, '');
		let Soma;
		let Resto;
		Soma = 0;
		if (value === '00000000000') return false;

		for (let i = 1; i <= 9; i += 1)
			Soma += parseInt(value.substring(i - 1, i), 10) * (11 - i);
		Resto = (Soma * 10) % 11;

		if (Resto === 10 || Resto === 11) Resto = 0;
		if (Resto !== parseInt(value.substring(9, 10), 10)) return false;

		Soma = 0;
		for (let i = 1; i <= 10; i += 1)
			Soma += parseInt(value.substring(i - 1, i), 10) * (12 - i);
		Resto = (Soma * 10) % 11;

		if (Resto === 10 || Resto === 11) Resto = 0;
		if (Resto !== parseInt(value.substring(10, 11), 10)) return false;
		return true;
	},
});

window.Parsley.addValidator('email', {
	validateString(value) {
		const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return !!regex.test(value);
	},
});

window.Parsley.addValidator('password', {
	validateString(value, min) {
		if (value.length >= min) {
			return true;
		}
		return false;
	},
});

window.Parsley.addValidator('equal', {
	validateString(value, otherElement) {
		if ($(otherElement).val() === value) {
			return true;
		}
		return false;
	},
});

window.Parsley.addValidator('phone', {
	validateString(value) {
		if (value.includes('_')) return false;
		if (value.length < 11) return false;
		return true;
	},
});

window.Parsley.addValidator('minimumage', {
	validateString(value) {
		const reqs = value.split('/');
		const day = reqs[0];
		const month = reqs[1];
		const year = reqs[2];

		const birthday = new Date(`${year}-${month}-${day}`);

		const today = new Date();

		let age = today.getFullYear() - birthday.getFullYear();
		const m = today.getMonth() - birthday.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
			age -= 1;
		}

		return age >= 18 && age <= 150;
	},
});

const ParsleyOptions = {
	default: {
		trigger: 'focusout',
		errorClass: 'input-error',
		errorsWrapper: [
			'<div class="error-container">',
			'<a href="javascript:;" data-toggle="popover" tabindex="-1" data-trigger="hover" data-placement="top" class="error-validation">',
			'<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle"',
			'class="svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"',
			'viewBox="0 0 512 512">',
			'<path fill="currentColor"',
			'd="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z">',
			'</path>',
			'</svg>',
			'</a>',
			'</div>',
		].join(''),
		errorTemplate: '<span class="error-msg"></span>',
	},
};

window.Parsley.addValidator('date', {
	validateString(value) {
		const reqs = value.split('/');
		const day = reqs[0];
		const month = reqs[1];
		const year = reqs[2];

		if (day.includes('_') || month.includes('__') || year.includes('__'))
			return false;

		const birthday = new Date(`${year}-${month}-${day}`);
		const isValidDate = Boolean(+birthday);

		return isValidDate;
	},
});

export default ParsleyOptions;
