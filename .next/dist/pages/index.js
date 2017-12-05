'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _color = require('../lib/color');

var _color2 = _interopRequireDefault(_color);

var _colorSwitch = require('../color-switch');

var _colorSwitch2 = _interopRequireDefault(_colorSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_layout2.default, null, _react2.default.createElement('h1', { style: { color: _color2.default[0] } }, 'Im Color Switch'), _react2.default.createElement('h2', { style: { color: _color2.default[1] } }, 'Im Color Switch'), _react2.default.createElement('h3', { style: { color: _color2.default[2] } }, 'Im Color Switch'));
};