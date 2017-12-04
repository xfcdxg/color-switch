'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _equals2 = require('ramda/src/equals');

var _equals3 = _interopRequireDefault(_equals2);

var _lib = require('./lib');

var _style = require('./lib/style');

var _style2 = _interopRequireDefault(_style);

var _el = require('./lib/el');

var _el2 = _interopRequireDefault(_el);

var _mutation = require('./lib/mutation');

var _mutation2 = _interopRequireDefault(_mutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var fromColorList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var toColorList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var handleProcess = function handleProcess(target) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'element';
    return ((0, _equals3.default)('element', type) ? _el2.default : _style2.default)(fromColorList, toColorList, target);
  };
  // 改变当前节点中的色值
  (0, _lib.elForEach)(function (target) {
    return handleProcess(target);
  }, (0, _lib.els)('*', document.body));
  // 改变样式表里的色值
  (0, _lib.elForEach)(function (styleSheet) {
    return handleProcess(styleSheet, 'style');
  }, (0, _lib.els)('style', document.head));

  // 监听 Body
  (0, _mutation2.default)(document.body, true, function (target) {
    return handleProcess(target);
  });
  // 监听 Head
  (0, _mutation2.default)(document.head, false, function (target) {
    return handleProcess(target, 'style');
  });
};