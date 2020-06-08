const paths = require('./paths');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
/* const MiniCssExtractPlugin = require('mini-css-extract-plugin'); */
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
	mode: 'production',
	devtool: false,
	output: {
		path: paths.build,
		publicPath: './',
		filename: '[name].[contenthash].bundle.js',
	},
	plugins: [
		/**
			* Extract CSS Chunks Webpack Plugin
			*	
			* Testing as an alternative to MiniCssExtractPlugin
			*/
			new ExtractCssChunks({
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: '[name].[contenthash].css',
				chunkFilename: '[name].[contenthash].css',
				
			}),
		/**
		 * MiniCssExtractPlugin
		 *
		 * Extracts CSS into separate files.
		 *
		 * Note: style-loader is for development, MiniCssExtractPlugin is for production.
		 * They cannot be used together in the same config.
		 */
		/* new MiniCssExtractPlugin({
			filename: '../styles/[name].[contenthash].css',
			chunkFilename: '[name].css',
		}), */
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
				test: /\.(scss|css)$/,
				use: [
					{
						loader: ExtractCssChunks.loader,
            options: {
              publicPath: (resourcePath, context) => 
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                 path.relative(path.dirname(resourcePath), context) + '/'
              ,
            },
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					'postcss-loader',
					'resolve-url-loader',
					{ loader: 'sass-loader', options: { sourceMap: true } },
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
          enforce: true
        }
			},
		},
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
});
