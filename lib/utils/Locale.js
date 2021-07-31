'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOCAL_STORAGE_LOCALE = 'entria-utils-v1-locale';

var GENERAL = exports.GENERAL = 'GENERAL';
var BRAZIL = exports.BRAZIL = 'BRAZIL';

var set = exports.set = function set() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : GENERAL;

  localStorage.setItem(LOCAL_STORAGE_LOCALE, locale);
};

var get = exports.get = function get() {
  return localStorage.getItem(LOCAL_STORAGE_LOCALE) || GENERAL;
};