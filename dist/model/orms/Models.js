'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Enroll = exports.Student = exports.Course = undefined;

var _sequelize = require('sequelize');

var _dbInstance = require('../../middlewares/dbInstance');

var _dbInstance2 = _interopRequireDefault(_dbInstance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Course = _dbInstance2.default.define('Course', {
  title: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'courses'
});

var Student = _dbInstance2.default.define('Student', {
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'students'
});

var Enroll = _dbInstance2.default.define('Enroll', {
  course_id: {
    type: _sequelize.DataTypes.NUMBER,
    references: {
      model: Course,
      key: 'id'
    }
  },
  student_id: {
    type: _sequelize.DataTypes.NUMBER,
    references: {
      model: Student,
      key: 'id'
    }
  }
}, {
  tableName: 'students',
  timestamps: false
});

// define relations
Course.hasMany(Enroll);
Enroll.belongsTo(Course);
Enroll.belongsTo(Student);

exports.Course = Course;
exports.Student = Student;
exports.Enroll = Enroll;
//# sourceMappingURL=Models.js.map