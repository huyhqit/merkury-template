const appRootDir = require('app-root-dir').get();
const webpack = require('webpack');
const glob = require("glob");
const _ = require('lodash');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const SwigWebpackPlugin = require('swig-templates-webpack-plugin');
const WebpackOnBuildPlugin = require('on-build-webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BUILD_DIR = path.resolve(appRootDir, 'build');
const APP_DIR = path.resolve(appRootDir, 'source');

const webpackConfig = {
    context: appRootDir,
    entry: [
        './source/scripts/index.js',
    ],
    output: {
        path: BUILD_DIR,
        filename: '[name].[hash].js',
        publicPath: '/',
    },
    performance: {
        hints: false,
    },
    devtool: 'source-map',
    module: {
        rules: [
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
                    // { loader: 'eslint-loader', options: { emitWarning: true } },
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
                    'style-loader',
                    'css-loader?modules',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
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
                    "extract-loader",
                    "html-loader?" + JSON.stringify({
                        attrs: ["img:src", "link:href", "source:src"],
                        minimize: false
                    }),
                    "swig-loader"
                ]
            },{
                test : /jquery\/src\/selector\.js$/,
                loader : 'amd-define-factory-patcher-loader'
            }, {
            }
        ],
    },
    resolve: {
        modules: [
            'node_modules',
        ],
        extensions: ['.json', '.js', '.jsx'],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'source/scripts/vendors.js',
            }
        ]),
        new HtmlWebpackPlugin({
            // template: './source/templates/index.swig',
            title: 'Open Charity',
            filename: 'pages/home.html',
            template: APP_DIR + '/templates/pages/home.swig'
        }),
        // new AddAssetHtmlPlugin({ filepath: path.resolve(APP_DIR, 'source/scripts/vendors.js') }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['vendors.js'],
            append: false,
            hash: true,
        })
    ],
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
