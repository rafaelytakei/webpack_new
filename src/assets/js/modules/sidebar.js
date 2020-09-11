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
