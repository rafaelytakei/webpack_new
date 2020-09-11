import 'Styles/main.scss';
import buildForm from 'Modules/formBuilder';
import { validateForm, getFormValues } from 'Modules/functions';

document.addEventListener('DOMContentLoaded', () => {
	/* Chamando função que constroi um form */
	buildForm('#example-form-1', 'user', 'cadastro');
	document.getElementById('collect-data').addEventListener('click', () => {
		if (validateForm('#example-form-1')) {
			console.log(getFormValues('#example-form-1'));
		} else {
			console.warn('Form contém campos inválidos ou incorretos');
		}
	});
});
