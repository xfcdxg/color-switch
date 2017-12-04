'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _replace2 = require('ramda/src/replace');

var _replace3 = _interopRequireDefault(_replace2);

var _join2 = require('ramda/src/join');

var _join3 = _interopRequireDefault(_join2);

var _forEach2 = require('ramda/src/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

var _addIndex2 = require('ramda/src/addIndex');

var _addIndex3 = _interopRequireDefault(_addIndex2);

var _prop2 = require('ramda/src/prop');

var _prop3 = _interopRequireDefault(_prop2);

var _equals2 = require('ramda/src/equals');

var _equals3 = _interopRequireDefault(_equals2);

var _not2 = require('ramda/src/not');

var _not3 = _interopRequireDefault(_not2);

var _compose2 = require('ramda/src/compose');

var _compose3 = _interopRequireDefault(_compose2);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// update style sheet
exports.default = function (fromColorList, toColorList, target) {
  if ((0, _compose3.default)(_not3.default, (0, _equals3.default)('STYLE'), (0, _prop3.default)('tagName'))) return;

  (0, _addIndex3.default)(_forEach3.default)(function (fromColor, i) {
    var regExp = new RegExp((0, _compose3.default)(toLower, (0, _join3.default)('|'), _.transHex2Rgb)(fromColor), 'g');
    target.innerHTML = (0, _replace3.default)(regExp, toColorList[i], target.innerHTML);
  }, fromColorList);
};