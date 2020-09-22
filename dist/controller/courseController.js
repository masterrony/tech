'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _regeneratorRuntime = require('regenerator-runtime');

var _CourseModel = require('../model/actions/CourseModel');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var courseController = (0, _express.Router)();

courseController.get('/', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var skip, limit, sort, order, _ref2, courses, totalCount;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            skip = Number(req.query._start);
            limit = Number(req.query._end) - skip;
            sort = req.query._sort;
            order = req.query._sort == 'ASC' ? -1 : 1;
            _context.next = 6;
            return (0, _CourseModel.getCourses)({ skip: skip, limit: limit, sort: sort, order: order });

          case 6:
            _ref2 = _context.sent;
            courses = _ref2.courses;
            totalCount = _ref2.totalCount;

            res.header('X-Total-Count', totalCount);
            return _context.abrupt('return', res.send(courses));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

courseController.get('/:id', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var course;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _CourseModel.getOneCourse)(req.params.id);

          case 2:
            course = _context2.sent;
            return _context2.abrupt('return', res.send(course));

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}());

courseController.post('/', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var course;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _CourseModel.createOneCourse)(req.body);

          case 2:
            course = _context3.sent;
            return _context3.abrupt('return', res.send(course));

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}());

courseController.put('/:id', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var course;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _CourseModel.updateOneCourse)(req.body);

          case 2:
            course = _context4.sent;
            return _context4.abrupt('return', res.send(course));

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function (_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}());

courseController.delete('/:id', function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var course;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _CourseModel.deleteOneCourse)(req.params.id);

          case 2:
            course = _context5.sent;
            return _context5.abrupt('return', res.send({ course: course }));

          case 4:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function (_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}());

exports.default = courseController;
//# sourceMappingURL=courseController.js.map