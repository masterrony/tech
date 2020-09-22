'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _dbInstance = require('../../middlewares/dbInstance');

var _dbInstance2 = _interopRequireDefault(_dbInstance);

var _Student = require('./Student');

var _Student2 = _interopRequireDefault(_Student);

var _Course = require('./Course');

var _Course2 = _interopRequireDefault(_Course);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Enroll = _dbInstance2.default.define('Enroll', {
  course_id: {
    type: _sequelize.DataTypes.NUMBER,
    references: {
      model: _Course2.default,
      key: 'id'
    }
  },
  student_id: {
    type: _sequelize.DataTypes.NUMBER,
    references: {
      model: _Student2.default,
      key: 'id'
    }
  }
}, {
  tableName: 'students',
  timestamps: false
});

// Enroll.belongsTo(Course)
// Enroll.belongsTo(Student)

exports.default = Enroll;
//# sourceMappingURL=Enroll.js.map