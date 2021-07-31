'use strict';

var _utils = require('../../../test/utils');

var _Strings = require('../Strings');

var Strings = _interopRequireWildcard(_Strings);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

beforeEach(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt('return', (0, _utils.setupTest)());

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));

it('isEmpty - should return true if null', function () {
  expect(Strings.isEmpty(null)).toMatchSnapshot();
});

it('isEmpty - should return true if undefined', function () {
  expect(Strings.isEmpty(undefined)).toMatchSnapshot();
});

it('isEmpty - should return true if empty string', function () {
  expect(Strings.isEmpty('')).toMatchSnapshot();
});

it('isEmpty - should return true if spaces string', function () {
  expect(Strings.isEmpty('   ')).toMatchSnapshot();
});

it('isEmpty - should return false if filled', function () {
  expect(Strings.isEmpty('awesome')).toMatchSnapshot();
});

it('isEmpty - should return false if 0', function () {
  expect(Strings.isEmpty('0')).toMatchSnapshot();
});

it('isAlpha - should return true if valid', function () {
  expect(Strings.isAlpha('Fábio Assunção')).toMatchSnapshot();
});

it('isAlpha - should return false if invalid', function () {
  expect(Strings.isAlpha('Fábio Assunção #@*&')).toMatchSnapshot();
});

it('isEmail - should return true if valid', function () {
  expect(Strings.isEmail('john@doe.com')).toMatchSnapshot();
});

it('isEmail - should return false if invalid', function () {
  expect(Strings.isEmail('fake@d.c.b')).toMatchSnapshot();
});

it('uppercaseFirstLetter', function () {
  expect(Strings.uppercaseFirstLetter('barney stinson')).toMatchSnapshot();
});

it('capitalize', function () {
  expect(Strings.capitalize('barney stinson')).toMatchSnapshot();
});

it('numbers', function () {
  expect(Strings.numbers('1, 2, 3, Un pasito p\' adelante. 1, 2, 3, Un pasito p\' atrás.')).toMatchSnapshot();
});