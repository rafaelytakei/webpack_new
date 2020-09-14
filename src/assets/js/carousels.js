import 'Styles/main.scss';
import initSidebar from 'Modules/sidebar';
import buildCarousel from 'Modules/carousel';

const carouselContent1 = [
	{
		title: 'Teste title 1',
	},
	{
		title: 'Teste title 2',
	},
	{
		title: 'Teste title 3',
	},
	{
		title: 'Teste title 4',
	},
];

const carouselContent2 = [
	{
		title: 'Teste title 1',
		text: 'Lorem Ipsum 1',
	},
	{
		title: 'Teste title 2',
		text: 'Lorem Ipsum 2',
	},
	{
		title: 'Teste title 3',
		text: 'Lorem Ipsum 3',
	},
	{
		title: 'Teste title 4',
		text: 'Lorem Ipsum 4',
	},
];
document.addEventListener('DOMContentLoaded', () => {
	initSidebar(document.getElementById('sidebar'));
	buildCarousel('.carousel-1', carouselContent1);
	buildCarousel('.carousel-2', carouselContent2);
});
