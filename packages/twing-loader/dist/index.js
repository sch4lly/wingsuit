"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rawLoader;

var _loaderUtils = require("loader-utils");

var _schemaUtils = _interopRequireDefault(require("schema-utils"));

var _options = _interopRequireDefault(require("./options.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function rawLoader(source) {
  var options = (0, _loaderUtils.getOptions)(this);
  var path = this.resource;
  (0, _schemaUtils["default"])(_options["default"], options, {
    name: 'Raw Loader',
    baseDataPath: 'options'
  });
  var json = JSON.stringify(source).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  var esModule = typeof options.esModule !== 'undefined' ? options.esModule : true;
  return "".concat(esModule ? 'export default' : 'module.exports =', " ").concat(json, ";\n  import { renderer, storage } from '@wingsuit-designsystem/pattern';\n  // console.log(storage.addTwig());\n  ");
}