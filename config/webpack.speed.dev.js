/* Arquivo de configuração do webpack que só será executado em modo de desenvolvimento */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const paths = require('./paths');
const common = require('./webpack.common');

const smp = new SpeedMeasurePlugin();
module.exports = smp.wrap(
	merge(common, {
		/**
		 * Mode
		 *
		 * Set the mode to development or production.
		 */
		mode: 'development',

		/**
		 * Devtool
		 *
		 * Control how source maps are generated.
		 */
		devtool: 'eval-cheap-module-source-map',

		/**
		 * DevServer
		 *
		 * Spin up a server for quick development.
		 */
		devServer: {
			historyApiFallback: true,
			contentBase: paths.src,
			watchContentBase: true,
			open: true,
			compress: true,
			inline: true,
			hot: true,
			port: 8080,
		},

		plugins: [
			/**
			 * HotModuleReplacementPlugin
			 *
			 * Only update what has changed.
			 */
			new webpack.HotModuleReplacementPlugin(),
		],
	})
);
