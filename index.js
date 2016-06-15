var express = require('express');
var path = require('path');

require('ex6-promise').polyfill();
require('isomorphic-fetch');

fetch('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=02e41994dd05a5f14f9040d3bae087cfca3c7626ffd00951d')
  .then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(function(word) {
    console.log(word);
  });

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
const ROOT_PATH = path.resolve(__dirname);

const app = express();

if (ENV === 'production') {
  app.use('./lib', express.static(path.join(ROOT_PATH, 'lib')));
} else {
  const webpack = require('webpack');
  const config = require('./webpack.config');
  const compiler = webpack(config);

  app.use(require("webpack-dev-middleware")(compiler));
}

app.get('*', function(req, res) {
  res.render('index');
});

app.listen(PORT, function(error) {
  if (error) return console.log('-ERROR-', error);

  console.log('-Server listening on port ${PORT}-');
});
