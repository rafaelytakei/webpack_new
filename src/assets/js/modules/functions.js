/**
 * Retorna os parâmetros de uma URL. Caso não seja definida uma URL, usará a URL da página atual.
 *
 * @param {*} url [url = location.search]- URL a ser lida
 * @returns {object} - Objeto com os parâmetros
 */
export const getURLParameters = (url = location.search) =>
	(url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
		(a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
	)

/**
 * Transforma form em um objeto
 *
 * @param {*} form - Elemento do form a ser transformado em objeto
 * @example formToObject(document.querySelector('#form')); => { email: 'test@email.com', name: 'Test Name' }
 * @returns {object} - Objeto com os elementos do form
 */
export const formToObject = form =>
	Array.from(new FormData(form)).reduce(
		(acc, [ key, value ]) => ({
			...acc,
			[key]: value,
		}), {}
	)

/**
 * Realiza um 'Deep Clone' de um objeto
 *
 * @param {*} obj - Objeto a ser clonado
 * @returns {object} - Clone do objeto
 */
const deepClone = obj => {
	if (obj === null) return null
	let clone = Object.assign({}, obj)
	Object.keys(clone).forEach(
		key => clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
	)
	return Array.isArray(obj) && obj.length
		? (clone.length = obj.length) && Array.from(clone)
		: Array.isArray(obj)
			? Array.from(obj)
			: clone
}