const imagemin = require("@ixkaito/imagemin");
const webp = require( "imagemin-webp" );

(async () => {
	const files = await imagemin(['src/assets/images/**/*.{jpg,png}'], {
		destination: '',
		plugins: [
			webp({quality: 100})
		]
	});

	console.log('Images to WebP completed!');
	//=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();