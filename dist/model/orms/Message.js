'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var MessageSchema = new _mongoose.Schema({
  from: { type: _mongoose.Schema.Types.ObjectId, required: true },
  to: { type: _mongoose.Schema.Types.ObjectId, required: true },
  textFrom: { type: String, default: '' },
  textTo: { type: String, default: '' },
  read: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
});

exports.default = (0, _mongoose.model)('Message', MessageSchema);
//# sourceMappingURL=Message.js.map