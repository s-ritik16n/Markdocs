"use strict";

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.get("/", function (req, res) {
  res.sendFile(_path2.default.join(__dirname, 'public', 'index.html'));
});

app.get("/authcallback", function (req, res) {
  console.log(res);
});

app.listen('9000', function () {
  console.log("running heroku");
  console.log("all eyes at 9000");
});