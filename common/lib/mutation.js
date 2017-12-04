'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forEach2 = require('ramda/src/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

var _equals2 = require('ramda/src/equals');

var _equals3 = _interopRequireDefault(_equals2);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (rootEl, subtree, callback) {
  var _window = window,
      WebKitMutationObserver = _window.WebKitMutationObserver;


  if (WebKitMutationObserver) {
    var attrModified = function attrModified(mutation) {
      var _mutation$attributeNa = mutation.attributeName,
          attributeName = _mutation$attributeNa === undefined ? '' : _mutation$attributeNa,
          target = mutation.target,
          addedNodes = mutation.addedNodes;

      if ((0, _equals3.default)('style', attributeName)) {
        callback(target);
      }
      if (addedNodes && addedNodes.length > 0) {
        (0, _.elForEach)(function (el) {
          return callback(el);
        }, addedNodes);
      }
    };
    new WebKitMutationObserver(function (mutations) {
      return (0, _forEach3.default)(attrModified, mutations);
    }).observe(rootEl, { attributes: true, childList: true, subtree: subtree });
  } else {
    console.log('no support WebKitMutationObserver');
  }
};