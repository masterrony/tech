'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _dbInstance = require('../../middlewares/dbInstance');

var _dbInstance2 = _interopRequireDefault(_dbInstance);

var _Enroll = require('./Enroll');

var _Enroll2 = _interopRequireDefault(_Enroll);

var _Student = require('./Student');

var _Student2 = _interopRequireDefault(_Student);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Course = _dbInstance2.default.define('Course', {
  title: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'courses'
});

Course.hasMany(_Enroll2.default);

exports.default = Course;
//# sourceMappingURL=Course.js.map