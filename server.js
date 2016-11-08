const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');

var config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);

app.use(express.static(__dirname + '/dist'));
app.use(webpackMiddleware(compiler, {
    stats: {
        colors: true
    }
}));
app.disable('x-powered-by');

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000, '0.0.0.0', function () {
    console.log('Listening on port 3000');
});  