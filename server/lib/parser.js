"use strict";

var _xml2json = _interopRequireDefault(require("xml2json"));

var _index = _interopRequireDefault(require("./index.js"));

var _readFile = _interopRequireDefault(require("read-file"));

var _write = _interopRequireDefault(require("write"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Read and parse XML file contents
(0, _readFile.default)(_index.default.source, function (err, buffer) {
  //TODO: process file reading errors
  // xml to json string
  var string = _xml2json.default.toJson(buffer);

  var json = JSON.parse(string);
  var parsed = parseContents(json);

  _write.default.promise('db.json', parsed).then(function () {//TODO: process errors
  });
});

var parseContents = function parseContents(json) {
  // Remove top 'AuditFile' key
  var parsed = json['AuditFile']; // Delete unused and conflicting keys

  delete parsed['xmlns:xsi'];
  delete parsed['xmlns:xsd'];
  delete parsed['xsi:schemaLocation'];
  delete parsed['xmlns']; // Move 'MasterFiles' up one level

  var MasterFiles = parsed.MasterFiles;
  delete parsed.MasterFiles;
  parsed = _objectSpread({}, parsed, MasterFiles); // Move 'TaxTable' up one level

  var TaxTable = parsed.TaxTable;
  delete parsed.TaxTable;
  parsed = _objectSpread({}, parsed, TaxTable);
  return JSON.stringify(parsed);
};