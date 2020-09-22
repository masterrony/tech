'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _dbInstance = require('../../middlewares/dbInstance');

var _dbInstance2 = _interopRequireDefault(_dbInstance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Student = _dbInstance2.default.define('Student', {
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'students'
});

exports.default = Student;
//# sourceMappingURL=Student.js.map