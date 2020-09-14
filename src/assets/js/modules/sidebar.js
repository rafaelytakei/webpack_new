const sidebarItems = [
	{
		display: 'Forms',
		page: 'forms.html',
		logo: [
			`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-check" width="40" height="40"`,
			`viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round"`,
			`stroke-linejoin="round">`,
			`<path stroke="none" d="M0 0h24v24H0z" />`,
			`<path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />`,
			`<path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />`,
			`<path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />`,
			`<line x1="11" y1="6" x2="20" y2="6" />`,
			`<line x1="11" y1="12" x2="20" y2="12" />`,
			`<line x1="11" y1="18" x2="20" y2="18" />`,
			`</svg>`,
		].join(''),
	},
	{
		display: 'Carousels',
		page: 'carousels.html',
		logo: [
			`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round">`,
			`<path stroke="none" d="M0 0h24v24H0z"/>`,
			`<line x1="15" y1="8" x2="15.01" y2="8" />`,
			`<rect x="4" y="4" width="16" height="16" rx="3" />`,
			`<path d="M4 15l4 -4a3 5 0 0 1 3 0l 5 5" />`,
			`<path d="M14 14l1 -1a3 5 0 0 1 3 0l 2 2" />`,
			`</svg>`,
		].join(''),
	},
];

const initSidebar = (targetElement) => {
	while (targetElement.firstChild)
		targetElement.removeChild(targetElement.firstChild);
	const sidebarContent = [
		`<div class="sidebar__header">`,
		`<img src="./assets/images/suthub-logo.png" alt="" />`,
		`<h3>Suthub Boilerplate</h3>`,
		`</div>`,
	];
	for (const sidebarItem of sidebarItems) {
		sidebarContent.push(
			[
				`<div class="sidebar__item" data-href="${sidebarItem.page}">`,
				sidebarItem.logo,
				`<h4>${sidebarItem.display}</h4>`,
				`</div>`,
			].join('')
		);
	}
	targetElement.insertAdjacentHTML('beforeend', sidebarContent.join(''));
	const itemsList = targetElement.querySelectorAll('.sidebar__item');
	for (const item of itemsList) {
		item.addEventListener('click', () => {
			window.location.href = item.getAttribute('data-href');
		});
	}
};

export default initSidebar;
