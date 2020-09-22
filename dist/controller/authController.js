'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _jsonwebtoken = require('jsonwebtoken');

var _UserModel = require('../model/actions/UserModel');

var authController = (0, _express.Router)();

authController.post('/', function (req, res) {
  var _req$body = req.body,
      password = _req$body.password,
      username = _req$body.username;

  if (password != process.env.PASSWORD || username != process.env.USERNAME) return res.json({ scs: 0 });

  var token = (0, _jsonwebtoken.sign)({ iat: Math.floor(Date.now() / 1000) }, process.env.APP_KEY, { expiresIn: '12h' });

  return res.json({ scs: 1, token: token });
});

exports.default = authController;
//# sourceMappingURL=authController.js.map