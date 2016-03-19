// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var compression = require('compression');
var express = require('express');
var http = require("http");
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var sass = require('node-sass');

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var webpackRequire = require('enhanced-require')(module, {
  resolve: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets[]=react,presets[]=es2015',
        exclude: /(node_modules\/intl|node_modules\/moment|node_modules\/react)/
      }
    ]
  }
});

var server = express();

var theme = sass.renderSync({
  file: 'node_modules/grommet/scss/vanilla/index.scss',
  includePaths: [path.resolve(__dirname, '../node_modules')]
});

var PORT = process.env.PORT || 8050;

var app = express();

app.set('view engine', 'ejs');

app.use(compression());

app.use(morgan('tiny'));

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.resolve(path.join(__dirname, '/../dist/index.html')));
});

app.use('/', express.static(path.join(__dirname, '/../dist')));

var server = http.createServer(app);
server.listen(PORT);

console.log('Server started, listening at: http://localhost:8050...');