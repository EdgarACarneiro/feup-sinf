"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _commandLineArgs = _interopRequireDefault(require("command-line-args"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var optionDefinitions = [{
  name: 'source',
  alias: 's',
  type: String,
  defaultValue: 'db.xml'
}];
var options = (0, _commandLineArgs.default)(optionDefinitions);
var _default = options;
exports.default = _default;