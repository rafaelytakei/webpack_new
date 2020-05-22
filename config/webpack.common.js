const paths = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs');
const path = require('path');
/* Building plugins */
let plugins = [
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
      patterns: [{
        from: paths.static,
        to: 'assets',
        globOptions: {
          ignore: ['*.DS_Store'],
        }
      }]
    }),
];

/* Building entries */
let jsFiles = fs.readdirSync(paths.src + '/assets/js');
let entries = {};
for(const file of jsFiles) {
    if(path.extname(file) == '.js') {
        entries[path.basename(file, '.js')] = './src/assets/js/' + path.basename(file);
        let htmlOptions = {
            title: 'Placeholder Title',
            favicon: paths.static + '/favicon.png',
            template: paths.src + '/template.html', // template file
            filename: path.basename(file, '.js') + '.html', // output file
            chunks: [path.basename(file, '.js')],
        }
        /* Função para checar se há um template para a entry, se não houver as opções serão padrão */
        let templatePath = paths.src + '/' + path.basename(file,'.js') + '.html';
        if(fs.existsSync(templatePath)) {
            htmlOptions = {
                template: paths.src + '/' + path.basename(file, '.js') + '.html',
                filename: path.basename(file, '.js') + '.html', // output file
                chunks: [path.basename(file, '.js')],
            }
        }
        plugins.push(
            new HtmlWebpackPlugin(htmlOptions)
        );        
    }
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
  plugins: plugins,

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
        use: ['babel-loader', 'eslint-loader'],
      },
      /**
       * Html
       *
       * Use html-loader to identify references inside html files.
       */
      {
        test: /\.html$/i,
        loader: 'html-loader'
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
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          /* { loader: 'resolve-url-loader', options: {}}, */
          { loader: 'postcss-loader', options: { sourceMap: true } },
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
}
