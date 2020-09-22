'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteOneCourse = exports.updateOneCourse = exports.createOneCourse = exports.getOneCourse = exports.getCourses = undefined;

var _regeneratorRuntime = require('regenerator-runtime');

var _orms = require('../orms');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getCourses = exports.getCourses = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
    var skip = _ref2.skip,
        limit = _ref2.limit,
        order = _ref2.order,
        sort = _ref2.sort;

    var courses, _ref3, count, rows;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _orms.Course.findAll({
              order: [[order, sort]],
              offset: skip,
              limit: limit
            });

          case 2:
            courses = _context.sent;
            _context.next = 5;
            return _orms.Course.findAndCountAll();

          case 5:
            _ref3 = _context.sent;
            count = _ref3.count;
            rows = _ref3.rows;
            return _context.abrupt('return', { courses: courses, count: count });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getCourses(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getOneCourse = exports.getOneCourse = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    var course;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _orms.Course.findByPk(id);

          case 2:
            course = _context2.sent;
            return _context2.abrupt('return', course);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getOneCourse(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

var createOneCourse = exports.createOneCourse = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref6) {
    var title = _ref6.title,
        field = _ref6.field;
    var course;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _orms.Course.create({ title: title, field: field });

          case 2:
            course = _context3.sent;
            return _context3.abrupt('return', course);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function createOneCourse(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

var updateOneCourse = exports.updateOneCourse = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref8) {
    var id = _ref8.id,
        title = _ref8.title,
        field = _ref8.field;
    var course;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _orms.Course.findByPk(id);

          case 2:
            course = _context4.sent;

            course.title = title;
            course.field = field;
            course.save();
            return _context4.abrupt('return', course);

          case 7:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function updateOneCourse(_x4) {
    return _ref7.apply(this, arguments);
  };
}();

var deleteOneCourse = exports.deleteOneCourse = function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
    var course;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _orms.Course.destroy({
              where: { id: id }
            });

          case 2:
            course = _context5.sent;
            return _context5.abrupt('return', course);

          case 4:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function deleteOneCourse(_x5) {
    return _ref9.apply(this, arguments);
  };
}();