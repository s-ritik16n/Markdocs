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
  new Promise(function (resolve, reject) {
    (0, _axios2.default)({
      method: 'post',
      url: 'https://github.com/login/oauth/access_token',
      headers: { 'Accept': 'application/json' }
    }).then(function (response) {
      console.log(response.data);
      resolve(response.data);
    }).catch(function (err) {
      reject(err);
    });
  }).then(function (val) {
    res.redirect('/');
  }).catch(function (err) {
    console.log(err);
    res.redirect('/');
  });
});

app.listen(_process2.default.env.PORT || 8000, function () {
  console.log('all eyes at ' + (_process2.default.env.PORT || 8000));
});