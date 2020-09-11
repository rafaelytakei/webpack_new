import 'Styles/main.scss';
import buildForm from 'Modules/formBuilder';
import { validateForm, getFormValues } from 'Modules/functions';
import initSidebar from 'Modules/sidebar';

document.addEventListener('DOMContentLoaded', () => {
	initSidebar(document.getElementById(`sidebar`));
	// Chamando função que constroi um form
	// Essa função já inicializa os slimSelects/Inputmasks/Parsley quando necessário
	buildForm('#example-form-1', 'user', 'cadastro');
	document.getElementById('collect-data').addEventListener('click', () => {
		if (validateForm('#example-form-1')) {
			console.log(getFormValues('#example-form-1'));
		} else {
			console.warn('Form contém campos inválidos ou incorretos');
		}
	});
});
