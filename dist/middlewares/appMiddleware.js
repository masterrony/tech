'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppMiddleware = new _express2.default();
var corsOptions = {
  exposedHeaders: ['X-Total-Count']
};

AppMiddleware.use(_bodyParser2.default.json());
AppMiddleware.use((0, _cors2.default)(corsOptions));
AppMiddleware.use((0, _helmet2.default)());
AppMiddleware.use(_bodyParser2.default.urlencoded({ extended: false }));
AppMiddleware.use(_express2.default.static('public'));

exports.default = AppMiddleware;
//# sourceMappingURL=appMiddleware.js.map