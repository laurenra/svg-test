const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

ENTRY_PATH = path.resolve(__dirname, 'src/ts/svg-test.ts')
DIST_PATH = path.resolve(__dirname, 'dist')

module.exports = {
    entry: {
        main: ENTRY_PATH
    },
    output: {
        library: 'svga',
        path: DIST_PATH,
        filename: '[name].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html'
        }),
        new CopyPlugin({
            patterns: [
                { context: 'src/', from: 'css', to: 'css' },
                { context: 'src/', from: 'icon.svg', to: 'icon.svg' },
                { context: 'src/', from: 'favicon.ico', to: 'favicon.ico' },
                { context: 'src/', from: 'robots.txt', to: 'robots.txt' },
                { context: 'src/', from: 'icon.png', to: 'icon.png' },
                { context: 'src/', from: '404.html', to: '404.html' },
                { context: 'src/', from: 'site.webmanifest', to: 'site.webmanifest' }
            ]
        })
    ],
    devtool: 'source-map',
    stats: 'normal',
    mode: 'production'
};
