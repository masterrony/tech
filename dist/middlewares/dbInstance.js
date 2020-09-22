'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var sequelize = new _sequelize.Sequelize('tech', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

exports.default = sequelize;