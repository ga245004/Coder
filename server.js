const express = require('express');

const app = express();
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
const webpackDevMiddleware = require('webpack-dev-middleware');

app.use(webpackDevMiddleware(compiler, {publicPath: webpackConfig.output.publicPath}));

app.listen(3000, () => {
    console.log('application started at 3000');
});
