const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client', path.join(__dirname, 'src', 'index.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /.js/,
                loader: "babel-loader",
                exclude: /node_modules/
            }, {
                test: /.jsx/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'template.html')
        })
    ]
}