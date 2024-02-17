const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const { default: test } = require('node:test');
module.exports = {
    module: {
        rules: [
            {
            test: /\.css$/,
            use: [
                MiniCSSExtractPlugin.loader,
                'css-loader'
            ] 
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCSSExtractPlugin()
    ]
}