'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isEmpty = exports.isEmpty = function isEmpty(value) {
  return value === undefined || value === null || value.trim().length === 0;
};

var isAlpha = exports.isAlpha = function isAlpha(value) {
  return (/^[a-zA-ZÁÉÍÓÚáéíóúÃÕãõçÇ ]+$/.test(value)
  );
};

var isEmail = exports.isEmail = function isEmail(value) {
  return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  );
};

var uppercaseFirstLetter = exports.uppercaseFirstLetter = function uppercaseFirstLetter(text) {
  return '' + text.charAt(0).toUpperCase() + text.slice(1);
};

var capitalize = exports.capitalize = function capitalize(text) {
  return text.toLowerCase().split(' ').map(function (word) {
    return uppercaseFirstLetter(word);
  }).join(' ');
};

var numbers = exports.numbers = function numbers(value) {
  return value.replace(/\D/g, '');
};