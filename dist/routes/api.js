'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _authController = require('../controller/authController');

var _authController2 = _interopRequireDefault(_authController);

var _courseController = require('../controller/courseController');

var _courseController2 = _interopRequireDefault(_courseController);

var _studentController = require('../controller/studentController');

var _studentController2 = _interopRequireDefault(_studentController);

var _verifyToken = require('../middlewares/verifyToken');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Api = _express2.default.Router();

// auth api
Api.use('/auth', _authController2.default);

// courses api
Api.use('/courses', _verifyToken.verifyToken, _courseController2.default);

// students api
Api.use('/students', _verifyToken.verifyToken, _studentController2.default);

exports.default = Api;