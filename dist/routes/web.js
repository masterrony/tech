'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Web = _express2.default.Router();

Web.get(['/', '/#/courses', '/#/students/'], function (req, res) {
  return res.render('index');
});

exports.default = Web;
//# sourceMappingURL=web.js.map