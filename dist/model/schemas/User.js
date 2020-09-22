'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose.Schema({
  deviceId: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  online: { type: Boolean, default: false },
  allowed: { type: Boolean, default: false },
  pubKey: { type: String, default: '' },
  contacts: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  created_at: { type: Date, default: Date.now }
});

UserSchema.pre('save', function (next) {
  var user = this;

  if (!user.isModified('password')) return next();

  _bcrypt2.default.genSalt(10, function (err, salt) {
    if (!!err) return next(err);

    _bcrypt2.default.hash(user.password, salt, function (err, hash) {
      if (!!err) return next(err);

      user.password = hash;
      return next();
    });
  });
});

UserSchema.methods.verifyPassword = function (cand) {
  return _bcrypt2.default.compareSync(cand, this.password);
};

exports.default = (0, _mongoose.model)('User', UserSchema);
//# sourceMappingURL=User.js.map