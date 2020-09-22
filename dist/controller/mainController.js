'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _jsonwebtoken = require('jsonwebtoken');

var _UserModel = require('../model/actions/UserModel');

var authController = (0, _express.Router)();

authController.post('/', function (req, res) {
	(0, _UserModel.auth)(req.body, function (_ref) {
		var scs = _ref.scs,
		    msg = _ref.msg,
		    user = _ref.user;

		if (!scs) return res.json({ scs: scs, msg: msg });

		var token = (0, _jsonwebtoken.sign)({ iat: Math.floor(Date.now() / 1000) }, process.env.APP_KEY, { expiresIn: '12h' });

		return res.json({ scs: scs, user: user, token: token });
	});
});

exports.default = authController;
//# sourceMappingURL=mainController.js.map