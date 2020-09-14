const path = require('path');

module.exports = {
	src: path.resolve(__dirname, '../src'), // Source Files
	build: path.resolve(__dirname, '../dist'), // Build Files
	static: path.resolve(__dirname, '../public'), // Static Files to be copied to build
	js: path.resolve(__dirname, '../src/assets/js'), // JS Files
	fonts: path.resolve(__dirname, '../src/assets/fonts'), // Fonts
	vendors: path.resolve(__dirname, '../node_modules'), // Node Modules
};
