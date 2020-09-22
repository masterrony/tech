'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _StudentModel = require('../model/actions/StudentModel');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var studentController = (0, _express.Router)();

studentController.get('/', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var skip, limit, order, sort, _ref2, students, count;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            skip = Number(req.query._start);
            limit = Number(req.query._end) - skip;
            order = req.query._sort;
            sort = req.query._order;
            _context.next = 6;
            return (0, _StudentModel.getStudents)({ skip: skip, limit: limit, order: order, sort: sort });

          case 6:
            _ref2 = _context.sent;
            students = _ref2.students;
            count = _ref2.count;

            res.header('X-Total-Count', count);
            return _context.abrupt('return', res.send(students));

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

studentController.get('/:id', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var student;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _StudentModel.getOneStudent)(req.params.id);

          case 2:
            student = _context2.sent;
            return _context2.abrupt('return', res.send(student));

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

studentController.post('/', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var student;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _StudentModel.createOneStudent)(req.body);

          case 2:
            student = _context3.sent;
            return _context3.abrupt('return', res.send(student));

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

studentController.put('/:id', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var student;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _StudentModel.updateOneStudent)(req.body);

          case 2:
            student = _context4.sent;
            return _context4.abrupt('return', res.send(student));

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

studentController.delete('/:id', function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var student;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _StudentModel.deleteOneStudent)(req.params.id);

          case 2:
            student = _context5.sent;
            return _context5.abrupt('return', res.send({ student: student }));

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

exports.default = studentController;
//# sourceMappingURL=studentController.js.map