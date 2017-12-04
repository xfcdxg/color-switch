'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nostep = exports.els = exports.el = exports.elForEach = exports.attr = exports.transHex2Rgb = undefined;

var _replace2 = require('ramda/src/replace');

var _replace3 = _interopRequireDefault(_replace2);

var _join2 = require('ramda/src/join');

var _join3 = _interopRequireDefault(_join2);

var _gte2 = require('ramda/src/gte');

var _gte3 = _interopRequireDefault(_gte2);

var _indexOf2 = require('ramda/src/indexOf');

var _indexOf3 = _interopRequireDefault(_indexOf2);

var _lte2 = require('ramda/src/lte');

var _lte3 = _interopRequireDefault(_lte2);

var _compose2 = require('ramda/src/compose');

var _compose3 = _interopRequireDefault(_compose2);

var _or2 = require('ramda/src/or');

var _or3 = _interopRequireDefault(_or2);

var _map2 = require('ramda/src/map');

var _map3 = _interopRequireDefault(_map2);

var _hexRgb = require('hex-rgb');

var _hexRgb2 = _interopRequireDefault(_hexRgb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transHex2Rgb = exports.transHex2Rgb = function transHex2Rgb(colorList) {
  return (0, _map3.default)(function (color) {
    if ((0, _or3.default)((0, _compose3.default)((0, _lte3.default)(0), (0, _indexOf3.default)('#'))(color), (0, _compose3.default)((0, _gte3.default)(0), (0, _indexOf3.default)('rgb'))(color))) {
      return 'rgb(' + (0, _compose3.default)((0, _join3.default)(', '), _hexRgb2.default)(color) + ')';
    }
    return color;
  }, colorList);
};
// get/set attribute
var attr = exports.attr = function attr(el, n, v) {
  if (v) {
    el.setAttribute(n, v);
  } else {
    return el.getAttribute(n) || '';
  }
};

// element collection forEach
var elForEach = exports.elForEach = function elForEach(cb, els) {
  for (var i = 0; i < els.length; i++) {
    var _el = els[i];
    cb(_el);
  }
};

var elBy = function elBy(method, selector, container) {
  return container[method](selector);
};

var el = exports.el = function el(selector, container) {
  return elBy('querySelector', selector, container);
};

var els = exports.els = function els(selector, container) {
  return elBy('querySelectorAll', selector, container);
};

var nostep = exports.nostep = function nostep(str) {
  return (0, _replace3.default)(/ /g, '', str);
};