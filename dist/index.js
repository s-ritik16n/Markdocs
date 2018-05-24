"use strict";

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

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
  console.log(res);
  res.sendFile(_path2.default.join(__dirname, 'public', 'index.html'));
});

app.listen(_process2.default.env.PORT || 8000, function () {
  console.log('all eyes at ' + (_process2.default.env.PORT || 8000));
});