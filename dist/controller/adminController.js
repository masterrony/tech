'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _express = require('express');

var _regeneratorRuntime = require('regenerator-runtime');

var _jsonwebtoken = require('jsonwebtoken');

var _verifyToken = require('../middlewares/verifyToken');

var _UserModel = require('../model/actions/UserModel');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var adminController = (0, _express.Router)();

adminController.post('/auth', function (req, res) {
  var _req$body = req.body,
      password = _req$body.password,
      username = _req$body.username;

  if (password != process.env.ADMIN_PASSWORD || username != process.env.ADMIN_USERNAME) return res.json({ scs: 0 });

  var token = (0, _jsonwebtoken.sign)({ iat: Math.floor(Date.now() / 1000) }, process.env.APP_KEY, { expiresIn: '12h' });

  return res.json({ scs: 1, token: token });
});

adminController.get('/users', _verifyToken.verifyToken, function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var skip, limit, sort, order, _ref2, users, totalCount;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            skip = Number(req.query._start);
            limit = Number(req.query._end) - skip;
            sort = req.query._sort == 'id' ? '_id' : req.query._sort;
            order = req.query._sort == 'ASC' ? -1 : 1;
            _context.next = 6;
            return (0, _UserModel.getUsers)({ skip: skip, limit: limit, sort: sort, order: order });

          case 6:
            _ref2 = _context.sent;
            users = _ref2.users;
            totalCount = _ref2.totalCount;

            users = users.map(function (user) {
              return _extends({}, user, { id: user._id });
            });
            res.header('X-Total-Count', totalCount);
            return _context.abrupt('return', res.send(users));

          case 12:
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

adminController.get('/users/:id', _verifyToken.verifyToken, function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _UserModel.getOneUser)(req.params.id);

          case 2:
            user = _context2.sent;

            user = _extends({}, user, { id: user._id });
            return _context2.abrupt('return', res.send(user));

          case 5:
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

adminController.put('/users/:id', _verifyToken.verifyToken, function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _UserModel.updateOneUser)(req.body);

          case 2:
            user = _context3.sent;

            user = _extends({}, user, { id: user._id });
            return _context3.abrupt('return', res.send(user));

          case 5:
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

adminController.delete('/users/:id', _verifyToken.verifyToken, function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _UserModel.deleteOneUser)(req.params.id);

          case 2:
            user = _context4.sent;

            user = _extends({}, user, { id: user._id });
            return _context4.abrupt('return', res.send(user));

          case 5:
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

exports.default = adminController;
//# sourceMappingURL=adminController.js.map