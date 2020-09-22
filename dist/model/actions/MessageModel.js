'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destructMsgToUser = exports.registerMessage = exports.getMessages = exports.getCompleteUsers = exports.getUsersWithLastMessages = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('regenerator-runtime/runtime.js');

var _Message = require('../schemas/Message');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getUsersWithLastMessages = exports.getUsersWithLastMessages = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
    var users = _ref2.users,
        target = _ref2.target;
    var i, lastMessage;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 0;

          case 1:
            if (!(i < users.length)) {
              _context.next = 9;
              break;
            }

            _context.next = 4;
            return getLastMessage(target, users[i]['_id']);

          case 4:
            lastMessage = _context.sent;

            users[i] = _extends({}, users[i], { lastMessage: lastMessage });

          case 6:
            i++;
            _context.next = 1;
            break;

          case 9:
            return _context.abrupt('return', users);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getUsersWithLastMessages(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getCompleteUsers = exports.getCompleteUsers = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref4) {
    var users = _ref4.users,
        target = _ref4.target;
    var i, unreadCount;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            i = 0;

          case 1:
            if (!(i < users.length)) {
              _context2.next = 9;
              break;
            }

            _context2.next = 4;
            return getUnreadCount(users[i]['_id'], target);

          case 4:
            unreadCount = _context2.sent;

            users[i] = _extends({}, users[i], { unreadCount: unreadCount });

          case 6:
            i++;
            _context2.next = 1;
            break;

          case 9:
            return _context2.abrupt('return', users);

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getCompleteUsers(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var getMessages = exports.getMessages = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref6, cb) {
    var user = _ref6.user,
        peer = _ref6.peer;
    var allMessages, messages, i;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // mark newly received messages as read
            markAsRead(user, peer);

            // get messages
            _context3.next = 3;
            return getAllMessages(user, peer);

          case 3:
            allMessages = _context3.sent;
            messages = [];

            for (i = 0; i < allMessages.length; i++) {
              messages[i] = generateMessasge(allMessages[i], user);
            }
            return _context3.abrupt('return', cb(messages));

          case 7:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function getMessages(_x3, _x4) {
    return _ref5.apply(this, arguments);
  };
}();

var registerMessage = exports.registerMessage = function registerMessage(_ref7, cb) {
  var textFrom = _ref7.textFrom,
      textTo = _ref7.textTo,
      from = _ref7.from,
      to = _ref7.to;

  var newMessage = new _Message2.default({
    textFrom: textFrom, textTo: textTo, from: from, to: to
  });

  newMessage.save(function (err, message) {
    if (!!err) throw err;

    return cb(generateMessasge(message, to));
  });
};

var destructMsgToUser = exports.destructMsgToUser = function destructMsgToUser(_ref8) {
  var user = _ref8.user;
  return _Message2.default.deleteMany({ to: user }).exec();
};

var getLastMessage = function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(first, second) {
    var lastMessage;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Message2.default.findOne({
              $or: [{ $and: [{ from: first }, { to: second }] }, { $and: [{ from: second }, { to: first }] }]
            }, {}, { sort: { 'created_at': -1 } }).exec();

          case 2:
            lastMessage = _context4.sent;
            return _context4.abrupt('return', lastMessage);

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function getLastMessage(_x5, _x6) {
    return _ref9.apply(this, arguments);
  };
}();

var getUnreadCount = function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(from, to) {
    var unread;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Message2.default.find({ from: from, to: to, read: false }).exec();

          case 2:
            unread = _context5.sent;
            return _context5.abrupt('return', unread.length);

          case 4:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function getUnreadCount(_x7, _x8) {
    return _ref10.apply(this, arguments);
  };
}();

var markAsRead = function markAsRead(to, from) {
  return _Message2.default.updateMany({ from: from, to: to }, { read: true }).exec();
};

var getAllMessages = function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(first, second) {
    var toWkBefore, messages;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            // destruct old messages first
            toWkBefore = new Date(Date.now() - 12096e5);
            _context6.next = 3;
            return _Message2.default.deleteMany({
              $or: [{ $and: [{ from: first }, { to: second }] }, { $and: [{ from: second }, { to: first }] }],
              created_at: {
                $lte: toWkBefore
              }
            }).exec();

          case 3:
            _context6.next = 5;
            return _Message2.default.find({
              $or: [{ $and: [{ from: first }, { to: second }] }, { $and: [{ from: second }, { to: first }] }]
            }, {}, { sort: { 'created_at': -1 } }).lean().exec();

          case 5:
            messages = _context6.sent;
            return _context6.abrupt('return', messages);

          case 7:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));

  return function getAllMessages(_x9, _x10) {
    return _ref11.apply(this, arguments);
  };
}();

var generateMessasge = function generateMessasge(msg, user) {
  var gMsg = {};
  gMsg._id = msg._id;
  gMsg.createdAt = msg.created_at;
  gMsg.from = msg.from;
  gMsg.textFrom = msg.textFrom;
  gMsg.textTo = msg.textTo;
  gMsg.user = {
    _id: msg.from == user ? 1 : 2,
    name: 'R'
  };
  return gMsg;
};
//# sourceMappingURL=MessageModel.js.map