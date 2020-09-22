'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scoketHandler = undefined;

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scoketHandler = exports.scoketHandler = function scoketHandler(server) {
  var io = (0, _socket2.default)(server);

  io.on('connection', function (socket) {
    console.log('joined');
  });
};
//# sourceMappingURL=chatController.js.map