"use strict";

var _jsonServer = _interopRequireDefault(require("json-server"));

var _readFile = _interopRequireDefault(require("read-file"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = _jsonServer.default.create();

var router = _jsonServer.default.router('db.json');

var middlewares = _jsonServer.default.defaults({
  noCors: false
});

var db = router.db.__wrapped__;
server.use((0, _cors.default)()); //Custom route test

server.get('/echo', function (req, res) {
  res.jsonp(req.query);
}); //Average sales value

server.get('/sales/average-sales-value', function (req, res) {
  var _db$SourceDocuments$S = db.SourceDocuments.SalesInvoices,
      NumberOfEntries = _db$SourceDocuments$S.NumberOfEntries,
      TotalCredit = _db$SourceDocuments$S.TotalCredit;
  var averageSalesValue = TotalCredit / NumberOfEntries;
  res.jsonp({
    averageSalesValue: averageSalesValue
  });
});
server.use(middlewares);
server.use(router);
server.listen(3000, function () {
  console.log('Server running at http://localhost:3000');
});