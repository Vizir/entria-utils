'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmpty = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _is_date = require('date-fns/is_date');

var _is_date2 = _interopRequireDefault(_is_date);

var _Arrays = require('./Arrays');

var Arrays = _interopRequireWildcard(_Arrays);

var _Dates = require('./Dates');

var Dates = _interopRequireWildcard(_Dates);

var _Objects = require('./Objects');

var Objects = _interopRequireWildcard(_Objects);

var _Strings = require('./Strings');

var Strings = _interopRequireWildcard(_Strings);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmpty = exports.isEmpty = function isEmpty(value) {
  if (typeof value === 'undefined' || value === null) {
    return true;
  }

  if ((0, _is_date2.default)(value)) {
    return Dates.isEmpty(value);
  }

  if (Array.isArray(value)) {
    return Arrays.isEmpty(value);
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    return Objects.isEmpty(value);
  }

  if (typeof value === 'string') {
    return Strings.isEmpty(value);
  }

  return false;
};