"use strict";

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.set('port', 8000);
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.set('Accept', 'application/json');
  next();
});

app.get("/", function (req, res) {
  res.sendFile(_path2.default.join(__dirname, 'public', 'index.html'));
});

app.get("/authcallback", function (req, res) {
  var code = req.query.code;
  var state = req.query.state;
  console.log("here is a log outside axios");
  (0, _axios2.default)({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token',
    headers: { 'Accept': 'application/json' },
    data: {
      code: code,
      state: state,
      client_id: _process2.default.env.CLIENT_ID || _config2.default['CLIENT_ID'],
      client_secret: _process2.default.env.CLIENT_SECRET || _config2.default['CLIENT_SECRET']
    }
  }).then(function (response) {
    console.log("here i get the response - then");
    console.log(response.data);
    resolve(response.data);
    res.redirect('/');
  }).catch(function (err) {
    console.log("here i get the response - error");
    reject(err);
    res.redirect('/');
  });
});

app.listen(_process2.default.env.PORT || 8000, function () {
  console.log('all eyes at ' + (_process2.default.env.PORT || 8000));
});