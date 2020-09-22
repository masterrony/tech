'use strict';

var _http = require('http');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _dbInstance = require('./middlewares/dbInstance');

var _dbInstance2 = _interopRequireDefault(_dbInstance);

var _appMiddleware = require('./middlewares/appMiddleware');

var _appMiddleware2 = _interopRequireDefault(_appMiddleware);

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

var _web = require('./routes/web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var app = new _express2.default();
app.use(_appMiddleware2.default);
app.use('/', _web2.default);
app.use('/api', _api2.default);
app.set('view engine', 'ejs');

_dbInstance2.default.authenticate().then(function () {
  return console.log('database connected');
}).catch(function (err) {
  return console.log(err);
});

var server = (0, _http.createServer)(app);
var PORT = process.env.PORT || 3333;
server.listen(PORT, function () {
  console.log('server is running on port : ' + PORT);
});
//# sourceMappingURL=app.js.map