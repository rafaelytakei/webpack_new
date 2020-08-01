const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const path = require('path');
const paths = require('./paths');

/* Building plugins */
const plugins = [
	/**
	 * CleanWebpackPlugin
	 *
	 * Removes/cleans build folders and unused assets when rebuilding.
	 */
	new CleanWebpackPlugin(),
	/**
	 * CopyWebpackPlugin
	 *
	 * Copies files from target to destination folder.
	 */
	new CopyWebpackPlugin({
		patterns: [
			{
				from: paths.static,
				to: 'assets',
				globOptions: {
					ignore: ['*.DS_Store'],
				},
			},
		],
	}),
];

/* Building entries */
const jsFiles = fs.readdirSync(`${paths.src}/assets/js`);
const entries = {};
for (const file of jsFiles)
	if (path.extname(file) === '.js') {
		entries[path.basename(file, '.js')] = `./src/assets/js/${path.basename(
			file
		)}`;
		let htmlOptions = {
			title: 'Placeholder Title',
			favicon: `${paths.static}/favicon.png`,
			template: `${paths.src}/template.html`, // template file
			filename: `${path.basename(file, '.js')}.html`, // output file
			chunks: [path.basename(file, '.js')],
		};
		/* Função para checar se há um template para a entry, se não houver as opções serão padrão */
		const templatePath = `${paths.src}/${path.basename(file, '.js')}.html`;
		if (fs.existsSync(templatePath))
			htmlOptions = {
				template: `${paths.src}/${path.basename(file, '.js')}.html`,
				filename: `${path.basename(file, '.js')}.html`, // output file
				chunks: [path.basename(file, '.js')],
			};

		plugins.push(new HtmlWebpackPlugin(htmlOptions));
	}

module.exports = {
	/**
	 * Entry
	 *
	 * The first place Webpack looks to start building the bundle.
	 */
	entry: entries,

	/**
	 * Output
	 *
	 * Where Webpack outputs the assets and bundles.
	 */
	output: {
		path: paths.build,
		filename: '[name].bundle.js',
		publicPath: '/',
	},

	/**
	 * Plugins
	 *
	 * Customize the Webpack build process.
	 */
	plugins,

	/**
	 * Module
	 *
	 * Determine how modules within the project are treated.
	 */
	module: {
		rules: [
			/**
			 * JavaScript
			 *
			 * Use Babel to transpile JavaScript files.
			 */
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
					},
				},
			},
			/**
			 * Html
			 *
			 * Use html-loader to identify references inside html files.
			 */
			{
				test: /\.html$/i,
				loader: 'html-loader',
				include: paths.src,
			},

			/**
			 * Styles
			 *
			 * Inject CSS into the head with source maps.
			 */
			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { sourceMap: true, importLoaders: 2 },
					},
					{ loader: 'resolve-url-loader' },
					{ loader: 'sass-loader', options: { sourceMap: true } },
				],
			},

			/**
			 * Images
			 *
			 * Copy image files to build folder.
			 */
			{
				test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
					context: 'src', // prevent display of src/ in filename
				},
			},

			/**
			 * SVG's
			 *
			 * SVG's are copied inline
			 */
			/* {
				test: /\.svg$/,
        loader: 'svg-inline-loader'
			}, */

			/**
			 * Fonts
			 *
			 * Inline font files.
			 */
			{
				test: /\.(woff(2)?|eot|ttf|otf|)$/,
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: '[path][name].[ext]',
					context: 'src', // prevent display of src/ in filename
				},
			},
		],
	},

	resolve: {
		alias: {
			Styles: path.resolve(__dirname, '../src/assets/styles/'),
			Images: path.resolve(__dirname, '../src/assets/images/'),
			Js: path.resolve(__dirname, '../src/assets/js/'),
			Fonts: path.resolve(__dirname, '../src/assets/fonts/'),
			Modules: path.resolve(__dirname, '../src/assets/js/modules/'),
		},
	},
};
