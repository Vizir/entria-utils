'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var concat = exports.concat = function concat(objectOne, objectTwo) {
  var concatenated = _extends({}, objectOne);

  Object.keys(objectTwo).forEach(function (key) {
    if (_typeof(concatenated[key]) === 'object') {
      concatenated[key] = _extends({}, concatenated[key], objectTwo[key]);
    } else {
      concatenated[key] = objectTwo[key];
    }
  });

  return concatenated;
};

var clear = exports.clear = function clear(dirtyObject) {
  var hasValue = function hasValue(value) {
    if (value === undefined || value === null || value.length === 0 || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === _typeof({}) && Object.keys(value).length === 0) {
      return false;
    }

    return true;
  };

  return Object.keys(dirtyObject).filter(function (key) {
    return hasValue(dirtyObject[key]);
  }).reduce(function (acc, key) {
    return _extends({}, acc, _defineProperty({}, key, dirtyObject[key]));
  }, {});
};

var isEmpty = exports.isEmpty = function isEmpty(value) {
  return value === undefined || value === null || Object.keys(value).length === 0;
};