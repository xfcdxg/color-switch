'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _not2 = require('ramda/src/not');

var _not3 = _interopRequireDefault(_not2);

var _equals2 = require('ramda/src/equals');

var _equals3 = _interopRequireDefault(_equals2);

var _prop2 = require('ramda/src/prop');

var _prop3 = _interopRequireDefault(_prop2);

var _join2 = require('ramda/src/join');

var _join3 = _interopRequireDefault(_join2);

var _indexOf2 = require('ramda/src/indexOf');

var _indexOf3 = _interopRequireDefault(_indexOf2);

var _lte2 = require('ramda/src/lte');

var _lte3 = _interopRequireDefault(_lte2);

var _toUpper2 = require('ramda/src/toUpper');

var _toUpper3 = _interopRequireDefault(_toUpper2);

var _compose2 = require('ramda/src/compose');

var _compose3 = _interopRequireDefault(_compose2);

var _forEach2 = require('ramda/src/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

var _addIndex2 = require('ramda/src/addIndex');

var _addIndex3 = _interopRequireDefault(_addIndex2);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localFromColorList = [];
var localToColorList = [];

var getTo = function getTo(color, to) {
  (0, _addIndex3.default)(_forEach3.default)(function (fromColor, idx) {
    color = (0, _compose3.default)(_.nostep, _toUpper3.default)(color);
    if ((0, _compose3.default)((0, _lte3.default)(0), (0, _indexOf3.default)(color), _.nostep, _toUpper3.default, (0, _join3.default)(''), _.transHex2Rgb)(fromColor)) {
      to = localToColorList[idx];
    }
  }, localFromColorList);

  return to;
};
var diffAttr = function diffAttr(attrName) {
  return function (el) {
    var to = (0, _compose3.default)(getTo, toUpperCase)((0, _.attr)(el, attrName));
    if (to) {
      (0, _.attr)(el, attrName, to);
    }
  };
};
var diffStyle = function diffStyle(styleName) {
  return function (el) {
    var to = (0, _compose3.default)(getTo, _toUpper3.default, (0, _prop3.default)(styleName), getComputedStyle)(el);

    if (to) {
      el.style[styleName] = to;
    }

    return el;
  };
};

var processEl = function processEl(el) {
  if ((0, _compose3.default)((0, _equals3.default)('PATH'), _toUpper3.default, (0, _prop3.default)('tagName'))(el)) {
    diffAttr('fill')(el);
  } else {
    (0, _compose3.default)(diffStyle('backgroundColor'), diffStyle('color'), diffStyle('borderColor'))(el);
  }
};

exports.default = function (fromColorList, toColorList, target) {
  // if not HTMLElement
  if ((0, _compose3.default)(_not3.default, (0, _equals3.default)(1), (0, _prop3.default)('nodeType'))(target)) return;

  localFromColorList = fromColorList;
  localToColorList = toColorList;

  // self
  processEl(target);
  // children
  (0, _.elForEach)(function (el) {
    return processEl(el);
  }, (0, _.els)('*', target));
};