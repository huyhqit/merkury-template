const appRootDir = require('app-root-dir').get();
const { resolve } = require('path');
const Dotenv = require('dotenv-webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const SizePlugin = require('size-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');
const { ImageminWebpackPlugin } = require('imagemin-webpack');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminOptipng = require('imagemin-optipng');
const imageminSvgo = require('imagemin-svgo');

const { getIfUtils, removeEmpty } = require('webpack-config-utils');

const { ifProduction, ifDevelopment } = getIfUtils(process.env.NODE_ENV);

const BUILD_DIR = resolve(appRootDir, 'build');
const APP_DIR = resolve(appRootDir, 'source');

const webpackConfig = {
  mode: ifProduction('production', 'development'),
  context: appRootDir,
  entry: removeEmpty([
    './source/scripts/index.js',
  ]),
  output: {
    path: BUILD_DIR,
    filename: '[name].[hash].js',
    publicPath: ifDevelopment('/'),
  },
  performance: {
    hints: ifProduction('warning', false),
  },
  devtool: 'source-map',
  module: {
    rules: removeEmpty([
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|vendors\.js)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        use: [
          ifProduction(MiniCssExtractPlugin.loader, 'style-loader'),
          'css-loader?modules',
        ],
      },
      {
        test: /\.less$/,
        use: [
          ifProduction(MiniCssExtractPlugin.loader, 'style-loader'),
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'application/octet-stream',
        },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'image/svg+xml',
        },
      },
      {
        test: /\.(gif|jpg|png|ico)(\?.*$|$)$/,
        loader: 'file-loader',
      },
      {
        test: /\.swig$/,
        use: [
          'extract-loader',
          `html-loader?${JSON.stringify({
            attrs: ['img:src', 'link:href', 'source:src'],
            minimize: false,
          })}`,
          'swig-loader',
        ],
      },
    ]),
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.json', '.js', '.jsx'],
  },
  stats: {
    assets: false,
    cached: false,
    cachedAssets: false,
    colors: true,
    version: false,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false,
    entrypoints: false,
    modules: false,
  },
  plugins: removeEmpty([
    new Dotenv(),
    ifDevelopment(new SizePlugin()),
    ifProduction(new MiniCssExtractPlugin()),
    new CopyWebpackPlugin([
      {
        from: 'source/scripts/vendors.js',
      },
    ]),
    new HtmlWebpackPlugin({
      // template: './source/templates/index.swig',
      title: 'Open Charity',
      filename: 'home.html',
      template: `${APP_DIR}/templates/pages/home.swig`,
    }),
    // new AddAssetHtmlPlugin({ filepath: resolve(APP_DIR, 'source/scripts/vendors.js') }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: ['vendors.js'],
      append: false,
      hash: true,
    }),
    ifProduction(new ImageminWebpackPlugin({
      imageminOptions: {
        cache: true,
        plugins: [
          imageminGifsicle(),
          imageminJpegtran(),
          imageminOptipng(),
          imageminSvgo(),
        ],
      },
    })),
    ifProduction(new HtmlCriticalWebpackPlugin({
      base: BUILD_DIR,
      src: 'home.html',
      dest: 'home.html',
      inline: true,
      minify: true,
      extract: true,
      width: 1920,
      height: 1080,
      penthouse: {
        blockJSRequests: false,
      },
    })),
  ]),
};

// _.forEach(glob.sync("./source/templates/pages/*.swig"), function (file) {
//     const fileName = path.basename(file, '.swig');
//
//     webpackConfig.plugins.push(
//         new HtmlWebpackPlugin({
//             title: 'Open Charity',
//             filename: 'pages/' + fileName + '.html',
//             template: APP_DIR + '/templates/pages/' + fileName + '.swig'
//         })
//     )
// });

module.exports = webpackConfig;
