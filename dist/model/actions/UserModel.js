'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteOneUser = exports.updateOneUser = exports.getOneUser = exports.getUsers = exports.getUserList = exports.setOnline = exports.setPubKey = exports.auth = undefined;

var _regeneratorRuntime = require('regenerator-runtime');

var _User = require('../schemas/User');

var _User2 = _interopRequireDefault(_User);

var _MessageModel = require('./MessageModel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var auth = exports.auth = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2, cb) {
    var deviceId = _ref2.deviceId,
        phone = _ref2.phone,
        password = _ref2.password;
    var user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User2.default.findOne({ deviceId: deviceId }).exec();

          case 2:
            user = _context.sent;

            if (user) {
              _context.next = 14;
              break;
            }

            _context.next = 6;
            return _User2.default.findOne({ phone: phone }).exec();

          case 6:
            user = _context.sent;

            if (!user) {
              _context.next = 9;
              break;
            }

            return _context.abrupt('return', cb({ scs: 0, msg: 'Unknown Device!' }));

          case 9:
            user = new _User2.default({ deviceId: deviceId, phone: phone, password: password });
            _context.next = 12;
            return user.save();

          case 12:
            user = _context.sent;
            return _context.abrupt('return', cb({ scs: 0, msg: 'Please wait until allowed.', user: user }));

          case 14:
            if (!(user.phone !== phone)) {
              _context.next = 16;
              break;
            }

            return _context.abrupt('return', cb({ scs: 0, msg: 'Unknown Phone!' }));

          case 16:
            if (user.verifyPassword(password)) {
              _context.next = 18;
              break;
            }

            return _context.abrupt('return', cb({ scs: 0, msg: 'Wrong Password!' }));

          case 18:
            if (user.allowed) {
              _context.next = 20;
              break;
            }

            return _context.abrupt('return', cb({ scs: 0, msg: 'Please wait until allowed.' }));

          case 20:
            return _context.abrupt('return', cb({
              scs: 1,
              user: { id: user._id, pubKey: user.pubKey }
            }));

          case 21:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function auth(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var setPubKey = exports.setPubKey = function setPubKey(_ref3) {
  var user = _ref3.user,
      pubKey = _ref3.pubKey;

  (0, _MessageModel.destructMsgToUser)(user);
  _User2.default.findByIdAndUpdate(user, { pubKey: pubKey }, function (err) {
    if (!!err) throw err;
  });
};

var setOnline = exports.setOnline = function setOnline(_ref4) {
  var user = _ref4.user,
      status = _ref4.status;

  _User2.default.findByIdAndUpdate(user, { online: status }, function (err) {
    if (!!err) throw err;
  });
};

var getUserList = exports.getUserList = function getUserList(user, cb) {
  _User2.default.find({ _id: { $ne: user } }, '_id phone online pubKey').lean().exec().then(function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(users) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _MessageModel.getUsersWithLastMessages)({ users: users, target: user });

            case 2:
              users = _context2.sent;
              _context2.next = 5;
              return (0, _MessageModel.getCompleteUsers)({ users: users, target: user });

            case 5:
              users = _context2.sent;
              return _context2.abrupt('return', cb(users));

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  }()).catch(function (err) {
    throw err;
  });
};

var getUsers = exports.getUsers = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref7) {
    var skip = _ref7.skip,
        limit = _ref7.limit,
        sort = _ref7.sort,
        order = _ref7.order;
    var users, totalCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _User2.default.find({}, '_id phone deviceId online allowed created_at', { skip: skip, limit: limit }).sort([[sort, order]]).lean().exec();

          case 2:
            users = _context3.sent;
            _context3.next = 5;
            return _User2.default.find({}).lean().exec();

          case 5:
            _context3.next = 7;
            return _context3.sent.length;

          case 7:
            totalCount = _context3.sent;
            return _context3.abrupt('return', { users: users, totalCount: totalCount });

          case 9:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function getUsers(_x4) {
    return _ref6.apply(this, arguments);
  };
}();

var getOneUser = exports.getOneUser = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
    var user;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _User2.default.findById(id).lean().exec();

          case 2:
            user = _context4.sent;
            return _context4.abrupt('return', user);

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function getOneUser(_x5) {
    return _ref8.apply(this, arguments);
  };
}();

var updateOneUser = exports.updateOneUser = function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref10) {
    var id = _ref10.id,
        allowed = _ref10.allowed;
    var user;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _User2.default.findByIdAndUpdate(id, { allowed: allowed }).exec();

          case 2:
            user = _context5.sent;
            return _context5.abrupt('return', user);

          case 4:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function updateOneUser(_x6) {
    return _ref9.apply(this, arguments);
  };
}();

var deleteOneUser = exports.deleteOneUser = function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
    var user;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _User2.default.findByIdAndRemove(id).exec();

          case 2:
            user = _context6.sent;
            return _context6.abrupt('return', user);

          case 4:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));

  return function deleteOneUser(_x7) {
    return _ref11.apply(this, arguments);
  };
}();
//# sourceMappingURL=UserModel.js.map