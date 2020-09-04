export const Masks = {
	date: {
		alias: 'datetime',
		inputFormat: 'dd/mm/yyyy',
		placeholder: '__/__/____',
		clearIncomplete: true,
	},
	phone: {
		mask: '(99) 99999-9999',
	},
	cpf: {
		mask: '999.999.999-99',
		jitMasking: true,
	},
	cep: {
		mask: '99999-999',
	},
	cc: {
		mask: '9999 9999 9999 9999',
		jitMasking: true,
		autoUnmask: true,
	},
	cvv: {
		mask: '999',
		jitMasking: true,
	},
	money: {
		alias: 'currency',
		prefix: 'R$',
		min: 1,
		max: 50000000,
		radixPoint: ',',
		groupSeparator: '.',
		rightAlign: false,
		autoUnmask: true,
	},
};
