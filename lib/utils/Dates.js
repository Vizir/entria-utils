'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.extract = extract;
exports.parse = parse;
exports.isValid = isValid;
exports.isFuture = isFuture;
exports.isPast = isPast;
exports.compare = compare;
exports.isEmpty = isEmpty;

var _is_valid = require('date-fns/is_valid');

var _is_valid2 = _interopRequireDefault(_is_valid);

var _is_future = require('date-fns/is_future');

var _is_future2 = _interopRequireDefault(_is_future);

var _is_past = require('date-fns/is_past');

var _is_past2 = _interopRequireDefault(_is_past);

var _compare_asc = require('date-fns/compare_asc');

var _compare_asc2 = _interopRequireDefault(_compare_asc);

var _Locale = require('./Locale');

var Locale = _interopRequireWildcard(_Locale);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitizeConfig = function sanitizeConfig(config) {
  var sanitizedConfig = _extends({}, config);

  if (!sanitizedConfig.locale) {
    sanitizedConfig.locale = Locale.get();
  }

  return sanitizedConfig;
};

function extract(value) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var sanitizedConfig = sanitizeConfig(config);

  // brazil = dd/mm/yyyy
  if (sanitizedConfig.locale === Locale.BRAZIL) {
    return {
      day: value.substr(0, 2),
      month: value.substr(3, 2),
      year: value.substr(6, 4)
    };
  }

  // general = yyyy-mm-dd
  return {
    day: value.substr(8, 2),
    month: value.substr(5, 2),
    year: value.substr(0, 4)
  };
}

function parse(value) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (value && typeof value === 'string') {
    var _extract = extract(value, config),
        _day = _extract.day,
        _month = _extract.month,
        _year = _extract.year;

    return new Date(_year, parseInt(_month, 10) - 1, _day);
  }

  return new Date(value);
}

function isValid(date) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var isValidFns = (0, _is_valid2.default)(parse(date, config));

  var _extract2 = extract(date, config),
      day = _extract2.day,
      month = _extract2.month,
      year = _extract2.year;

  var toCompare = new Date(year, parseInt(month - 1, 10), day, 0, 0, 0, 0);
  var dayMatches = toCompare.getDate() === parseInt(day, 10);
  var monthMatches = toCompare.getMonth() + 1 === parseInt(month, 10);
  var yearMatches = toCompare.getFullYear() === parseInt(year, 10);

  return isValidFns && dayMatches && monthMatches && yearMatches;
}

function isFuture(date) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _is_future2.default)(parse(date, config));
}

function isPast(date) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _is_past2.default)(parse(date, config));
}

function compare(dateLeft, dateRight) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return (0, _compare_asc2.default)(parse(dateLeft, config), parse(dateRight, config));
}

function isEmpty(date) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return date === undefined || date === null || !(0, _is_valid2.default)(parse(date, config));
}