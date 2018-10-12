const express = require('express');

const app = express();

const webpackConfig = require('./webpack.config');
const compiler = require('webpack')(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {publicPath: webpackConfig.output.publicPath}));
app.use(require("webpack-hot-middleware")(compiler));

app.listen(3000, () => {
    console.log('application started at 3000');
});
