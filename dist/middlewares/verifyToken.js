'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var verifyToken = exports.verifyToken = function verifyToken(req, res, next) {
  var authHeader = req.headers.authorization;

  if (!authHeader) return res.status(403).json({ error: 'No access token' });

  var token = authHeader.split(' ')[1];
  try {
    if (!(0, _jsonwebtoken.verify)(token, process.env.APP_KEY)) return res.status(403).json({ error: 'Invalid access token' });
  } catch (err) {
    return res.status(403).json({ error: 'Invalid access token' });
  }

  return next();
};
//# sourceMappingURL=verifyToken.js.map