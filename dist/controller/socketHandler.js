'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _UserModel = require('../model/actions/UserModel');

var _MessageModel = require('../model/actions/MessageModel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (server) {
  var io = (0, _socket2.default)(server);

  io.on('connection', function (socket) {
    console.log('joined');

    socket.on('join-chat', function (_ref) {
      var id = _ref.id;

      socket.join(id);
      socket.user = id;
      (0, _UserModel.setOnline)({ user: id, status: true });
      return socket.broadcast.emit('should-update-user-list');
    });

    socket.on('get-user-list', function (_ref2) {
      var user = _ref2.user;

      if (!user) return;

      return (0, _UserModel.getUserList)(user, function (userList) {
        return socket.emit('set-user-list', userList);
      });
    });

    socket.on('get-messages', function (_ref3) {
      var user = _ref3.user,
          peer = _ref3.peer;

      return (0, _MessageModel.getMessages)({ user: user, peer: peer }, function (messages) {
        return socket.emit('set-messages', messages);
      });
    });

    socket.on('send-message', function (_ref4) {
      var user = _ref4.user,
          peer = _ref4.peer,
          _ref4$message = _ref4.message,
          textFrom = _ref4$message.textFrom,
          textTo = _ref4$message.textTo;

      return (0, _MessageModel.registerMessage)({
        textFrom: textFrom,
        textTo: textTo,
        from: user,
        to: peer
      }, function (message) {
        return io.to(peer).emit('receive-message', message);
      });
    });

    socket.on('disconnecting', function (reason) {
      var _Object$keys = Object.keys(socket.rooms),
          _Object$keys2 = _slicedToArray(_Object$keys, 2),
          roomID = _Object$keys2[0],
          user = _Object$keys2[1];

      console.log('disconnecting', user);
      if (!user) return;
      return (0, _UserModel.setOnline)({ user: user, status: false });
    });
  });
};
//# sourceMappingURL=socketHandler.js.map