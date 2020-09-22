'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Student = exports.Course = undefined;

var _sequelize = require('sequelize');

var _dbInstance = require('../../middlewares/dbInstance');

var _dbInstance2 = _interopRequireDefault(_dbInstance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// define course model
var Course = _dbInstance2.default.define('Course', {
  title: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  field: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'courses'
});

// define student model
var Student = _dbInstance2.default.define('Student', {
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: _sequelize.DataTypes.NUMBER,
    allowNull: true
  }
}, {
  tableName: 'students'
});

exports.Course = Course;
exports.Student = Student;
//# sourceMappingURL=index.js.map