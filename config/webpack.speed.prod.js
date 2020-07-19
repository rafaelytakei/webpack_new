const { merge } = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const CompressionPlugin = require('compression-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');
const paths = require('./paths');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(
	merge(common, {
		mode: 'production',
		devtool: false,
		output: {
			path: paths.build,
			publicPath: './',
			filename: '[name].[contenthash].bundle.js',
		},
		plugins: [
			/**
			 * MiniCssExtractPlugin
			 *
			 * Extracts CSS into separate files.
			 *
			 * Note: style-loader is for development, MiniCssExtractPlugin is for production.
			 * They cannot be used together in the same config.
			 */
			new MiniCssExtractPlugin({
				filename: '../styles/[name].[contenthash].css',
				chunkFilename: '[name].css',
			}),
			new PurgecssPlugin({
				paths: glob.sync(`${paths.src}/**/*`, { nodir: true }),
				whitelist: ['arrow-up', 'arrow-down'],
				whitelistPatterns: [/ss/],
				whitelistPatternsChildren: [/ss/],
			}),
			new CompressionPlugin({
				filename: '[path].br[query]',
				algorithm: 'brotliCompress',
				test: /\.(js|css|html|svg)$/,
				compressionOptions: {
					// zlib’s `level` option matches Brotli’s `BROTLI_PARAM_QUALITY` option.
					level: 11,
				},
				threshold: 10240,
				minRatio: 0.8,
				deleteOriginalAssets: false,
			}),
		],
		module: {
			rules: [
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
							},
						},
						'postcss-loader',
					],
				},
			],
		},

		/**
		 * Optimization
		 *
		 * Production minimizing of JavaSvript and CSS assets.
		 */
		optimization: {
			// Minimizer Plugins
			minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
			// Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
			// instead of having their own. This also helps with long-term caching, since the chunks will only
			// change when actual code changes, not the webpack runtime.
			runtimeChunk: 'single',
			// This breaks apart commonly shared deps (react, semantic ui, etc) into one shared bundle. React, etc
			// won't change as often as the app code, so this chunk can be cached separately from app code.
			splitChunks: {
				chunks: 'all',
				maxInitialRequests: Infinity,
				minSize: 0,
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name(module) {
							// get the name. E.g. node_modules/packageName/not/this/part.js
							// or node_modules/packageName
							const packageName = module.context.match(
								/[\\/]node_modules[\\/](.*?)([\\/]|$)/
							)[1];

							// npm package names are URL-safe, but some servers don't like @ symbols
							return `npm.${packageName.replace('@', '')}`;
						},
					},
					styles: {
						name: 'styles',
						test: /\.css$/,
						chunks: 'all',
						enforce: true,
					},
				},
			},
		},
		performance: {
			hints: false,
			maxEntrypointSize: 512000,
			maxAssetSize: 512000,
		},
	})
);
